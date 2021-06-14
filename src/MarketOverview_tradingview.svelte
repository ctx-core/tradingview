<script lang="ts">
import { a_present_ } from '@ctx-core/array'
export let symbol:string
export let locale = 'en'
export let width = '100%'
export let height = '100%'
export let showChart = true
export let largeChartUrl = ''
export let plotLineColorGrowing = 'rgba(60, 188, 152, 1)'
export let plotLineColorFalling = 'rgba(255, 74, 104, 1)'
export let gridLineColor = 'rgba(233, 233, 234, 1)'
export let scaleFontColor = 'rgba(214, 216, 224, 1)'
export let belowLineFillColorGrowing = 'rgba(60, 188, 152, 0.05)'
export let belowLineFillColorFalling = 'rgba(255, 74, 104, 0.05)'
export let symbolActiveColor = 'rgba(242, 250, 254, 1)'
export let isTransparent = true
export let tabs = []
export let utm_source =
	typeof window === 'object' ? window.location.hostname : ''
export let utm_medium = 'widget_new'
export let utm_campaign = 'market-overview'
let query_str
$: query_str = ({ locale })=>locale ? `?locale=${locale}` : ''
$: params = (
	{
		width,
		height,
		showChart,
		largeChartUrl,
		plotLineColorGrowing,
		plotLineColorFalling,
		gridLineColor,
		scaleFontColor,
		belowLineFillColorGrowing,
		belowLineFillColorFalling,
		symbolActiveColor,
		isTransparent,
		tabs,
		utm_source,
		utm_medium,
		utm_campaign,
	}
)
$: params_json = params && JSON.stringify(params)
$: hash_str = params_json && encodeURIComponent(params_json)
</script>

{#if symbol && a_present_(tabs)}
	<iframe
		class="MarketOverview_tradingview {$$props.class||''}"
		title="{symbol}"
		src="https://tradingview.com/embed-widget/market-overview/{query_str}#{hash_str}"
		{width}
		{height}
		frameborder="0"
	></iframe>
	<slot></slot>
{/if}
