# Automatic stop near out-of-storage

Product: Cloud SQL for MySQL
Feature slug: `automatic-stop-near-out-of-storage`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL automatically stops a database instance when it is nearly out of storage capacity to prevent data loss.

## Lifecycle

- Latest feature date: 2021-09-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- certificate
- encrypt
- iam
- key
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
