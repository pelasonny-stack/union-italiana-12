# Unión Italiana N°12

Sitio web de la R∴L∴ **Unión Italiana N°12** — Oriente de Buenos Aires, desde 1858.

## Stack

- Astro 5 (SSG, hybrid solo en `/api/petition`)
- Tailwind CSS 4 con tokens custom en `src/styles/tokens.css`
- TypeScript strict
- pnpm workspaces (`packages/shared` para schemas Zod, `workers/petition-handler` para el endpoint del Atrio)
- Cloudflare Pages + Cloudflare Worker + Turnstile + Resend + R2

## Desarrollo local

```sh
pnpm install
pnpm dev                 # http://localhost:4321
pnpm worker:dev          # http://localhost:8787 (Worker del Atrio)
```

## Build y verificación

```sh
pnpm check               # astro check + TS
pnpm build               # producción
pnpm test:unit           # Vitest
pnpm test:e2e            # Playwright + axe-core
```

## Estructura

Ver `/Users/gcardarelli/.claude/plans/virtual-skipping-manatee.md` para el plan completo.

## Licencia

Contenido propio bajo CC BY-NC-SA 4.0. Materiales históricos de dominio público se indican en cada caso.
