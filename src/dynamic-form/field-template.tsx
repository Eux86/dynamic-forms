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
    inputMapping,
    onFieldChanged,
    onFieldTouched,
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
        inputMapping={inputMapping}
        configuration={field}
        onChange={onFieldChanged}
        onTouched={onFieldTouched}
      />
    </>
  );
};
