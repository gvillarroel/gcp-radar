---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.007Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Alerting Policy Creation UI"
feature_slug: "alerting-policy-creation-ui"
latest_feature_date: "2018-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient"
keywords:
  - "alerting"
  - "policy"
  - "creation"
  - "ui"
  - "metrics"
  - "explorer"
  - "based"
  - "interface"
---

# Alerting Policy Creation UI

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

A Metrics Explorer-based interface provides fine-grained control for creating alerting policies.

## Extended Definition

A Metrics Explorer-based interface provides fine-grained control for creating alerting policies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Create alerts based on metric ingestion To be notified of a spike, dip, or trend in the metric collection rates for your billable metrics, create an alerting policy.
- To create an alerting policy that monitors a metric collection rate, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- You can list metrics that appear in no alerting policy or in no custom dashboard defined in the current Google Cloud project by selecting the No alert policies or No custom dashboards quick filter.
- If you have metrics that aren't used in an alerting policy or a custom dashboard and are never queried, then you might be paying for metrics and not be getting any observability benefit from them.

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Monitoring supports the following tools for querying metric data: A query-builder based interface built into tools like Metrics Explorer, the dashboard-builder interface, and the alert-policy configuration interface.
- These examples use Metrics Explorer, but the principles are the same for dashboards and alerting policies.
- These examples use Metrics Explorer, but the principles are the same for dashboards and alerting policies.
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test cumulative/counter", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test cumulative/counter", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.cumulative", "labels": [ { "key": "instrumentation source" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.cumulative", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The following table summarizes some of the format differences imposed by the APIs used to ingest OTLP metrics: Prometheus API Monitoring API Metric domain prometheus.googleapis.com workload.googleapis.com OTLP metric name Modified during ingestion Used as provided Monitored resource prometheus target gce instance Ingestion formats and queries The metrics mode used in the OTLP receiver affects the way you query the resulting metrics in Cloud Monitoring when you build charts, dashboards, and alerting policies.

### "Class AlertPolicyServiceAsyncClient (2.30.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The format is: :: projects/[PROJECT ID OR NUMBER] Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. name\ must be a host project of a Metrics Scope, otherwise INVALID ARGUMENT error will return.
- Exceptions Type Description google.auth.exceptions.MutualTlsChannelError If mutual TLS transport creation failed for any reason. alert policy condition path alert policy condition path ( project : str , alert policy : str , condition : str ) - > str Returns a fully-qualified alert policy condition string. alert policy path alert policy path ( project : str , alert policy : str ) - > str Returns a fully-qualified alert policy string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create alert policy create alert policy ( request : typing .
- If this field is not empty, each listed field in the existing alerting policy is set to the value of the corresponding field in the supplied policy ( alert policy ), or to the field's default value if the field is not in the supplied alerting policy.
- The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form /alertPolicies/[ALERT POLICY ID] , identifying the policy in the container.

