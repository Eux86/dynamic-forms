import React, { FunctionComponent } from 'react';
import {
  IFieldConfiguration,
  ValidationFunctionType,
  IValidationError,
} from './models/dynamic-form-schema';
import validations from './validations';
import { IValidationErrorProps } from './validation-error';

interface IProps {
  // children: (error: string) => ReactNode;
  configuration: IFieldConfiguration;
  data: any;
  children: FunctionComponent<IValidationErrorProps>;
}

export const FieldValidator: React.FunctionComponent<IProps> = (props) => {
  const {
    configuration,
    data,
    children,
  } = props;
  if (!children) {
    return null;
  }
  const validationErrors: IValidationError[] = [];
  validations.forEach((validation: ValidationFunctionType) => {
    const result = validation(data, configuration);
    if (result) {
      validationErrors.push({
        fieldId: configuration.id,
        message: result,
      });
    }
  });

  return (
    <>
      {validationErrors.map((error: IValidationError) => children({ error: error.message }))}
    </>
  );
};
