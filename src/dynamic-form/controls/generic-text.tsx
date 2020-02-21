import React from 'react';
import { IInputControl } from '../models/dynamic-form-schema';

export const GenericTextControl: React.FunctionComponent<IInputControl> = (props) => {
  const {
    configuration,
    onChange,
    onTouched,
    value,
  } = props;

  const onChangeInternal = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value, configuration);
  };

  const onTouchedInternal = (): void => {
    onTouched(configuration);
  };

  return (
    <input
      id={configuration.id}
      type={configuration.type}
      placeholder={configuration.placeholder}
      value={value as string || configuration.defaultValue}
      onChange={onChangeInternal}
      onBlur={onTouchedInternal}
    />
  );
};
