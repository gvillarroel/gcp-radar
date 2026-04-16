---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.753Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Application Monitoring support for GKE Ingress"
feature_slug: "application-monitoring-support-for-gke-ingress"
latest_feature_date: "2026-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
  - "https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
keywords:
  - "application"
  - "monitoring"
  - "gke"
  - "ingress"
  - "supports"
  - "resources"
---

# Application Monitoring support for GKE Ingress

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Application Monitoring supports GKE Ingress resources.

## Extended Definition

Application Monitoring supports GKE Ingress resources.

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
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists the infrastructure resources that are integrated with Application Monitoring.
- The dashboards that Application Monitoring creates display log and metric data, including the following golden signals, when that data includes application-specific labels: Traffic : Incoming request rates on the service or workload over the selected time period.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Application Monitoring supported infrastructure Stay organized with collections Save and categorize content based on your preferences.
- GKE Ingress networking.k8s.io/Ingress Traffic : application lb/request count Server error rate : The ratio of the number of requests with a response status of 5xx to the total number of requests.

### "Instrument an application for Application Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- The googlemanagedprometheus exporter converts the http.server.request.duration OpenTelemetry metric into a Prometheus metric that has the following properties: Name: prometheus/http server request duration seconds/histogram Metric: prometheus.googleapis.com/http server request duration seconds/histogram Resource types: prometheus target Unit: s Kind: CUMULATIVE Value type: DISTRIBUTION When your Google Cloud project contains the http server request duration seconds metric, then your Application Monitoring dashboards display the traffic level, server error rate and the latency for HTTP requests.
- Verify metric labels To verify that your application is sending Prometheus metrics, to your project, do the following: Verify that your application is sending Prometheus metrics to your project: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- It also describes how to have your application export a metric that is used by Application Monitoring to report the traffic level, server error rate, or the latency for HTTP requests workloads that run on Google Kubernetes Engine.
- If you run workloads on Google Kubernetes Engine, then this approach exports the HTTP server metric that Application Monitoring uses to generate values for the traffic level, server error rate, and the latency for HTTP requests.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- List applications To list the applications you have registered with App Hub, along with information like the number of incidents and the application's location, criticality, and environment, do the following: In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- The following screenshot illustrates the dashboard for a workload: The registration status of a service or workload affects what data Application Monitoring displays on the dashboard for the service or workload: Registered : Application Monitoring uses the application-specific labels and attributes that supported infrastructure and instrumented applications attach to the telemetry they generate.
- Investigate an application To investigate the health of an application, do the following: In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- To open the Application Monitoring dashboard for a service or workload, do the following: In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .

