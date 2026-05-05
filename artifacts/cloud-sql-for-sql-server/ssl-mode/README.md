# SSL mode

Product: Cloud SQL for SQL Server
Feature slug: `ssl-mode`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports SSL mode for specifying connection encryption requirements instead of the legacy require_ssl setting.

## Lifecycle

- Latest feature date: 2024-04-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- credential (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- key (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- kms (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- private (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- secret (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- security (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl), [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
