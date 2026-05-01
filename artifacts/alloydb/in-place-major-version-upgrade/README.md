# In-place major version upgrade

Product: AlloyDB
Feature slug: `in-place-major-version-upgrade`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

AlloyDB supports in-place major version upgrades of clusters to higher supported PostgreSQL versions; AlloyDB supports in-place major version upgrades to PostgreSQL 16 from PostgreSQL 14 or 15.

## Lifecycle

- Latest feature date: 2025-03-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- iam
- key
- permission
- policy
- private
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
