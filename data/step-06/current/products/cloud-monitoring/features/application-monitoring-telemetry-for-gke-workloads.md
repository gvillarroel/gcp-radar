---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.772Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Application Monitoring telemetry for GKE workloads"
feature_slug: "application-monitoring-telemetry-for-gke-workloads"
latest_feature_date: "2025-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/about-application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring"
keywords:
  - "application"
  - "monitoring"
  - "telemetry"
  - "gke"
  - "workloads"
  - "dashboards"
  - "can"
  - "display"
---

# Application Monitoring telemetry for GKE workloads

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Application Monitoring dashboards can display latency, error rates, and traffic levels for Google Kubernetes Engine workloads instrumented with OpenTelemetry.

## Extended Definition

Application Monitoring dashboards can display latency, error rates, and traffic levels for Google Kubernetes Engine workloads instrumented with OpenTelemetry.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/about-application-monitoring](https://docs.cloud.google.com/monitoring/docs/about-application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- The Application Monitoring dashboards display the following: Details about your registered applications, including their location, criticality, and registered services ( ) and workloads ( ).
- Use dashboard options to explore telemetry The Application Monitoring dashboards display log, metric, trace, and incident information.
- The following screenshot illustrates the dashboard for a workload: The registration status of a service or workload affects what data Application Monitoring displays on the dashboard for the service or workload: Registered : Application Monitoring uses the application-specific labels and attributes that supported infrastructure and instrumented applications attach to the telemetry they generate.
- This document describes how to view the dashboards that Application Monitoring creates for your App Hub applications, services, and workloads.

### Application Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/about-application-monitoring](https://docs.cloud.google.com/monitoring/docs/about-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: For workloads that run on Google Kubernetes Engine, the dashboards that Application Monitoring creates display OpenTelemetry-defined metrics for traffic, latency, and error rate golden signals.
- The dashboards and topology map that Application Monitoring generates for your application let you understand the operational state of your application and its services and workloads.
- The dashboards that Application Monitoring creates display the following: Information about the application, such as the location, criticality, and owners.
- Application Monitoring creates dashboards for your App Hub applications, services, and workloads.

### "Instrument an application for Application Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The googlemanagedprometheus exporter converts the http.server.request.duration OpenTelemetry metric into a Prometheus metric that has the following properties: Name: prometheus/http server request duration seconds/histogram Metric: prometheus.googleapis.com/http server request duration seconds/histogram Resource types: prometheus target Unit: s Kind: CUMULATIVE Value type: DISTRIBUTION When your Google Cloud project contains the http server request duration seconds metric, then your Application Monitoring dashboards display the traffic level, server error rate and the latency for HTTP requests.
- Metric data from instrumentation you added to your applications can include the following metric labels: metric.labels.apphub application {container,id,location} metric.labels.apphub workload {criticality type,environment type,id} Trace spans generated by instrumentation you added to your applications can include the following resource attributes: gcp.apphub.application.{container,id,location} gcp.apphub.{workload,service}.{criticality type,environment type,id} About OpenTelemetry HTTP server metrics There are no system metrics for workloads that run on Google Kubernetes Engine that can report the traffic level, server error rate, or the latency for HTTP requests.
- To have Google Cloud Observability attach application-specific resource attributes to trace data generated by application's services and workloads, do all of the following: Instrument your application with OpenTelemetry and configure your exporter to send trace data to the Telemetry (OTLP) API endpoint.
- Use Cloud Run To have Google Cloud Observability attach application labels to metric data generated by your Cloud Run workloads, do the following: Instrument your application by using either OpenTelemetry or the Managed Service for Prometheus sidecar for Cloud Run.

