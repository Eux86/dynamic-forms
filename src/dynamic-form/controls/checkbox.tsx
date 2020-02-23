import React from 'react';
import { IInputControl } from '../models/dynamic-form-schema';

export const CheckboxControl: React.FunctionComponent<IInputControl> = (props) => {
  const {
    configuration,
    onChange,
    onTouched,
    value,
    readonly,
  } = props;

  const onChangeInternal = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.checked, configuration);
  };

  const onTouchedInternal = (): void => {
    onTouched(configuration);
  };

  return (
    <input
      disabled={readonly}
      id={configuration.id}
      type="checkbox"
      placeholder={configuration.placeholder}
      checked={value as boolean || configuration.defaultValue?.toLowerCase() === 'true'}
      onChange={onChangeInternal}
      onBlur={onTouchedInternal}
    />
  );
};
