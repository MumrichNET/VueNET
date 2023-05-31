<template>
  <article class="flex flex-col h-full">
    <h2>Widgets</h2>
    <div class="flex-auto flex flex-row w-full justify-evenly">
      <div class="flex flex-col flex-auto bg-red-50 p-2">
        <h3 class="text-center w-full">Templates</h3>
        <Draggable
          :clone="onClone"
          :group="{ name: 'widgets', pull: 'clone', put: false }"
          :list="templates"
          class="dragzone"
          dragClass="drag"
          ghostClass="ghost"
          handle=".handle"
          itemKey="widget"
        >
          <template #item="{ element }">
            <component class="shadow handle" :is="element.widget" />
          </template>
        </Draggable>
      </div>
      <div class="flex flex-col flex-auto bg-green-50 p-2">
        <h3 class="text-center w-full">Configuration</h3>
        <Draggable
          :list="configuration"
          class="dropzone"
          dragClass="drag"
          ghostClass="ghost"
          group="widgets"
          handle=".handle"
          itemKey="id"
        >
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
import Draggable from "vuedraggable";
import MarkdownWidget from "../widgets/MarkdownWidget.vue";
import MarkdownWidgetEditor from "../widgets/MarkdownWidgetEditor.vue";
import WidgetWrapper from "../components/WidgetWrapper.vue";
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
.handle {
  @apply cursor-grap;
}

.dragzone,
.dropzone {
  @apply flex flex-col;
  @apply border border-dashed border-gray-600;
  @apply h-full p-2;
}

.dragzone > * {
  @apply cursor-grab;
}

.dragzone > *,
.dropzone > * {
  @apply shadow;
  @apply my-2 px-2;
  @apply bg-white;
}

.ghost {
  @apply bg-pink;
}

.drag {
  @apply bg-blue;
}
</style>
