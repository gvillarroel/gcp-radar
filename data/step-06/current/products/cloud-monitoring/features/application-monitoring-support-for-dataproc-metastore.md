---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.775Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Application Monitoring support for Dataproc Metastore"
feature_slug: "application-monitoring-support-for-dataproc-metastore"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
  - "https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
keywords:
  - "application"
  - "monitoring"
  - "dataproc"
  - "metastore"
  - "supports"
---

# Application Monitoring support for Dataproc Metastore

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Application Monitoring supports Dataproc Metastore services.

## Extended Definition

Application Monitoring supports Dataproc Metastore services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)

## Supporting Pages

### Application Monitoring supported infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Compute Engine MIGs (Regional and zonal) Traffic : instance/network/received bytes count Saturation : instance/cpu/utilization Dataproc Metastore service (Regional and multi-regional) Traffic : The metric depends on whether the service is single- or multi-region: Single: service/request count .
- The dashboards that Application Monitoring creates display log and metric data, including the following golden signals, when that data includes application-specific labels: Traffic : Incoming request rates on the service or workload over the selected time period.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Application Monitoring supported infrastructure Stay organized with collections Save and categorize content based on your preferences.
- The following table lists the infrastructure resources that are integrated with Application Monitoring.

### "Instrument an application for Application Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- The googlemanagedprometheus exporter converts the http.server.request.duration OpenTelemetry metric into a Prometheus metric that has the following properties: Name: prometheus/http server request duration seconds/histogram Metric: prometheus.googleapis.com/http server request duration seconds/histogram Resource types: prometheus target Unit: s Kind: CUMULATIVE Value type: DISTRIBUTION When your Google Cloud project contains the http server request duration seconds metric, then your Application Monitoring dashboards display the traffic level, server error rate and the latency for HTTP requests.
- Verify metric labels To verify that your application is sending Prometheus metrics, to your project, do the following: Verify that your application is sending Prometheus metrics to your project: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- It also describes how to have your application export a metric that is used by Application Monitoring to report the traffic level, server error rate, or the latency for HTTP requests workloads that run on Google Kubernetes Engine.
- If you run workloads on Google Kubernetes Engine, then this approach exports the HTTP server metric that Application Monitoring uses to generate values for the traffic level, server error rate, and the latency for HTTP requests.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- List applications To list the applications you have registered with App Hub, along with information like the number of incidents and the application's location, criticality, and environment, do the following: In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- The following screenshot illustrates the dashboard for a workload: The registration status of a service or workload affects what data Application Monitoring displays on the dashboard for the service or workload: Registered : Application Monitoring uses the application-specific labels and attributes that supported infrastructure and instrumented applications attach to the telemetry they generate.
- Investigate an application To investigate the health of an application, do the following: In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- To open the Application Monitoring dashboard for a service or workload, do the following: In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .

