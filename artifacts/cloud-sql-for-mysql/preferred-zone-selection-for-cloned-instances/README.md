# Preferred zone selection for cloned instances

Product: Cloud SQL for MySQL
Feature slug: `preferred-zone-selection-for-cloned-instances`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL lets you specify preferred zones when cloning zonal or regional instances to improve future zone reassignment behavior and reduce downtime.

## Lifecycle

- Latest feature date: 2024-09-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- encrypt
- iam
- policy
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
