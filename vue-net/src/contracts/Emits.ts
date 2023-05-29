export type ViewModelEmits<T> = {
  "update:modelValue": [value: T];
};

export type WidgetEditorEmits<TEmits> = ViewModelEmits<TEmits> & {};
