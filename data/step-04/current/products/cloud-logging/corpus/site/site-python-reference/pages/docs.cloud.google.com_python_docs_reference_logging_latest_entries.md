---
title: "Log Entries \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/logging/latest/entries
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/logging/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/logging/latest/entries
  title: "Log Entries \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Log Entries
Stay organized with collections
Save and categorize content based on your preferences.
3.15.0 (latest)
3.13.0
3.12.1
3.11.3
3.10.0
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.1
3.2.5
3.1.2
3.0.0
2.7.2
2.6.0
2.5.0
2.4.0
2.3.1
2.2.0
2.1.1
2.0.2
1.15.3
1.14.0
1.13.0
1.12.1
Log entries within the Google Cloud Logging API.
class google.cloud.logging_v2.entries.LogEntry(log_name=None, labels=None, insert_id=None, severity=None, http_request=None, timestamp=None, resource=Resource(type='global', labels={}), trace=None, span_id=None, trace_sampled=None, source_location=None, operation=None, logger=None, payload=None)
Bases: google.cloud.logging_v2.entries.LogEntry
Log entry.
Parameters
log_name ( str ) – The name of the logger used to post the entry.
labels ( Optional [ dict ] ) – Mapping of labels for the entry
insert_id ( Optional [ str ] ) – The ID used to identify an entry
uniquely.
severity ( Optional [ str ] ) – The severity of the event being logged.
http_request ( Optional [ dict ] ) – Info about HTTP request associated
with the entry.
timestamp ( Optional [ datetime.datetime ] ) – Timestamp for the entry.
resource ( Optional [ google.cloud.logging_v2.resource.Resource ] ) – Monitored resource of the entry.
trace ( Optional [ str ] ) – Trace ID to apply to the entry.
span_id ( Optional [ str ] ) – Span ID within the trace for the log
entry. Specify the trace parameter if span_id is set.
trace_sampled ( Optional [ bool ] ) – The sampling decision of the trace
associated with the log entry.
source_location ( Optional [ dict ] ) – Location in source code from which
the entry was emitted.
operation ( Optional [ dict ] ) – Additional information about a potentially
long-running operation associated with the log entry.
logger ( logging_v2.logger.Logger ) – the logger used
to write the entry.
See:
https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry
Create new instance of LogEntry(log_name, labels, insert_id, severity, http_request, timestamp, resource, trace, span_id, trace_sampled, source_location, operation, logger, payload)
classmethod from_api_repr(resource, client, *, loggers=None)
Construct an entry given its API representation
Parameters
resource ( dict ) – text entry resource representation returned from
the API
client ( Client ) – Client which holds credentials and project configuration.
loggers ( Optional [ dict ] ) – A mapping of logger fullnames -> loggers. If not
passed, the entry will have a newly-created logger if possible,
or an empty logger field if not.
Returns
Log entry parsed from resource .
Return type
google.cloud.logging.entries.LogEntry
to_api_repr()
API repr (JSON format) for entry.
class google.cloud.logging_v2.entries.ProtobufEntry(log_name=None, labels=None, insert_id=None, severity=None, http_request=None, timestamp=None, resource=Resource(type='global', labels={}), trace=None, span_id=None, trace_sampled=None, source_location=None, operation=None, logger=None, payload=None)
Bases: google.cloud.logging_v2.entries.LogEntry
Log entry with protobuf message payload.
Parameters
log_name ( str ) – The name of the logger used to post the entry.
labels ( Optional [ dict ] ) – Mapping of labels for the entry
insert_id ( Optional [ str ] ) – The ID used to identify an entry
uniquely.
severity ( Optional [ str ] ) – The severity of the event being logged.
http_request ( Optional [ dict ] ) – Info about HTTP request associated
with the entry.
timestamp ( Optional [ datetime.datetime ] ) – Timestamp for the entry.
resource ( Optional [ google.cloud.logging_v2.resource.Resource ] ) – Monitored resource of the entry.
trace ( Optional [ str ] ) – Trace ID to apply to the entry.
span_id ( Optional [ str ] ) – Span ID within the trace for the log
entry. Specify the trace parameter if span_id is set.
trace_sampled ( Optional [ bool ] ) – The sampling decision of the trace
associated with the log entry.
source_location ( Optional [ dict ] ) – Location in source code from which
the entry was emitted.
operation ( Optional [ dict ] ) – Additional information about a potentially
long-running operation associated with the log entry.
logger ( logging_v2.logger.Logger ) – the logger used
to write the entry.
payload ( google.protobuf.Message ) – payload for the log entry.
See:
https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry
Create new instance of LogEntry(log_name, labels, insert_id, severity, http_request, timestamp, resource, trace, span_id, trace_sampled, source_location, operation, logger, payload)
parse_message(message)
Parse payload into a protobuf message.
Mutates the passed-in message in place.
Parameters
message ( google.protobuf.Message ) – the message to be logged
to_api_repr()
API repr (JSON format) for entry.
class google.cloud.logging_v2.entries.StructEntry(log_name=None, labels=None, insert_id=None, severity=None, http_request=None, timestamp=None, resource=Resource(type='global', labels={}), trace=None, span_id=None, trace_sampled=None, source_location=None, operation=None, logger=None, payload=None)
Bases: google.cloud.logging_v2.entries.LogEntry
Log entry with JSON payload.
Parameters
log_name ( str ) – The name of the logger used to post the entry.
labels ( Optional [ dict ] ) – Mapping of labels for the entry
insert_id ( Optional [ str ] ) – The ID used to identify an entry
uniquely.
severity ( Optional [ str ] ) – The severity of the event being logged.
http_request ( Optional [ dict ] ) – Info about HTTP request associated
with the entry.
timestamp ( Optional [ datetime.datetime ] ) – Timestamp for the entry.
resource ( Optional [ google.cloud.logging_v2.resource.Resource ] ) – Monitored resource of the entry.
trace ( Optional [ str ] ) – Trace ID to apply to the entry.
span_id ( Optional [ str ] ) – Span ID within the trace for the log
entry. Specify the trace parameter if span_id is set.
trace_sampled ( Optional [ bool ] ) – The sampling decision of the trace
associated with the log entry.
source_location ( Optional [ dict ] ) – Location in source code from which
the entry was emitted.
operation ( Optional [ dict ] ) – Additional information about a potentially
long-running operation associated with the log entry.
logger ( logging_v2.logger.Logger ) – the logger used
to write the entry.
payload ( dict ) – payload for the log entry.
See:
https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry
Create new instance of LogEntry(log_name, labels, insert_id, severity, http_request, timestamp, resource, trace, span_id, trace_sampled, source_location, operation, logger, payload)
to_api_repr()
API repr (JSON format) for entry.
class google.cloud.logging_v2.entries.TextEntry(log_name=None, labels=None, insert_id=None, severity=None, http_request=None, timestamp=None, resource=Resource(type='global', labels={}), trace=None, span_id=None, trace_sampled=None, source_location=None, operation=None, logger=None, payload=None)
Bases: google.cloud.logging_v2.entries.LogEntry
Log entry with text payload.
Parameters
log_name ( str ) – The name of the logger used to post the entry.
labels ( Optional [ dict ] ) – Mapping of labels for the entry
insert_id ( Optional [ str ] ) – The ID used to identify an entry
uniquely.
severity ( Optional [ str ] ) – The severity of the event being logged.
http_request ( Optional [ dict ] ) – Info about HTTP request associated
with the entry.
timestamp ( Optional [ datetime.datetime ] ) – Timestamp for the entry.
resource ( Optional [ google.cloud.logging_v2.resource.Resource ] ) – Monitored resource of the entry.
trace ( Optional [ str ] ) – Trace ID to apply to the entry.
span_id ( Optional [ str ] ) – Span ID within the trace for the log
entry. Specify the trace parameter if span_id is set.
trace_sampled ( Optional [ bool ] ) – The sampling decision of the trace
associated with the log entry.
source_location ( Optional [ dict ] ) – Location in source code from which
the entry was emitted.
operation ( Optional [ dict ] ) – Additional information about a potentially
long-running operation associated with the log entry.
logger ( logging_v2.logger.Logger ) – the logger used
to write the entry.
payload ( str ) – payload for the log entry.
See:
https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry
Create new instance of LogEntry(log_name, labels, insert_id, severity, http_request, timestamp, resource, trace, span_id, trace_sampled, source_location, operation, logger, payload)
to_api_repr()
API repr (JSON format) for entry.
google.cloud.logging_v2.entries.logger_name_from_path(path, project=None)
Validate a logger URI path and get the logger name.
Parameters
path ( str ) – URI path for a logger API request
project ( str ) – The project the path is expected to belong to
Returns
Logger name parsed from path .
Return type
str
Raises
ValueError – If the path is ill-formed of if the project
from path does not agree with the project passed in.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
