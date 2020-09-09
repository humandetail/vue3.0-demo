<template>
  <div class="page-container">
    <h2>{{ title }}</h2>
    <ul class="list">
      <li
        class="item"
        v-for="(item, index) of list"
        :key="index"
      >
        <span class="old">{{ item[0] }}</span>
        <span class="divider">-></span>
        <span class="new">{{ item[1] }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { app, el } from '@/main';
import {
  defineComponent,
  reactive,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
} from 'vue';

export default defineComponent({
  name: 'LifeCycle',

  setup (props, context) {
    const list = reactive([
      ['2.x', '3.0'],
      ['beforeCreate()', 'setup()'],
      ['created()', 'setup()'],
      ['beforeMount()', 'onBeforeMount()'],
      ['mounted()', 'onMounted()'],
      ['beforeUpdate()', 'onBeforeUpdate()'],
      ['updated()', 'onUpdated()'],
      ['beforeDestroy()', 'onBeforeUnmount()'],
      ['destroyed()', 'onUnmouted()'],
      ['errorCaptured()', 'onErrorCaptured()']
    ]);

    let title = ref('LifeCycle');

    console.log('setup called.');

    onBeforeMount(() => {
      console.log('onBeforeMount');
    });

    onMounted(() => {
      console.log('onMounted');

      setTimeout(() => {
        title.value = title.value + ' has changed.';
      }, 3000);
    });

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });

    onUpdated(() => {
      console.log('onUpdated');

      setTimeout(() => {
        app.unmount(el); // 1s后卸载应用 
      }, 1000)
    });

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    })

    onUnmounted(() => {
      console.log('onUnmount');
    });

    return {
      list,
      title
    }
  },

  beforeCreate () {
    console.log('beforeCreate')
  },

  created () {
    console.log('created')
  },

  beforeMount () {
    console.log('beforeMount')
  },

  mounted () {
    console.log('mounted')
  },

  beforeUpdate () {
    console.log('beforeUpdate')
  },

  updated () {
    console.log('updated');
  },

  beforeDestroy () {
    console.log('beforeDestroy')
  },

  destroyed () {
    console.log('destroyed')
  },

  errorCaptured () {
    console.log('errorCaptured')
  }
});
</script>

<style lang="scss" scoped>
.list {
  .item {
    display: flex;
    align-items: center;
    padding: 10px 0;

    .old {
      width: 150px;
    }

    .divider {
      padding: 0 10px;
    }
  }
}
</style>