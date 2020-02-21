import React from 'react';
import { IInputControl, IOptionItem } from '../models/dynamic-form-schema';

export const SelectControl: React.FunctionComponent<IInputControl> = (props) => {
  const {
    configuration,
    onChange,
    onTouched,
    value,
  } = props;

  const onChangeInternal = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onChange(event.target.value, configuration);
  };

  const onBlurInternal = (): void => {
    onTouched(configuration);
  };

  return (
    <select
      defaultValue={value as string || configuration.defaultValue || 'no-selection'}
      onChange={onChangeInternal}
      onBlur={onBlurInternal}
    >
      <option disabled value="no-selection">Please select a value...</option>
      {configuration.options?.items.map((option: IOptionItem) => (
        <option key={option.id} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};
