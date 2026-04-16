---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.497Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "LogEntry trace and source location fields"
feature_slug: "logentry-trace-and-source-location-fields"
latest_feature_date: "2016-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/configuration"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntry.Builder"
keywords:
  - "logentry"
  - "trace"
  - "source"
  - "location"
  - "fields"
  - "includes"
  - "sourcelocation"
  - "richer"
---

# LogEntry trace and source location fields

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

LogEntry includes trace and sourceLocation fields for richer log record metadata.

## Extended Definition

LogEntry includes trace and sourceLocation fields for richer log record metadata.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)
- [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntry.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntry.Builder)

## Supporting Pages

### LogEntry \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "logName" : string , "resource" : { object ( MonitoredResource ) } , "timestamp" : string , "receiveTimestamp" : string , "severity" : enum ( LogSeverity ) , "insertId" : string , "httpRequest" : { object ( HttpRequest ) } , "labels" : { string : string , ... } , "metadata" : { object ( MonitoredResourceMetadata ) } , "operation" : { object ( LogEntryOperation ) } , "trace" : string , "spanId" : string , "traceSampled" : boolean , "sourceLocation" : { object ( LogEntrySourceLocation ) } , "split" : { object ( LogSplit ) } , "errorGroups" : [ { object ( LogErrorGroup ) } ] , "apphub" : { object ( AppHub ) } , "apphubDestination" : { object ( AppHub ) } , "apphubSource" : { object ( AppHub ) } , "otel" : { object } , // Union field payload can be only one of the following: "protoPayload" : { "@type" : string , field1 : ... , ... } , "textPayload" : string , "jsonPayload" : { object } // End of list of possible types for union field payload . } Fields logName string Required.
- JSON representation LogSeverity HttpRequest JSON representation MonitoredResourceMetadata JSON representation LogEntryOperation JSON representation LogEntrySourceLocation JSON representation LogSplit JSON representation LogErrorGroup JSON representation AppHub JSON representation AppHubApplication JSON representation AppHubService JSON representation AppHubWorkload JSON representation An individual entry in a log.
- LogEntrySourceLocation Additional information about the source code location that produced the log entry.
- The default is False. sourceLocation object ( LogEntrySourceLocation ) Optional.

### Configure the Logging agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see traceSampled on the LogEntry page. "logging.googleapis.com/trace sampled": false Time-related fields In general, time-related information about a log entry is stored in the timestamp field of the LogEntry object: { insertId: "1ad8d08f-6529-47ea-832e-467f869a2da4" ... resource: {2} timestamp: "2023-10-30T16:33:15.505196Z" } When the source for a log entry is structured data, the Logging agent uses the following rules to search the fields in the jsonPayload entry for time-related information: Search for a timestamp field that is a JSON object that includes the seconds and nanos fields, representing, respectively, a signed number of seconds from the UTC epoch and a nonnegative number of fractional seconds: jsonPayload: { ... "timestamp": { "seconds": CURRENT SECONDS, "nanos": CURRENT NANOS } } If the previous search fails, then search for a pair of timestampSeconds and timestampNanos fields: jsonPayload: { ... "timestampSeconds": CURRENT SECONDS, "timestampNanos": CURRENT NANOS } If the previous search fails, then search for a time field that is a string in RFC 3339 format: jsonPayload: { ... "time": CURRENT TIME RFC3339 } When time-related information is found, the Logging agent uses that information to set the value of the LogEntry.timestamp , and it doesn't copy that information from the structured record into the LogEntry.jsonPayload object.
- For more information, see LogEntrySourceLocation on the LogEntry page. "logging.googleapis.com/sourceLocation": {"file":"get data.py","line":"142","function":"getData"} logging.googleapis.com/spanId spanId The span ID within the trace associated with the log entry.
- For more information, see operation on the LogEntry page. "logging.googleapis.com/operation": {"id":"get data","producer":"github.com/MyProject/MyApplication", "first":"true"} logging.googleapis.com/sourceLocation sourceLocation Source code location information associated with the log entry, if any.
- If your log entry contains an exception stack trace, the exception stack trace should be set in this message JSON log field, so that the exception stack trace can be parsed and saved to Error Reporting. log (legacy Google Kubernetes Engine only) textPayload Only applies to legacy Google Kubernetes Engine: if, after moving special purpose fields, only a log field remains, then that field is saved as textPayload . httpRequest httpRequest A structured record in the format of the LogEntry HttpRequest field. "httpRequest":{"requestMethod":"GET"} time-related fields timestamp For more information, see Time-related fields . "time":"2020-10-12T07:20:50.52Z" logging.googleapis.com/insertId insertId For more information, see insertId on the LogEntry page. "logging.googleapis.com/insertId":"42" logging.googleapis.com/labels labels The value of this field must be a structured record.

### "Class LogEntry.Builder (3.29.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntry.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntry.Builder)
- Source ID: `site-java-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameter Name Description severity Severity Returns Type Description LogEntry.Builder setSourceLocation(SourceLocation sourceLocation) public LogEntry .
- Parameter Name Description sourceLocation SourceLocation Returns Type Description LogEntry.Builder setSpanId(Object spanId) public LogEntry .
- Builder setSourceLocation ( SourceLocation sourceLocation ) Sets the source code location information associated with the log entry if any.
- Parameter Name Description traceSampled boolean Returns Type Description LogEntry.Builder Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

