---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.253Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner PostgreSQL spanner.date_bin function"
feature_slug: "spanner-postgresql-spanner-date-bin-function"
latest_feature_date: "2023-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "date"
  - "postgresql"
  - "supports"
  - "dialect"
---

# Spanner PostgreSQL spanner.date_bin function

Product: Spanner
Coverage: LOW

## Step 02 Summary

Spanner supports the PostgreSQL spanner.date_bin function in the PostgreSQL dialect.

## Extended Definition

Spanner supports the PostgreSQL spanner.date_bin function in the PostgreSQL dialect.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- The default is public for PostgreSQL-dialect databases. table name character varying The name of the table or view that contains the column. column name character varying The name of the column. privilege type character varying The type of the privilege ( SELECT , INSERT , or UPDATE ). is grantable character varying Not used.
- The default is public for PostgreSQL-dialect databases. table name character varying The name of the table or view that contains the column. column name character varying The name of the column. privilege type character varying The type of the privilege ( SELECT , INSERT , or UPDATE ). is grantable character varying Not used.
- The default is public for PostgreSQL-dialect databases. table name character varying The name of the table or view. privilege type character varying The type of the privilege ( SELECT , INSERT , UPDATE , or DELETE ). is grantable character varying Not used.
- The default is public for PostgreSQL-dialect databases. table name character varying The name of the table or view. privilege type character varying The type of the privilege ( SELECT , INSERT , UPDATE , or DELETE ). is grantable character varying Not used.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- If you are using a PostgreSQL-dialect database, see Information schema for PostgreSQL-dialect databases .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- All other principals can see only indexes that meet either of the following requirements: Any of the SELECT , INSERT , or UPDATE fine-grained access control privileges are granted at the column level on all columns in the index to the current database role, to roles of which the current database role is a member, or to public .
- All other principals can see only indexes that meet either of the following requirements: Any of the SELECT , INSERT , or UPDATE fine-grained access control privileges are granted at the column level on all columns in the index to the current database role, to roles of which the current database role is a member, or to public .

### Build context sets using Gemini CLI \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- PostgreSQL interface note: The examples in this topic are intended for GoogleSQL-dialect databases.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
- To update the DB Context Enrichment extension, run the following command: gemini extensions update mcp-db-context-enrichment To update the DB Context Enrichment extension or to replace the GEMINI API KEY , run the following command: gemini extensions config mcp-db-context-enrichment GEMINI API KEY Replace GEMINI API KEY with your Gemini API key.
- For more information about how to find your API key, see Using Gemini API keys . (Optional) Update the DB Context Enrichment extension.

