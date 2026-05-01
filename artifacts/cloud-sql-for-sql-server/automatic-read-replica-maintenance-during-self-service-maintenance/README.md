# Automatic read replica maintenance during self-service maintenance

Product: Cloud SQL for SQL Server
Feature slug: `automatic-read-replica-maintenance-during-self-service-maintenance`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL automatically updates read replicas when self-service maintenance is performed on the primary instance.

## Lifecycle

- Latest feature date: 2024-02-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- certificate
- logging
- private

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)
