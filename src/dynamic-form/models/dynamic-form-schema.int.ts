export default interface IDynamicFormSchema {
  fields: IFieldConfiguration[];
}

export interface IFieldConfiguration {
  id: string;
  label?: string;
  defaultValue?: string;
  validations?: IValidation[];
  options?: IOption[];
  type: FieldType;
  description?: string;
  placeholder?: string;
}

export enum FieldType {
  text,
  numeric,
  options,
  boolean,
}

export enum ValidationType {
  pattern,
  minValue,
  maxValue,
  required
}

export interface IValidation {
  type: ValidationType;
  data: string;
}

export interface IOption {
  id: string;
  value: string;
  label: string;
}