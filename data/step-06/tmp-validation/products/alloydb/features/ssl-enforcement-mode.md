---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.181Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "SSL enforcement mode"
feature_slug: "ssl-enforcement-mode"
latest_feature_date: "2023-08-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp"
  - "https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
keywords:
  - "mode"
  - "enforcement"
  - "enforce"
  - "encryption"
  - "lets"
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

- [https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp](https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp)
- [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)
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
- Note the following settings: INSPECT AND BLOCK : The enforcement type that inspects content for the Google MCP server and blocks prompts and responses that match the filters.
- ENABLED : The setting that enables a filter or enforcement.

### "Best practices for securing agent interactions with Model Context Protocol\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp](https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enforce minimum safety thresholds for sensitive data operations Model Armor lets you enforce a minimum safety threshold for sensitive data operations—for example, personally identifiable information (PII) detection and de-identification.
- Allowlist enforcement: declare an allowlist of functions or database tables that the agent can access in its initial system prompt and backend code.
- Security and safety configurations AlloyDB provides Model Armor to enforce safety boundaries at the platform level.
- The following is a conceptual example for configuration: Example: Apply a DeidentifyTemplate to filter PII gcloud ai endpoints update ENDPOINT ID \ --region=REGION \ --model-armor-config-file=model armor config.json In the following example, model armor config.json might reference a DLP template: { "safety thresholds": { "injection": "HIGH", "harmful content": "MEDIUM" }, "data protection config": { "dlp deidentify template": "projects/PROJECT NUMBER/locations/LOCATION/deidentifyTemplates/DLP TEMPLATE ID" } } Auditing and observability Visibility into agent actions is crucial for post-incident analysis and detection of compromised agents.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Create a ScaNN index . google ml integration : provides access to the AI functions, which enables ML model invocation from AlloyDB for tasks such as generating embeddings, semantic ranking, AI-based filters and joins, and text generation and summarization.
- Low-latency AI applications: build generative AI applications by leveraging AlloyDB AI, which integrates vector search and machine learning model invocation directly into the database engine, removing the need for high-latency external data movement.
- You can use the following tools to connect to and manage your databases: AlloyDB Studio: a web-based tool built directly into the Google Google Cloud console that lets you explore and manage your data using an interactive SQL interface.
- Security and encryption: protect data at rest using Google's default encryption or customer-managed encryption keys (CMEK), and manage access using integrated Google Cloud Identity and Access Management (IAM).

