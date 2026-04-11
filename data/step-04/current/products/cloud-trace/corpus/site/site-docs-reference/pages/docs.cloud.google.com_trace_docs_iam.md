---
title: "Control access with IAM \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/iam
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/iam
  title: "Control access with IAM \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
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
Control access with IAM
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud offers
Identity and Access Management (IAM) , which lets
you give granular access to specific Google Cloud resources
and prevents unwanted access to other resources. This page describes the
IAM roles for Cloud Trace.
To learn how to assign IAM roles to a user or service account,
read Manage access to projects, folders, and organizations .
For more information about predefined roles, see
IAM: Roles and permissions .
For help choosing the most appropriate predefined roles,
see Choose predefined roles .
Best practice
To facilitate troubleshooting, we recommend that all people, groups and domains
that might need to view trace data in a project be granted the
Cloud Trace User role ( roles/cloudtrace.user ) on that
project. This role gives principals the permissions they need to view
trace data.
Permissions and predefined roles
IAM roles include permissions and can be assigned to users,
groups, and service accounts.
Cloud Trace roles
The following table lists the predefined roles
for Cloud Trace, and it lists the permissions for those roles:
Role
Permissions
Cloud Trace Admin
( roles/ cloudtrace.admin )
Provides full access to the Trace console and read-write access to traces.
Lowest-level resources where you can grant this role:
Project
cloudtrace.*
cloudtrace.insights.get
cloudtrace.insights.list
cloudtrace.stats.get
cloudtrace.tasks.create
cloudtrace.tasks.delete
cloudtrace.tasks.get
cloudtrace.tasks.list
cloudtrace.traceScopes.create
cloudtrace.traceScopes.delete
cloudtrace.traceScopes.get
cloudtrace.traceScopes.list
cloudtrace.traceScopes.update
cloudtrace.traces.get
cloudtrace.traces.list
cloudtrace.traces.patch
observability.scopes.get
observability.traceScopes.*
observability. traceScopes. create
observability. traceScopes. delete
observability.traceScopes.get
observability.traceScopes.list
observability. traceScopes. update
resourcemanager.projects.get
resourcemanager.projects.list
telemetry.traces.write
Cloud Trace User
( roles/ cloudtrace.user )
Provides full access to the Trace console and read access to traces.
Lowest-level resources where you can grant this role:
Project
cloudtrace.insights.*
cloudtrace.insights.get
cloudtrace.insights.list
cloudtrace.stats.get
cloudtrace.tasks.*
cloudtrace.tasks.create
cloudtrace.tasks.delete
cloudtrace.tasks.get
cloudtrace.tasks.list
cloudtrace.traceScopes.*
cloudtrace.traceScopes.create
cloudtrace.traceScopes.delete
cloudtrace.traceScopes.get
cloudtrace.traceScopes.list
cloudtrace.traceScopes.update
cloudtrace.traces.get
cloudtrace.traces.list
observability.scopes.get
observability.traceScopes.*
observability. traceScopes. create
observability. traceScopes. delete
observability.traceScopes.get
observability.traceScopes.list
observability. traceScopes. update
resourcemanager.projects.get
resourcemanager.projects.list
Cloud Trace Agent
( roles/ cloudtrace.agent )
For service accounts. Provides ability to write traces by sending the data
to Stackdriver Trace.
Lowest-level resources where you can grant this role:
Project
cloudtrace.traces.patch
telemetry.traces.write
Telemetry API roles
The following table lists the predefined roles for the
Telemetry (OTLP) API ,
and it lists the permissions for those roles:
Role
Permissions
Telemetry Admin
( roles/ telemetry.admin )
Admin role for telemetry
resourcemanager.projects.get
resourcemanager.projects.list
telemetry.*
telemetry. consumers. getIamPolicy
telemetry. consumers. setIamPolicy
telemetry.consumers.writeLogs
telemetry. consumers. writeMetrics
telemetry. consumers. writeTraces
telemetry.logs.write
telemetry.metrics.write
telemetry.traces.write
Telemetry Editor
( roles/ telemetry.editor )
Editor role for telemetry
resourcemanager.projects.get
resourcemanager.projects.list
telemetry.logs.write
telemetry.metrics.write
telemetry.traces.write
Consumer Admin
Beta
( roles/ telemetry.consumerAdmin )
Grants permission management access to consumer resources.
telemetry. consumers. getIamPolicy
telemetry. consumers. setIamPolicy
Cloud Telemetry Logs Writer
Beta
( roles/ telemetry.logsWriter )
Access to write logs.
telemetry.logs.write
Cloud Telemetry Metrics Writer
( roles/ telemetry.metricsWriter )
Access to write metrics.
telemetry.metrics.write
Integrated Service Telemetry Logs Writer
Beta
( roles/ telemetry.serviceLogsWriter )
Allows an onboarded service to write log data to a destination.
telemetry.consumers.writeLogs
Integrated Service Telemetry Metrics Writer
Beta
( roles/ telemetry.serviceMetricsWriter )
Allows an onboarded service to write metrics data to a destination.
telemetry. consumers. writeMetrics
Integrated Service Telemetry Writer
Beta
( roles/ telemetry.serviceTelemetryWriter )
Allows an onboarded service to write all telemetry data to a destination.
telemetry.consumers.writeLogs
telemetry. consumers. writeMetrics
telemetry. consumers. writeTraces
Integrated Service Telemetry Traces Writer
Beta
( roles/ telemetry.serviceTracesWriter )
Allows an onboarded service to write trace data to a destination.
telemetry. consumers. writeTraces
Cloud Telemetry Traces Writer
( roles/ telemetry.tracesWriter )
Access to write trace spans.
telemetry.traces.write
Cloud Telemetry Writer
( roles/ telemetry.writer )
Full access to write all telemetry data.
telemetry.logs.write
telemetry.metrics.write
telemetry.traces.write
Create custom roles
To create a custom role that includes Cloud Trace permissions, do the
following:
For a role granting permissions only for the Cloud Trace API, choose
the permissions required by the API method.
For a role granting permissions for the Cloud Trace API and console,
choose permission groups from one of the predefined Cloud Trace roles.
To grant the ability to write trace data, include the permission(s) in
the role Cloud Trace Agent ( roles/cloudtrace.agent ).
For more information on custom roles, go to
Create and manage custom roles .
Permissions for API methods
For information about the permissions required to execute an API call,
see the Cloud Trace API reference documentation:
REST v1 documentation
REST v2 documentation
RPC documentation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
