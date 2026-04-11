---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.820Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Beta-level Admin API and gcloud domain/SSL management"
feature_slug: "beta-level-admin-api-and-gcloud-domain-ssl-management"
latest_feature_date: "2017-06-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/apis"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
keywords:
  - "domain and SSL management"
  - "gcloud app domain-mappings"
  - "domain mappings"
  - "SSL certificates"
  - "gcloud app ssl"
  - "custom domains"
  - "App Engine Admin API beta"
  - "App Engine Admin API"
---

# Beta-level Admin API and gcloud domain/SSL management

Product: App Engine standard environment Go
Coverage: LOW

## Step 02 Summary

The Admin API and gcloud command-line tool added beta-level features for creating and managing custom domains and SSL certificates.

## Extended Definition

The Admin API and gcloud command-line tool added beta-level features for creating and managing custom domains and SSL certificates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/admin-api/apis](https://docs.cloud.google.com/appengine/docs/admin-api/apis)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)

## Supporting Pages

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Home Technology areas App Engine Admin API Overview Send feedback An Overview of the Admin API Stay organized with collections Save and categorize content based on your preferences.
- The App Engine Admin API is a RESTful API for managing your App Engine applications regardless of programming language.
- Tip: You can use client libraries to interact with App Engine Admin API.

### APIs and Reference \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/apis](https://docs.cloud.google.com/appengine/docs/admin-api/apis)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Home Technology areas App Engine Admin API Reference Send feedback APIs and Reference Stay organized with collections Save and categorize content based on your preferences.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Otherwise, users can use your app's App Engine URL to bypass the load balancer, Cloud Armor security policies, SSL certificates, and private keys that are passed through the load balancer.
- Soft routing does not apply to custom domains; requests to them will return a HTTP 404 status code if the hostname is invalid.
- Reuse the same SSL certificates and private keys that you use for Compute Engine, Google Kubernetes Engine, and Cloud Storage.
- You can use the simple " . " URL notation with your own custom domains and with HTTP requests.

