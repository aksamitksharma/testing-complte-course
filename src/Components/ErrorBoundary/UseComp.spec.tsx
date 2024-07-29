import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UseComp from './UseComp';

const mockSetError = jest.fn();
// const mockUseErrorHandler = 

jest.mock('./CustomError', () => ({
  __esModule: true,
  default: (initialState: Error | null) => {
    return [
      initialState,
      (err: Error) => mockSetError(err)
    ];
  },
}));

describe('UseComp', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders data loaded text', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, name: 'John Doe' }]),
      })
    ) as jest.Mock;

    render(<UseComp />);

    expect(screen.getByText('Data will be loaded here')).toBeInTheDocument();

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
  });

  
});
