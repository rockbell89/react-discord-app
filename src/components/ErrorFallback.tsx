import React from "react";
import { FallbackProps } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}></button>
    </div>
  );
};

export default ErrorFallback;
