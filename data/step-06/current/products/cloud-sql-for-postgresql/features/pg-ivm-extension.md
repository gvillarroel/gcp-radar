---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.764Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "pg_ivm extension"
feature_slug: "pg-ivm-extension"
latest_feature_date: "2024-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/ai-overview"
  - "https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
keywords:
  - "incrementally"
  - "materialized"
  - "maintained"
  - "provides"
  - "extension"
---

# pg_ivm extension

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The pg_ivm PostgreSQL extension provides incrementally maintained materialized views and is generally available in Cloud SQL.

## Extended Definition

The pg_ivm PostgreSQL extension provides incrementally maintained materialized views and is generally available in Cloud SQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/ai-overview](https://docs.cloud.google.com/sql/docs/postgres/ai-overview)
- [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)

## Supporting Pages

### "Build generative AI applications using Cloud SQL \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/ai-overview](https://docs.cloud.google.com/sql/docs/postgres/ai-overview)
- Source ID: `site-docs-root`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Cloud SQL provides the following metrics in the Metrics Explorer in Cloud Monitoring: Metric Description Metric label Data cache used The data cache usage (in bytes) database/data cache/bytes used Data cache quota The maximum data cache size (in bytes) database/data cache/quota Data cache hit count The total number of data cache hit read operations for an instance database/postgresql/data cache/hit count Data cache miss count The total number of data cache miss read operations for an instance database/postgresql/data cache/miss count Data cache hit ratio The ratio of data cache hit read operations to data cache miss read operations for an instance database/postgresql/data cache/hit ratio System Insights : provide system metrics such as CPU utilization, disk utilization, and throughput to help you monitor the health of instances and troubleshoot issues that affect the performance of your generative AI applications.
- By using Cloud SQL, you gain the following benefits: A high availability SLA of 99.99% that's inclusive of maintenance A managed service that provides you with features such as automatic backups, replication, patches, encryption, and automatic storage capacity increases Security, governance, and compliance capabilities Combine with contextual operational data .
- Benefits of using Cloud SQL for generative AI applications Using Cloud SQL to build generative AI applications provides the following: Use PostgreSQL to build generative AI applications .
- Store, index, and query vector embeddings with pgvector You can store, index, and query vector embeddings in Cloud SQL by using the pgvector PostgreSQL extension.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 45
- Re-rank relevance: N/A

Evidence snippets:
- To connect to the Cloud SQL instance, use the internal IP address. psql "sslmode=disable dbname= DATABASE NAME user= USERNAME hostaddr= IP ADDRESS " Make the following replacements: DATABASE NAME : the name of the Cloud SQL for PostgreSQL database that's contained within the instance USERNAME : the name of the user that's connecting to the instance IP ADDRESS : the endpoint's IP address Connect using the Cloud SQL Auth Proxy The Cloud SQL Auth Proxy is a connector that provides secure access to an instance with Private Service Connect enabled without a need for authorized networks or for configuring SSL.
- If you use Private Service Connect to connect to a Cloud SQL instance from multiple VPC networks, then each network has its own administrator. dns.admin Grants full control over Cloud DNS resources, including DNS zones and records. cloudsql.admin Provides full control of a Cloud SQL instance and controls the instance over its lifecycle. cloudsql.instanceUser Provides access to the Cloud SQL instance.
- User roles The following table provides information about the roles required to use Private Service Connect with a Cloud SQL instance: Role Description compute.networkAdmin Grants full control over the VPC network that initiates a connection to a Cloud SQL instance.
- Cloud SQL provides tools to help you upgrade your instances from the old network architecture to the new network architecture.

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)
- Source ID: `site-iam-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Install the DB Context Enrichment MCP extension The DB Context Enrichment extension provides a guided, interactive workflow to generate structured NL2SQL context from your database schemas.
- To update the DB Context Enrichment extension, run the following command: gemini extensions update mcp-db-context-enrichment To update the DB Context Enrichment extension or to replace the GEMINI API KEY , run the following command: gemini extensions config mcp-db-context-enrichment GEMINI API KEY Replace GEMINI API KEY with your Gemini API key.
- To install the DB Context Enrichment extension, follow these steps: Install the DB Context Enrichment Gemini CLI extension: gemini extensions install https://github.com/GoogleCloudPlatform/db-context-enrichment Note: The extension requires a Gemini API key at installation to authenticate with the Gemini API and enable context generation.
- Run the following commands in your terminal to authenticate: gcloud auth application-default login Configure the tools.yaml file The extension requires a database connection for context generation, which is supported by the MCP Toolbox and defined within the tools.yaml configuration file.

