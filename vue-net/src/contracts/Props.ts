export type ViewModelProps<T> = {
  modelValue: T;
};

export type OptionalModelProps<T> = {
  modelValue?: T;
};

export type WidgetProps<T> = OptionalModelProps<T>;

export type WidgetEditorProps<T> = WidgetProps<T> & {};
