---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.837Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Cross-project trace viewing"
feature_slug: "cross-project-trace-viewing"
latest_feature_date: "2018-04-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/release-notes"
  - "https://docs.cloud.google.com/trace/docs/cross-project-traces"
  - "https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses"
keywords:
  - "cross"
  - "project"
  - "trace"
  - "viewing"
  - "viewer"
  - "can"
  - "display"
  - "spans"
---

# Cross-project trace viewing

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

Trace Viewer can display trace spans from related Google Cloud projects in a single view.

## Extended Definition

Trace Viewer can display trace spans from related Google Cloud projects in a single view.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)
- [https://docs.cloud.google.com/trace/docs/cross-project-traces](https://docs.cloud.google.com/trace/docs/cross-project-traces)
- [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)

## Supporting Pages

### Trace release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see the following documents: Find and explore traces View traces across projects Share trace or span May 28, 2024 Feature You can now search a trace for keywords.
- April 04, 2018 Feature The Trace Viewer now allows you to view trace spans for related Google Cloud Platform projects in one view.
- See Viewing traces across projects for details.
- You can view generative AI events by using the Trace Explorer : Instrument generative AI applications Instrument a LangGraph ReAct Agent with OpenTelemetry View generative AI events March 25, 2025 Feature To send trace data to your Google Cloud project, we recommend that you use the new Telemetry API, which implements the OpenTelemetry OTLP API and provides compatibility and support for the open source ecosystem.

### View traces across projects \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/cross-project-traces](https://docs.cloud.google.com/trace/docs/cross-project-traces)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To view trace spans that are stored in multiple projects, as might occur when an application in one project makes a call into an application that another project hosts, do the following: Create a trace scope that lists the default trace view for each project that stores spans for your trace.
- A project's default trace view corresponds to the view with the path Trace/Spans/ AllSpans , where the fields Trace , Spans , and AllSpans refer to an observability bucket, dataset, and view.
- Home Documentation Observability Cloud Trace Guides Send feedback View traces across projects Stay organized with collections Save and categorize content based on your preferences.
- If the default trace scope scope isn't accessible, then the page searches the project's AllSpans view on the default dataset.

### "Collect and view multimodal prompts and responses \_|\_ Cloud Trace \_|\_\

- URL: [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- EXT TABLE NAME ON messages ref uri = FILE NAME > RENAME index AS message idx -- Flatten. > CROSS JOIN UNNEST ( parts ) AS part WITH OFFSET AS part idx -- Print fields. > SELECT insert id , labels , timestamp , trace , span id , role , part . content , part . uri , part . mime type , TO HEX ( MD5 ( part . data )) AS data md5 hex , part . id AS tool id , part . name AS tool name , part . arguments AS tool args , part . response AS tool response , message idx , part idx , > ORDER BY timestamp , message idx , part idx ; > LIMIT 10 ; Replace the following before you run the query: PROJECT ID : The identifier of the project.
- Enable the APIs To get the permissions that you need to configure the system so that you can view your multimodal prompts and responses in BigQuery, ask your administrator to grant you the following IAM roles on project: Logs Configuration Writer ( roles/logging.configWriter ) Storage Admin ( roles/storage.admin ) BigQuery Connection Admin ( roles/bigquery.connectionAdmin ) BigQuery Data Viewer ( roles/bigquery.dataViewer ) BigQuery Studio User ( roles/bigquery.studioUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For example, the following example illustrates how prompts and responses appear, and how OpenTelemetry: Attributes are summarized: Before you begin To get the permissions that you need to view your multimodal prompts and responses, ask your administrator to grant you the following IAM roles on project: Cloud Trace User ( roles/cloudtrace.user ) Logs Viewer ( roles/logging.viewer ) Storage Object Viewer ( roles/storage.objectViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Find spans that contain multimodal prompts and responses To find the spans that contain multimodal prompts and responses, do the following: In the Google Cloud console, go to the Trace explorer page: Go to Trace explorer You can also find this page by using the search bar.

