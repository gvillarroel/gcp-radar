---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.598Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Managed VM container build backend selection"
feature_slug: "managed-vm-container-build-backend-selection"
latest_feature_date: "2016-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app/creating-project"
keywords:
  - "managed"
  - "vm"
  - "container"
  - "build"
  - "backend"
  - "selection"
  - "app"
  - "engine"
---

# Managed VM container build backend selection

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

App Engine Managed VM deployments can build container images using either the default ephemeral Compute Engine VM path or Cloud Build.

## Extended Definition

App Engine Managed VM deployments can build container images using either the default ephemeral Compute Engine VM path or Cloud Build.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app](https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app/creating-project](https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app/creating-project)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Instances are the basic building blocks of App Engine, providing all the resources needed to successfully host your application.
- App Engine normally sends a STOP ( SIGTERM ) signal to the app container.
- Click the tab for instructions on using the tool of your choice: Console To stop or disable a version for your service: Go to the App Engine Versions page in the Google Cloud console: Go to Versions Select a version from the table, and click Stop . gcloud Run the following: gcloud app versions stop --service= SERVICE VERSION Replace: SERVICE with the name of your service.

### "Build a Node.js app on App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app](https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app)
- Source ID: `site-docs-reference-2`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Node.js app on App Engine Stay organized with collections Save and categorize content based on your preferences.
- Getting started Learn how to build a simple web app and deploy it on App Engine: Create a Google Cloud project Learn how to create a Google Cloud project to hold your App Engine app's resources.
- After you build your app, you can use the other tutorials to learn how to integrate with other Google Cloud services and add more features to your app.
- Deploy your service on App Engine Learn how to deploy your Node.js code on App Engine and view your live web service.

### "Create your project \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app/creating-project](https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app/creating-project)
- Source ID: `site-docs-reference-4`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To deploy your app on App Engine, you must create a Google Cloud project, which is a top level container that holds your App Engine application resources as well as other Google Cloud resources.
- If you already have a Google Cloud project with App Engine and the Cloud Build API enabled, continue to Writing Your Web Service .
- Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Create your project Stay organized with collections Save and categorize content based on your preferences.

