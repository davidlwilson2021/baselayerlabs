# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
pnpm install

# Typecheck entire workspace (always run from root)
pnpm run typecheck

# Build everything (typecheck + all packages)
pnpm run build

# Frontend dev server
pnpm --filter @workspace/base-layer-labs run dev

# API server dev
pnpm --filter @workspace/api-server run dev

# Push DB schema changes (development only)
pnpm --filter @workspace/db run push
pnpm --filter @workspace/db run push-force   # if push conflicts

# Regenerate API client + Zod schemas from OpenAPI spec
pnpm --filter @workspace/api-spec run codegen

# Run a utility script
pnpm --filter @workspace/scripts run <script-name>

# Typecheck a single artifact
pnpm --filter @workspace/base-layer-labs run typecheck
pnpm --filter @workspace/api-server run typecheck
```

## Architecture

pnpm workspace monorepo with TypeScript composite projects. Packages are in two top-level directories:

**`artifacts/`** — deployable applications
- `base-layer-labs` (`@workspace/base-layer-labs`) — React 19 + Vite 7 + Tailwind CSS 4 frontend. This is the primary active artifact (the BaselayerLabs landing page). Uses shadcn/ui components (Radix UI primitives), wouter for routing, TanStack Query for data fetching.
- `api-server` (`@workspace/api-server`) — Express 5 API server. Routes in `src/routes/`, validated via `@workspace/api-zod`. Built with esbuild into a CJS bundle at `dist/index.cjs`.
- `mockup-sandbox` (`@workspace/mockup-sandbox`) — standalone UI sandbox for prototyping components; not deployed.

**`lib/`** — shared libraries consumed by artifacts
- `api-spec` — owns `openapi.yaml` and the Orval codegen config. Running `codegen` writes generated files into the two packages below.
- `api-client-react` — generated React Query hooks + fetch client (do not edit generated files manually).
- `api-zod` — generated Zod schemas from the OpenAPI spec (do not edit generated files manually).
- `db` — Drizzle ORM schema and PostgreSQL connection. Exports `db`, `pool`, and schema from `.`, schema-only from `./schema`.

**`scripts/`** — utility scripts (`src/*.ts`), each with a corresponding npm script entry.

## TypeScript Project References

`tsconfig.base.json` sets `composite: true` and `moduleResolution: bundler`. All packages extend it. The root `tsconfig.json` lists all packages as project references.

- **Always typecheck from the root** — `pnpm run typecheck` runs `tsc --build --emitDeclarationOnly`, which respects the dependency graph. Running `tsc` inside a single package will fail if its dependencies aren't built yet.
- `emitDeclarationOnly` — tsc only emits `.d.ts` files; actual JS is bundled by esbuild (api-server) or Vite (frontend).
- When a new package depends on another workspace package, add the dependency to its `tsconfig.json` `references` array.

## Data Flow

```
lib/api-spec/openapi.yaml
  → (orval codegen)
  → lib/api-client-react/src/generated/   (React Query hooks)
  → lib/api-zod/src/generated/            (Zod schemas)

artifacts/base-layer-labs  →  uses @workspace/api-client-react
artifacts/api-server        →  uses @workspace/api-zod, @workspace/db
```

## Frontend Path Aliases

In `artifacts/base-layer-labs`, Vite is configured with:
- `@` → `artifacts/base-layer-labs/src/`
- `@assets` → `attached_assets/` (repo root)

## Deployment

The frontend deploys to **Cloudflare Pages**:
- Build command: `pnpm --filter @workspace/base-layer-labs run build`
- Output directory: `artifacts/base-layer-labs/dist/public`
- Production branch: `master`

The `api-server` is not currently deployed. DB migrations in production are handled externally; use `push` only in development.

## Current Project State

The BaselayerLabs landing page (`artifacts/base-layer-labs`) is the active work. It showcases **GhostStack** as the flagship product (not TradeFolio — preserve that ordering). The contact form links to `greyhawkdiesel@gmail.com`. The Replit deployment is the legacy host; Cloudflare Pages is the migration target.
