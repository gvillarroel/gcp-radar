---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.063Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Pnpm support for Node.js runtimes"
feature_slug: "pnpm-support-for-node-js-runtimes"
latest_feature_date: "2023-06-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies"
keywords:
  - "pnpm package manager"
  - "pnpm lockfile"
  - "Node.js runtime dependency installation"
  - "use pnpm with Node.js"
  - "pnpm for App Engine"
  - "pnpm support"
  - "pnpm"
---

# Pnpm support for Node.js runtimes

Product: App Engine standard environment Node.js
Coverage: LOW

## Step 02 Summary

App Engine standard environments now support using the pnpm package manager to configure dependencies for Node.js runtimes.

## Extended Definition

App Engine standard environments now support using the pnpm package manager to configure dependencies for Node.js runtimes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies)

## Supporting Pages

### "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- By default, the npm install command is used, however Yarn and Pnpm package managers are also supported: Yarn: If a yarn.lock file exists, the yarn install --production command is used instead.
- You can use any Node.js web framework including the following: Express.js Hapi.js Loopback.js Koa.js Kraken.js Restify.js Sails.js To use a particular web framework, such as Express.js , add the framework to your package.json file: Using npm : npm install express Using yarn : yarn add express Using pnpm : pnpm add express For example, the resulting package.json file might look as follows: { "dependencies" : { "lodash" : "^4.0.1" , "express" : "^4.16.2" } } Installing the Cloud Client Libraries The Cloud Client Libraries for Node.js is the idiomatic way for Node.js developers to integrate with Google Cloud services, such as Firestore in Datastore mode (Datastore) and Cloud Storage .
- To install the Node.js client library for Cloud Storage: Install the Cloud Client Libraries locally by using a package manager: To use npm , run: npm install @google-cloud/storage To use yarn , run: yarn add @google-cloud/storage To use pnpm , run: pnpm add @google-cloud/storage Set up authentication.
- Note that you must ensure that the yarn.lock or pnpm-lock.yaml file is not specified in the skip files section of your app.yaml file.

