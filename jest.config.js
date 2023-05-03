module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/components/single/*.vue'],
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
    '\\.[jt]sx?$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
    ".*\\.(vue)$": "vue-jest"
  },
  testEnvironment: 'jsdom',
  verbose: true
}
