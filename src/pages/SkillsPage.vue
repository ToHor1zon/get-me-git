<template>
  <MainLayout>
    <div class="skills-page__content">
      <h1 class="skills-page__title">Навыки</h1>
      <SkillsCard :title-val="currentTechName" :key="state.currentTechIndex" class="skills-page__card" />
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import SkillsCard from '@/components/skills/SkillsCard.vue';
import type { StateType } from '@/types/state';
import { ref, computed, provide, watch } from 'vue'

const dataFromApi = ref<{
  techs: string[]
}>({
  techs: [
    'React',
    'Vue',
    'Javascript',
    'TypeScript',
    'Python',
    'NodeJS',
  ]
})

const state = ref<StateType>({
  currentTechIndex: 0,
  techs: {}
})

provide('data-from-api', dataFromApi.value)
provide('state', state.value)

const currentTechName = computed(() => dataFromApi.value.techs[state.value.currentTechIndex])

watch(() => state.value, (val) => console.log(val))

const changeCurrentTechIndex = (newVal: number) => state.value.currentTechIndex = newVal

const onNextClick = () => changeCurrentTechIndex(state.value.currentTechIndex + 1)
const onPrevClick = () => changeCurrentTechIndex(state.value.currentTechIndex - 1)

provide('button-click-handlers', { onNextClick, onPrevClick })

</script>

<style scoped>
.skills-page__content {
  margin: 100px auto 0;
  width: 600px;
}

.skills-page__title {
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 36px;
}
</style>
