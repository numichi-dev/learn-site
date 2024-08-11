// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'vitepress'
import { sidebarConfig, topNavConfig } from "../docs/navigation";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Numichi.Dev",
    description: "Numichi.Dev - programozás, üzemeltetés, technológiai leírások, tippek és trükkök",
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
            { icon: 'github', link: 'https://github.com/numichi-dev/site' }
        ]
    }
})
