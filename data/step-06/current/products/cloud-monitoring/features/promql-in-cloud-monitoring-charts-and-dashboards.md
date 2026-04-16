---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.890Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "PromQL in Cloud Monitoring charts and dashboards"
feature_slug: "promql-in-cloud-monitoring-charts-and-dashboards"
latest_feature_date: "2022-09-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "promql"
  - "monitoring"
  - "charts"
  - "dashboards"
  - "supports"
  - "when"
  - "creating"
---

# PromQL in Cloud Monitoring charts and dashboards

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Cloud Monitoring supports PromQL when creating charts and dashboards.

## Extended Definition

Cloud Monitoring supports PromQL when creating charts and dashboards.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs](https://docs.cloud.google.com/monitoring/docs)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### Cloud Monitoring documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs](https://docs.cloud.google.com/monitoring/docs)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. format list numbered Guides Quickstart: Collect Apache web server metrics with Ops Agent Create alerting policies Configure notification channels Create synthetic monitors Create charts Select metrics for charts and alerts Install the Ops Agent Create metrics with the API Configure a metrics scope More guides find in page Reference Google Cloud metrics Anthos metrics Kubernetes metrics Agent metrics Monitored resource types REST API API Method: projects.timeSeries.list Monitoring filters Monitoring Client Libraries More references info Resources Quotas and limits Release notes Pricing More resources Related resources Training and tutorials Use cases Explore self-paced training, use cases, reference architectures, and code samples with examples of how to use and connect Google Cloud services.
- Use case Use cases SAP HANA monitoring agent user guide By using Cloud Monitoring, you can build dashboards to visualize your SAP HANA metrics and set up alerts based on metric.
- Training Training and tutorials PromQL for Cloud Monitoring Learn how to use the Prometheus Query Language (PromQL) in Cloud Monitoring.
- Training Training and tutorials Cloud Monitoring overview Learn how you can you can use Cloud Monitoring to collect and view performance characteristics of your system, how you can monitor the availability of your services, and how you can be notified of problems with your services.

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test cumulative/counter", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test cumulative/counter", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.cumulative", "labels": [ { "key": "instrumentation source" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.cumulative", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The following table summarizes some of the format differences imposed by the APIs used to ingest OTLP metrics: Prometheus API Monitoring API Metric domain prometheus.googleapis.com workload.googleapis.com OTLP metric name Modified during ingestion Used as provided Monitored resource prometheus target gce instance Ingestion formats and queries The metrics mode used in the OTLP receiver affects the way you query the resulting metrics in Cloud Monitoring when you build charts, dashboards, and alerting policies.
- The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.gauge metric: The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.cumulative metric: PromQL When you use PromQL to query metric data that was ingested by using the Monitoring API, you have to map the metric name to PromQL conventions.
- The Monitoring metric types for the example metrics are mapped to PromQL as follows: workload googleapis com:otlp test gauge workload googleapis com:otlp test cumulative When the metric can be written against only one monitored-resource type, you don't need to specify the resource.
- After the Ops Agent has collected your metrics, you can use the features of Cloud Monitoring, including charts, dashboards, and alerting policies, to monitor your metrics.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Monitoring API: The API supports Prometheus Query Language (PromQL) and Monitoring filter expressions.
- Query languages for Cloud Monitoring When you create an alerting policy or a chart, you must provide a query that describes the data that you want to monitor or chart: Google Cloud console: You can build your query by making selections from menus, or you can write a query.
- Incidents and notifications in Cloud Monitoring To be notified when the value of a performance metric meets criteria that you define, create an alerting policy .
- Monitoring supports common notification channels , including email, Cloud Mobile App, and services such as PagerDuty or Slack.

