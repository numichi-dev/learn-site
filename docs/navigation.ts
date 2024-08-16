import { gettingStartNav } from "./bevezetes/gettingStartNav";
import { DefaultTheme } from "vitepress";

export const topNavConfig: DefaultTheme.NavItem[] = [
    { text: 'Kezdő oldal', link: '/' },
]

export const sidebarConfig: DefaultTheme.Sidebar = {
    '/bevezetes/': gettingStartNav
}
