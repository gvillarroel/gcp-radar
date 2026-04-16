---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.626Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing negotiated pricing contract views"
feature_slug: "cloud-billing-negotiated-pricing-contract-views"
latest_feature_date: "2020-08-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
keywords:
  - "billing"
  - "negotiated"
  - "pricing"
  - "contract"
  - "views"
  - "report"
  - "cost"
  - "breakdown"
---

# Cloud Billing negotiated pricing contract views

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Cloud Billing report and Cost Breakdown report now support list-price calculations with negotiated savings shown as a separate credit for July 2020 invoices.

## Extended Definition

Cloud Billing report and Cost Breakdown report now support list-price calculations with negotiated savings shown as a separate credit for July 2020 invoices.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As of May 2021, the following data is available in the Cloud Billing reports: Negotiated savings : Viewable for Cloud Billing accounts that are associated with a custom pricing contract, Negotiated savings shows the difference in cost between your contract price compared to the current list price.
- Negotiated savings: When you set the report time range by Invoice month , starting with the May 2021 invoice, Cloud Billing accounts associated with a custom pricing contract display Negotiated savings as a savings column, separate from the List cost column.
- If your Cloud Billing account is associated with a custom pricing contract and your report settings result in the display of the Negotiated savings column, you will see a List cost column in your CSV download .
- Promotional credits for custom pricing contracts : If you have a custom pricing contract with Google Cloud, and received promotional credits that apply to costs at list prices , your report includes a service called Invoice , with a SKU called Contract billing adjustment .

### "Understand your savings with cost breakdown reports \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For a Cloud Billing account associated with a custom pricing contract , when viewing the report using a time range that starts May 1, 2021 , or later, the cost breakdown report displays a Usage cost column, and a Negotiated savings column, as well as any other applicable credits and invoice-level charges: Figure 2 : Example of the cost breakdown report for a Cloud Billing account associated with a custom pricing contract.
- If your Cloud Billing account is associated with a custom pricing contract , the on-demand rate used to calculate the gross cost of your usage depends on the Time range of the costs you are analyzing: When viewing the report using a time range that starts before May 1, 2021, the gross cost of your usage is calculated using your custom contract prices, and includes the savings you earned compared to list prices.
- Savings and credits The following savings, discounts, and credits appear on the report if applicable to your Cloud Billing account and selected Time range : Negotiated savings : A credit that displays for Cloud Billing accounts associated with a custom pricing contract .
- Note that for Cloud Billing accounts associated with a custom pricing contract , when you configure the report using a starting Time range set prior to May 1, 2021, the Negotiated savings bar isn't displayed.

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- When viewing the report for an invoice month prior to January 2022 , if you delete a project or move the project to a different Cloud Billing account , the Project name and Project ID are removed from the Cost table report views, but the Project number persists in your reports.
- List cost N/A The List cost column is available for Cloud Billing accounts associated with a custom pricing contract , and represents the monthly cost of your usage calculated using list prices .
- If your promotional credits apply to costs that are calculated at the list price , in the Cost table report, there's a service called Invoice , with a SKU called Contract billing adjustment .
- Note : The List cost column is available starting with your May 2021 invoice, and only for Cloud Billing accounts associated with a custom pricing contract .

