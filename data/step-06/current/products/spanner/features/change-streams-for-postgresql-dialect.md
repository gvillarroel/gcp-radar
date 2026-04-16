---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.288Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Change streams for PostgreSQL dialect"
feature_slug: "change-streams-for-postgresql-dialect"
latest_feature_date: "2023-03-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/manage"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "streams"
  - "postgresql"
  - "databases"
  - "change"
  - "supports"
  - "dialect"
---

# Change streams for PostgreSQL dialect

Product: Spanner
Coverage: LOW

## Step 02 Summary

Spanner supports Change Streams for databases using the PostgreSQL dialect.

## Extended Definition

Spanner supports Change Streams for databases using the PostgreSQL dialect.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream. option name character varying The name of the change stream option. option type character varying The data type of the change stream option. option value character varying The value of the change stream option. change stream privileges This row-filtered view lists all fine-grained access control privileges granted on all change streams to any database role, including public .
- For PostgreSQL-dialect databases, the default is public . table name character varying The name of the table that this row refers to. column name character varying The name of the column that this row refers to. change stream options This row-filtered view contains the configuration options for change streams.
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream that this row refers to. table catalog character varying The database name. table schema character varying The name of the table's schema.
- For PostgreSQL-dialect databases, the default is public . table name character varying The name of the table that this row refers to. all columns character varying YES if this row's change stream tracks the entirety of the table this row refers to.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- If you are using a PostgreSQL-dialect database, see Information schema for PostgreSQL-dialect databases .
- All other principals can see only change streams on which the SELECT fine-grained access control privilege is granted to the current database role, to roles of which the current database role is a member, or to public .
- All other principals can see only options for change streams on which the SELECT privilege is granted to the current database role, to roles of which the current database role is a member, or to public .
- All other principals can see only rows for change streams on which the SELECT privilege is granted to the current database role, to roles of which the current database role is a member, or to public .

### Create and manage change streams \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- Source ID: `site-docs-root`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- This page describes how to create, modify, and view Spanner change streams for GoogleSQL-dialect databases and PostgreSQL-dialect databases.
- Home Documentation Databases Spanner Guides Send feedback Create and manage change streams Stay organized with collections Save and categorize content based on your preferences.
- GoogleSQL To create a change stream that can exclude records from specified write transactions, run the following: CREATE CHANGE STREAM CHANGE STREAM NAME FOR ALL OPTIONS ( allow txn exclusion = true ) Replace the following: CHANGE STREAM NAME : the name of the new change stream The following example creates a change stream named NewChangeStream that can exclude records from specified write transactions: CREATE CHANGE STREAM NewChangeStream FOR ALL OPTIONS ( allow txn exclusion = true ) PostgreSQL To create a change stream that can exclude records from specified write transactions, run the following: CREATE CHANGE STREAM CHANGE STREAM NAME FOR ALL WITH ( allow txn exclusion = true ) Replace the following: CHANGE STREAM NAME : the name of the new change stream The following example creates a change stream named NewChangeStream that can exclude records from specified write transactions,: CREATE CHANGE STREAM NewChangeStream FOR ALL WITH ( allow txn exclusion = true ) To enable or disable the transaction-level records exclusion from an existing change stream, see Modify transaction-level records exclusion .
- Two examples: GoogleSQL CREATE CHANGE STREAM LongerDataRetention FOR ALL OPTIONS ( retention period = '36h' ); CREATE CHANGE STREAM MaximumDataRetention FOR ALL OPTIONS ( retention period = '7d' ); PostgreSQL CREATE CHANGE STREAM LongerDataRetention FOR ALL WITH ( retention period = '36h' ); CREATE CHANGE STREAM MaximumDataRetention FOR ALL WITH ( retention period = '7d' ); Specify a different value capture type To specify a change stream value capture type other than OLD AND NEW VALUES , set the value capture type to either NEW VALUES or NEW ROW , as shown in the following examples: GoogleSQL CREATE CHANGE STREAM NewRowChangeStream FOR ALL OPTIONS ( value capture type = 'NEW ROW' ); CREATE CHANGE STREAM NewValuesChangeStream FOR ALL OPTIONS ( value capture type = 'NEW VALUES' ); PostgreSQL CREATE CHANGE STREAM NewRowChangeStream FOR ALL WITH ( value capture type = 'NEW ROW' ); CREATE CHANGE STREAM NewValuesChangeStream FOR ALL WITH ( value capture type = 'NEW VALUES' ); Filter TTL-based deletes You can filter TTL-based deletes from your change stream's scope using the exclude ttl deletes filter.

