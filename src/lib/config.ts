// config switches for different environments
export const config = {
  isDev: process.env.APP_ENV === "development",
  isStaging: process.env.APP_ENV === "staging",
  isProd: process.env.APP_ENV === "production",

  // Example: Different API endpoints or features
  apiBaseUrl:
    process.env.APP_ENV === "production"
      ? "https://api.dawnjoo.ir"
      : process.env.APP_ENV === "staging"
      ? "https://api.staging.dawnjoo.ir"
      : "http://localhost:3000/api",
  // Add more config options as needed such as feature toggles, logging levels, etc.
};
