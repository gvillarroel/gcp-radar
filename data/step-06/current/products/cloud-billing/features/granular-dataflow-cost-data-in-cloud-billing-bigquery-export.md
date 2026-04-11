---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.270Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Granular Dataflow cost data in Cloud Billing BigQuery export"
feature_slug: "granular-dataflow-cost-data-in-cloud-billing-bigquery-export"
latest_feature_date: "2023-10-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data"
keywords:
  - "granular"
  - "dataflow"
  - "cost"
  - "in"
  - "billing"
  - "export"
  - "allows"
  - "filtering"
---

# Granular Dataflow cost data in Cloud Billing BigQuery export

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Allows filtering and viewing Dataflow usage cost records in the Cloud Billing Detailed export using resource fields.

## Extended Definition

Allows filtering and viewing Dataflow usage cost records in the Cloud Billing Detailed export using resource fields.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Related topics Export Cloud Billing data to BigQuery Understand your savings with cost breakdown reports View your cost and payment history Create, modify, or close your Cloud Billing account Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Prerequisites to generate and run a query To generate a query from a Cloud Billing Report , ensure you and your Cloud Billing account meet the following requirements: On your Cloud Billing account, Cloud Billing data export to BigQuery must be enabled, for either the standard usage cost data or detailed usage cost data .
- You can configure your Cloud Billing account to export data to BigQuery and then use BigQuery or your own tools to analyze the exported cost line items.
- To view the cost reports for your Cloud Billing account, including viewing the cost information for all of the Google Cloud projects that are linked to the billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.getSpendingInformation To gain these permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing To view all costs for an individual Google Cloud project, you need billing-specific permissions on the Google Cloud project .

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Standard SQL SELECT invoice . month , cost type , resource . name , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost 1000000 AS int64 )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount 1000000 as int64 )) FROM UNNEST ( credits ) c ), 0 ))) / 1000000 AS total exact FROM project . dataset . gcp billing export resource v1 XXXXXX XXXXXX XXXXXX GROUP BY 1 , 2 , 3 ORDER BY 1 ASC , 2 ASC , 3 ASC ; For example, the result of the preceding query might be: Row month cost type name total total exact 1 201901 regular null $1000.501209987994782 $1000.50 2 201901 rounding error null –$0.500489920049387 –$0.50 3 201901 tax null $10.000329958477891 $10.00 4 201901 adjustment null –$5.002572999387045 –$5.00 5 201901 regular backend1 $410.998795012082947 $411.00 2 201901 rounding error backend1 –$0.2404900489920378 –$0.24 3 201901 tax backend1 $4.105840329977189 $4.11 Get a breakdown of Google Kubernetes Engine (GKE) cluster costs This section provides examples of filtering GKE cluster costs in your BigQuery export reports.
- The detailed export includes granular cost information about the following services: AlloyDB for PostgreSQL App Engine BigQuery Bigtable Cloud Data Fusion Cloud Deploy Cloud Run functions Cloud Logging Cloud Run Cloud SQL Cloud Storage Compute Engine Dataflow Managed Service for Apache Spark Metastore Firestore and Datastore Google Kubernetes Engine (GKE) To view a breakdown of GKE cluster costs in a detailed data export, you must also enable cost allocation for GKE .
- Note: Some network data transfer, Cloud SQL backups in specific locations, and Storage Snapshot costs aren't included in the granular Cloud SQL instance costs in Cloud Billing export to BigQuery.
- As of July 25th, 2023, SKUs for Cloud Run functions (2nd Gen) are included in the granular Cloud Run functions costs in Cloud Billing export to BigQuery.

### "Structure of pricing data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- FROM my - billing - admin - project . my billing dataset . cloud pricing export as sku pricing , UNNEST ( sku pricing . list price . tiered rates ) as tier WHERE DATE ( PARTITIONTIME ) = "2020-07-20" AND sku . id = "2DA5-55D3-E679" ; Query results: Row sku id sku description service id service description pricing unit quantity start usage amount usd amount account currency amount 1 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run 1000000.0 0.0 0.0 0.0 2 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run 1000000.0 2000000.0 0.4 0.4 Related topics Topics related to exported Cloud Billing data Set up Cloud Billing data export to BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Structure of Detailed data export Next Structure of CUD metadata export arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Structure of pricing data export Stay organized with collections Save and categorize content based on your preferences.
- FROM my - billing - admin - project . my billing dataset . cloud pricing export as sku pricing , UNNEST ( sku pricing . list price . tiered rates ) as tier WHERE DATE ( PARTITIONTIME ) = "2020-07-20" AND sku . id = "2DA5-55D3-E679" ; Query results: Row sku id sku description service id service description pricing unit quantity start usage amount usd amount account currency amount 1 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run 1000000.0 0.0 0.0 0.0 2 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run 1000000.0 2000000.0 0.4 0.4 Use product taxonomy and geo taxonomy to query SKUs Beta This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- FROM my - billing - admin - project . my billing dataset . cloud pricing export WHERE DATE ( PARTITIONTIME ) = "2020-07-20" AND sku . id = "2DA5-55D3-E679" ; Query results: Row sku id sku description service id service description aggregation info. aggregation level aggregation info. aggregation interval tiered rates. pricing unit quantity tiered rates. start usage amount tiered rates. usd amount tiered rates. account currency amount 1 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run ACCOUNT MONTHLY 1000000 0 0 0 1000000 2000000 0.4 0.4 Example 2: Returns unnested data joined with the same table This example queries a single SKU to return the list price .

