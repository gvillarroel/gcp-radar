---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.363Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing Location-Based Cost Filtering and Grouping"
feature_slug: "cloud-billing-location-based-cost-filtering-and-grouping"
latest_feature_date: "2019-05-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown"
keywords:
  - "billing"
  - "location"
  - "based"
  - "cost"
  - "filtering"
  - "and"
  - "grouping"
  - "adds"
---

# Cloud Billing Location-Based Cost Filtering and Grouping

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Adds support for filtering and grouping billing report costs by geography, multi-region, and region.

## Extended Definition

Adds support for filtering and grouping billing report costs by geography, multi-region, and region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- The Group by options include the following: Single dimension Multiple dimension by date Multiple dimension by month Subaccount Project Project Hierarchy Service SKU Application Location: Region or multi-region Label keys No grouping (show total cost only) Date > Subaccount Date > Project Date > Project Hierarchy Date > Service Date > SKU Date > Application Date > Location: Region or multi-region Month > Subaccount Month > Project Month > Project Hierarchy Month > Service Month > SKU Month > Application Month > Location: Region or multi-region Single-dimension Group by options When using a single-dimension Group by option, the report table and the report chart display the data differently.
- Date-based Group by options Date > Subaccount Date > Project Date > Project Hierarchy Date > Service Date > SKU Date > Application Date > Location: Region or multi-region When you choose a date-based Group by option, (such as Date > Service ) the report chart shows the actual and forecasted costs for each day, and each row in the report table shows the actual cost for each day.
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Analyze billing data and cost trends with Reports Stay organized with collections Save and categorize content based on your preferences.
- About the default Cloud Billing report Based on your report filters and other settings, the report chart displays a stacked bar chart where each bar plots costs over time.

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Billing account ID Project ID SKU description Cost type Cost 123456-ABCDEF-123456 example-project N1 Predefined Instance Core Usage $60 123456-ABCDEF-123456 test-project N1 Predefined Instance Core Usage $40 123456-ABCDEF-123456 0 State sales tax (10.0%) Tax $10 For costs recorded after September 1, 2020, the $10 tax total is broken out to attribute $6 for example-project , and $4 for test-project : Billing account ID Project ID SKU description Cost type Cost 123456-ABCDEF-123456 example-project N1 Predefined Instance Core Usage $60 123456-ABCDEF-123456 example-project State sales tax (10.0%) Tax $6 123456-ABCDEF-123456 test-project N1 Predefined Instance Core Usage $40 123456-ABCDEF-123456 test-project State sales tax (10.0%) Tax $4 Viewing project-level taxes in the nested table view To view your tax costs by project in the nested table view , you must use or configure a Group by option with Project as the first grouping dimension.
- The totals in the footer include taxes (for each tax type), invoice corrections and billing modifications , and rounding errors (if applicable to your Cloud Billing account), as well as the total of the costs in the table, based on the selected filters.
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback View and download the cost details of your invoice or statement Stay organized with collections Save and categorize content based on your preferences.
- Figure 3 - Flat table view : Example of the Cost table report with no grouping option selected, and a few columns deselected for display (such as billing account name and billing account ID).

### "Understand your savings with cost breakdown reports \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- If your Cloud Billing account is associated with a custom pricing contract , the on-demand rate used to calculate the gross cost of your usage depends on the time range of the costs you're analyzing: For costs incurred before May 1, 2021, your on-demand rate is based on your contract prices, and includes the savings you earned compared to list prices.
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Understand your savings with cost breakdown reports Stay organized with collections Save and categorize content based on your preferences.
- Cost data filtered by application might be based on partial data, limited to projects and costs for the Cloud Billing account you are actively viewing.
- To gain this permission using a predefined role, ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Administrator Billing Account Costs Manager Billing Account Viewer For more information about billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined IAM roles for Cloud Billing Access the report To view the Cost breakdown report for your Cloud Billing account: In the Google Cloud console, go to your Cloud Billing account.

