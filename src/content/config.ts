import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
  }),
});

const experience = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    href: z.string().url(),
    from: z.string(),
    to: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  blog,
  experience,
};
