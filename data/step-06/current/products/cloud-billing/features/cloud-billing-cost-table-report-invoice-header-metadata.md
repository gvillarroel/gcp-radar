---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.329Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing Cost Table report invoice header metadata"
feature_slug: "cloud-billing-cost-table-report-invoice-header-metadata"
latest_feature_date: "2020-11-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
  - "https://docs.cloud.google.com/billing/docs/how-to/get-invoice"
keywords:
  - "billing"
  - "cost"
  - "table"
  - "report"
  - "invoice"
  - "header"
  - "metadata"
  - "added"
---

# Cloud Billing Cost Table report invoice header metadata

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Added invoice or statement header information to the Cost Table report UI and downloadable CSV output.

## Extended Definition

Added invoice or statement header information to the Cost Table report UI and downloadable CSV output.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- [https://docs.cloud.google.com/billing/docs/how-to/get-invoice](https://docs.cloud.google.com/billing/docs/how-to/get-invoice)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- If you're viewing your Cloud Billing report using a date range that ends in a future date, your Cloud Billing report chart displays both actual costs and forecasted costs: The report header above the chart provides a split view of cost: actual cost-to-date calculated from the starting date, and the total forecasted cost for the entire date range.
- When viewing costs by Invoice month , the following data is available in the Cloud Billing reports: Invoices generally include all costs incurred during a given calendar month, but the cost for some services' usage at the very end of a calendar month might roll over to the next month's invoice.
- Promotional credits for custom pricing contracts : If you have a custom pricing contract with Google Cloud, and received promotional credits that apply to costs at list prices , your report includes a service called Invoice , with a SKU called Contract billing adjustment .
- Negotiated savings: When you set the report time range by Invoice month , starting with the May 2021 invoice, Cloud Billing accounts associated with a custom pricing contract display Negotiated savings as a savings column, separate from the List cost column.

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Starting with your September 2020 invoice or statement, the Cost table report includes header information pulled from the generated document, including the billing account ID, total amount of the invoice or statement, and currency of the invoice or statement amount.
- Starting with the September 2020 invoice or statement, the Cost table report includes header information for the document providing details such as the invoice number, the billing account ID, and the invoice or statement totals.
- If you notice the totals in your Cost table report's header and footer don't match, and you need help reconciling your invoice or statement, contact Cloud Billing Support for assistance .
- CSV file name For the Cost table report, the file name follows this pattern: [Billing Account name] Cost table, [YYYY-MM-DD] — [YYYY-MM-DD].csv For example, a CSV file of the cost table data downloaded for a Cloud Billing account named My Billing Account , for an invoice month of March 2023 , is named: My Billing Account Cost table, 2023-03-01 — 2023-03-31.csv Note: If you download a report with the same invoice month multiple times, then the default report name will be the same.

### "Get a Cloud Billing document such as an invoice, statement, or receipt \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/get-invoice](https://docs.cloud.google.com/billing/docs/how-to/get-invoice)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If your organization previously processed the invoice CSV and you need the invoice cost details, download the CSV from the Cost Table report and process it in place of the invoice CSV.
- If your organization processes the invoice CSV and requires project-level cost detail, download the CSV from the Cost Table report and process it in place of the invoice CSV.
- Other related topics: Export Cloud Billing data to BigQuery View your Cloud Billing reports and cost trends View your cost and payment history Create, modify, or close your Cloud Billing account Split invoicing for agency model transactions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Get a Cloud Billing document such as an invoice, statement, or receipt Stay organized with collections Save and categorize content based on your preferences.

