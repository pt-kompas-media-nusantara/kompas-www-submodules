module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'js',
    'vue',
    'json'
  ],
	transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest'
    // '^.+\\.vue$': '@vue/vue3-jest'
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    //   '<rootDir>/fileTransformer.js'
  },
  transformIgnorePatterns: ["/node_modules/(?!(bootstrap-vue)/)"],
  verbose: true
}
