import React, { FunctionComponent } from 'react';
import {
  IFieldConfiguration,
  ValidationFunctionType,
} from './models/dynamic-form-schema';
import validations from './validations';
import { IValidationErrorProps } from './validation-error';

interface IProps {
  // children: (error: string) => ReactNode;
  configuration: IFieldConfiguration;
  data: any;
  children: FunctionComponent<IValidationErrorProps>;
  onFieldErrors?: (fieldId: string, error: string[]) => void;
}

export const FieldValidator: React.FunctionComponent<IProps> = (props) => {
  const {
    configuration,
    data,
    children,
    onFieldErrors,
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
  }, [configuration, data]);

  React.useEffect(() => {
    if (onFieldErrors) {
      onFieldErrors(configuration.id, validationErrors);
    }
  }, [configuration.id, validationErrors]);

  if (!children) {
    return null;
  }

  return (
    <>
      {validationErrors && validationErrors.map((error: string) => children({ error }))}
    </>
  );
};
