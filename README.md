# Calebe Araujo — Link in Bio

Página "link in bio" pessoal (Instagram / LinkedIn), com visual **Liquid Glass** inspirado na Apple: cards de vidro translúcido, sombras 3D e um fundo animado em gradiente "água/mar" usando o espectro da marca.

Stack: **Svelte 5 + TypeScript + Vite + Tailwind CSS v4** — build estático, leve, pronto para GitHub Pages.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # gera ./dist
npm run preview # serve o build localmente
```

## Editar conteúdo

- **Links** (Instagram, LinkedIn, etc.): [src/lib/links.ts](src/lib/links.ts) — `href`, `label`, `meta` e ícone de cada card.
- **Perfil** (nome, tagline, cargo): [src/App.svelte](src/App.svelte).
- **Cores, fontes, raios e animações**: tokens de marca em [src/app.css](src/app.css) (`@theme`).
- **Fundo animado**: [src/lib/LiquidBackground.svelte](src/lib/LiquidBackground.svelte).
- **Marca/lente** (avatar): [src/lib/Lens.svelte](src/lib/Lens.svelte).

## Deploy no GitHub Pages

O workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) builda e publica `dist/` automaticamente a cada push em `main`.

1. No repositório no GitHub: **Settings → Pages → Source → GitHub Actions**.
2. Faça push para `main` — o site fica em `https://<usuario>.github.io/<repositorio>/`.
3. Para usar um domínio próprio (ex.: `calebe.dev`), adicione um arquivo `public/CNAME` com o domínio e configure o DNS.
