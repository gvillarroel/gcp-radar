---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.069Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "CPU Utilization metric for App Engine standard"
feature_slug: "cpu-utilization-metric-for-app-engine-standard"
latest_feature_date: "2021-03-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes"
keywords:
  - "active instance CPU average"
  - "App Engine monitoring metrics"
  - "CPU usage reporting"
  - "CPU Utilization metric"
  - "CPU utilization metric"
  - "CPU utilization"
  - "CPU Utilization"
---

# CPU Utilization metric for App Engine standard

Product: App Engine standard environment Node.js
Coverage: LOW

## Step 02 Summary

App Engine standard added a new CPU Utilization metric that reports average CPU usage across active instances.

## Extended Definition

App Engine standard added a new CPU Utilization metric that reports average CPU usage across active instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/nodejs/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- To display charts for the connector's throughput, number of instances, and CPU utilization metrics over time by using the Google Cloud console: Go to the Serverless VPC Access overview page.
- Update a connector You can update and monitor the following attributes of your connector by using the Google Cloud console, Google Cloud CLI, or the API: Machine (instance) type Minimum and maximum number of instances Recent throughput, number of instances, and CPU utilization Update machine type Caution: Changing machine type can cause some long-running connections to drop.
- Poor network performance or high idle CPU utilization Using a single connector for thousands of instances can cause performance degradation and elevated idle CPU utilization.
- For example, if CPU utilization spikes, you might try increasing the maximum number of instances for better results.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/nodejs/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- To display charts for the connector's throughput, number of instances, and CPU utilization metrics over time by using the Google Cloud console: Go to the Serverless VPC Access overview page.
- Update a connector You can update and monitor the following attributes of your connector by using the Google Cloud console, Google Cloud CLI, or the API: Machine (instance) type Minimum and maximum number of instances Recent throughput, number of instances, and CPU utilization Update machine type Caution: Changing machine type can cause some long-running connections to drop.
- Poor network performance or high idle CPU utilization Using a single connector for thousands of instances can cause performance degradation and elevated idle CPU utilization.
- For example, if CPU utilization spikes, you might try increasing the maximum number of instances for better results.

### "App Engine standard environment for Node.js release notes \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- March 26, 2021 Feature App Engine standard environment provides a new metric, CPU Utilization , which indicates the CPU utilization average over all active instances.
- New target CPU utilization setting lets you optimize between latency and cost.

