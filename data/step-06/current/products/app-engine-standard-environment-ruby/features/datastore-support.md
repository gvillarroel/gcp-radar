---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.412Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Datastore support"
feature_slug: "datastore-support"
latest_feature_date: "2015-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/configuration-files"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuration-files"
keywords:
  - "datastore"
  - "available"
  - "app"
  - "engine"
  - "standard"
  - "environment"
  - "ruby"
---

# Datastore support

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Datastore support is available for App Engine Standard Environment Ruby.

## Extended Definition

Datastore support is available for App Engine Standard Environment Ruby.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)
- [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files)

## Supporting Pages

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Configure Datastore indexes with index.yaml Stay organized with collections Save and categorize content based on your preferences.
- Go Java Node.js PHP Python Ruby You can use Firestore in Datastore mode (Datastore) for storing data for your applications that run in the standard environment.
- When you are sure that old indexes are no longer needed, you can delete them from App Engine as follows: gcloud datastore indexes cleanup index.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When you are testing in your local environment, you can use the gcloud emulator command to start a service that emulates Datastore before you run your app: gcloud beta emulators datastore start --data-dir DATA-DIR Use the --data-dir flag to specify the directory where the auto-generated index.yaml file will appear.

### "Structuring web services in App Engine \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)
- Source ID: `site-docs-root`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Structuring web services in App Engine Stay organized with collections Save and categorize content based on your preferences.
- Data and file storage considerations From App Engine, you can easily access other Google Cloud services such as Datastore , Cloud SQL , and Cloud Storage .
- See the following topics for details about each of the optional features: cron.yaml configures regularly scheduled tasks that operate at defined times or regular intervals. dispatch.yaml overrides routing default rules by sending incoming requests to a specific service based on the path or hostname in the URL. index.yaml specifies which indexes your app needs if using Datastore queries.
- You can serve your app's static content directly from that app in App Engine, host your static content on a Google Cloud option like Cloud Storage, or use a third-party content delivery network (CDN).

### "Structuring web services in App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files)
- Source ID: `site-docs-root-2`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Structuring web services in App Engine Stay organized with collections Save and categorize content based on your preferences.
- The file names you use in the App Engine standard environment must be UTF-8 compatible, either UTF-8 or something that can be safely auto-converted to UTF-8.
- Data and file storage considerations From App Engine, you can easily access other Google Cloud services such as Datastore , Cloud SQL , and Cloud Storage .
- See the following topics for details about each of the optional features: cron.yaml configures regularly scheduled tasks that operate at defined times or regular intervals. dispatch.yaml overrides routing default rules by sending incoming requests to a specific service based on the path or hostname in the URL. index.yaml specifies which indexes your app needs if using Datastore queries.

