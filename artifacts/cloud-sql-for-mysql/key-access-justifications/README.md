# Key Access Justifications

Product: Cloud SQL for MySQL
Feature slug: `key-access-justifications`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports Key Access Justifications for Cloud EKM so you can view and act on the reason for each key access request.

## Lifecycle

- Latest feature date: 2022-01-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek))
- kms (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek), [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek)
- [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview)
