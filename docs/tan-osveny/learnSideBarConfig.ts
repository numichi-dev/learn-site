import { DefaultTheme } from "vitepress";

export const learnSideBarConfig: DefaultTheme.SidebarItem[] = [
    {
        text: 'Bevezetés',
        items: [
            {
                text: 'Miről szól?',
                link: '/tan-osveny/bevezetes/mirol-szol'
            },
            {
                text: 'Nehéz szakma',
                link: '/tan-osveny/bevezetes/nehez-szakma'
            },
            {
                text: 'Ami szükséges',
                link: '/tan-osveny/bevezetes/ami-szukseges'
            },
        ]
    },
    {
        text: 'Alapok',
        items: [
            {
                text: 'Programokról',
                link: '/tan-osveny/alapok/programok'
            },
            {
                text: 'Kezdő lépések',
                collapsed: true,
                items: [
                    {
                        text: 'Program nyelvek',
                        link: '/tan-osveny/alapok/nyelvek'
                    },
                    {
                        text: 'Környezet előkészítés',
                        link: '/tan-osveny/alapok/kornyezet-elokeszites'
                    }
                ]
            },
            // {
            //     text: 'Első Lépés',
            //     link: '/tan-osveny/alapok/elso-lepes'
            // },
        ]
    },
];
