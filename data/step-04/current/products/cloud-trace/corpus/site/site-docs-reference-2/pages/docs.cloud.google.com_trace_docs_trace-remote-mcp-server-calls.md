---
title: "Investigate MCP calls using Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/trace-remote-mcp-server-calls
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/trace-remote-mcp-server-calls
  title: "Investigate MCP calls using Trace \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Guides
Send feedback
Investigate MCP calls using Trace
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Trace collects and displays data, such as tool calls, method
invocations, and prompts and responses, to help you understand the behavior of
your agentic applications. This document describes how to configure an agentic
application that calls remote Google Cloud MCP servers to enable these servers to generate
spans that record the status of the calls.
A span records a single function or operation that is part of a larger
end-to-end operation. A trace represents a single end-to-end operation and is
composed of spans. Therefore, a trace provides information about the sequence
of functions called and overall latency while a span provides status and
latency information for a specific function.
About tools
Tools let an agent gather information outside of its training data, typically
by interacting with external APIs. With Google Cloud MCP servers, your agentic applications
can call tools that invoke Google Cloud API methods. For example,
your application can call the list_log_entries
tool to fetch recent log data.
The Model Context Protocol (MCP) is a specification that
defines a standardized way for AI agents to communicate and interact with
external tools, data sources, and resources. For a complete list of products
that provide an MCP server and links to their reference documentation,
see Supported products .
How trace context is passed to a MCP server
MCP reference pages, such as the documentation for
list_log_entries , provide an example curl command
that you can use to to send HTTP requests to the tool. The JSON payload
sent in the request is similar to the following:
{
"jsonrpc": "2.0",
"method": "tools/call",
"params": {
"name": " NAME ",
"arguments": {
// provide these details according to the tool's MCP specification
}
},
"id": 1
}
The value of the name field lists the tool name, such as list_log_entries .
The arguments field contains the information required by the operation to
complete the request.
The MCP standard defines a _meta field , which lets clients and
servers attach metadata to their interactions. Clients and servers can use this
field to pass the trace context :
{
"jsonrpc": "2.0",
"method": "tools/call",
"params": {
"name": " NAME ",
"arguments": {
// provide these details according to the tool's MCP specification
}
"_meta": {
"traceparent": "00- TRACE_ID - PARENT_SPAN_ID - SAMPLED_FLAG "
"tracestate": "Vendor specific information."
}
},
"id": 1
}
The _meta data includes a traceparent field. The format of the value of this
field is defined by the World Wide Web Consortium (W3C)
traceparent header . The value includes the following:
Version of the traceparent specification ( 00 ).
ID of the trace ( TRACE_ID ).
ID of the calling span ( PARENT_SPAN_ID ).
Specifies whether the calling span sampled the request ( SAMPLED_FLAG ). This
field has a value of 01 when sampled and 00 when not sampled.
The tracestate field carries vendor-specific tracing information.
Limitations
The trace context must follow the W3C Trace Context standard,
and the sampled flag must be set to 1.
Remote Google Cloud MCP servers can generate a single span for a tools/call operation,
but it doesn't generate spans for other types of operations or child spans
for the tools/call operation.
Remote Google Cloud MCP servers only generate a span when the request is
authenticated, authorized, and passes other internal checks.
Remote Google and Google Cloud MCP servers that support tracing
The following products contain an integration that lets their remote MCP server
generate a trace span for a tools/call operation:
Product
Reference
Cloud Logging
Cloud Logging MCP reference
Cloud Monitoring
Cloud Monitoring MCP reference
Maps Grounding Lite
Maps Grounding Lite MCP reference
GKE
GKE MCP reference
Cloud Run
Cloud Run MCP reference
Compute Engine
Compute Engine MCP reference
How to configure your application
You can use any framework or SDK that passes the trace context using the
_meta field . These frameworks and SDKs include those that
support the OpenTelemetry Semantic Conventions for MCP .
For example, you can use the Agent Development Kit (ADK) framework .
To learn more, see Instrument ADK applications with OpenTelemetry .
How to view spans
To view your trace data, use Trace Explorer . This page lets you view
aggregate information about your trace data and explore individual traces and
spans. To learn more, see
Find and explore traces .
To view spans written by MCP servers, filter your trace data by the span
name. For example, some remote Google Cloud MCP servers can generate a trace span when
they receive a tools/call operation. These spans have the following naming
convention:
tools/call NAME
In the previous expression, NAME refers to the invoked endpoint.
For example, this might be something similar to list_keys . This naming
convention is defined by the OpenTelemetry Semantic Conventions for MCP .
To find these spans, use the filter bar and add an
attribute filter for mcp.method.name . Set the value of the filter to
tools/call .
Instrumentation samples
For instrumentation recommendations,
see Choose an instrumentation approach .
The instrumentation samples we provide use
OpenTelemetry :
For samples that use a collector-based export, see the following:
Go
Java
Node.js
Python
These samples send trace data to the Telemetry API.
For information about how to use a direct export of trace data and to send
that data to the Telemetry API, see
Migrate from the Trace exporter to the OTLP endpoint .
For samples that show you how to configure an agentic application to collect
prompts and responses, see
How to instrument your generative AI applications .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
