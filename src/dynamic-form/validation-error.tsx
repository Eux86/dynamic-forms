import React from 'react';

export interface IValidationErrorProps {
  error: string;
}

export const ValidationError: React.FunctionComponent<IValidationErrorProps> = (props) => {
  const {
    error,
  } = props;
  return (
    <p>{error}</p>
  );
};
