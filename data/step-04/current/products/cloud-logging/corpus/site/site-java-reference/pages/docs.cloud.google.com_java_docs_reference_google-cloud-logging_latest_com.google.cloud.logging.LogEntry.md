---
title: "Class LogEntry (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntry
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntry
  title: "Class LogEntry (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Class LogEntry (3.29.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.29.0 (latest)
3.28.0
3.26.0
3.24.0
3.23.10
3.22.6
3.21.4
3.20.7
3.19.0
3.18.0
3.17.2
3.16.2
3.15.17
3.14.9
3.13.7
3.12.1
3.11.10
3.10.7
3.9.0
3.8.0
3.7.6
3.6.4
3.5.3
public class LogEntry implements Serializable
A Cloud Logging log entry. All log entries are represented via objects of this class. Log entries
can have different type of payloads: an UTF-8 string (see Payload.StringPayload ), a JSON
object (see Payload.JsonPayload , or a protobuf object (see Payload.ProtoPayload ).
Entries can also store additional information about the operation or the HTTP request that
generated the log (see LogEntry#getOperation() and LogEntry#getHttpRequest() ,
respectively).
See Also: Log Entries and Logs
Inheritance
Object >
LogEntry
Implements
Serializable
Inherited Members
Object.clone()
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.toString()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Methods
fromPb(LogEntry entryPb)
public static LogEntry fromPb ( LogEntry entryPb )
Parameter
Name
Description
entryPb
LogEntry
Returns
Type
Description
LogEntry
newBuilder(Payload<?> payload)
public static LogEntry . Builder newBuilder ( Payload < ? > payload )
Returns a builder for LogEntry objects given the entry payload.
Parameter
Name
Description
payload
Payload < ? >
Returns
Type
Description
LogEntry.Builder
of(Payload<?> payload)
public static LogEntry of ( Payload < ? > payload )
Creates a LogEntry object given the entry payload.
Parameter
Name
Description
payload
Payload < ? >
Returns
Type
Description
LogEntry
of(String logName, MonitoredResource resource, Payload<?> payload)
public static LogEntry of ( String logName , MonitoredResource resource , Payload < ? > payload )
Creates a LogEntry object given the log name, the monitored resource and the entry
payload.
Parameters
Name
Description
logName
String
resource
com.google.cloud.MonitoredResource
payload
Payload < ? >
Returns
Type
Description
LogEntry
toPbFunction(String projectId)
public static Function<LogEntry , LogEntry > toPbFunction ( String projectId )
Parameter
Name
Description
projectId
String
Returns
Type
Description
com.google.common.base.Function < LogEntry , LogEntry >
Methods
<T>getPayload()
public T < T>getPayload ()
Returns the payload for this log entry. The log entry payload can be an UTF-8 string (see
Payload.StringPayload ), a JSON object (see Payload.JsonPayload , or a protobuf
object (see Payload.ProtoPayload ).
See Also: Log Entries and Logs
Returns
Type
Description
T
equals(Object obj)
public boolean equals ( Object obj )
Parameter
Name
Description
obj
Object
Returns
Type
Description
boolean
Overrides
Object.equals(Object)
getDestination()
public LogDestinationName getDestination ()
Returns the log path destination name type associated with log entry. By default, project name
based destination is used.
See Also: logName
Returns
Type
Description
LogDestinationName
getHttpRequest()
public HttpRequest getHttpRequest ()
Returns information about the HTTP request associated with this log entry, if applicable.
Returns
Type
Description
HttpRequest
getInsertId()
public String getInsertId ()
Returns a unique ID for the log entry. The Logging service considers other log entries in the
same log with the same ID as duplicates which can be removed.
Returns
Type
Description
String
getInstantReceiveTimestamp()
public Instant getInstantReceiveTimestamp ()
Returns the time the log entry was received by Cloud Logging, in milliseconds.
Returns
Type
Description
Instant
timestamp as Instant
getInstantTimestamp()
public Instant getInstantTimestamp ()
Returns the time at which the event described by the log entry occurred.
Returns
Type
Description
Instant
timestamp as Instant
getLabels()
public Map<String , String > getLabels ()
Returns an optional set of user-defined (key, value) data that provides additional information
about the log entry.
Returns
Type
Description
Map < String , String >
getLogName()
public String getLogName ()
Returns the name of the log to which this log entry belongs. The log name must be less than 512
characters long and can only include the following characters: upper and lower case
alphanumeric characters: [A-Za-z0-9] ; and punctuation characters: _-./ . The
forward-slash ( / ) characters in the log name must be URL-encoded. Examples:
syslog , library.googleapis.com%2Fbook_log .
Returns
Type
Description
String
getOperation()
public Operation getOperation ()
Returns information about an operation associated with the log entry, if applicable.
Returns
Type
Description
Operation
getReceiveTimestamp() (deprecated)
public Long getReceiveTimestamp ()
Deprecated. This method is no longer recommended to get the received time timestamp.
Use getInstantReceiveTimestamp() instead.
Returns the time the log entry was received by Cloud Logging, in milliseconds.
Returns
Type
Description
Long
timestamp in milliseconds
getResource()
public MonitoredResource getResource ()
Returns the monitored resource associated with this log entry. Example: a log entry that
reports a database error would be associated with the monitored resource designating the
particular database that reported the error.
Returns
Type
Description
com.google.cloud.MonitoredResource
getSeverity()
public Severity getSeverity ()
Returns the severity of the log entry. If not set, Severity#DEFAULT is used.
Returns
Type
Description
Severity
getSourceLocation()
public SourceLocation getSourceLocation ()
Returns the source code location information associated with the log entry, if any.
Returns
Type
Description
SourceLocation
getSpanId()
public String getSpanId ()
Returns the ID of the trace span associated with the log entry, if any.
Returns
Type
Description
String
getTimestamp() (deprecated)
public Long getTimestamp ()
Deprecated. This method is no longer recommended to get the entry timestamp.
Use getInstantTimestamp() instead.
Returns the time at which the event described by the log entry occurred, in milliseconds.
Returns
Type
Description
Long
timestamp in milliseconds
getTrace()
public String getTrace ()
Returns the resource name of the trace associated with the log entry, if any. If it contains a
relative resource name, the name is assumed to be relative to //tracing.googleapis.com .
Returns
Type
Description
String
getTraceSampled()
public boolean getTraceSampled ()
Returns the sampling decision of the trace span associated with the log entry, or false
if there is no trace span.
Returns
Type
Description
boolean
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
Object.hashCode()
toBuilder()
public LogEntry . Builder toBuilder ()
Returns a Builder for this log entry.
Returns
Type
Description
LogEntry.Builder
toString()
public String toString ()
Returns
Type
Description
String
Overrides
Object.toString()
toStructuredJsonString()
public String toStructuredJsonString ()
Serializes the object to a one line JSON string in the simplified format that can be parsed by
the logging agents that run on Google Cloud resources.
Returns
Type
Description
String
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
