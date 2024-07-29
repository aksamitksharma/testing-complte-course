// module.exports = {
//     preset: 'ts-jest',
//     testEnvironment: 'jsdom',
//     setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   };

  module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      "^.+\\.tsx?$": "babel-jest"
    },
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  };
  
  
  