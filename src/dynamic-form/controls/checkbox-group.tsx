import React from 'react';
import { IInputControl, IOptionItem } from '../models/dynamic-form-schema';

export const CheckboxGroup: React.FunctionComponent<IInputControl> = (props) => {
  const {
    configuration,
    onChange,
  } = props;

  const [state, setState] = React.useState([] as string[]);

  const onChangeInternal = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      checked,
      value,
    } = event.target;
    let newState = state.slice();
    if (checked) {
      if (!state.includes(value)) {
        newState = [
          ...state,
          value,
        ];
      }
    } else if (state.includes(value)) {
      const index = newState.indexOf(value);
      if (index > -1) {
        newState.splice(index, 1);
      }
    }

    setState(newState);
    onChange(newState, configuration);
  };


  return (
    <>
      {
        configuration.options?.items.map((option: IOptionItem) => (
          <label key={option.id} htmlFor={option.id}>
            <input
              type="checkbox"
              name={configuration.id}
              value={option.value}
              checked={state.includes(option.value)}
              onChange={onChangeInternal}
            />
            {option.label}
          </label>
        ))
      }
    </>
  );
};
