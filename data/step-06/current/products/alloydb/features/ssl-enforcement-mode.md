---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.529Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "SSL enforcement mode"
feature_slug: "ssl-enforcement-mode"
latest_feature_date: "2023-08-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp"
  - "https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
keywords:
  - "ssl"
  - "enforcement"
  - "mode"
  - "alloydb"
  - "lets"
  - "you"
  - "enforce"
  - "encryption"
---

# SSL enforcement mode

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB lets you enforce SSL encryption for all database connections to an instance.

## Extended Definition

AlloyDB lets you enforce SSL encryption for all database connections to an instance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)
- [https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp](https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)

## Supporting Pages

### "Use the AlloyDB remote MCP server \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- See the following example command: gcloud model-armor floorsettings update \ --full-uri = 'projects/ PROJECT ID /locations/global/floorSetting' \ --enable-floor-setting-enforcement = TRUE \ --add-integrated-services = GOOGLE MCP SERVER \ --google-mcp-server-enforcement-type = INSPECT AND BLOCK \ --enable-google-mcp-server-cloud-logging \ --malicious-uri-filter-settings-enforcement = ENABLED \ --add-rai-settings-filters = '[{"confidenceLevel": "MEDIUM AND ABOVE", "filterType": "DANGEROUS"}]' Replace PROJECT ID with your Google Cloud project ID.
- Whether you are deploying AI in your cloud environment, or on external cloud providers, Model Armor can help you prevent malicious input, verify content safety, protect sensitive data, maintain compliance, and enforce your AI safety and security policies consistently across your diverse AI landscape.
- This document shows you how to use the AlloyDB for PostgreSQL remote Model Context Protocol (MCP) server to connect with AI applications including Gemini CLI, ChatGPT, Claude, and custom applications you are developing.
- The AlloyDB for PostgreSQL remote MCP server lets you access and run AlloyDB tools to manage AlloyDB clusters and instances from your AI-enabled development environments and AI agent platforms..

### "Best practices for securing agent interactions with Model Context Protocol\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp](https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enforce minimum safety thresholds for sensitive data operations Model Armor lets you enforce a minimum safety threshold for sensitive data operations—for example, personally identifiable information (PII) detection and de-identification.
- Security and safety configurations AlloyDB provides Model Armor to enforce safety boundaries at the platform level.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Best practices for securing agent interactions with Model Context Protocol Stay organized with collections Save and categorize content based on your preferences.
- Allowlist enforcement: declare an allowlist of functions or database tables that the agent can access in its initial system prompt and backend code.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Create a ScaNN index . google ml integration : provides access to the AI functions, which enables ML model invocation from AlloyDB for tasks such as generating embeddings, semantic ranking, AI-based filters and joins, and text generation and summarization.
- Low-latency AI applications: build generative AI applications by leveraging AlloyDB AI, which integrates vector search and machine learning model invocation directly into the database engine, removing the need for high-latency external data movement.
- You can use the following tools to connect to and manage your databases: AlloyDB Studio: a web-based tool built directly into the Google Google Cloud console that lets you explore and manage your data using an interactive SQL interface.
- Data backup and disaster recovery AlloyDB features a continuous backup and recovery system that lets you create a new cluster based on any point in time within an adjustable retention period.

