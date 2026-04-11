---
title: "Storage schema for trace data \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/reference/trace-schema
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/reference/trace-schema
  title: "Storage schema for trace data \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Reference
Send feedback
Storage schema for trace data
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the format in which trace spans are stored. The format
of the data is generally consistent with the proto files defined by the
OpenTelemetry OTLP Protocol .
However, fields might be converted from an OpenTelemetry-specific data type to a
JSON data type before storage.
The Telemetry API
uses the OpenTelemetry OTLP Protocol .
This protocol relies on the trace_service.proto
and trace.proto files. For information about
field limits,
see Telemetry API limits .
The Cloud Trace API doesn't use the OpenTelemetry OTLP Protocol and defines a
proprietary data format. Trace data sent to your Google Cloud project through
this API is converted to the format described by this document. However, the
limits for the Cloud Trace API apply.
Span storage format
Field
Description
trace_id
string
Globally unique identifier for the
trace .
This identifier is a 128-bit numeric value formatted as a 16-byte
hexadecimal string. For example,
382d4f4c6b7bb2f4a972559d9085001d .
To learn more about this identifier, see
W3C trace-id .
A numeric value of zero is invalid.
The trace_id is used by visualization and analysis
tools to identify the spans associated with a trace. For this reason,
every end-to-end operation must have a unique identifier. Don't
reuse a trace identifier.
span_id
string
Required. Identifier for the
span .
Must be unique within a trace.
This identifier is a 64-bit numeric value
formatted as an 8-byte hexadecimal string.
For example, 9046a5b9f7c12500 .
A numeric value of zero is invalid.
trace_state
string
This field corresponds to the
tracestate header ,
as defined by W3C Trace Context .
This header contains configuration information that is included in
requests when applications are instrumented to collect trace data.
For example, an application can specify the
probability sampling
settings, or it can include vendor-specific content.
OpenTelemetry libraries automatically record the value of the
tracestate header when they generate spans.
parent_span_id
string
Optional. Identifies the operation which invoked this span.
The "root" span has the parent span ID set to null.
The parent-child relationship between spans is used by visualization
tools to construct the tree structure.
name
string
Required. The name of the operation that was performed.
The name can be a method name or some other per-call site name.
For the same executable and the same endpoint, using a consistent name
makes it easier to correlate cross-trace spans. For best practices, see
How to Name Your Spans .
The span name is sanitized and displayed in the Google Cloud console.
kind
integer
Specifies where in the system the operation took place.
The value corresponds to the OpenTelemetry: Span Kind enumeration:
Value OpenTelemetry enumeration
0 SPAN_KIND_UNSPECIFIED
1 SPAN_KIND_INTERNAL
2 SPAN_KIND_SERVER
3 SPAN_KIND_CLIENT
4 SPAN_KIND_PRODUCER
5 SPAN_KIND_CONSUMER
start_time
Timestamp
Required. Start time of the span, to the nearest nanosecond.
start_time_unix_nano
integer
The start time in nanoseconds, according to the UNIX epoch.
end_time
Timestamp
Required. End time of the span, to the nearest nanosecond.
end_time_unix_nano
integer
The end time in nanoseconds, according to the UNIX epoch.
receive_time
Timestamp
Required. Receive time of the span, to the nearest nanosecond.
receive_time_unix_nano
integer
The end time in nanoseconds, according to the UNIX epoch.
duration_unix_nano
integer
The duration in nanoseconds.
attributes
JSON type
Each attribute is a key-value pair.
The attributes available to you
are dependent on your trace data. The structure of attributes follow the
OpenTelemetry standard. To learn more, see OpenTelemetry: Attributes .
OpenTelemetry specificies semantic conventions for attributes. To learn
about these conventions, see
Trace semantic conventions .
The following are examples of attributes:
"yourcompany.your.own.key": "your own value"
"network.protocol.name": "http"
"network.protocol.version": "1.1"
"http.response.status_code": "200"
"network.peer.address": "REDACTED"
dropped_attributes_count
integer
The number of attributes that were discarded.
Attributes can discarded because their keys are too long or because there are
too many attributes. When this value is zero, no attributes were discarded.
This value might be set by the client-side instrumentation or by an
application. The value can be incremented by the server.
events
record with repeated fields
A point in time event. Each event contains the following fields.
Field Description
time Timestamp
time_unix_nano integer
name
string
Required. Name of the event.
attributes
JSON type
Each attribute is a key-value pair.
The attributes available to you
are dependent on your trace data. The structure of attributes follow the
OpenTelemetry standard. To learn more, see OpenTelemetry: Attributes .
dropped_attributes_count
integer
The number of attributes that were discarded.
Attributes can discarded because their keys are too long or because there are
too many attributes. When this value is zero, no attributes were discarded.
This value might be set by the client-side instrumentation or by an
application. The value can be incremented by the server.
dropped_events_count
integer
The number of events that were discarded. Events can discarded
because there are too many events. When this value is zero, no
events were discarded.
links
record with repeated fields
Links associated with the span. Links are references from this span
to another span in the same or different trace.
Links provide a mechanism to correlate spans from one trace with
spans in another trace. For example, suppose one operation causes
an asynchronous operation to occur. In this scenario, there are two
traces, one for the original operation and one for the asynchronous
operation. You can use links to correlate the spans in these traces.
Each link contains the following fields.
Field Description
trace_id string
Required.
span_id string
Required.
trace_state string
attributes
JSON type
Each attribute is a key-value pair.
The attributes available to you
are dependent on your trace data. The structure of attributes follow the
OpenTelemetry standard. To learn more, see OpenTelemetry: Attributes .
dropped_attributes_count
integer
The number of attributes that were discarded.
Attributes can discarded because their keys are too long or because there are
too many attributes. When this value is zero, no attributes were discarded.
This value might be set by the client-side instrumentation or by an
application. The value can be incremented by the server.
dropped_links_count
integer
The number of links that were discarded. Links can discarded
because there are too many links. When this value is zero, no
links were discarded.
status
record without repeated fields
This field records the completion status for a span.
The value of the code subfield corresponds to the
OpenTelemetry: Span Status enumeration:
Value OpenTelemetry enumeration Description
0
UNSET
Operation completed successfully.
1
OK
Operation was marked as error-free by a human.
2
ERROR
The operation completed with an error. For example, if the
status is 400 (BAD REQUEST) on a client span, then this field
is set to ERROR .
The message subfield, which is formatted a string,
contains error information.
resource
record without repeated fields
This field identifies the infrastructure or hosting system from which
the telemetry was collected or that the telemetry is about. For example,
consider an application running on Google Kubernetes Engine. Attributes
for this resource might include the process name and namespace.
This field contains the following subfields:
Field Description
attributes
JSON type
Each attribute is a key-value pair.
The attributes available to you
are dependent on your trace data. The structure of attributes follow the
OpenTelemetry standard. To learn more, see OpenTelemetry: Attributes .
The following are examples of resource attributes:
cloud.account.id: "my-project"
cloud.platform: "gcp_kubernetes_engine"
cloud.provider: "gcp"
cloud.region: "us-central1"
gcp.project_id: "my-project"
host.id: "REDACTED"
host.name: "gke-otel-demo"
k8s.cluster.name: "otel-demo"
k8s.deployment.name: "otel-demo-frontendproxy"
dropped_attributes_count
integer
The number of attributes that were discarded.
Attributes can discarded because their keys are too long or because there are
too many attributes. When this value is zero, no attributes were discarded.
This value might be set by the client-side instrumentation or by an
application. The value can be incremented by the server.
To learn more, see OpenTelemetry: Resources .
instrumentation_scope
record without repeated fields
This field identifies the library or application component for
the specified resource that is collecting telemetry. The
span represents a specific operation passing through that scope,
that is, through the library or component, within the resource.
For example, suppose the application "checkout-service" is deployed
to Cloud Run, which means that the resource
is a specific Cloud Run instance. Also, assume that the
resource has several instrumentation scopes, like
"request-authorization-library" and "payment-processor-library".
A client span, like "WritePaymentInfoToStripe", might be a span that
is reported by the "payment-processor-library", which is
inside the Cloud Run service named "checkout-service".
This field contains the following subfields:
Field Description
name string
version string
attributes
JSON type
Each attribute is a key-value pair.
The attributes available to you
are dependent on your trace data. The structure of attributes follow the
OpenTelemetry standard. To learn more, see OpenTelemetry: Attributes .
dropped_attributes_count
integer
The number of attributes that were discarded.
Attributes can discarded because their keys are too long or because there are
too many attributes. When this value is zero, no attributes were discarded.
This value might be set by the client-side instrumentation or by an
application. The value can be incremented by the server.
To learn more, see
OpenTelemetry: Instrumentation scope .
resource_schema_link
string
These fields must be a URL formatted as a string.
These fields contain a URL that returns a schema file for a resource.
The format of the schema file and data is defined by OpenTelemetry. For more
information, see OpenTelemetry: Schemas .
These fields can only be set when using the Telemetry API.
That API doesn't validate that the data conforms to the declared
schema.
scope_schema_link
string
These fields must be a URL formatted as a string.
These fields contain a URL that returns a schema file for a scope.
The format of the schema file and data is defined by OpenTelemetry. For more
information, see OpenTelemetry: Schemas .
These fields can only be set when using the Telemetry API.
That API doesn't validate that the data conforms to the declared
schema.
apphub
record without repeated fields
Application-specific labels are available when trace spans are
generated by App Hub
applications, when those applications run on
supported infrastructure
or have been instrumented .
To learn more about Application Monitoring and when these labels are available,
see Application Monitoring overview .
This field contains application , service ,
and workload subfields.
Application subfield Description
container string
location string
id string
Service/workload subfield Description
id string
environment_type string
criticality_type string
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
