# Model endpoint management

Product: Cloud SQL for MySQL
Feature slug: `model-endpoint-management`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This feature lets you register and manage model endpoints so Cloud SQL for MySQL can call hosted and third-party AI models; This feature lets Cloud SQL for MySQL register and call remote AI model providers or use Vertex AI integration for generative AI applications.

## Lifecycle

- Latest feature date: 2026-02-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing))
- allow (evidence: [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing))
- armor (evidence: [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing))
- auth (evidence: [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing))
- authorization (evidence: [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing))
- iam (evidence: [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing))
- identity (evidence: [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing))
- key (evidence: [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing))
- logging (evidence: [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing))
- private (evidence: [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing))
- security (evidence: [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing))
- threat (evidence: [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing))

## Official Evidence

- [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview)
- [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing)
- [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
