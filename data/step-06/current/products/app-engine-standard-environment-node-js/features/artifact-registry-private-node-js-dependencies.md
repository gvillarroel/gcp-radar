---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.673Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Artifact Registry private Node.js dependencies"
feature_slug: "artifact-registry-private-node-js-dependencies"
latest_feature_date: "2022-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies"
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services"
keywords:
  - "artifact"
  - "registry"
  - "private"
  - "node"
  - "js"
  - "dependencies"
  - "apps"
  - "can"
---

# Artifact Registry private Node.js dependencies

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Node.js apps can install private dependencies from an Artifact Registry Node.js package repository.

## Extended Definition

Node.js apps can install private dependencies from an Artifact Registry Node.js package repository.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies)
- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)

## Supporting Pages

### "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies)
- Source ID: `site-docs-reference-3`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Private dependencies with Artifact Registry If your app uses a private npm module , you can use an Artifact Registry Node.js package repository to host private dependencies.
- To include private dependencies, list the Artifact Registry repository and configure settings for authenticating with the registry in your .npmrc file in the app directory.
- You can use any Node.js web framework including the following: Express.js Hapi.js Loopback.js Koa.js Kraken.js Restify.js Sails.js To use a particular web framework, such as Express.js , add the framework to your package.json file: Using npm : npm install express Using yarn : yarn add express Using pnpm : pnpm add express For example, the resulting package.json file might look as follows: { "dependencies" : { "lodash" : "^4.0.1" , "express" : "^4.16.2" } } Installing the Cloud Client Libraries The Cloud Client Libraries for Node.js is the idiomatic way for Node.js developers to integrate with Google Cloud services, such as Firestore in Datastore mode (Datastore) and Cloud Storage .
- For example, if you want to specify Lodash as a dependency, your package.json file might look as follows: { "dependencies" : { "lodash" : "^4.0.1" } } During deployment, the Node.js runtime automatically installs all dependencies declared in your package.json file.

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After May 15, 2024, Artifact Registry hosts images for the gcr.io domain in Google Cloud projects without previous Container Registry usage.
- After May 15, 2024, Artifact Registry hosts images for the gcr.io domain in Google Cloud projects without previous Container Registry usage.
- Specify an app-level default service account during app creation During the initial App Engine application creation process, you can choose to assign a service account that you created or use the auto-created PROJECT ID @appspot.gserviceaccount.com service account to act as the default.
- Example: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Assign an app-level default service account By default, the app-level default service account is the auto-created PROJECT ID @appspot.gserviceaccount.com service account.

### "Communicating between your services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Communication between services in different projects You can have private access between Google Cloud projects when apps running in projects belong to a Shared VPC network that is configured to invoke an app running in the Shared VPC network's host project.
- Follow DNS configuration to add the DNS hostname, but be sure to configure the private zone to be for appspot.com rather than googleapis.com .
- Your app can only be reached on the private.googleapis.com IP range using this appspot.com domain.
- REGION ID .r.appspot.com Note that the combined length of VERSION -dot- SERVICE -dot- PROJECT ID , where VERSION is the name of your version, SERVICE is the name of your service, and PROJECT ID is your project ID, cannot be longer than 63 characters and cannot start or end with a hyphen.

