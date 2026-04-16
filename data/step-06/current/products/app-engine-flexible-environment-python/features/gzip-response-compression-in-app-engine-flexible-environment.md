---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:17.317Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "Gzip response compression in App Engine flexible environment"
feature_slug: "gzip-response-compression-in-app-engine-flexible-environment"
latest_feature_date: "2017-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/flexible/known-issues"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet"
keywords:
  - "gzip"
  - "response"
  - "compression"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "applications"
---

# Gzip response compression in App Engine flexible environment

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment applications now use gzip compression for all responses by default after redeploy.

## Extended Definition

App Engine flexible environment applications now use gzip compression for all responses by default after redeploy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/flexible/known-issues](https://docs.cloud.google.com/appengine/docs/flexible/known-issues)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet](https://docs.cloud.google.com/appengine/docs/flexible/dotnet)

## Supporting Pages

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-reference-2`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How requests are handled Stay organized with collections Save and categorize content based on your preferences.
- Unsupported HTTP requests The following features are not supported by App Engine flexible environment: HTTP/2 traffic to the backend service.
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.
- OK Go Java Node.js PHP Python Ruby .NET Custom This document describes how your App Engine application receives requests and sends responses.

### Known issues in the App Engine flexible environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/known-issues](https://docs.cloud.google.com/appengine/docs/flexible/known-issues)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Some events that may affect App Engine flexible environment minimum number of instances are: Rolling out updates to flexible environment instances Zonal failure (Stockout issues, such as when your region is at capacity for your selected CPU, etc.) App Engine flexible environment uses 3 zones to distribute your instances and in such a configuration, we recommend provisioning 50% more instances than required.
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Known issues in the App Engine flexible environment Stay organized with collections Save and categorize content based on your preferences.
- After you deploy a new version of an existing service in the App Engine flexible environment with gcloud app deploy , the "Count/sec" metric shown in the "Summary" graph of the App Engine dashboard may decrease significantly.
- If there is an organization policy on your project that restricts access to external IPs, you won't be able to deploy an App Engine flexible environment app with external IP addresses.

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet](https://docs.cloud.google.com/appengine/docs/flexible/dotnet)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The .NET runtime Stay organized with collections Save and categorize content based on your preferences.
- The .NET runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment. .NET versions .NET 10 is built using buildpacks .
- App Engine blocks you from deploying your applications using runtimes that have reached end of support.
- Extending the runtime The flexible environment .NET runtime can be used to create a custom runtime.

