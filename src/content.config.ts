import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const localized = z.object({
  title: z.string(),
  translationKey: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  excerpt: z.string().max(280),
  cover: z.string().optional(),
  draft: z.boolean().default(false),
});

const eventos = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/eventos" }),
  schema: z.object({
    title: z.string(),
    translationKey: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.object({
      venue: z.string(),
      address: z.string(),
      city: z.string(),
    }),
    kind: z.enum(["reunión-blanca", "agape", "columna-instruccion", "evento-publico", "aniversario"]),
    isPublic: z.boolean().default(true),
    cover: z.string().optional(),
    excerpt: z.string().max(280),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    ...localized.shape,
    author: z.string().default("R∴L∴ Unión Italiana N°12"),
    tags: z.array(z.string()).default([]),
    category: z
      .enum(["cronica", "efemerides", "semblanzas", "cultura", "lecturas", "archivo"])
      .default("cronica"),
  }),
});

const planchas = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/planchas" }),
  schema: z.object({
    title: z.string(),
    translationKey: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    degree: z.enum(["aprendiz", "companero", "maestro", "general"]).default("general"),
    topic: z.array(z.string()).default([]),
    excerpt: z.string().max(400),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const miembrosIlustres = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/miembros-ilustres" }),
  schema: z.object({
    name: z.string(),
    translationKey: z.string(),
    birthYear: z.number(),
    deathYear: z.number().optional(),
    roles: z.array(z.string()).default([]),
    portrait: z.string().optional(),
    summary: z.string().max(400),
    sources: z
      .array(z.object({ title: z.string(), url: z.string().url().optional() }))
      .default([]),
    confirmedMember: z.boolean().default(true),
    order: z.number().default(99),
  }),
});

const paginas = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/paginas" }),
  schema: z.object({
    title: z.string(),
    translationKey: z.string(),
    description: z.string().max(280),
    heroImage: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { eventos, blog, planchas, miembrosIlustres, paginas };
