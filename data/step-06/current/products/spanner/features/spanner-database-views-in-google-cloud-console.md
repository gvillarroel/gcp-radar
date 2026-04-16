---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.308Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner database views in Google Cloud Console"
feature_slug: "spanner-database-views-in-google-cloud-console"
latest_feature_date: "2022-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/manage"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "manage"
  - "view"
  - "console"
  - "database"
  - "views"
  - "allows"
  - "users"
---

# Spanner database views in Google Cloud Console

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Allows users to view and manage Spanner database views directly from the Cloud Console via the database Overview page's Views tab.

## Extended Definition

Allows users to view and manage Spanner database views directly from the Cloud Console via the database Overview page's Views tab.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Singers table now has two rows: GoogleSQL PostgreSQL Run a query in the Google Cloud console On the database Overview page, click Spanner Studio in the navigation menu.
- The Google Cloud console returns to the database Overview page and shows that Schema updates are underway.
- The Google Cloud console displays the Overview page for the database you created.
- The Google Cloud console displays the Singers table's Spanner Studio page with a new query tab that contains the INSERT statement that you edit to insert a row in the Singers table and view the result of that insertion: GoogleSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- All other principals can see only views on which the SELECT fine-grained access control privilege is granted to the current database role, to roles of which the current database role is a member, or to public .
- All other principals can see only privileges granted on tables and views to the current database role and to roles of which the current database role is a member, not including public .
- All other principals can see only privileges granted on tables and views to the current database role and to roles of which the current database role is a member, not including public .
- ROLE TABLE GRANTS This row-filtered table lists all fine-grained access control privileges granted on all tables and views to any database role, including public .

### Create and manage change streams \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View change streams with Google Cloud console To see a list of a database's change streams and review their definitions: Visit the Spanner instances page of the Google Cloud console.
- List and view change streams The Google Cloud console provides a web interface for listing and reviewing a database's change stream definitions.
- Because change streams are schema objects, you create and manage them through the same DDL-driven schema updates used for any other kind of database-definition work, such as creating tables or adding indexes.
- View definitions of change streams as DDL Viewing a database's schema as DDL includes descriptions of all its change streams, where they appear as CREATE CHANGE STREAM statements.

