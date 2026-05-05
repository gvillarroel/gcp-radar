# CMEK re-encryption with new primary key version

Product: Cloud SQL for MySQL
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

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview))
- kms (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview))
- role (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek)
- [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview)
