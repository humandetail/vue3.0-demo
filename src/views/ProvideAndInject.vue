<template>
  <div class="page-container">
    <comp-header></comp-header>
    <comp-content></comp-content>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  provide
} from 'vue';

import CompHeader from '@/components/Main/ProvideAndInject/Header/index.vue';
import CompContent from '@/components/Main/ProvideAndInject/Content/index.vue';

export default defineComponent({
  components: {
    CompHeader,
    CompContent
  },

  setup () {
    provide('globalTitle', 'Provide & Inject');
    provide('globalLogo', 'Logo.');
    provide('globalContent', 'Vue3.0中，父组件通过provide(key, value)提供的值，在其任意的子孙组件里面都可以通过inject(key)来获取。');
  }
});
</script>