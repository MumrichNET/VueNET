<template>
  <div class="tooltip">
    <div class="flex flex-row flex-items-center">
      <MaterialSymbolsDragIndicator class="px-2 handle cursor-grab" />
      <div class="flex-1">
        <slot name="widget" v-bind="{ readModel }" />
      </div>
      <EditButton v-model="edit" class="px-2" />
    </div>
    <div class="tooltip-wrapper" v-if="edit">
      <div class="tooltip-content">
        <slot name="editor" v-bind="{ readModel, writeModel }" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" generic="TModelValue">
import MaterialSymbolsDragIndicator from "~icons/material-symbols/drag-indicator";
import { computed, ref } from "vue";
import { type WidgetEditorEmits } from "../contracts/Emits";
import { type WidgetEditorProps } from "../contracts/Props";

const props = defineProps<WidgetEditorProps<TModelValue>>();
const emits = defineEmits<WidgetEditorEmits<TModelValue>>();
const slots = defineSlots<{
  editor(props: { readModel: TModelValue | undefined; writeModel: (v: TModelValue) => any }): any;
  widget(props: { readModel: TModelValue | undefined }): any;
}>();

const edit = ref(false);
const readModel = computed(() => props.modelValue);

function writeModel(v: TModelValue) {
  emits("update:modelValue", v);
}
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
  @apply m-0 p-0;
}

.tooltip-wrapper {
  @apply text-white;
  @apply w-full
  background-color: black;
  text-align: center;
  border-radius: 6px;
  padding: 0;
  position: absolute;
  top: calc(100% + 6px);
  @apply z-36;
  @apply shadow-2xl;
}

.tooltip-wrapper::after {
  content: "";
  position: absolute;
  bottom: 100%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}

.tooltip-content {
  z-index: 1;
  @apply rounded p-2 m-0;
  @apply bg-black;
  @apply text-left;
}
</style>
