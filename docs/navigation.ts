import { learnSideBarConfig } from "./learn/learnSideBarConfig";
import { DefaultTheme } from "vitepress";

export const topNavConfig: DefaultTheme.NavItem[] = [
    { text: 'Kezdő oldal', link: '/' },
    { text: 'Rólam', link: '/about' }
]

export const sidebarConfig: DefaultTheme.Sidebar = {
    '/learn/': learnSideBarConfig
}
