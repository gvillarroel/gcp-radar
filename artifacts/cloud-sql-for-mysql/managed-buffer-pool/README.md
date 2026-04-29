# Managed buffer pool

Product: Cloud SQL for MySQL
Feature slug: `managed-buffer-pool`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This feature automatically reduces and later restores InnoDB buffer pool size to help prevent out-of-memory events.

## Lifecycle

- Latest feature date: 2025-11-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- authorization
- certificate
- encrypt
- key
- policy
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-mcp](https://docs.cloud.google.com/sql/docs/mysql/configure-mcp)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
