import React from 'react';
import { GenericTextControl } from './controls/generic-text';
import { SelectControl } from './controls/select';
import { IFieldConfiguration } from './models/dynamic-form-schema';
import { OnInputChangeEventType, OnInputTouchedEventType } from './models/event-types';
import { CheckboxGroup } from './controls/checkbox-group';

interface IProps {
  configuration: IFieldConfiguration;
  onChange: OnInputChangeEventType;
  onTouched: OnInputTouchedEventType;
}

export const DynamicInput:React.FunctionComponent<IProps> = ({ configuration, onChange, onTouched }) => {
  switch (configuration.type) {
    case 'text':
    case 'number':
    case 'date':
    case 'datetime-local':
    case 'tel':
    case 'password':
    case 'email':
      return <GenericTextControl configuration={configuration} onChange={onChange} onTouched={onTouched} />;
    case 'options':
      switch (configuration.options?.type) {
        case 'multiple-selection':
          return <CheckboxGroup configuration={configuration} onChange={onChange} onTouched={onTouched} />;
        default:
          return <SelectControl configuration={configuration} onChange={onChange} onTouched={onTouched} />;
      }
    default:
      return <GenericTextControl configuration={configuration} onChange={onChange} onTouched={onTouched} />;
  }
};
