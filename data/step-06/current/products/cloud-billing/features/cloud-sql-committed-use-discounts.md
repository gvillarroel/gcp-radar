---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.629Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud SQL committed use discounts"
feature_slug: "cloud-sql-committed-use-discounts"
latest_feature_date: "2020-06-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/cud-analysis"
  - "https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible"
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets"
keywords:
  - "sql"
  - "committed"
  - "use"
  - "discounts"
  - "spend"
  - "based"
  - "introduced"
  - "year"
---

# Cloud SQL committed use discounts

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Spend-based committed use discounts are introduced for Cloud SQL with 1- and 3-year regional commitment terms.

## Extended Definition

Spend-based committed use discounts are introduced for Cloud SQL with 1- and 3-year regional commitment terms.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis)
- [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible)
- [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)

## Supporting Pages

### "Optimize costs with Committed Use Discounts \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Related topics Overview of committed use discounts Purchasing spend-based committed use discounts Purchasing resource-based committed use discounts View your Cloud Billing reports and cost trends Understand your savings with cost breakdown reports Export Cloud Billing data to BigQuery View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Analyze your CUDs After you've purchased commitments, you can use the CUD analysis report to analyze the effectiveness of your discounts: To learn how to analyze your spend- or resource-based CUDs, see Analyze the effectiveness of your CUDs .
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Optimize costs with Committed Use Discounts Stay organized with collections Save and categorize content based on your preferences.
- Committed use discounts (CUDs) provide discounted prices in exchange for your commitment to use a minimum level of resources for a one-year or three-year period.

### "Calculate savings with Compute flexible commitments \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Open Cloud Billing Reports View Compute flexible commitments You can review your Compute flexible commitments in your Cloud Billing report by setting specific report filters : In the Credits filter, select Committed use discounts (spend based) .
- Note : This document discusses some spend-based committed use discounts (CUDs) that automatically migrated to a new consumption model, which leverages discounts rather than credits.
- Compute flexible committed use discounts (CUDs) are the discounts you receive when you purchase a spend-based Compute flexible commitment.
- TABLE LEFT JOIN UNNEST ( credits ) AS credits WHERE credits . full name LIKE 'Committed use discount - dollar based: GCE Commitments%' GROUP BY 1 ; To view both your credits drawn down by all-usage SKUs and commitment fees, use the following sample query: Standard SQL SELECT FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX LEFT JOIN UNNEST ( credits ) AS credits WHERE credits . full name LIKE 'Committed use discount - dollar based: GCE Commitments%' OR sku . description LIKE "%GCE for 1 year%" OR sku . description LIKE "%GCE for 3 year%" ; Calculate your overall flexible CUDs savings The total effective savings from flexible CUDs vary depending on the resources used in a given month and the on-demand pricing of those resources.

### "Create, edit, or delete budgets and budget alerts \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Legacy spend-based CUD credits : For spend-based committed use discounts (CUDs) that aren't part of the new pricing model, this is the credit earned in exchange for your commitment to spend a minimum amount for a service in a particular region.
- Spend-based CUD discounts : Spend-based committed use discounts (CUDs) provide discounted prices on certain Google Cloud services when you commit to spending a minimum amount during a specified term.
- About Savings types Savings programs include the various committed use discounts (CUDs) options, which lower the cost of your Google Cloud usage by offering discounts and credits tied to your resource usage or spending.
- Spending-based discounts : Spending-based discounts offer progressively larger discounts based on your total spend over a defined period, or discounts that are applied after a contractual spending threshold is reached.

