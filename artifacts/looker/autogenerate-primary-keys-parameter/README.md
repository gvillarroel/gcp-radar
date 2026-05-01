# autogenerate_primary_keys parameter

Product: Looker
Feature slug: `autogenerate-primary-keys-parameter`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Lets Looker generate a temporary distinct key at query runtime so symmetric aggregates and one-to-many counts work without changing the underlying table.

## Lifecycle

- Latest feature date: 2026-01-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- key
- kms
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/default-configuration](https://docs.cloud.google.com/bigquery/docs/default-configuration)
- [https://docs.cloud.google.com/looker/docs/reference/param-explore-autogenerate-primary-keys](https://docs.cloud.google.com/looker/docs/reference/param-explore-autogenerate-primary-keys)
- [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)
