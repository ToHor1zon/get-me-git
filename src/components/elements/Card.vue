<template>
  <div class="card-elem">
    <h2 class="card-elem__title">
      {{ titleVal }}
    </h2>
    <hr class="divider card-elem__divider">
    <slot name="cardBody">
      insert content
    </slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  titleVal: string
}>()
</script>

<style scope>
.card-elem {
  border-radius: 35px;
  padding: 60px 70px;
  background-color: #F2F6FD;
  box-shadow: 0px 24px 73px 0px rgba(148, 174, 216, .3);
}

.card-elem__title {
  font-size: 26px;
  line-height: 26px;
  margin-bottom: 18px;
}

.card-elem__divider {
  margin: 0;
  margin-bottom: 48px;
}
</style>