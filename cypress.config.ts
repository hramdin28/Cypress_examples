import { defineConfig } from "cypress";
import { databaseConfig } from "./cypress/support/db_helper";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200",
    experimentalStudio: true,
    supportFile: "cypress/support/commands.ts",
    setupNodeEvents(on, config): void {
      on("task", databaseConfig);
    },
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
