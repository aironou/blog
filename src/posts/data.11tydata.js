export default {
    layout: 'default/default.html',
    eleventyComputed: {
        lang: (data) => data.page.fileSlug,
        permalink: (data) => {
            if (!data.slug || !data.lang) {
                return data.permalink;
            }

            return `${data.lang}/${data.slug}/`;
        },
    },
}
