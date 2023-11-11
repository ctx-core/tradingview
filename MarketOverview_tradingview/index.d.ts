import type { SvelteComponent } from 'svelte'
export class MarketOverview_tradingview extends SvelteComponent<{
	symbol:string
	class?:string
	locale?:string
	width?:string
	height?:string
	showChart?:boolean
	largeChartUrl?:string
	plotLineColorGrowing?:string
	plotLineColorFalling?:string
	gridLineColor?:string
	scaleFontColor?:string
	belowLineFillColorGrowing?:string
	belowLineFillColorFalling?:string
	symbolActiveColor?:string
	isTransparent?:boolean
	tabs?:string[]
	utm_source?:string
	utm_medium?:string
	utm_campaign?:string
}> {
}
