---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:48.999Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Trace scopes"
feature_slug: "trace-scopes"
latest_feature_date: "2025-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/cross-project-traces"
  - "https://docs.cloud.google.com/trace/docs/share-trace-or-span"
  - "https://docs.cloud.google.com/trace/docs/troubleshooting"
  - "https://docs.cloud.google.com/trace/docs/finding-traces"
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
Coverage: MEDIUM

## Step 02 Summary

Trace scopes are persistent project-level resources that define which projects Trace Explorer searches and can be set as default.

## Extended Definition

Trace scopes are persistent project-level resources that define which projects Trace Explorer searches and can be set as default.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/cross-project-traces](https://docs.cloud.google.com/trace/docs/cross-project-traces)
- [https://docs.cloud.google.com/trace/docs/share-trace-or-span](https://docs.cloud.google.com/trace/docs/share-trace-or-span)
- [https://docs.cloud.google.com/trace/docs/troubleshooting](https://docs.cloud.google.com/trace/docs/troubleshooting)
- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)

## Supporting Pages

### View traces across projects \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/cross-project-traces](https://docs.cloud.google.com/trace/docs/cross-project-traces)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To view trace spans that are stored in multiple projects, as might occur when an application in one project makes a call into an application that another project hosts, do the following: Create a trace scope that lists the default trace view for each project that stores spans for your trace.
- If you don't configure the observability scope to list the resources that store your data, then you might not be able to correlate your trace and log data.
- This view provides read access to all trace data that the project stores.
- A project's default trace view corresponds to the view with the path Trace/Spans/ AllSpans , where the fields Trace , Spans , and AllSpans refer to an observability bucket, dataset, and view.

### Share traces and spans \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/share-trace-or-span](https://docs.cloud.google.com/trace/docs/share-trace-or-span)
- Source ID: `site-docs-root-2`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Find and explore traces Create and manage trace scopes View traces across projects Troubleshoot Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you begin To get the permissions that you need to view trace data by using the Google Cloud console, ask your administrator to grant you the Cloud Trace User ( roles/cloudtrace.user ) IAM role on the projects that store your trace data.
- Best practice To facilitate troubleshooting, we recommend that all people, groups and domains that might need to view trace data in a project be granted the Cloud Trace User role ( roles/cloudtrace.user ) on that project.
- If you want to share the URL for a trace or span, then open the Details flyout for that trace or span by doing one of the following: In the toolbar, click pageview Search for trace and then enter the trace ID.

### Troubleshoot \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/troubleshooting](https://docs.cloud.google.com/trace/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify that trace spans are sent to your project To verify that spans are being sent to your project, do the following: Enable the Cloud Trace and Telemetry APIs.
- Verify that your application has the required permissions to write trace spans To determine whether your application has permission to write trace data to your project, do the following: Go to the Enabled APIs and Services page, find the rows for the Cloud Trace API and Telemetry API, and examine the Errors column.
- To identify the type of error, select the API, select the Metrics tab, and view the Errors by API method : If writes are failing, then grant the service account that is providing credentials the following roles: Cloud Trace API: Cloud Trace Agent Role ( roles/cloudtrace.agent ) .
- You don't have the required permissions to view trace data You are viewing the Trace Explorer page and see the following notification: You don't have the required permissions to view trace data for one or more projects listed in the trace scope.

### Find and explore traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view trace data by using the Google Cloud console and to or select a trace scope: To select a trace scope: cloudtrace.traceScopes.[get, list] To read the default trace scope: observability.scopes.get You might also be able to get these permissions with custom roles or other predefined roles .
- The following screenshot illustrates how the Trace Explorer page renders text-based generative AI events that are attached to the spans: To learn about the sample application that generated the previous screenshot, see Instrument a LangGraph ReAct Agent with OpenTelemetry .
- What's next Create and manage trace scopes Share traces and spans Troubleshoot Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you begin To get the permissions that you need to view trace data by using the Google Cloud console and to or select a trace scope, ask your administrator to grant you the Cloud Trace User ( roles/cloudtrace.user ) IAM role on your project.

