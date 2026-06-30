export default function (config) {
    config.setInputDirectory('src/posts');
    config.setIncludesDirectory('.');
    config.setLayoutsDirectory('../layouts');
    config.setOutputDirectory('dist');

    config.addPassthroughCopy('src/posts/**/assets/*.{min.js,min.css,jpg,png}');
    config.addPassthroughCopy({'src/layouts/**/*.min.css': 'assets/layouts'});

    config.setDataFileBaseName('data');
    config.setDataFileSuffixes(['.11tydata']);

    config.addFilter('url', (url) => `../${url}`);
};