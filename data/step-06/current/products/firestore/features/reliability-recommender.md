---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.868Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Reliability recommender"
feature_slug: "reliability-recommender"
latest_feature_date: "2024-11-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox"
  - "https://docs.cloud.google.com/firestore/native/docs/editions-overview"
  - "https://docs.cloud.google.com/firestore/native/docs/enterprise-query-insights"
keywords:
  - "reliability"
  - "recommender"
  - "active"
  - "assist"
  - "provides"
  - "recommendations"
  - "insights"
  - "improve"
---

# Reliability recommender

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Active Assist provides recommendations and insights to improve database reliability.

## Extended Definition

Active Assist provides recommendations and insights to improve database reliability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox)
- [https://docs.cloud.google.com/firestore/native/docs/editions-overview](https://docs.cloud.google.com/firestore/native/docs/editions-overview)
- [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-insights](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-insights)

## Supporting Pages

### "Use Firestore with MCP, Gemini CLI, and other agents \_|\_ Firestore in\

- URL: [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox)
- Source ID: `site-docs-reference-required-4`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to use the MCP Toolbox for Databases to expose your developer assistance tools to a Firestore instance using the following IDEs: Gemini CLI Gemini Code Assist Cursor Windsurf (Codium) Visual Studio Code (Copilot) Cline (VS Code extension) Claude desktop Claude code About Gemini CLI and extensions Gemini CLI is an open-source AI agent designed to assist with development workflows by assisting with coding, debugging, data exploration, and content creation.
- The FIRESTORE DATABASE variable is optional and defaults to (default) . { "mcpServers": { "firestore": { "command": "./PATH/TO/toolbox", "args": ["--prebuilt","firestore","--stdio"], "env": { "FIRESTORE PROJECT": " PROJECT ID ", "FIRESTORE DATABASE": " DATABASE NAME " } } } } A green active status appears after the server connects successfully.
- Start the Gemini CLI in interactive mode: gemini The CLI automatically loads the Firestore extension for Gemini CLI extension and its tools, which you can use to interact with your database.
- Security rules management get rules Show me the active Firestore security rules for this database. validate rules new rules.txt is a new Firestore Security Rule I'm working on for staging.

### "Analyze query performance statistics \_|\_ Firestore in Native mode \_|\_\

- URL: [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-insights](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-insights)
- Source ID: `site-docs-reference-required-4`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Query insights data Query insights includes data from the following API methods: listDocuments listCollectionIds runQuery runAggregationQuery partitionQuery executePipeline You can view data about the queries that use these methods for a given project, database, and time duration ranging from 10 minutes to 30 days.
- Data granularity and retention Data granularity depends on the duration specified: 10 minute granularity for intervals up to 4 days ago 1 hour granularity for intervals up to 30 days ago The maximum data retention for Query insights is 30 days.
- Required roles To get the permission that you need to view the Query insights dashboard, ask your administrator to grant you the Datastore Viewer ( roles/datastore.viewer ) IAM role on your project.
- Use the Query insights dashboard to help you with: Query performance optimization : identify queries with high latencies and that might need optimization.

### "Firestore editions overview \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/editions-overview](https://docs.cloud.google.com/firestore/native/docs/editions-overview)
- Source ID: `site-docs-reference-required-4`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automatic, basic indexing on all document fields Change data capture Triggers Triggers Observability Cloud Monitoring Query Explain Query Insights Database Center Cloud Monitoring Query Explain Query Insights Database Center Data protection Scheduled backups Point-in-time recovery Scheduled backups Point-in-time recovery Encryption Google-owned and Google-managed encryption key Customer-managed encryption keys Google-owned and Google-managed encryption key Customer-managed encryption keys Storage SSD Hybrid storage (SSD & HDD) Performance Best Good Committed Use Discounts 20% for 1 year; 40% for 3 years 20% for 1 year; 40% for 3 years Data access modes Firestore supports the following data access modes to read and write data: Firestore with MongoDB compatibility mode : this interface supports Firestore with MongoDB compatibility and lets you re-use existing MongoDB drivers, tools, and open-source ecosystem integrations with Firestore.
- Standard edition : provides the core Firestore capabilities including a standard query engine, automated indexing to help performance, and Firebase SDKs with real-time synchronization and offline queries.
- Firestore is available in the following editions: Enterprise edition : provides the most advanced Firestore capabilities, maximizing developer flexibility and control.
- Firestore Enterprise edition offers up to five times improved performance over Standard edition performance, especially at tail latencies.

