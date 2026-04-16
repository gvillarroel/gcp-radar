---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.644Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing Cost Breakdown Reports"
feature_slug: "cloud-billing-cost-breakdown-reports"
latest_feature_date: "2019-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
keywords:
  - "billing"
  - "cost"
  - "breakdown"
  - "reports"
  - "introduces"
  - "provide"
  - "summary"
  - "view"
---

# Cloud Billing Cost Breakdown Reports

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Introduces Cost Breakdown reports to provide a summary view of invoice savings from usage-based discounts and credits.

## Extended Definition

Introduces Cost Breakdown reports to provide a summary view of invoice savings from usage-based discounts and credits.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)

## Supporting Pages

### "Understand your savings with cost breakdown reports \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- Source ID: `site-docs-root`
- Final score: 243
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The summary table includes a row for each bar on the chart, displays the effective % rates of costs and savings, and provides links to open related report pages where you can view the details behind specific cost breakdown report values.
- To gain this permission using a predefined role, ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Administrator Billing Account Costs Manager Billing Account Viewer For more information about billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined IAM roles for Cloud Billing Access the report To view the Cost breakdown report for your Cloud Billing account: In the Google Cloud console, go to your Cloud Billing account.
- For a Cloud Billing account associated with a custom pricing contract , when viewing the report using a time range that starts May 1, 2021 , or later, the cost breakdown report displays a Usage cost column, and a Negotiated savings column, as well as any other applicable credits and invoice-level charges: Figure 2 : Example of the cost breakdown report for a Cloud Billing account associated with a custom pricing contract.
- Examples For a Cloud Billing account associated with standard list prices (and for any billing account viewing costs incurred prior to May 1, 2021), the cost breakdown report displays a Usage cost column, along with any applicable credits and invoice-level charges: Figure 1 : Example of a cost breakdown report, showing the base usage cost and how that cost was affected by any credits, adjustments, and taxes.

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Related topics Export Cloud Billing data to BigQuery Understand your savings with cost breakdown reports View your cost and payment history Create, modify, or close your Cloud Billing account Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To view the cost reports for your Cloud Billing account, including viewing the cost information for all of the Google Cloud projects that are linked to the billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.getSpendingInformation To gain these permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing To view all costs for an individual Google Cloud project, you need billing-specific permissions on the Google Cloud project .
- For more information about Google Cloud project permissions, see: Access control for projects with IAM IAM basic and predefined roles reference Access the reports page To view the cost reports for your Cloud Billing account or project: Using the procedure that fits your level of access to Cloud Billing accounts , go to your Cloud Billing account in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.
- To view the Cloud Billing reports for a project, you need a role on the Google Cloud project that includes the following permissions : billing.resourceCosts.get resourcemanager.projects.get To gain these permissions using a predefined role , ask your administrator to grant you one of the following basic IAM roles on your Google Cloud projects: Project Viewer Project Editor Project Owner Note : If you are viewing Cloud Billing reports using project-level permissions only, some of the billing-account-level report features aren't available.

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Related topics Get an invoice, statement, or receipt Understand your monthly invoice View your Cloud Billing reports and cost trends Export Cloud Billing data to BigQuery View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When viewing the report for an invoice month prior to January 2022 , if you delete a project or move the project to a different Cloud Billing account , the Project name and Project ID are removed from the Cost table report views, but the Project number persists in your reports.
- Due to the complexity of our billing and processing systems, you might see a delay between your use of services, and the usage and costs being available to view in Cloud Billing and other cost reports and billing dashboards.
- To view your usage costs by actual usage date (calendar date or date range), see the online reports or analyze your exported billing data .

