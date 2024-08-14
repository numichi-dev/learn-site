// noinspection JSUnusedGlobalSymbols

import {defineConfig} from 'vitepress'
import {sidebarConfig, topNavConfig} from "../docs/navigation";
import {seo} from "../properties";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Numichi.Dev",
    description: seo.description,
    assetsDir: 'assets',
    srcDir: 'docs',
    lang: 'hu-HU',
    sitemap: {
        hostname: 'https://numichi.dev'
    },

    markdown: {
        math: true
    },

    head: [
        ['meta', {name: 'keywords', content: seo.keywords}],
        ['meta', {name: 'author', content: 'Numichi'}],
        ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
        ['meta', {property: 'og:title', content: 'Numichi.Dev'}],
        ['meta', {property: 'og:description', content: seo.description}],
        ['meta', {property: 'og:type', content: 'website'}],
        ['meta', {property: 'og:url', content: 'https://numichi.dev'}],
        //['meta', { property: 'og:image', content: 'https://numichi.dev/og-image.png' }],
        ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
        ['meta', {name: 'twitter:title', content: 'Numichi.Dev'}],
        ['meta', {name: 'twitter:description', content: seo.description}],
        //['meta', { name: 'twitter:image', content: 'https://numichi.dev/twitter-image.png' }]
    ],

    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        lastUpdated: {
            text: 'Frissítve',
            formatOptions: {
                timeZone: 'Europe/Budapest',
                hour12: false,
                formatMatcher: 'basic',
            }
        },

        footer: {
            message: 'Powered by VitePress & GitHub Pages',
        },

        docFooter: {
            prev: 'Következő',
            next: 'Előző'
        },

        nav: topNavConfig,
        sidebar: sidebarConfig,

        search: {
            provider: 'local'
        },

        outline: {
            label: 'Tartalomjegyzék',
            depth: 3,
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/numichi-dev/site'}
        ]
    }
})
