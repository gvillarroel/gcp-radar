# Advanced trace filters

Product: Cloud Trace
Feature slug: `advanced-trace-filters`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Trace List page and Trace API support filtering traces by custom labels, latency, child spans, methods, and URIs.

## Lifecycle

- Latest feature date: 2017-06-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPage), [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPagedResponse), [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers.ListTracesAsyncPager](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers.ListTracesAsyncPager), [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers.ListTracesPager](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers.ListTracesPager))
- token (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPage), [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPagedResponse), [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers.ListTracesAsyncPager](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers.ListTracesAsyncPager), [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers.ListTracesPager](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers.ListTracesPager))

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPage)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPagedResponse)
- [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers.ListTracesAsyncPager](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers.ListTracesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers.ListTracesPager](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers.ListTracesPager)
