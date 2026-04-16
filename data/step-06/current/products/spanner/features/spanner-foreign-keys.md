---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.339Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner foreign keys"
feature_slug: "spanner-foreign-keys"
latest_feature_date: "2020-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/cmek"
keywords:
  - "foreign"
  - "generally"
  - "available"
  - "keys"
---

# Spanner foreign keys

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Foreign key support in Cloud Spanner is now generally available.

## Extended Definition

Foreign key support in Cloud Spanner is now generally available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)

## Supporting Pages

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- KEY COLUMN USAGE This row-filtered table contains one row about each column of the tables from TABLE CONSTRAINTS that are constrained as keys by a PRIMARY KEY , FOREIGN KEY or UNIQUE constraint.
- Possible states are: ADDING FOREIGN KEY : Adding the table's foreign keys.
- Secondary backing indexes for foreign keys are managed by Spanner.
- YES for enforced foreign keys or any other constraint type.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Possible states are: ADDING FOREIGN KEY : Adding the table's foreign keys WAITING FOR COMMIT : Finalizing the schema change COMMITTED : The schema change to create the table has been committed.
- This view also identifies the PRIMARY KEY and UNIQUE constraints on the referenced tables that the foreign keys use for constraint enforcement and referential actions.
- For example, secondary backing indexes for foreign keys are managed by Spanner.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- If you're using multiple regional keys to protect a Spanner database, only those replicas that are protected by a key residing in the unavailable regional Cloud KMS are affected by the unavailability.
- If you're using multiple Cloud EKM keys to protect your Spanner database, only those replicas that are protected by the unavailable key are affected by the unavailability.
- Limit which of your organization's Cloud KMS keys are available for CMEK protection.
- For example, if your Spanner database is in the multi-region instance configuration nam3 , with instance partitions located in europe-west1 and europe-west2 , then you must create Cloud KMS keys in the following regions: us-east4 (part of nam3 ) us-east1 (part of nam3 ) us-central1 (part of nam3 ) europe-west1 (location of instance partition) europe-west2 (location of instance partition) For more information, see Secure a database with CMEK .

