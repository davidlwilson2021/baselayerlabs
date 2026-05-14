# Base Layer Labs

**The foundational layer for progress.**

Base Layer Labs is the engineering studio of Dave Wilson — a full-stack developer pursuing an MS in Data Science. The studio architects full-stack platforms and applied data systems with a focus on production-grade quality and first-principles design.

> *"Complex systems should be designed end-to-end, not assembled from defaults."*

## What We Build

Work spans four surfaces:

- **Mobile Platforms** — React Native and Expo applications built with offline-first sync, type-safe APIs, and production-grade architecture from day one.
- **API Architecture** — NestJS and GraphQL services with PostgreSQL, code-first schemas, JWT authentication, and end-to-end validation through Zod.
- **Data Modeling** — Relational schema design and normalization built from first principles. The data model is the product, not an afterthought.
- **Applied Statistics** — Graduate-level data science applied to real product surfaces: inference, modeling, and decision support.

## Current Projects

### GhostStack *(flagship)*
A serverless productivity stack that captures ad-hoc notes from work calls and converts them into structured end-of-day reports. [github.com/davidlwilson2021/ghoststack](https://github.com/davidlwilson2021/ghoststack)

### TradeFolio
A React Native + NestJS identity layer for skilled tradespeople. Parallel development alongside GhostStack.

## This Repo

The marketing and landing page site for Base Layer Labs, deployed to Cloudflare Pages.

**Stack:** React 19 · Vite 7 · Tailwind CSS 4 · TypeScript · pnpm workspaces

```bash
pnpm install
pnpm --filter @workspace/base-layer-labs run dev
```

Built output goes to `artifacts/base-layer-labs/dist/public`. Deployed via Cloudflare Pages on push to `master`.

## Contact

[greyhawkdiesel@gmail.com](mailto:greyhawkdiesel@gmail.com)
