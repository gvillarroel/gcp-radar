---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.391Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery federated queries for Spanner PostgreSQL databases"
feature_slug: "bigquery-federated-queries-for-spanner-postgresql-databases"
latest_feature_date: "2025-09-22"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "Spanner PostgreSQL federation"
  - "Spanner PostgreSQL"
  - "federated external dataset"
  - "Spanner external query"
  - "GoogleSQL for Spanner"
  - "cross-region queries"
  - "federated queries"
  - "external datasets"
---

# BigQuery federated queries for Spanner PostgreSQL databases

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports GA federated queries against Spanner PostgreSQL dialect databases through BigQuery external datasets using GoogleSQL, including cross-region queries.

## Extended Definition

BigQuery supports federated queries that use GoogleSQL to read data from Spanner PostgreSQL dialect databases via BigQuery external datasets. The feature allows BigQuery to run queries against Spanner data, including cross-region federated query scenarios between BigQuery and Spanner regions.

## Evidence Summary

The BigQuery release notes entry dated September 22, 2025 states that federated queries against Spanner PostgreSQL dialect databases are supported through BigQuery external datasets using GoogleSQL and that this includes cross-region federated queries.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- September 22, 2025 Libraries Python 3.38.0 (2025-09-15) Features Add additional query stats ( #2270 ) ( 7b1b718 ) Feature You can now run federated queries against PostgreSQL dialect databases in Spanner using BigQuery external datasets with GoogleSQL; this includes cross-region federated queries .
- June 02, 2025 Libraries Go 1.69.0 (2025-05-27) Features bigquery/analyticshub: Add support for Analytics Hub & Marketplace Integration ( 2aaada3 ) bigquery/analyticshub: Adding allow only metadata sharing to Listing resource ( 2aaada3 ) bigquery/analyticshub: Adding CommercialInfo message to the Listing and Subscription resources ( 2aaada3 ) bigquery/analyticshub: Adding delete commercial and revoke commercial to DeleteListingRequest and RevokeSubscriptionRequest ( 2aaada3 ) bigquery/analyticshub: Adding DestinationDataset to the Subscription resource ( 2aaada3 ) bigquery/analyticshub: Adding routine field to the SharedResource message ( 2aaada3 ) bigquery: Add support for dataset view and update modes ( #12290 ) ( 7c1f961 ) bigquery: Job creation mode GA ( #12225 ) ( 1d8990d ) Libraries Node.js 8.1.0 (2025-05-29) Features Job creation mode GA ( #1480 ) ( b51359a ) Support per-job reservation assignment ( #1477 ) ( 8151e72 ) Libraries Python 3.34.0 (2025-05-27) Features Job creation mode GA ( #2190 ) ( 64cd39f ) Bug Fixes deps: Update all dependencies ( #2184 ) ( 12490f2 ) Documentation Update query.py ( #2192 ) ( 9b5ee78 ) Use query and wait in the array parameters sample ( #2202 ) ( 28a9994 ) Feature BigQuery now supports using Spanner external datasets with authorized views , authorized routines , and Cloud resource connections .
- Feature Spanner now supports cross regional federated queries from BigQuery which allow BigQuery users to query Spanner tables from regions other than their BigQuery region.
- August 14, 2025 Feature You can use cross region federated queries to query Spanner tables from regions other than the source BigQuery region.

