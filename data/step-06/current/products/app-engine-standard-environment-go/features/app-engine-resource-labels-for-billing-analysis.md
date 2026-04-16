---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.295Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine resource labels for billing analysis"
feature_slug: "app-engine-resource-labels-for-billing-analysis"
latest_feature_date: "2020-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/labeling-resources"
  - "https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine"
  - "https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine"
keywords:
  - "resource"
  - "analysis"
  - "labeled"
  - "billing"
  - "labels"
---

# App Engine resource labels for billing analysis

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

App Engine services can be labeled so billing exports to BigQuery can be analyzed at a finer resource level.

## Extended Definition

App Engine services can be labeled so billing exports to BigQuery can be analyzed at a finer resource level.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/labeling-resources](https://docs.cloud.google.com/appengine/docs/standard/go/labeling-resources)
- [https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)
- [https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine)

## Supporting Pages

### "Labeling App Engine resources \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/labeling-resources](https://docs.cloud.google.com/appengine/docs/standard/go/labeling-resources)
- Source ID: `site-docs-reference-4`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TABLEID ], labels )) WHERE cost > 0.0 and labels . key is not null and resource type = ' Out Bandwidth ' LIMIT 100 BigQuery returns your data with a flattened output: product resource type start time end time labels key labels value cost App Engine Out Bandwidth 2017-10-07 22:00:00 2017-10-07 23:00:00 service default 0.020033 App Engine Out Bandwidth 2017-10-07 13:00:00 2017-10-07 14:00:00 service frontend 0.016042 App Engine Out Bandwidth 2017-10-07 06:00:00 2017-10-07 07:00:00 service backend task 0.013125 App Engine Out Bandwidth 2017-10-07 21:00:00 2017-10-07 22:00:00 service default 0.020722 App Engine Out Bandwidth 2017-10-07 19:00:00 2017-10-07 20:00:00 service frontend 0.020725 App Engine Out Bandwidth 2017-10-08 04:00:00 2017-10-08 05:00:00 service backend task 0.02072 App Engine Out Bandwidth 2017-10-08 02:00:00 2017-10-08 03:00:00 service default 0.020723 App Engine Out Bandwidth 2017-10-07 14:00:00 2017-10-07 15:00:00 service frontend 0.020724 App Engine Out Bandwidth 2017-10-07 23:00:00 2017-10-08 00:00:00 service backend task 0.021417 Time periods in billing reports To ensure that each day in the report covers a full 24 hour period, the billing data that you export only contains data up to the most recent midnight, Pacific Time.
- Refer to the Admin API reference documentation: REST API RPC API Viewing billing data associated with your labeled services You can add granularity to billing data for your application using labels.
- For example, the following query pulls cost data, the label key, and the label value for outgoing bandwidth where a label exists: SELECT product , resource type , start time , end time , labels . key , labels . value , cost FROM ( FLATTEN ([ YOUR DATASET .
- For example, if you add labels such as service:default , service:backend and service:frontend to your App Engine services, you can compare how these different services use outgoing bandwidth, instance hours, and other resources .

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
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, an app that handles your customer requests might include separate services that each handle different tasks, such as: API requests from mobile devices Internal, administration-type requests Backend processing such as billing pipelines and data analysis Each service in App Engine consists of the source code from your app and the corresponding App Engine configuration files.
- When you create your App Engine app, all your resources are created in the region that you choose, including your app code along with a collection of settings, credentials, and your app's metadata.
- Some of the resources used by instances in the App Engine flexible environment, such as disk, CPU, and memory, count towards the Compute Engine API quotas of your project.
- You can then use those unique names to target and route traffic to specific resources using URLs, for example: https:// VERSION -dot- SERVICE -dot- PROJECT ID .

