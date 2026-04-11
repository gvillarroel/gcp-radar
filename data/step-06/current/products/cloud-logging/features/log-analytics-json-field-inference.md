---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.519Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log Analytics JSON field inference"
feature_slug: "log-analytics-json-field-inference"
latest_feature_date: "2025-05-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry"
keywords:
  - "log"
  - "analytics"
  - "json"
  - "field"
  - "inference"
  - "can"
  - "infer"
  - "fields"
---

# Log Analytics JSON field inference

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Log Analytics can infer fields from JSON columns and show how frequently those inferred fields appear.

## Extended Definition

Log Analytics can infer fields from JSON columns and show how frequently those inferred fields appear.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- Add fields to Fields pane You can add certain LogEntry key-value pairs to the Logs field pane from the log entries populated in the Query results pane.
- You can use the Scroll to time feature to browse your logs data without changing the values in the Timeline and Fields panes.
- In the Manage summary fields dialog, you can do the following: Add any custom field names to Custom summary fields .

### OpsAnalyticsQuery \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation QueryBuilderConfig JSON representation FilterPredicate JSON representation OperatorType FilterExpression JSON representation FieldSource JSON representation ProjectedField JSON representation FieldOperation FunctionApplication JSON representation Comparator SortOrderParameter JSON representation SortOrder Describes a query that can be run in Log Analytics.
- JSON representation { "fieldSource" : { object ( FieldSource ) } , "comparator" : enum ( Comparator ) , "isNegation" : boolean , // Union field filter value can be only one of the following: "literalValue" : value , "fieldSourceValue" : { object ( FieldSource ) } // End of list of possible types for union field filter value . } Fields fieldSource object ( FieldSource ) Can be one of the FieldSource types: field name, alias ref, variable ref, or a literal value. comparator enum ( Comparator ) The comparison type to use for the filter. isNegation boolean Determines if the NOT flag should be added to the comparator.
- JSON representation { "isJson" : boolean , "columnType" : string , "parentPath" : string , // Union field field source type can be only one of the following: "field" : string , "aliasRef" : string , "projectedField" : { object ( ProjectedField ) } // End of list of possible types for union field field source type . } Fields isJson boolean Whether the field is a JSON field, or has a parent that is a JSON field.
- This could be the user inputted literal value that the filter is comparing against, or it could be comparing to one of the atomic field sources, or a ProjectedField. filter value can be only one of the following: literalValue value ( Value format) The Value will be used to hold user defined constants set as the Right Hand Side of the filter. fieldSourceValue object ( FieldSource ) The field.

### LogEntry \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "logName" : string , "resource" : { object ( MonitoredResource ) } , "timestamp" : string , "receiveTimestamp" : string , "severity" : enum ( LogSeverity ) , "insertId" : string , "httpRequest" : { object ( HttpRequest ) } , "labels" : { string : string , ... } , "metadata" : { object ( MonitoredResourceMetadata ) } , "operation" : { object ( LogEntryOperation ) } , "trace" : string , "spanId" : string , "traceSampled" : boolean , "sourceLocation" : { object ( LogEntrySourceLocation ) } , "split" : { object ( LogSplit ) } , "errorGroups" : [ { object ( LogErrorGroup ) } ] , "apphub" : { object ( AppHub ) } , "apphubDestination" : { object ( AppHub ) } , "apphubSource" : { object ( AppHub ) } , "otel" : { object } , // Union field payload can be only one of the following: "protoPayload" : { "@type" : string , field1 : ... , ... } , "textPayload" : string , "jsonPayload" : { object } // End of list of possible types for union field payload . } Fields logName string Required.
- JSON representation { "application" : { object ( AppHubApplication ) } , // Union field AppHubResource can be only one of the following: "service" : { object ( AppHubService ) } , "workload" : { object ( AppHubWorkload ) } // End of list of possible types for union field AppHubResource . } Fields application object ( AppHubApplication ) Metadata associated with the application.
- JSON representation { "uid" : string , "index" : integer , "totalSplits" : integer } Fields uid string A globally unique identifier for all log entries in a sequence of split log entries.
- This field can be used to search for log entries belonging to a specific error group in Logs Explorer (e.g., errorGroups.id = "ID" ) or Observability Analytics.

