---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.875Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Fine-grained App Engine billing visibility with labels and BigQuery"
feature_slug: "fine-grained-app-engine-billing-visibility-with-labels-and-bigquery"
latest_feature_date: "2020-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid"
keywords:
  - "fine"
  - "grained"
  - "app"
  - "engine"
  - "billing"
  - "visibility"
  - "labels"
  - "bigquery"
---

# Fine-grained App Engine billing visibility with labels and BigQuery

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine users can label services and export billing data to BigQuery for per-resource, queryable billing analysis.

## Extended Definition

App Engine users can label services and export billing data to BigQuery for per-resource, queryable billing analysis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler](https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid)

## Supporting Pages

### "Understand performance with Cloud Profiler \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler](https://docs.cloud.google.com/appengine/docs/standard/cloud-profiler)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Understand performance with Cloud Profiler Stay organized with collections Save and categorize content based on your preferences.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference-2`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- Identity-Aware Proxy (IAP) Provides authentication by adding an Identity and Access Management (IAM) verification layer above your App Engine app.
- The Users API allows an App Engine app to perform the following tasks: Detect whether the current user is signed in using a Google Account.
- IAP doesn't protect against activity within a project, such as one App Engine service accessing another service in the same project.

### "Mail API for legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Mail API for legacy bundled services Stay organized with collections Save and categorize content based on your preferences.
- Authentication with DomainKeys Identified Mail (DKIM) When you send mail, App Engine uses the DomainKeys Identified Mail (DKIM) standard to authenticate the domain.
- If your application sends messages from an email address that is part of a Google Workspace domain, App Engine can cryptographically sign the emails it sends.
- App Engine applications can send email messages on behalf of the app's email receiving addresses and on behalf of some users with Google Accounts.

