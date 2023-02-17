<script>
// See https://www.tradingview.com/widget/symbol-overview/
import { hostname_ } from '@ctx-core/dom'
export let locale = 'en'
export let symbol = null
export let width = '100%'
export let height = '100%'
export let dateRange = '1y'
export let colorTheme = 'light'
export let trendLineColor = '#37a6ef'
export let underLineColor = '#e3f2fd'
export let isTransparent = true
export let autosize = true
export let largeChartUrl = ''
export let utm_source = hostname_() || ''
export let utm_medium = 'widget_new'
export let utm_campaign = 'mini-symbol-overview'
/** @type {string} */
let query_str
$: query_str = locale ? `?locale=${locale}` : ''
$: params = (
	{
		symbol,
		width,
		height,
		dateRange,
		colorTheme,
		trendLineColor,
		underLineColor,
		isTransparent,
		autosize,
		largeChartUrl,
		utm_source,
		utm_medium,
		utm_campaign,
	}
)
$: params_json = params && JSON.stringify(params)
$: r_str = params_json && encodeURIComponent(params_json)
</script>

{#if symbol}
	<iframe
		class="MiniSymbolOverview_tradingview {$$props.class||''}"
		title="{symbol}"
		src="https://tradingview.com/embed-widget/mini-symbol-overview/{query_str}#{r_str}"
		{width}
		{height}
		frameborder="0"
	></iframe>
	<slot></slot>
{/if}
