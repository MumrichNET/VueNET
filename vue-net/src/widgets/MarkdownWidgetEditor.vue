<template>
  <div class="flex w-full">
    <textarea class="flex-grow m-0 p-2 min-h-24" v-model="markdown" />
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { type WidgetEditorProps } from "../contracts/Props";
import { type WidgetEditorEmits } from "../contracts/Emits";

export type MarkdownWidgetEditorProps = WidgetEditorProps<string> & {};
export type MarkdownWidgetEditorEmits = WidgetEditorEmits<string> & {};
</script>

<script setup lang="ts">
import MarkdownWidget, { defaultModelValue } from "./MarkdownWidget.vue";
import TurndownService from "turndown";
import { marked } from "marked";
import debounce from "lodash.debounce";

const props = defineProps<MarkdownWidgetEditorProps>();
const emits = defineEmits<MarkdownWidgetEditorEmits>();

const turndownService = new TurndownService();

// const html = computed({
//   get: () =>
//     marked.parse(markdown.value, {
//       mangle: false,
//       headerIds: false,
//     }),
//   set: (h) => (markdown.value = turndownService.turndown(h)),
// });

const html = computed(() =>
  marked.parse(markdown.value, {
    mangle: false,
    headerIds: false,
  }),
);

const markdown = computed({
  get: () => props.modelValue ?? defaultModelValue,
  set: (v) => emits("update:modelValue", v),
});

// const updateHtml = debounce((e: any) => {
//   html.value = e.target.value;
// }, 300);
</script>
