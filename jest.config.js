const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^@/styles/(.*)$': '<rootDir>/styles/$1',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['cypress'],
}

module.exports = createJestConfig(customJestConfig)
