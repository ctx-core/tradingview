<script lang="ts">
/**
 * To get the full graph, set:
 * min-width: 300px
 */
// https://www.tradingview.com/mediumwidgetembed/?symbols=Apple&Apple=AAPL%20&locale=en&trendLineColor=%234bafe9&underLineColor=%23dbeffb&fontColor=%2383888D&gridLineColor=%23e9e9ea&chartOnly=1&width=200px&height=calc(120px%20-%2032px)&utm_source=www.tradingview.com&utm_medium=widget_new&utm_campaign=symbol-overview
// See https://www.tradingview.com/widget/symbol-overview/
import { assign } from '@ctx-core/object'
import { each, map_andand, a_present_ } from '@ctx-core/array'
import { query_str_ } from '@ctx-core/uri'
import { hostname_ } from '@ctx-core/dom'
export let title = ''
export let locale = 'en'
export let symbol_name_aa = []
export let trendLineColor = '#4bafe9'
export let underLineColor = '#dbeffb'
export let fontColor = '#83888D'
export let gridLineColor = '#e9e9ea'
export let chartOnly = ''
export let width = '100%'
export let height = '100%'
export let utm_source = hostname_() || ''
export let utm_medium = 'widget_new'
export let utm_campaign = 'mini-symbol-overview'
$: symbols = map_andand(symbol_name_aa, '0')
$: symbol_r_name = symbol_r_name_(symbol_name_aa)
$: query =
	assign({
		locale,
		symbols,
		trendLineColor,
		underLineColor,
		fontColor,
		gridLineColor,
		chartOnly,
		width,
		height,
		utm_source,
		utm_medium,
		utm_campaign,
	}, symbol_r_name)
let query_str
$: query_str = query_str_(query)
function symbol_r_name_(symbol_name_aa:string[][]):Record<string, string> {
	const symbol_r_name:Record<string, string> = {}
	each(
		symbol_name_aa,
		symbol_name_a =>
			symbol_r_name[symbol_name_a[0]] = symbol_name_a[1])
	return symbol_r_name
}
</script>

{#if a_present_(symbol_name_aa)}
	<iframe
		{title}
		class="MediumWidget_tradingview {$$props.class||''}"
		src="https://tradingview.com/mediumwidgetembed/{query_str}"
		{width}
		{height}
		frameborder="0"
	></iframe>
	<slot></slot>
{/if}
