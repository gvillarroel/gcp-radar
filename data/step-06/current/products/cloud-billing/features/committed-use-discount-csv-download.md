---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.568Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Committed use discount CSV download"
feature_slug: "committed-use-discount-csv-download"
latest_feature_date: "2024-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
  - "https://docs.cloud.google.com/billing/docs/how-to/pricing-table"
  - "https://docs.cloud.google.com/billing/docs/how-to/cud-analysis"
keywords:
  - "committed"
  - "use"
  - "discount"
  - "csv"
  - "download"
  - "billing"
  - "now"
  - "allows"
---

# Committed use discount CSV download

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Cloud Billing now allows downloading committed use discount (CUD) data as a CSV file including subscription IDs for joining with usage data.

## Extended Definition

Cloud Billing now allows downloading committed use discount (CUD) data as a CSV file including subscription IDs for joining with usage data.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- [https://docs.cloud.google.com/billing/docs/how-to/pricing-table](https://docs.cloud.google.com/billing/docs/how-to/pricing-table)
- [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis)

## Supporting Pages

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- CSV file name For the Cost table report, the file name follows this pattern: [Billing Account name] Cost table, [YYYY-MM-DD] — [YYYY-MM-DD].csv For example, a CSV file of the cost table data downloaded for a Cloud Billing account named My Billing Account , for an invoice month of March 2023 , is named: My Billing Account Cost table, 2023-03-01 — 2023-03-31.csv Note: If you download a report with the same invoice month multiple times, then the default report name will be the same.
- COMMITTED USAGE DISCOUNT DOLLAR BASE : For legacy spend-based committed use discounts (CUDs) that aren't part of the new pricing model , this is the credit earned in exchange for your commitment to spend a minimum amount for a service in a particular region.
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback View and download the cost details of your invoice or statement Stay organized with collections Save and categorize content based on your preferences.
- SUSTAINED USAGE DISCOUNT : The sustained use discounts credit type is an automatic discount that you receive for running eligible Compute Engine resources for a significant portion of the billing month, with no commitment required.

### "View and download prices for Google's cloud services \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/pricing-table](https://docs.cloud.google.com/billing/docs/how-to/pricing-table)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Here's how the SKU's pricing tiers are listed in the pricing table: SKU ID SKU description Unit description Tiered usage start List price 6F81-5844-456A Network Internet Data Transfer from Americas to Australia gibibyte 0 0.19 6F81-5844-456A Network Internet Data Transfer from Americas to Australia gibibyte 1,024 0.18 6F81-5844-456A Network Internet Data Transfer from Americas to Australia gibibyte 10,240 0.15 Related topics Export Cloud Billing cost and pricing data to BigQuery View and download the cost details of your invoice or statement Get an invoice, statement, or receipt View your Cloud Billing reports and cost trends View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For Cloud Billing accounts with a custom pricing contract, the effective discount percentage is computed using this equation: Effective discount = (List price - Contract price) / List price × 100 Figure 2 : Example of the pricing table showing prices for SKUs with historical usage, for a Cloud Billing account with a custom pricing contract.
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback View and download prices for Google's cloud services Stay organized with collections Save and categorize content based on your preferences.
- Note : This document discusses some spend-based committed use discounts (CUDs) that automatically migrate to a new consumption model, which leverages discounts rather than credits.

### "Optimize costs with Committed Use Discounts \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Related topics Overview of committed use discounts Purchasing spend-based committed use discounts Purchasing resource-based committed use discounts View your Cloud Billing reports and cost trends Understand your savings with cost breakdown reports Export Cloud Billing data to BigQuery View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Optimize costs with Committed Use Discounts Stay organized with collections Save and categorize content based on your preferences.
- Committed use discounts (CUDs) provide discounted prices in exchange for your commitment to use a minimum level of resources for a one-year or three-year period.
- For an overview of your commitments, use the Committed use discounts page .

