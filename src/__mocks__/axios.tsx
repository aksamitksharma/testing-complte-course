const mockReq = {
  data: [
    {
      id: 1,
      name: 'John Doe'
    },
    {
      id: 2,
      name: 'Jane Doe'
    }
  ]
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: jest.fn().mockResolvedValue(mockReq)
};
