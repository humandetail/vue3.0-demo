<template>
  <div class="page-container">
    <h2>Watch onCleanup</h2>
    <p>
      <input type="text" v-model="keyword" />
    </p>
    <div class="message">
      {{ message }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, watch
} from 'vue';

export default defineComponent({
  name: 'WatchOnCleanup',

  setup () {
    const keyword = ref(''),
          message = ref('onCleanup 实现 防抖功能');

    const asyncFunc = (val: string) => {
      return setTimeout(() => {
        message.value = val;
      }, 1000);
    } 

    const stop = watch(
      keyword,
      (keyword, prev, onCleanup) => {
        const t = asyncFunc(keyword);

        // onCleanup 如果watch监听被重复执行了，则会先清除上一次未完成的异步任务
        onCleanup(() => clearTimeout(t));
      }
    );

    // stop(); // 可以通过执行watch的返回值来结束监听动作

    return {
      keyword,
      message
    }
  }
})
</script>