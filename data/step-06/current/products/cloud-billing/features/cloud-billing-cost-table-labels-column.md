---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.630Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing Cost Table labels column"
feature_slug: "cloud-billing-cost-table-labels-column"
latest_feature_date: "2020-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
keywords:
  - "billing"
  - "cost"
  - "table"
  - "labels"
  - "column"
  - "was"
  - "added"
  - "flat"
---

# Cloud Billing Cost Table labels column

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

A Labels column was added to the flat table view of the Cloud Billing Cost Table report.

## Extended Definition

A Labels column was added to the flat table view of the Cloud Billing Cost Table report.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)

## Supporting Pages

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Figure 3 - Flat table view : Example of the Cost table report with no grouping option selected, and a few columns deselected for display (such as billing account name and billing account ID).
- Table configuration Label data : The cost label key setting controls which cost label values are displayed in the Label column, and enables labels as a grouping dimension option when you are configuring a custom Group by option.
- When you download the data to CSV, a flat file is downloaded, including all of the rows in the Cost table report, with data in individual (not nested) columns.
- Columns in the Cost table The following data is available in the Cost table report (if applicable to your Cloud Billing account).

### "Understand your savings with cost breakdown reports \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- For a Cloud Billing account associated with a custom pricing contract , when viewing the report using a time range that starts May 1, 2021 , or later, the cost breakdown report displays a Usage cost column, and a Negotiated savings column, as well as any other applicable credits and invoice-level charges: Figure 2 : Example of the cost breakdown report for a Cloud Billing account associated with a custom pricing contract.
- Examples For a Cloud Billing account associated with standard list prices (and for any billing account viewing costs incurred prior to May 1, 2021), the cost breakdown report displays a Usage cost column, along with any applicable credits and invoice-level charges: Figure 1 : Example of a cost breakdown report, showing the base usage cost and how that cost was affected by any credits, adjustments, and taxes.
- The CSV file includes a column for each of the items in the summary table of the report, such as cost, credits, subtotal, taxes, adjustments, and total; and a single row that shows the amount for each item.
- To gain this permission using a predefined role, ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Administrator Billing Account Costs Manager Billing Account Viewer For more information about billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined IAM roles for Cloud Billing Access the report To view the Cost breakdown report for your Cloud Billing account: In the Google Cloud console, go to your Cloud Billing account.

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Analyze the report when grouped by Project hierarchy You can sort the table data on different columns to view the project hierarchy costs in different ways: To visualize all of the projects that have the same project hierarchy, sort the table by the Project hierarchy column.
- Negotiated savings: When you set the report time range by Invoice month , starting with the May 2021 invoice, Cloud Billing accounts associated with a custom pricing contract display Negotiated savings as a savings column, separate from the List cost column.
- If your Cloud Billing account is associated with a custom pricing contract and your report settings result in the display of the Negotiated savings column, you will see a List cost column in your CSV download .
- Negotiated savings: When you set the report time range by Usage date , the Cost column displays your costs calculated using the prices that are applicable to your Cloud Billing account.

