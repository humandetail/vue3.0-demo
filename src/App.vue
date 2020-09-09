<template>
  <div id="app">
    <page-header></page-header>
    <div id="main">
      <page-nav></page-nav>
      <div class="main-wrapper">
        <router-view></router-view>
        <page-footer></page-footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PageHeader from '@/components/Header/index.vue';
import PageNav from '@/components/Nav/index.vue';
import PageFooter from '@/components/Footer/index.vue';

export default defineComponent({
  components: {
    PageHeader,
    PageNav,
    PageFooter
  }
})
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#main {
  flex: 1;
  display: flex;
  
  .main-wrapper {
    flex: 1;
    padding: 20px;
  }
}
</style>
