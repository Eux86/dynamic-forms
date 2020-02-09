import {
  IFieldConfiguration,
  IValidation,
  ValidationType,
  ValidationFunctionType,
} from '../models/dynamic-form-schema';

export const minLengthValidation:ValidationFunctionType = (value: any, fieldConfiguration: IFieldConfiguration): boolean => {
  // Return and pass the validation if the field is empty
  if (value == null || value === '') {
    return true;
  }
  // Return and pass the validation if this validation is not required for this field
  const validation = fieldConfiguration.validations?.find((item: IValidation) => item.type === ValidationType.minValue);
  if (!validation) {
    return true;
  }
  // Extract data from configuration
  const minLength = +validation.data;
  // Execute actual validation
  return `${value}`.length >= minLength;
};
