---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.681Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "App Engine flexible instance billing granularity"
feature_slug: "app-engine-flexible-instance-billing-granularity"
latest_feature_date: "2017-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources"
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
  - "https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "instance"
  - "billing"
  - "granularity"
  - "environment"
  - "was"
---

# App Engine flexible instance billing granularity

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

Instance billing for App Engine flexible environment was changed from per-minute to per-second increments, with minimum billed resource usage reduced from 10 minutes to 1 minute.

## Extended Definition

Instance billing for App Engine flexible environment was changed from per-minute to per-second increments, with minimum billed resource usage reduced from 10 minutes to 1 minute.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources)
- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)

## Supporting Pages

### "Labeling App Engine resources \_|\_ App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/labeling-resources)
- Source ID: `site-docs-reference-2`
- Final score: 63
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The App Engine flexible environment does not support billing labels for Firestore in Datastore mode (Datastore) usage.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Labeling App Engine resources Stay organized with collections Save and categorize content based on your preferences.
- TABLEID ], labels )) WHERE cost > 0.0 and labels . key is not null and resource type = ' Out Bandwidth ' LIMIT 100 BigQuery returns your data with a flattened output: product resource type start time end time labels key labels value cost App Engine Out Bandwidth 2017-10-07 22:00:00 2017-10-07 23:00:00 service default 0.020033 App Engine Out Bandwidth 2017-10-07 13:00:00 2017-10-07 14:00:00 service frontend 0.016042 App Engine Out Bandwidth 2017-10-07 06:00:00 2017-10-07 07:00:00 service backend task 0.013125 App Engine Out Bandwidth 2017-10-07 21:00:00 2017-10-07 22:00:00 service default 0.020722 App Engine Out Bandwidth 2017-10-07 19:00:00 2017-10-07 20:00:00 service frontend 0.020725 App Engine Out Bandwidth 2017-10-08 04:00:00 2017-10-08 05:00:00 service backend task 0.02072 App Engine Out Bandwidth 2017-10-08 02:00:00 2017-10-08 03:00:00 service default 0.020723 App Engine Out Bandwidth 2017-10-07 14:00:00 2017-10-07 15:00:00 service frontend 0.020724 App Engine Out Bandwidth 2017-10-07 23:00:00 2017-10-08 00:00:00 service backend task 0.021417 Time periods in billing reports To ensure that each day in the report covers a full 24 hour period, the billing data that you export only contains data up to the most recent midnight, Pacific Time.
- For example, if you add labels such as service:default , service:backend and service:frontend to your App Engine services, you can compare how these different services use outgoing bandwidth, instance hours, and other resources .

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- Quotas for the App Engine flexible environment When you deploy an application to the App Engine flexible environment, some Google Cloud resources are consumed.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Maximum worker connections in Nginx per instance: 4,096 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If the number of idle instances created by App Engine exceeds the maximum you specify in the Performance Settings tab of the Google Cloud console, the excess instances do not accrue instance hours.

### "Debugging an instance \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Debugging an instance Stay organized with collections Save and categorize content based on your preferences.
- In order to debug an instance, your role must contain the appengine.instances.enableDebug permission.
- Note: This guide is applicable to all runtimes in the flexible environment except for .NET.
- Understanding common containers In addition to the container running your application code, your instance may also have the following containers: Container and Source Code Description cloud-sql Ensures secure connections to your Cloud SQL instance. fluentd logger Logging agent. nginx proxy Proxies requests to the application. opentelemetry-collector Receives, processes, and exports telemetry data. stackdriver-monitoring-agent Collects, stores, and monitors system information.

