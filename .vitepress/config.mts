// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'vitepress'
import { sidebarConfig, topNavConfig } from "../docs/navigation";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Numichi.Dev",
    description: "Developing", // TODO: Write a correct description
    base: "/site/",
    assetsDir: 'assets',
    srcDir: 'docs',

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
            { icon: 'github', link: 'https://github.com/numichi-dev' }
        ]
    }
})
