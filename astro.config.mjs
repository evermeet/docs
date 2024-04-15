import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.evermeet.app',
	integrations: [
		starlight({
			title: 'evermeet Docs',
			social: {
				github: 'https://github.com/evermeet/evermeet',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Getting Started', link: '/' },
					],
				},
				{
					label: 'Features',
					items: [
						{ label: 'Event Management', link: '/features/event-management' },
						{ label: 'Ticket Sales and Registration', link: '/features/ticket-sales' },
						{ label: 'Speaker and Program Management', link: '/features/speaker-management' },
						{ label: 'Payment Processing', link: '/features/payment-processing' }
					]
				},
				{
					label: 'Federation',
					items: [
						{ label: 'Federation Overview', link: '/federation/overview' },
						{ label: 'Portable Identifiers (DID)', link: '/federation/portable-identifiers' },
					]
				},
				{
					label: 'Deployment',
					items: [
						{ label: 'Choosing a Deployment Method', link: '/deployment/methods' },
						{ label: 'Third-party Hosting', link: '/deployment/third-parties' },
						{ label: 'Docker (recommended)', link: '/deployment/docker' },
						{ label: 'Manual Deployment', link: '/deployment/manual' },
						{ label: 'Backup & Restore', link: '/deployment/backup-restore' },
						{ label: 'Customizations and Extensions', link: '/deployment/customizations' },
						{ label: 'Performance Optimization', link: '/deployment/performance' },
						{ label: 'Common Issues and Solutions', link: '/deployment/common-issues' }
					]
				},
				{
					label: 'Developers',
					items: [
						{ label: 'System Architecture', link: '/developers/system-architecture' },
						{ label: 'Contributing Guidelines', link: '/developers/contributing' },
						{ label: 'Local Development Setup', link: '/developers/local-setup' },
						{ label: 'API Endpoints', link: '/developers/api-endpoints' },
					]
				},
				{
					label: 'Release Notes',
					items: [
						{ label: 'Version History', link: '/release-notes/version-history' },
						{ label: 'Future Plans', link: '/release-notes/future-plans' }
					]
				},
			],
			
		}),
	],
});
