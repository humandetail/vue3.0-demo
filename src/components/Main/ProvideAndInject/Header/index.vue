<template>
  <h2>{{ title }}</h2>
  <logo />
</template>

<script lang="ts">
import {
  inject,
  ref,
  defineComponent
} from 'vue';

import Logo from './Logo.vue';

export default defineComponent({
  name: 'CompHeader',
  components: {
    Logo
  },
  setup () {
    const title = ref(inject('globalTitle'));

    return {
      title
    }
  }
});
</script>