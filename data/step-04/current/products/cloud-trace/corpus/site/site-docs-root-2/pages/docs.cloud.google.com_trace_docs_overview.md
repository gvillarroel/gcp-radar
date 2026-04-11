---
title: "Cloud Trace overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/overview
  title: "Cloud Trace overview \_|\_ Google Cloud Documentation"
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
Cloud Trace overview
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Trace, a distributed tracing system for
Google Cloud, helps you
understand how long it takes your application to handle incoming
requests from users or other applications, and how long it takes to complete
operations like RPC calls performed when handling the requests.
Trace can also help you when you are developing a service,
developing an agentic application, or
troubleshooting a failure. For example, it can help you understand how requests
are processed in a complicated microservices architecture, and it might help
you identify which logs to examine.
Because Trace receives latency data from Google Cloud services
like App Engine , and from applications you instrument,
it can help you answer the following questions:
How long does it take my application to handle a given request?
Why is it taking my application so long to handle a request?
Why do some of my requests take longer than others?
What is the overall latency of requests to my application?
Has latency for my application increased or decreased over time?
What can I do to reduce application latency?
What are my application's dependencies?
If you're curious about how you can use Trace to help you manage
your applications, then read the blog
Troubleshooting distributed applications: Using traces and logs together for root-cause analysis .
For information about profiling your application,
see Cloud Profiler .
Environment support
Trace runs on Linux in the following environments:
Compute Engine
Google Kubernetes Engine (GKE)
Apigee (Public Preview)
App Engine flexible environment
App Engine standard environment
Cloud Run
Cloud Service Mesh
Cloud SQL query insights
Non-Google Cloud environments
Trace provides client libraries for instrumenting your
application to capture trace information. For per-language setup instructions,
see Instrument for Trace .
Configurations with automatic tracing
Some configurations result in automatic capture of trace data:
App Engine standard environment
Java 8, Python 2, and PHP 5 applications don't need to use the
Trace client libraries. These runtimes automatically send
latency data to Trace for requests to application URIs.
The requests include latency data for round-trip RPC calls to
App Engine services. Trace works with all
App Engine Admin APIs, with the exception of Cloud SQL.
Cloud Run functions and Cloud Run
For incoming and outgoing HTTP requests, latency data is automatically
sent to Trace.
APIs that ingest trace data
You can send trace data to your project by using either the
Telemetry API or the Cloud Trace API.
We recommend the Telemetry API for the following reason:
The API provides compatibility with the open source OpenTelemetry ecosystem and
its limits are often more generous than the limits of
the Cloud Trace API, which is a proprietary Google Cloud API
Your trace data is stored in a format that is generally consistent with the
proto files defined by the OpenTelemetry OTLP Protocol . Some fields might
be converted from an OpenTelemetry-specific data type to a JSON data type before
storage. To learn more about the storage format, see
Schema for trace data .
For collector-based export of trace data, your instrumentation doesn't rely
on a Google Cloud-specific exporter.
Some features, like Application Monitoring, rely on information that is available only
when you send trace data to the Telemetry API.
If you want to prevent your Google Cloud project from
storing trace data, then disable the Cloud Trace API. Disabling the Cloud Trace API
results in the following:
Google Cloud services don't send trace data to your project.
Google Cloud replies to requests sent to a Cloud Trace API endpoint with an
error code.
Google Cloud Observability discards trace data sent to the trace-specific
Telemetry API endpoint. Don't disable the Telemetry API, as that
API can receive log, metric, and trace data.
If you manage an organization and want to prevent usage of Cloud Trace, then
create an
organization policy constraint .
Cloud Trace and agentic applications
To understand the behavior of your agentic applications, configure them to
collect prompts and responses or to generate spans when they call remote
Google Cloud MCP servers . Prompts and responses help you understand the
reasoning your agentic application uses. Spans that record tool calls help you
confirm tool invocation, call statuses, and request latencies.
Several instrumentation samples show you how to configure an application to
collect prompts and responses. These samples rely on
OpenTelemetry . For more information, see
How to instrument your generative AI applications .
To learn about which remote Google Cloud MCP servers support trace generation, and to
learn how to configure your application to instruct these servers to create
spans, see Investigate MCP calls using Trace .
How to instrument your application
Instrument your application to collect specific information that helps you understand its
performance and troubleshoot failures.
Several open-source instrumentation frameworks collect log, metric, and trace
data, and can send that data to any vendor, including Google Cloud. For your
agentic applications, some frameworks can collect your prompts and responses or
pass context that allows tracing of some remote
Google Cloud MCP servers calls.
To instrument your application, we recommend that you use an
open-source, vendor-neutral instrumentation framework, such as
OpenTelemetry , instead of
vendor- and product-specific APIs or client libraries.
For information about these frameworks, see
Instrumentation and observability and
Choose an instrumentation approach .
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
To learn which remote Google Cloud MCP servers support trace generation, and to
learn how to configure your application to instruct these servers to create
spans, see Investigate MCP calls using Trace .
You can also use Cloud Trace client libraries to instrument your application.
However, we recommend that you use OpenTelemetry .
OpenTelemetry libraries are preferable to
Trace client libraries because they are simpler and
export trace data in OTLP format, which OpenTelemetry defines.
To learn more, see
Client libraries for Cloud Trace .
Components
Trace consists of a tracing client, which collects traces and
sends them to your Google Cloud project. You can then use the
Google Cloud console to view and analyze the data collected by the agent.
For information about the data model, see
Traces and spans .
Tracing client
If an OpenTelemetry library is available for your programming
language , you can simplify the process of creating and
sending trace data by using OpenTelemetry .
In addition to being simpler to use, OpenTelemetry
implements batching which might improve performance.
If an OpenTelemetry library doesn't exist, then instrument your code by
importing the Trace SDK library and by using the Cloud Trace API.
The Cloud Trace API sends trace data to your Google Cloud project.
Tracing interface
You can view and analyze your trace data
in near real-time in the Trace interface.
To view and analyze your span data, you can use the
Trace Explorer and Observability Analytics pages in the
Google Cloud console:
Trace Explorer : Displays aggregate information about
your trace data and lets you examine individual traces in detail. The
aggregated latency data is shown on a heatmap, which you can explore with
your pointer. To restrict which data is displayed, you can add filters.
This page also lets you view and explore individual spans and traces:
For information about how to view trace data stored in multiple projects,
see Create and manage trace scope .
For information about filtering and viewing your trace data, see
Find and explore traces .
Observability Analytics : This page lets you run queries that perform an aggregate
analysis of your spans by using SQL. Your SQL queries can also join
your trace and log data. You can view the
results of your query in tabular form or with charts.
If you create a linked dataset, then you can use BigQuery
to analyze your spans. For more information, see
Query and analyze traces .
VPC Service Controls support
Trace is a VPC Service Controls supported service. The
Trace service name is cloudtrace.googleapis.com . Any
VPC Service Controls restrictions that you create for the
Trace service apply only to that service. Those restrictions
don't apply to any other services, including those like the
telemetry.googleapis.com service ,
which can also ingest trace data.
For more information, see the following:
VPC Service Controls documentation .
Supported products and limitations .
Cloud Trace and data residency
If you are using Assured Workloads
because you have data-residency or
Impact Level 4 (IL4) requirements,
then don't use the Cloud Trace API to send trace spans.
If you want to prevent your Google Cloud project from
storing trace data, then disable the Cloud Trace API. Disabling the Cloud Trace API
results in the following:
Google Cloud services don't send trace data to your project.
Google Cloud replies to requests sent to a Cloud Trace API endpoint with an
error code.
Google Cloud Observability discards trace data sent to the trace-specific
Telemetry API endpoint. Don't disable the Telemetry API, as that
API can receive log, metric, and trace data.
If you manage an organization and want to prevent usage of Cloud Trace, then
create an
organization policy constraint .
Pricing
To learn about pricing for Cloud Trace, see the Google Cloud Observability pricing page.
What's next
Try the Quickstart .
For information about quotas and limits, see
Quotas and limits .
Read our resources about DevOps and explore the
DevOps Research and Assessment research program.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
