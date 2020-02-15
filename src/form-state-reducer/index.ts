
export interface IFormState {
  values: { [key: string]: string };
  errors: { [key: string]: string[] };
}

export interface IAction {
  type: 'set-errors' | 'set-values';
}

export interface ISetValueAction extends IAction {
  payload: {
    fieldId: string;
    value: string;
  };
}

export interface ISetErrorsAction extends IAction {
  payload: {
    fieldId: string;
    errors: string[];
  };
}

export function isSetValueAction(action: IAction): action is ISetValueAction {
  return action.type === 'set-values';
}

export function isSetErrorsAction(action: IAction): action is ISetErrorsAction {
  return action.type === 'set-errors';
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
  return data;
}
