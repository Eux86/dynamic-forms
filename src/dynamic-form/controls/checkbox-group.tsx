import React from 'react';
import { IInputControl, IOptionItem } from '../models/dynamic-form-schema';

export const CheckboxGroup: React.FunctionComponent<IInputControl> = (props) => {
  const {
    configuration,
    onChange,
    onTouched,
    value,
  } = props;

  const parseDefault = () => {
    try {
      return configuration.defaultValue && JSON.parse(configuration.defaultValue);
    } catch (_) {
      return undefined;
    }
  };

  const [state, setState] = React.useState(
    value as string[]
    || parseDefault() as string[]
    || [] as string[],
  );

  const onChangeInternal = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      checked,
      value: controlValue,
    } = event.target;
    let newState = state.slice();
    if (checked) {
      if (!state.includes(controlValue)) {
        newState = [
          ...state,
          controlValue,
        ];
      }
    } else if (state.includes(controlValue)) {
      const index = newState.indexOf(controlValue);
      if (index > -1) {
        newState.splice(index, 1);
      }
    }

    setState(newState);
    onChange(newState, configuration);
  };

  const onBlurInternal = (): void => {
    onTouched(configuration);
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
              onBlur={onBlurInternal}
            />
            {option.label}
          </label>
        ))
      }
    </>
  );
};
