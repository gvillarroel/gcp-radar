---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.553Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Compute Engine Resource Names in Logs Explorer"
feature_slug: "compute-engine-resource-names-in-logs-explorer"
latest_feature_date: "2022-02-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/api/gcloud-logging"
  - "https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging"
keywords:
  - "compute"
  - "engine"
  - "resource"
  - "names"
  - "in"
  - "logs"
  - "explorer"
  - "supports"
---

# Compute Engine Resource Names in Logs Explorer

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Logs Explorer supports Compute Engine resource names alongside resource IDs.

## Extended Definition

Logs Explorer supports Compute Engine resource names alongside resource IDs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- [https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging](https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- View Compute Engine logs For certain Compute Engine resource types, such as gce instance and gce network , you see the resource name with the resource ID as subtext in several places in the Logs Explorer.
- View Monitoring data For certain logs, such as GKE and Compute Engine logs, you can select the resource type from the log's summary line to display a menu with the following options: View monitoring details : opens a details panel for a GKE resource.
- You might see Compute Engine resource names in the following places: Query pane filter menus : Compute Engine resource types show resource names, with their corresponding resource IDs as subtext.
- Can't find console logs for a VM instance Logs written to the console of a Compute Engine instance might not be available in the Logs Explorer.

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Examples List all the resource types that have instance in their names: gcloud logging resource - descriptors list -- filter = "type:instance" Result: TYPE DESCRIPTION KEY gce instance A virtual machine instance hosted in Compute Engine . project id , instance id , zone spanner instance A Cloud Spanner instance . project id , instance id , location , instance config redis instance A Redis instance hosted on Google Cloud MemoryStore . project id , region , instance id , node id gce instance group A Compute Engine instance group resource . project id , instance group id , instance group name , location gce instance group manager A Compute Engine instance group manager resource . project id , instance group manager id , instance group manager name , location gce instance template A Compute Engine instance template resource . project id , instance template id , instance template name Routing logs You route logs by creating sinks that send certain log entries to supported destinations.
- Show the information in the default YAML format: gcloud logging metrics describe "myapp/request latency" Result: bucketOptions : exponentialBuckets : growthFactor : 2.0 numFiniteBuckets : 64 scale : 0.01 description : Request latency for myapp filter : resource . type = "gae app" logName = "projects/[PROJECT ID]/logs/appengine.googleapis.com%2Fnginx.request" labelExtractors : path : EXTRACT ( httpRequest . requestUrl ) metricDescriptor : description : Request latency for myapp labels : - description : HTTP Path key : path metricKind : DELTA name : projects /[ PROJECT ID ]/ metricDescriptors / logging . googleapis . com / user / myapp / request latency type : logging . googleapis . com / user / myapp / request latency valueType : DISTRIBUTION name : myapp / request latency valueExtractor : EXTRACT ( jsonPayload . latencySeconds ) Deleting metrics Use the gcloud logging metrics delete command, corresponding to the API method projects.metrics.delete : gcloud logging metrics delete METRIC NAME Examples Delete the metric my-distribution-metric from the current project: gcloud logging metrics delete "my-distribution-metric" Result: Really delete metric [my-distribution-metric]?
- Examples Create a distribution metric to record request latencies: gcloud logging metrics create my-distribution-metric --config-from-file=logmetric.dat where logmetric.dat contains the following: bucketOptions : exponentialBuckets : growthFactor : 2.0 numFiniteBuckets : 64 scale : 0.01 description : App Engine Request Latency filter : resource . type = "gae app" logName = "projects/ PROJECT ID /logs/appengine.googleapis.com %2F nginx.request" labelExtractors : path : EXTRACT ( httpRequest . requestUrl ) metricDescriptor : labels : - description : HTTP Path key : path metricKind : DELTA name : projects / PROJECT ID / metricDescriptors / logging . googleapis . com / user / my - distribution - metric type : logging . googleapis . com / user / my - distribution - metric valueType : DISTRIBUTION name : my - distribution - metric valueExtractor : EXTRACT ( jsonPayload . latencySeconds ) Result: Created [my-distribution-metric].
- Examples Create a log-based metric that counts the number of log entries with severity of at least ERROR from Compute Engine instances: gcloud logging metrics create error count \ -- description = "Syslog error counts." \ -- log - filter = "resource.type=gce instance AND severity>=ERROR" Creating advanced metrics To create complex metrics with labels, including distribution metrics, use the gcloud logging metrics create command, corresponding to the API method projects.metrics.create : gcloud logging metrics create METRIC NAME --config-from-file=FILE NAME FILE NAME is the path to a file containing a YAML (or JSON) specification of a LogMetric object .

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging](https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Examples List all the resource types that have instance in their names: gcloud logging resource - descriptors list -- filter = "type:instance" Result: TYPE DESCRIPTION KEY gce instance A virtual machine instance hosted in Compute Engine . project id , instance id , zone spanner instance A Cloud Spanner instance . project id , instance id , location , instance config redis instance A Redis instance hosted on Google Cloud MemoryStore . project id , region , instance id , node id gce instance group A Compute Engine instance group resource . project id , instance group id , instance group name , location gce instance group manager A Compute Engine instance group manager resource . project id , instance group manager id , instance group manager name , location gce instance template A Compute Engine instance template resource . project id , instance template id , instance template name Routing logs You route logs by creating sinks that send certain log entries to supported destinations.
- Show the information in the default YAML format: gcloud logging metrics describe "myapp/request latency" Result: bucketOptions : exponentialBuckets : growthFactor : 2.0 numFiniteBuckets : 64 scale : 0.01 description : Request latency for myapp filter : resource . type = "gae app" logName = "projects/[PROJECT ID]/logs/appengine.googleapis.com%2Fnginx.request" labelExtractors : path : EXTRACT ( httpRequest . requestUrl ) metricDescriptor : description : Request latency for myapp labels : - description : HTTP Path key : path metricKind : DELTA name : projects /[ PROJECT ID ]/ metricDescriptors / logging . googleapis . com / user / myapp / request latency type : logging . googleapis . com / user / myapp / request latency valueType : DISTRIBUTION name : myapp / request latency valueExtractor : EXTRACT ( jsonPayload . latencySeconds ) Deleting metrics Use the gcloud logging metrics delete command, corresponding to the API method projects.metrics.delete : gcloud logging metrics delete METRIC NAME Examples Delete the metric my-distribution-metric from the current project: gcloud logging metrics delete "my-distribution-metric" Result: Really delete metric [my-distribution-metric]?
- Examples Create a distribution metric to record request latencies: gcloud logging metrics create my-distribution-metric --config-from-file=logmetric.dat where logmetric.dat contains the following: bucketOptions : exponentialBuckets : growthFactor : 2.0 numFiniteBuckets : 64 scale : 0.01 description : App Engine Request Latency filter : resource . type = "gae app" logName = "projects/ PROJECT ID /logs/appengine.googleapis.com %2F nginx.request" labelExtractors : path : EXTRACT ( httpRequest . requestUrl ) metricDescriptor : labels : - description : HTTP Path key : path metricKind : DELTA name : projects / PROJECT ID / metricDescriptors / logging . googleapis . com / user / my - distribution - metric type : logging . googleapis . com / user / my - distribution - metric valueType : DISTRIBUTION name : my - distribution - metric valueExtractor : EXTRACT ( jsonPayload . latencySeconds ) Result: Created [my-distribution-metric].
- Examples Create a log-based metric that counts the number of log entries with severity of at least ERROR from Compute Engine instances: gcloud logging metrics create error count \ -- description = "Syslog error counts." \ -- log - filter = "resource.type=gce instance AND severity>=ERROR" Creating advanced metrics To create complex metrics with labels, including distribution metrics, use the gcloud logging metrics create command, corresponding to the API method projects.metrics.create : gcloud logging metrics create METRIC NAME --config-from-file=FILE NAME FILE NAME is the path to a file containing a YAML (or JSON) specification of a LogMetric object .

