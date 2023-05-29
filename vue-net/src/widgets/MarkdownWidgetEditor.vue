<template>
  <textarea class="p-0 m-0 bg-gray-50 flex-auto" v-model="rawMarkdown" />
</template>

<script lang="ts">
import { computed } from "vue";
import { type WidgetEditorProps } from "../contracts/Props";
import { type WidgetEditorEmits } from "../contracts/Emits";

export type MarkdownWidgetEditorProps = WidgetEditorProps<string> & {};
export type MarkdownWidgetEditorEmits = WidgetEditorEmits<string> & {};
</script>

<script setup lang="ts">
const props = defineProps<MarkdownWidgetEditorProps>();
const emits = defineEmits<MarkdownWidgetEditorEmits>();

const rawMarkdown = computed({
  get: () => props.modelValue,
  set: (v) => emits("update:modelValue", v),
});
</script>
