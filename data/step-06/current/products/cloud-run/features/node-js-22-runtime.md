---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.480Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Node.js 22 runtime"
feature_slug: "node-js-22-runtime"
latest_feature_date: "2024-11-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service"
  - "https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs"
  - "https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api"
keywords:
  - "node"
  - "workloads"
  - "deployed"
  - "runtime"
  - "supports"
---

# Node.js 22 runtime

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports the Node.js 22 runtime for deployed workloads.

## Extended Definition

Cloud Run supports the Node.js 22 runtime for deployed workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service)
- [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs)
- [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)

## Supporting Pages

### Authenticate to Cloud Run Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

### "Quickstart: build and create a Node.js job in Cloud Run \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs)
- Source ID: `site-docs-reference-2`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Success: You created and executed a job using the Node.js runtime in Cloud Run.
- Writing the sample job To write a job in Node.js: Create a new directory named jobs and change directory into it: mkdir jobs cd jobs Create a package.json file with the following contents: { "name" : "jobs" , "version" : "1.0.0" , "description" : "Node.js sample for Cloud Run jobs" , "main" : "index.js" , "scripts" : { "start" : "node index.js" }, "engines" : { "node" : ">=16.0.0" }, "author" : "Google LLC" , "license" : "Apache-2.0" } In the same directory, create a index.js file for the actual job code.
- Create a Procfile with the following contents: Define the application ' s entrypoint to override default , npm start https : //github.com/GoogleCloudPlatform/buildpacks/issues/160 web : node index . js Your code is complete and ready to be packaged in a container.
- Build and create a Node.js job in Cloud Run Learn how to create a simple Cloud Run job, then deploy from source, which automatically packages your code into a container image, uploads the container image to Artifact Registry, and then deploys to Cloud Run.

### "Quickstart: Build and deploy a Node.js web app to Google Cloud with Cloud\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service)
- Source ID: `site-docs-reference-2`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Success: You deployed a Node.js web app to Cloud Run.
- Write the sample application To create and deploy a Node.js service, follow these steps: Create a new directory named helloworld and change directory into it: mkdir helloworld cd helloworld Create a package.json file with the following contents: { "name" : "helloworld" , "description" : "Simple hello world sample in Node" , "version" : "1.0.0" , "private" : true , "main" : "index.js" , "type" : "module" , "scripts" : { "start" : "node index.js" }, "engines" : { "node" : ">=16.0.0" }, "author" : "Google LLC" , "license" : "Apache-2.0" , "dependencies" : { "express" : "^5.2.1" } } In the same directory, create a index.js file, and copy the following lines into it: import express from 'express' ; const app = express (); app . get ( '/' , ( req , res ) = > { const name = process . env .
- If you are under a domain restriction organization policy restricting unauthenticated invocations for your project, you will need to access your deployed service as described under Testing private services .
- Quickstart: Build and deploy a Node.js web app to Cloud Run Learn how to use a single command to build and deploy a "Hello World" web application from a code sample to Google Cloud using Cloud Run.

