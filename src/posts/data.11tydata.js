export default {
    layout: 'default/default.html',
    eleventyComputed: {
        lang: (data) => data.page.fileSlug,
    },
}