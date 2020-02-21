import {
  IFieldConfiguration,
  IValidation,
  ValidationType,
  ValidationFunctionType,
} from '../models/dynamic-form-schema';

export const requiredValidation: ValidationFunctionType = (value: any, fieldConfiguration: IFieldConfiguration): string | undefined => {
  // Return and pass the validation if this validation is not required for this field
  const validation = fieldConfiguration.validations?.find((item: IValidation) => item.type === ValidationType.required);
  if (!validation) {
    return undefined;
  }
  // Execute actual validation
  if (value == null || value === '' || value === false) {
    return validation.errorMessage || validation.type.toString();
  }
  return undefined;
};
