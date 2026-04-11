---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.254Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing detailed export Managed Microsoft AD domain granularity"
feature_slug: "cloud-billing-detailed-export-managed-microsoft-ad-domain-granularity"
latest_feature_date: "2024-06-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage"
keywords:
  - "billing"
  - "detailed"
  - "export"
  - "managed"
  - "microsoft"
  - "ad"
  - "domain"
  - "granularity"
---

# Cloud Billing detailed export Managed Microsoft AD domain granularity

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing detailed export now supports granular Managed Microsoft Active Directory domain cost data, filterable by resource.name or resource.global_name.

## Extended Definition

Cloud Billing detailed export now supports granular Managed Microsoft Active Directory domain cost data, filterable by resource.name or resource.global_name.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)

## Supporting Pages

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Managed Microsoft AD Memorystore for Redis Secret Manager Spanner Identify granular cost data by service To analyze granular cost information in a detailed export, use the following table to identify the column that contains information about specific resources.
- When you use the detailed usage cost data in BigQuery, note the following: The table schema for the detailed Cloud Billing data export can change over time, such as when new fields are added to the detailed export.
- Detailed usage cost data schema In your BigQuery dataset, your detailed Google Cloud usage cost data is loaded into a data table named gcp billing export resource v1 <BILLING ACCOUNT ID> .
- After you enable GKE cost allocation, your detailed billing export starts including additional line items for your GKE resources from that date.

### Set up Cloud Billing data export to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup)
- Source ID: `site-docs-root-2`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- The service accounts look like this: For the Standard and Detailed usage cost datasets: billing-export-bigquery@system.gserviceaccount.com For the Pricing dataset: cloud-account-pricing@cloud-account-pricing.iam.gserviceaccount.com The service accounts are owned and managed by Google and provide the permissions that are necessary for our offline process to create a table and write Cloud Billing records to it.
- Resource-level tags are available for the following resources: Compute Engine instances Spanner instances Cloud Run services Artifact Registry repositories Related topics Topics related to exported Cloud Billing data Understanding the Cloud Billing data tables in BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Overview of billing data export to BigQuery Next Understand the billing data tables in BigQuery arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For your BigQuery datasets containing standard usage cost data or detailed usage cost data , the type of location you configure on the dataset impacts the timing of when your Google Cloud billing data is exported to the dataset: If you configure the dataset to use a multi-region location (EU or US), the dataset includes Google Cloud billing data incurred from the start of the previous month from when you first enabled the export.
- Permissions required for this task To enable and configure the export of Google Cloud billing usage cost data to a BigQuery dataset, you need the following permissions: For Cloud Billing, you need either the Billing Account Costs Manager role or the Billing Account Administrator role on the target Cloud Billing account.

### "Structure of Standard data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Row name project labels total cost total credits 1 CTG - Dev [{"key":"ctg p env","value":"dev"}] 79.140979 -4.763796 2 CTG - Prod [{"key":"ctg p env","value":"prod"},{"key":"ctg team","value":"eng"}] 32.466272 -3.073356 3 CTG - Sandbox [{"key":"ctg p env","value":"dev"}] 0 0 4 CTG - Storage [{"key":"ctg p env","value":"prod"},{"key":"ctg team","value":"data"}] 7.645793 -0.003761 Related topics Topics related to exported Cloud Billing data Set up Cloud Billing data export to BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Understand the billing data tables in BigQuery Next Structure of Detailed data export arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- SELECT invoice . month AS invoice month , ROUND (( SUM ( CAST ( cost AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS NUMERIC )) FROM UNNEST ( credits ) AS c ), 0 ))), 2 ) AS net cost FROM project - ID . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE "color" NOT IN ( SELECT key FROM UNNEST ( tags )) GROUP BY invoice month ORDER BY invoice month ; For example, the result of the preceding query might be: Row invoice month net cost 1 202202 0 2 202203 16.81 3 202204 54.09 4 202205 55.82 5 202206 54.09 6 202207 55.83 7 202208 31.49 Additional query examples Query costs and credits by project for a specified invoice month Note: See Google Cloud usage cost data in BigQuery for a detailed schema.
- Standard SQL SELECT invoice . month , cost type , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost 1000000 AS int64 )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount 1000000 as int64 )) FROM UNNEST ( credits ) c ), 0 ))) / 1000000 AS total exact FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX GROUP BY 1 , 2 ORDER BY 1 ASC , 2 ASC ; For example, the result of the preceding query might be: Row month cost type total total exact 1 201901 regular $1000.501209987994782 $1000.50 2 201901 rounding error –$0.500489920049387 –$0.50 3 201901 tax $10.000329958477891 $10.00 4 201901 adjustment –$5.002572999387045 –$5.00 Query examples with labels Note: Certain fields such as labels and credits are repeated.
- Standard SQL SELECT labels . value as environment , SUM ( cost ) as cost FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX LEFT JOIN UNNEST ( labels ) as labels ON labels . key = "environment" GROUP BY environment ; Legacy SQL SELECT labels . value as environment , SUM ( cost ) as cost FROM [ project : dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX ] WHERE labels . key = "environment" OR labels . key IS NULL GROUP BY environment ; Row environment cost 1 prod $15 2 dev $5 3 null $4 TOTAL $24 Note: The total cost should add up to the same amount as a group by label map query.

