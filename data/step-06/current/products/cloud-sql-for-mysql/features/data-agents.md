---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.803Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Data agents"
feature_slug: "data-agents"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli"
keywords:
  - "agents"
  - "this"
  - "lets"
  - "you"
  - "build"
  - "that"
  - "interact"
  - "with"
---

# Data agents

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature lets you build data agents that interact with database data using conversational language.

## Extended Definition

This feature lets you build data agents that interact with database data using conversational language.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- December 17, 2025 Cloud SQL for MySQL Feature You can build data agents that interact with the data in your database using conversational language.
- Cloud SQL for PostgreSQL Feature You can build data agents that interact with the data in your database using conversational language.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Cloud SQL for MySQL Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- You can use this to track the last time that a row in a database table is modified. pg background (version 1.2): lets you run arbitrary commands in a background worker. pg squeeze (version 1.5): removes unused space from a table and lets you use an index to sort records or rows (tuples) of the table. tcn (version 1.0): provides a trigger function that notifies listeners of changes to the content of database tables.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- December 17, 2025 Feature You can build data agents that interact with the data in your database using conversational language.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- Model endpoint management lets you register and manage model endpoints for your MySQL instance, making your interactions with a wider range of ML models seamless.
- The Cloud SQL remote MCP server lets you interact easily with Cloud SQL instances from LLMs, AI applications, and AI-enabled development platforms.

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- Source ID: `site-iam-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Enable ngram token size flag. gcloud sql instances patch INSTANCE NAME --database-flags=ngram token size=3 Create a FULLTEXT index for trigram matching on the airport name CREATE FULLTEXT INDEX idx ngram airports name ON airports ( name ) WITH PARSER ngram ; Prepare your environment You can build context set files from any local development environment or IDE.
- For more information about the context set file and facets, see Context sets overview Generate value search queries If you want to generate value searches that specify how the system should search for and match specific values within a concept type, then you can use the /generate targeted value searches command.
- Enable required services Enable the following services for your project: Data Analytics API with Gemini Gemini for Google Cloud API Dataplex Universal Catalog API Prepare a Cloud SQL instance Make sure that you have access to an existing Cloud SQL instance or create a new one.
- For example, if a step in the Gemini CLI workflow asks you for information that you can find in your tools.yaml file, you can ask Gemini CLI to use tools.yaml or respond with a prompt such as look it up .

