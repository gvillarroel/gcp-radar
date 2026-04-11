---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.846Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Gemini in Databases index advisor"
feature_slug: "gemini-in-databases-index-advisor"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli"
keywords:
  - "gemini"
  - "in"
  - "databases"
  - "index"
  - "advisor"
  - "includes"
  - "managed"
  - "that"
---

# Gemini in Databases index advisor

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Gemini in Databases includes a managed index advisor that tracks recurring database queries.

## Extended Definition

Gemini in Databases includes a managed index advisor that tracks recurring database queries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- July 31, 2024 Cloud SQL for MySQL Feature Gemini in Databases assistance in Cloud SQL for MySQL is now available in Preview for query insights, system insights, index advisor, and active queries.
- Cloud SQL for PostgreSQL Feature Gemini in Databases assistance in Cloud SQL for PostgreSQL is now available in Preview for query insights, system insights, index advisor, and active queries.
- Index advisor : a fully managed index advisor that tracks the queries your database handles regularly.
- Index advisor : a fully managed index advisor that tracks the queries your database handles regularly.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "entitled" : boolean , "googleVacuumMgmtEnabled" : boolean , "oomSessionCancelEnabled" : boolean , "activeQueryEnabled" : boolean , "indexAdvisorEnabled" : boolean , "flagRecommenderEnabled" : boolean } Fields entitled boolean Output only.
- ON PREMISES INSTANCE An instance running on the customer's premises that is not managed by Cloud SQL.
- This must be a resource path that includes both the host project and the network name.
- Whether the index advisor is enabled. flagRecommenderEnabled boolean Output only.

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Enable required services Enable the following services for your project: Data Analytics API with Gemini Gemini for Google Cloud API Dataplex Universal Catalog API Prepare a Cloud SQL instance Make sure that you have access to an existing Cloud SQL instance or create a new one.
- For example, if a step in the Gemini CLI workflow asks you for information that you can find in your tools.yaml file, you can ask Gemini CLI to use tools.yaml or respond with a prompt such as look it up .
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Build context sets using Gemini CLI Stay organized with collections Save and categorize content based on your preferences.
- To verify the installed version of the extension, run the following command: gemini extensions list Make sure that the version is 0.4.2 or higher.

