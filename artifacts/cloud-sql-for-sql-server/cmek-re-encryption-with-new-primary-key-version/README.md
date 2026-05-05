# CMEK re-encryption with new primary key version

Product: Cloud SQL for SQL Server
Feature slug: `cmek-re-encryption-with-new-primary-key-version`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL lets you re-encrypt an existing CMEK-enabled primary instance or replica with a new primary key version.

## Lifecycle

- Latest feature date: 2023-08-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption))
- credential (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption))
- key (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption))
- kms (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption))
- secret (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption))
- security (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde)
- [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
