---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.859Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery INFORMATION_SCHEMA metadata views"
feature_slug: "bigquery-information-schema-metadata-views"
latest_feature_date: "2019-02-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "system metadata views"
  - "INFORMATION_SCHEMA.TABLES"
  - "INFORMATION_SCHEMA views"
  - "INFORMATION_SCHEMA.JOBS"
  - "BigQuery metadata views"
  - "metadata SQL views"
  - "INFORMATION_SCHEMA"
  - "information schema"
---

# BigQuery INFORMATION_SCHEMA metadata views

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery introduced INFORMATION_SCHEMA views for retrieving BigQuery resource metadata.

## Extended Definition

BigQuery introduced INFORMATION_SCHEMA views for retrieving BigQuery resource metadata.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-root-2`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: The page confirms jobs-related INFORMATION_SCHEMA usage, but does not establish a broader, general metadata-views feature set.

Evidence snippets:
- BigQuery provides job details and insights through the following INFORMATION SCHEMA views: INFORMATION SCHEMA.JOBS BY PROJECT INFORMATION SCHEMA.JOBS BY ORGANIZATION INFORMATION SCHEMA.JOBS BY USER Note: If you use organization restrictions, see Enable access to Google-owned resources .
- Filter jobs To filter jobs for queries that are contained in the INFORMATION SCHEMA.JOBS views, do the following: In the Google Cloud console, go to the BigQuery page.
- Jobs explorer removes the need for you to have a deep understanding of INFORMATION SCHEMA , and lets you quickly view job information such as owner, project, slot usage, duration, and more, without the need to write INFORMATION SCHEMA queries.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- For readability, some columns are excluded from the result. +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ table catalog table schema table name table type is insertable into creation time ddl +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ myproject mydataset mytable1 BASE TABLE YES 2018-10-29 20:34:44 CREATE TABLE myproject.mydataset.mytable1 ( id INT64 ); myproject mydataset myview1 VIEW NO 2018-12-29 00:19:20 CREATE VIEW myproject.mydataset.myview1 AS SELECT 100 as id; +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ Example 2: The following example retrieves table metadata for all tables of type CLONE or SNAPSHOT from the INFORMATION SCHEMA.TABLES view.
- For readability, some columns are excluded from the result. +--------------+------------+--------------------+-------------------+-----------------+---------------------+ table name table type base table catalog base table schema base table name snapshot time ms +--------------+------------+--------------------+-------------------+-----------------+---------------------+ items clone CLONE myproject mydataset items 2018-10-31 22:40:05 orders bk SNAPSHOT myproject mydataset orders 2018-11-01 08:22:39 +--------------+------------+--------------------+-------------------+-----------------+---------------------+ Example 3: The following example retrieves table name and ddl columns from the INFORMATION SCHEMA.TABLES view for the population by zip 2010 table in the census bureau usa dataset.
- The metadata that's returned is for all types of tables in mydataset in your default project. mydataset contains the following tables: mytable1 : a standard BigQuery table myview1 : a BigQuery view To run the query against a project other than your default project, add the project ID to the dataset in the following format: project id . dataset .INFORMATION SCHEMA. view ; for example, myproject.mydataset.INFORMATION SCHEMA.TABLES .
- Because the table you're querying is in another project, the bigquery-public-data project, you add the project ID to the dataset in the following format: project id . dataset .INFORMATION SCHEMA. view ; for example, bigquery-public-data.census bureau usa.INFORMATION SCHEMA.TABLES .

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: WEAK
- Re-rank rationale: This page addresses quota errors rather than metadata-view capabilities, so its relevance is limited to general operational context.

Evidence snippets:
- Error message Your project exceeded quota for copies per project Diagnosis If you'd like to gather more data about where the copy jobs are coming from, you can try the following: If your copy jobs are located in a single or only a few regions, you can try querying the INFORMATION SCHEMA.JOBS table for specific regions.
- For example, the following query uses the INFORMATION SCHEMA.JOBS view to list all quota-related errors within the past day: SELECT job id , creation time , error result FROM region- REGION NAME .
- Diagnosis To diagnose issues, do the following: Use INFORMATION SCHEMA views along with a region qualifier to analyze the underlying issue.
- Alternatively you can query INFORMATION SCHEMA.JOBS BY PROJECT to see your total extract bytes over a few days.

