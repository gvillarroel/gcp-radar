# Instances resource custom organization policy fields

Product: Cloud SQL for SQL Server
Feature slug: `instances-resource-custom-organization-policy-fields`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL exposes additional Instances resource fields for creating custom organization policies.

## Lifecycle

- Latest feature date: 2024-11-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting))
- constraint (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting))
- role (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)
