export type ViewModelProps<T> = {
  modelValue: T;
};

export type WidgetProps<T> = ViewModelProps<T> & {};

export type WidgetEditorProps<T> = WidgetProps<T> & {};
