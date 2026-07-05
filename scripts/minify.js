import { readdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join, basename, dirname } from 'node:path';
import CleanCSS from 'clean-css';
import { minify } from 'terser';

async function getFiles(directory) {
    const files = [];
    for (const entry of await readdir(directory, { withFileTypes: true })) {
        const path = join(directory, entry.name);

        if (entry.isDirectory()) {
            files.push(...await getFiles(path));
        }

        if (entry.isFile()) {
            if (entry.name.endsWith('.min.js') || entry.name.endsWith('.min.css')) {
                continue;
            }

            files.push(path);
        }
    }

    return files;
}

function getMinifiedPath(path) {
    const extension = extname(path);

    return join(dirname(path), `${basename(path, extension)}.min${extension}`);
}

async function minifyJS(path) {
    const result = await minify(await readFile(path, 'utf8'));

    console.log(result.code);
    writeFile(getMinifiedPath(path), result.code);
}

async function minifyCSS(path) {
   writeFile(getMinifiedPath(path), new CleanCSS().minify(await readFile(path, 'utf8')).styles);
}

async function minifyFile(file) {
    switch (extname(file)) {
        case '.js':
            await minifyJS(file);

            break;
        case '.css':
            await minifyCSS(file);

            break;
    }
}

async function minifyLayouts() {
    for (const file of await getFiles('src/layouts')) {
        await minifyFile(file);
    }
}

async function minifyAssets() {
    for (const file of await getFiles('src/posts')) {
        if (! file.includes('/assets/')) {
            continue;
        }

        await minifyFile(file);
    }
}

await minifyLayouts();
await minifyAssets();