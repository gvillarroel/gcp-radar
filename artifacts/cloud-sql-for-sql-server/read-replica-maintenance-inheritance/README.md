# Read replica maintenance inheritance

Product: Cloud SQL for SQL Server
Feature slug: `read-replica-maintenance-inheritance`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL read replicas follow the primary instance maintenance settings and are maintained before the primary instance; Read replicas inherit maintenance settings from the primary instance, including window, rescheduling, and deny periods, and are maintained before the primary.

## Lifecycle

- Latest feature date: 2023-03-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
