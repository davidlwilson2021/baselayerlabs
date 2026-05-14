# Threat Model

## Project Overview

This repository is a pnpm monorepo with a small production web footprint: an Express 5 API (`artifacts/api-server`), a React/Vite landing page (`artifacts/base-layer-labs`), and shared OpenAPI/Drizzle libraries under `lib/`. The production API currently exposes only a public health endpoint and does not yet implement authentication, authorization, database-backed features, admin functionality, or third-party server integrations. Per project assumptions, `artifacts/mockup-sandbox` is a development-only mockup environment and is not deployed to production.

## Assets

- **Deployment integrity of production artifacts** -- the API server bundle and static frontend assets must not be modified or replaced by untrusted input.
- **Application secrets** -- `DATABASE_URL` and any future service credentials must remain server-side and must not leak into client bundles or logs.
- **Future database contents** -- the shared `lib/db` package is already wired for PostgreSQL, so any future table data will become a primary confidentiality and integrity asset once routes begin using it.
- **Visitor-submitted contact information** -- the landing page collects name, email, and message in a client-only form today; if server submission is later added, that data becomes sensitive user content.

## Trust Boundaries

- **Browser to API boundary** -- any request from a browser to `/api/*` crosses from an untrusted client into the Express server. All future state-changing or data-returning routes must enforce validation and authorization server-side.
- **API to database boundary** -- `lib/db` creates a PostgreSQL connection pool from `DATABASE_URL`. Any future API route that queries through this package must treat database access as a high-impact boundary where injection or overbroad access could expose all stored data.
- **Build-time to client boundary** -- Vite and generated API client code produce browser-delivered assets. Secrets and server-only configuration must not be embedded into frontend bundles.
- **Production to dev-only boundary** -- `artifacts/mockup-sandbox`, workspace scripts, and development Vite server settings are not production surfaces unless explicitly deployed. Security scans should skip them after confirming no production reachability.

## Scan Anchors

- **Production entry points**: `artifacts/api-server/src/index.ts`, `artifacts/api-server/src/app.ts`, `artifacts/base-layer-labs/src/main.tsx`
- **Mounted production routes**: `artifacts/api-server/src/routes/`
- **Highest-risk shared package if features expand**: `lib/db/src/index.ts` and `lib/db/src/schema/`
- **Public surface today**: landing page routes in `artifacts/base-layer-labs/src/` and `GET /api/healthz`
- **Authenticated/admin surfaces today**: none implemented
- **Usually dev-only**: `artifacts/mockup-sandbox/`, `scripts/`, generated build outputs

## Threat Categories

### Tampering

The main tampering risk is future expansion of the API beyond the current hardcoded health response. The system must continue to treat the client as untrusted: request bodies, query parameters, headers, and path values MUST be validated before they affect server behavior, database queries, or generated responses. Client-side validation in the landing page is not a security control for any future backend-backed form.

### Information Disclosure

The codebase already contains a server-side database connection and a browser-delivered frontend bundle, so keeping secrets on the server side is the primary disclosure concern. `DATABASE_URL` and any future tokens MUST remain inaccessible to browser code, generated clients, and logs. Future API responses MUST return only fields intended for the caller, and production errors MUST avoid exposing stack traces, SQL details, or internal paths.

### Denial of Service

The current API surface is tiny, but any future public endpoints will inherit DoS risk from unauthenticated internet exposure. Public routes MUST bound request sizes, avoid expensive attacker-controlled work, and apply rate limiting once they perform meaningful processing such as form submission, search, auth, or file handling.

### Elevation of Privilege

No authentication or roles exist yet, but the project is scaffolded to add API and database features later. When protected routes are introduced, authorization MUST be enforced server-side on every sensitive operation, not implied by frontend routing. All future database access MUST use safe query construction through Drizzle or equivalent parameterization, and no route should expose direct filesystem or command execution based on user input.
