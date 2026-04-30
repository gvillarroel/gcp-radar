# Write endpoint

Product: Cloud SQL for MySQL
Feature slug: `write-endpoint`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This feature provides a global DNS write endpoint that always resolves to the current primary Cloud SQL instance; The write endpoint provides a global DNS name that resolves to the current primary private IP Cloud SQL instance to avoid application connection changes after failover or switchover.

## Lifecycle

- Latest feature date: 2025-07-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- certificate
- key
- private

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint](https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
