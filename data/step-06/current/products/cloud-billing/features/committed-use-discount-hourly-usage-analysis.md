---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.589Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Committed Use Discount hourly usage analysis"
feature_slug: "committed-use-discount-hourly-usage-analysis"
latest_feature_date: "2023-01-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible"
keywords:
  - "committed"
  - "use"
  - "discount"
  - "hourly"
  - "usage"
  - "analysis"
  - "cud"
  - "dashboard"
---

# Committed Use Discount hourly usage analysis

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

The CUD Analysis dashboard now supports viewing usage data at an hourly granularity to assess spend-based or resource-based committed use discounts.

## Extended Definition

The CUD Analysis dashboard now supports viewing usage data at an hourly granularity to assess spend-based or resource-based committed use discounts.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible)

## Supporting Pages

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Note: The first full day of data with this field is January 22, 2018. credits Struct credits contains fields that describe the structure and value of the credits associated with Google Cloud and Google Maps Platform SKUs. credits.id String If present, indicates that a credit is associated with the product SKU. credits.id values are either an alphanumeric unique identifier (for example, 12-b34-c56-d78 ), or a description of the credit type (such as Committed Usage Discount: CPU ).
- COMMITTED USAGE DISCOUNT DOLLAR BASE : For legacy spend-based committed use discounts (CUDs) that aren't part of the new pricing model , this is the credit earned in exchange for your commitment to spend a minimum amount for a service in a particular region.
- If the value of the credits.id is a description of the credit type (such as Committed Usage Discount: CPU ), then the credits.full name field is empty.
- COMMITTED USAGE DISCOUNT : Resource-based committed use contracts purchased for Compute Engine in return for deeply discounted prices for VM usage.

### "Structure of Standard data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- Source ID: `site-docs-root-2`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Note: The first full day of data with this field is January 22, 2018. credits Struct credits contains fields that describe the structure and value of the credits associated with Google Cloud and Google Maps Platform SKUs. credits.id String If present, indicates that a credit is associated with the product SKU. credits.id values are either an alphanumeric unique identifier (for example, 12-b34-c56-d78 ), or a description of the credit type (such as Committed Usage Discount: CPU ).
- COMMITTED USAGE DISCOUNT DOLLAR BASE : For legacy spend-based committed use discounts (CUDs) that aren't part of the new pricing model , this is the credit earned in exchange for your commitment to spend a minimum amount for a service in a particular region.
- If the value of the credits.id is a description of the credit type (such as Committed Usage Discount: CPU ), then the credits.full name field is empty.
- COMMITTED USAGE DISCOUNT : Resource-based committed use contracts purchased for Compute Engine in return for deeply discounted prices for VM usage.

### "Calculate savings with Compute flexible commitments \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible)
- Source ID: `site-docs-root-2`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The calculation is determined by the following parameters: Variable/Field name Description LOOK BACK WINDOW The retrospective window for the analysis (such as 30 days, 90 days). credits from existing cuds Hourly credits received from active commitments already purchased. credits from existing suds Hourly credits received automatically from sustained use discounts (SUDs) . cost eligible for additional flex cuds considering cud credits Hourly eligible undiscounted usage, excluding CUDs credits only. cost eligible for additional flex cuds considering cud and sud credits Hourly eligible undiscounted usage, excluding CUDs and SUDs credits. min cost eligible for additional flex cuds considering cud credits Minimum undiscounted usage, excluding CUDs credits only. min cost eligible for additional flex cuds considering cud and sud credits Minimum undiscounted usage, excluding CUDs and SUDs credits; the most conservative estimate based on the look back window.
- WITH base AS ( SELECT , IF ( total cost >= credits from existing cuds , ( total cost - credits from existing cuds ), 0 ) AS cost eligible for additional flex cuds considering cud credits , IF ( total cost >= ( credits from existing cuds + credits from existing suds ), ( total cost - ( credits from existing cuds + credits from existing suds )), 0 ) AS cost eligible for additional flex cuds considering cud and sud credits FROM ( SELECT usage start time , SUM ( cost ) AS total cost , ( SUM (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) AS c WHERE c . type IN ( "COMMITTED USAGE DISCOUNT" , "COMMITTED USAGE DISCOUNT DOLLAR BASE" ))) - 1 ) AS credits from existing cuds , ( SUM (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) AS c WHERE c . type IN ( "SUSTAINED USAGE DISCOUNT" ))) - 1 ) AS credits from existing suds , FROM PROJECT .
- WITH base AS ( SELECT , IF ( total cost >= credits from existing cuds , ( total cost - credits from existing cuds ), 0 ) AS cost eligible for additional flex cuds considering cud credits , IF ( total cost >= ( credits from existing cuds + credits from existing suds ), ( total cost - ( credits from existing cuds + credits from existing suds )), 0 ) AS cost eligible for additional flex cuds considering cud and sud credits FROM ( SELECT usage start time , SUM ( cost ) AS total cost , ( SUM (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) AS c WHERE c . type IN ( "COMMITTED USAGE DISCOUNT" , "COMMITTED USAGE DISCOUNT DOLLAR BASE" ))) - 1 ) AS credits from existing cuds , ( SUM (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) AS c WHERE c . type IN ( "SUSTAINED USAGE DISCOUNT" ))) - 1 ) AS credits from existing suds , FROM PROJECT .
- TABLE LEFT JOIN UNNEST ( credits ) AS credits WHERE credits . full name LIKE 'Committed use discount - dollar based: GCE Commitments%' GROUP BY 1 ; To view both your credits drawn down by all-usage SKUs and commitment fees, use the following sample query: Standard SQL SELECT FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX LEFT JOIN UNNEST ( credits ) AS credits WHERE credits . full name LIKE 'Committed use discount - dollar based: GCE Commitments%' OR sku . description LIKE "%GCE for 1 year%" OR sku . description LIKE "%GCE for 3 year%" ; Calculate your overall flexible CUDs savings The total effective savings from flexible CUDs vary depending on the resources used in a given month and the on-demand pricing of those resources.

