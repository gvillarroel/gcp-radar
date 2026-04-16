---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:17.318Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "App Engine flexible environment billing granularity"
feature_slug: "app-engine-flexible-environment-billing-granularity"
latest_feature_date: "2017-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/labeling-resources"
  - "https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "billing"
  - "granularity"
  - "instance"
  - "moved"
---

# App Engine flexible environment billing granularity

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment instance billing moved from per-minute to per-second increments and reduced the minimum usage cost to one minute.

## Extended Definition

App Engine flexible environment instance billing moved from per-minute to per-second increments and reduced the minimum usage cost to one minute.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/python/labeling-resources)
- [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)

## Supporting Pages

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- NTP with App Engine flexible environment The App Engine flexible environment has network time protocol (NTP) services which use Google NTP servers.
- Health checking App Engine sends periodic health check requests to confirm that an instance is running, and to check that an instance is fully started and ready to accept incoming requests.
- App Engine continues to send health check requests and restarts the instance if an unhealthy instance continues to fail to respond to a predetermined number of consecutive health checks.

### "Labeling App Engine resources \_|\_ App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/python/labeling-resources)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The App Engine flexible environment does not support billing labels for Firestore in Datastore mode (Datastore) usage.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Labeling App Engine resources Stay organized with collections Save and categorize content based on your preferences.
- TABLEID ], labels )) WHERE cost > 0.0 and labels . key is not null and resource type = ' Out Bandwidth ' LIMIT 100 BigQuery returns your data with a flattened output: product resource type start time end time labels key labels value cost App Engine Out Bandwidth 2017-10-07 22:00:00 2017-10-07 23:00:00 service default 0.020033 App Engine Out Bandwidth 2017-10-07 13:00:00 2017-10-07 14:00:00 service frontend 0.016042 App Engine Out Bandwidth 2017-10-07 06:00:00 2017-10-07 07:00:00 service backend task 0.013125 App Engine Out Bandwidth 2017-10-07 21:00:00 2017-10-07 22:00:00 service default 0.020722 App Engine Out Bandwidth 2017-10-07 19:00:00 2017-10-07 20:00:00 service frontend 0.020725 App Engine Out Bandwidth 2017-10-08 04:00:00 2017-10-08 05:00:00 service backend task 0.02072 App Engine Out Bandwidth 2017-10-08 02:00:00 2017-10-08 03:00:00 service default 0.020723 App Engine Out Bandwidth 2017-10-07 14:00:00 2017-10-07 15:00:00 service frontend 0.020724 App Engine Out Bandwidth 2017-10-07 23:00:00 2017-10-08 00:00:00 service backend task 0.021417 Time periods in billing reports To ensure that each day in the report covers a full 24 hour period, the billing data that you export only contains data up to the most recent midnight, Pacific Time.
- For example, if you add labels such as service:default , service:backend and service:frontend to your App Engine services, you can compare how these different services use outgoing bandwidth, instance hours, and other resources .

### "Debugging an instance \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)
- Source ID: `site-docs-reference-2`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Debugging an instance Stay organized with collections Save and categorize content based on your preferences.
- In order to debug an instance, your role must contain the appengine.instances.enableDebug permission.
- Note: This guide is applicable to all runtimes in the flexible environment except for .NET.
- Understanding common containers In addition to the container running your application code, your instance may also have the following containers: Container and Source Code Description cloud-sql Ensures secure connections to your Cloud SQL instance. fluentd logger Logging agent. nginx proxy Proxies requests to the application. opentelemetry-collector Receives, processes, and exports telemetry data. stackdriver-monitoring-agent Collects, stores, and monitors system information.

