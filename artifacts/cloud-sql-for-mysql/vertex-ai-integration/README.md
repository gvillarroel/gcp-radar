# Vertex AI integration

Product: Cloud SQL for MySQL
Feature slug: `vertex-ai-integration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This feature lets Cloud SQL for MySQL invoke Vertex AI online predictions and generate vector embeddings directly from the database; Cloud SQL for MySQL can integrate with Vertex AI to invoke predictions and generate vector embeddings from hosted models.

## Lifecycle

- Latest feature date: 2026-02-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- armor (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- security (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- threat (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
