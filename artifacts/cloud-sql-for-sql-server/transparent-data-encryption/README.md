# Transparent data encryption

Product: Cloud SQL for SQL Server
Feature slug: `transparent-data-encryption`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Transparent data encryption automatically encrypts data written to storage and decrypts it when read for Cloud SQL for SQL Server instances.

## Lifecycle

- Latest feature date: 2025-03-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools), [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools), [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools), [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools), [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features))
- key (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools), [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools), [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools), [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features))
- role (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools), [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features))
- security (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools), [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde)
- [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features)
