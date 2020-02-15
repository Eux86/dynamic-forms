import {
  IFieldConfiguration,
  IValidation,
  ValidationType,
  ValidationFunctionType,
} from '../models/dynamic-form-schema';

export const minLengthValidation:ValidationFunctionType = (value: any, fieldConfiguration: IFieldConfiguration): string | undefined => {
  // Return and pass the validation if the field is empty
  if (value == null || value === '') {
    return undefined;
  }
  // Return and pass the validation if this validation is not required for this field
  const validation = fieldConfiguration.validations?.find((item: IValidation) => item.type === ValidationType.minLength);
  if (!validation) {
    return undefined;
  }
  if (!validation.data) {
    throw new Error('MinLength validation shuld have a data attribute');
  }
  // Extract data from configuration
  const minLength = +validation.data;
  // Execute actual validation
  return (`${value}`.length < minLength) ? validation.errorMessage || validation.type.toString() : undefined;
};
