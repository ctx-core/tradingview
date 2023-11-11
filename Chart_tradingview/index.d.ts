import type { SvelteComponent } from 'svelte'
export class Chart_tradingview extends SvelteComponent<{
	symbol:string
	class?:string
	id?:string
	width?:string
	height?:string
	interval?:string
	news?:string
	hidetoptoolbar?:string
	hidelegend?:string
	hidesidetoolbar?:string
	symboledit?:string
	saveimage?:string
	toolbarbg?:string
	studies?:string
	theme?:string
	style?:number
	timezone?:string
	studies_overrides?:string
	overrides?:string
	enabled_features?:string
	disabled_features?:string
	locale?:string
	utm_source?:string
	utm_medium?:string
	utm_campaign?:string
}> {
}
