<template><canvas ref="canvas"></canvas></template>
<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
export default { props:['apollo','filter'], mounted(){ /* init chart and subscribe to updates via this.apollo */ } }
</script>
