---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.601Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Datastore"
feature_slug: "datastore"
latest_feature_date: "2015-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuration-files"
  - "https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine"
keywords:
  - "datastore"
  - "capability"
  - "updates"
  - "were"
  - "included"
  - "app"
  - "engine"
  - "standard"
---

# Datastore

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Datastore capability updates were included in this App Engine Standard Node.js release.

## Extended Definition

Datastore capability updates were included in this App Engine Standard Node.js release.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files)
- [https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)

## Supporting Pages

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Configure Datastore indexes with index.yaml Stay organized with collections Save and categorize content based on your preferences.
- When you are sure that old indexes are no longer needed, you can delete them from App Engine as follows: gcloud datastore indexes cleanup index.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Go Java Node.js PHP Python Ruby You can use Firestore in Datastore mode (Datastore) for storing data for your applications that run in the standard environment.
- When you are testing in your local environment, you can use the gcloud emulator command to start a service that emulates Datastore before you run your app: gcloud beta emulators datastore start --data-dir DATA-DIR Use the --data-dir flag to specify the directory where the auto-generated index.yaml file will appear.

### "Structuring web services in App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Structuring web services in App Engine Stay organized with collections Save and categorize content based on your preferences.
- The file names you use in the App Engine standard environment must be UTF-8 compatible, either UTF-8 or something that can be safely auto-converted to UTF-8.
- Data and file storage considerations From App Engine, you can easily access other Google Cloud services such as Datastore , Cloud SQL , and Cloud Storage .
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.

### An overview of App Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)
- Source ID: `site-docs-reference`
- Final score: 45
- Re-rank relevance: N/A

Evidence snippets:
- In this diagram, the app has two services that contain multiple versions, and two of those versions are actively running on multiple instances: Other Google Cloud services, for example Datastore, are shared across your App Engine app.
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- For example, an app that handles your customer requests might include separate services that each handle different tasks, such as: API requests from mobile devices Internal, administration-type requests Backend processing such as billing pipelines and data analysis Each service in App Engine consists of the source code from your app and the corresponding App Engine configuration files.
- When you create your App Engine app, all your resources are created in the region that you choose, including your app code along with a collection of settings, credentials, and your app's metadata.

