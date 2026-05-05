# Cloud SQL remote MCP server

Product: Cloud SQL for PostgreSQL
Feature slug: `cloud-sql-remote-mcp-server`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Cloud SQL remote MCP server lets LLMs, AI applications, and AI-enabled development platforms interact with Cloud SQL instances.

## Lifecycle

- Latest feature date: 2026-02-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- armor (evidence: [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- key (evidence: [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- security (evidence: [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- threat (evidence: [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
