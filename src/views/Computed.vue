<template>
  <div class="page-container">
    <h2>Computed</h2>
    <div class="message">
      FirstName: {{ firstName }}
      <br />
      LastName: {{ lastName }}
      <br />
      FullName: {{ fullName }}
    </div>
    <button @click="changeName(fullName === 'Wu Wang' ? 'San Zhang' : 'Wu Wang')">ChangeName</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, isRef, ref } from 'vue';

export default defineComponent({
  name: 'Computed',

  setup () {
    let firstName = ref('San'),
        lastName = ref('Zhang');

    // 当参数为一个函数时，返回一个只读的ref值
    const zero = computed(
      () => 0
    )
    console.log(isRef(zero));

    // 当参数为一个含有 getter 和 setter 函数的对象时，
    // computed 返回一个可读写的ref值
    const fullName = computed({
      get () {
        return firstName.value + ' ' + lastName.value;
      },

      set (name: string) {
        let [first, last] = name.split(' ');

        firstName.value = first;
        lastName.value = last;
      }
    });

    const changeName = function (name: string) {
      fullName.value = name;
    }

    return {
      firstName,
      lastName,
      fullName,
      changeName
    }
  }
});
</script>