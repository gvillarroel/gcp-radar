# Spanner change_stream read latency metric in Cloud Monitoring

Product: Spanner
Feature slug: `spanner-change-stream-read-latency-metric-in-cloud-monitoring`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Monitoring now supports the `read_request_latencies_by_change_stream` metric so Spanner users can view and filter all read latencies by change-stream and non-change-stream reads.

## Lifecycle

- Latest feature date: 2024-05-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- key
- permission
- policy
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka](https://docs.cloud.google.com/spanner/docs/change-streams/use-kafka)
