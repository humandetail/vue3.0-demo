<template>
  <div class="logo">CompHeader Sub Component&lt;{{ logo }}&gt;</div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue';

export default defineComponent({
  name: 'Logo',

  setup () {

    const logo = ref(inject('globalLogo'));

    return {
      logo
    }
  }
})
</script>