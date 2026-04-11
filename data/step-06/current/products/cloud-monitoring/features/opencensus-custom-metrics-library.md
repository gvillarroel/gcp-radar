---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.144Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "OpenCensus custom metrics library"
feature_slug: "opencensus-custom-metrics-library"
latest_feature_date: "2019-04-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
keywords:
  - "opencensus"
  - "custom"
  - "metrics"
  - "library"
  - "is"
  - "the"
  - "generally"
  - "available"
---

# OpenCensus custom metrics library

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

OpenCensus is the generally available official library for writing user-defined metrics to Stackdriver Monitoring.

## Extended Definition

OpenCensus is the generally available official library for writing user-defined metrics to Stackdriver Monitoring.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- April 23, 2019 Feature The OpenCensus library is now generally available as the official library for user-defined metrics in Stackdriver Monitoring.
- November 08, 2023 Change Observability for Google Kubernetes Engine: The curated set of kube state metrics is now Generally Available.
- December 05, 2018 Feature Documentation for using OpenCensus to capture custom metrics in Java applications is now available.
- Change The API to manage the metrics scope of a Google Cloud project is now Generally Available.

### "User-defined metrics from the agent \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- TypeInstance "^active-connections$" # Match on type instance . < / Match > < Target "set" > Specify the metric descriptor type : MetaData "stackdriver metric type" "custom.googleapis.com/nginx/active connections" Specify a value for the "service name" label ; clean it up in the next Target : MetaData "label:service name" "%{plugin instance}" < / Target > < Target "replace" > Remove the "nginx " prefix in the service name to get the real service name : MetaData "label:service name" "nginx " "" < / Target > < / Rule > The following rule is run after rewriting your metric , or if the metric wasn ' t one of your user - defined metrics .
- The time series data for this metric descriptor must contain the following information, because of the way the metric descriptor is defined: Metric type: custom.googleapis.com/nginx/active connections Metric label values: service name : either "my service a" or "my service b" Other time series information, including the associated monitored resource —the VM instance sending the data—and the metric's data point, is automatically obtained by the agent for all metrics.
- PreCacheChain "PreCache" < Chain "PreCache" > < Rule "jump to custom metrics from curl json" > If the plugin name and instance match , this is PROBABLY a metric we ' re looking for : < Match regex > Plugin "^curl json$" PluginInstance "^nginx " < / Match > < Target "jump" > Go execute the following chain ; then come back .
- For example: custom.googleapis.com/my measurement custom.googleapis.com/instance/network/received packets count custom.googleapis.com/instance/network/sent packets count The recommended naming is hierarchical to make the metrics easier for people to keep track of.

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- The following meta labels are available on targets for you to use in the relabel configs section: meta gce instance id : the numeric ID of the Compute Engine instance (local) meta gce instance name : the name of the Compute Engine instance (local); the Ops Agent automatically places this value in the mutable instance name label on your metrics. meta gce machine type : full or partial URL of the machine type of the instance; the Ops Agent automatically places this value in the mutable machine type label on your metrics. meta gce metadata NAME : each metadata item of the instance meta gce network : the network URL of the instance meta gce private ip : the private IP address of the instance meta gce interface ipv4 NAME : IPv4 address of each named interface meta gce project : the Google Cloud project in which the instance is running (local) meta gce public ip : the public IP address of the instance, if present meta gce tags : comma separated list of instance tags meta gce zone : the Compute Engine zone URL in which the instance is running The values of these labels are set when the Ops Agent starts.
- Compute Engine meta labels available during relabeling When the Ops Agent scrapes metrics, it includes a set of meta labels whose values are based on the configuration of the Compute Engine VM on which the agent is running.
- Setting up the example requires the following resources, which you might have to install: git curl make python3 Go language, version 1.19 or higher Create or configure your application To obtain and run the JSON Exporter, use the following procedure: Clone the json exporter repository and check out the exporter by running the following commands: git clone https://github.com/prometheus-community/json exporter.git cd json exporter git checkout v0.5.0 Build the exporter by running the following command: make build Start the Python HTTP server by running the following command: python3 -m http.server 8000 & Start the JSON Exporter by running the following command: ./json exporter --config.file examples/config.yml & Query the JSON Exporter to verify that it is running and exposing metrics on port 7979: curl "http://localhost:7979/probe?module=default&target=http://localhost:8000/examples/data.json" If the query was successful, then you see output that resembles the following: HELP example global value Example of a top-level global value scrape in the json TYPE example global value untyped example global value{environment="beta",location="planet-mars"} 1234 HELP example value active Example of sub-level value scrapes from a json TYPE example value active untyped example value active{environment="beta",id="id-A"} 1 example value active{environment="beta",id="id-C"} 1 HELP example value boolean Example of sub-level value scrapes from a json TYPE example value boolean untyped example value boolean{environment="beta",id="id-A"} 1 example value boolean{environment="beta",id="id-C"} 0 HELP example value count Example of sub-level value scrapes from a json TYPE example value count untyped example value count{environment="beta",id="id-A"} 1 example value count{environment="beta",id="id-C"} 3 In this output, the strings like example value active are the metric names, with labels and values in braces.
- The full structure of the Prometheus receiver is shown in the following: metrics: receivers: prom application: type: prometheus config: scrape configs: - job name: ' STRING ' # must be unique across all Prometheus receivers scrape interval: # duration, like 10m or 15s scrape timeout: # duration, like 10m or 15s metrics path: # resource path for metrics, default = /metrics honor timestamps: # boolean, default = false scheme: # http or https, default = http params: - STRING : STRING basic auth: username: STRING password: SECRET password file: STRING authorization: type: STRING # default = Bearer credentials: SECRET credentials file: FILENAME oauth2: OAUTH2 # See Prometheus oauth2 follow redirects: # boolean, default = true enable http2: # boolean, default = true tls config: TLS CONFIG # See Prometheus tls config proxy url: STRING static configs: STATIC CONFIG # See Prometheus static config relabel configs: RELABEL CONFIG # See Prometheus relabel config metric relabel configs: METRIC RELABEL CONFIGS # See Prometheus metric relabel configs For examples of relabeling configs, see Additional receiver configuration .

