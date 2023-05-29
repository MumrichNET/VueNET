<template>
  <div v-html="htmlText"></div>
</template>

<script lang="ts">
import { type WidgetProps } from "../contracts/Props";
import { computed } from "vue";

export type MarkdownWidgetProps = WidgetProps<string> & {};
</script>

<script setup lang="ts">
import { marked } from "marked";

const props = withDefaults(defineProps<MarkdownWidgetProps>(), {
  modelValue: "# My Title\n\nMy awesome **Text**...",
});

const htmlText = computed(() =>
  marked.parse(props.modelValue, {
    mangle: false,
    headerIds: false,
  }),
);
</script>
