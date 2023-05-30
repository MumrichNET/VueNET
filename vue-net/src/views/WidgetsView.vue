<template>
  <article class="flex flex-col h-full">
    <h2>Widgets</h2>
    <div class="flex-auto flex flex-row w-full justify-evenly">
      <div class="flex flex-col flex-auto bg-red-50 p-2">
        <h3 class="text-center w-full">Templates</h3>
        <Draggable
          class="dropzone"
          :list="templates"
          :group="{ name: 'widgets', pull: 'clone', put: false }"
          itemKey="widget"
          :clone="onClone"
        >
          <template #item="{ element }">
            <component class="shadow" :is="element.widget" />
          </template>
        </Draggable>
      </div>
      <div class="flex flex-col flex-auto bg-green-50 p-2">
        <h3 class="text-center w-full">Configuration</h3>
        <div id="quill"></div>
        <Draggable :list="configuration" class="dropzone" group="widgets" itemKey="id">
          <template #item="{ element }">
            <WidgetWrapper v-model="element.modelValue">
              <template #editor="slot">
                <component
                  :is="element.editor"
                  :modelValue="slot.readModel"
                  @update:modelValue="slot.writeModel($event)"
                />
              </template>
              <template #widget="slot">
                <component :is="element.widget" :modelValue="slot.readModel" />
              </template>
            </WidgetWrapper>
          </template>
        </Draggable>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import MarkdownWidget from "../widgets/MarkdownWidget.vue";
import MarkdownWidgetEditor from "../widgets/MarkdownWidgetEditor.vue";
import WidgetWrapper from "../components/WidgetWrapper.vue";
import Draggable from "vuedraggable";
import { ref, type Component, markRaw } from "vue";
import { v4 as uuidv4 } from "uuid";

type TemplateItem = { widget: Component; editor: Component };
type ConfigurationItem = { id: string; widget: Component; editor: Component; modelValue: any };

const templates = ref<TemplateItem[]>([
  { widget: markRaw(MarkdownWidget), editor: markRaw(MarkdownWidgetEditor) },
]);
const configuration = ref<ConfigurationItem[]>([]);

function onClone(t: TemplateItem): ConfigurationItem {
  const response = {
    id: uuidv4(),
    widget: t.widget,
    editor: t.editor,
    modelValue: undefined,
  };

  console.log(response);

  return response;
}
</script>

<style scoped>
.dropzone {
  @apply flex flex-col;
  @apply border border-dashed border-gray-600;
  @apply h-full p-2;
}

.dropzone > * {
  @apply cursor-move;
  @apply bg-white;
  @apply hover:bg-gray-50;
  @apply rounded my-1 p-2;
}
</style>
