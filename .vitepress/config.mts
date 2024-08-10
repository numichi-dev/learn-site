// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'vitepress'
import {learnSideBarConfig} from "../docs/learn/learnSideBarConfig";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Numichi.Dev",
    description: "Developing",
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

        nav: [
            {text: 'Kezdő oldal', link: '/'},
            {text: 'Frissítések', link: '/changelog'},
            {text: 'Rólam', link: '/about'}
        ],

        sidebar: {
            '/learn/': learnSideBarConfig
        },

        search: {
            provider: 'local'
        },

        outline: {
            label: 'Tartalomjegyzék',
            depth: 3,
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/numichi-dev'}
        ]
    }
})
