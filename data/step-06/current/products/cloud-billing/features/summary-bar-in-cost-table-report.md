---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.314Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Summary bar in Cost table report"
feature_slug: "summary-bar-in-cost-table-report"
latest_feature_date: "2021-06-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
keywords:
  - "summary"
  - "bar"
  - "in"
  - "cost"
  - "table"
  - "report"
  - "adds"
  - "to"
---

# Summary bar in Cost table report

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Adds a summary bar to the Cost table report that displays totals and percentages for currently selected rows in both nested and flat views.

## Extended Definition

Adds a summary bar to the Cost table report that displays totals and percentages for currently selected rows in both nested and flat views.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- The Group by options include the following: Single dimension Multiple dimension by date Multiple dimension by month Subaccount Project Project Hierarchy Service SKU Application Location: Region or multi-region Label keys No grouping (show total cost only) Date > Subaccount Date > Project Date > Project Hierarchy Date > Service Date > SKU Date > Application Date > Location: Region or multi-region Month > Subaccount Month > Project Month > Project Hierarchy Month > Service Month > SKU Month > Application Month > Location: Region or multi-region Single-dimension Group by options When using a single-dimension Group by option, the report table and the report chart display the data differently.
- Analyze the report when grouped by Project hierarchy You can sort the table data on different columns to view the project hierarchy costs in different ways: To visualize all of the projects that have the same project hierarchy, sort the table by the Project hierarchy column.
- Download filtered report data to a CSV file You can download the report data to a comma-separated values (CSV) file using the get app Download CSV selector located above the summary table.
- Invoice total versus Filtered total In the summary footer of the report, the display of invoice-level costs and the type of report total depends on how your report filters are configured.

### "Understand your savings with cost breakdown reports \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The summary table includes a row for each bar on the chart, displays the effective % rates of costs and savings, and provides links to open related report pages where you can view the details behind specific cost breakdown report values.
- The CSV file includes a column for each of the items in the summary table of the report, such as cost, credits, subtotal, taxes, adjustments, and total; and a single row that shows the amount for each item.
- Download cost breakdown data to a CSV file You can download the cost breakdown data to a comma-separated values (CSV) file using the get app Download CSV selector located above the summary table.
- Understand the values in the chart and report summary The cost breakdown chart shows the following, if applicable to your Cloud Billing account.

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- New columns and filters in the Cost table report In the Cost table report, new columns and filters show you how the consumption model affects your costs and let you filter the savings data for more flexibility: Summary bar visibility Click the visibility summary bar icon in the toolbar to open or close the summary bar .
- Figure 4 - Summary bar displayed : Example of the Cost table report showing the floating summary bar displayed, which automatically opens when you select specific rows to summarize.
- Report views with summary bar The visibility summary bar helps you to perform quick cost analyses of the data returned in the table view.
- Table settings and report tools The table settings and report tools are located above the table, and include options to set the table configuration ( ), control the columns displayed in the table ( view column ), toggle the visibility of the summary bar ( visibility ), and download the report data to CSV ( get app ).

