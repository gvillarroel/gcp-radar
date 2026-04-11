---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.301Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing cost table report enhancements"
feature_slug: "cloud-billing-cost-table-report-enhancements"
latest_feature_date: "2022-04-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown"
keywords:
  - "billing"
  - "cost"
  - "table"
  - "report"
  - "enhancements"
  - "the"
  - "gained"
  - "updated"
---

# Cloud Billing cost table report enhancements

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

The Cloud Billing cost table report gained updated filters, project-ancestry support, and shareable report URLs with bookmarkable views.

## Extended Definition

The Cloud Billing cost table report gained updated filters, project-ancestry support, and shareable report URLs with bookmarkable views.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- To view the cost reports for your Cloud Billing account, including viewing the cost information for all of the Google Cloud projects that are linked to the billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.getSpendingInformation To gain these permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing To view all costs for an individual Google Cloud project, you need billing-specific permissions on the Google Cloud project .
- The Group by options include the following: Single dimension Multiple dimension by date Multiple dimension by month Subaccount Project Project Hierarchy Service SKU Application Location: Region or multi-region Label keys No grouping (show total cost only) Date > Subaccount Date > Project Date > Project Hierarchy Date > Service Date > SKU Date > Application Date > Location: Region or multi-region Month > Subaccount Month > Project Month > Project Hierarchy Month > Service Month > SKU Month > Application Month > Location: Region or multi-region Single-dimension Group by options When using a single-dimension Group by option, the report table and the report chart display the data differently.
- For more information about Google Cloud project permissions, see: Access control for projects with IAM IAM basic and predefined roles reference Access the reports page To view the cost reports for your Cloud Billing account or project: Using the procedure that fits your level of access to Cloud Billing accounts , go to your Cloud Billing account in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.
- To view the Cloud Billing reports for a project, you need a role on the Google Cloud project that includes the following permissions : billing.resourceCosts.get resourcemanager.projects.get To gain these permissions using a predefined role , ask your administrator to grant you one of the following basic IAM roles on your Google Cloud projects: Project Viewer Project Editor Project Owner Note : If you are viewing Cloud Billing reports using project-level permissions only, some of the billing-account-level report features aren't available.

### "Understand the Cloud Billing data tables in BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables)
- Source ID: `site-docs-root-2`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Resource-level tags are available for the following resources: Compute Engine instances Spanner instances Cloud Run services Artifact Registry repositories Related topics Topics related to exported Cloud Billing data Set up Cloud Billing data export to BigQuery Standard usage cost table Detailed usage cost table Pricing data table Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Set up billing data export to BigQuery Next Structure of Standard data export arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Understand the Cloud Billing data tables in BigQuery Stay organized with collections Save and categorize content based on your preferences.
- Because the usage reporting frequency varies by Google Cloud service, you might not see Cloud Billing usage and cost data right away for all recently used Google Cloud services.
- For your BigQuery datasets containing standard usage cost data or detailed usage cost data , the type of location you configure on the dataset impacts the timing of when your Google Cloud billing data is exported to the dataset: If you configure the dataset to use a multi-region location (EU or US), the dataset includes Google Cloud billing data incurred from the start of the previous month from when you first enabled the export.

### "Understand your savings with cost breakdown reports \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- To gain this permission using a predefined role, ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Administrator Billing Account Costs Manager Billing Account Viewer For more information about billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined IAM roles for Cloud Billing Access the report To view the Cost breakdown report for your Cloud Billing account: In the Google Cloud console, go to your Cloud Billing account.
- CSV filename For the cost breakdown data, the CSV filename follows this pattern: [Billing Account name] Cost Breakdown, [YYYY-MM-DD] - [YYYY-MM-DD].csv For example, a CSV file of the cost breakdown data downloaded for a Cloud Billing account named My Billing Account , for a date range of October 1 to December 31, 2022 , is named: My Billing Account Cost Breakdown, 2022-10-01 - 2022-12-31.csv Note: If you download a report with the same date range multiple times, then the default report name will be the same.
- For a Cloud Billing account associated with a custom pricing contract , when viewing the report using a time range that starts May 1, 2021 , or later, the cost breakdown report displays a Usage cost column, and a Negotiated savings column, as well as any other applicable credits and invoice-level charges: Figure 2 : Example of the cost breakdown report for a Cloud Billing account associated with a custom pricing contract.
- If your Cloud Billing account is associated with a custom pricing contract , the on-demand rate used to calculate the gross cost of your usage depends on the Time range of the costs you are analyzing: When viewing the report using a time range that starts before May 1, 2021, the gross cost of your usage is calculated using your custom contract prices, and includes the savings you earned compared to list prices.

