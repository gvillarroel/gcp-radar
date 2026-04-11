---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.774Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "CPU Utilization metric for App Engine standard"
feature_slug: "cpu-utilization-metric-for-app-engine-standard"
latest_feature_date: "2021-03-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "active instances CPU average"
  - "App Engine metric name"
  - "Cloud Monitoring App Engine CPU"
  - "CPU Utilization metric"
  - "CPU usage metric"
  - "App Engine CPU metric"
  - "App Engine standard CPU utilization"
  - "CPU utilization"
---

# CPU Utilization metric for App Engine standard

Product: App Engine standard environment Go
Coverage: LOW

## Step 02 Summary

App Engine standard environments gain a CPU Utilization metric that reports CPU usage averaged across active instances.

## Extended Definition

In the documented App Engine standard context, CPU Utilization is a Cloud Monitoring metric surfaced for Serverless VPC Access connectors, shown in console charts together with throughput and instance count over time. The metric can be monitored and adjusted indirectly through connector management (console/CLI/API), and operators are advised to react to trends such as CPU utilization spikes or elevated idle CPU utilization by tuning connector settings.

## Evidence Summary

The page confirms CPU utilization is a monitored connector metric in App Engine standard VPC networking docs and references operational guidance around it, but it does not clearly establish a standalone App Engine standard "CPU Utilization" metric definition across app instances.

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

