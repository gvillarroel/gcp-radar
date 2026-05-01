# Automatic instance stop on low storage

Product: Cloud SQL for PostgreSQL
Feature slug: `automatic-instance-stop-on-low-storage`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL automatically stops an instance that is nearly out of storage to prevent data loss.

## Lifecycle

- Latest feature date: 2021-09-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- certificate
- encrypt
- key

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/clone-instance](https://docs.cloud.google.com/sql/docs/postgres/clone-instance)
