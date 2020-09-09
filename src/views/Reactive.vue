<template>
  <div class="page-container">
    <h2>{{ title }}</h2>
    <div class="message">{{ message }}</div>

    <p>
      <button
        class="btn-change"
        @click="changeMessage(title)"
      >
        ChangeMessage
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive, defineComponent } from "vue";

export default defineComponent({
  name: "Reactive",
  // setup (props, context) {}
  // setup (props, { attrs, slots, emit })
  setup () {
    const state = reactive({
      title: "reactive() 用于声明一个单一的对象",
      message: "Hello Reactive.",
    });

    const changeMessage: (val: string) => void = (val: string) => {
      state.message = val;
    }

    return {
      ...toRefs(state), // 将state转换成响应式的对象
      changeMessage
    };
  },
});
</script>
