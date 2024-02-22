<template>
  <div class="slider-elem">
    <span class="slider-elem__result">{{ selectedValue }} {{ countOfYears }}</span>
    <div class="slider-elem__wrapper">
      <Slider v-model="selectedValue" :max="20" class="w-14rem" />
      <div class="slider-elem-breakpoints">
        <span class="slider-elem-breakpoints__item">0</span>
        <span class="slider-elem-breakpoints__item">5</span>
        <span class="slider-elem-breakpoints__item">10</span>
        <span class="slider-elem-breakpoints__item">15</span>
        <span class="slider-elem-breakpoints__item">20</span>
      </div>
      <div class="slider-elem__info">
        <span>Не было опыта</span>
        <span>И выше</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Slider from 'primevue/slider'
import { wordDeclansions } from '@/utils/numbers';
import { ref, computed, inject, watch } from 'vue';
import type { ExperienceType } from '@/types/state';

const state = inject('state')
const dataFromApi = inject('data-from-api', [])

const defaultSelectedValue = 3

const selectedValue = ref<ExperienceType>(defaultSelectedValue)

const countOfYears = computed(() => wordDeclansions(selectedValue.value, ['год', 'года', 'лет']) )

watch(selectedValue, (val) => {

  const techName = dataFromApi!.techs[state!.currentTechIndex]

  const currentTechData = state!.techs[techName]

  const updatedData = {
    name: techName,
    experience: val
  }

  state!.techs[techName] = Object.assign(currentTechData ?? {}, updatedData)
})

</script>

<style scoped>
.slider-elem__result {
  display: inline-block;
  margin-bottom: 12px;
}

.slider-elem__wrapper {
  z-index: 1;
}

.slider-elem-breakpoints {
  display: flex;
  justify-content: space-between;
  margin: 10px -8px 0;
}


.slider-elem-breakpoints__item {
  width: 18px;
  font-size: 18px;
  text-align: center;
  position: relative;
  user-select: none;
}

.slider-elem-breakpoints__item:first-child {
  text-align: right;
}

.slider-elem-breakpoints__item::after {
  content: '';
  position: absolute;
  display: block;
  width: 2px;
  left: 8px;
  height: 16px;
  bottom: 32px;
  background-color: #E2E8F0;
}

.slider-elem__info {
  font-size: 14px;
  color: #00236660;
  display: flex;
  justify-content: space-between;
}

.slider-elem__info span:last-of-type {
  margin-right: -10px;
}

</style>
