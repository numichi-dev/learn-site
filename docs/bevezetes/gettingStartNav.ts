import { DefaultTheme } from "vitepress";

export const gettingStartNav: DefaultTheme.SidebarItem[] = [
    {
        text: 'Bevezetés',
        items: [
            {
                text: 'Első lépések',
                link: '/bevezetes/elso-lepesek'
            },
            {
                text: 'A Programokról',
                link: '/bevezetes/a-programokrol'
            },
            {
                text: 'Válasszunk nyelvet',
                link: '/bevezetes/valasszunk-nyelvet'
            },
        ]
    },
    {
        text: 'Előkészítés',
        items: [
            {
                text: 'Fejlesztői környezet',
                link: '/bevezetes/fejlesztoi-kornyezet'
            },
            {
                text: 'Nyelvi környezet',
                link: '/bevezetes/nyelvi-kornyezet'
            },
        ]
    },
];
