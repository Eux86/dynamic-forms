import React from 'react';
import {
  IFieldConfiguration,
  IValidation,
  ValidationType,
  IFieldTemplate,
} from './models/dynamic-form-schema';
import { DynamicInput } from './dynamic-input';

export const FieldTemplate: React.FunctionComponent<IFieldTemplate> = (props) => {
  const {
    field,
    value,
    inputMapping,
    onFieldChanged,
    onFieldTouched,
    readonly,
  } = props;

  const isRequired = (configuration: IFieldConfiguration) => (
    configuration.validations && configuration.validations.find((validation: IValidation) => validation.type === ValidationType.required)
  );

  return (
    <>
      <label htmlFor={field.id}>
        {field.label}
        {isRequired(field) ? '*' : ''}
      </label>
      <DynamicInput
        value={value}
        inputMapping={inputMapping}
        configuration={field}
        onChange={onFieldChanged}
        onTouched={onFieldTouched}
        readonly={readonly}
      />
    </>
  );
};
