# Numichi.Dev

Elérhető: [https://numichi.dev](https://numichi.dev)

# Powered by

Az oldal egy Markdown alapú [VitePress](https://vitepress.dev/) engine generál és GitHup Page hosztol.

# Hozzájárulás

## Futtatás
Gondolom látni szeretnéd, hogy az oldalad hogyan fog kinézni, mielőtt hozzájárulnál az oldalhoz. Ehhez a következőket kell tenned:

```bash
yarn install # vagy npm install / pnpm install
```

Ezután a következő paranccsal indíthatod az oldalt:

```bash
yarn docs:dev # vagy npm run docs:dev / pnpm docs:dev
```

> **Megjegyzés:** A GitHub Action `yarn`-t használ a build során.

## Oldal konfigurálása
Minden leírást megtalálható [VitePress dokumentációban](https://vitepress.dev/guide/configuration.html), de kiemek pár hasznosabbat:

- [Routing](https://vitepress.dev/guide/routing)
- [Markdown Extensions](https://vitepress.dev/guide/markdown)
- [Last Updated](https://vitepress.dev/reference/default-theme-last-updated)-et manuálisan kell átírni UTC idő szerint, ha van dátum. A VitePress magyar időzóna
  szerint rászámol még 1 (vagy nyári szerint 2) órát.

### SEO beállítások
- Routing esetén az URL-ek legyenek magyarul
- Meta leírások és címek is legyenek magyarul

## Nyelvi szabályok
Az alap megközelítés az, hogy magyarok által írt oldal magyaroknak, közben feltételezve azt, hogy az olvasók nem minden esetben ismerhetik az angol nyelvet vagy
bizonyos IT szakszavakat. Így minden esetben hivatkozni vagy zárójelben szükséges megmagyarázni az annak jelentését.

Mindezek mellet az oldalhoz hozzájárulók szabadon használhatják a saját stílusukat, de a tartalomnak érthetőnek és követhetőnek kell lennie.
