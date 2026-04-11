---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.328Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing Cost Table project-level tax breakdown"
feature_slug: "cloud-billing-cost-table-project-level-tax-breakdown"
latest_feature_date: "2020-11-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
keywords:
  - "billing"
  - "cost"
  - "table"
  - "project"
  - "level"
  - "tax"
  - "breakdown"
  - "updated"
---

# Cloud Billing Cost Table project-level tax breakdown

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Updated the Cost Table report to break out tax costs by project rather than only aggregated invoice-level tax entries.

## Extended Definition

Updated the Cost Table report to break out tax costs by project rather than only aggregated invoice-level tax entries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)

## Supporting Pages

### "Understand your savings with cost breakdown reports \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Examples For a Cloud Billing account associated with standard list prices (and for any billing account viewing costs incurred prior to May 1, 2021), the cost breakdown report displays a Usage cost column, along with any applicable credits and invoice-level charges: Figure 1 : Example of a cost breakdown report, showing the base usage cost and how that cost was affected by any credits, adjustments, and taxes.
- For a Cloud Billing account associated with a custom pricing contract , when viewing the report using a time range that starts May 1, 2021 , or later, the cost breakdown report displays a Usage cost column, and a Negotiated savings column, as well as any other applicable credits and invoice-level charges: Figure 2 : Example of the cost breakdown report for a Cloud Billing account associated with a custom pricing contract.
- Figure 3 : Example of the cost breakdown report for a Cloud Billing emphasizing the available report settings and filters, including time range, projects, services, and SKUs.
- When you set a usage date time range, the cost breakdown report doesn't display invoice-level charges , such as tax, contractual credits, surcharges, or adjustments.

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- For more information about Google Cloud project permissions, see: Access control for projects with IAM IAM basic and predefined roles reference Access the reports page To view the cost reports for your Cloud Billing account or project: Using the procedure that fits your level of access to Cloud Billing accounts , go to your Cloud Billing account in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.
- To view the Cloud Billing reports for a project, you need a role on the Google Cloud project that includes the following permissions : billing.resourceCosts.get resourcemanager.projects.get To gain these permissions using a predefined role , ask your administrator to grant you one of the following basic IAM roles on your Google Cloud projects: Project Viewer Project Editor Project Owner Note : If you are viewing Cloud Billing reports using project-level permissions only, some of the billing-account-level report features aren't available.
- Permissions required to access reports Depending on your level of Cloud Billing access, you can view cost reports for a Cloud Billing account (including viewing the costs for more than one project linked to the billing account), or you can view cost reports for individual projects.
- View the charges on your invoices Note: Invoices include charges for all of the projects linked to a billing account, as well as account-level charges not specific to a project, and invoice-level charges that are added at the time an invoice is generated (such as tax).

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Billing account ID Project ID SKU description Cost type Cost 123456-ABCDEF-123456 example-project N1 Predefined Instance Core Usage $60 123456-ABCDEF-123456 test-project N1 Predefined Instance Core Usage $40 123456-ABCDEF-123456 0 State sales tax (10.0%) Tax $10 For costs recorded after September 1, 2020, the $10 tax total is broken out to attribute $6 for example-project , and $4 for test-project : Billing account ID Project ID SKU description Cost type Cost 123456-ABCDEF-123456 example-project N1 Predefined Instance Core Usage $60 123456-ABCDEF-123456 example-project State sales tax (10.0%) Tax $6 123456-ABCDEF-123456 test-project N1 Predefined Instance Core Usage $40 123456-ABCDEF-123456 test-project State sales tax (10.0%) Tax $4 Viewing project-level taxes in the nested table view To view your tax costs by project in the nested table view , you must use or configure a Group by option with Project as the first grouping dimension.
- Taxes by project and by invoice Starting September 1, 2020, your cost details in the Cost table show your tax costs for each of your projects, instead of as an invoice-level cost.
- Viewing project-level taxes in the flat table view In the flat table view , if you have incurred tax costs, project-level taxes are displayed in rows near the end of the table.
- The Cost table report includes project-level cost details from your invoices and statements, including your tax costs broken out by project .

