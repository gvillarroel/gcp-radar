---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.690Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "gcp-build custom build step"
feature_slug: "gcp-build-custom-build-step"
latest_feature_date: "2018-08-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/running-custom-build-step"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies"
keywords:
  - "gcp"
  - "build"
  - "custom"
  - "step"
  - "script"
  - "package"
  - "json"
  - "can"
---

# gcp-build custom build step

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

A gcp-build script in package.json can run custom build logic during deployment.

## Extended Definition

A gcp-build script in package.json can run custom build logic during deployment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/running-custom-build-step](https://docs.cloud.google.com/appengine/docs/standard/nodejs/running-custom-build-step)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies)

## Supporting Pages

### Running a custom build step | App Engine standard environment | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/running-custom-build-step](https://docs.cloud.google.com/appengine/docs/standard/nodejs/running-custom-build-step)
- Source ID: `feature-recovery-http`
- Final score: 340
- Re-rank relevance: N/A

Evidence snippets:
- After executing your custom build step, App Engine removes and regenerates the node_modules folder by only installing the production dependencies declared in the dependencies field of your package.json file.
- Custom build steps can be executed by adding gcp-build in your package.json file.
- To prevent your build from running the npm run build script, you must either: Add a gcp-build script with an empty value in your package.json file: "gcp-build":"" .
- By default, the node.js runtime will execute npm run build if a build script is detected in package.json file.

### Node.js Runtime Environment | App Engine standard environment | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- Source ID: `feature-recovery-http`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you require additional control over your build steps before starting your application, you can provide a custom build step by adding a gcp-build script to your package.json file.
- To prevent your build from running the npm run build script, you must either: Add a gcp-build script with an empty value in your package.json file: "gcp-build":"" .
- NPM build script By default, when you deploy the app in App Engine, the Node.js runtime executes npm run build if a build script is detected in package.json .
- If you specify a start script in your package.json file, the runtime runs the specified start script instead.

### "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies)
- Source ID: `site-docs-reference-3`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use any Node.js web framework including the following: Express.js Hapi.js Loopback.js Koa.js Kraken.js Restify.js Sails.js To use a particular web framework, such as Express.js , add the framework to your package.json file: Using npm : npm install express Using yarn : yarn add express Using pnpm : pnpm add express For example, the resulting package.json file might look as follows: { "dependencies" : { "lodash" : "^4.0.1" , "express" : "^4.16.2" } } Installing the Cloud Client Libraries The Cloud Client Libraries for Node.js is the idiomatic way for Node.js developers to integrate with Google Cloud services, such as Firestore in Datastore mode (Datastore) and Cloud Storage .
- To install an uncached version of the dependency, use the command: gcloud app deploy -- no - cache Support and limitations for the package.json file in the standard environment: You can use any Linux-compatible Node.js package with App Engine, including packages that require native (C) extensions.
- For example, if you want to specify Lodash as a dependency, your package.json file might look as follows: { "dependencies" : { "lodash" : "^4.0.1" } } During deployment, the Node.js runtime automatically installs all dependencies declared in your package.json file.
- For example: npmScopes : SCOPE : npmRegistryServer : https : // REGION ID -npm.pkg.dev/ PROJECT ID / REPOSITORY NAME npmAlwaysAuth : true Afterwards, include your packages in the package.json file.

