<template>
  <div ref="rootEl">
    <MarkdownWidget :modelValue="markdown" />
    <QuillEditor
      v-model:content="html"
      placeholder="Compose an epic..."
      theme="bubble"
      toolbar="minimal"
      @editorChange="onEditorChange"
      contentType="html"
      :options="{ bounds: rootEl }"
    />
  </div>
</template>

<script lang="ts">
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import { computed, ref, watch } from "vue";
import { type WidgetEditorProps } from "../contracts/Props";
import { type WidgetEditorEmits } from "../contracts/Emits";

export type MarkdownWidgetEditorProps = WidgetEditorProps<string> & {};
export type MarkdownWidgetEditorEmits = WidgetEditorEmits<string> & {};
</script>

<script setup lang="ts">
import { QuillEditor } from "@vueup/vue-quill";
import MarkdownWidget, { defaultModelValue } from "./MarkdownWidget.vue";
import TurndownService from "turndown";
import { marked } from "marked";

const turndownService = new TurndownService();

const props = defineProps<MarkdownWidgetEditorProps>();
const emits = defineEmits<MarkdownWidgetEditorEmits>();

const rootEl = ref();
const html = computed({
  get: () =>
    marked.parse(markdown.value, {
      mangle: false,
      headerIds: false,
    }),
  set: (h) => (markdown.value = turndownService.turndown(h)),
});

const markdown = computed({
  get: () => props.modelValue ?? defaultModelValue,
  set: (v) => emits("update:modelValue", v),
});

function onEditorChange(foo: any) {
  console.log(foo);
}
</script>
