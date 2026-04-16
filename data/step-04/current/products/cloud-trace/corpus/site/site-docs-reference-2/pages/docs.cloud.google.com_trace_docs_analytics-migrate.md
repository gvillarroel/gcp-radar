---
title: "Migrate to Observability Analytics \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/analytics-migrate
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/analytics-migrate
  title: "Migrate to Observability Analytics \_|\_ Cloud Trace \_|\_ Google Cloud\
    \ Documentation"
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
Migrate to Observability Analytics
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
If you are using sinks to export trace data to BigQuery , then
this document applies to you. The usage of sinks to export trace data is no
longer recommended. Instead, we recommend that you use Observability Analytics, which
supports the same SQL query language as BigQuery.
This document describes how to migrate from a sink-based solution to one that
uses Observability Analytics. It also includes information about how to query your
trace data by using BigQuery services.
BigQuery provides services that let you copy tables or export data. You
can copy and export your trace data using these services after creating a linked
BigQuery dataset, an optional step detailed in this document.
For more information, see Manage tables and
Introduction to data export .
To get started with Observability Analytics, see
Query and analyze traces .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Observability API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Observability API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
To get the permissions that
you need to load the Observability Analytics page, run queries, and create
a linked dataset,
ask your administrator to grant you the
following IAM roles on your project:
Cloud Trace Admin ( roles/cloudtrace.admin )
Observability Editor ( roles/observability.editor )
BigQuery User ( roles/bigquery.user )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Migrate to Observability Analytics
Completed the actions listed in the Before you begin
section of this document. Those actions include enabling the
Observability API.
Verify that you have access to your trace data by using Observability Analytics:
In the Google Cloud console, go to the
manage_search Log Analytics page:
Go to Log Analytics
If you use the search bar to find this page, then select the result whose subheading is
Logging .
In the Views menu, go to the Traces section,
and then select _Trace.Spans._AllSpans .
The Schema pane is updated and displays the schema.
If you don't see a view named _Trace.Spans._AllSpans , then your
Google Cloud project doesn't contain a observability bucket
named _Trace . For information about how to resolve this situation,
see Trace storage initialization fails .
In the Schema pane, select Query .
The query editor field is updated. The FROM clause lists an
entry similar to the following:
` PROJECT_ID .us._Trace.Spans._AllSpans`
In the toolbar, select Run Query .
If the toolbar displays Run in BigQuery , then click
settings Settings , and select
Analytics (default) .
You have verified that you can query your trace data by
using the Observability Analytics page.
Optional: If you want to join your trace data with other business data that
is available to BigQuery, then create a linked
BigQuery dataset. For more information, see
Query a linked BigQuery dataset .
Delete trace sinks and unnecessary datasets:
To list existing trace sinks, execute the
gcloud alpha trace sinks list command:
gcloud alpha trace sinks list
For each sink, execute the
gcloud alpha trace sinks delete command:
gcloud alpha trace sinks delete SINK_NAME
Optional: Delete any unnecessary BigQuery datasets.
For information about how to delete a BigQuery dataset,
see Delete datasets .
Schema comparison
This section provides information about the differences between
Observability Analytics and sink-based export schemas.
Name
Analytics
Legacy
Trace ID
trace_id
extendedFields.traceId
Span ID
span_id
span.spanId
Parent span ID
parent_span_id
span.parentSpanId
Span name
name
span.displayName.value
Span kind
kind
For values, see
OpenTelemetry: SpanKind .
span.spanKind
For values, see the Cloud Trace API reference
SpanKind page.
Span start time
start_time
span.startTime
Span end time
end_time
span.endTime
Attributes
Span, resource, and instrumentation attributes each have a unique format. These fields
have the BigQuery JSON data type .
Examples:
attributes["somekey"]
resource.attributes["somekey"]
instrumentation_scope.attributes["somekey"]
All attributes use the same format:
span.attributes.attributeMap.ATTRIBUTE_KEY
Examples:
span.attributes.attributeMap._http_method
span.attributes.attributeMap.g_co_agent
span.attributes.attributeMap.rpc_service
span.attributes.attributeMap.rpc_method
What's next
Query and analyze traces .
Sample queries .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
