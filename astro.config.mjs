import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.evermeet.app',
	integrations: [
		starlight({
			title: 'evermeet :: docs',
			social: {
				github: 'https://github.com/evermeet/evermeet',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Getting Started', link: '/' },
						{ label: 'Why evermeet?', link: '/why-evermeet' },
					],
				},
				{
					label: 'Features',
					items: [
						{ label: 'Events & Calendars', link: '/features/events-calendars' },
						{ label: 'Ticket Sales and Registration', link: '/features/tickets-registration' },
						{ label: 'Speakers and Program', link: '/features/speaker-management' },
						{ label: 'Hackathon Features', link: '/features/hackathon' },
						{ label: 'For Attendees', link: '/features/for-attendees' },
					]
				},
				{
					label: 'Deployment',
					items: [
						{ label: 'Deployment Methods', link: '/deployment/methods' },
						/*{ label: 'Third-party Hosting', link: '/deployment/third-parties' },*/
						{ label: 'Docker (recommended)', link: '/deployment/docker' },
						{ label: 'Manual Deployment', link: '/deployment/manual' },

					]
				},
				{
					label: 'Operation Manual',
					items: [
						{ label: 'Instance Configuration', link: '/operation/configuration' },
						/*{ label: 'Backup & Restore', link: '/operation/backup' },*/
						/*{ label: 'Command-line Tool (cli)', link: '/operation/cli' },*/
						/*{ label: 'Performance Optimization', link: '/operation/performance' },*/
						/*{ label: 'Common Issues and Solutions', link: '/operation/common-issues' },*/
					]
				},
				{
					label: 'Federation',
					items: [
						{ label: 'Federation Overview', link: '/federation/overview' },
						{ label: 'Portable Identifiers (DID)', link: '/federation/did' },
						/*{ label: 'Communication Protocol', link: '/federation/protocol' },*/
					]
				},
				/*{
					label: 'Release Notes',
					items: [
						{ label: 'Version History', link: '/release-notes/version-history' },
						{ label: 'Future Plans', link: '/release-notes/future-plans' }
					]
				},*/
				{
					label: 'Developers',
					items: [
						{ label: 'System Architecture', link: '/developers/system-architecture' },
						/*{ label: 'Contributing Guidelines', link: '/developers/contributing' },*/
						{ label: 'Local Development Setup', link: '/developers/local-setup' },
						{ label: 'HTTP API (XRPC)', link: '/developers/xrpc' },
						/*{ label: 'Client Libraries', link: '/developers/libraries' },*/
						/*{ label: 'API Reference', link: '/developers/api-endpoints' },*/
					]
				},
			],
			
		}),
	],
});
