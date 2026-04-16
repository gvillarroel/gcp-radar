---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.670Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Build environment variables"
feature_slug: "build-environment-variables"
latest_feature_date: "2022-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
keywords:
  - "build"
  - "environment"
  - "variables"
  - "lets"
  - "applications"
  - "define"
  - "process"
---

# Build environment variables

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Build environment variables support lets applications define environment variables for the build process; Build environment variables support lets applications define environment variables for the build process.

## Extended Definition

Build environment variables support lets applications define environment variables for the build process; Build environment variables support lets applications define environment variables for the build process.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app](https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)

## Supporting Pages

### "Node.js Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add the GOOGLE NODE RUN SCRIPTS build environment variable with an empty value in your app.yaml file. build env variables : GOOGLE NODE RUN SCRIPTS : '' For details about specifying build environment variables see build env variables section in the app.yaml file.
- You can define additional environment variables in your app.yaml file , but the above values cannot be overridden, except for NODE ENV .
- For example: "scripts" : { "start" : "node app.js" } For your app to receive HTTP requests, your start script should start a web server that listens on host 0.0.0.0 and the port specified by the PORT environment variable , which is accessible in Node.js as process.env.PORT .
- Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.

### "Build a Node.js app on App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app](https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app)
- Source ID: `site-docs-reference-2`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Node.js app on App Engine Stay organized with collections Save and categorize content based on your preferences.
- Getting started Learn how to build a simple web app and deploy it on App Engine: Create a Google Cloud project Learn how to create a Google Cloud project to hold your App Engine app's resources.
- After you build your app, you can use the other tutorials to learn how to integrate with other Google Cloud services and add more features to your app.
- The tasks on this page walk you through the basics of App Engine, guiding you through the development process.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- A user account can be used to authenticate from the following tools: Google Cloud console Google Cloud CLI IDEs and build tools that use the gcloud CLI to test and deploy App Engine apps A service account , which is intended to represent an application or a process instead of a person.
- Next steps If you're using the service account in your automated build and deployment processes, authorize the gcloud CLI with a service account .
- Use service accounts in your automated build, test, and deployment processes, especially if multiple developers can run these processes.
- If you don't specify credentials when constructing // the client, the client library will look for credentials in the // environment. const storage = new Storage (); // Makes an authenticated API request. async function listBuckets () { try { const results = await storage . getBuckets (); const [ buckets ] = results ; console . log ( 'Buckets:' ); buckets . forEach ( bucket = > { console . log ( bucket . name ); }); } catch ( err ) { console . error ( 'ERROR:' , err ); } } listBuckets (); PHP // Imports the Cloud Storage client library. use Google\Cloud\Storage\StorageClient; / Authenticate to a cloud client library using a service account implicitly. @param string $projectId The Google project ID. / function auth cloud implicit($projectId) { $config = [ 'projectId' => $projectId, ]; If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. $storage = new StorageClient($config); Make an authenticated API request (listing storage buckets) foreach ($storage->buckets() as $bucket) { printf('Bucket: %s' .

