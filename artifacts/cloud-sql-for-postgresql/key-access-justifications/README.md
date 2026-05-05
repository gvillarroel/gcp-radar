# Key Access Justifications

Product: Cloud SQL for PostgreSQL
Feature slug: `key-access-justifications`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Key Access Justifications lets you view the reason for each Cloud EKM request and automate approval or denial based on that justification.

## Lifecycle

- Latest feature date: 2022-01-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek), [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek), [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek), [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek), [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek), [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- key (evidence: [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek), [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- kms (evidence: [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek), [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek), [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek), [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview), [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-cmek](https://docs.cloud.google.com/sql/docs/postgres/configure-cmek)
- [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)
