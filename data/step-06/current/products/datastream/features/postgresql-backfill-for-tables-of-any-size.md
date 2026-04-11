---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.752Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "PostgreSQL backfill for tables of any size"
feature_slug: "postgresql-backfill-for-tables-of-any-size"
latest_feature_date: "2023-05-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/manage-backfill-for-the-objects-of-a-stream"
  - "https://docs.cloud.google.com/datastream/docs/faq"
  - "https://docs.cloud.google.com/datastream/docs/configure-alloydb-psql"
keywords:
  - "postgresql"
  - "backfill"
  - "for"
  - "tables"
  - "of"
  - "any"
  - "size"
  - "datastream"
---

# PostgreSQL backfill for tables of any size

Product: Datastream
Coverage: LOW

## Step 02 Summary

Datastream supports backfill for PostgreSQL tables of any size.

## Extended Definition

Datastream supports backfill for PostgreSQL tables of any size.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/manage-backfill-for-the-objects-of-a-stream](https://docs.cloud.google.com/datastream/docs/manage-backfill-for-the-objects-of-a-stream)
- [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- [https://docs.cloud.google.com/datastream/docs/configure-alloydb-psql](https://docs.cloud.google.com/datastream/docs/configure-alloydb-psql)

## Supporting Pages

### "Manage backfill for the objects of a stream \_|\_ Datastream \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastream/docs/manage-backfill-for-the-objects-of-a-stream](https://docs.cloud.google.com/datastream/docs/manage-backfill-for-the-objects-of-a-stream)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Datastream Guides Send feedback Manage backfill for the objects of a stream Stay organized with collections Save and categorize content based on your preferences.
- If this happens, then when new tables are added to the source, there's no automatic backfill task created for them (because new tables typically don't have any "historical" data to backfill).
- To have Datastream stream a snapshot of all existing data from the source to the destination, you must initiate backfill for the objects that contain this data.
- Datastream will start backfill for the objects that you selected, and the status of each object will change from Pending to Active to Completed .

### FAQ \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you can't grant the GRANT SELECT ANY TABLE permission, then you can grant SELECT permissions to the following list of tables: ALL COL COMMENTS ALL CONS COLUMNS ALL CONSTRAINTS ALL DB LINKS ALL EXTERNAL TABLES ALL IND COLUMNS ALL INDEXES ALL LOG GROUPS ALL MVIEWS ALL OBJECTS ALL PART TABLES ALL SEQUENCES ALL SOURCE ALL SYNONYMS ALL TAB COLS ALL TAB COLUMNS ALL TAB COMMENTS ALL TABLES ALL TRIGGERS ALL TRIGGER COLS ALL TYPES ALL USERS ALL VIEWS DATABASE PROPERTIES DBA ROLE PRIVS DUAL PRODUCT COMPONENT VERSION ROLE SYS PRIVS USER ROLE PRIVS USER TAB PRIVS To stream changes using Datastream, you also need read access to all tables included in the stream.
- Datastream enables seamless replication of data from relational database sources such as AlloyDB for PostgreSQL, PostgreSQL, MySQL, SQL Server and Oracle, as well as from Salesforce and MongoDB, directly into BigQuery.
- In some edge cases, for example when replicating very large tables that can't be backfilled using Datastream, you might need to load the data into BigQuery first before starting the stream.
- Does the Datastream-to-BigQuery template in Dataflow have any limitations for the number of data manipulation language (DML) operations?

### "Configure an AlloyDB for PostgreSQL database for CDC \_|\_ Datastream \_\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-alloydb-psql](https://docs.cloud.google.com/datastream/docs/configure-alloydb-psql)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note that this approach increases the load on both the source database and Datastream: CREATE PUBLICATION PUBLICATION NAME FOR ALL TABLES; For PostgreSQL 15 and later, you can create a publication for all tables in a schema.
- This approach lets you replicate changes for tables in the specified list of schemas, including tables that you create in the future: CREATE PUBLICATION PUBLICATION NAME FOR TABLES IN SCHEMA SCHEMA1 , SCHEMA2 ; Create a replication slot by executing the following command.
- Create a Datastream user To create a Datastream user, enter the following PostgreSQL command: CREATE USER USER NAME WITH REPLICATION LOGIN PASSWORD ' USER PASSWORD '; Replace the following: USER NAME : The name of the Datastream user that you want to create.
- Home Documentation Data analytics Datastream Guides Send feedback Configure an AlloyDB for PostgreSQL database for CDC Stay organized with collections Save and categorize content based on your preferences.

