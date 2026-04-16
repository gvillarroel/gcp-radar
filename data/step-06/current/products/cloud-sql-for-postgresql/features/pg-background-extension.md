---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.773Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "pg_background extension"
feature_slug: "pg-background-extension"
latest_feature_date: "2024-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "arbitrary"
  - "commands"
  - "background"
  - "extension"
  - "lets"
---

# pg_background extension

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The pg_background extension lets you run arbitrary commands in a background worker.

## Extended Definition

The pg_background extension lets you run arbitrary commands in a background worker.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)

## Supporting Pages

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Run the following commands: GRANT pg signal backend TO USERNAME ; Find the process ID of the blocked or stuck process: SELECT pid, username, state, query FROM pg stat activity ; Stop a running or idle process using these commands: SELECT pg cancel backend ( pid ) FROM pg stat activity WHERE username = ' USERNAME ' ; SELECT pg terminate backend ( pid ) FROM pg stat activity WHERE username = ' USERNAME ' ; Instance is nearing 100% consumption of transaction IDs.
- From a terminal, connect to your database: gcloud sql connect INSTANCE NAME Run this command to create the extension: CREATE EXTENSION pgaudit ; Exit the database, and from a terminal run the following command: gcloud sql instances patch INSTANCE NAME \ --database-flags = cloudsql.enable pgaudit = on,pgaudit.log = all Manage instances Issue Troubleshooting You want to find out what queries are running now.
- No response to TCP keep-alive commands (either the client or the server isn't responsive, possibly overloaded) The database engine connection lifetime was exceeded and the server ends the connection.
- You'd rather view the logs as json or text.You can use the gcloud logging read command along with linux post-processing commands to download the logs.

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)
- Source ID: `site-iam-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Run the following commands in your terminal to authenticate: gcloud auth application-default login Configure the tools.yaml file The extension requires a database connection for context generation, which is supported by the MCP Toolbox and defined within the tools.yaml configuration file.
- To update the DB Context Enrichment extension, run the following command: gemini extensions update mcp-db-context-enrichment To update the DB Context Enrichment extension or to replace the GEMINI API KEY , run the following command: gemini extensions config mcp-db-context-enrichment GEMINI API KEY Replace GEMINI API KEY with your Gemini API key.
- To install the DB Context Enrichment extension, follow these steps: Install the DB Context Enrichment Gemini CLI extension: gemini extensions install https://github.com/GoogleCloudPlatform/db-context-enrichment Note: The extension requires a Gemini API key at installation to authenticate with the Gemini API and enable context generation.
- Verify that the MCP toolbox and the database enrichment extension are ready to use: /mcp reload Run the /generate targeted templates command: /generate targeted templates Enter the natural language query that you want to add to the query template.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Managed Connection Pooling lets you scale your workloads by optimizing resource utilization and connection latency Cloud SQL instances using pooling and multiplexing.
- For Private IP-only instances, enabling Data API access lets authorized users connect and execute SQL statements from the public internet.
- This integration lets you apply large language models (LLMs), which are hosted in Vertex AI, to a Cloud SQL for PostgreSQL database.
- This integration lets you apply large language models (LLMs), which are hosted in Vertex AI, to a Cloud SQL for PostgreSQL database.

