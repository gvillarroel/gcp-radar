---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.461Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Request latency log filtering"
feature_slug: "request-latency-log-filtering"
latest_feature_date: "2018-10-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logging-query-language"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry"
  - "https://docs.cloud.google.com/logging/docs/api/gcloud-logging"
keywords:
  - "request"
  - "latency"
  - "log"
  - "filtering"
  - "logging"
  - "can"
  - "filter"
  - "entries"
---

# Request latency log filtering

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging can filter log entries by request latency and trace-data availability.

## Extended Definition

Cloud Logging can filter log entries by request latency and trace-data availability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)
- [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)

## Supporting Pages

### LogEntry \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "requestMethod" : string , "requestUrl" : string , "requestSize" : string , "status" : integer , "responseSize" : string , "userAgent" : string , "remoteIp" : string , "serverIp" : string , "referer" : string , "latency" : string , "cacheLookup" : boolean , "cacheHit" : boolean , "cacheValidatedWithOriginServer" : boolean , "cacheFillBytes" : string , "protocol" : string } Fields requestMethod string The request method.
- Examples: "192.168.1.1" , "10.0.0.1:80" , "FE80::0202:B3FF:FE1E:8329" . referer string The referer URL of the request, as defined in HTTP/1.1 Header Field Definitions . latency string ( Duration format) The request processing latency on the server, from the time the request was received until the response was sent.
- For example, the following filter expression will match log entries with severities INFO , NOTICE , and WARNING : severity > DEBUG AND severity <= WARNING If you are writing log entries, you should map other severity encodings to one of these standard levels.
- The following protocol buffer types are supported; user-defined types are not supported: "type.googleapis.com/google.cloud.audit.AuditLog" "type.googleapis.com/google.appengine.logging.v1.RequestLog" An object containing fields of an arbitrary type.

### Logging query language \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- To use double quotes for escaping special characters using the gcloud logging command, wrap the entire query with single quotes instead: gcloud logging read 'resource.type=gce instance AND jsonPayload.message="Stopped Unattended Upgrades Shutdown."' gcloud logging read 'timestamp>="2020-06-17T21:00:00Z"' When you are filtering on a field that is associated with the Any message type, the value field is automatically traversed.
- For in-depth information about the Logging query language design, see the Google API formal specifications for filtering .
- Each field is followed by the next level of names for that field, if applicable: httpRequest : { cacheFillBytes , cacheHit , cacheLookup , cacheValidatedWithOriginServer , latency , protocol , referer , remoteIp , requestMethod , requestSize , requestUrl , responseSize , serverIp , status , userAgent } insertId jsonPayload { variable } labels { variable } logName metadata { systemLabels , userLabels } operation { id , producer , first , last } protoPayload { @type , variable } receiveTimestamp resource { type , labels } severity sourceLocation : { file , line , function } spanId textPayload timestamp trace Following are examples of field path identifiers you can use in your comparisons: resource.type : If your first path identifier is resource , then the next identifier must be a field in the MonitoredResource type. httpRequest.latency : If your first path identifier is httpRequest , then the next identifier must be a field in the HttpRequest type. labels.[KEY] If your first path identifier is labels , then the next identifier, [KEY] , must be one of the keys from the key-value pairs appearing in the labels field. logName : Since the logName field is a string, you can't follow it by any subfield names.
- Use indexed fields Logging always indexes the following LogEntry fields: resource.type resource.labels. logName severity timestamp insertId operation.id trace httpRequest.status labels. split.uid You can also add custom indexed fields to any log bucket or make use of the SEARCH function to accelerate your query.

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Show the information in the default YAML format: gcloud logging metrics describe "myapp/request latency" Result: bucketOptions : exponentialBuckets : growthFactor : 2.0 numFiniteBuckets : 64 scale : 0.01 description : Request latency for myapp filter : resource . type = "gae app" logName = "projects/[PROJECT ID]/logs/appengine.googleapis.com%2Fnginx.request" labelExtractors : path : EXTRACT ( httpRequest . requestUrl ) metricDescriptor : description : Request latency for myapp labels : - description : HTTP Path key : path metricKind : DELTA name : projects /[ PROJECT ID ]/ metricDescriptors / logging . googleapis . com / user / myapp / request latency type : logging . googleapis . com / user / myapp / request latency valueType : DISTRIBUTION name : myapp / request latency valueExtractor : EXTRACT ( jsonPayload . latencySeconds ) Deleting metrics Use the gcloud logging metrics delete command, corresponding to the API method projects.metrics.delete : gcloud logging metrics delete METRIC NAME Examples Delete the metric my-distribution-metric from the current project: gcloud logging metrics delete "my-distribution-metric" Result: Really delete metric [my-distribution-metric]?
- Examples Create a distribution metric to record request latencies: gcloud logging metrics create my-distribution-metric --config-from-file=logmetric.dat where logmetric.dat contains the following: bucketOptions : exponentialBuckets : growthFactor : 2.0 numFiniteBuckets : 64 scale : 0.01 description : App Engine Request Latency filter : resource . type = "gae app" logName = "projects/ PROJECT ID /logs/appengine.googleapis.com %2F nginx.request" labelExtractors : path : EXTRACT ( httpRequest . requestUrl ) metricDescriptor : labels : - description : HTTP Path key : path metricKind : DELTA name : projects / PROJECT ID / metricDescriptors / logging . googleapis . com / user / my - distribution - metric type : logging . googleapis . com / user / my - distribution - metric valueType : DISTRIBUTION name : my - distribution - metric valueExtractor : EXTRACT ( jsonPayload . latencySeconds ) Result: Created [my-distribution-metric].
- Show only the metric name and its description: gcloud logging metrics list --filter="metricDescriptor.valueType=DISTRIBUTION" --format="table(name,description)" Result: NAME DESCRIPTION myapp/request latency Request latency for myapp bigquery billed bytes Billed Bytes food latency How long does it take to service all food requests healthz latencies /healthz latencies in microseconds latency on food Tracking latency on food requests lines written my latency metric no-match-dist-metric pizza latency How long does it take to service pizza requests?
- Examples List all the resource types that have instance in their names: gcloud logging resource - descriptors list -- filter = "type:instance" Result: TYPE DESCRIPTION KEY gce instance A virtual machine instance hosted in Compute Engine . project id , instance id , zone spanner instance A Cloud Spanner instance . project id , instance id , location , instance config redis instance A Redis instance hosted on Google Cloud MemoryStore . project id , region , instance id , node id gce instance group A Compute Engine instance group resource . project id , instance group id , instance group name , location gce instance group manager A Compute Engine instance group manager resource . project id , instance group manager id , instance group manager name , location gce instance template A Compute Engine instance template resource . project id , instance template id , instance template name Routing logs You route logs by creating sinks that send certain log entries to supported destinations.

