<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name</div>
    <line-chart></line-chart>
  </div>
</template>

<script>
import lineChart from '../layout/components/Homepage/lineChart'
export default {
  name: 'dashboard',
  components: { lineChart }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
