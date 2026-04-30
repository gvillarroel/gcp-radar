# pgvector support

Product: AlloyDB
Feature slug: `pgvector-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

AlloyDB supports the pgvector extension with performance enhancements for vector queries and vector indexing using scalar quantization; AlloyDB supports the pgvector extension for working with vector data.

## Lifecycle

- Latest feature date: 2023-08-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- credential
- encrypt
- iam
- identity
- permission
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect](https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect)
- [https://docs.cloud.google.com/alloydb/docs/user-grant-access](https://docs.cloud.google.com/alloydb/docs/user-grant-access)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
