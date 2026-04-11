---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.838Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Trace Data Access audit logs"
feature_slug: "trace-data-access-audit-logs"
latest_feature_date: "2018-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/audit-logging"
  - "https://docs.cloud.google.com/trace/docs/finding-traces"
  - "https://docs.cloud.google.com/trace/docs/iam"
keywords:
  - "trace"
  - "access"
  - "audit"
  - "logs"
  - "provides"
---

# Trace Data Access audit logs

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

Cloud Trace provides Data Access audit logs.

## Extended Definition

Cloud Trace provides Data Access audit logs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/audit-logging](https://docs.cloud.google.com/trace/docs/audit-logging)
- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- [https://docs.cloud.google.com/trace/docs/iam](https://docs.cloud.google.com/trace/docs/iam)

## Supporting Pages

### Trace audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/audit-logging](https://docs.cloud.google.com/trace/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods ADMIN READ google.devtools.cloudtrace.v2beta1.TracingConfigService.GetTraceSink google.devtools.cloudtrace.v2beta1.TracingConfigService.ListTraceSinks ADMIN WRITE google.devtools.cloudtrace.v2beta1.TracingConfigService.CreateTraceSink google.devtools.cloudtrace.v2beta1.TracingConfigService.DeleteTraceSink google.devtools.cloudtrace.v2beta1.TracingConfigService.UpdateTraceSink DATA READ google.devtools.cloudtrace.v1.TraceService.GetTrace google.devtools.cloudtrace.v1.TraceService.ListTraces API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud Trace. google.devtools.cloudtrace.v1.TraceService The following audit logs are associated with methods belonging to google.devtools.cloudtrace.v1.TraceService .
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Cloud Trace audit logs use the service name cloudtrace.googleapis.com .
- The following methods don't produce audit logs: google.devtools.cloudtrace.v1.TraceService.PatchTraces google.devtools.cloudtrace.v2.TraceService.BatchWriteSpans google.devtools.cloudtrace.v2.TraceService.CreateSpan Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Filter for this method : protoPayload.methodName="google.devtools.cloudtrace.v2beta1.TracingConfigService.GetTraceSink" ListTraceSinks Method : google.devtools.cloudtrace.v2beta1.TracingConfigService.ListTraceSinks Audit log type : Data access Permissions : cloudtrace.tracesinks.list - ADMIN READ Method is a long-running or streaming operation : No.

### Find and explore traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- That view provides read access to all trace data that the project stores.
- Explore a trace This section provides information about how you can explore a span in the context of its trace: Open and configure the Trace Explorer page.
- Logs & Events : This tab lists events and log entries whose trace id and span id fields match the selected span are shown.
- The remainder of this page provides more information about how to find and explore your trace data.

### Control access with IAM \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/iam](https://docs.cloud.google.com/trace/docs/iam)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Project cloudtrace.traces.patch telemetry.traces.write Telemetry API roles The following table lists the predefined roles for the Telemetry (OTLP) API , and it lists the permissions for those roles: Role Permissions Telemetry Admin ( roles/ telemetry.admin ) Admin role for telemetry resourcemanager.projects.get resourcemanager.projects.list telemetry. telemetry. consumers. getIamPolicy telemetry. consumers. setIamPolicy telemetry.consumers.writeLogs telemetry. consumers. writeMetrics telemetry. consumers. writeTraces telemetry.logs.write telemetry.metrics.write telemetry.traces.write Telemetry Editor ( roles/ telemetry.editor ) Editor role for telemetry resourcemanager.projects.get resourcemanager.projects.list telemetry.logs.write telemetry.metrics.write telemetry.traces.write Consumer Admin Beta ( roles/ telemetry.consumerAdmin ) Grants permission management access to consumer resources. telemetry. consumers. getIamPolicy telemetry. consumers. setIamPolicy Cloud Telemetry Logs Writer Beta ( roles/ telemetry.logsWriter ) Access to write logs. telemetry.logs.write Cloud Telemetry Metrics Writer ( roles/ telemetry.metricsWriter ) Access to write metrics. telemetry.metrics.write Integrated Service Telemetry Logs Writer Beta ( roles/ telemetry.serviceLogsWriter ) Allows an onboarded service to write log data to a destination. telemetry.consumers.writeLogs Integrated Service Telemetry Metrics Writer Beta ( roles/ telemetry.serviceMetricsWriter ) Allows an onboarded service to write metrics data to a destination. telemetry. consumers. writeMetrics Integrated Service Telemetry Writer Beta ( roles/ telemetry.serviceTelemetryWriter ) Allows an onboarded service to write all telemetry data to a destination. telemetry.consumers.writeLogs telemetry. consumers. writeMetrics telemetry. consumers. writeTraces Integrated Service Telemetry Traces Writer Beta ( roles/ telemetry.serviceTracesWriter ) Allows an onboarded service to write trace data to a destination. telemetry. consumers. writeTraces Cloud Telemetry Traces Writer ( roles/ telemetry.tracesWriter ) Access to write trace spans. telemetry.traces.write Cloud Telemetry Writer ( roles/ telemetry.writer ) Full access to write all telemetry data. telemetry.logs.write telemetry.metrics.write telemetry.traces.write Create custom roles To create a custom role that includes Cloud Trace permissions, do the following: For a role granting permissions only for the Cloud Trace API, choose the permissions required by the API method.
- Lowest-level resources where you can grant this role: Project cloudtrace. cloudtrace.insights.get cloudtrace.insights.list cloudtrace.stats.get cloudtrace.tasks.create cloudtrace.tasks.delete cloudtrace.tasks.get cloudtrace.tasks.list cloudtrace.traceScopes.create cloudtrace.traceScopes.delete cloudtrace.traceScopes.get cloudtrace.traceScopes.list cloudtrace.traceScopes.update cloudtrace.traces.get cloudtrace.traces.list cloudtrace.traces.patch observability.scopes.get observability.traceScopes. observability. traceScopes. create observability. traceScopes. delete observability.traceScopes.get observability.traceScopes.list observability. traceScopes. update resourcemanager.projects.get resourcemanager.projects.list telemetry.traces.write Cloud Trace User ( roles/ cloudtrace.user ) Provides full access to the Trace console and read access to traces.
- Cloud Trace roles The following table lists the predefined roles for Cloud Trace, and it lists the permissions for those roles: Role Permissions Cloud Trace Admin ( roles/ cloudtrace.admin ) Provides full access to the Trace console and read-write access to traces.
- Home Documentation Observability Cloud Trace Guides Send feedback Control access with IAM Stay organized with collections Save and categorize content based on your preferences.

