---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.106Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "TLS 1.2 and later support with secure cipher suites"
feature_slug: "tls-1-2-and-later-support-with-secure-cipher-suites"
latest_feature_date: "2025-10-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "later"
  - "secure"
  - "cipher"
  - "suites"
  - "tls"
  - "with"
  - "and"
  - "app"
---

# TLS 1.2 and later support with secure cipher suites

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

App Engine standard environment supports Transport Layer Security version 1.2 and later using a secure set of cipher suites.

## Extended Definition

App Engine standard environment supports Transport Layer Security version 1.2 and later using a secure set of cipher suites.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

## Supporting Pages

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- You must choose a location, which cannot be changed later. gcloud app create Learn more : Generally, select the region nearest to your app's users, but also consider the location of the other Google Cloud products and services that your app uses.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Go app on App Engine Stay organized with collections Save and categorize content based on your preferences.
- After you build your app, you can read other tutorials to learn how to integrate with other Google Cloud services and add more features to your app.
- OK This guide helps you get started with App Engine and become familiar with developing, deploying, and managing a Go app.

### "Build a Java app on App Engine \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Java app on App Engine Stay organized with collections Save and categorize content based on your preferences.
- After you build your app, you can use the other tutorials to learn how to integrate with other Google Cloud services and add more features to your app.
- This guide helps you get started with App Engine and become familiar with deploying and managing an app.
- Getting started Learn how to build a simple web app and deploy it on App Engine: Create a Google Cloud project Learn how to create a Google Cloud project to hold your App Engine app's resources.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For responses that are returned by an App Engine static file or directory handler , response data is compressed if all of the following conditions are true: The request includes Accept-Encoding with gzip as one of its values.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How requests are handled Stay organized with collections Save and categorize content based on your preferences.
- Responses App Engine calls the handler script with a Request and waits for the script to return; all data written to the standard output stream is sent as the HTTP response.
- Handling request timeouts App Engine is optimized for applications with short-lived requests, typically those that take a few hundred milliseconds.

