---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.830Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Trace scopes"
feature_slug: "trace-scopes"
latest_feature_date: "2025-01-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/cross-project-traces"
  - "https://docs.cloud.google.com/trace/docs/release-notes"
  - "https://docs.cloud.google.com/trace/docs/share-trace-or-span"
keywords:
  - "trace"
  - "scopes"
  - "are"
  - "persistent"
  - "project"
  - "level"
  - "resources"
  - "that"
---

# Trace scopes

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

Trace scopes are persistent project-level resources that define which projects Trace Explorer searches and can be set as default.

## Extended Definition

Trace scopes are persistent project-level resources that define which projects Trace Explorer searches and can be set as default.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/cross-project-traces](https://docs.cloud.google.com/trace/docs/cross-project-traces)
- [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)
- [https://docs.cloud.google.com/trace/docs/share-trace-or-span](https://docs.cloud.google.com/trace/docs/share-trace-or-span)

## Supporting Pages

### View traces across projects \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/cross-project-traces](https://docs.cloud.google.com/trace/docs/cross-project-traces)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To view trace spans that are stored in multiple projects, as might occur when an application in one project makes a call into an application that another project hosts, do the following: Create a trace scope that lists the default trace view for each project that stores spans for your trace.
- If you don't configure the observability scope to list the resources that store your data, then you might not be able to correlate your trace and log data.
- This view provides read access to all trace data that the project stores.
- A project's default trace view corresponds to the view with the path Trace/Spans/ AllSpans , where the fields Trace , Spans , and AllSpans refer to an observability bucket, dataset, and view.

### Trace release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Trace scopes are persistent, project-level resources that the Trace Explorer page uses to determine which projects to search for trace data.
- For more information, see the following documents: Create and manage trace scopes Trace scopes API overview July 17, 2025 Feature Application-specific resource attributes are attached to your trace data when your App Hub applications use supported Google Cloud resources, or when you instrument an application with OpenTelemetry and use the Google Cloud Telemetry endpoint.
- You can view generative AI events by using the Trace Explorer : Instrument generative AI applications Instrument a LangGraph ReAct Agent with OpenTelemetry View generative AI events March 25, 2025 Feature To send trace data to your Google Cloud project, we recommend that you use the new Telemetry API, which implements the OpenTelemetry OTLP API and provides compatibility and support for the open source ecosystem.
- March 30, 2026 Change For any new project that is created on or after March 30, 2026, if the project enables the Cloud Trace API, then Google Cloud Observability also enables the Telemetry API .

### Share traces and spans \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/share-trace-or-span](https://docs.cloud.google.com/trace/docs/share-trace-or-span)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Find and explore traces Create and manage trace scopes View traces across projects Troubleshoot Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you begin To get the permissions that you need to view trace data by using the Google Cloud console, ask your administrator to grant you the Cloud Trace User ( roles/cloudtrace.user ) IAM role on the projects that store your trace data.
- Best practice To facilitate troubleshooting, we recommend that all people, groups and domains that might need to view trace data in a project be granted the Cloud Trace User role ( roles/cloudtrace.user ) on that project.
- If you want to share the URL for a trace or span, then open the Details flyout for that trace or span by doing one of the following: In the toolbar, click pageview Search for trace and then enter the trace ID.

