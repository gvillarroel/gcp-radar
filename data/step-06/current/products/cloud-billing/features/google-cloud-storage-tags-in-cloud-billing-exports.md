---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.263Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Google Cloud Storage tags in Cloud Billing exports"
feature_slug: "google-cloud-storage-tags-in-cloud-billing-exports"
latest_feature_date: "2024-03-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
keywords:
  - "storage"
  - "tags"
  - "in"
  - "billing"
  - "exports"
  - "now"
  - "include"
  - "bucket"
---

# Google Cloud Storage tags in Cloud Billing exports

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing exports now include Google Cloud Storage bucket tag data in both Standard and Detailed usage cost exports.

## Extended Definition

Cloud Billing exports now include Google Cloud Storage bucket tag data in both Standard and Detailed usage cost exports.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator](https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)

## Supporting Pages

### Find a Billing Account Administrator \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator](https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- On the Cloud Billing account, you need a role that includes the following permissions : billing.accounts.get billing.accounts.getIamPolicy These permissions are granted in many predefined roles for Cloud Billing , including: Billing Account User Billing Account Viewer Billing Account Costs Manager Billing Account Administrator If you have some level of Cloud Billing account access, you can view basic information about the billing account, including viewing the Info panel to identify the administrators and other principals within your organization who have billing account permissions.
- If all else fails : If you have no way to know who your Billing Account Administrators are and you (or your organization) have lost access to your Cloud Billing account and you need to regain access, you can contact Cloud Billing Support using the account recovery form .
- Note: Neither the Billing Account Creator role (which is granted at the Organization level) nor the Project Billing Manager role (which is granted on a project) include the permissions needed to access basic information about the billing account.
- Billing Account Administrators can manage payment instruments, pay bills, configure billing data exports, view cost information, link and unlink projects, and manage user permissions on the billing account.

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- To view the cost reports for your Cloud Billing account, including viewing the cost information for all of the Google Cloud projects that are linked to the billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.getSpendingInformation To gain these permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing To view all costs for an individual Google Cloud project, you need billing-specific permissions on the Google Cloud project .
- To view the Cloud Billing reports for a project, you need a role on the Google Cloud project that includes the following permissions : billing.resourceCosts.get resourcemanager.projects.get To gain these permissions using a predefined role , ask your administrator to grant you one of the following basic IAM roles on your Google Cloud projects: Project Viewer Project Editor Project Owner Note : If you are viewing Cloud Billing reports using project-level permissions only, some of the billing-account-level report features aren't available.
- FROM - The full path to the data table that contains the Cloud Billing data exported to BigQuery , specified using three values separated by dots: project-ID.BQ dataset name.BQ table name WHERE - Equivalent to the Report's Time range setting and includes any specific, non-default filter settings you selected on the report.
- When viewing costs by Invoice month , the following data is available in the Cloud Billing reports: Invoices generally include all costs incurred during a given calendar month, but the cost for some services' usage at the very end of a calendar month might roll over to the next month's invoice.

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Resource-level tags in the Cloud Billing data export are available for the following resources: AlloyDB for PostgreSQL clusters, instances, and backups Artifact Registry repositories Bigtable instances Cloud Run services and jobs Cloud Storage buckets Compute Engine instances Memorystore for Redis instances Secret Manager global and regional secrets Spanner instances Firestore databases Tags limitations Tags might take up to an hour to propagate to BigQuery exports.
- Available tags The Standard costs and Detailed costs exports for Resources, Projects, Folders, and Organizations include these fields for tags data: Tags Key, Tags Value, Tags Inherited, and Tags Namespace.
- Note: Some network data transfer, Cloud SQL backups in specific locations, and Storage Snapshot costs aren't included in the granular Cloud SQL instance costs in Cloud Billing export to BigQuery.
- GKE cluster costs before credits SELECT SUM ( cost ) AS cost before credits , labels . value AS cluster name FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX LEFT JOIN UNNEST ( labels ) as labels ON labels . key = "goog-k8s-cluster-name" GROUP BY labels . value ; GKE costs after credits by namespace SELECT labels . value as namespace , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS cost after credits , FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX LEFT JOIN UNNEST ( labels ) as labels ON labels . key = "k8s-namespace" GROUP BY namespace ; GKE costs by SKU SELECT project . id AS project id , labels . value AS cluster name , sku . id AS sku id , sku . description AS sku description , SUM ( cost ) AS cost FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX JOIN UNNEST ( labels ) AS labels ON labels . key = "goog-k8s-cluster-name" GROUP BY cluster name , project id , sku description , sku id ; Query examples with tags The following examples illustrate ways to query your data with tags.

