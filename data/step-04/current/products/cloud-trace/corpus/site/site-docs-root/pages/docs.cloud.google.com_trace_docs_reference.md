---
title: "Cloud Trace API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/reference
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/reference
  title: "Cloud Trace API \_|\_ Google Cloud Documentation"
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
Cloud Trace API
Stay organized with collections
Save and categorize content based on your preferences.
The Cloud Trace API lets you send latency data to, and retrieve latency data from,
Cloud Trace .
To send data to Cloud Trace, we recommend that you use
OpenTelemetry .
OpenTelemetry is a Google-supported open source project with Google
engineers staffed to ensure support for Cloud Trace.
For more information about instrumenting an application,
including instrumentation examples, see
Instrumentation and observability .
To retrieve data from Cloud Trace, we recommend that you use the
Cloud Trace API. By using the API, you have access to the exact data
stored by Cloud Trace.
You can use the Cloud Trace API from applications you run locally or on any of
the following environments:
Compute Engine
Google Kubernetes Engine (GKE)
Apigee (Public Preview)
App Engine flexible environment
App Engine standard environment
Cloud Run
Cloud Service Mesh
Cloud SQL query insights
Non-Google Cloud environments
Data sent to Cloud Trace
using this API is available for display, reporting, and analysis in the
Google Cloud console .
Versions and interfaces
There are two supported versions of the API:
Cloud Trace API v1 lets you send and retrieve latency data
by using HTTP or by using RPC. For more information,
see v1 REST and v1 RPC .
Cloud Trace API v2 lets you send latency data by using HTTP
or by using gRPC . For more information,
see v2 REST and v2 RPC .
For more details on how to automatically collect traces from an application,
see the Client libraries documentation.
Data model
For information about the data model, see
Traces and spans .
Generating trace_id and span_id
The client libraries for Trace automatically generate the
trace_id and the span_id . If you don't use the Trace client
libraries or the OpenTelemetry client libraries, then you must generate the
values for these fields. In this case,
you should use a pseudo-random or random algorithm. Don't derive these fields
from need-to-know data or from personally identifiable information.
Operations
You can do the following with the Cloud Trace API:
Send traces to Cloud Trace
Update existing traces (v1 only)
Get lists of traces (v1 only)
Get the details of a single trace (v1 only)
The v2 API only supports sending trace data. There are no methods to
retrieve the data.
Send spans
Note: Cloud Trace quotas restrict the number of write operations performed.
When you are developing or testing code, the v2 REST API method
createSpan can be useful. However,
in production code, to make best use of your quota, use the
batchWrite method.
In the v2 API, you send trace data to Cloud Trace by using the REST method
batchWrite or the RPC method
batchWriteSpans .
In the v1 API, you construct a Trace object and
then pass that to either a REST or gRPC method. The Trace object
contains a collection spans. For the REST API, use the method
patchTraces . For the RPC API, use the method
PatchTraces .
Get a list of traces
To get a list of stored traces, send a
request to the REST list
or RPC ListTraces methods.
You can pass a filter condition to these requests to retrieve only
those traces that were sent between a specific start and end time. The list
and ListTraces methods return a set of trace entities.
Get trace details
To get the details of particular trace, do the following:
Find the ID of the trace. One way that you can find this information
is by running the list command.
Send a request to the REST get or RPC
GetTrace
methods. The request specifies the trace by its ID. These methods return a
single trace entity.
Authorization
To use the Cloud Trace API, you or the service account must have
authorization to do so. Identity and Access Management
defines permissions and roles you can use for authorization. For more
information, see Cloud Trace access control .
When running on Google Cloud, authorization is normally provided by
default. When running outside of Google Cloud, you obtain authorization
by creating a service account and then copy its private key credentials
to the computer with the application using the Cloud Trace API.
For more information, see
Setting up authentication .
Explore the API
You can use the in-page Try It! feature in the REST interface documentation
to explore the API functionality. Using Try It! helps you understand how
to assemble
the data that you pass to the API and the structure and content of the
data it returns. See the documentation of the
v1 API list method for an example.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
