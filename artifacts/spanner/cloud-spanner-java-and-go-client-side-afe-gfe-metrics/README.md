# Cloud Spanner Java and Go client-side AFE/GFE metrics

Product: Spanner
Feature slug: `cloud-spanner-java-and-go-client-side-afe-gfe-metrics`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Spanner added new client-side AFE and GFE metrics for Java and Go applications, including connectivity error count and latency metrics for both fronts.

## Lifecycle

- Latest feature date: 2025-06-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus))
- auth (evidence: [https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus))
- credential (evidence: [https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus))
- identity (evidence: [https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus))
- private (evidence: [https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus))

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus)
- [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry)
- [https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions)
