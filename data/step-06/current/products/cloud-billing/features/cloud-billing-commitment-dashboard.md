---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.333Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing commitment dashboard"
feature_slug: "cloud-billing-commitment-dashboard"
latest_feature_date: "2020-08-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds"
  - "https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible"
keywords:
  - "billing"
  - "commitment"
  - "dashboard"
  - "the"
  - "now"
  - "displays"
  - "spend"
  - "based"
---

# Cloud Billing commitment dashboard

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

The Cloud Billing commitment dashboard now displays a spend-based CUD summary and enables purchasing new commitments.

## Extended Definition

The Cloud Billing commitment dashboard now displays a spend-based CUD summary and enables purchasing new commitments.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds](https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds)
- [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Legacy spend-based CUD credits : For spend-based committed use discounts (CUDs) that aren't part of the new pricing model, this is the credit earned in exchange for your commitment to spend a minimum amount for a service in a particular region.
- A notification in the Billing Overview page shows the date when we will begin the automatic migration from the legacy spend-based CUD model using credits, to the new spend-based CUD model using discounts.
- Resource-based and Legacy spend-based CUDs consist of three components using a balance sheet format on your bill: Commitment fee is the discounted cost of your covered usage.
- About the default Cloud Billing report Based on your report filters and other settings, the report chart displays a stacked bar chart where each bar plots costs over time.

### "Analyze the effectiveness of your CUDs \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds](https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Stacked bar chart The stacked bar chart appears below the summary cards and above the summary table, and shows the following details for the selected commitment type: Commitment-covered costs : The average daily costs at on-demand eligible rates covered by CUDs (lower part of the bar, using blue for resource-based CUDs credits and green for spend-based CUDs discounts).
- For more information, see the Resource-based CUDs documentation Spend-based CUDs : You get a discount in exchange for your commitment to spend a minimum amount for eligible services for a specified time duration.
- It has the capability to show the utilization for the following: Each spend-based commitment (each purchase), which is only available for CUDs in the new model, otherwise this granularity is unavailable.
- Commitment cost : The commitment fee for resource based CUDs (and also for spend-based commitments that use the legacy spend-based model).

### "Calculate savings with Compute flexible commitments \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible)
- Source ID: `site-docs-root-2`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Open Cloud Billing Reports View Compute flexible commitments You can review your Compute flexible commitments in your Cloud Billing report by setting specific report filters : In the Credits filter, select Committed use discounts (spend based) .
- Example of usage equaling the committed spend amount This example uses a Cloud Billing account where the spend-based CUD equals the usage commitment for the one-hour period.
- Example of using more than the committed spend amount This example uses a Cloud Billing account where the actual usage is more than the spend-based commitment purchased.
- TABLE LEFT JOIN UNNEST ( credits ) AS credits WHERE credits . full name LIKE 'Committed use discount - dollar based: GCE Commitments%' GROUP BY 1 ; To view both your credits drawn down by all-usage SKUs and commitment fees, use the following sample query: Standard SQL SELECT FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX LEFT JOIN UNNEST ( credits ) AS credits WHERE credits . full name LIKE 'Committed use discount - dollar based: GCE Commitments%' OR sku . description LIKE "%GCE for 1 year%" OR sku . description LIKE "%GCE for 3 year%" ; Calculate your overall flexible CUDs savings The total effective savings from flexible CUDs vary depending on the resources used in a given month and the on-demand pricing of those resources.

