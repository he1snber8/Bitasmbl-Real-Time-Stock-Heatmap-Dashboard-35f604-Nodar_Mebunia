<template><Filters @change="onFilter"/><Heatmap :apollo="$apollo" :filter="filter"/></template>
<script>
import Filters from './components/Filters.vue'
import Heatmap from './components/Heatmap.vue'
export default { components:{Filters,Heatmap}, data:()=>({filter:null}), methods:{onFilter(f){this.filter=f}} }
</script>
