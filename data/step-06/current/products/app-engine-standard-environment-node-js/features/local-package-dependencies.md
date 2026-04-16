---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.690Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Local package dependencies"
feature_slug: "local-package-dependencies"
latest_feature_date: "2018-08-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime"
keywords:
  - "local"
  - "package"
  - "dependencies"
  - "json"
  - "can"
  - "reference"
  - "file"
  - "based"
---

# Local package dependencies

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Package.json can reference local file-based dependencies for deployment.

## Extended Definition

Package.json can reference local file-based dependencies for deployment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service](https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)

## Supporting Pages

### "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies)
- Source ID: `site-docs-reference-3`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use any Node.js web framework including the following: Express.js Hapi.js Loopback.js Koa.js Kraken.js Restify.js Sails.js To use a particular web framework, such as Express.js , add the framework to your package.json file: Using npm : npm install express Using yarn : yarn add express Using pnpm : pnpm add express For example, the resulting package.json file might look as follows: { "dependencies" : { "lodash" : "^4.0.1" , "express" : "^4.16.2" } } Installing the Cloud Client Libraries The Cloud Client Libraries for Node.js is the idiomatic way for Node.js developers to integrate with Google Cloud services, such as Firestore in Datastore mode (Datastore) and Cloud Storage .
- For example, if you want to specify Lodash as a dependency, your package.json file might look as follows: { "dependencies" : { "lodash" : "^4.0.1" } } During deployment, the Node.js runtime automatically installs all dependencies declared in your package.json file.
- You specify the dependencies for your Node.js app by declaring them in the package.json file.
- To install an uncached version of the dependency, use the command: gcloud app deploy -- no - cache Support and limitations for the package.json file in the standard environment: You can use any Linux-compatible Node.js package with App Engine, including packages that require native (C) extensions.

### "Write your web service with Node.js \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service](https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service)
- Source ID: `site-docs-reference-4`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here's an example: { ... "dependencies" : { "express" : "^4.16.3" } ... } Add a start script to your package.json file: "scripts" : { "start" : "node server.js" } Create a file called server.js in the same folder and add the following code: const express = require ( 'express' ); const app = express (); app . get ( '/' , ( req , res ) = > { res . send ( 'Hello from App Engine!' ); }); // Listen to the App Engine-specified port, or 8080 otherwise const PORT = process . env .
- Add Express as a dependency by running: npm install express Confirm that Express appears in your package.json file's dependencies field.
- Key points You can use dependencies by listing them in your package.json file.
- At this point, you should have a file structure like the following: my-nodejs-service/ app.yaml package.json server.js Next steps Now that you've created a simple Node.js web server that listens to the correct port and you've specified the runtime in an app.yaml file, you're ready to deploy your service on App Engine .

### "Node.js Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Because minor and patch versions are automatically updated, if present, the engines.node property in your package.json file can only specify the major version and be compatible with the Node.js version specified in your app.yaml file.
- If you require additional control over your build steps before starting your application, you can provide a custom build step by adding a gcp-build script to your package.json file.
- To prevent your build from running the npm run build script, you must either: Add a gcp-build script with an empty value in your package.json file: "gcp-build":"" .
- For example for 24: 24.x.x ^24.0.0 24 =6 If you specify an incompatible Node.js version in your package.json file, your deployment will fail with an error message.

