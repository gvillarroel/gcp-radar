# Near-zero downtime compute scale down

Product: Cloud SQL for PostgreSQL
Feature slug: `near-zero-downtime-compute-scale-down`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL Enterprise Plus supports near-zero downtime for infrequent compute scale-down operations on primary instances.

## Lifecycle

- Latest feature date: 2024-11-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability), [https://docs.cloud.google.com/sql/docs/postgres/availability](https://docs.cloud.google.com/sql/docs/postgres/availability), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- armor (evidence: [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability), [https://docs.cloud.google.com/sql/docs/postgres/availability](https://docs.cloud.google.com/sql/docs/postgres/availability), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability), [https://docs.cloud.google.com/sql/docs/postgres/availability](https://docs.cloud.google.com/sql/docs/postgres/availability), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability), [https://docs.cloud.google.com/sql/docs/postgres/availability](https://docs.cloud.google.com/sql/docs/postgres/availability), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- key (evidence: [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability), [https://docs.cloud.google.com/sql/docs/postgres/availability](https://docs.cloud.google.com/sql/docs/postgres/availability), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability), [https://docs.cloud.google.com/sql/docs/postgres/availability](https://docs.cloud.google.com/sql/docs/postgres/availability), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- private (evidence: [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability), [https://docs.cloud.google.com/sql/docs/postgres/availability](https://docs.cloud.google.com/sql/docs/postgres/availability), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- security (evidence: [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability), [https://docs.cloud.google.com/sql/docs/postgres/availability](https://docs.cloud.google.com/sql/docs/postgres/availability), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- threat (evidence: [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability), [https://docs.cloud.google.com/sql/docs/postgres/availability](https://docs.cloud.google.com/sql/docs/postgres/availability), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability)
- [https://docs.cloud.google.com/sql/docs/postgres/availability](https://docs.cloud.google.com/sql/docs/postgres/availability)
- [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
