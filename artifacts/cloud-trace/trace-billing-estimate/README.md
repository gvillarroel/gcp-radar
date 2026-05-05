# Trace billing estimate

Product: Cloud Trace
Feature slug: `trace-billing-estimate`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Trace can estimate billing based on the new pricing model before enforcement begins.

## Lifecycle

- Latest feature date: 2018-09-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient), [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceClient), [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient), [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceClient))
- credential (evidence: [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient), [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceClient), [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient), [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceClient))
- key (evidence: [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient), [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceClient), [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient), [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceClient))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceClient)
