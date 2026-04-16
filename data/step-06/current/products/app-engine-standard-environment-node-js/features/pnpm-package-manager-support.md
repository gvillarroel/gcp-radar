---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.667Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "pnpm package manager support"
feature_slug: "pnpm-package-manager-support"
latest_feature_date: "2023-06-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
keywords:
  - "pnpm"
  - "package"
  - "manager"
  - "lets"
  - "node"
  - "js"
  - "runtimes"
  - "configure"
---

# pnpm package manager support

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Pnpm package manager support lets Node.js runtimes configure application dependencies with pnpm.

## Extended Definition

Pnpm package manager support lets Node.js runtimes configure application dependencies with pnpm.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)

## Supporting Pages

### "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies)
- Source ID: `site-docs-reference-3`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To install the Node.js client library for Cloud Storage: Install the Cloud Client Libraries locally by using a package manager: To use npm , run: npm install @google-cloud/storage To use yarn , run: yarn add @google-cloud/storage To use pnpm , run: pnpm add @google-cloud/storage Set up authentication.
- You can use any Node.js web framework including the following: Express.js Hapi.js Loopback.js Koa.js Kraken.js Restify.js Sails.js To use a particular web framework, such as Express.js , add the framework to your package.json file: Using npm : npm install express Using yarn : yarn add express Using pnpm : pnpm add express For example, the resulting package.json file might look as follows: { "dependencies" : { "lodash" : "^4.0.1" , "express" : "^4.16.2" } } Installing the Cloud Client Libraries The Cloud Client Libraries for Node.js is the idiomatic way for Node.js developers to integrate with Google Cloud services, such as Firestore in Datastore mode (Datastore) and Cloud Storage .
- By default, the npm install command is used, however Yarn and Pnpm package managers are also supported: Yarn: If a yarn.lock file exists, the yarn install --production command is used instead.
- To install an uncached version of the dependency, use the command: gcloud app deploy -- no - cache Support and limitations for the package.json file in the standard environment: You can use any Linux-compatible Node.js package with App Engine, including packages that require native (C) extensions.

### "Node.js Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The runtime also supports Yarn ( yarn.lock ) and Pnpm ( pnpm-lock.yaml ) package managers.
- Because minor and patch versions are automatically updated, if present, the engines.node property in your package.json file can only specify the major version and be compatible with the Node.js version specified in your app.yaml file.
- To support Node.js packages that require native extensions, the runtime includes system packages enabling you to use tools such as ImageMagick , FFmpeg , and Chrome headless .
- For example for 24: 24.x.x ^24.0.0 24 =6 If you specify an incompatible Node.js version in your package.json file, your deployment will fail with an error message.

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Your version-specific service account must be in the same project where you deploy your application. appengine-web.xml If you use the Java runtimes and include the App Engine legacy bundled services, specify your service account by adding the <service-account> element in your appengine-web.xml file: <service-account> SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com</service-account> Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Configure App Engine service accounts Stay organized with collections Save and categorize content based on your preferences.
- Using a version-specific service account lets you grant different privileges to each application version, based on the specific tasks it performs, and avoid granting more privileges than necessary.

