import markdownIt from "markdown-it";
import anchor from 'markdown-it-anchor';
import footnote_plugin from "markdown-it-footnote";

export default function (config) {
    config.setInputDirectory('src/posts');
    config.setIncludesDirectory('.');
    config.setLayoutsDirectory('../layouts');
    config.setOutputDirectory('dist');

    config.addPassthroughCopy('src/posts/**/assets/*.{min.js,min.css,jpg,png}');
    config.addPassthroughCopy({'src/layouts/**/*.min.css': 'assets/layouts'});

    config.setDataFileBaseName('data');
    config.setDataFileSuffixes(['.11tydata']);

    config.setLibrary(
        'md',
        markdownIt({html: true, breaks: true, linkify: true})
            .use(anchor, {permalink: anchor.permalink['headerLink']()})
            .use(footnote_plugin)
    )
};