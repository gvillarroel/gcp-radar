---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.366Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Bar chart view in Cloud Billing reports"
feature_slug: "bar-chart-view-in-cloud-billing-reports"
latest_feature_date: "2018-11-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown"
  - "https://docs.cloud.google.com/billing/docs/how-to/gemini/overview"
keywords:
  - "bar"
  - "chart"
  - "view"
  - "in"
  - "billing"
  - "reports"
  - "now"
  - "include"
---

# Bar chart view in Cloud Billing reports

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing reports now include a bar chart visualization option for spending analysis.

## Extended Definition

Cloud Billing reports now include a bar chart visualization option for spending analysis.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- [https://docs.cloud.google.com/billing/docs/how-to/gemini/overview](https://docs.cloud.google.com/billing/docs/how-to/gemini/overview)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To view the cost reports for your Cloud Billing account, including viewing the cost information for all of the Google Cloud projects that are linked to the billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.getSpendingInformation To gain these permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing To view all costs for an individual Google Cloud project, you need billing-specific permissions on the Google Cloud project .
- To view the Cloud Billing reports for a project, you need a role on the Google Cloud project that includes the following permissions : billing.resourceCosts.get resourcemanager.projects.get To gain these permissions using a predefined role , ask your administrator to grant you one of the following basic IAM roles on your Google Cloud projects: Project Viewer Project Editor Project Owner Note : If you are viewing Cloud Billing reports using project-level permissions only, some of the billing-account-level report features aren't available.
- When viewing costs by Invoice month , the following data is available in the Cloud Billing reports: Invoices generally include all costs incurred during a given calendar month, but the cost for some services' usage at the very end of a calendar month might roll over to the next month's invoice.
- For more information about Google Cloud project permissions, see: Access control for projects with IAM IAM basic and predefined roles reference Access the reports page To view the cost reports for your Cloud Billing account or project: Using the procedure that fits your level of access to Cloud Billing accounts , go to your Cloud Billing account in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.

### "Understand your savings with cost breakdown reports \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When viewing the values in the bar chart using currency , the amounts of charges, credits, and subtotals and totals are prefaced with the symbol for the currency of your Cloud Billing account (for example, USD: $, GBP: £, EUR: €, or JPY: ¥).
- The summary table includes a row for each bar on the chart, displays the effective % rates of costs and savings, and provides links to open related report pages where you can view the details behind specific cost breakdown report values.
- If your Cloud Billing account is associated with a custom pricing contract , the on-demand rate used to calculate the gross cost of your usage depends on the Time range of the costs you are analyzing: When viewing the report using a time range that starts before May 1, 2021, the gross cost of your usage is calculated using your custom contract prices, and includes the savings you earned compared to list prices.
- Related topics View your Cloud Billing reports and cost trends Analyze the effectiveness of your committed use discounts Export Cloud Billing data to BigQuery View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Gemini Cloud Assist in Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/gemini/overview](https://docs.cloud.google.com/billing/docs/how-to/gemini/overview)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Write better prompts for reports When you ask Gemini Cloud Assist in Cloud Billing to find or create a report, you should include as much context and specific detail as possible when you describe the report you want to view.
- You might be able to enable Gemini Cloud Assist from the billing report Consider the following when you view the Cloud Billing Reports page: If you haven't enabled the Gemini for Google Cloud API in a Google Cloud project but you have adequate project permissions to do so, you can select Enable Gemini API to use Gemini Cloud Assist in Cloud Billing: If you haven't enabled the Gemini for Google Cloud API in a Google Cloud project, and you don't have adequate project permissions to enable the API in any of the projects associated with the Cloud Billing account, the Enable Gemini API button is greyed out: Ask an administrator or project owner to set you up to use Gemini Cloud Assist in Cloud Billing .
- How to interact with Gemini Cloud Assist in Cloud Billing After you enable Gemini Cloud Assist in a Google Cloud project, in Cloud Billing you can find Gemini-provided assistance in the following places: Cloud Billing: Reports page and FinOps hub page Google Cloud console, including Cloud Billing pages: Gemini Cloud Assist chat panel Cloud Billing: Reports page and FinOps hub Cost Reports To access the new AI features in your Cloud Billing reports, log into the Google Cloud console, select the Gemini project, then open your Cloud Billing account and view the Reports page.
- When you're viewing the Reports page, if the Gemini Cloud Assist API is already enabled in a Google Cloud project where you have adequate project permissions to use Gemini assistants, you see the Gemini Cloud Assist in Cloud Billing features on the Reports page: What you can do if Gemini is not enabled in billing reports If Gemini Cloud Assist in Cloud Billing is not yet enabled, you can still access the preconfigured and saved reports in the See all reports tab.

