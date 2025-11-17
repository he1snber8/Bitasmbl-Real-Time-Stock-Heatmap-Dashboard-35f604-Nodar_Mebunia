<template><div><select v-model="s" @change="emit()"><option>All</option><option>Tech</option></select></div></template>
<script>export default { data:()=>({s:'All'}), methods:{emit(){this.$emit('change', this.s)}} }</script>
