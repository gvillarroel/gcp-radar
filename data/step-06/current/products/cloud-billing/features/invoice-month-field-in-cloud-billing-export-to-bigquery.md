---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.372Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Invoice month field in Cloud Billing export to BigQuery"
feature_slug: "invoice-month-field-in-cloud-billing-export-to-bigquery"
latest_feature_date: "2018-05-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/read-invoice"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
keywords:
  - "invoice"
  - "month"
  - "field"
  - "in"
  - "billing"
  - "export"
  - "to"
  - "now"
---

# Invoice month field in Cloud Billing export to BigQuery

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing export to BigQuery now includes invoice.month to associate cost line items with the corresponding invoice month.

## Extended Definition

Cloud Billing export to BigQuery now includes invoice.month to associate cost line items with the corresponding invoice month.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/read-invoice](https://docs.cloud.google.com/billing/docs/how-to/read-invoice)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)

## Supporting Pages

### Understand Your monthly invoice \_|\_ Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/read-invoice](https://docs.cloud.google.com/billing/docs/how-to/read-invoice)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: N/A

Evidence snippets:
- Related topics Cost table report: View and download the cost details of your invoice or statement Get a Cloud Billing document such as an invoice, statement, or receipt View your cost and payment history Export Cloud Billing data to BigQuery Key concepts for Cloud Billing data export, online reports, and invoices Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For invoices prior to January 2021 , the following columns appear in the CSV invoice: Field Description Account Name The name of the Cloud Billing Account that the usage is associated with.
- Overview When you request invoiced billing , Google extends a line of credit to you for your computing costs, and you receive an invoice each month.
- Download your invoice If your account is configured for monthly invoicing, you can download your invoice in the following two formats: PDF: The PDF format is intended for your Accounts Payable department to review your monthly Google Cloud cost totals and to learn how and when to pay Google.

### "Structure of pricing data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data)
- Source ID: `site-docs-root-2`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- FROM my - billing - admin - project . my billing dataset . cloud pricing export as sku pricing , UNNEST ( sku pricing . list price . tiered rates ) as tier WHERE DATE ( PARTITIONTIME ) = "2020-07-20" AND sku . id = "2DA5-55D3-E679" ; Query results: Row sku id sku description service id service description pricing unit quantity start usage amount usd amount account currency amount 1 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run 1000000.0 0.0 0.0 0.0 2 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run 1000000.0 2000000.0 0.4 0.4 Related topics Topics related to exported Cloud Billing data Set up Cloud Billing data export to BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Structure of Detailed data export Next Structure of CUD metadata export arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- FROM my - billing - admin - project . my billing dataset . cloud pricing export WHERE DATE ( PARTITIONTIME ) = "2020-07-20" AND sku . id = "2DA5-55D3-E679" ; Query results: Row sku id sku description service id service description aggregation info. aggregation level aggregation info. aggregation interval tiered rates. pricing unit quantity tiered rates. start usage amount tiered rates. usd amount tiered rates. account currency amount 1 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run ACCOUNT MONTHLY 1000000 0 0 0 1000000 2000000 0.4 0.4 Example 2: Returns unnested data joined with the same table This example queries a single SKU to return the list price .
- FROM my - billing - admin - project . my billing dataset . cloud pricing export WHERE DATE ( PARTITIONTIME ) = "2020-07-20" AND sku . id = "2DA5-55D3-E679" ; Query results: Row sku id sku description service id service description aggregation info. aggregation level aggregation info. aggregation interval tiered rates. pricing unit quantity tiered rates. start usage amount tiered rates. usd amount tiered rates. account currency amount 1 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run ACCOUNT MONTHLY 1000000 0 0 0 1000000 2000000 0.4 0.4 Example 2: Returns unnested data joined with the same table This example queries a single SKU to return the list price .
- If your Cloud Billing account has custom contract pricing, billing-account-specific pricing data is exported as well. billing account price Struct If you have contract pricing, this is your custom SKU price from the contract that's linked to your Cloud Billing account, with the default consumption model price. billing account price contains fields that describe the structure and value of the custom contract pricing for Google Cloud and Google Maps Platform SKUs and SKU pricing tiers .

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When viewing costs by Invoice month , the following data is available in the Cloud Billing reports: Invoices generally include all costs incurred during a given calendar month, but the cost for some services' usage at the very end of a calendar month might roll over to the next month's invoice.
- Negotiated savings: When you set the report time range by Invoice month , starting with the May 2021 invoice, Cloud Billing accounts associated with a custom pricing contract display Negotiated savings as a savings column, separate from the List cost column.
- Adjustments : The sum of credit or debit memos and other adjustments applied to your Cloud Billing account due to billing corrections or contractual requirements, as reported from the invoices issued for the invoice month.
- As of May 2019, the following data is available in the Cloud Billing reports: Taxes : Taxes that were applied to your invoices are reported by Invoice month selected.

