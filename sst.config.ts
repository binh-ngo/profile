import { SSTConfig } from "sst";
const ApiStack = require("./stacks/ApiStack");
const StorageStack = require("./stacks/StorageStack");

export default {
  config(_input) {
    return {
      name: "notes",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(StorageStack).stack(ApiStack);
  },
} satisfies SSTConfig;