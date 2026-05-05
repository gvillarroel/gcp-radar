# System insights dashboard

Product: Spanner
Feature slug: `system-insights-dashboard`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner provides a system insights dashboard that displays metrics and scorecards for instances and databases.

## Lifecycle

- Latest feature date: 2023-02-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum), [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus))
- credential (evidence: [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum), [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus))
- identity (evidence: [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum), [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus))
- key (evidence: [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum), [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus))
- private (evidence: [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum), [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus))
- token (evidence: [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum), [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus))

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus)
- [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
