# Spanner Lock Insights dashboard

Product: Spanner
Feature slug: `spanner-lock-insights-dashboard`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Lock Insights dashboard identifies latency spikes in Spanner databases that are caused by lock contention.

## Lifecycle

- Latest feature date: 2022-10-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema))
- audit (evidence: [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema))
- auth (evidence: [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema))
- authorization (evidence: [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema))
- logging (evidence: [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema))

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide)
- [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
