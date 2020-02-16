import { OnInputChangeEventType, OnInputTouchedEventType } from './event-types';

export default interface IDynamicFormSchema {
  fields: IFieldConfiguration[];
  // eslint-disable-next-line semi
}

export interface IFieldConfiguration {
  id: string;
  label?: string;
  defaultValue?: string;
  validations?: IValidation[];
  options?: IOption;
  type: FieldType;
  description?: string;
  placeholder?: string;
  required?: boolean;
  requiredErrorMessage?: string;
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

export interface IInputControl {
  onChange: OnInputChangeEventType;
  onTouched: OnInputTouchedEventType;
  configuration: IFieldConfiguration;
}

export enum ValidationType {
  pattern,
  minLength,
  maxLength,
  required
}

export interface IValidation {
  type: ValidationType;
  data?: string;
  errorMessage?: string;
}
export interface IValidationError {
  fieldId: string;
  message: string;
}

export type ValidationFunctionType = (value: any, fieldConfiguration: IFieldConfiguration) => string | undefined;

export interface IOption {
  type: 'multiple-selection' | 'single-selection',
  items: IOptionItem[];
}

export interface IOptionItem {
  id: string;
  value: string;
  label: string;
}