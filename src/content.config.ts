import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			cover: z.union([image(), z.string()]).optional(),
			tags: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			tagline: z.string(),
			hero: z.union([image(), z.string()]).optional(),
			repo: z.string().url().optional(),
			demo: z.string().url().optional(),
			tech: z.array(z.string()).default([]),
			status: z.enum(['measured', 'planned', 'tbd']).default('measured'),
			category: z.string().optional(),
			role: z.string().optional(),
			period: z.string().optional(),
			order: z.number().default(99),
			featured: z.boolean().default(false),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog, projects };
