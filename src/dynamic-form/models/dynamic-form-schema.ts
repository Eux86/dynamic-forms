
export default interface IDynamicFormSchema {
  fields: IFieldConfiguration[];
// eslint-disable-next-line semi
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

export type FieldType =
    'text'
  | 'number'
  | 'datetime-local'
  | 'email'
  | 'password'
  | 'tel'
  | 'date'
  | 'options'
  | 'boolean';

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
export interface IValidationError {
  fieldId: string;
  message: string;
}

export interface IOption {
  id: string;
  value: string;
  label: string;
}
