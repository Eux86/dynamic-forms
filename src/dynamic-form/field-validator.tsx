import React from 'react';
import { IFieldConfiguration, ValidationFunctionType, IValidationError, IValidation } from './models/dynamic-form-schema';
import validations from './validations';

interface IProps {
  configuration: IFieldConfiguration;
  data: any;
}

export const FieldValidator: React.FunctionComponent<IProps> = (props) => {
  const {
    configuration,
    data,
    children,
  } = props;
  let validationErrors: IValidationError[] = [];
  validations.forEach((validation: ValidationFunctionType) => {
    if (validation(data, configuration)) {
      validationErrors.push({
        fieldId: configuration.id,
        // message: configuration.validations?.find((val:IValidation) => val.type === )
        // TODO: Add validation message from configuration
      })
    }
  });

  // TODO: Children should contain a function that will iterate on the errors
  return (children)
}