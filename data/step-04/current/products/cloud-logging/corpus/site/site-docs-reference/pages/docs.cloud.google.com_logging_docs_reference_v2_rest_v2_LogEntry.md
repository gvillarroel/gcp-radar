---
title: "LogEntry \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry
  title: "LogEntry \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Reference
Send feedback
LogEntry
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
LogSeverity
HttpRequest
JSON representation
MonitoredResourceMetadata
JSON representation
LogEntryOperation
JSON representation
LogEntrySourceLocation
JSON representation
LogSplit
JSON representation
LogErrorGroup
JSON representation
AppHub
JSON representation
AppHubApplication
JSON representation
AppHubService
JSON representation
AppHubWorkload
JSON representation
An individual entry in a log.
JSON representation
{
"logName" : string ,
"resource" : {
object ( MonitoredResource )
} ,
"timestamp" : string ,
"receiveTimestamp" : string ,
"severity" : enum ( LogSeverity ) ,
"insertId" : string ,
"httpRequest" : {
object ( HttpRequest )
} ,
"labels" : {
string : string ,
...
} ,
"metadata" : {
object ( MonitoredResourceMetadata )
} ,
"operation" : {
object ( LogEntryOperation )
} ,
"trace" : string ,
"spanId" : string ,
"traceSampled" : boolean ,
"sourceLocation" : {
object ( LogEntrySourceLocation )
} ,
"split" : {
object ( LogSplit )
} ,
"errorGroups" : [
{
object ( LogErrorGroup )
}
] ,
"apphub" : {
object ( AppHub )
} ,
"apphubDestination" : {
object ( AppHub )
} ,
"apphubSource" : {
object ( AppHub )
} ,
"otel" : {
object
} ,
// Union field payload can be only one of the following:
"protoPayload" : {
"@type" : string ,
field1 : ... ,
...
} ,
"textPayload" : string ,
"jsonPayload" : {
object
}
// End of list of possible types for union field payload .
}
Fields
logName
string
Required. The resource name of the log to which this log entry belongs:
"projects/[PROJECT_ID]/logs/[LOG_ID]"
"organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
"billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
"folders/[FOLDER_ID]/logs/[LOG_ID]"
A project number may be used in place of PROJECT_ID. The project number is translated to its corresponding PROJECT_ID internally and the logName field will contain PROJECT_ID in queries and exports.
[LOG_ID] must be URL-encoded within logName . Example: "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity" .
[LOG_ID] must be less than 512 characters long and can only include the following characters: upper and lower case alphanumeric characters, forward-slash, underscore, hyphen, and period.
For backward compatibility, if logName begins with a forward-slash, such as /projects/... , then the log entry is processed as usual, but the forward-slash is removed. Listing the log entry will not show the leading slash and filtering for a log name with a leading slash will never return any results.
resource
object ( MonitoredResource )
Required. The monitored resource that produced this log entry.
Example: a log entry that reports a database error would be associated with the monitored resource designating the particular database that reported the error.
timestamp
string ( Timestamp format)
Optional. The time the event described by the log entry occurred. This time is used to compute the log entry's age and to enforce the logs retention period. If this field is omitted in a new log entry, then Logging assigns it the current time. Timestamps have nanosecond accuracy, but trailing zeros in the fractional seconds might be omitted when the timestamp is displayed.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
receiveTimestamp
string ( Timestamp format)
Output only. The time the log entry was received by Logging.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
severity
enum ( LogSeverity )
Optional. The severity of the log entry. The default value is LogSeverity.DEFAULT .
insertId
string
Optional. A unique identifier for the log entry. If you provide a value, then Logging considers other log entries in the same project, with the same timestamp , and with the same insertId to be duplicates which are removed in a single query result. However, there are no guarantees of de-duplication in the export of logs.
If the insertId is omitted when writing a log entry, the Logging API assigns its own unique identifier in this field.
In queries, the insertId is also used to order log entries that have the same logName and timestamp values.
httpRequest
object ( HttpRequest )
Optional. Information about the HTTP request associated with this log entry, if applicable.
labels
map (key: string, value: string)
Optional. A map of key, value pairs that provides additional information about the log entry. The labels can be user-defined or system-defined.
User-defined labels are arbitrary key, value pairs that you can use to classify logs.
System-defined labels are defined by cloud services for platform logs. They have two components - a service namespace component and the attribute name. For example: compute.googleapis.com/resourceName .
Cloud Logging truncates label keys that exceed 512 B and label values that exceed 64 KB upon their associated log entry being written. The truncation is indicated by an ellipsis at the end of the character string.
metadata (deprecated)
object ( MonitoredResourceMetadata )
This item is deprecated!
Output only. Deprecated. This field is not used by Logging. Any value written to it is cleared.
operation
object ( LogEntryOperation )
Optional. Information about an operation associated with the log entry, if applicable.
trace
string
Optional. The trace ID being written to Cloud Trace in association with this log entry. For example, if your trace data is stored in the Cloud project "my-trace-project" and if the service that is creating the log entry receives a trace header that includes the trace ID "12345", then the service should use "12345".
The REST resource name of the trace is also supported, but using this format is not recommended. An example trace REST resource name is similar to "projects/my-trace-project/traces/12345".
The trace field provides the link between logs and traces. By using this field, you can navigate from a log entry to a trace.
spanId
string
Optional. The ID of the Cloud Trace span associated with the current operation in which the log is being written.
A Span represents a single operation within a trace. Whereas a trace may involve multiple different microservices running on multiple different machines, a span generally corresponds to a single logical operation being performed in a single instance of a microservice on one specific machine. Spans are the nodes within the tree that is a trace.
Applications that are instrumented for tracing will generally assign a new, unique span ID on each incoming request. It is also common to create and record additional spans corresponding to internal processing elements as well as issuing requests to dependencies.
The span ID is expected to be a 16-character, hexadecimal encoding of an 8-byte array and should not be zero. It should be unique within the trace and should, ideally, be generated in a manner that is uniformly random.
Example values:
000000000000004a
7a2190356c3fc94b
0000f00300090021
d39223e101960076
traceSampled
boolean
Optional. The sampling decision of the span associated with the log entry at the time the log entry was created. This field corresponds to the sampled flag in the W3C trace-context specification . A non-sampled trace value is still useful as a request correlation identifier. The default is False.
sourceLocation
object ( LogEntrySourceLocation )
Optional. Source code location information associated with the log entry, if any.
split
object ( LogSplit )
Optional. Information indicating this LogEntry is part of a sequence of multiple log entries split from a single LogEntry.
errorGroups[]
object ( LogErrorGroup )
Output only. The Error Reporting error groups associated with this LogEntry. Error Reporting sets the values for this field during error group creation.
This field is populated only when log entries are stored in Cloud Logging storage (Logs Explorer and Observability Analytics). It is not available for use in log sink filters, log-based metrics, or log-based alerts, and it is excluded from log exports (Cloud Storage, BigQuery, and Pub/Sub).
For more information, see [View error details]( https://cloud.google.com/error-reporting/docs/viewing-errors#view_error_details )
apphub
object ( AppHub )
Output only. AppHub application metadata associated with this LogEntry. May be empty if there is no associated AppHub application or multiple associated applications (such as for VPC flow logs)
apphubDestination
object ( AppHub )
Output only. AppHub application metadata associated with the destination application. This is only populated if the log represented "edge"-like data (such as for VPC flow logs) with a destination.
apphubSource
object ( AppHub )
Output only. AppHub application metadata associated with the source application. This is only populated if the log represented "edge"-like data (such as for VPC flow logs) with a source.
otel
object ( Struct format)
Optional. The structured OpenTelemetry protocol payload. Contains the OpenTelemetry Resource, Instrumentation Scope, and Entities attributes for this log as they are defined in the OTLP specification, and any other fields that do not have a direct analog in the LogEntry. See https://opentelemetry.io/docs/specs/otel/logs/data-model/
Union field payload . The log entry payload, which can be one of multiple types. payload can be only one of the following:
protoPayload
object
The log entry payload, represented as a protocol buffer. Some Google Cloud Platform services use this field for their log entry payloads.
The following protocol buffer types are supported; user-defined types are not supported:
"type.googleapis.com/google.cloud.audit.AuditLog" "type.googleapis.com/google.appengine.logging.v1.RequestLog"
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
textPayload
string
The log entry payload, represented as a Unicode string (UTF-8).
jsonPayload
object ( Struct format)
The log entry payload, represented as a structure that is expressed as a JSON object.
LogSeverity
The severity of the event described in a log entry, expressed as one of the standard severity levels listed below. For your reference, the levels are assigned the listed numeric values. The effect of using numeric values other than those listed is undefined.
You can filter for log entries by severity. For example, the following filter expression will match log entries with severities INFO , NOTICE , and WARNING :
severity > DEBUG AND severity <= WARNING
If you are writing log entries, you should map other severity encodings to one of these standard levels. For example, you might map all of Java's FINE, FINER, and FINEST levels to LogSeverity.DEBUG . You can preserve the original severity level in the log entry payload if you wish.
Enums
DEFAULT
(0) The log entry has no assigned severity level.
DEBUG
(100) Debug or trace information.
INFO
(200) Routine information, such as ongoing status or performance.
NOTICE
(300) Normal but significant events, such as start up, shut down, or a configuration change.
WARNING
(400) Warning events might cause problems.
ERROR
(500) Error events are likely to cause problems.
CRITICAL
(600) Critical events cause more severe problems or outages.
ALERT
(700) A person must take an action immediately.
EMERGENCY
(800) One or more systems are unusable.
HttpRequest
A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.
JSON representation
{
"requestMethod" : string ,
"requestUrl" : string ,
"requestSize" : string ,
"status" : integer ,
"responseSize" : string ,
"userAgent" : string ,
"remoteIp" : string ,
"serverIp" : string ,
"referer" : string ,
"latency" : string ,
"cacheLookup" : boolean ,
"cacheHit" : boolean ,
"cacheValidatedWithOriginServer" : boolean ,
"cacheFillBytes" : string ,
"protocol" : string
}
Fields
requestMethod
string
The request method. Examples: "GET" , "HEAD" , "PUT" , "POST" .
requestUrl
string
The scheme (http, https), the host name, the path and the query portion of the URL that was requested. Example: "http://example.com/some/info?color=red" .
requestSize
string ( int64 format)
The size of the HTTP request message in bytes, including the request headers and the request body.
status
integer
The response code indicating the status of response. Examples: 200, 404.
responseSize
string ( int64 format)
The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body.
userAgent
string
The user agent sent by the client. Example: "Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET
CLR 1.0.3705)" .
remoteIp
string
The IP address (IPv4 or IPv6) of the client that issued the HTTP request. This field can include port information. Examples: "192.168.1.1" , "10.0.0.1:80" , "FE80::0202:B3FF:FE1E:8329" .
serverIp
string
The IP address (IPv4 or IPv6) of the origin server that the request was sent to. This field can include port information. Examples: "192.168.1.1" , "10.0.0.1:80" , "FE80::0202:B3FF:FE1E:8329" .
referer
string
The referer URL of the request, as defined in HTTP/1.1 Header Field Definitions .
latency
string ( Duration format)
The request processing latency on the server, from the time the request was received until the response was sent. For WebSocket connections, this field refers to the entire time duration of the connection.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
cacheLookup
boolean
Whether or not a cache lookup was attempted.
cacheHit
boolean
Whether or not an entity was served from cache (with or without validation).
cacheValidatedWithOriginServer
boolean
Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if cacheHit is True.
cacheFillBytes
string ( int64 format)
The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted.
protocol
string
Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2"
MonitoredResourceMetadata
Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message.
JSON representation
{
"systemLabels" : {
object
} ,
"userLabels" : {
string : string ,
...
}
}
Fields
systemLabels
object ( Struct format)
Output only. Values for predefined system metadata labels. System labels are a kind of metadata extracted by Google, including "machine_image", "vpc", "subnet_id", "security_group", "name", etc. System label values can be only strings, Boolean values, or a list of strings. For example:
{ "name": "my-test-instance",
"security_group": ["a", "b", "c"],
"spot_instance": false }
userLabels
map (key: string, value: string)
Output only. A map of user-defined metadata labels.
LogEntryOperation
Additional information about a potentially long-running operation with which a log entry is associated.
JSON representation
{
"id" : string ,
"producer" : string ,
"first" : boolean ,
"last" : boolean
}
Fields
id
string
Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation.
producer
string
Optional. An arbitrary producer identifier. The combination of id and producer must be globally unique. Examples for producer : "MyDivision.MyBigCompany.com" , "github.com/MyProject/MyApplication" .
first
boolean
Optional. Set this to True if this is the first log entry in the operation.
last
boolean
Optional. Set this to True if this is the last log entry in the operation.
LogEntrySourceLocation
Additional information about the source code location that produced the log entry.
JSON representation
{
"file" : string ,
"line" : string ,
"function" : string
}
Fields
file
string
Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.
line
string ( int64 format)
Optional. Line within the source file. 1-based; 0 indicates no line number available.
function
string
Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python).
LogSplit
Additional information used to correlate multiple log entries. Used when a single LogEntry would exceed the Google Cloud Logging size limit and is split across multiple log entries.
JSON representation
{
"uid" : string ,
"index" : integer ,
"totalSplits" : integer
}
Fields
uid
string
A globally unique identifier for all log entries in a sequence of split log entries. All log entries with the same |LogSplit.uid| are assumed to be part of the same sequence of split log entries.
index
integer
The index of this LogEntry in the sequence of split log entries. Log entries are given |index| values 0, 1, ..., n-1 for a sequence of n log entries.
totalSplits
integer
The total number of log entries that the original LogEntry was split into.
LogErrorGroup
Contains metadata that associates the LogEntry to Error Reporting error groups.
JSON representation
{
"id" : string
}
Fields
id
string
The id is a unique identifier for a particular error group; it is the last part of the error group resource name: /project/[PROJECT_ID]/errors/[ERROR_GROUP_ID] . Example: COShysOX0r_51QE .
This field can be used to search for log entries belonging to a specific error group in Logs Explorer (e.g., errorGroups.id = "ID" ) or Observability Analytics.
The id is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see Google Cloud Privacy Notice .
AppHub
Metadata associated with App Hub.
JSON representation
{
"application" : {
object ( AppHubApplication )
} ,
// Union field AppHubResource can be only one of the following:
"service" : {
object ( AppHubService )
} ,
"workload" : {
object ( AppHubWorkload )
}
// End of list of possible types for union field AppHubResource .
}
Fields
application
object ( AppHubApplication )
Metadata associated with the application.
Union field AppHubResource . AppHub service or workload. AppHubResource can be only one of the following:
service
object ( AppHubService )
Metadata associated with the service.
workload
object ( AppHubWorkload )
Metadata associated with the workload.
AppHubApplication
Resource identifiers associated with an AppHub application AppHub resources are of the form projects/ /locations/ /applications/ projects/ /locations/ /applications/ /services/ projects/ /locations/ /applications/ /workloads/ These resources can be reconstructed from the components below.
JSON representation
{
"container" : string ,
"location" : string ,
"id" : string
}
Fields
container
string
Resource container that owns the application. Example: "projects/management_project"
location
string
Location associated with the Application. Example: "us-east1"
id
string
Application Id. Example: "my-app"
AppHubService
Metadata associated with an App Hub service.
JSON representation
{
"id" : string ,
"environmentType" : string ,
"criticalityType" : string
}
Fields
id
string
Service Id. Example: "my-service"
environmentType
string
Service environment type Example: "DEV"
criticalityType
string
Service criticality type Example: "CRITICAL"
AppHubWorkload
Metadata associated with an App Hub workload.
JSON representation
{
"id" : string ,
"environmentType" : string ,
"criticalityType" : string
}
Fields
id
string
Workload Id. Example: "my-workload"
environmentType
string
Workload environment type Example: "DEV"
criticalityType
string
Workload criticality type Example: "CRITICAL"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-07 UTC."],[],[]]
