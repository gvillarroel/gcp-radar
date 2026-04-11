---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.295Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing granular Cloud Functions cost export"
feature_slug: "cloud-billing-granular-cloud-functions-cost-export"
latest_feature_date: "2022-11-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery"
keywords:
  - "billing"
  - "granular"
  - "functions"
  - "cost"
  - "export"
  - "detailed"
  - "to"
  - "can"
---

# Cloud Billing granular Cloud Functions cost export

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing detailed export to BigQuery can now include granular Cloud Function instance cost data, filterable by resource.global_name.

## Extended Definition

Cloud Billing detailed export to BigQuery can now include granular Cloud Function instance cost data, filterable by resource.global_name.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery)

## Supporting Pages

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The detailed export includes granular cost information about the following services: AlloyDB for PostgreSQL App Engine BigQuery Bigtable Cloud Data Fusion Cloud Deploy Cloud Run functions Cloud Logging Cloud Run Cloud SQL Cloud Storage Compute Engine Dataflow Managed Service for Apache Spark Metastore Firestore and Datastore Google Kubernetes Engine (GKE) To view a breakdown of GKE cluster costs in a detailed data export, you must also enable cost allocation for GKE .
- When you use the detailed usage cost data in BigQuery, note the following: The table schema for the detailed Cloud Billing data export can change over time, such as when new fields are added to the detailed export.
- As of July 25th, 2023, SKUs for Cloud Run functions (2nd Gen) are included in the granular Cloud Run functions costs in Cloud Billing export to BigQuery.
- Managed Microsoft AD Memorystore for Redis Secret Manager Spanner Identify granular cost data by service To analyze granular cost information in a detailed export, use the following table to identify the column that contains information about specific resources.

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Prerequisites to generate and run a query To generate a query from a Cloud Billing Report , ensure you and your Cloud Billing account meet the following requirements: On your Cloud Billing account, Cloud Billing data export to BigQuery must be enabled, for either the standard usage cost data or detailed usage cost data .
- You can configure your Cloud Billing account to export data to BigQuery and then use BigQuery or your own tools to analyze the exported cost line items.
- For more information about Google Cloud project permissions, see: Access control for projects with IAM IAM basic and predefined roles reference Access the reports page To view the cost reports for your Cloud Billing account or project: Using the procedure that fits your level of access to Cloud Billing accounts , go to your Cloud Billing account in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.
- Related topics Export Cloud Billing data to BigQuery Understand your savings with cost breakdown reports View your cost and payment history Create, modify, or close your Cloud Billing account Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Export Cloud Billing data to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For your BigQuery datasets containing standard usage cost data or detailed usage cost data , the type of location you configure on the dataset impacts the timing of when your Google Cloud billing data is exported to the dataset: If you configure the dataset to use a multi-region location (EU or US), the dataset includes Google Cloud billing data incurred from the start of the previous month from when you first enabled the export.
- If your dataset is configured to use a supported region location , your standard usage cost data and your detailed usage cost data only reflect Google Cloud billing data incurred starting from the date you enabled Cloud Billing export, and after.
- The detailed export includes resource-level information for the following products: Compute Engine Google Kubernetes Engine (GKE) Cloud Run functions Cloud Run To view information about GKE, enable cost allocation in detailed exports .
- Standard usage cost table Detailed usage cost table Pricing table CUD metadata export Find example queries for Cloud Billing data For tips and guidance for using SQL to run queries on your Cloud Billing data, view the example queries .

