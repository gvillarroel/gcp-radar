---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.676Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "CPU utilization metric"
feature_slug: "cpu-utilization-metric"
latest_feature_date: "2021-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine"
keywords:
  - "cpu"
  - "utilization"
  - "metric"
  - "reports"
  - "average"
  - "across"
  - "all"
  - "active"
---

# CPU utilization metric

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

The CPU utilization metric reports the average CPU utilization across all active App Engine standard environment instances.

## Extended Definition

The CPU utilization metric reports the average CPU utilization across all active App Engine standard environment instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- To display charts for the connector's throughput, number of instances, and CPU utilization metrics over time by using the Google Cloud console: Go to the Serverless VPC Access overview page.
- Update a connector You can update and monitor the following attributes of your connector by using the Google Cloud console, Google Cloud CLI, or the API: Machine (instance) type Minimum and maximum number of instances Recent throughput, number of instances, and CPU utilization Update machine type Caution: Changing machine type can cause some long-running connections to drop.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny connector traffic across your VPC network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny connector traffic across your VPC network.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Automatic scaling settings Description Target CPU utilization Sets the CPU utilization ratio threshold to specify the CPU usage threshold at which more instances will be started to handle traffic.
- To reduce the impact of cold-start latency for infrequently used services, you can change the configuration to allow a minimum of one instance to always be active or enable warmup requests .
- You can specify thresholds for each of these metrics, as well as a minimum number instances to keep running at all times by configuring the automatic scaling element.
- Target throughput utilization Sets the throughput threshold for the number of concurrent requests after which more instances will be started to handle traffic.

### An overview of App Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine)
- Source ID: `site-docs-reference-required-5`
- Final score: 35
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this diagram, the app has two services that contain multiple versions, and two of those versions are actively running on multiple instances: Other Google Cloud services, for example Datastore, are shared across your App Engine app.

