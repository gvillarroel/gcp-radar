---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.222Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "App Engine resource labels for billing analysis"
feature_slug: "app-engine-resource-labels-for-billing-analysis"
latest_feature_date: "2020-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine"
  - "https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
keywords:
  - "resource"
  - "analysis"
  - "billing"
  - "labels"
---

# App Engine resource labels for billing analysis

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine services can use labels to support fine-grained billing analysis in BigQuery exports.

## Extended Definition

App Engine services can use labels to support fine-grained billing analysis in BigQuery exports.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)
- [https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The Cloud Quotas system does the following: Monitors your consumption of Google Cloud products and services Restricts your consumption of those resources Provides a way to request changes to the quota value and automate quota adjustments In most cases, when you attempt to consume more of a resource than its quota allows, the system blocks access to the resource, and the task that you're trying to perform fails.
- Resource Default limit Default Cloud Storage Bucket Stored Data First 5 GB free; no maximum Default Cloud Storage Bucket Class A Operations First 20,000 ops/day free; no maximum Default Cloud Storage Bucket Class B Operations First 50,000 ops/day free; no maximum Default Cloud Storage Bucket Network Egress First 1 GB free; no maximum Blobstore The following quotas apply specifically to use of the blobstore.
- US/Europe Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.026/GB/month Asia (Japan) Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.023/GB/month"> Firestore in Datastore mode (Datastore) The Stored Data (billable) quota refers to all data stored for the application in Datastore and Blobstore.

### An overview of App Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, an app that handles your customer requests might include separate services that each handle different tasks, such as: API requests from mobile devices Internal, administration-type requests Backend processing such as billing pipelines and data analysis Each service in App Engine consists of the source code from your app and the corresponding App Engine configuration files.
- When you create your App Engine app, all your resources are created in the region that you choose, including your app code along with a collection of settings, credentials, and your app's metadata.
- Some of the resources used by instances in the App Engine flexible environment, such as disk, CPU, and memory, count towards the Compute Engine API quotas of your project.
- You can then use those unique names to target and route traffic to specific resources using URLs, for example: https:// VERSION -dot- SERVICE -dot- PROJECT ID .

### An overview of App Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine)
- Source ID: `site-docs-reference-2`
- Final score: 66
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, an app that handles your customer requests might include separate services that each handle different tasks, such as: API requests from mobile devices Internal, administration-type requests Backend processing such as billing pipelines and data analysis Each service in App Engine consists of the source code from your app and the corresponding App Engine configuration files.
- When you create your App Engine app, all your resources are created in the region that you choose, including your app code along with a collection of settings, credentials, and your app's metadata.
- Some of the resources used by instances in the App Engine flexible environment, such as disk, CPU, and memory, count towards the Compute Engine API quotas of your project.
- You can then use those unique names to target and route traffic to specific resources using URLs, for example: https:// VERSION -dot- SERVICE -dot- PROJECT ID .

