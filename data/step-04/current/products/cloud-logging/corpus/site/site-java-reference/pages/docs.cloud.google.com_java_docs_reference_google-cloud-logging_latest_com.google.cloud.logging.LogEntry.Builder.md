---
title: "Class LogEntry.Builder (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntry.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntry.Builder
  title: "Class LogEntry.Builder (3.29.0) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class LogEntry.Builder (3.29.0)
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
public static class LogEntry . Builder
A builder for LogEntry objects.
Inheritance
Object >
LogEntry.Builder
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
Methods
addLabel(String key, String value)
public LogEntry . Builder addLabel ( String key , String value )
Adds a label to the log entry's labels. Labels are user-defined (key, value) data that
provides additional information about the log entry.
Parameters
Name
Description
key
String
value
String
Returns
Type
Description
LogEntry.Builder
build()
public LogEntry build ()
Creates a LogEntry object for this builder.
Returns
Type
Description
LogEntry
clearLabels()
public LogEntry . Builder clearLabels ()
Clears all the labels of the log entry. Labels are user-defined (key, value) data that
provides additional information about the log entry.
Returns
Type
Description
LogEntry.Builder
setDestination(LogDestinationName destination)
public LogEntry . Builder setDestination ( LogDestinationName destination )
Sets the log path destination name type associated with the log entry.
Parameter
Name
Description
destination
LogDestinationName
Returns
Type
Description
LogEntry.Builder
setHttpRequest(HttpRequest httpRequest)
public LogEntry . Builder setHttpRequest ( HttpRequest httpRequest )
Sets information about the HTTP request associated with this log entry, if applicable.
Parameter
Name
Description
httpRequest
HttpRequest
Returns
Type
Description
LogEntry.Builder
setInsertId(String insertId)
public LogEntry . Builder setInsertId ( String insertId )
Sets a unique ID for the log entry. If you provide this field, the Logging service considers
other log entries in the same log with the same ID as duplicates which can be removed. If
omitted, the Logging service will generate a unique ID for this log entry.
Parameter
Name
Description
insertId
String
Returns
Type
Description
LogEntry.Builder
setLabels(Map<String,String> labels)
public LogEntry . Builder setLabels ( Map<String , String > labels )
Sets an optional set of user-defined (key, value) data that provides additional information
about the log entry.
Parameter
Name
Description
labels
Map < String , String >
Returns
Type
Description
LogEntry.Builder
setLogName(String logName)
public LogEntry . Builder setLogName ( String logName )
Sets the name of the log to which this log entry belongs. The log name must be less than 512
characters long and can only include the following characters: upper and lower case
alphanumeric characters: [A-Za-z0-9] ; and punctuation characters: _-./ . The
forward-slash ( / ) characters in the log name must be URL-encoded. Examples:
syslog , library.googleapis.com%2Fbook_log .
Parameter
Name
Description
logName
String
Returns
Type
Description
LogEntry.Builder
setOperation(Operation operation)
public LogEntry . Builder setOperation ( Operation operation )
Sets information about an operation associated with the log entry, if applicable.
Parameter
Name
Description
operation
Operation
Returns
Type
Description
LogEntry.Builder
setPayload(Payload<?> payload)
public LogEntry . Builder setPayload ( Payload < ? > payload )
Sets the payload for this log entry. The log entry payload can be provided as an UTF-8 string
(see Payload.StringPayload ), a JSON object (see Payload.JsonPayload , or a
protobuf object (see Payload.ProtoPayload ).
See Also: Log Entries and Logs
Parameter
Name
Description
payload
Payload < ? >
Returns
Type
Description
LogEntry.Builder
setReceiveTimestamp(Instant receiveTimestamp)
public LogEntry . Builder setReceiveTimestamp ( Instant receiveTimestamp )
Sets the time the log entry was received by Cloud Logging. If omitted, the Logging service
will set the time at which the log entry is received.
Parameter
Name
Description
receiveTimestamp
Instant
Returns
Type
Description
LogEntry.Builder
setReceiveTimestamp(long milliseconds) (deprecated)
public LogEntry . Builder setReceiveTimestamp ( long milliseconds )
Deprecated. This method is no longer recommended to setup the receive time timestamp.
Use setReceiveTimestamp(Instant) instead.
Sets the time the log entry was received by Cloud Logging, in milliseconds. If omitted, the
Logging service will set the time at which the log entry is received.
Parameter
Name
Description
milliseconds
long
Returns
Type
Description
LogEntry.Builder
setResource(MonitoredResource resource)
public LogEntry . Builder setResource ( MonitoredResource resource )
Sets the monitored resource associated with this log entry. Example: a log entry that reports
a database error would be associated with the monitored resource designating the particular
database that reported the error.
Parameter
Name
Description
resource
com.google.cloud.MonitoredResource
Returns
Type
Description
LogEntry.Builder
setSeverity(Severity severity)
public LogEntry . Builder setSeverity ( Severity severity )
Sets the severity of the log entry. If not set, Severity#DEFAULT is used.
Parameter
Name
Description
severity
Severity
Returns
Type
Description
LogEntry.Builder
setSourceLocation(SourceLocation sourceLocation)
public LogEntry . Builder setSourceLocation ( SourceLocation sourceLocation )
Sets the source code location information associated with the log entry if any.
Parameter
Name
Description
sourceLocation
SourceLocation
Returns
Type
Description
LogEntry.Builder
setSpanId(Object spanId)
public LogEntry . Builder setSpanId ( Object spanId )
Sets the ID of the trace span associated with the log entry, if any.
Parameter
Name
Description
spanId
Object
Returns
Type
Description
LogEntry.Builder
setSpanId(String spanId)
public LogEntry . Builder setSpanId ( String spanId )
Sets the ID of the trace span associated with the log entry, if any.
Parameter
Name
Description
spanId
String
Returns
Type
Description
LogEntry.Builder
setTimestamp(Instant timestamp)
public LogEntry . Builder setTimestamp ( Instant timestamp )
Sets the time at which the event described by the log entry occurred. If omitted, the Logging
service will use the time at which the log entry is received.
Parameter
Name
Description
timestamp
Instant
Returns
Type
Description
LogEntry.Builder
setTimestamp(long milliseconds) (deprecated)
public LogEntry . Builder setTimestamp ( long milliseconds )
Deprecated. This method is no longer recommended to setup the entry timestamp.
Use #setTimestamp(Instant) instead.
Sets the time at which the event described by the log entry occurred, in milliseconds. If
omitted, the Logging service will use the time at which the log entry is received.
Parameter
Name
Description
milliseconds
long
Returns
Type
Description
LogEntry.Builder
setTrace(Object trace)
public LogEntry . Builder setTrace ( Object trace )
Sets the resource name of the trace associated with the log entry, if any. If it contains a
relative resource name, the name is assumed to be relative to //tracing.googleapis.com .
Parameter
Name
Description
trace
Object
Returns
Type
Description
LogEntry.Builder
setTrace(String trace)
public LogEntry . Builder setTrace ( String trace )
Sets the resource name of the trace associated with the log entry, if any. If it contains a
relative resource name, the name is assumed to be relative to //tracing.googleapis.com .
Parameter
Name
Description
trace
String
Returns
Type
Description
LogEntry.Builder
setTraceSampled(boolean traceSampled)
public LogEntry . Builder setTraceSampled ( boolean traceSampled )
Sets the sampling decision of the trace span associated with the log entry.
Parameter
Name
Description
traceSampled
boolean
Returns
Type
Description
LogEntry.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
