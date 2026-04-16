---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.389Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "TLS 1.1 and earlier support deprecation"
feature_slug: "tls-1-1-and-earlier-support-deprecation"
latest_feature_date: "2025-08-07"
deprecation_date: "March 2025"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests"
keywords:
  - "tls"
  - "earlier"
  - "deprecation"
  - "deprecated"
  - "app"
  - "engine"
  - "standard"
  - "apps"
---

# TLS 1.1 and earlier support deprecation

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Support for TLS 1.1 and earlier is deprecated in App Engine standard, with apps expected to use TLS 1.2+ and secure cipher suites; deprecated on March 2025.

## Extended Definition

Support for TLS 1.1 and earlier is deprecated in App Engine standard, with apps expected to use TLS 1.2+ and secure cipher suites; deprecated on March 2025.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler](https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)

## Supporting Pages

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Configure Datastore indexes with index.yaml Stay organized with collections Save and categorize content based on your preferences.
- When you are sure that old indexes are no longer needed, you can delete them from App Engine as follows: gcloud datastore indexes cleanup index.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Deploy the index configuration file To deploy the index.yaml configuration file, run the following command: gcloud app deploy index.yaml Delete unused indexes When you change or remove an index from the index configuration, the original index is not deleted from App Engine automatically.
- Go Java Node.js PHP Python Ruby You can use Firestore in Datastore mode (Datastore) for storing data for your applications that run in the standard environment.

### "Understand performance with Cloud Profiler \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler](https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler)
- Source ID: `site-docs-root-2`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Understand performance with Cloud Profiler Stay organized with collections Save and categorize content based on your preferences.

### "Configuring warmup requests to improve performance \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)
- Source ID: `site-docs-root-2`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Configuring warmup requests to improve performance Stay organized with collections Save and categorize content based on your preferences.
- If warmup requests are enabled for your application, App Engine attempts to detect when your application needs a new instance and initiates a warmup request to initialize a new instance.
- Enabling warmup requests Warmup requests are used by the App Engine scheduler, which controls the auto scaling of instances based on user-supplied configuration.
- When deploying to Google App Engine, a webserver process such as Gunicorn will serve the app.

