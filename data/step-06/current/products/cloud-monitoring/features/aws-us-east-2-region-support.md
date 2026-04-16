---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.055Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "AWS US East 2 Region Support"
feature_slug: "aws-us-east-2-region-support"
latest_feature_date: "2016-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/region-support"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
  - "https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring"
keywords:
  - "aws"
  - "us"
  - "east"
  - "region"
  - "monitoring"
  - "supports"
---

# AWS US East 2 Region Support

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Monitoring supports the AWS region us-east-2.

## Extended Definition

Monitoring supports the AWS region us-east-2.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)

## Supporting Pages

### Data regionality for Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Observability Cloud Monitoring Guides Send feedback Data regionality for Cloud Monitoring Stay organized with collections Save and categorize content based on your preferences.
- To store a time series in a specific region , the monitored resource against which the time series is written must have one of the following labels and the value of the label must be valid: location zone region A time series is discarded when the monitored resource against which the time series is written has one of the previous labels and the value of the label isn't recognized or isn't specified.
- Storage of time-series data Google agents, client-side code using libraries like OpenTelemetry, and third-party sources such as BindPlane , write time series by using the Cloud Monitoring API.
- Data written by Google Cloud products Google Cloud products deployable by zone or by region store any time series that they generate in the same region to which they are deployed.

### Application Monitoring supported infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Agent Engine agents (Regional) Traffic : reasoning engine/request count Server error rate : Ratio of requests whose response status is at least 500 and no more than 599 to the total number of requests.
- Compute Engine MIGs (Regional and zonal) Traffic : instance/network/received bytes count Saturation : instance/cpu/utilization Dataproc Metastore service (Regional and multi-regional) Traffic : The metric depends on whether the service is single- or multi-region: Single: service/request count .
- The following status values indicate an error: DEADLINE EXCEEDED INTERNAL UNAVAILABLE UNIMPLEMENTED P95 latency : The metric depends on whether the service is single- or multi-region: Single: service/request latencies Multi: service/multi region/request latencies .
- The dashboards that Application Monitoring creates display log and metric data, including the following golden signals, when that data includes application-specific labels: Traffic : Incoming request rates on the service or workload over the selected time period.

### "Instrument an application for Application Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- The googlemanagedprometheus exporter converts the http.server.request.duration OpenTelemetry metric into a Prometheus metric that has the following properties: Name: prometheus/http server request duration seconds/histogram Metric: prometheus.googleapis.com/http server request duration seconds/histogram Resource types: prometheus target Unit: s Kind: CUMULATIVE Value type: DISTRIBUTION When your Google Cloud project contains the http server request duration seconds metric, then your Application Monitoring dashboards display the traffic level, server error rate and the latency for HTTP requests.
- Verify metric labels To verify that your application is sending Prometheus metrics, to your project, do the following: Verify that your application is sending Prometheus metrics to your project: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- You must also attach the following attributes: gcp.gce.instance group manager.name gcp.gce.instance group manager.region or gcp.gce.instance group manager.zone Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Attributes that identify your project and resource location Set the following attributes: cloud.provider : Set to "gcp" . cloud.account.id : Set to your project ID. cloud.availability zone or cloud.region : Set to the zone or region where your resources are located.

