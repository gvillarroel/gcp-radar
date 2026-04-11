---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.530Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Duet AI log entry summarization"
feature_slug: "duet-ai-log-entry-summarization"
latest_feature_date: "2023-11-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging"
keywords:
  - "duet"
  - "ai"
  - "log"
  - "entry"
  - "summarization"
  - "can"
  - "summarize"
  - "logging"
---

# Duet AI log entry summarization

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Duet AI can summarize Cloud Logging log entries for faster analysis; Duet AI can summarize Cloud Logging log entries for faster analysis.

## Extended Definition

Duet AI can summarize Cloud Logging log entries for faster analysis; Duet AI can summarize Cloud Logging log entries for faster analysis.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry](https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging)

## Supporting Pages

### Write structured logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry](https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . const { Logging } = require ( ' @google-cloud/logging ' ); const logging = new Logging (); / TODO(developer): Uncomment the following line and replace with your values. / // const logName = 'my-log'; const log = logging . log ( logName ); // A text log entry const text entry = log . entry ( 'Hello world!' ); // A json log entry with additional context const metadata = { severity : ' WARNING ' , labels : { foo : 'bar' , }, // A default log resource is added for some GCP environments // This log resource can be overwritten per spec: // https://cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource resource : { type : 'global' , }, }; const message = { name : 'King Arthur' , quest : 'Find the Holy Grail' , favorite color : 'Blue' , }; const json Entry = log . entry ( metadata , message ); async function writeLogEntry () { // Asynchronously write the log entry await log . write ( text entry ); // Asynchronously batch write the log entries await log . write ([ text entry , json Entry ]); // Let the logging library dispatch logs log . write ( text entry ); console . log ( Wrote to ${ logName } ); } writeLogEntry (); PHP To learn how to install and use the client library for Logging, see Logging client libraries .
- Severity ; import com.google.common.collect.ImmutableMap ; import java.util.Collections ; import java.util.Map ; public class WriteLogEntry { public static void main ( String [] args ) throws Exception { // TODO(developer): Optionally provide the logname as an argument String logName = args . length > 0 ? args [ 0 ] : "test-log" ; // Instantiates a client try ( Logging logging = LoggingOptions . getDefaultInstance (). getService ()) { Map<String , String > payload = ImmutableMap . of ( "name" , "King Arthur" , "quest" , "Find the Holy Grail" , "favorite color" , "Blue" ); LogEntry entry = LogEntry . newBuilder ( JsonPayload . of ( payload )) . setSeverity ( Severity .
- The struct can be any JSON-serializable dictionary. logger . log struct ( { "name" : "King Arthur" , "quest" : "Find the Holy Grail" , "favorite color" : "Blue" , }, severity = "INFO" , ) print ( "Wrote logs to {} ." . format ( logger . name )) Ruby To learn how to install and use the client library for Logging, see Logging client libraries .
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Logging\LoggingClient; use Google\Cloud\Logging\Logger; / Write a log message via the Stackdriver Logging API. @param string $projectId The Google project ID. @param string $loggerName The name of the logger. @param string $message The log message. / function write log($projectId, $loggerName, $message) { $logging = new LoggingClient(['projectId' => $projectId]); $logger = $logging->logger($loggerName, [ 'resource' => [ 'type' => 'gcs bucket', 'labels' => [ 'bucket name' => 'my bucket' ] ] ]); $entry = $logger->entry($message, [ 'severity' => Logger::INFO ]); $logger->write($entry); printf("Wrote a log to a logger '%s'." .

### LogEntry \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "logName" : string , "resource" : { object ( MonitoredResource ) } , "timestamp" : string , "receiveTimestamp" : string , "severity" : enum ( LogSeverity ) , "insertId" : string , "httpRequest" : { object ( HttpRequest ) } , "labels" : { string : string , ... } , "metadata" : { object ( MonitoredResourceMetadata ) } , "operation" : { object ( LogEntryOperation ) } , "trace" : string , "spanId" : string , "traceSampled" : boolean , "sourceLocation" : { object ( LogEntrySourceLocation ) } , "split" : { object ( LogSplit ) } , "errorGroups" : [ { object ( LogErrorGroup ) } ] , "apphub" : { object ( AppHub ) } , "apphubDestination" : { object ( AppHub ) } , "apphubSource" : { object ( AppHub ) } , "otel" : { object } , // Union field payload can be only one of the following: "protoPayload" : { "@type" : string , field1 : ... , ... } , "textPayload" : string , "jsonPayload" : { object } // End of list of possible types for union field payload . } Fields logName string Required.
- The following protocol buffer types are supported; user-defined types are not supported: "type.googleapis.com/google.cloud.audit.AuditLog" "type.googleapis.com/google.appengine.logging.v1.RequestLog" An object containing fields of an arbitrary type.
- Contains the OpenTelemetry Resource, Instrumentation Scope, and Entities attributes for this log as they are defined in the OTLP specification, and any other fields that do not have a direct analog in the LogEntry.
- The log entry payload, which can be one of multiple types. payload can be only one of the following: protoPayload object The log entry payload, represented as a protocol buffer.

### "Interface Logging (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging)
- Source ID: `site-java-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- LogEntryServerStream stream = logging . tailLogEntries ( TailOption . project ( "my project id" )); Iterator<LogEntry> it = stream . iterator (); while ( it . hasNext ()) { // do something with entry // call stream.cancel(); to stop streaming } Parameter Name Description options TailOption [] Returns Type Description LogEntryServerStream update(Exclusion exclusion) public abstract Exclusion update ( Exclusion exclusion ) Updates one or more properties of an existing exclusion.
- Parameter Name Description synchronicity Synchronicity tailLogEntries(Logging.TailOption[] options) public abstract LogEntryServerStream tailLogEntries ( Logging .
- String logName = "my log name" ; List<LogEntry> entries = new ArrayList <> (); entries . add ( LogEntry . of ( StringPayload . of ( "Entry payload" ))); Map<String , Object > jsonMap = new HashMap <> (); jsonMap . put ( "key" , "value" ); entries . add ( LogEntry . of ( JsonPayload . of ( jsonMap ))); logging . write ( entries , WriteOption . logName ( logName ), WriteOption . resource ( MonitoredResource . newBuilder ( "global" ). build ())); Parameters Name Description logEntries Iterable < LogEntry > options WriteOption [] Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- String logName = "my log name" ; ApiFuture<Boolean> future = logging . deleteLogAsync ( logName ); // ... boolean deleted = future . get (); if ( deleted ) { // the log was deleted } else { // the log was not found } Parameter Name Description log String Returns Type Description ApiFuture < Boolean > deleteLogAsync(String log, LogDestinationName destination) public default ApiFuture<Boolean> deleteLogAsync ( String log , LogDestinationName destination ) Sends a request for deleting a log and all its log entries for given log destination (see 'logName' parameter in https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry ).

