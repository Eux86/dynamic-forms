import { ConditionFunctionType, IFieldConfiguration, ICondition } from '../models/dynamic-form-schema';

export const fieldValueCondition: ConditionFunctionType = (configuration: IFieldConfiguration, formValues: any): boolean => {
  const condition = configuration.conditions && configuration.conditions.find((con: ICondition) => con.type === 'field-value');
  if (condition) {
    const {
      fieldId,
      value,
    } = condition;
    const fieldToCheckValue = formValues && formValues[fieldId];
    if (fieldToCheckValue == null) return false;
    return fieldToCheckValue === value;
  }
  return true;
};
