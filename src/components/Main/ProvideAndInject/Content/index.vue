<template>
  <div class="content">
    <p>From Views/ProvideAndInject：{{ content }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue';

export default defineComponent({
  name: 'CompContent',
  setup () {
    const content = ref(inject('globalContent'));

    return {
      content
    }
  }
})
</script>