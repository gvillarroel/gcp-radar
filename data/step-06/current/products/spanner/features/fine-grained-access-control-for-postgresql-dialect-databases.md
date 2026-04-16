---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.274Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Fine-grained access control for PostgreSQL-dialect databases"
feature_slug: "fine-grained-access-control-for-postgresql-dialect-databases"
latest_feature_date: "2023-06-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/configure-fgac"
  - "https://docs.cloud.google.com/spanner/docs/access-with-fgac"
keywords:
  - "grained"
  - "fine"
  - "control"
  - "postgresql"
  - "databases"
  - "access"
  - "available"
  - "dialect"
---

# Fine-grained access control for PostgreSQL-dialect databases

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Fine-grained access control is available for databases using the PostgreSQL dialect in Spanner.

## Extended Definition

Fine-grained access control is available for databases using the PostgreSQL dialect in Spanner.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- [https://docs.cloud.google.com/spanner/docs/access-with-fgac](https://docs.cloud.google.com/spanner/docs/access-with-fgac)

## Supporting Pages

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 266
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream. option name character varying The name of the change stream option. option type character varying The data type of the change stream option. option value character varying The value of the change stream option. change stream privileges This row-filtered view lists all fine-grained access control privileges granted on all change streams to any database role, including public .
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- The value of this column is parsable as part of a query. option type character varying A data type name that is the type of this option value. column privileges This row-filtered view lists all fine-grained access control privileges granted on all columns to any database role, including public .
- All other principals can see only tables that meet either of the following requirements: The SELECT , INSERT , UPDATE , or DELETE fine-grained access control privileges are granted on the table to the current database role, to roles of which the current database role is a member, or to public .

### Configure fine-grained access control \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page explains how to configure fine-grained access control for Spanner for GoogleSQL-dialect databases and PostgreSQL-dialect databases.
- GoogleSQL gcloud spanner databases ddl update DATABASE NAME --instance = INSTANCE NAME \ --ddl = 'CREATE ROLE ROLE NAME ; GRANT PRIVILEGES ON TABLE TABLES TO ROLE ROLE NAME ;' PostgreSQL gcloud spanner databases ddl update DATABASE NAME --instance = INSTANCE NAME \ --ddl = 'CREATE ROLE ROLE NAME ; GRANT PRIVILEGES ON TABLE TABLES TO ROLE NAME ;' Replace the following: PRIVILEGES is a comma-delimited list of fine-grained access control privileges.
- Then on the Edit condition page, click Condition editor , make corrections, and click Save twice. gcloud Enable fine-grained access control for the principal by using the gcloud spanner databases add-iam-policy-binding command as follows: gcloud spanner databases add-iam-policy-binding DATABASE NAME \ --instance = INSTANCE NAME \ --role = roles/spanner.fineGrainedAccessUser \ --member = MEMBER NAME \ --condition = None MEMBER NAME is the identifier for the principal.
- Home Documentation Databases Spanner Guides Send feedback Configure fine-grained access control Stay organized with collections Save and categorize content based on your preferences.

### "Access a database with fine-grained access control \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/access-with-fgac](https://docs.cloud.google.com/spanner/docs/access-with-fgac)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases Spanner Guides Send feedback Access a database with fine-grained access control Stay organized with collections Save and categorize content based on your preferences.
- If you have only fine-grained access control privileges and no IAM database-level permissions, you must have been granted access to the spanner sys reader system role or one of its member roles.
- As a fine-grained access control user, you must select a database role to use to execute SQL statements and queries, and to perform row operations on a database.
- Google Cloud SDK If you specify a database role when you submit a query, DML, or a row operation, Spanner checks fine-grained access control privileges.

