/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  resolver: "ts-jest-resolver",
  testEnvironment: 'node',
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src$1',
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(got|p-cancelable|@szmarczak|lowercase-keys|@sindresorhus/is|form-data-encoder)/)",
  ],
  extensionsToTreatAsEsm: ['.ts'],
};
