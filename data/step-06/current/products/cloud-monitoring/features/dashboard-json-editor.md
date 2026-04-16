---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.949Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Dashboard JSON editor"
feature_slug: "dashboard-json-editor"
latest_feature_date: "2021-06-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "dashboard"
  - "json"
  - "editor"
  - "page"
  - "includes"
  - "editing"
  - "downloading"
  - "uploading"
---

# Dashboard JSON editor

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The dashboard page includes a JSON editor for editing, downloading, and uploading dashboard definitions.

## Extended Definition

The dashboard page includes a JSON editor for editing, downloading, and uploading dashboard definitions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- Authorization To get the permissions that you need to view dashboards and create alerting policies by using the Google Cloud console or to create, edit, and delete metric-exclusion rules, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your project.
- Note: The Metrics Management page lists only alerting policies and custom dashboards defined in the current project; metrics listed with no alerting policies or custom dashboards might have alerting policies or custom dashboards in another project in your metrics scope.
- You can use the Metrics Management page to do the following: View metric usage at a glance : See how your metrics are being used in queries , custom dashboards , or alerting policies .

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Add the staticLabel label with the value "A static value" to all ingested metrics. metrics: receivers: prometheus: type: prometheus config: scrape configs: - job name: 'json exporter' scrape interval: 10s metrics path: /probe params: module: [default] target: [http://localhost:8000/examples/data.json] static configs: - targets: ['localhost:7979'] relabel configs: - source labels: [ meta gce zone] regex: '(.+)' replacement: '${1}' target label: zone metric relabel configs: - source labels: [ name ] regex: 'example global value' action: drop - source labels: [ address ] action: replace replacement: 'A static value' target label: staticLabel Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enter the following query into the editor, and then click Run query : up If your data is being ingested, then you see a chart like the following: If you are running the JSON Exporter example , then you can also issue queries like the following: Query all data for a specific exported metric by name, for example: example value count The following shows a chart for the example value count , including labels defined by the JSON Exporter application and labels added by the Ops Agent: Query data for an exported metric that originated in a specific namespace.
- This section also includes a modified version of the receiver for the JSON Exporter example that uses the relabeling options.
- Setting up the example requires the following resources, which you might have to install: git curl make python3 Go language, version 1.19 or higher Create or configure your application To obtain and run the JSON Exporter, use the following procedure: Clone the json exporter repository and check out the exporter by running the following commands: git clone https://github.com/prometheus-community/json exporter.git cd json exporter git checkout v0.5.0 Build the exporter by running the following command: make build Start the Python HTTP server by running the following command: python3 -m http.server 8000 & Start the JSON Exporter by running the following command: ./json exporter --config.file examples/config.yml & Query the JSON Exporter to verify that it is running and exposing metrics on port 7979: curl "http://localhost:7979/probe?module=default&target=http://localhost:8000/examples/data.json" If the query was successful, then you see output that resembles the following: HELP example global value Example of a top-level global value scrape in the json TYPE example global value untyped example global value{environment="beta",location="planet-mars"} 1234 HELP example value active Example of sub-level value scrapes from a json TYPE example value active untyped example value active{environment="beta",id="id-A"} 1 example value active{environment="beta",id="id-C"} 1 HELP example value boolean Example of sub-level value scrapes from a json TYPE example value boolean untyped example value boolean{environment="beta",id="id-A"} 1 example value boolean{environment="beta",id="id-C"} 0 HELP example value count Example of sub-level value scrapes from a json TYPE example value count untyped example value count{environment="beta",id="id-A"} 1 example value count{environment="beta",id="id-C"} 3 In this output, the strings like example value active are the metric names, with labels and values in braces.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Data visualization As you instantiate Google Cloud resources or register applications with App Hub , the dashboard service automatically creates Google Cloud-managed dashboards .
- Proactive monitoring and validation To test the availability, consistency, and performance of your services, applications, web pages, and APIs, create synthetic monitors .
- The following screenshot illustrates a chart with this configuration: Pricing To learn about pricing for Cloud Monitoring, see the Google Cloud Observability pricing page.

