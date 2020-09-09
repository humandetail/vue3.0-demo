<template>
  <header class="page-header">
    <h1 class="title">{{ title }}</h1>
  </header>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup () {
    const title = ref('Vue3.0 - Composition API');

    return {
      title
    }
  }
})
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  box-sizing: border-box;

  .title {
    font-size: 30px;
    font-weight: 700;
    color: #0098ff;
  }
}
</style>