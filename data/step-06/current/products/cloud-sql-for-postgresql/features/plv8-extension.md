---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.797Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "plv8 extension"
feature_slug: "plv8-extension"
latest_feature_date: "2022-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/features"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli"
keywords:
  - "javascript"
  - "procedural"
  - "plv8"
  - "language"
  - "generally"
  - "available"
  - "extension"
---

# plv8 extension

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The plv8 extension is generally available for using JavaScript as a procedural language in PostgreSQL.

## Extended Definition

The plv8 extension is generally available for using JavaScript as a procedural language in PostgreSQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/features](https://docs.cloud.google.com/sql/docs/postgres/features)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)

## Supporting Pages

### Cloud SQL for PostgreSQL features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/features](https://docs.cloud.google.com/sql/docs/postgres/features)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported PostgreSQL procedural languages for Cloud SQL Cloud SQL supports the PL/pgSQL SQL procedural language .
- Supported languages for Cloud SQL for PostgreSQL You can use Cloud SQL with App Engine applications running in the flexible environment that are written in: C# Go Java Node.js PHP Python Ruby You can also use Cloud SQL with external applications using the standard PostgreSQL client-server protocol.
- Unsupported features for Cloud SQL for PostgreSQL Any feature that requires SUPERUSER privileges with the following exceptions: You can use the CREATE EXTENSION statement only for supported extensions .
- Supported PostgreSQL extensions for Cloud SQL Cloud SQL supports many PostgreSQL extensions.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Connect to a Cloud SQL instance You can connect to a Cloud SQL instance with Private Service Connect enabled by using an internal IP address, a DNS record, the Cloud SQL Auth Proxy, the Cloud SQL Language Connectors, or other Google Cloud applications.
- Connect using the Cloud SQL Language Connectors The Cloud SQL Language Connectors are libraries that provide secure access to a Cloud SQL instance with Private Service Connect enabled without a need for authorized networks or for configuring SSL.
- However, the endpoint might not be created because of reasons such as the specified network doesn't exist, there's no valid service connection policy, or there aren't any available IP addresses.
- Important: If you're using the Cloud SQL Auth Proxy or the Cloud SQL Language Connectors , then set up a DNS record which matches the recommended DNS name provided for the instance.

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)
- Source ID: `site-iam-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Verify that the MCP toolbox and the database enrichment extension are ready to use: /mcp reload Run the /generate targeted templates command: /generate targeted templates Enter the natural language query that you want to add to the query template.
- To update the DB Context Enrichment extension, run the following command: gemini extensions update mcp-db-context-enrichment To update the DB Context Enrichment extension or to replace the GEMINI API KEY , run the following command: gemini extensions config mcp-db-context-enrichment GEMINI API KEY Replace GEMINI API KEY with your Gemini API key.
- To install the DB Context Enrichment extension, follow these steps: Install the DB Context Enrichment Gemini CLI extension: gemini extensions install https://github.com/GoogleCloudPlatform/db-context-enrichment Note: The extension requires a Gemini API key at installation to authenticate with the Gemini API and enable context generation.
- Run the following commands in your terminal to authenticate: gcloud auth application-default login Configure the tools.yaml file The extension requires a database connection for context generation, which is supported by the MCP Toolbox and defined within the tools.yaml configuration file.

