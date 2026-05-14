# Handoff

## State
- Landing page rebrand is DONE and live at https://baselayerlabs.replit.app/ (bundle `DOPIErRP`, GhostStack flagship verified). All six sections (Hero/Product/Technology/Company/Contact/Footer) use real content in the hybrid voice; Contact form opens `mailto:greyhawkdiesel@gmail.com`.
- Cloudflare Pages migration prep committed (`master` HEAD `972e513`): stripped Replit-isms from `artifacts/base-layer-labs/vite.config.ts`, added `artifacts/base-layer-labs/public/_redirects` for SPA fallback, pinned `packageManager: pnpm@11.1.1` in root `package.json`.
- Repo is a pnpm monorepo. Frontend lives in `artifacts/base-layer-labs/`.

## Next
1. **Wire up Cloudflare Pages.** dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git → `davidlwilson2021/baselayerlabs`. Production branch `master`. Build cmd `pnpm --filter @workspace/base-layer-labs run build`. Output dir `artifacts/base-layer-labs/dist/public`. Save and deploy.
2. **Verify the `*.pages.dev` URL** serves GhostStack content the same way I did for Replit (grep the JS bundle for `GhostStack`, confirm no `Quantum Processing`).
3. **Optional cleanup commits:** delete `.replit`, `.replit-artifact/`, `replit.md`, the three `@replit/vite-plugin-*` devDeps in `artifacts/base-layer-labs/package.json`, the unused `artifacts/api-server` and `artifacts/mockup-sandbox` artifacts, and the remote `baselayerlabs` branch (`git push origin --delete baselayerlabs`).

## Context
- Deploy branch is `master`. The `baselayerlabs` remote branch is vestigial (Replit's working branch with two empty "Published your App" checkpoint commits) — don't push to it.
- On macOS: `git clone https://github.com/davidlwilson2021/baselayerlabs`, `pnpm install`, then `pnpm --filter @workspace/base-layer-labs run dev`. No Windows-specific workarounds needed — those were Replit-specific.
- GhostStack (https://github.com/davidlwilson2021/ghoststack) is current flagship; TradeFolio is parallel work. Don't reverse that ordering on the site.
