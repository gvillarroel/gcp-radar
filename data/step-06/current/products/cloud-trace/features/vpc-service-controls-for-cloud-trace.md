---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.005Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "VPC Service Controls for Cloud Trace"
feature_slug: "vpc-service-controls-for-cloud-trace"
latest_feature_date: "2019-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/overview"
  - "https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset"
  - "https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient"
keywords:
  - "vpc"
  - "controls"
  - "for"
  - "trace"
  - "integrates"
  - "with"
---

# VPC Service Controls for Cloud Trace

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

Cloud Trace integrates with VPC Service Controls.

## Extended Definition

Cloud Trace integrates with VPC Service Controls.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/overview](https://docs.cloud.google.com/trace/docs/overview)
- [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)
- [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient)

## Supporting Pages

### Cloud Trace overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/overview](https://docs.cloud.google.com/trace/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Any VPC Service Controls restrictions that you create for the Trace service apply only to that service.
- We recommend the Telemetry API for the following reason: The API provides compatibility with the open source OpenTelemetry ecosystem and its limits are often more generous than the limits of the Cloud Trace API, which is a proprietary Google Cloud API Your trace data is stored in a format that is generally consistent with the proto files defined by the OpenTelemetry OTLP Protocol .
- VPC Service Controls support Trace is a VPC Service Controls supported service.
- For more information, see the following: VPC Service Controls documentation .

### Analyze trace data with BigQuery \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- If you plan to configure the Observability Analytics page to run queries on your BigQuery slots and if you are using projects with Virtual Private Cloud (VPC) Service Controls, then verify you are using the Enterprise Edition of BigQuery.
- Home Documentation Observability Cloud Trace Guides Send feedback Analyze trace data with BigQuery Stay organized with collections Save and categorize content based on your preferences.
- You do need a linked BigQuery dataset when you want to do any of the following: Join trace data with other BigQuery datasets.
- This document describes how to create a linked BigQuery dataset for your trace data, and how to query that dataset.

### "Class TraceServiceAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This corresponds to the trace id field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the traces field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ClientInfo ) This file describes an API for collecting and viewing traces and spans within a trace.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import trace v1 async def sample patch traces(): Create a client client = trace v1.TraceServiceAsyncClient() Initialize request argument(s) request = trace v1.

### "Class TraceServiceAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There might be gaps or overlaps between spans in a trace. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ClientInfo ) Service for collecting and viewing traces and spans within a trace.
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create span create span ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import trace v2 async def sample batch write spans(): Create a client client = trace v2.TraceServiceAsyncClient() Initialize request argument(s) spans = trace v2.

