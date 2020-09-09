<template>
  <nav class="page-nav">
    <ul class="nav-list">
      <li
        class="item"
        v-for="(route) of routes"
        :key="route"
      >
        <router-link
          :to="{ name: route }"
          class="link"
        >
          {{ route }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import routes from '@/router/routes';

export default defineComponent({
  name: 'PageNav',
  setup () {
    let state = reactive({
      routes: routes.map((route) => route.name)
    });

    return state;
  }
})
</script>

<style lang="scss" scoped>
.page-nav {
  width: 200px;
  height: 100%;
  padding: 20px 0;
  border-right: 1px solid #e1e2e3;
  overflow-y: auto;
  box-sizing: border-box;

  .nav-list {
    .item {
      .link {
        position: relative;
        display: block;
        padding: 10px 10px 10px 20px;
        line-height: 20px;

        &::before {
          content: '';
          display: none;
          position: absolute;
          left: 0;
          top: 50%;
          width: 3px;
          height: 20px;
          margin-top: -10px;
          background-color: #0098ff;
        }

        &:hover,
        &.router-link-exact-active {
          font-weight: 700;
          color: #0098ff;
        }

        &.router-link-exact-active::before {
          display: block;
        }
      }
    }
  }
}
</style>