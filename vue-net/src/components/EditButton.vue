<template>
  <div @click.stop.prevent="onClick" class="icon">
    <MaterialSymbolsEditOff v-if="model" />
    <MaterialSymbolsEdit v-else />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import MaterialSymbolsEdit from "~icons/material-symbols/edit";
import MaterialSymbolsEditOff from "~icons/material-symbols/edit-off";

const props = defineProps<{ modelValue?: boolean }>();
const emits = defineEmits<{ "update:modelValue": [v: boolean] }>();

const internalModel = ref(false);

const model = computed({
  get: () => props.modelValue || internalModel.value,
  set: (v) => {
    internalModel.value = v;
    emits("update:modelValue", v);
  },
});

function toggleModel() {
  model.value = !model.value;
}

function onClick() {
  toggleModel();
}
</script>

<style scoped>
.icon {
  @apply hover:text-red-500 cursor-pointer;
}
</style>
