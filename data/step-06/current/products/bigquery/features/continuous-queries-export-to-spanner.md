---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.316Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Continuous queries export to Spanner"
feature_slug: "continuous-queries-export-to-spanner"
latest_feature_date: "2025-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "continuous"
  - "queries"
  - "export"
  - "spanner"
  - "can"
  - "bigquery"
  - "real"
  - "time"
---

# Continuous queries export to Spanner

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Continuous queries can export BigQuery data to Spanner in real time.

## Extended Definition

Continuous queries can export BigQuery data to Spanner in real time.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### Introduction to continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Writes from the results of a batch query to a permanent table Writes from the results of a BigQuery continuous query to a permanent table A Pub/Sub BigQuery subscription Writes from Dataflow to BigQuery Writes from Datastream to BigQuery using append-only write mode You can use continuous queries to perform time-sensitive tasks, such as creating and immediately acting on insights, applying real-time machine learning (ML) inference, and replicating data into other platforms.
- Continuous queries let you analyze incoming data in BigQuery in real time.
- Continuous queries can process data that has been written to standard BigQuery tables by using one of the following methods: The BigQuery Storage Write API The tabledata.insertAll method Batch load The INSERT DML statement Mutating data manipulation language (DML) statements such as DELETE , UPDATE , and MERGE when exporting data to Pub/Sub .
- Data enrichment and entity extraction : use continuous queries to perform real-time data enrichment and transformation by using SQL functions and ML models.

### Create continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)
- Source ID: `site-docs-reference-5`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Continuous queries let you analyze incoming data in BigQuery in real time, and then either export the results to Bigtable, Pub/Sub, or Spanner, or write the results to a BigQuery table.
- CURRENT TIMESTAMP () - INTERVAL 10 MINUTE ) WHERE ride status = 'enroute' ); Export data to a Spanner table The following example shows a continuous query that filters data from a BigQuery table that is receiving streaming taxi ride information, and then exports the data into a Spanner table in real time: EXPORT DATA OPTIONS ( format = 'CLOUD SPANNER' , uri = 'https://spanner.googleapis.com/projects/myproject/instances/myspannerinstance/databases/taxi-real-time-rides' , spanner options = " "" { " table ": " rides ", -- To ensure data is written to Spanner in the correct sequence -- during a continuous export, use the change timestamp column -- option.
- CURRENT TIMESTAMP () - INTERVAL 10 MINUTE ) WHERE CHANGE TYPE = 'DELETE' ); Export data to a Bigtable table The following example shows a continuous query that filters data from a BigQuery table that is receiving streaming taxi ride information, and exports the data into a Bigtable table in real time: EXPORT DATA OPTIONS ( format = 'CLOUD BIGTABLE' , truncate = TRUE , overwrite = TRUE , uri = 'https://bigtable.googleapis.com/projects/myproject/instances/mybigtableinstance/tables/taxi-real-time-rides' ) AS ( SELECT CAST ( CONCAT ( ride id , timestamp , latitude , longitude ) AS STRING ) AS rowkey , STRUCT ( timestamp , latitude , longitude , meter reading , ride status , passenger count ) AS features FROM APPENDS ( TABLE myproject.real time taxi streaming.taxirides , -- Configure the APPENDS TVF start timestamp to specify when you want to -- start processing data using your continuous query. -- This example starts processing at 10 minutes before the current time.
- Export data to a Pub/Sub topic The following example shows a continuous query that filters data from a BigQuery table that is receiving streaming taxi ride information, and publishes the data for cancelled rides to a Pub/Sub topic in real time with message attributes: EXPORT DATA OPTIONS ( format = 'CLOUD PUBSUB' , uri = 'https://pubsub.googleapis.com/projects/myproject/topics/taxi-real-time-rides' ) AS ( SELECT TO JSON STRING ( STRUCT ( ride id , timestamp , latitude , longitude )) AS message , TO JSON ( STRUCT ( CAST ( passenger comment AS STRING ) AS passenger comment )) FROM CHANGES ( TABLE myproject.real time taxi streaming.taxi rides , -- Configure the CHANGES TVF start timestamp to specify when you want to -- start processing data using your continuous query. -- This example starts processing at 10 minutes before the current time.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Connect Google BigQuery to Privacera Privacera Enhances Data Access Governance Add Google BigQuery (GBQ) data source on Privacera Platform Partner Advantage page Direct link Reltio Solution Reltio Connected Data Platform Category Data Governance, Security, & MDM Description The Reltio Connected Data Platform is a cloud-based data management platform that lets organizations create a unified, trusted real-time source for their core data.
- Partner references Creating a dataset using BigQuery Adding a new QuickSight dataset for BigQuery Unlock the power of unified business intelligence with BigQuery and Amazon QuickSight Amplitude Solution Amplitude Analytics Category BI, ML, & Advanced Analytics Description Amplitude is an event-based analytics tool that tracks the behaviors of users based on in-product interactions and analyzes user behavior in real-time.
- Partner references Connecting Google BigQuery to Tellius Configuring direct connection to Google BigQuery from Tellius Partner Advantage page Direct link ThoughtSpot Solution ThoughtSpot Analytics Category BI, ML, & Advanced Analytics Description ThoughtSpot is a business intelligence and big data analytics platform that helps you explore, analyze and share real-time business analytics data easily.
- Partner references Improvado BigQuery Setup Guide Centralize your data in BigQuery BigQuery managed by Improvado Partner Advantage page Direct link Journify.io Solution Journify CDP Category BI, ML, & Advanced Analytics Description Journify - The Composable Customer Data Platform that helps marketers collect and unify customer profiles, define dynamic audiences, and activate them in real-time.

