import React, { FunctionComponent } from 'react';
import {
  IFieldConfiguration,
  ValidationFunctionType,
} from './models/dynamic-form-schema';
import { IValidationErrorProps } from './validation-error';

interface IProps {
  configuration: IFieldConfiguration;
  data: any;
  children: FunctionComponent<IValidationErrorProps>;
  onFieldErrors?: (configuration: IFieldConfiguration, error: string[]) => void;
  validations: ValidationFunctionType[],
  formData: any,
}

export const FieldValidator: React.FunctionComponent<IProps> = (props) => {
  const {
    configuration,
    data,
    children,
    onFieldErrors,
    validations,
    formData,
  } = props;

  const validationErrors: string[] = React.useMemo(() => {
    const temp: string[] = [];
    validations.forEach((validation: ValidationFunctionType) => {
      const result = validation(data, configuration);
      if (result) {
        temp.push(result);
      }
    });

    return temp;
  }, [configuration, data, validations]);

  React.useEffect(() => {
    if (onFieldErrors) {
      onFieldErrors(configuration, validationErrors);
    }
  }, [configuration, onFieldErrors, validationErrors]);

  // Returns if the field was still not touched
  if (!(formData?.touched && formData?.touched[configuration.id])) {
    return null;
  }

  if (!children) {
    return null;
  }

  return (
    <>
      {validationErrors && validationErrors.map((error: string) => children({ error }))}
    </>
  );
};
