---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.654Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cost forecasts in Cloud Billing reports"
feature_slug: "cost-forecasts-in-cloud-billing-reports"
latest_feature_date: "2018-07-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
keywords:
  - "cost"
  - "forecasts"
  - "billing"
  - "reports"
  - "now"
  - "include"
  - "ga"
  - "show"
---

# Cost forecasts in Cloud Billing reports

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Cloud Billing reports now include GA cost forecasts to show projected spending trends.

## Extended Definition

Cloud Billing reports now include GA cost forecasts to show projected spending trends.

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
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- To view the cost reports for your Cloud Billing account, including viewing the cost information for all of the Google Cloud projects that are linked to the billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.getSpendingInformation To gain these permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing To view all costs for an individual Google Cloud project, you need billing-specific permissions on the Google Cloud project .
- To view the Cloud Billing reports for a project, you need a role on the Google Cloud project that includes the following permissions : billing.resourceCosts.get resourcemanager.projects.get To gain these permissions using a predefined role , ask your administrator to grant you one of the following basic IAM roles on your Google Cloud projects: Project Viewer Project Editor Project Owner Note : If you are viewing Cloud Billing reports using project-level permissions only, some of the billing-account-level report features aren't available.
- As of May 2021, the following data is available in the Cloud Billing reports: Negotiated savings : Viewable for Cloud Billing accounts that are associated with a custom pricing contract, Negotiated savings shows the difference in cost between your contract price compared to the current list price.
- When viewing costs by Invoice month , the following data is available in the Cloud Billing reports: Invoices generally include all costs incurred during a given calendar month, but the cost for some services' usage at the very end of a calendar month might roll over to the next month's invoice.

### "Understand your savings with cost breakdown reports \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- If your Cloud Billing account is associated with a custom pricing contract , the on-demand rate used to calculate the gross cost of your usage depends on the Time range of the costs you are analyzing: When viewing the report using a time range that starts before May 1, 2021, the gross cost of your usage is calculated using your custom contract prices, and includes the savings you earned compared to list prices.
- Examples For a Cloud Billing account associated with standard list prices (and for any billing account viewing costs incurred prior to May 1, 2021), the cost breakdown report displays a Usage cost column, along with any applicable credits and invoice-level charges: Figure 1 : Example of a cost breakdown report, showing the base usage cost and how that cost was affected by any credits, adjustments, and taxes.
- Related topics View your Cloud Billing reports and cost trends Analyze the effectiveness of your committed use discounts Export Cloud Billing data to BigQuery View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If your Cloud Billing account is associated with a custom pricing contract , the on-demand rate used to calculate the gross cost of your usage depends on the time range of the costs you're analyzing: For costs incurred before May 1, 2021, your on-demand rate is based on your contract prices, and includes the savings you earned compared to list prices.

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Related topics Get an invoice, statement, or receipt Understand your monthly invoice View your Cloud Billing reports and cost trends Export Cloud Billing data to BigQuery View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Permissions required to access the Cost table report To view the Cost table report for your Cloud Billing account, you need a role that includes the following permission on your Cloud Billing account: billing.accounts.getSpendingInformation to view costs and usage for a billing account.
- When viewing the report for an invoice month prior to January 2022 , if you delete a project or move the project to a different Cloud Billing account , the Project name and Project ID are removed from the Cost table report views, but the Project number persists in your reports.
- Starting with your September 2020 invoice or statement, the Cost table report includes header information pulled from the generated document, including the billing account ID, total amount of the invoice or statement, and currency of the invoice or statement amount.

