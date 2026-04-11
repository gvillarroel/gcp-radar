---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.396Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Reusable default Cloud resource connections in BigQuery"
feature_slug: "reusable-default-cloud-resource-connections-in-bigquery"
latest_feature_date: "2025-09-09"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "reusable resource connection"
  - "default Cloud resource connection"
  - "shared connection resource"
  - "reusable connection"
  - "set default connection"
  - "connection configuration"
  - "Cloud resource connections"
  - "default connection"
---

# Reusable default Cloud resource connections in BigQuery

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now allows projects to configure reusable default Cloud resource connections.

## Extended Definition

BigQuery’s reusable default Cloud resource connection feature lets a project define a default connection that BigQuery can use automatically when creating tables or models. The feature is reflected in SQL connection configuration through DDL and options (for example, a `default cloud resource connection` and the ability to use `DEFAULT` in place of an explicit project-scoped connection string), which indicates project-level and SQL-native reuse of a shared connection.

## Evidence Summary

The release notes announce the feature and the DDL/options reference documents how a default Cloud resource connection is defined and referenced in BigQuery SQL workflows.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- September 09, 2025 Feature You can configure reusable, default Cloud resource connections in a project.
- March 12, 2025 Feature You can configure reusable, default Cloud resource connections in a project.
- June 02, 2025 Libraries Go 1.69.0 (2025-05-27) Features bigquery/analyticshub: Add support for Analytics Hub & Marketplace Integration ( 2aaada3 ) bigquery/analyticshub: Adding allow only metadata sharing to Listing resource ( 2aaada3 ) bigquery/analyticshub: Adding CommercialInfo message to the Listing and Subscription resources ( 2aaada3 ) bigquery/analyticshub: Adding delete commercial and revoke commercial to DeleteListingRequest and RevokeSubscriptionRequest ( 2aaada3 ) bigquery/analyticshub: Adding DestinationDataset to the Subscription resource ( 2aaada3 ) bigquery/analyticshub: Adding routine field to the SharedResource message ( 2aaada3 ) bigquery: Add support for dataset view and update modes ( #12290 ) ( 7c1f961 ) bigquery: Job creation mode GA ( #12225 ) ( 1d8990d ) Libraries Node.js 8.1.0 (2025-05-29) Features Job creation mode GA ( #1480 ) ( b51359a ) Support per-job reservation assignment ( #1477 ) ( 8151e72 ) Libraries Python 3.34.0 (2025-05-27) Features Job creation mode GA ( #2190 ) ( 64cd39f ) Bug Fixes deps: Update all dependencies ( #2184 ) ( 12490f2 ) Documentation Update query.py ( #2192 ) ( 9b5ee78 ) Use query and wait in the array parameters sample ( #2202 ) ( 28a9994 ) Feature BigQuery now supports using Spanner external datasets with authorized views , authorized routines , and Cloud resource connections .
- April 02, 2026 Feature You can now use the CREATE CONNECTION , ALTER CONNECTION SET OPTIONS , and DROP CONNECTION data definition language (DDL) statements to manage Cloud resource connections with GoogleSQL.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Example: region-us.default query optimizer options = 'adaptive=on' default cloud resource connection id STRING The default connection to use when creating tables and models (Preview).
- Sets the default connection to connection 1 in the us region. default sql dialect option STRING The default sql query dialect for executing query jobs using the bq command-line tool or BigQuery API.
- Using default connections can cause the permissions granted to the connection's service account to be updated, depending on the type of table or model you create.
- To use a default connection , specify DEFAULT instead of the connection string containing PROJECT ID .

