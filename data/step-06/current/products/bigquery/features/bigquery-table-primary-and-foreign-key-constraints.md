---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.681Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery table primary and foreign key constraints"
feature_slug: "bigquery-table-primary-and-foreign-key-constraints"
latest_feature_date: "2023-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "referential integrity"
  - "ALTER TABLE ADD CONSTRAINT"
  - "PK"
  - "FK"
  - "PRIMARY KEY"
  - "FOREIGN KEY"
  - "CREATE TABLE constraints"
  - "table constraints"
---

# BigQuery table primary and foreign key constraints

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports defining primary key and foreign key table constraints using CREATE TABLE and ALTER TABLE statements.

## Extended Definition

BigQuery supports defining table-level relational constraints in GoogleSQL DDL using primary key and foreign key clauses. Specifically, the documented `ALTER TABLE` grammar includes `ADD PRIMARY KEY (...) NOT ENFORCED` and `ADD CONSTRAINT [IF NOT EXISTS] constraint_name FOREIGN KEY (...) REFERENCES ... NOT ENFORCED`, and examples also describe adding these constraints during table setup/modification.

## Evidence Summary

The BigQuery DDL reference provides direct syntax and examples for declaring primary and foreign key constraints, including the `ADD PRIMARY KEY` and `ADD CONSTRAINT ... FOREIGN KEY ... REFERENCES ...` forms with `NOT ENFORCED`.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Syntax ALTER TABLE [[ project name . ] dataset name . ] fk table name ADD [ CONSTRAINT [ IF NOT EXISTS ] constraint name ] FOREIGN KEY ( fk column name [ , ... ] ) REFERENCES pk table name ( pk column name [ ,... ] ) NOT ENFORCED [ ADD ... ] ; Arguments project name : The name of the project containing the table with a primary key .
- ALTER TABLE fk table ADD PRIMARY KEY ( x , y ) NOT ENFORCED , ADD CONSTRAINT fk FOREIGN KEY ( u , v ) REFERENCES pk table ( x , y ) NOT ENFORCED , ADD CONSTRAINT fk2 FOREIGN KEY ( i , j ) REFERENCES pk table ( x , y ) NOT ENFORCED ; ALTER TABLE ADD PRIMARY KEY statement Adds a primary key to an existing table.
- Add a primary key to the pk table table: ALTER TABLE pk table ADD PRIMARY KEY ( x , y ) NOT ENFORCED ; Create a table named fk table for multiple foreign key constraints.
- Add a primary key to the pk table table: ALTER TABLE pk table ADD PRIMARY KEY ( x , y ) NOT ENFORCED ; Create a table named fk table for the foreign key.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Return type STRING Examples SELECT NORMALIZE ( 'The red barn' ) = NORMALIZE ( 'The Red Barn' ) AS normalized , NORMALIZE AND CASEFOLD ( 'The red barn' ) = NORMALIZE AND CASEFOLD ( 'The Red Barn' ) AS normalized with case folding ; / ------------+------------------------------+ normalized normalized with case folding +------------+------------------------------+ FALSE TRUE +------------+------------------------------ / SELECT ' \ u2168' AS a , 'IX' AS b , NORMALIZE AND CASEFOLD ( ' \ u2168' , NFD ) = NORMALIZE AND CASEFOLD ( 'IX' , NFD ) AS nfd , NORMALIZE AND CASEFOLD ( ' \ u2168' , NFC ) = NORMALIZE AND CASEFOLD ( 'IX' , NFC ) AS nfc , NORMALIZE AND CASEFOLD ( ' \ u2168' , NFKD ) = NORMALIZE AND CASEFOLD ( 'IX' , NFKD ) AS nfkd , NORMALIZE AND CASEFOLD ( ' \ u2168' , NFKC ) = NORMALIZE AND CASEFOLD ( 'IX' , NFKC ) AS nfkc ; / ---+----+-------+-------+------+------+ a b nfd nfc nfkd nfkc +---+----+-------+-------+------+------+ Ⅸ IX false false true true +---+----+-------+-------+------+------ / SELECT ' \ u0041 \ u030A' AS a , ' \ u00C5' AS b , NORMALIZE AND CASEFOLD ( ' \ u0041 \ u030A' , NFD ) = NORMALIZE AND CASEFOLD ( ' \ u00C5' , NFD ) AS nfd , NORMALIZE AND CASEFOLD ( ' \ u0041 \ u030A' , NFC ) = NORMALIZE AND CASEFOLD ( ' \ u00C5' , NFC ) AS nfc , NORMALIZE AND CASEFOLD ( ' \ u0041 \ u030A' , NFKD ) = NORMALIZE AND CASEFOLD ( ' \ u00C5' , NFKD ) AS nkfd , NORMALIZE AND CASEFOLD ( ' \ u0041 \ u030A' , NFKC ) = NORMALIZE AND CASEFOLD ( ' \ u00C5' , NFKC ) AS nkfc ; / ---+----+-------+-------+------+------+ a b nfd nfc nkfd nkfc +---+----+-------+-------+------+------+ Å Å true true true true +---+----+-------+-------+------+------ / OCTET LENGTH OCTET LENGTH ( value ) Alias for BYTE LENGTH .
- Return type STRING Examples The following example normalizes different language characters: SELECT NORMALIZE ( ' \ u00ea' ) as a , NORMALIZE ( ' \ u0065 \ u0302' ) as b , NORMALIZE ( ' \ u00ea' ) = NORMALIZE ( ' \ u0065 \ u0302' ) as normalized ; / ---+---+------------+ a b normalized +---+---+------------+ ê ê TRUE +---+---+------------ / The following examples normalize different space characters: SELECT NORMALIZE ( 'Raha \ u2004Mahan' , NFKC ) AS normalized name / -----------------+ normalized name +-----------------+ Raha Mahan +----------------- / SELECT NORMALIZE ( 'Raha \ u2005Mahan' , NFKC ) AS normalized name / -----------------+ normalized name +-----------------+ Raha Mahan +----------------- / SELECT NORMALIZE ( 'Raha \ u2006Mahan' , NFKC ) AS normalized name / -----------------+ normalized name +-----------------+ Raha Mahan +----------------- / SELECT NORMALIZE ( 'Raha Mahan' , NFKC ) AS normalized name / -----------------+ normalized name +-----------------+ Raha Mahan +----------------- / NORMALIZE AND CASEFOLD NORMALIZE AND CASEFOLD ( value [ , normalization mode ] ) Description Takes a string value and returns it as a normalized string.
- NFKD Normalization Form Compatibility Decomposition Decomposes characters by compatibility, and multiple combining characters are arranged in a specific order.
- NFKD Normalization Form Compatibility Decomposition Decomposes characters by compatibility, and multiple combining characters are arranged in a specific order.

### BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Warning: Do not grant service agent roles to any principals except service agents . compute. networkAttachments. create compute. networkAttachments. delete compute.networkAttachments.get compute. networkAttachments. list compute. networkAttachments. update compute.networks.get compute.networks.list compute.regionOperations.get compute.subnetworks.get compute.subnetworks.list compute.subnetworks.use dns. networks. targetWithPeeringZone managedkafka.clusters.get managedkafka.clusters.list managedkafka.clusters.update monitoring. metricDescriptors. create monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring.timeSeries.create serviceusage.services.use storage.objects.get Managed Flink Viewer Beta ( roles/ managedflink.viewer ) Readonly access to Managed Flink resources. managedflink.deployments.get managedflink.deployments.list managedflink.jobs.get managedflink.jobs.list managedflink.locations. managedflink.locations.get managedflink.locations.list managedflink.operations.get managedflink.operations.list managedflink.sessions.get managedflink.sessions.list resourcemanager.projects.get resourcemanager.projects.list BigQuery Migration Service roles This table lists the predefined IAM roles and permissions for BigQuery Migration Service.

