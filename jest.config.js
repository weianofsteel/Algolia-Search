  
module.exports = {
    collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
    ],
    setupFilesAfterEnv: ['./jest.setup.js'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': './node_modules/babel-jest',
      '^.+\\.css$': './cssTransform.js',
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$',
    ],
    moduleNameMapper: {
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
  }