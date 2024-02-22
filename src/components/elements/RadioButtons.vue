<template>
  <fieldset class="radio-buttons-elem">
    <template v-for="item in [1, 2, 3, 4, 5]">
      <div class="radio-buttons-elem__wrapper">
        <RadioButton v-model="selectedValue" :input-id="radioButtonName + item" class="radio-buttons-elem-item"
          type="radio" :id="item" :name="radioButtonName" :value="item" />
        <label class="radio-buttons-elem-label" :for="radioButtonName + item">{{ item }}</label>
      </div>
    </template>
  </fieldset>
</template>

<script setup lang="ts">
import RadioButton from 'primevue/radiobutton';
import { ref, inject, watch } from 'vue';


const props = defineProps<{
  radioButtonName: string
}>()

const selectedValue = ref<string>('3')

const state = inject('state')
const dataFromApi = inject('data-from-api', [])

watch(selectedValue, (val) => {
  const techName = dataFromApi!.techs[state!.currentTechIndex]

  const currentTechData = state!.techs[techName]

  const updatedData = {
    name: techName,
    skillLevel: val
  }
  state!.techs[techName] = Object.assign(currentTechData ?? {}, updatedData)
})
</script>

<style scoped>
.radio-buttons-elem {
  display: flex;
  column-gap: 10px;
  border: none;
  padding: 0;
}

.radio-buttons-elem-label {
  user-select: none;
  cursor: pointer
}

.radio-buttons-elem__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
}
</style>