import React from 'react';
import { GenericTextControl } from './controls/generic-text';
import { SelectControl } from './controls/select';
import { IFieldConfiguration } from './models/dynamic-form-schema';
import { OnInputChangeEventType } from './models/event-types';
import { CheckboxGroup } from './controls/checkbox-group';

interface IProps {
  configuration: IFieldConfiguration;
  onChange: OnInputChangeEventType;
}

export const DynamicInput:React.FunctionComponent<IProps> = ({ configuration, onChange }) => {
  switch (configuration.type) {
    case 'text':
    case 'number':
    case 'date':
    case 'datetime-local':
    case 'tel':
    case 'password':
    case 'email':
      return <GenericTextControl configuration={configuration} onChange={onChange} />;
    case 'options':
      switch (configuration.options?.type) {
        case 'multiple-selection':
          return <CheckboxGroup configuration={configuration} onChange={onChange} />;
        default:
          return <SelectControl configuration={configuration} onChange={onChange} />;
      }
    default:
      return <GenericTextControl configuration={configuration} onChange={onChange} />;
  }
};
