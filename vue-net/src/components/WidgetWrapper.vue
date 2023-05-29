<template>
  <div class="shadow relative">
    <input type="checkbox" v-model="edit" class="absolute top-0 right-0" />
    <template v-if="edit">
      <slot name="editor" v-bind="{ readModel, writeModel }" />
    </template>
    <template v-else>
      <slot name="widget" v-bind="{ readModel }" />
    </template>
  </div>
</template>

<script setup lang="ts" generic="TModelValue">
import { computed, ref } from "vue";
import { type WidgetEditorProps } from "../contracts/Props";
import { type WidgetEditorEmits } from "../contracts/Emits";

const props = defineProps<WidgetEditorProps<TModelValue>>();
const emits = defineEmits<WidgetEditorEmits<TModelValue>>();
const slots = defineSlots<{
  editor(props: { readModel: TModelValue; writeModel: (v: TModelValue) => any }): any;
  widget(props: { readModel: TModelValue }): any;
}>();

const edit = ref(false);
const readModel = computed(() => props.modelValue);

function writeModel(v: TModelValue) {
  emits("update:modelValue", v);
}
</script>
