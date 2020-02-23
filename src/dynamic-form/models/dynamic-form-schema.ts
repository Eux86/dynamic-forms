import { OnInputChangeEventType, OnInputTouchedEventType } from './event-types';

export interface IDynamicFormSchema {
  fields: IFieldConfiguration[];
  // eslint-disable-next-line semi
}

export interface IFieldConfiguration {
  id: string;
  label?: string;
  defaultValue?: string;
  validations?: IValidation[];
  conditions?: ICondition[]
  options?: IOption;
  type: FieldType;
  description?: string;
  placeholder?: string;
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
  | 'multiple-selection'
  | 'single-selection'
  | 'boolean';

export interface IInputControl {
  onChange: OnInputChangeEventType;
  onTouched: OnInputTouchedEventType;
  configuration: IFieldConfiguration;
  value: string | boolean | string[];
  readonly: boolean;
}

export interface IFieldTemplate {
  field: IFieldConfiguration,
  value: string | boolean,
  inputMapping: IDynamicFieldInputs,
  onFieldChanged: OnInputChangeEventType,
  onFieldTouched: OnInputTouchedEventType,
  readonly: boolean,
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
export type ConditionFunctionType = (configuration: IFieldConfiguration, formData: any) => boolean;

export interface IOption {
  items: IOptionItem[];
}

export interface IOptionItem {
  id: string;
  value: string;
  label: string;
}

export interface ICondition {
  type: 'field-value';
  fieldId: string;
  value: string;
}

export interface IDynamicFieldInputs {
  text: React.FunctionComponent<IInputControl>,
  number: React.FunctionComponent<IInputControl>,
  date: React.FunctionComponent<IInputControl>,
  'datetime-local': React.FunctionComponent<IInputControl>,
  tel: React.FunctionComponent<IInputControl>,
  password: React.FunctionComponent<IInputControl>,
  email: React.FunctionComponent<IInputControl>,
  'single-selection': React.FunctionComponent<IInputControl>,
  'multiple-selection': React.FunctionComponent<IInputControl>,
  boolean: React.FunctionComponent<IInputControl>,
}
