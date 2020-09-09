<script lang="ts">
import { h, ref, defineComponent, onMounted } from 'vue';

export default defineComponent({
  setup () {
    const count = ref(0),
          title = ref('RenderFunction');

    onMounted(() => {
      setInterval(() => {
        count.value ++
      }, 500)
    })

    return () => {
      return h(
        'div',
        [
          h('h2', title.value),
          h('p', 'count: ' + count.value)
        ]
      )
    }
  }
})
</script>