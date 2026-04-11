---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.421Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Spanner external datasets with authorized access"
feature_slug: "bigquery-spanner-external-datasets-with-authorized-access"
latest_feature_date: "2025-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "BigQuery Spanner external dataset"
  - "Spanner to BigQuery external data"
  - "Spanner authorized access"
  - "BigQuery Spanner integration"
  - "Cloud resource connections"
  - "Spanner external datasets"
  - "authorized routines"
  - "authorized views"
---

# BigQuery Spanner external datasets with authorized access

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports using Spanner external datasets with authorized views, authorized routines, and Cloud resource connections.

## Extended Definition

As of June 2, 2025, BigQuery added support for using Cloud Spanner external datasets with authorized views, authorized routines, and Cloud resource connections. This feature enables authorized-access patterns when reading Spanner data in BigQuery through external dataset integration and connection-based access configuration. Google’s quota documentation further indicates that BigQuery dataset access control for authorized entities is quota-limited (for example, up to 2,500 authorized resources per dataset, including authorized views), so authorization at this scope is governed by documented limits.

## Evidence Summary

The release notes confirm the Spanner external datasets feature and its authorized views/routines/Cloud resource connections support, while quota documentation provides supporting constraints on authorized-access entries in dataset ACLs.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- June 02, 2025 Libraries Go 1.69.0 (2025-05-27) Features bigquery/analyticshub: Add support for Analytics Hub & Marketplace Integration ( 2aaada3 ) bigquery/analyticshub: Adding allow only metadata sharing to Listing resource ( 2aaada3 ) bigquery/analyticshub: Adding CommercialInfo message to the Listing and Subscription resources ( 2aaada3 ) bigquery/analyticshub: Adding delete commercial and revoke commercial to DeleteListingRequest and RevokeSubscriptionRequest ( 2aaada3 ) bigquery/analyticshub: Adding DestinationDataset to the Subscription resource ( 2aaada3 ) bigquery/analyticshub: Adding routine field to the SharedResource message ( 2aaada3 ) bigquery: Add support for dataset view and update modes ( #12290 ) ( 7c1f961 ) bigquery: Job creation mode GA ( #12225 ) ( 1d8990d ) Libraries Node.js 8.1.0 (2025-05-29) Features Job creation mode GA ( #1480 ) ( b51359a ) Support per-job reservation assignment ( #1477 ) ( 8151e72 ) Libraries Python 3.34.0 (2025-05-27) Features Job creation mode GA ( #2190 ) ( 64cd39f ) Bug Fixes deps: Update all dependencies ( #2184 ) ( 12490f2 ) Documentation Update query.py ( #2192 ) ( 9b5ee78 ) Use query and wait in the array parameters sample ( #2202 ) ( 28a9994 ) Feature BigQuery now supports using Spanner external datasets with authorized views , authorized routines , and Cloud resource connections .
- April 02, 2026 Feature You can now use the CREATE CONNECTION , ALTER CONNECTION SET OPTIONS , and DROP CONNECTION data definition language (DDL) statements to manage Cloud resource connections with GoogleSQL.
- March 26, 2026 Feature You can now use Cloud resource connections with EXPORT DATA statements to reverse ETL BigQuery data to Spanner.
- September 09, 2025 Feature You can configure reusable, default Cloud resource connections in a project.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Resolution A dataset's access control list can have up to 2,500 total authorized resources, including authorized views , authorized datasets , and authorized functions .
- If you exceed this limit due to a large number of authorized views, consider grouping the views into authorized datasets.
- Error message Quota exceeded for quota metric 'Authorized Views per dataset' and limit '2500'.
- Quota exceeded for quota metric 'Authorized Views per dataset' and limit '2500'.

