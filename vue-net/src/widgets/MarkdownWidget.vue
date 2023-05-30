<template>
  <div v-html="htmlText"></div>
</template>

<script lang="ts">
import { type WidgetProps } from "../contracts/Props";
import { computed } from "vue";

export type MarkdownWidgetProps = WidgetProps<string> & {};
export const defaultModelValue = "# My Title\n\nMy awesome **Text**...";
</script>

<script setup lang="ts">
import { marked } from "marked";

const props = withDefaults(defineProps<MarkdownWidgetProps>(), {
  modelValue: defaultModelValue,
});

const htmlText = computed(() =>
  marked.parse(props.modelValue, {
    mangle: false,
    headerIds: false,
  }),
);
</script>
