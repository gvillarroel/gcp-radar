---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.799Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Dashboard variables and dashboard-level filtering"
feature_slug: "dashboard-variables-and-dashboard-level-filtering"
latest_feature_date: "2024-11-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
keywords:
  - "dashboard"
  - "variables"
  - "level"
  - "filtering"
  - "monitoring"
  - "supports"
  - "generally"
  - "available"
---

# Dashboard variables and dashboard-level filtering

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Cloud Monitoring supports generally available dashboard variables and dashboard-level filtering, including multi-value selection and multiple default values for pinned filters and variables.

## Extended Definition

Cloud Monitoring supports generally available dashboard variables and dashboard-level filtering, including multi-value selection and multiple default values for pinned filters and variables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)

## Supporting Pages

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- To determine the version of the installed agent, hover over the Ops Agent label on the Compute Engine or Monitoring dashboard.
- For example, suppose you created and rolled out a global policy by using the following command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" To extend the policy to VMs created in previously unused zones, restart the rollout by using the following command: gcloud beta compute global-vm-extension-policies update test-policy POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" \ --rollout-retry-uuid= UUID Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- If you haven't done so already, install the beta component of the gcloud CLI by running the following command: gcloud components install beta To check if you have the beta component installed, run the following command: gcloud components list If you previously installed the beta component, verify that have the latest version: gcloud components update Uninstall any observability agents Before creating a VM Extension Manager policy to manage the Ops Agent on a VM, ensure that there are no instances of the Ops Agent or the legacy Monitoring agent and Logging agent already on the VM.
- Install the Ops Agent with a fast rollout plan at higher priority (global only) To create a global policy that installs the latest version of the Ops Agent on by using a higher-than-default priority and the fast-rollout plan , use the following gcloud beta compute global-vm-extension-policies create command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-predefined-plan=fast rollout \ --priority=500 Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Monitoring supports the following tools for querying metric data: A query-builder based interface built into tools like Metrics Explorer, the dashboard-builder interface, and the alert-policy configuration interface.
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test cumulative/counter", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test cumulative/counter", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.cumulative", "labels": [ { "key": "instrumentation source" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.cumulative", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The following table summarizes some of the format differences imposed by the APIs used to ingest OTLP metrics: Prometheus API Monitoring API Metric domain prometheus.googleapis.com workload.googleapis.com OTLP metric name Modified during ingestion Used as provided Monitored resource prometheus target gce instance Ingestion formats and queries The metrics mode used in the OTLP receiver affects the way you query the resulting metrics in Cloud Monitoring when you build charts, dashboards, and alerting policies.
- When you configure a chart, dashboard, or alerting policy in Cloud Monitoring, the configuration includes a query for the data on which the chart, dashboard, or alerting policy operates.
- After the Ops Agent has collected your metrics, you can use the features of Cloud Monitoring, including charts, dashboards, and alerting policies, to monitor your metrics.

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- The following sections describe the query tools available in Cloud Monitoring with Metrics Explorer: PromQL Monitoring filters You can create Cloud Monitoring dashboards and alerting policies for your metrics.
- You must design and create any Cloud Monitoring dashboards you need, based on the set of metrics you are ingesting and on your business needs.
- You can also create Cloud Monitoring dashboards and alerting policies to monitor your Prometheus metrics.
- Setting up the example requires the following resources, which you might have to install: git curl make python3 Go language, version 1.19 or higher Create or configure your application To obtain and run the JSON Exporter, use the following procedure: Clone the json exporter repository and check out the exporter by running the following commands: git clone https://github.com/prometheus-community/json exporter.git cd json exporter git checkout v0.5.0 Build the exporter by running the following command: make build Start the Python HTTP server by running the following command: python3 -m http.server 8000 & Start the JSON Exporter by running the following command: ./json exporter --config.file examples/config.yml & Query the JSON Exporter to verify that it is running and exposing metrics on port 7979: curl "http://localhost:7979/probe?module=default&target=http://localhost:8000/examples/data.json" If the query was successful, then you see output that resembles the following: HELP example global value Example of a top-level global value scrape in the json TYPE example global value untyped example global value{environment="beta",location="planet-mars"} 1234 HELP example value active Example of sub-level value scrapes from a json TYPE example value active untyped example value active{environment="beta",id="id-A"} 1 example value active{environment="beta",id="id-C"} 1 HELP example value boolean Example of sub-level value scrapes from a json TYPE example value boolean untyped example value boolean{environment="beta",id="id-A"} 1 example value boolean{environment="beta",id="id-C"} 0 HELP example value count Example of sub-level value scrapes from a json TYPE example value count untyped example value count{environment="beta",id="id-A"} 1 example value count{environment="beta",id="id-C"} 3 In this output, the strings like example value active are the metric names, with labels and values in braces.

