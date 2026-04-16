---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.774Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Application Monitoring support for Cloud Deploy"
feature_slug: "application-monitoring-support-for-cloud-deploy"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
  - "https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring"
keywords:
  - "application"
  - "monitoring"
  - "deploy"
  - "supports"
  - "delivery"
  - "pipelines"
---

# Application Monitoring support for Cloud Deploy

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Application Monitoring supports Cloud Deploy delivery pipelines.

## Extended Definition

Application Monitoring supports Cloud Deploy delivery pipelines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)

## Supporting Pages

### Application Monitoring supported infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Deploy delivery pipelines (Regional) Application labels aren't attached to spans.
- The dashboards that Application Monitoring creates display log and metric data, including the following golden signals, when that data includes application-specific labels: Traffic : Incoming request rates on the service or workload over the selected time period.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Application Monitoring supported infrastructure Stay organized with collections Save and categorize content based on your preferences.
- To learn how to use a StatefulSet or deploy a stateful application, see About StatefulSets in Google Kubernetes Engine .

### "Instrument an application for Application Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- The googlemanagedprometheus exporter converts the http.server.request.duration OpenTelemetry metric into a Prometheus metric that has the following properties: Name: prometheus/http server request duration seconds/histogram Metric: prometheus.googleapis.com/http server request duration seconds/histogram Resource types: prometheus target Unit: s Kind: CUMULATIVE Value type: DISTRIBUTION When your Google Cloud project contains the http server request duration seconds metric, then your Application Monitoring dashboards display the traffic level, server error rate and the latency for HTTP requests.
- Verify metric labels To verify that your application is sending Prometheus metrics, to your project, do the following: Verify that your application is sending Prometheus metrics to your project: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- It also describes how to have your application export a metric that is used by Application Monitoring to report the traffic level, server error rate, or the latency for HTTP requests workloads that run on Google Kubernetes Engine.
- If you run workloads on Google Kubernetes Engine, then this approach exports the HTTP server metric that Application Monitoring uses to generate values for the traffic level, server error rate, and the latency for HTTP requests.

### "Set up Google Cloud Observability for Application Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- If you deploy workloads on Google Kubernetes Engine and want the traffic, latency, and error rate golden signals displayed on your Application Monitoring dashboards, then instrument your application with OpenTelemetry.
- These labels identify your application and your service or workload: apphub application location apphub application id apphub service id or apphub workload id You can also add user labels to an alerting policy by using the Google Cloud CLI, Terraform, or the Cloud Monitoring API.
- Associate an alerting policy with an App Hub application To view your alerting policies from the context of Application Monitoring, you must associate them with a service or workload by adding application-specific labels to the alerting policy.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Set up Google Cloud Observability for Application Monitoring Stay organized with collections Save and categorize content based on your preferences.

