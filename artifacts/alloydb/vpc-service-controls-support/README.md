# VPC Service Controls support

Product: AlloyDB
Feature slug: `vpc-service-controls-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

AlloyDB supports VPC Service Controls to help mitigate data exfiltration risk.

## Lifecycle

- Latest feature date: 2022-05-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- encrypt
- iam
- identity
- key
- logging
- permission
- policy
- private
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)
- [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- [https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls](https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
