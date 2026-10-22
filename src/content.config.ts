import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Lab', 'Collection', 'New York', 'Website']),
    year: z.number(),
    status: z.enum(['Draft', 'Active', 'Completed', 'Ongoing']),
    order: z.number(),
    externalUrl: z.url().optional(),
  }),
});

export const collections = { projects };
