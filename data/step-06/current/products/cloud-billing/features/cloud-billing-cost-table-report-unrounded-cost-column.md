---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.613Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing Cost Table report Unrounded cost column"
feature_slug: "cloud-billing-cost-table-report-unrounded-cost-column"
latest_feature_date: "2021-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown"
keywords:
  - "billing"
  - "cost"
  - "table"
  - "report"
  - "unrounded"
  - "column"
  - "added"
  - "show"
---

# Cloud Billing Cost Table report Unrounded cost column

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Added the Unrounded cost column to the Cost Table report to show usage cost with precision up to six decimal places.

## Extended Definition

Added the Unrounded cost column to the Cost Table report to show usage cost with precision up to six decimal places.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud Billing report shows you the cost data for a specific label only after the label was added to a resource.
- The Group by options include the following: Single dimension Multiple dimension by date Multiple dimension by month Subaccount Project Project Hierarchy Service SKU Application Location: Region or multi-region Label keys No grouping (show total cost only) Date > Subaccount Date > Project Date > Project Hierarchy Date > Service Date > SKU Date > Application Date > Location: Region or multi-region Month > Subaccount Month > Project Month > Project Hierarchy Month > Service Month > SKU Month > Application Month > Location: Region or multi-region Single-dimension Group by options When using a single-dimension Group by option, the report table and the report chart display the data differently.
- Date-based Group by options Date > Subaccount Date > Project Date > Project Hierarchy Date > Service Date > SKU Date > Application Date > Location: Region or multi-region When you choose a date-based Group by option, (such as Date > Service ) the report chart shows the actual and forecasted costs for each day, and each row in the report table shows the actual cost for each day.
- As of May 2021, the following data is available in the Cloud Billing reports: Negotiated savings : Viewable for Cloud Billing accounts that are associated with a custom pricing contract, Negotiated savings shows the difference in cost between your contract price compared to the current list price.

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- New columns and filters in the Cost table report In the Cost table report, new columns and filters show you how the consumption model affects your costs and let you filter the savings data for more flexibility: Summary bar visibility Click the visibility summary bar icon in the toolbar to open or close the summary bar .
- Figure 3 - Flat table view : Example of the Cost table report with no grouping option selected, and a few columns deselected for display (such as billing account name and billing account ID).
- Columns in the Cost table The following data is available in the Cost table report (if applicable to your Cloud Billing account).
- To gain this permission, ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined IAM roles for Cloud Billing Access the report To view the Cost table report for your Cloud Billing account: In the Google Cloud console, go to your Cloud Billing account.

### "Understand your savings with cost breakdown reports \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Examples For a Cloud Billing account associated with standard list prices (and for any billing account viewing costs incurred prior to May 1, 2021), the cost breakdown report displays a Usage cost column, along with any applicable credits and invoice-level charges: Figure 1 : Example of a cost breakdown report, showing the base usage cost and how that cost was affected by any credits, adjustments, and taxes.
- The CSV file includes a column for each of the items in the summary table of the report, such as cost, credits, subtotal, taxes, adjustments, and total; and a single row that shows the amount for each item.
- For a Cloud Billing account associated with a custom pricing contract , when viewing the report using a time range that starts May 1, 2021 , or later, the cost breakdown report displays a Usage cost column, and a Negotiated savings column, as well as any other applicable credits and invoice-level charges: Figure 2 : Example of the cost breakdown report for a Cloud Billing account associated with a custom pricing contract.
- Filters The Cost breakdown report can show all charges and credits for the entire Cloud Billing account, or you can filter it to focus on a specific set of resources.

