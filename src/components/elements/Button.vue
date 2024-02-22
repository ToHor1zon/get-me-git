<template>
  <button :class="['button-elem', typeClass]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  type: 'light' | 'dark'
}>()

const typeClass = computed(() => {
  switch(props.type) {
    case('light'):
      return 'button-elem--light'
    case('dark'):
      return 'button-elem--dark'
  }
})
</script>

<style scoped>
.button-elem {
  font-size: 16px;
  padding: 10px 40px;
  border-radius: 4px;
  text-align: center;
  font-weight: 500;
}

.button-elem--light {
  color: #0F1A44;
  background-color: #FFFFFF;
  transition: 0.3s background-color;
}

.button-elem--light:hover {
  background-color: #dddddd;
}

.button-elem--light:active {
  background-color: #b4b4b4;
}

.button-elem--dark {
  color: #FFFFFF;
  background-color: #0F1A44;
  transition: 0.3s background-color;
}

.button-elem--dark:hover {
  background-color: #192c70;
}

.button-elem--dark:active {
  background-color: #1c359b;
}

</style>