---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.143Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Service Monitoring API"
feature_slug: "service-monitoring-api"
latest_feature_date: "2019-11-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent"
keywords:
  - "monitoring"
  - "api"
  - "the"
  - "lets"
  - "users"
  - "create"
  - "services"
  - "define"
---

# Service Monitoring API

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The Service Monitoring API lets users create services, define SLOs, and create alerting policies for them.

## Extended Definition

The Service Monitoring API lets users create services, define SLOs, and create alerting policies for them.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- October 13, 2022 Change SLO monitoring : You can now define a set of generic services by using the Service Monitoring API.
- The API, part of the Stackdriver Monitoring API , lets you create, edit, and manage uptime checks .
- The API, part of the Stackdriver Monitoring API , lets you create and edit uptime checks .
- For more information, see the following documents: Display the most recent data in tabular form API Example: Dashboard with a TimeSeriesTable widget September 06, 2024 Feature The Metrics management page in Cloud Monitoring now shows you the sources of metric reads and lets you exclude unneeded metrics entirely, eliminating the cost of ingesting them.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Proactive monitoring and validation To test the availability, consistency, and performance of your services, applications, web pages, and APIs, create synthetic monitors .
- User-defined metrics that are created by using the Cloud Monitoring API or by using a library such as OpenTelemetry .
- Incidents and notifications in Cloud Monitoring To be notified when the value of a performance metric meets criteria that you define, create an alerting policy .
- You can create and manage synthetic monitors by using the Google Cloud console, the Cloud Monitoring API, the Google Cloud CLI, or Terraform.

### "User-defined metrics from the agent \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Collectd metrics that have the metadata key stackdriver metric type and a single data source are handled as user-defined metrics and sent to Monitoring using the projects.timeSeries.create method in the Monitoring API.
- If you write a data point to Monitoring that uses a metric type that isn't defined, then a new metric descriptor is created for the data point.
- If you discover that you have created metric descriptors you no longer want, you can find and delete the descriptors using the Monitoring API.
- TypeInstance "^active-connections$" # Match on type instance . < / Match > < Target "set" > Specify the metric descriptor type : MetaData "stackdriver metric type" "custom.googleapis.com/nginx/active connections" Specify a value for the "service name" label ; clean it up in the next Target : MetaData "label:service name" "%{plugin instance}" < / Target > < Target "replace" > Remove the "nginx " prefix in the service name to get the real service name : MetaData "label:service name" "nginx " "" < / Target > < / Rule > The following rule is run after rewriting your metric , or if the metric wasn ' t one of your user - defined metrics .

