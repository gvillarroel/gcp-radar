# INFORMATION_SCHEMA.WRITE_API_TIMELINE views

Product: BigQuery
Feature slug: `information-schema-write-api-timeline-views`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The INFORMATION_SCHEMA.WRITE_API_TIMELINE views provide per-minute aggregated ingestion statistics for the BigQuery Storage Write API.

## Lifecycle

- Latest feature date: 2024-03-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-write-api](https://docs.cloud.google.com/bigquery/docs/information-schema-write-api), [https://docs.cloud.google.com/bigquery/docs/write-api](https://docs.cloud.google.com/bigquery/docs/write-api), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-write-api](https://docs.cloud.google.com/bigquery/docs/information-schema-write-api), [https://docs.cloud.google.com/bigquery/docs/write-api](https://docs.cloud.google.com/bigquery/docs/write-api), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro))
- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-write-api](https://docs.cloud.google.com/bigquery/docs/information-schema-write-api), [https://docs.cloud.google.com/bigquery/docs/write-api](https://docs.cloud.google.com/bigquery/docs/write-api), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro))
- authorization (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-write-api](https://docs.cloud.google.com/bigquery/docs/information-schema-write-api), [https://docs.cloud.google.com/bigquery/docs/write-api](https://docs.cloud.google.com/bigquery/docs/write-api), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-write-api](https://docs.cloud.google.com/bigquery/docs/information-schema-write-api), [https://docs.cloud.google.com/bigquery/docs/write-api](https://docs.cloud.google.com/bigquery/docs/write-api), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-write-api](https://docs.cloud.google.com/bigquery/docs/information-schema-write-api), [https://docs.cloud.google.com/bigquery/docs/write-api](https://docs.cloud.google.com/bigquery/docs/write-api), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-write-api](https://docs.cloud.google.com/bigquery/docs/information-schema-write-api), [https://docs.cloud.google.com/bigquery/docs/write-api](https://docs.cloud.google.com/bigquery/docs/write-api), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-write-api](https://docs.cloud.google.com/bigquery/docs/information-schema-write-api), [https://docs.cloud.google.com/bigquery/docs/write-api](https://docs.cloud.google.com/bigquery/docs/write-api), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro))
- identity (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-write-api](https://docs.cloud.google.com/bigquery/docs/information-schema-write-api), [https://docs.cloud.google.com/bigquery/docs/write-api](https://docs.cloud.google.com/bigquery/docs/write-api), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-write-api](https://docs.cloud.google.com/bigquery/docs/information-schema-write-api), [https://docs.cloud.google.com/bigquery/docs/write-api](https://docs.cloud.google.com/bigquery/docs/write-api), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro))
- kms (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-write-api](https://docs.cloud.google.com/bigquery/docs/information-schema-write-api), [https://docs.cloud.google.com/bigquery/docs/write-api](https://docs.cloud.google.com/bigquery/docs/write-api), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-write-api](https://docs.cloud.google.com/bigquery/docs/information-schema-write-api), [https://docs.cloud.google.com/bigquery/docs/write-api](https://docs.cloud.google.com/bigquery/docs/write-api), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-write-api](https://docs.cloud.google.com/bigquery/docs/information-schema-write-api), [https://docs.cloud.google.com/bigquery/docs/write-api](https://docs.cloud.google.com/bigquery/docs/write-api), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-write-api](https://docs.cloud.google.com/bigquery/docs/information-schema-write-api), [https://docs.cloud.google.com/bigquery/docs/write-api](https://docs.cloud.google.com/bigquery/docs/write-api), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-write-api](https://docs.cloud.google.com/bigquery/docs/information-schema-write-api), [https://docs.cloud.google.com/bigquery/docs/write-api](https://docs.cloud.google.com/bigquery/docs/write-api), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro))
- token (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-write-api](https://docs.cloud.google.com/bigquery/docs/information-schema-write-api), [https://docs.cloud.google.com/bigquery/docs/write-api](https://docs.cloud.google.com/bigquery/docs/write-api), [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-write-api](https://docs.cloud.google.com/bigquery/docs/information-schema-write-api)
- [https://docs.cloud.google.com/bigquery/docs/write-api](https://docs.cloud.google.com/bigquery/docs/write-api)
