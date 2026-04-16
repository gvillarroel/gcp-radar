---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.317Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log Analytics query byte estimation"
feature_slug: "log-analytics-query-byte-estimation"
latest_feature_date: "2024-07-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logging-query-language"
  - "https://docs.cloud.google.com/logging/docs/buckets"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery"
keywords:
  - "log"
  - "analytics"
  - "query"
  - "byte"
  - "estimation"
  - "shows"
  - "estimated"
  - "bytes"
---

# Log Analytics query byte estimation

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Log Analytics shows estimated bytes processed and query validation status before running a SQL query.

## Extended Definition

Log Analytics shows estimated bytes processed and query validation status before running a SQL query.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)

## Supporting Pages

### Logging query language \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Each field is followed by the next level of names for that field, if applicable: httpRequest : { cacheFillBytes , cacheHit , cacheLookup , cacheValidatedWithOriginServer , latency , protocol , referer , remoteIp , requestMethod , requestSize , requestUrl , responseSize , serverIp , status , userAgent } insertId jsonPayload { variable } labels { variable } logName metadata { systemLabels , userLabels } operation { id , producer , first , last } protoPayload { @type , variable } receiveTimestamp resource { type , labels } severity sourceLocation : { file , line , function } spanId textPayload timestamp trace Following are examples of field path identifiers you can use in your comparisons: resource.type : If your first path identifier is resource , then the next identifier must be a field in the MonitoredResource type. httpRequest.latency : If your first path identifier is httpRequest , then the next identifier must be a field in the HttpRequest type. labels.[KEY] If your first path identifier is labels , then the next identifier, [KEY] , must be one of the keys from the key-value pairs appearing in the labels field. logName : Since the logName field is a string, you can't follow it by any subfield names.
- The substring operator ( : ) is applicable to string and bytes , and is handled like equality except that the right-hand operand need only equal some part of the left-hand field.
- If a and b are Timestamp values, a < b means a is earlier in time than b . bytes : Operands are compared byte by byte, left-to-right. string : Comparisons ignore letter case.
- Examples: "True", "true" bytes A string containing any sequence of bytes.

### Configure log buckets \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- After Logging displays the linked dataset name on the Logs Storage page, it might take several minutes before BigQuery recognizes the dataset. gcloud To create a linked dataset for a log bucket that is upgraded to use Observability Analytics, run the gcloud logging links create command: gcloud logging links create LINK ID --bucket= BUCKET ID --location= LOCATION The LINK ID that you provide is used as the name of the BigQuery dataset, and the value of this field must be unique for your Google Cloud project.
- REST To create a linked a BigQuery dataset for an existing log bucket that is upgraded use Observability Analytics, call the asynchronous projects.locations.buckets.links.create method of the Cloud Logging API.
- Create a linked BigQuery dataset When you want to use the capabilities of BigQuery to analyze your log data, upgrade a log bucket to use Observability Analytics, and then create a linked dataset .
- To create an alerting policy that triggers when the number of log bytes written to your log buckets exceeds your user-defined limit for Cloud Logging , use the following settings.

### OpsAnalyticsQuery \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation QueryBuilderConfig JSON representation FilterPredicate JSON representation OperatorType FilterExpression JSON representation FieldSource JSON representation ProjectedField JSON representation FieldOperation FunctionApplication JSON representation Comparator SortOrderParameter JSON representation SortOrder Describes a query that can be run in Log Analytics.
- Home Documentation Observability Cloud Logging Reference Send feedback OpsAnalyticsQuery Stay organized with collections Save and categorize content based on your preferences.
- A query builder configuration used in Log Analytics.
- A Log Analytics SQL query in text format.

