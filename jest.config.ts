module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src', '<rootDir>/__tests__'],
    testMatch: [
      '**/__tests__/**/*.ts', // Matches any files in __tests__ directories with .ts extension
      '**/?(*.)+(spec|test).ts' // Matches any files ending with .spec.ts or .test.ts
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true
  };
  