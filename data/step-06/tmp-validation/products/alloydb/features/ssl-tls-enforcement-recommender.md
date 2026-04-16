---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.107Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "SSL/TLS enforcement recommender"
feature_slug: "ssl-tls-enforcement-recommender"
latest_feature_date: "2025-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp"
keywords:
  - "enforcement"
  - "opportunities"
  - "enforce"
  - "recommender"
  - "identify"
  - "helps"
---

# SSL/TLS enforcement recommender

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The SSL/TLS enforcement recommender helps identify opportunities to enforce SSL or TLS encryption for AlloyDB.

## Extended Definition

The SSL/TLS enforcement recommender helps identify opportunities to enforce SSL or TLS encryption for AlloyDB.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp](https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)

## Supporting Pages

### "Best practices for securing agent interactions with Model Context Protocol\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp](https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Allowlist enforcement: declare an allowlist of functions or database tables that the agent can access in its initial system prompt and backend code.
- The following is a conceptual example for configuration: Example: Apply a DeidentifyTemplate to filter PII gcloud ai endpoints update ENDPOINT ID \ --region=REGION \ --model-armor-config-file=model armor config.json In the following example, model armor config.json might reference a DLP template: { "safety thresholds": { "injection": "HIGH", "harmful content": "MEDIUM" }, "data protection config": { "dlp deidentify template": "projects/PROJECT NUMBER/locations/LOCATION/deidentifyTemplates/DLP TEMPLATE ID" } } Auditing and observability Visibility into agent actions is crucial for post-incident analysis and detection of compromised agents.
- Enforce minimum safety thresholds for sensitive data operations Model Armor lets you enforce a minimum safety threshold for sensitive data operations—for example, personally identifiable information (PII) detection and de-identification.
- Use a Sensitive Data Protection DeidentifyTemplate to redact or mask sensitive information before it's returned to the user, even if the model is compromised.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Vaultree and AlloyDB: the world's first Fully Homomorphic and Searchable Cloud Encryption Solution Vaultree launches support for Google's AlloyDB Partner Advantage page Direct link Data integration, optimization, and migration Airbyte Solution Airbyte Cloud Category Data integration and migration Description Airbyte is an open-source data integration engine that helps you consolidate your data in your data warehouses, lakes, and databases.
- Partner references Scaling Postgres AI Workloads with AlloyDB Omni on Silk Platform AlloyDB Omni and Silk Partner Advantage page Direct link Business intelligence and advanced analytics BoostKpi Solution BoostKPI Category Business intelligence and advanced analytics Description Use BoostKPI to identify and receive alerts about granular anomalies in your business data stored in BigQuery, as well as the root causes of these anomalies.
- Partner references KingswaySoft's AlloyDB Data Integration Using KingswaySoft Google AlloyDB Connection Manager Using the Google AlloyDB Source Component Using the Google AlloyDB Destination Component Nexla Solution Nexla Category Data integration and migration Description Nexla is a data operations platform that helps teams create scalable, repeatable, and predictable data flows for any data use case.
- Partner references Deepnote and AlloyDB Partner Advantage page Direct link Tellius Solution Tellius Category Business intelligence, machine learning, and advanced analytics Description Tellius is an AI-powered modern analytics platform that helps you explore, analyze, and generate insights from petabytes of data easily, at Cloud scale, allowing everyone to self-serve analytics in natural language.

### "Use the AlloyDB remote MCP server \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)
- Source ID: `site-docs-reference-2`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- See the following example command: gcloud model-armor floorsettings update \ --full-uri = 'projects/ PROJECT ID /locations/global/floorSetting' \ --enable-floor-setting-enforcement = TRUE \ --add-integrated-services = GOOGLE MCP SERVER \ --google-mcp-server-enforcement-type = INSPECT AND BLOCK \ --enable-google-mcp-server-cloud-logging \ --malicious-uri-filter-settings-enforcement = ENABLED \ --add-rai-settings-filters = '[{"confidenceLevel": "MEDIUM AND ABOVE", "filterType": "DANGEROUS"}]' Replace PROJECT ID with your Google Cloud project ID.
- Note the following settings: INSPECT AND BLOCK : The enforcement type that inspects content for the Google MCP server and blocks prompts and responses that match the filters.
- ENABLED : The setting that enables a filter or enforcement.
- Whether you are deploying AI in your cloud environment, or on external cloud providers, Model Armor can help you prevent malicious input, verify content safety, protect sensitive data, maintain compliance, and enforce your AI safety and security policies consistently across your diverse AI landscape.

