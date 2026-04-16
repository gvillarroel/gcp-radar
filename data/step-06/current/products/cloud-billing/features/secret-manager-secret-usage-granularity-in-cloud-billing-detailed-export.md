---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.554Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Secret Manager secret usage granularity in Cloud Billing detailed export"
feature_slug: "secret-manager-secret-usage-granularity-in-cloud-billing-detailed-export"
latest_feature_date: "2024-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup"
keywords:
  - "secret"
  - "manager"
  - "usage"
  - "granularity"
  - "billing"
  - "detailed"
  - "export"
  - "bigquery"
---

# Secret Manager secret usage granularity in Cloud Billing detailed export

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Cloud Billing detailed export to BigQuery now includes granular Secret Manager secret usage data for filtering by resource fields.

## Extended Definition

Cloud Billing detailed export to BigQuery now includes granular Secret Manager secret usage data for filtering by resource fields.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup)

## Supporting Pages

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Resource-level tags in the Cloud Billing data export are available for the following resources: AlloyDB for PostgreSQL clusters, instances, and backups Artifact Registry repositories Bigtable instances Cloud Run services and jobs Cloud Storage buckets Compute Engine instances Memorystore for Redis instances Secret Manager global and regional secrets Spanner instances Firestore databases Tags limitations Tags might take up to an hour to propagate to BigQuery exports.
- When you use the detailed usage cost data in BigQuery, note the following: The table schema for the detailed Cloud Billing data export can change over time, such as when new fields are added to the detailed export.
- Detailed usage cost data schema In your BigQuery dataset, your detailed Google Cloud usage cost data is loaded into a data table named gcp billing export resource v1 <BILLING ACCOUNT ID> .
- Before you begin To query using system labels, you must have Cloud Billing export to BigQuery enabled, specifically the Detailed usage cost data export.

### "Structure of Standard data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SELECT invoice . month AS invoice month , ROUND (( SUM ( CAST ( cost AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS NUMERIC )) FROM UNNEST ( credits ) AS c ), 0 ))), 2 ) AS net cost FROM project - ID . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE "color" NOT IN ( SELECT key FROM UNNEST ( tags )) GROUP BY invoice month ORDER BY invoice month ; For example, the result of the preceding query might be: Row invoice month net cost 1 202202 0 2 202203 16.81 3 202204 54.09 4 202205 55.82 5 202206 54.09 6 202207 55.83 7 202208 31.49 Additional query examples Query costs and credits by project for a specified invoice month Note: See Google Cloud usage cost data in BigQuery for a detailed schema.
- Resource-level tags in the Cloud Billing data export are available for the following resources: AlloyDB for PostgreSQL clusters, instances, and backups Artifact Registry repositories Bigtable instances Cloud Run services and jobs Cloud Storage buckets Compute Engine instances Memorystore for Redis instances Secret Manager global and regional secrets Spanner instances Firestore databases Tags limitations Tags might take up to an hour to propagate to BigQuery exports.
- Common values used in the example standard cost queries The query examples in this section use the following value for Table name : project.dataset.gcp billing export v1 XXXXXX XXXXXX XXXXXX These query examples also work with the detailed usage cost data exported to BigQuery, although they aren't written to retrieve any of the resource-level information that's provided with the detailed usage cost export option.
- Detailed usage cost table : In your BigQuery dataset, this table is named gcp billing export resource v1 <BILLING ACCOUNT ID> .

### Set up Cloud Billing data export to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For your BigQuery datasets containing standard usage cost data or detailed usage cost data , the type of location you configure on the dataset impacts the timing of when your Google Cloud billing data is exported to the dataset: If you configure the dataset to use a multi-region location (EU or US), the dataset includes Google Cloud billing data incurred from the start of the previous month from when you first enabled the export.
- The service accounts look like this: For the Standard and Detailed usage cost datasets: billing-export-bigquery@system.gserviceaccount.com For the Pricing dataset: cloud-account-pricing@cloud-account-pricing.iam.gserviceaccount.com The service accounts are owned and managed by Google and provide the permissions that are necessary for our offline process to create a table and write Cloud Billing records to it.
- Permissions required for this task To enable and configure the export of Google Cloud billing usage cost data to a BigQuery dataset, you need the following permissions: For Cloud Billing, you need either the Billing Account Costs Manager role or the Billing Account Administrator role on the target Cloud Billing account.
- Specifically, to create a new project, you need the following permissions: resourcemanager.organizations.get resourcemanager.projects.create For more information about Google Cloud permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding Predefined Identity and Access Management Roles Enable Cloud Billing data export to BigQuery Interactive tutorial: Analyze billing data with BigQuery (20 minutes) Get started with billing data exports using this interactive tutorial.

