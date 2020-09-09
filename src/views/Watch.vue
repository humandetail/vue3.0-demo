 <template>
  <div class="page-container">
    <h2>Watch</h2>
    <p>
      <input type="text" v-model="keyword" />
    </p>
    <div class="message">
      {{ message }}
    </div>
  </div>

  <watch-on-cleanup />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

import WatchOnCleanup from '@/components/Main/WatchOnCleanup.vue';

export default defineComponent({
  name: 'Watch',
  components: {
    WatchOnCleanup
  },
  setup () {
    const keyword = ref(''),
          message = ref('输入1秒之后将结果显示.'),
          loading = ref(false);
          
    const stop = watch(
      keyword,
      (keyword, prevKeyword) => {
        setTimeout(() => {
          if (keyword === '') {
            message.value = '输入1秒之后将结果显示.'
          } else {
            message.value = keyword
          }
        }, 1000)
      }
    );

    return {
      keyword,
      message
    }
  }
});
</script>