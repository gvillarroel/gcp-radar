# KMS Inventory REST API

Product: Cloud Key Management Service
Feature slug: `kms-inventory-rest-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The KMS Inventory REST API lets you programmatically view key inventory and usage information; The KMS Inventory REST API lets you programmatically view key inventory and usage information.

## Lifecycle

- Latest feature date: 2023-05-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest](https://docs.cloud.google.com/kms/docs/reference/inventory/rest), [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api), [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest))
- audit (evidence: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest](https://docs.cloud.google.com/kms/docs/reference/inventory/rest), [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api), [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest))
- auth (evidence: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest](https://docs.cloud.google.com/kms/docs/reference/inventory/rest), [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api), [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest))
- identity (evidence: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest](https://docs.cloud.google.com/kms/docs/reference/inventory/rest), [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api), [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest))
- key (evidence: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest](https://docs.cloud.google.com/kms/docs/reference/inventory/rest), [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api), [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest))
- kms (evidence: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest](https://docs.cloud.google.com/kms/docs/reference/inventory/rest), [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api), [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest))
- logging (evidence: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest](https://docs.cloud.google.com/kms/docs/reference/inventory/rest), [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api), [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest))
- permission (evidence: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest](https://docs.cloud.google.com/kms/docs/reference/inventory/rest), [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api), [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest))
- policy (evidence: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest](https://docs.cloud.google.com/kms/docs/reference/inventory/rest), [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api), [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest))
- security (evidence: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest](https://docs.cloud.google.com/kms/docs/reference/inventory/rest), [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api), [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest))

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api)
- [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest](https://docs.cloud.google.com/kms/docs/reference/inventory/rest)
- [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
