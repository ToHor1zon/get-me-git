<template>
  <Card :title-val="titleVal" class="skills-card">
    <template #cardBody>
      <h3 class="skills-card__subtitle">Уровень владения</h3>
      <RadioButtons class="skills-card__level" radio-button-name="skils-card-level=selector"/>
      <h3 class="skills-card__subtitle">Опыт</h3>
      <Slider class="skills-card__experience" />
      <div class="skills-card__buttons">
        <Button @click="onPrevClick" v-if="state!.currentTechIndex > 0" type="light">Назад</Button>
        <Button @click="onNextClick" v-if="state!.currentTechIndex < dataFromApi.techs.length - 1" type="dark">Далее</Button>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/elements/Card.vue'
import Button from '@/components/elements/Button.vue'
import Slider from '@/components/elements/Slider.vue'
import RadioButtons from '@/components/elements/RadioButtons.vue';
import { inject } from 'vue';

const props = defineProps<{
  titleVal: string
}>()

const state = inject('state')
const dataFromApi = inject('data-from-api', [])

const { onNextClick, onPrevClick } = inject('button-click-handlers')

</script>

<style scoped>
.skills-card {
  width: 600px;
}

.skills-card__subtitle {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 12px;
}

.skills-card__level {
  margin-bottom: 48px;
}

.skills-card__experience {
  margin-bottom: 46px;
}

.skills-card__buttons {
  display: flex;
  column-gap: 12px;
}
</style>