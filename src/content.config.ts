import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import {z} from "astro/zod"

const blog = defineCollection({
    loader: glob({base: import.meta.env.BLOG_STORAGE, pattern: "**/*.md"}),
    schema: z.object({
        title: z.string(),
        description: z.string()
    })
})

export const collections = {blog}