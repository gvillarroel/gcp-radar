---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.199Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner enforced foreign keys"
feature_slug: "cloud-spanner-enforced-foreign-keys"
latest_feature_date: "2025-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/bulk-loading"
keywords:
  - "enforced"
  - "referential"
  - "integrity"
  - "enforce"
  - "foreign"
  - "available"
  - "keys"
---

# Cloud Spanner enforced foreign keys

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner enforced foreign keys are available to enforce referential integrity constraints between tables.

## Extended Definition

Cloud Spanner enforced foreign keys are available to enforce referential integrity constraints between tables.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/bulk-loading](https://docs.cloud.google.com/spanner/docs/bulk-loading)

## Supporting Pages

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- This view also identifies the PRIMARY KEY and UNIQUE constraints on the referenced tables that the foreign keys use for constraint enforcement and referential actions.
- Possible values are: CHECK FOREIGN KEY PLACEMENT KEY PRIMARY KEY UNIQUE is deferrable character varying The value is always NO . initially deferred character varying The value is always NO . enforced character varying Whether the constraint is enforced.
- If a constraint is enforced, (after it reaches a certain state), it's validated both at write time and by a background integrity verifier.
- Possible states are: ADDING FOREIGN KEY : Adding the table's foreign keys WAITING FOR COMMIT : Finalizing the schema change COMMITTED : The schema change to create the table has been committed.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- YES for enforced foreign keys or any other constraint type.
- ENFORCED STRING NO if the constraint is an informational ( NOT ENFORCED ) foreign key .
- KEY COLUMN USAGE This row-filtered table contains one row about each column of the tables from TABLE CONSTRAINTS that are constrained as keys by a PRIMARY KEY , FOREIGN KEY or UNIQUE constraint.
- REFERENTIAL CONSTRAINTS This table contains one row about each FOREIGN KEY constraint.

### Bulk loading best practices \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/bulk-loading](https://docs.cloud.google.com/spanner/docs/bulk-loading)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In Spanner, these relationships are enforced using INTERLEAVE IN PARENT , or foreign keys.
- However, for INTERLEAVE IN PARENT tables it is recommended that you create all tables using INTERLEAVE IN semantics during bulk load, which physically interleaves rows, but does not enforce referential integrity.
- Use INTERLEAVE IN during bulk load For schemas with many parent child references across tables, you must always load the parent before the children to ensure referential integrity.
- This validates referential integrity, failing if there are any orphaned child rows.

