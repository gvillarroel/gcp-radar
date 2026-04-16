---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:48.997Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "ADK prompt and response tracing"
feature_slug: "adk-prompt-and-response-tracing"
latest_feature_date: "2025-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses"
  - "https://docs.cloud.google.com/trace/docs/overview"
  - "https://docs.cloud.google.com/trace/docs/finding-traces"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPagedResponse"
keywords:
  - "adk"
  - "prompt"
  - "and"
  - "response"
  - "tracing"
  - "trace"
  - "can"
  - "collect"
---

# ADK prompt and response tracing

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

Cloud Trace can collect, view, and analyze prompts and responses from agentic applications built with the Agent Development Kit.

## Extended Definition

Cloud Trace can collect, view, and analyze prompts and responses from agentic applications built with the Agent Development Kit.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- [https://docs.cloud.google.com/trace/docs/overview](https://docs.cloud.google.com/trace/docs/overview)
- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPagedResponse)

## Supporting Pages

### "Collect and view multimodal prompts and responses \_|\_ Cloud Trace \_|\_\

- URL: [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- Source ID: `site-docs-root-2`
- Final score: 330
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure the SDK: Install and upgrade the following dependencies: ADK google - adk > = 1.16.0 opentelemetry - instrumentation - google - genai > = 0.4 b0 fsspec [ gcs ] == 2025.10.0 LangGraph opentelemetry - instrumentation - vertexai > = 2.2 b0 opentelemetry - instrumentation - google - genai > = 0.4 b0 fsspec [ gcs ] == 2025.10.0 Not all versions of fsspec support collection of prompts and responses.
- Find spans that contain multimodal prompts and responses To find the spans that contain multimodal prompts and responses, do the following: In the Google Cloud console, go to the Trace explorer page: Go to Trace explorer You can also find this page by using the search bar.
- This document describes how you can configure a LangGraph ReAct agent or a generative AI agent built with the Agent Development Kit (ADK) framework to send multimodal prompts and responses to your Google Cloud project.
- Collect multimodal prompts and responses The SDK your application uses automatically invokes OpenTelemetry to store your prompts and responses, and to send log and trace data to your Google Cloud project.

### Cloud Trace overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/overview](https://docs.cloud.google.com/trace/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For your agentic applications, some frameworks can collect your prompts and responses or pass context that allows tracing of some remote Google Cloud MCP servers calls.
- Cloud Trace and agentic applications To understand the behavior of your agentic applications, configure them to collect prompts and responses or to generate spans when they call remote Google Cloud MCP servers .
- Tracing client If an OpenTelemetry library is available for your programming language , you can simplify the process of creating and sending trace data by using OpenTelemetry .
- For samples that show you how to configure an agentic application to collect prompts and responses, see How to instrument your generative AI applications .

### Find and explore traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- To learn about supported configurations, see Collect and view multimodal prompts and responses .
- There are two supported configurations: Text-based prompts and responses that are attached to the spans as attributes , which are key-value pairs that describe some characteristic or an event.
- Home Documentation Observability Cloud Trace Guides Send feedback Find and explore traces Stay organized with collections Save and categorize content based on your preferences.
- Explore a trace This section provides information about how you can explore a span in the context of its trace: Open and configure the Trace Explorer page.

### "Class TraceServiceClient.ListTracesPagedResponse (2.88.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPagedResponse)
- Source ID: `site-java-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListTracesFixedSizeCollection > Inheritance java.lang.Object > AbstractPagedListResponse > TraceServiceClient.ListTracesPagedResponse Inherited Members AbstractPagedListResponse.expandToFixedSizeCollection(int) AbstractPagedListResponse.getNextPageToken() AbstractPagedListResponse.getPage() AbstractPagedListResponse.iterateAll() AbstractPagedListResponse.iterateFixedSizeCollections(int) AbstractPagedListResponse.iteratePages() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods createAsync(PageContext<ListTracesRequest,ListTracesResponse,Trace> context, ApiFuture<ListTracesResponse> futureResponse) public static ApiFuture<TraceServiceClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class TraceServiceClient.ListTracesPagedResponse (2.88.0) Stay organized with collections Save and categorize content based on your preferences.
- ListTracesPagedResponse > createAsync ( PageContext<ListTracesRequest , ListTracesResponse , Trace > context , ApiFuture<ListTracesResponse> futureResponse ) Parameters Name Description context PageContext < ListTracesRequest , ListTracesResponse , Trace > futureResponse ApiFuture < ListTracesResponse > Returns Type Description ApiFuture < ListTracesPagedResponse > Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListTracesPagedResponse extends AbstractPagedListResponse<ListTracesRequest , ListTracesResponse , Trace , TraceServiceClient .

