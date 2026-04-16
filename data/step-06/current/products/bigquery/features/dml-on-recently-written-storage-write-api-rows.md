---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.442Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "DML on recently written Storage Write API rows"
feature_slug: "dml-on-recently-written-storage-write-api-rows"
latest_feature_date: "2024-07-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/data-manipulation-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest"
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial"
keywords:
  - "dml"
  - "recently"
  - "written"
  - "storage"
  - "write"
  - "rows"
  - "bigquery"
  - "supports"
---

# DML on recently written Storage Write API rows

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports using DML to modify rows that were recently written through the Storage Write API.

## Extended Definition

BigQuery supports using DML to modify rows that were recently written through the Storage Write API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest)
- [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)

## Supporting Pages

### BigQuery Reservation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest)
- Source ID: `site-api-reference-required-3`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://bigqueryreservation.googleapis.com REST Resource: v1.projects.locations Methods getBiReservation GET /v1/{name=projects/ /locations/ /biReservation} Retrieves a BI reservation. searchAllAssignments GET /v1/{parent=projects/ /locations/ }:searchAllAssignments Looks up assignments for a specified resource for a particular region. searchAssignments (deprecated) GET /v1/{parent=projects/ /locations/ }:searchAssignments Deprecated: Looks up assignments for a specified resource for a particular region. updateBiReservation PATCH /v1/{biReservation.name=projects/ /locations/ /biReservation} Updates a BI reservation.
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.capacityCommitments REST Resource: v1.projects.locations.reservationGroups REST Resource: v1.projects.locations.reservations REST Resource: v1.projects.locations.reservations.assignments Service: bigqueryreservation.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service provides the following discovery document: https://bigqueryreservation.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- Home Documentation Data analytics BigQuery Reference Send feedback BigQuery Reservation API Stay organized with collections Save and categorize content based on your preferences.

### "Transform data with data manipulation language (DML) \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- Source ID: `site-docs-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Alternatively, rows that were recently written using the Storage Write API can be modified using UPDATE , DELETE , MERGE , or TRUNCATE statements.
- Rows that were recently written using the tabledata.insertall streaming method can't be modified with data manipulation language (DML), such as UPDATE , DELETE , MERGE , or TRUNCATE statements.
- Metadata reflected within the INFORMATION SCHEMA.TABLE STORAGE views and INFORMATION SCHEMA.PARTITIONS views can temporarily include recently deleted data using fine-grained DML until background garbage collection jobs have completed.
- These costs include the following: BigQuery storage costs to store the extra mutation metadata that is associated with fine-grained DML operations.

### "Detect anomalies in multiple time series with the TimesFM model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run , the query takes 1-2 minutes to complete: WITH bike share trips AS ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) AS trip hour , COUNT ( ) AS num trips FROM bigquery-public-data.san francisco bikeshare.bikeshare trips GROUP BY TIMESTAMP TRUNC ( start date , HOUR ) ) SELECT FROM AI .
- Go to BigQuery In the query editor, paste in the following query and click Run : WITH bike share trips AS ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) AS trip hour , COUNT ( ) AS num trips , subscriber type FROM bigquery-public-data.san francisco bikeshare.bikeshare trips GROUP BY TIMESTAMP TRUNC ( start date , HOUR ), subscriber type ) SELECT FROM AI .
- Home Documentation Data analytics BigQuery Guides Send feedback Detect anomalies in multiple time series with the TimesFM model Stay organized with collections Save and categorize content based on your preferences.
- Costs This tutorial uses billable components of Google Cloud, including the following: BigQuery BigQuery ML For more information about BigQuery costs, see the BigQuery pricing page.

