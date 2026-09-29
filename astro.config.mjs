// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Netlab Activity Docs',
			social: [{ icon: 'gitlab', label: 'GitLab', href: 'https://gitlab.com/katzenhummer/academic-netlab-docs' }],
      sidebar: [
        {
          label: 'Overview',
          slug: 'overview'
        },
				{
					label: 'Labs',
					items: [
						{ label: 'Lab 01', slug: 'labs/lab01' },
						{ label: 'Lab 02', slug: 'labs/lab02' },
					],
				},
				{
					label: 'Challenges',
					items: [
						{ label: 'Challenge 01', slug: 'challenges/ch01' },
						{ label: 'Challenge 02', slug: 'challenges/ch02' },
					],
				},
			],
		}),
	],
});
