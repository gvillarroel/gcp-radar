---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.829Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Generative AI event tracing"
feature_slug: "generative-ai-event-tracing"
latest_feature_date: "2025-05-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/finding-traces"
  - "https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses"
  - "https://docs.cloud.google.com/trace/docs/overview"
keywords:
  - "generative"
  - "ai"
  - "event"
  - "tracing"
  - "trace"
  - "can"
  - "capture"
  - "and"
---

# Generative AI event tracing

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

Cloud Trace can capture and display generative AI events from applications instrumented with OpenTelemetry and LangGraph.

## Extended Definition

Cloud Trace can capture and display generative AI events from applications instrumented with OpenTelemetry and LangGraph.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- [https://docs.cloud.google.com/trace/docs/overview](https://docs.cloud.google.com/trace/docs/overview)

## Supporting Pages

### Find and explore traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following screenshot illustrates how the Trace Explorer page renders text-based generative AI events that are attached to the spans: To learn about the sample application that generated the previous screenshot, see Instrument a LangGraph ReAct Agent with OpenTelemetry .
- You can only search by plain text, and you can't search logs, events, or metadata.
- There are two supported configurations: Text-based prompts and responses that are attached to the spans as attributes , which are key-value pairs that describe some characteristic or an event.
- View attributes, log entries, and events The Details flyout for a span contains a tab for each of the following: Attributes : This tab lists labels that are attached to spans.

### "Collect and view multimodal prompts and responses \_|\_ Cloud Trace \_|\_\

- URL: [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you add the following filter, then only log entries that contain the specified label appear: labels. "event.name" = "gen ai.client.inference.operation.details" To view the prompts and responses that are referenced by a log entry, in the log entry, click View trace details .
- Find spans that contain multimodal prompts and responses To find the spans that contain multimodal prompts and responses, do the following: In the Google Cloud console, go to the Trace explorer page: Go to Trace explorer You can also find this page by using the search bar.
- This document describes how you can configure a LangGraph ReAct agent or a generative AI agent built with the Agent Development Kit (ADK) framework to send multimodal prompts and responses to your Google Cloud project.
- The following example shows part of a log entry that includes object references: { ... "labels" : { "gen ai.system" : "vertex ai" , "event.name" : "gen ai.client.inference.operation.details" , "gen ai.output.messages ref" : "gs://my-bucket/eso9aP7NA GX2PgPkrOi-Qg output.jsonl" , "gen ai.system instructions ref" : "gs://my-bucket/eso9aP7NA GX2PgPkrOi-Qg system instructions.jsonl" , "gen ai.input.messages ref" : "gs://my-bucket/eso9aP7NA GX2PgPkrOi-Qg input.jsonl" } , "logName" : "projects/my-project/logs/gen ai.client.inference.operation.details" , "trace" : "projects/my-project/traces/963761020fc7713e4590cad89ad03229" , "spanId" : "1234512345123451" , ... } In the log entry example, notice the following: The label "event.name": "gen ai.client.inference.operation.details" indicates that the log entry contains references to Cloud Storage objects.

### Cloud Trace overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/overview](https://docs.cloud.google.com/trace/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Tracing client If an OpenTelemetry library is available for your programming language , you can simplify the process of creating and sending trace data by using OpenTelemetry .
- To view and analyze your span data, you can use the Trace Explorer and Observability Analytics pages in the Google Cloud console: Trace Explorer : Displays aggregate information about your trace data and lets you examine individual traces in detail.
- Configurations with automatic tracing Some configurations result in automatic capture of trace data: App Engine standard environment Java 8, Python 2, and PHP 5 applications don't need to use the Trace client libraries.
- If you manage an organization and want to prevent usage of Cloud Trace, then create an organization policy constraint .

