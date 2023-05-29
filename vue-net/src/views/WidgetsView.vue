<template>
  <article class="h-full flex flex-col">
    <h2>Widgets</h2>
    <div class="flex-auto flex flex-row w-full justify-evenly">
      <div class="bg-red-50 flex flex-col flex-auto p-2">
        <h3 class="text-center w-full">Templates</h3>
        <div class="flex flex-col">
          <MarkdownWidget />
        </div>
      </div>
      <div class="bg-green-50 flex flex-col flex-auto p-2">
        <h3 class="text-center w-full">Configuration</h3>
        <div class="flex flex-col">
          <WidgetWrapper v-model="markdown">
            <template #editor="slot">
              <MarkdownWidgetEditor
                :modelValue="slot.readModel"
                @update:modelValue="slot.writeModel($event)"
              />
            </template>
            <template #widget="slot">
              <MarkdownWidget :modelValue="slot.readModel" />
            </template>
          </WidgetWrapper>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import WidgetWrapper from "../components/WidgetWrapper.vue";
import MarkdownWidgetEditor from "../widgets/MarkdownWidgetEditor.vue";
import MarkdownWidget from "../widgets/MarkdownWidget.vue";

// const widgets = import.meta.glob("@/widgets/*.vue");
const markdown = ref("TEST");
</script>
