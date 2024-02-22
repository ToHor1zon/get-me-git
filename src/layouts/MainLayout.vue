<template>
  <div class="layout">
    <LeftSidebar />
    <main class="main">
      <slot>
        
      </slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import LeftSidebar from '../components/LeftSidebar.vue';

</script>

<style>
.layout {
  display: flex;
}

.main {
  flex-grow: 1;
}
</style>