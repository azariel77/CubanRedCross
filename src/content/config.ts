import { defineCollection, z } from 'astro:content';

const noticias = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  noticias,
};
