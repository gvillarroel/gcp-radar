---
title: "Trace release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/release-notes
  title: "Trace release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Resources
Send feedback
Trace release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Trace. You can
periodically check this page for announcements about new or updated features,
bug fixes, known issues, and deprecated functionality.
For a combined list of all release notes for the products in Google Cloud Observability, see Consolidated release notes .
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 10, 2026
Feature
Use Cloud Trace to troubleshoot your MCP server usage, tool failures, and
latency causes. For more information, see
Investigate MCP calls using Trace .
April 08, 2026
Feature
Google Cloud CLI lets you configure trace scopes, manage observability buckets,
and set default observability settings. These features are in Public Preview.
For more information, see the following documents:
Configure trace scopes by using the Google Cloud console, the Google Cloud CLI,
Terraform, or the Observability API. For more information, see Create and
manage trace scopes .
Manage trace storage by using the Google Cloud CLI or the Observability API.
For more information, see Manage trace storage .
Configure default settings by using the Google Cloud CLI, Terraform, or the
Observability API. For more information, see
Set defaults for observability buckets .
March 30, 2026
Change
For any new project that is created on or after March 30, 2026, if the
project enables the
Cloud Trace API,
then Google Cloud Observability also enables the
Telemetry API .
Feature
You can use the
Cloud Trace API MCP server
to let agents and AI applications interact with your trace data.
This feature is in Preview .
March 24, 2026
Feature
The Telemetry API supports trace ingestion of up to 2.4GB per minute for the
following regions:
asia-east1, asia-northeast1, asia-southeast1, and asia-south1
europe-west1, europe-west2, europe-west3, and europe-west4
us-central1, us-east4, and us-west1.
For all other regions, the Telemetry API supports trace ingestion of up to
300 MB per minute.
These regional byte-based quotas replace a global quota which limited the
number of requests per minute. To learn more, see
Telemetry API limits and quotas .
March 19, 2026
Feature
Google Cloud Observability has expanded the supported locations for observability buckets,
which store your trace data, to include the following:
africa-south1
asia-east1
asia-east2
asia-northeast2
asia-northeast3
asia-south1
asia-south2
asia-southeast2
asia-southeast3
australia-southeast2
europe-north2
europe-west1
europe-west4
europe-west6
europe-west8
me-central1
northamerica-northeast2
northamerica-south1
southamerica-west1
us-east5
us-south1
us-west2
us-west3
For a list of supported locations, see
Locations for observability buckets .
Feature
You can create alerting policies that monitor the results of your SQL
queries. For more information, see
Monitor your SQL query results with an alerting policy .
This feature is in public preview.
March 09, 2026
Change
You can send trace data to your Google Cloud project by using the Cloud Trace API or
the Telemetry API. These two APIs are enabled individually.
If you send trace data to the Telemetry API endpoint, then Google Cloud Observability
requires that the Cloud Trace API be enabled on your Google Cloud project before
it stores the trace data. If the Cloud Trace API is disabled, then Google Cloud Observability
discards the trace data.
To learn more, see
APIs that ingest trace data .
February 26, 2026
Feature
For organizations, folders, and projects, you can now configure
default settings for observability buckets. Default settings let you
specify the following for new observability buckets:
A location.
A Cloud KMS key.
This feature is in public preview. To learn more, see
Set defaults for observability buckets .
Feature
You can now configure observability buckets to be in the following
locations :
us
eu
us-central1
us-west1
Your trace data is stored in an observability bucket. To learn more, see
Trace storage overview .
February 17, 2026
Deprecated
Starting February 18, 2026,
trace sinks are deprecated.
For more information, see
Export trace spans with sinks deprecation .
You can use the Observability Analytics page, which provides a SQL query
interface, to query both your trace and log data. To learn more, see the
following documents:
To migrate to using Observability Analytics page from a sink-based
export of trace data to BigQuery, see
Migrate to Observability Analytics .
To query your trace data by using the Observability Analytics page, see
Query and analyze traces .
To query your trace data by using BigQuery services, see
Query a linked BigQuery dataset .
February 02, 2026
Feature
You can now analyze your trace data by using the Log Analytics
page in the Google Cloud console. This page supports SQL queries and lets you view
your query results as a table or as a chart. Your SQL queries can also join your
trace and log data. This feature is in Public Preview.
To learn more about analyzing and viewing trace data,
see the following documents:
Query and analyze traces
Find and explore traces by using the Trace Explorer
Feature
Cloud Trace now stores your trace data in an observability dataset. You can
continue to view your trace data by using the Trace Explorer page.
If you create a link on your dataset, then you can use services like
BigQuery to query and analyze your trace data.
To learn more, see the following documents:
Trace storage overview
Manage trace storage
Query a linked BigQuery dataset
January 26, 2026
Change
To support correlation between log and trace data, the following changes have
been made:
The required format for the LogEntry.trace field has been relaxed. The
preferred format for this field is the trace ID. However, you can continue
to provide the full resource name. For more information, see
LogEntry .
If you open the Trace Details flyout page by using options provided in a
log entry, then the resources listed in the default trace scope are searched
for the trace data.
If you open the Logs Explorer page by using options on span data, then
the resources listed in the default log scope are searched for log data.
To learn more about default scopes, see
Configure observability scopes for multi-project queries .
January 05, 2026
Feature
You can now collect, view, and analyze multimodal prompts and responses from
your agentic applications that use the LangGraph or Agent Development Kit (ADK)
frameworks. This feature is in Public Preview .
To learn more, see the following documents:
Collect and view multimodal prompts and responses
Instrument generative AI applications
December 15, 2025
Feature
The Trace Explorer has been updated to include annotations that let you
identify App Hub-registered services and workloads. The link provided
with a service or workload lets you open the corresponding
Application Monitoring dashboard. To learn more, see the following documents:
Find and explore traces describes how to
use the Trace Explorer page to filter and explore your trace data.
Application Monitoring overview .
View application telemetry
describes how to view the telemetry for a registered application.
November 06, 2025
Feature
You can now collect, view, and analyze prompts and responses from your agentic
applications when they are built with the Agent Development Kit (ADK).
This feature is in Public Preview.
Collect and view multimodal prompts and responses
describes how to do the following:
Configure your project and ADK to collect multimodal data.
View a conversation and the multimodal data by using the Trace Explorer.
Find log entries that contain references to multimodal data.
Query your prompts and responses by using BigQuery.
Evaluate your prompts and responses by using the Vertex AI SDK for Python.
August 27, 2025
Feature
You can now create and manage the trace scope programmatically. This feature
is in Public Preview. For more information, see the following documents:
Create and manage trace scopes
Trace scopes API overview
July 17, 2025
Feature
Application-specific resource attributes are attached to your trace data when
your App Hub applications use supported Google Cloud resources,
or when you instrument an application with OpenTelemetry and use the
Google Cloud Telemetry endpoint. You can use the Trace Explorer to filter
by your application, your service, or your workload. To learn more, see the
following:
Find and explore traces
Application Monitoring overview
View application telemetry
Telemetry (OTLP) API overview
June 13, 2025
Change
The Analysis reports page has been removed.
To analyze your trace data, use the Trace explorer page.
You can use filters and the time-range selector to view
and analyze historical data.
May 27, 2025
Feature
Learn how to instrument your generative AI applications by using OpenTelemetry
and the LangGraph framework to collect information about the actions taken by
your AI agent. You can view generative AI events by using the
Trace Explorer :
Instrument generative AI applications
Instrument a LangGraph ReAct Agent with OpenTelemetry
View generative AI events
March 25, 2025
Feature
To send trace data to your Google Cloud project, we recommend that you use the new Telemetry API, which implements the OpenTelemetry OTLP API and provides compatibility and support for the open source ecosystem. The limits for the Telemetry API are often more generous than those for the proprietary Cloud Trace API, which you can continue to use. The Telemetry API supports VPC Service Controls. For more information about the Telemetry API, see the following documents:
Telemetry API overview
Migrate from the Trace exporter to the OTLP endpoint
Quotas and limits
January 24, 2025
Feature
Introducing trace scopes. Trace scopes are persistent, project-level resources that the Trace Explorer page uses to determine which projects to search for trace data. You can create, edit, and delete trace scopes. You can also set one trace scope as the default trace scope, which determines the projects that the Trace Explorer searches when the page is opened.
For more information, see the following documents:
Observability scopes overview
Create and manage trace scopes .
View traces across projects
Change
The Trace Explorer page in the Google Cloud console has been refreshed. The new page aggregates and displays information about spans using visualizations like heatmaps. You can use menus to apply filters and to group traces by span and service name. You can also explore individual traces and share traces. For more information, see the following documents:
Find and explore traces
View traces across projects
Share trace or span
May 28, 2024
Feature
You can now search a trace for keywords. For more information, see
Search a trace .
Feature
Announcing new Open Telemetry samples that show how to instrument your Python and Node.js applications to collect metrics, logs, and traces:
Python example
Node.js example
For general instrumentation information and recommendations, and for links to other samples, see:
Instrumentation and observability overview
Choose an instrumentation approach
February 20, 2024
Change
For information and recommendations about how to instrument your applications to collect metrics, logs, and traces, see the following documents:
Instrumentation and observability overview
Choose an instrumentation approach
Go instrumentation example
Java instrumentation example
January 16, 2024
Change
Announcing a common navigation pane in the Google Cloud console for Logging, Monitoring, Trace, and Error Reporting. When you are troubleshooting an issue, the new navigation pane simplifies accessing the pages you need to explore different types of telemetry:
The Explore section list the pages to view and analyze telemetry data.
The Detect section lists the pages you use to ensure that you are notified when errors occur.
The Configure section lists configuration and management pages.
You can continue to use the search bar to locate pages in the Google Cloud console and to find documentation.
October 05, 2023
Change
You can now show logs and events as inline messages when exploring a trace. For more information, see Find and explore traces .
August 14, 2023
Change
Version 2.37.0 of the Ops Agent introduces GA support for an OpenTelemetry Protocol (OTLP) receiver. You can use this receiver to collect custom traces and metrics from applications written by using OpenTelemetry SDKs. For more information, see Use the Ops Agent and OpenTelemetry Protocol (OTLP) .
July 21, 2023
Change
When viewing a span, you can now also view the linked spans. For more information, see
View span details .
June 12, 2023
Change
The Trace list page has been replaced with the Trace explorer page, which contains a more responsive and interactive Trace details section. The new design delivers an improved user experience when traversing spans and when viewing span details. For more information, see Find and explore traces .
May 15, 2023
Feature
Version 2.31.0 of the Ops Agent introduces preview support for an OpenTelemetry Protocol (OTLP) receiver. You can use this receiver to collect custom traces and metrics from applications written by using OpenTelemetry SDKs. For more information, see Collect OTLP traces .
November 08, 2022
Change
The Trace scatterplot now indicates traces with error codes as red. For more information, see Finding and viewing traces .
October 24, 2022
Feature
You can now instrument gRPC applications to use Microservices observability .
Pricing for Microservices observability is the same as Cloud Operations Pricing . There are no separate charges for using Cloud Trace, Cloud Monitoring, or Cloud Logging Microservices observability plugins.
July 09, 2021
Feature
Cloud Trace announces that the OpenTelemetry library for Java is now generally available. For information about configuring your Java application to use Open Telemetry, see Java and OpenTelemetry .
April 19, 2021
Feature
Cloud Trace announces that the OpenTelemetry library for Python is now generally available. For information about configuring your Python application to use Open Telemetry, see Python and OpenTelemetry .
August 28, 2020
Feature
Cloud Trace exemplars can now be viewing in Cloud Monitoring. For more information about Trace exemplars, see Cloud Trace exemplars . For more information about viewing exemplars, see Exploring charted data .
August 17, 2020
Feature
The Cloud Trace viewer now supports search by the trace ID. For more information, see Viewing Trace Details .
March 30, 2020
Feature
You can now use OpenTelemetry with Go and Node.js to instrument your applications running on GKE and Compute Engine.
February 20, 2020
Change
Integration of Cloud Trace with Virtual Private Cloud Service Controls is now generally available. For more information, see VPC Service Controls documentation .
February 19, 2020
Feature
Beta release : Export of Stackdriver Trace data to BigQuery. For more information, see Managing Trace exports .
February 06, 2020
Change
The Stackdriver Trace API v2 is now Generally Available.
December 16, 2019
Feature
Integration of Stackdriver Trace with Virtual Private Cloud Service Controls is now beta. For more information, see VPC Service Controls documentation .
November 20, 2019
Feature
The Trace list page has a new menu-driven filtering solution that is in Beta release testing. For more information,
see Finding and viewing traces .
December 18, 2018
Change
Trace list now limits HTTP method and
HTTP status matches to trace root spans. See
Filter traces for more details.
Feature
You can now filter traces for analysis reports by
the full URI, by the URI prefix, or by using trace filter. See
Create a new analysis report
for details.
October 31, 2018
Change
Stackdriver Trace enforces consumption-based pricing as of November 1, 2018 at
00:00 PDT. For more information, see
Stackdriver Pricing .
Change
On November 1, 2018, Stackdriver Trace begins enforcing a daily trace spans
ingestion quota. See Stackdriver Trace Quotas & Limits for
details.
September 05, 2018
Feature
Billing enforcement for Trace has been postponed to November 1, 2018, rather
than the previously announced date of September 30, 2018. You can
now estimate your bill for your usage of Trace, according to the new pricing and
in advance of billing enforcement. See
Estimating your bills for details.
April 04, 2018
Feature
The Trace Viewer now allows you to view trace spans for related Google Cloud
Platform projects in one view. See
Viewing traces across projects for details.
March 28, 2018
Feature
Stackdriver Trace Data Access audit logs are now Generally Available. See
Stackdriver Trace Audit Logging for details.
March 12, 2018
Change
Beginning on June 30, 2018, Stackdriver is switching to consumption-based
pricing, including revised quotas. For more
information, see Stackdriver Upcoming Pricing .
February 27, 2018
Feature
The Trace Viewer now associates logs entries with trace spans when the
LogEntry span_id field is specified. See
Integrating with Cloud Logging
for details.
Fixed
The Trace Viewer now follows your scroll through the span details page, making
it easier to see span details of large traces.
January 12, 2018
Feature
The Trace viewer now shows sub-millisecond resolution for Trace spans.
January 09, 2018
Feature
The Trace viewer now displays span annotations and message events written with
the Stackdriver Trace API v2 . See Viewing Trace Details for more
information.
October 31, 2017
Feature
The Stackdriver Trace API v2
is now in Beta release.
For a comparison of the v1 and v2 APIs, see Stackdriver Trace API .
October 02, 2017
Feature
The Trace viewer now shows parent-child relationships between trace spans.
You can expand or collapse the parent spans. See Viewing Trace Details for
more information.
August 01, 2017
Feature
The Trace Viewer now allows you to view associated log entries in line with
trace spans and links to VM logs for Google Cloud Load Balancer spans. See the
Integrating with Cloud Logging .
June 05, 2017
Feature
Advanced trace filters :
The Trace List page and Trace API now allow filtering traces by custom
labels, latencies, child spans, and methods in addition to URIs.
See Trace Filters .
February 06, 2017
Feature
Zipkin tracer compatibility : Stackdriver Trace is now compatible with Zipkin tracers. For more
information, see this blog post .
Feature
Scatter plots : We've added a new scatter-plot selection tool to the Stackdriver Trace UI. This lets you more quickly identify, view, and compare interesting traces.
October 20, 2016
Feature
Analysis Reports : Compare your application's latency profile across time and versions.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
