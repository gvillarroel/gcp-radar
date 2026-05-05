# Organization policy control for MCP use

Product: Cloud SQL for PostgreSQL
Feature slug: `organization-policy-control-for-mcp-use`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Organization policy control for MCP use lets administrators restrict MCP services with an organization policy constraint; deprecated on 2026-03-17.

## Lifecycle

- Latest feature date: 2026-02-18
- Deprecation date: 2026-03-17
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview))
- constraint (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview))
- security (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)
