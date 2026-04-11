---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.449Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery external dataset for Spanner"
feature_slug: "bigquery-external-dataset-for-spanner"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "Cloud Spanner database link"
  - "BigQuery external dataset for Spanner"
  - "external dataset connection"
  - "Spanner external data source"
  - "federated query to Spanner"
  - "Spanner external dataset"
  - "CREATE EXTERNAL DATASET"
  - "external dataset"
---

# BigQuery external dataset for Spanner

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports creating external datasets that link to an existing Spanner database.

## Extended Definition

BigQuery external dataset for Spanner is a BigQuery capability that allows creating an external dataset that links to an existing Cloud Spanner database, enabling BigQuery to query that Spanner data through federation. According to BigQuery release notes, this includes support for running federated queries against Spanner from BigQuery, with related support for authorized views, authorized routines, and Cloud resource connections when using Spanner external datasets.

## Evidence Summary

The BigQuery release notes explicitly announce support for BigQuery external datasets linked to Spanner databases and describe related federated-query and authorized-access capabilities.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- June 02, 2025 Libraries Go 1.69.0 (2025-05-27) Features bigquery/analyticshub: Add support for Analytics Hub & Marketplace Integration ( 2aaada3 ) bigquery/analyticshub: Adding allow only metadata sharing to Listing resource ( 2aaada3 ) bigquery/analyticshub: Adding CommercialInfo message to the Listing and Subscription resources ( 2aaada3 ) bigquery/analyticshub: Adding delete commercial and revoke commercial to DeleteListingRequest and RevokeSubscriptionRequest ( 2aaada3 ) bigquery/analyticshub: Adding DestinationDataset to the Subscription resource ( 2aaada3 ) bigquery/analyticshub: Adding routine field to the SharedResource message ( 2aaada3 ) bigquery: Add support for dataset view and update modes ( #12290 ) ( 7c1f961 ) bigquery: Job creation mode GA ( #12225 ) ( 1d8990d ) Libraries Node.js 8.1.0 (2025-05-29) Features Job creation mode GA ( #1480 ) ( b51359a ) Support per-job reservation assignment ( #1477 ) ( 8151e72 ) Libraries Python 3.34.0 (2025-05-27) Features Job creation mode GA ( #2190 ) ( 64cd39f ) Bug Fixes deps: Update all dependencies ( #2184 ) ( 12490f2 ) Documentation Update query.py ( #2192 ) ( 9b5ee78 ) Use query and wait in the array parameters sample ( #2202 ) ( 28a9994 ) Feature BigQuery now supports using Spanner external datasets with authorized views , authorized routines , and Cloud resource connections .
- September 22, 2025 Libraries Python 3.38.0 (2025-09-15) Features Add additional query stats ( #2270 ) ( 7b1b718 ) Feature You can now run federated queries against PostgreSQL dialect databases in Spanner using BigQuery external datasets with GoogleSQL; this includes cross-region federated queries .
- Feature You can now create an external dataset in BigQuery that links to an existing database in Spanner .

