import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    draft: z.boolean().optional(),
    date: z.coerce.date(),
    category: z.array(z.string()),
  }),
});

const log = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    domain: z.string().optional(),
    summary: z.string().optional(),
    image: z.string().optional(),
    technologies: z.array(z.string()),
    link: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  blog,
  log,
  projects,
};
