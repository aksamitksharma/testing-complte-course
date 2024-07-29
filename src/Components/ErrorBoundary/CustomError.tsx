import { useState } from 'react';

type ErrorHandler = (err: Error) => void;

const useErrorHandler = (initialState: Error | null): [Error | null, ErrorHandler] => {
  const [error, setError] = useState<Error | null>(initialState);

  const handleError: ErrorHandler = (err: Error) => {
    setError(err);
    // console.error("Caught by useErrorHandler:", err);
  };

  return [error, handleError];
};

export default useErrorHandler;
