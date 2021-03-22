module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(vue|ts|css|scss)$": "vite-jest",
  },
  moduleFileExtensions: ["vue", "ts", "js"],
  testMatch: ["**/tests/**/*.test.ts"],
  extensionsToTreatAsEsm: [".ts", ".vue"]
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   "src/**/*.{js,ts,vue}",
  //   "!src/main.ts", // No need to cover bootstrap file
  // ],
};
