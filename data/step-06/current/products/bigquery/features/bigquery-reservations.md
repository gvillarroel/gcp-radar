---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.787Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Reservations"
feature_slug: "bigquery-reservations"
latest_feature_date: "2020-04-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "bigquery"
  - "reservations"
  - "lets"
  - "you"
  - "purchase"
  - "slots"
  - "flat"
  - "rate"
---

# BigQuery Reservations

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Reservations lets you purchase slots for flat-rate pricing and allocate them for workload management; BigQuery Reservations lets customers purchase and allocate slots for workload management and flat-rate pricing.

## Extended Definition

BigQuery Reservations lets you purchase slots for flat-rate pricing and allocate them for workload management; BigQuery Reservations lets customers purchase and allocate slots for workload management and flat-rate pricing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- This project acts as the BigQuery reservations admininistration project , enabling organization-wide sharing of slots.
- A dataset-per-tenant design helps to mitigate the following concerns that an organization experiences when it scales to thousands of tenants: Administrative complexity : the total number of new projects and cloud resources on a per customer basis End-to-end latency : how up to date the datastore is for both the tenants and cross-customer analytics solutions Performance expectations : ensuring that tenant performance stays within acceptable limits Configure datasets for each tenant Within a project that is dedicated to storing customer data, each customer's data is separated by BigQuery datasets.
- Copy datasets for multiregional configurations Because BigQuery disallows cross-regional queries, you can't use the strategy of segmenting data with authorized views when data marts must exist across multiple regions.
- When you use decentralized authority, you maintain central control of security and BigQuery capacity by using Cloud Key Management Service (Cloud KMS) , column policies, VPC Service Controls, and reservations.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Must be one of the following: ANNUAL THREE YEAR NONE Customers using legacy flat-rate pricing also may use one of the following values: FLEX MONTHLY ANNUAL --project id= PROJECT ID Specifies the project that administers the slots. --slots= NUMBER OF BASELINE SLOTS Specifies the number of baseline slots to purchase. --edition= EDITION The edition associated with the capacity commitment.
- For information about using the bq mk command with the BigQuery Data Transfer Service, see the following: Set up an Amazon S3 transfer Set up a Campaign Manager transfer Set up a Cloud Storage transfer Set up a Google Ad Manager transfer Set up a Google Ads transfer Set up a Google Merchant Center transfer (beta) Set up a Google Play transfer Set up a Search Ads 360 transfer (beta) Set up a YouTube Channel transfer Set up a YouTube Content Owner transfer Migrate data from Amazon Redshift Migrate data from Teradata bq mk --transfer run Creates a data transfer run at the specified time or time range using the specified data transfer configuration.
- Replace PLAN with one of the following: ANNUAL THREE YEAR NONE Customers using legacy flat-rate pricing also may use one of the following values: FLEX MONTHLY ANNUAL --reservation={true false} Specifies whether to update a reservation.
- Must be one of the following values: ANNUAL THREE YEAR Customers using legacy flat-rate pricing also may use one of the following values: FLEX MONTHLY ANNUAL --renewal plan= RENEWAL TYPE Specifies the renewal plan type .

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "io" "cloud.google.com/go/bigquery" ) // queryDryRun demonstrates issuing a dry run query to validate query structure and // provide an estimate of the bytes scanned. func queryDryRun ( w io .
- Project is assigned to a reservation, but still seeing BigQuery Analysis on-demand costs Read through the Troubleshooting issues with reservations section to identify where the Analysis charges might be coming from.
- Unexpected charges for pay-as-you go (PAYG) slots for the BigQuery Standard edition In the Cloud Billing report, apply a filter with the label goog-bq-feature-type with the value BQ STUDIO NOTEBOOK .
- Unexpected charges for pay-as-you go (PAYG) slots for the BigQuery Enterprise edition In the Cloud Billing report, apply a filter with the label goog-bq-feature-type with the value SPARK PROCEDURE .

