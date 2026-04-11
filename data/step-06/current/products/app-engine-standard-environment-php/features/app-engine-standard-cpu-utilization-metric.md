---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.538Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine standard CPU Utilization metric"
feature_slug: "app-engine-standard-cpu-utilization-metric"
latest_feature_date: "2021-03-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "Cloud Monitoring metric"
  - "CPU usage metric"
  - "CPU Utilization metric"
  - "CPU utilization metric"
  - "active instances CPU"
  - "App Engine standard metric"
  - "CPU utilization"
---

# App Engine standard CPU Utilization metric

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

App Engine standard environment added a new CPU Utilization metric reporting average CPU usage across active instances.

## Extended Definition

App Engine standard environment added a new CPU Utilization metric reporting average CPU usage across active instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- To display charts for the connector's throughput, number of instances, and CPU utilization metrics over time by using the Google Cloud console: Go to the Serverless VPC Access overview page.
- Update a connector You can update and monitor the following attributes of your connector by using the Google Cloud console, Google Cloud CLI, or the API: Machine (instance) type Minimum and maximum number of instances Recent throughput, number of instances, and CPU utilization Update machine type Caution: Changing machine type can cause some long-running connections to drop.
- Poor network performance or high idle CPU utilization Using a single connector for thousands of instances can cause performance degradation and elevated idle CPU utilization.
- For example, if CPU utilization spikes, you might try increasing the maximum number of instances for better results.

