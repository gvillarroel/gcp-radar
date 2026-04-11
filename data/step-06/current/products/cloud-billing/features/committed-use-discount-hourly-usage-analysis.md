---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.289Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Committed Use Discount hourly usage analysis"
feature_slug: "committed-use-discount-hourly-usage-analysis"
latest_feature_date: "2023-01-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds"
  - "https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible"
  - "https://docs.cloud.google.com/billing/docs/how-to/cud-analysis"
keywords:
  - "committed"
  - "use"
  - "discount"
  - "hourly"
  - "usage"
  - "analysis"
  - "the"
  - "cud"
---

# Committed Use Discount hourly usage analysis

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

The CUD Analysis dashboard now supports viewing usage data at an hourly granularity to assess spend-based or resource-based committed use discounts.

## Extended Definition

The CUD Analysis dashboard now supports viewing usage data at an hourly granularity to assess spend-based or resource-based committed use discounts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds](https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds)
- [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible)
- [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis)

## Supporting Pages

### "Analyze the effectiveness of your CUDs \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds](https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This document explains how to use the CUD analysis report on the Google Cloud console to understand the effectiveness and financial impact of your committed use discounts (CUDs).
- Note: If you want to buy commitments to cover any gray portion shown in CUD analysis, you should manually calculate the discounted value based on the discounts provided by the CUD product, or use the CUD Recommendations for automated guidance.
- Note : This document discusses some spend-based committed use discounts (CUDs) that automatically migrate to a new consumption model, which leverages discounts rather than credits.
- Important: The CUD analysis doesn't compute utilization when you aggregate more than one type of CUD, because the utilization might be on different resources (cores, RAM, etc.) Summary cards Summary cards above the stacked bar chart show the following details for the selected commitment type: Active commitment : The current quantity of active commitments you purchased for a selected resource.

### "Calculate savings with Compute flexible commitments \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The calculation is determined by the following parameters: Variable/Field name Description LOOK BACK WINDOW The retrospective window for the analysis (such as 30 days, 90 days). credits from existing cuds Hourly credits received from active commitments already purchased. credits from existing suds Hourly credits received automatically from sustained use discounts (SUDs) . cost eligible for additional flex cuds considering cud credits Hourly eligible undiscounted usage, excluding CUDs credits only. cost eligible for additional flex cuds considering cud and sud credits Hourly eligible undiscounted usage, excluding CUDs and SUDs credits. min cost eligible for additional flex cuds considering cud credits Minimum undiscounted usage, excluding CUDs credits only. min cost eligible for additional flex cuds considering cud and sud credits Minimum undiscounted usage, excluding CUDs and SUDs credits; the most conservative estimate based on the look back window.
- TABLE LEFT JOIN UNNEST ( credits ) AS credits WHERE credits . full name LIKE 'Committed use discount - dollar based: GCE Commitments%' GROUP BY 1 ; To view both your credits drawn down by all-usage SKUs and commitment fees, use the following sample query: Standard SQL SELECT FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX LEFT JOIN UNNEST ( credits ) AS credits WHERE credits . full name LIKE 'Committed use discount - dollar based: GCE Commitments%' OR sku . description LIKE "%GCE for 1 year%" OR sku . description LIKE "%GCE for 3 year%" ; Calculate your overall flexible CUDs savings The total effective savings from flexible CUDs vary depending on the resources used in a given month and the on-demand pricing of those resources.
- For example, a credit for a Compute flexible CUD for the usage of N1 CORE running in Americas appears as: Credit type : COMMITTED USAGE DISCOUNT DOLLAR BASE Credit name : Committed use discount - dollar based: GCE Commitments SKU description : N1 CORE running in Americas Analyze commitment costs and credits on your invoice or statement To view and analyze detailed costs and credits for a given invoice or statement, access the Cost table report , a cost management tool that you can use to understand the costs that reconcile to your invoice.
- Use the following query to understand how an hourly, undiscounted portion of your usage would be affected by a CUD. – IMPORTANT : – YOU MUST REPLACE PROJECT .

### "Optimize costs with Committed Use Discounts \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Analyze your CUDs After you've purchased commitments, you can use the CUD analysis report to analyze the effectiveness of your discounts: To learn how to analyze your spend- or resource-based CUDs, see Analyze the effectiveness of your CUDs .
- Related topics Overview of committed use discounts Purchasing spend-based committed use discounts Purchasing resource-based committed use discounts View your Cloud Billing reports and cost trends Understand your savings with cost breakdown reports Export Cloud Billing data to BigQuery View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Optimize costs with Committed Use Discounts Stay organized with collections Save and categorize content based on your preferences.
- Committed use discounts (CUDs) provide discounted prices in exchange for your commitment to use a minimum level of resources for a one-year or three-year period.

