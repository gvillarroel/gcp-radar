---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.752Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine Go SDK 1.9.40 release"
feature_slug: "app-engine-go-sdk-1-9-40-release"
latest_feature_date: "2016-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine"
keywords:
  - "app"
  - "engine"
  - "go"
  - "sdk"
  - "40"
  - "release"
  - "version"
  - "was"
---

# App Engine Go SDK 1.9.40 release

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The App Engine Go SDK version 1.9.40 release was made available.

## Extended Definition

The App Engine Go SDK version 1.9.40 release was made available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic](https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic)
- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)

## Supporting Pages

### "Method: apps.services.versions.patch \_|\_ App Engine Admin API \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic](https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic)
- Source ID: `site-docs-reference-2`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses: Standard environment instanceClass automatic scaling in the standard environment: automaticScaling.min idle instances automaticScaling.max idle instances automaticScaling.standard scheduler settings.max instances automaticScaling.standard scheduler settings.min instances automaticScaling.standard scheduler settings.target cpu utilization automaticScaling.standard scheduler settings.target throughput utilization basic scaling or manual scaling in the standard environment: servingStatus manualScaling.instances Flexible environment servingStatus automatic scaling in the flexible environment: automaticScaling.min total instances automaticScaling.max total instances automaticScaling.cool down period sec automaticScaling.cpu utilization.target utilization manual scaling in the flexible environment: manualScaling.instances HTTP request PATCH https://appengine.googleapis.com/v1/{name=apps/ /services/ /versions/ } The URL uses gRPC Transcoding syntax.
- Authorization requires the following IAM permission on the specified resource name : appengine.versions.update Query parameters Parameters updateMask string ( FieldMask format) Standard field mask for the set of fields to be updated.
- Home Technology areas App Engine Admin API Reference Send feedback Method: apps.services.versions.patch Stay organized with collections Save and categorize content based on your preferences.
- Request body The request body contains an instance of Version .

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas App Engine Admin API Overview Send feedback An Overview of the Admin API Stay organized with collections Save and categorize content based on your preferences.
- Tighter control around deploying new versions, including the ability to automate traffic migration between two versions or traffic splitting across one or more versions.
- After configuring authentication, you can begin managing your apps, including deploying versions of applications and managing the amount of traffic to those versions.
- The Admin API provides programmatic access to several of the App Engine administrative operations that are found in the Google Cloud console .

### An overview of App Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this diagram, the app has two services that contain multiple versions, and two of those versions are actively running on multiple instances: Other Google Cloud services, for example Datastore, are shared across your App Engine app.
- Each App Engine application includes at least one service, the default service, which can hold many versions, depending on your app's billing status.
- The App Engine application is a top-level container that includes the service, version, and instance resources that make up your app.
- For example, an app that handles your customer requests might include separate services that each handle different tasks, such as: API requests from mobile devices Internal, administration-type requests Backend processing such as billing pipelines and data analysis Each service in App Engine consists of the source code from your app and the corresponding App Engine configuration files.

