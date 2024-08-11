import { learnSideBarConfig } from "./tan-osveny/learnSideBarConfig";
import { DefaultTheme } from "vitepress";

export const topNavConfig: DefaultTheme.NavItem[] = [
    { text: 'Kezdő oldal', link: '/' },
    { text: 'Rólam', link: '/rolam' }
]

export const sidebarConfig: DefaultTheme.Sidebar = {
    '/tan-osveny/': learnSideBarConfig
}
