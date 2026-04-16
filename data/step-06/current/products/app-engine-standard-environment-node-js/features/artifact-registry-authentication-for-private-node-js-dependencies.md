---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.575Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Artifact Registry authentication for private Node.js dependencies"
feature_slug: "artifact-registry-authentication-for-private-node-js-dependencies"
latest_feature_date: "2022-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests"
  - "https://docs.cloud.google.com/appengine/docs/standard/apis"
keywords:
  - "artifact"
  - "registry"
  - "authentication"
  - "private"
  - "node"
  - "js"
  - "dependencies"
  - "apps"
---

# Artifact Registry authentication for private Node.js dependencies

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Node.js apps in App Engine standard can now use private dependencies from an Artifact Registry Node.js package repository using .npmrc configuration and authentication settings.

## Extended Definition

Node.js apps in App Engine standard can now use private dependencies from an Artifact Registry Node.js package repository using .npmrc configuration and authentication settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)
- [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After May 15, 2024, Artifact Registry hosts images for the gcr.io domain in Google Cloud projects without previous Container Registry usage.
- After May 15, 2024, Artifact Registry hosts images for the gcr.io domain in Google Cloud projects without previous Container Registry usage.
- Specify an app-level default service account during app creation During the initial App Engine application creation process, you can choose to assign a service account that you created or use the auto-created PROJECT ID @appspot.gserviceaccount.com service account to act as the default.
- Example: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Assign an app-level default service account By default, the app-level default service account is the auto-created PROJECT ID @appspot.gserviceaccount.com service account.

### "Configuring warmup requests to improve performance \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go Java Node.js PHP Python Ruby You can use warmup requests to reduce request and response latency during the time when your app's code is being loaded to a newly created instance.

### "APIs & Reference \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Client Libraries for Node.js A client library that embraces idioms of Node.js and provides high-level API abstractions so that you can easily access Google Cloud services.

