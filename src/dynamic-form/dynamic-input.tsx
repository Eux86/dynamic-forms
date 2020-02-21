import React from 'react';
import { IFieldConfiguration, IInputControl, IDynamicFieldInputs } from './models/dynamic-form-schema';
import { OnInputChangeEventType, OnInputTouchedEventType } from './models/event-types';

interface IProps {
  configuration: IFieldConfiguration;
  onChange: OnInputChangeEventType;
  onTouched: OnInputTouchedEventType;
  inputMapping: IDynamicFieldInputs;
  value: string | boolean;
}

export const DynamicInput: React.FunctionComponent<IProps> = ({
  configuration,
  onChange,
  onTouched,
  inputMapping,
  value,
}) => {
  const Control: React.FunctionComponent<IInputControl> = inputMapping[configuration.type];
  return <Control value={value} configuration={configuration} onChange={onChange} onTouched={onTouched} />;
};
