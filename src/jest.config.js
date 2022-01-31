module.exports = {
    moduleDirectories: ['./node_modules', 'src'],
    // other important stuff
    setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],

    moduleNameMapper: {
      "^.+\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js", // replaces .css imports with an empty object
      "\\.(jpg|png|gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js", // replaces file imports with a useless string
      "^react($|/.+)": "<rootDir>/node_modules/react$1", // makes sure all React imports are running off of the one in this package.
    },
    setupFiles: [
      "<rootDir>/jest/setEnvVars.js",
      "<rootDir>/jest/mockLocalStorage.js",
    ],
    verbose: true,
  }

  