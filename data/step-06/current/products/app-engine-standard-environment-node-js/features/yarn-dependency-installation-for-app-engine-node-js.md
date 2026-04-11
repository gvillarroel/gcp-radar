---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.081Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Yarn dependency installation for App Engine Node.js"
feature_slug: "yarn-dependency-installation-for-app-engine-node-js"
latest_feature_date: "2018-09-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes"
keywords:
  - "yarn.lock present"
  - "package manager selection"
  - "install dependencies with Yarn"
  - "App Engine Node.js uses yarn"
  - "Yarn dependency installation"
  - "`yarn.lock`"
  - "yarn.lock"
  - "Yarn"
---

# Yarn dependency installation for App Engine Node.js

Product: App Engine standard environment Node.js
Coverage: LOW

## Step 02 Summary

Node.js applications on App Engine now install dependencies using Yarn when a `yarn.lock` file is present.

## Extended Definition

Node.js applications on App Engine now install dependencies using Yarn when a `yarn.lock` file is present.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes)

## Supporting Pages

### "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- By default, the npm install command is used, however Yarn and Pnpm package managers are also supported: Yarn: If a yarn.lock file exists, the yarn install --production command is used instead.
- Note that you must ensure that the yarn.lock or pnpm-lock.yaml file is not specified in the skip files section of your app.yaml file.
- You can use any Node.js web framework including the following: Express.js Hapi.js Loopback.js Koa.js Kraken.js Restify.js Sails.js To use a particular web framework, such as Express.js , add the framework to your package.json file: Using npm : npm install express Using yarn : yarn add express Using pnpm : pnpm add express For example, the resulting package.json file might look as follows: { "dependencies" : { "lodash" : "^4.0.1" , "express" : "^4.16.2" } } Installing the Cloud Client Libraries The Cloud Client Libraries for Node.js is the idiomatic way for Node.js developers to integrate with Google Cloud services, such as Firestore in Datastore mode (Datastore) and Cloud Storage .
- To install the Node.js client library for Cloud Storage: Install the Cloud Client Libraries locally by using a package manager: To use npm , run: npm install @google-cloud/storage To use yarn , run: yarn add @google-cloud/storage To use pnpm , run: pnpm add @google-cloud/storage Set up authentication.

### "App Engine standard environment for Node.js release notes \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- September 19, 2018 Feature Support for the Yarn package manager : if a yarn.lock file is present, dependencies will be installed using yarn .
- April 05, 2023 Feature The Node.js runtime now supports the use of Yarn 2 for configuring private modules hosted in Artifact Registry .

