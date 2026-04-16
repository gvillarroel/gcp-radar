---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.608Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Summary bar in Cost table report"
feature_slug: "summary-bar-in-cost-table-report"
latest_feature_date: "2021-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
keywords:
  - "summary"
  - "bar"
  - "cost"
  - "table"
  - "report"
  - "adds"
  - "displays"
  - "totals"
---

# Summary bar in Cost table report

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Adds a summary bar to the Cost table report that displays totals and percentages for currently selected rows in both nested and flat views.

## Extended Definition

Adds a summary bar to the Cost table report that displays totals and percentages for currently selected rows in both nested and flat views.

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
- Final score: 207
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For a quick view of your actual, usage-specific cost totals, look at the report footer , below the table.
- The summary footer, below the table, displays the cost breakdown based on your filter selections.
- For cost totals by service, view the report table .
- The Group by options include the following: Single dimension Multiple dimension by date Multiple dimension by month Subaccount Project Project Hierarchy Service SKU Application Location: Region or multi-region Label keys No grouping (show total cost only) Date > Subaccount Date > Project Date > Project Hierarchy Date > Service Date > SKU Date > Application Date > Location: Region or multi-region Month > Subaccount Month > Project Month > Project Hierarchy Month > Service Month > SKU Month > Application Month > Location: Region or multi-region Single-dimension Group by options When using a single-dimension Group by option, the report table and the report chart display the data differently.

### "Understand your savings with cost breakdown reports \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The summary table includes a row for each bar on the chart, displays the effective % rates of costs and savings, and provides links to open related report pages where you can view the details behind specific cost breakdown report values.
- The CSV file includes a column for each of the items in the summary table of the report, such as cost, credits, subtotal, taxes, adjustments, and total; and a single row that shows the amount for each item.
- For a Cloud Billing account associated with a custom pricing contract , when viewing the report using a time range that starts May 1, 2021 , or later, the cost breakdown report displays a Usage cost column, and a Negotiated savings column, as well as any other applicable credits and invoice-level charges: Figure 2 : Example of the cost breakdown report for a Cloud Billing account associated with a custom pricing contract.
- Examples For a Cloud Billing account associated with standard list prices (and for any billing account viewing costs incurred prior to May 1, 2021), the cost breakdown report displays a Usage cost column, along with any applicable credits and invoice-level charges: Figure 1 : Example of a cost breakdown report, showing the base usage cost and how that cost was affected by any credits, adjustments, and taxes.

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- New columns and filters in the Cost table report In the Cost table report, new columns and filters show you how the consumption model affects your costs and let you filter the savings data for more flexibility: Summary bar visibility Click the visibility summary bar icon in the toolbar to open or close the summary bar .
- About totals in the invoice header and the Cost table footer When your Cost table report is configured to view all costs and credits for an invoice month, typically, the total in the invoice header and the Cost table footer are the same.
- Starting with the September 2020 invoice or statement, the Cost table report includes header information for the document providing details such as the invoice number, the billing account ID, and the invoice or statement totals.
- If you're using filters in their default state , the flat table view includes rows for all costs and credits incurred for the selected invoice month, and the Cost table report totals match your invoice or statement totals.

