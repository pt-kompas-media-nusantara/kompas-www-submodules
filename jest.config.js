module.exports = {
  // preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  // testMatch: ['**/*.spec.(js|ts)'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/components/{!(kompas-www-submodules-sample.vue),}/*.vue'],
  coverageReporters: ['lcov', 'text'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'js',
    'vue',
    'json',
    'ts'
  ],
	transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
    ".*\\.(vue)$": "vue-jest"
  },
  testEnvironment: 'jest-environment-jsdom',
  verbose: true
}
