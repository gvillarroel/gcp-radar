# SAFE_TO_JSON function

Product: Spanner
Feature slug: `safe-to-json-function`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner adds support for the SAFE_TO_JSON function in GoogleSQL, enabling conversion of SQL objects to JSON while returning JSON null for invalid JSON types instead of raising errors.

## Lifecycle

- Latest feature date: 2024-10-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- constraint
- encrypt
- iam
- key
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- [https://docs.cloud.google.com/spanner/docs/graph/queries-overview](https://docs.cloud.google.com/spanner/docs/graph/queries-overview)
- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
