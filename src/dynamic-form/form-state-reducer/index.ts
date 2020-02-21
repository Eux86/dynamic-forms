
export interface IFormState {
  values: { [key: string]: string };
  errors: { [key: string]: string[] };
  touched: { [key: string]: boolean };
}

export interface IAction {
  type: 'set-errors' | 'set-value' | 'set-values' | 'set-touched';
}

export interface ISetValueAction extends IAction {
  payload: {
    fieldId: string;
    value: string;
  };
}

export interface ISetValuesAction extends IAction {
  payload: {
    [key: string]: string;
  };
}

export interface ISetErrorsAction extends IAction {
  payload: {
    fieldId: string;
    errors: string[];
  };
}

export interface ISetTouchedAction extends IAction {
  payload: {
    fieldId: string;
  };
}

export function isSetValueAction(action: IAction): action is ISetValueAction {
  return action.type === 'set-value';
}

export function isSetValuesAction(action: IAction): action is ISetValuesAction {
  return action.type === 'set-values';
}

export function isSetErrorsAction(action: IAction): action is ISetErrorsAction {
  return action.type === 'set-errors';
}

export function isSetTouchedAction(action: IAction): action is ISetTouchedAction {
  return action.type === 'set-touched';
}

export function reducer(data: IFormState, formDataAction: IAction) {
  if (isSetErrorsAction(formDataAction)) {
    const newVal = {
      ...data.errors,
      [formDataAction.payload.fieldId]: formDataAction.payload.errors,
    };
    return { ...data, errors: newVal };
  }
  if (isSetValueAction(formDataAction)) {
    const newVal = {
      ...data.values,
      [formDataAction.payload.fieldId]: formDataAction.payload.value,
    };
    return { ...data, values: newVal };
  }
  if (isSetTouchedAction(formDataAction)) {
    const newVal = {
      ...data.touched,
      [formDataAction.payload.fieldId]: true,
    };
    return { ...data, touched: newVal };
  }
  if (isSetValuesAction(formDataAction)) {
    const newVal = formDataAction.payload;
    return { ...data, values: newVal };
  }
  return data;
}
