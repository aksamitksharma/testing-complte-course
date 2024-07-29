import { renderHook, act } from '@testing-library/react';
import useErrorHandler from './CustomError';

test('should initialize with initial state and handle errors', () => {
  // Render hook with initial state
  const { result } = renderHook(() => useErrorHandler(null));

  // Destructure error and handleError from hook result
  const [error, handleError] = result.current;

  // Assert that initial error is null
  expect(error).toBeNull();

  // Define a test error
  const testError = new Error('Test error');

  // Call handleError to set error state
  act(() => {
    handleError(testError);
  });

  // Assert that the error state is updated
  expect(result.current[0]).toBe(testError);
});
