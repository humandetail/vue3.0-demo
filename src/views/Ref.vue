<template>
  <div class="page-container">
    <h2>{{ title }}</h2>
    <div class="message">{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { 
  defineComponent, 
  isRef, onMounted, 
  reactive, 
  ref,
} from 'vue';

export default defineComponent({
  name: 'Ref',
  setup () {
    const title = ref('ref() 用于声明单一的原始值'),
          message = ref('Hello ref.');

    let nonRef= 'non-ref';

    onMounted(() => {
      setTimeout(() => {
        message.value = title.value; // 组件挂载完3s后 将message的值变成title的值

        console.log('title is ref? ', isRef(title))
        console.log('nonRef is ref? ', isRef(nonRef))
      }, 3000)
    })
    
    return {
      title,
      message
    }
  }
});
</script>