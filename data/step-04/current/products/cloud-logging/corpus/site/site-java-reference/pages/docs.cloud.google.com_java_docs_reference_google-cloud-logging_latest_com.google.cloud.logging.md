---
title: "Package com.google.cloud.logging (3.29.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging
  title: "Package com.google.cloud.logging (3.29.0) \_|\_ Java client libraries \_\
    |\_ Google Cloud Documentation"
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
Package com.google.cloud.logging (3.29.0)
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
GitHub Repository
Classes
Class
Description
com. google. cloud. logging. Context
Class to hold context attributes including information about {@see HttpRequest} and tracing.
com. google. cloud. logging. Context. Builder
A builder for {@see Context} objects.
com. google. cloud. logging. Context Handler
Class provides a per-thread storage of the {@see Context} instances.
com. google. cloud. logging. Exclusion
Specifies a set of log entries that are not to be stored in Logging. If your GCP resource
receives a large volume of logs, you can use exclusions to reduce your chargeable logs.
Exclusions are processed after log sinks, so you can export log entries before they are excluded.
Note that organization-level and folder-level exclusions don't apply to child resources, and that
com. google. cloud. logging. Exclusion. Builder
A builder for Exclusion objects.
com. google. cloud. logging. Http Request
Objects of this class represent information about the (optional) HTTP request associated with a
log entry.
See Also: Http Request
com. google. cloud. logging. Http Request. Builder
A builder for HttpRequest objects.
com. google. cloud. logging. Http Request. Request Method
The HTTP request method.
com. google. cloud. logging. Instrumentation
com. google. cloud. logging. Log Destination Name
Class for specifying resource name of the log to which this log entry belongs (see 'logName'
parameter in https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry )
com. google. cloud. logging. Log Entry
A Cloud Logging log entry. All log entries are represented via objects of this class. Log entries
can have different type of payloads: an UTF-8 string (see Payload.StringPayload ), a JSON
object (see Payload.JsonPayload , or a protobuf object (see Payload.ProtoPayload ).
Entries can also store additional information about the operation or the HTTP request that
com. google. cloud. logging. Log Entry. Builder
A builder for LogEntry objects.
com. google. cloud. logging. Log Entry Iterator
The class implements {@see Iterator} interface over {@see LogEntry} by iterating through {@see TailLogEntriesResponse} streamed by BidiStream . This class is instantiated by {@see LogEntryServerStream} and is not intended to be used explicitly.
com. google. cloud. logging. Log Entry Server Stream
The class implements Iterable interface over {@see LogEntry}. It wraps around BidiStream bi-directional gRPC stream to support iterating through ingested responses. The class
uses {@see LogEntryIterator} to iterate through the processed responses. The stream should be
explicitly canceled by calling {@see LogEntryServerStream#cancel()} method. The class does not
provide recovery or resuming functionality over the stream.
com. google. cloud. logging. Logging. Entry List Option
Class for specifying options for listing log entries.
com. google. cloud. logging. Logging. List Option
Class for specifying options for listing sinks, monitored resources and monitored resource
descriptors.
com. google. cloud. logging. Logging. Tail Option
Class for specifying options for tailing log entries.
com. google. cloud. logging. Logging. Write Option
Class for specifying options for writing log entries.
com. google. cloud. logging. Logging Handler
A logging handler that outputs logs generated with java.util.logging.Logger to Cloud
Logging.
Java logging levels (see java.util.logging.Level ) are mapped to the following Google
com. google. cloud. logging. Logging Level
This class adds some additional Java logging levels for Cloud Logging. Added levels fill in the
gap between Java logging levels and Cloud Logging severities.
Added levels in descending order are (between parenthesis the relation with Java logging
com. google. cloud. logging. Logging Options
com. google. cloud. logging. Logging Options. Builder
com. google. cloud. logging. Logging Options. Default Logging Factory
com. google. cloud. logging. Logging Options. Default Logging Rpc Factory
com. google. cloud. logging. Metadata Loader
com. google. cloud. logging. Metric
Cloud Logging metrics describe logs-based metric. The value of the metric is the number of log
entries that match a logs filter (see #getFilter() ).
Metric adds a layer of service-related functionality over MetricInfo . Objects
com. google. cloud. logging. Metric. Builder
A builder for Metric objects.
com. google. cloud. logging. Metric Info
Cloud Logging metrics describe logs-based metric. The value of the metric is the number of log
entries that match a logs filter (see #getFilter() ).
See Also: Logs-based Metrics
com. google. cloud. logging. Metric Info. Builder
A builder for MetricInfo objects.
com. google. cloud. logging. Monitored Resource Util
Monitored resource construction utilities to detect resource type and add labels. Used by logging
framework adapters to configure default resource. See usage in LoggingHandler .
com. google. cloud. logging. Operation
Additional information about a potentially long-running operation with which a log entry is
associated.
See Also: Log Entry Operation
com. google. cloud. logging. Operation. Builder
A builder for Operation objects.
com. google. cloud. logging. Payload
A base class for log entry payloads.
See Also: Log Entries and Logs
com. google. cloud. logging. Payload. Json Payload
A log entry's JSON payload.
com. google. cloud. logging. Payload. Proto Payload
A log entry payload as a protobuf object.
com. google. cloud. logging. Payload. String Payload
A log entry payload as an UTF-8 string.
com. google. cloud. logging. Sink
Cloud Logging sinks can be used to control the export of your logs. Each sink specifies the
export of a set of log entries to a certain destination. A sink consists of a name, unique to the
project, a filter for choosing the log entries to export and a destination for the log entries.
com. google. cloud. logging. Sink. Builder
A builder for Sink objects.
com. google. cloud. logging. Sink Info
Cloud Logging sinks can be used to control the export of your logs. Each sink specifies the
export of a set of log entries to a certain destination. A sink consists of a name, unique to the
project, a filter for choosing the log entries to export and a destination for the log entries.
com. google. cloud. logging. Sink Info. Builder
A builder for SinkInfo objects.
com. google. cloud. logging. Sink Info. Destination
com. google. cloud. logging. Sink Info. Destination. Bucket Destination
Class for specifying a Google Cloud Storage bucket as destination for the sink.
com. google. cloud. logging. Sink Info. Destination. Dataset Destination
Class for specifying a Google Cloud BigQuery dataset as destination for the sink.
com. google. cloud. logging. Sink Info. Destination. Logging Bucket Destination
com. google. cloud. logging. Sink Info. Destination. Topic Destination
Class for specifying a Google Cloud BigQuery dataset as destination for the sink.
com. google. cloud. logging. Source Location
Additional information about the source code location that produced the log entry.
com. google. cloud. logging. Source Location. Builder
A builder for SourceLocation objects.
com. google. cloud. logging. Timestamp Default Filter
com. google. cloud. logging. Trace Logging Enhancer
Interfaces
Interface
Description
com. google. cloud. logging.I Timestamp Default Filter
Encapsulates implementation of default time filter. This is needed for testing since we can't
mock static classes with EasyMock
com. google. cloud. logging. Logging
com. google. cloud. logging. Logging Enhancer
An enhancer for log entries. Used to add custom labels to the LogEntry.Builder
com. google. cloud. logging. Logging Factory
An interface for Logging factories.
com. google. cloud. logging. Resource Type Environment Getter
Enums
Enum
Description
com. google. cloud. logging. Context Handler. Context Priority
com. google. cloud. logging. Log Destination Name. Destination Type
com. google. cloud. logging. Logging. Sorting Field
Fields according to which log entries can be sorted.
com. google. cloud. logging. Logging. Sorting Order
Sorting orders available when listing log entries.
com. google. cloud. logging. Logging Handler. Log Target
Where to send logs.
com. google. cloud. logging. Monitored Resource Util. Label
com. google. cloud. logging. Payload. Type
Type for a log entry payload.
com. google. cloud. logging. Severity
The severity of the event described in a log entry. These guideline severity levels are ordered,
with numerically smaller levels treated as less severe than numerically larger levels. If the
source of the log entries uses a different set of severity levels, the client should select the
closest corresponding Severity value.
com. google. cloud. logging. Sink Info. Destination. Type
Type of destination for Cloud Logging sink.
com. google. cloud. logging. Sink Info. Version Format
Available log entry formats. Log entries can be written to Cloud Logging in either format and
can be exported in either format. Version 2 is the preferred format.
com. google. cloud. logging. Synchronicity
Used to specify the behavior of write calls to the Cloud Logging service. Specifying SYNC will
make synchronous calls; specifying ASYNC will make asynchronous calls. The default behavior is
ASYNC.
Exceptions
Exception
Description
com. google. cloud. logging. Logging Exception
Logging service exception.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
