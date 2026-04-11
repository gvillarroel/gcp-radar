---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.520Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "App Hub labels in log entries"
feature_slug: "app-hub-labels-in-log-entries"
latest_feature_date: "2025-03-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry"
  - "https://docs.cloud.google.com/logging/docs/api/gcloud-logging"
keywords:
  - "app"
  - "hub"
  - "labels"
  - "in"
  - "log"
  - "entries"
  - "application"
  - "are"
---

# App Hub labels in log entries

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

App Hub application labels are attached to log entries and exposed as application, service, and workload facets in Logs Explorer.

## Extended Definition

App Hub application labels are attached to log entries and exposed as application, service, and workload facets in Logs Explorer.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)
- [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In your log entry, this label is shown in the apphub entry: apphub: { application: { container: "projects/my-project" id: "my-app" location: "my-app-location" } workload: {3} } Other dimensions, like Project ID , are listed based on your selections.
- For example, if a log entry similar to the following is displayed as a result of your query, then the service menu includes the service named myservice : { ... labels: { compute.googleapis.com/resource name: "mycluster1" k8s-pod/app: "myservice" k8s-pod/pod-template-hash: "5ffcd94fdd" } logName: "projects/my-project/logs/stdout" resource: { labels: {6} type: "k8s container" } ... } You have log data with labels for an App Hub service or workload.
- For example, a log entry might contain something like the following: apphub: { application: {3} workload: { criticalityType: "MEDIUM" environmentType: "STAGING" id: "my-workload-id" } } You filter your log data by the resource type of Audited Resource .
- The Application dimension is shown when your log data contains an App Hub application ID label, which is of the form apphub.application.id .

### LogEntry \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "logName" : string , "resource" : { object ( MonitoredResource ) } , "timestamp" : string , "receiveTimestamp" : string , "severity" : enum ( LogSeverity ) , "insertId" : string , "httpRequest" : { object ( HttpRequest ) } , "labels" : { string : string , ... } , "metadata" : { object ( MonitoredResourceMetadata ) } , "operation" : { object ( LogEntryOperation ) } , "trace" : string , "spanId" : string , "traceSampled" : boolean , "sourceLocation" : { object ( LogEntrySourceLocation ) } , "split" : { object ( LogSplit ) } , "errorGroups" : [ { object ( LogErrorGroup ) } ] , "apphub" : { object ( AppHub ) } , "apphubDestination" : { object ( AppHub ) } , "apphubSource" : { object ( AppHub ) } , "otel" : { object } , // Union field payload can be only one of the following: "protoPayload" : { "@type" : string , field1 : ... , ... } , "textPayload" : string , "jsonPayload" : { object } // End of list of possible types for union field payload . } Fields logName string Required.
- JSON representation LogSeverity HttpRequest JSON representation MonitoredResourceMetadata JSON representation LogEntryOperation JSON representation LogEntrySourceLocation JSON representation LogSplit JSON representation LogErrorGroup JSON representation AppHub JSON representation AppHubApplication JSON representation AppHubService JSON representation AppHubWorkload JSON representation An individual entry in a log.
- May be empty if there is no associated AppHub application or multiple associated applications (such as for VPC flow logs) apphubDestination object ( AppHub ) Output only.
- JSON representation { "application" : { object ( AppHubApplication ) } , // Union field AppHubResource can be only one of the following: "service" : { object ( AppHubService ) } , "workload" : { object ( AppHubWorkload ) } // End of list of possible types for union field AppHubResource . } Fields application object ( AppHubApplication ) Metadata associated with the application.

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- The log entries are to be shown in JSON format: gcloud logging read "resource.type=gce instance AND logName=projects/ PROJECT ID /logs/syslog AND textPayload:SyncAddress" -- limit 10 -- format json Following is an example of one returned log entry: { "insertId" : "2024-04-07 08:56:48.137651-07 10.162.32.129 -1509625619" , "logName" : "projects/[PROJECT ID]/logs/syslog" , "resource" : { "labels" : { "instance id" : "15543007601548829999" , "zone" : "global" } , "type" : "gce instance" } , "textPayload" : "Apr 7 15:56:47 my-gce-instance google-address-manager: ERROR SyncAddresses exception: HTTP Error 503: Service Unavailable" , "timestamp" : "2024-04-07T15:56:47.000Z" } To list logs in a folder, add the --folder flag.
- Show the information in the default YAML format: gcloud logging metrics describe "myapp/request latency" Result: bucketOptions : exponentialBuckets : growthFactor : 2.0 numFiniteBuckets : 64 scale : 0.01 description : Request latency for myapp filter : resource . type = "gae app" logName = "projects/[PROJECT ID]/logs/appengine.googleapis.com%2Fnginx.request" labelExtractors : path : EXTRACT ( httpRequest . requestUrl ) metricDescriptor : description : Request latency for myapp labels : - description : HTTP Path key : path metricKind : DELTA name : projects /[ PROJECT ID ]/ metricDescriptors / logging . googleapis . com / user / myapp / request latency type : logging . googleapis . com / user / myapp / request latency valueType : DISTRIBUTION name : myapp / request latency valueExtractor : EXTRACT ( jsonPayload . latencySeconds ) Deleting metrics Use the gcloud logging metrics delete command, corresponding to the API method projects.metrics.delete : gcloud logging metrics delete METRIC NAME Examples Delete the metric my-distribution-metric from the current project: gcloud logging metrics delete "my-distribution-metric" Result: Really delete metric [my-distribution-metric]?
- Examples Create a distribution metric to record request latencies: gcloud logging metrics create my-distribution-metric --config-from-file=logmetric.dat where logmetric.dat contains the following: bucketOptions : exponentialBuckets : growthFactor : 2.0 numFiniteBuckets : 64 scale : 0.01 description : App Engine Request Latency filter : resource . type = "gae app" logName = "projects/ PROJECT ID /logs/appengine.googleapis.com %2F nginx.request" labelExtractors : path : EXTRACT ( httpRequest . requestUrl ) metricDescriptor : labels : - description : HTTP Path key : path metricKind : DELTA name : projects / PROJECT ID / metricDescriptors / logging . googleapis . com / user / my - distribution - metric type : logging . googleapis . com / user / my - distribution - metric valueType : DISTRIBUTION name : my - distribution - metric valueExtractor : EXTRACT ( jsonPayload . latencySeconds ) Result: Created [my-distribution-metric].
- Examples Create a log-based metric that counts the number of log entries with severity of at least ERROR from Compute Engine instances: gcloud logging metrics create error count \ -- description = "Syslog error counts." \ -- log - filter = "resource.type=gce instance AND severity>=ERROR" Creating advanced metrics To create complex metrics with labels, including distribution metrics, use the gcloud logging metrics create command, corresponding to the API method projects.metrics.create : gcloud logging metrics create METRIC NAME --config-from-file=FILE NAME FILE NAME is the path to a file containing a YAML (or JSON) specification of a LogMetric object .

