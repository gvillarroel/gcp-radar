---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.617Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Change data capture"
feature_slug: "change-data-capture"
latest_feature_date: "2023-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/change-data-capture"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "change"
  - "capture"
  - "applies"
  - "streamed"
  - "changes"
  - "real"
  - "time"
  - "existing"
---

# Change data capture

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Change data capture applies streamed changes in real time to existing data by using the BigQuery Storage Write API.

## Extended Definition

Change data capture applies streamed changes in real time to existing data by using the BigQuery Storage Write API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Stream table updates with change data capture ingestion \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- Source ID: `site-docs-reference-5`
- Final score: 313
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Stream table updates with change data capture ingestion BigQuery change data capture (CDC) ingestion updates your BigQuery tables by processing and applying streamed changes to existing data.
- To calculate the time it takes to apply upserted changes to an existing table, use the following SQL query to determine the 95th percentile duration of background apply jobs, plus a seven-minute buffer to allow for the BigQuery write-optimized storage (streaming buffer) conversion.
- Example with UPSERT and DELETE values Consider the following table in BigQuery: ID Name Salary 100 Charlie 2000 101 Tal 3000 102 Lee 5000 The following row modifications are streamed by the Storage Write API: ID Name Salary CHANGE TYPE 100 DELETE 101 Tal 8000 UPSERT 105 Izumi 6000 UPSERT The updated table is now the following: ID Name Salary 101 Tal 8000 102 Lee 5000 105 Izumi 6000 Manage table staleness By default, every time you run a query, BigQuery returns the most up-to-date results.
- This synchronization is accomplished through upsert and delete row operations that are streamed in real time by the BigQuery Storage Write API , which you should be familiar with before proceeding.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- AddDelta ( INOUT x INT64 , delta INT64 ) BEGIN SET x = x + delta ; END ; The following example calls the AddDelta procedure from the example above, passing it the variable accumulator both times; because the changes to x within AddDelta are visible outside of AddDelta , these procedure calls increment accumulator by a total of 8.
- Example The following example changes a capacity commitment to a three-year plan that is located in the region-us region and managed by a project admin project : ALTER CAPACITY admin project.region-us.my-commitment SET OPTIONS ( plan = 'THREE YEAR' ); ALTER RESERVATION SET OPTIONS statement Alters an existing reservation.
- Example: enable change history=TRUE Set this property to TRUE in order to capture change history on the table, which you can then view by using the CHANGES function .
- Example: enable change history=TRUE Set this property to TRUE in order to capture change history on the table, which you can then view by using the CHANGES function .

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Partner references BigQuery Source Connector Striim Solution Striim Platform Category ETL & Data Integration Description Striim is a proprietary software that offers a non-intrusive, real-time data ingestion (including change data capture) and replication from multiple data sources to Google Cloud - with support for some light in-flight transformations and enrichments.
- It is a no-code data ingestion and activation platform that empowers your business teams to capture first-party customer data, define audiences, and act on them in real-time.
- Partner references Connect Google BigQuery to Privacera Privacera Enhances Data Access Governance Add Google BigQuery (GBQ) data source on Privacera Platform Partner Advantage page Direct link Reltio Solution Reltio Connected Data Platform Category Data Governance, Security, & MDM Description The Reltio Connected Data Platform is a cloud-based data management platform that lets organizations create a unified, trusted real-time source for their core data.
- Partner references Creating a dataset using BigQuery Adding a new QuickSight dataset for BigQuery Unlock the power of unified business intelligence with BigQuery and Amazon QuickSight Amplitude Solution Amplitude Analytics Category BI, ML, & Advanced Analytics Description Amplitude is an event-based analytics tool that tracks the behaviors of users based on in-product interactions and analyzes user behavior in real-time.

