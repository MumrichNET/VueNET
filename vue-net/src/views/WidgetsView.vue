<template>
  <article class="h-full flex flex-col">
    <h2>Widgets</h2>
    <div class="flex-auto flex flex-row w-full justify-evenly">
      <div class="bg-red-50 flex flex-col flex-auto p-2">
        <h3 class="text-center w-full">Templates</h3>
        <div class="flex flex-col">
          <MarkdownWidget v-model="markdown" />
          <MarkdownWidgetEditor v-model="markdown" />
        </div>
      </div>
      <div class="bg-green-50 flex flex-auto">
        <h3 class="text-center w-full">Configuration</h3>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";

// const widgets = import.meta.glob("@/widgets/*.vue");
const markdown = ref("TEST");
</script>
