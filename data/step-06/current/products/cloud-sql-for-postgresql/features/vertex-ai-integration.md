---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.332Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Vertex AI integration"
feature_slug: "vertex-ai-integration"
latest_feature_date: "2024-03-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
keywords:
  - "vertex"
  - "ai"
  - "integration"
  - "lets"
  - "you"
  - "apply"
  - "hosted"
  - "large"
---

# Vertex AI integration

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Vertex AI integration lets you apply Vertex AI hosted large language models to Cloud SQL for PostgreSQL databases.

## Extended Definition

Vertex AI integration lets you apply Vertex AI hosted large language models to Cloud SQL for PostgreSQL databases.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- This integration lets you apply large language models (LLMs), which are hosted in Vertex AI, to a Cloud SQL for PostgreSQL database, version 12 and later.
- By integrating your Cloud SQL for MySQL instance with Vertex AI, you can invoke online predictions and generate vector embeddings from models hosted in Vertex AI directly from your Cloud SQL instance.
- To use model endpoint management, update your instance to [ MySQL version ].R20250531.01 14 or later, and make sure that you've enabled the integration with Vertex AI on your instance.
- With model endpoint management, you can register and call remote AI model providers or access the Vertex AI integration.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- This integration lets you apply large language models (LLMs), which are hosted in Vertex AI, to a Cloud SQL for PostgreSQL database.
- This integration lets you apply large language models (LLMs), which are hosted in Vertex AI, to a Cloud SQL for PostgreSQL database.
- Set the following parameters, as required: enableGoogleMlIntegration : when this parameter is set to true , Cloud SQL instances can connect to Vertex AI to pass requests for real-time predictions and insights to the AI cloudsql.enable google ml integration : when this parameter is set to on , Cloud SQL can integrate with Vertex AI You can use the sqlNetworkArchitecture field to enforce the use of the new network architecture for the instance upon creation, even if the project isn't fully upgraded.
- Set the following parameters, as required: enableGoogleMlIntegration : when this parameter is set to true , Cloud SQL instances can connect to Vertex AI to pass requests for real-time predictions and insights to the AI cloudsql.enable google ml integration : when this parameter is set to on , Cloud SQL can integrate with Vertex AI You can use the sqlNetworkArchitecture field to enforce the use of the new network architecture for the instance upon creation, even if the project isn't fully upgraded.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- This integration lets you apply large language models (LLMs), which are hosted in Vertex AI, to a Cloud SQL for PostgreSQL database, version 12 and later.
- Please use this table to find the name of the maintenance version to apply, and use that version or the latest version available: PostgreSQL version Maintenance version PostgreSQL 9.6 POSTGRES 9 6 24.R20220710.01 02 PostgreSQL 10 POSTGRES 10 21.R20220710.01 02 PostgreSQL 11 POSTGRES 11 16.R20220710.01 02 PostgreSQL 12 POSTGRES 12 11.R20220710.01 02 PostgreSQL 13 POSTGRES 13 7.R20220710.01 02 After you have identified the name of the maintenance version, please upgrade to the target maintenance version , performing the corresponding update of your instances (to the latest maintenance version).
- Announcement The rollout of the following items in the February 7 release note is now complete : Extensions Flags Minor versions Extension versions Plugin versions March 26, 2024 Feature You can now integrate Cloud SQL and Vertex AI.
- After applying the self service maintenance , you can fix any silent data corruption if it already happens using REINDEX CONCURRENTLY SQL command on the specific indexes, or reindexdb client command for your entire instance.

