import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";


const blog = defineCollection({
    loader: glob({pattern: '*.md', base: "src/content/blog"}),
    schema: () => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string()
    })
});

const project = defineCollection({
    loader: file("src/content/projects.json"),
    schema: () => z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        liveUrl: z.string(),
        sourceCodeUrl: z.string()
    })
})

const socialMedia = defineCollection({
    loader: file("src/content/socialmedia.json"),
    schema: () => z.object({
        id: z.string(),
        icon: z.string(),
        url: z.string(),
        label: z.string()
    })
 })

export const collections = {
    blog, 
    project,
    socialMedia
}