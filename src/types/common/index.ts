export interface Payload {
  payload: { method: string; url: string };
}

export interface ObjectGenericValuesType<ValueType> {
  [key: string | number]: ValueType;
}

export type PrepareAction<T> = (params: ObjectGenericValuesType<T>) => Payload;
