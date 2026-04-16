---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.546Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "App Hub integration with Cloud Billing reports and FinOps hub"
feature_slug: "app-hub-integration-with-cloud-billing-reports-and-finops-hub"
latest_feature_date: "2025-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown"
keywords:
  - "app"
  - "hub"
  - "integration"
  - "billing"
  - "reports"
  - "finops"
  - "applications"
  - "now"
---

# App Hub integration with Cloud Billing reports and FinOps hub

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

App Hub applications are now integrated into Cloud Billing cost reports and FinOps hub for application-level cost analysis and optimization insights.

## Extended Definition

App Hub applications are now integrated into Cloud Billing cost reports and FinOps hub for application-level cost analysis and optimization insights.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights](https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- To view the cost reports for your Cloud Billing account, including viewing the cost information for all of the Google Cloud projects that are linked to the billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.getSpendingInformation To gain these permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing To view all costs for an individual Google Cloud project, you need billing-specific permissions on the Google Cloud project .
- For more information about Google Cloud project permissions, see: Access control for projects with IAM IAM basic and predefined roles reference Access the reports page To view the cost reports for your Cloud Billing account or project: Using the procedure that fits your level of access to Cloud Billing accounts , go to your Cloud Billing account in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.
- To view the Cloud Billing reports for a project, you need a role on the Google Cloud project that includes the following permissions : billing.resourceCosts.get resourcemanager.projects.get To gain these permissions using a predefined role , ask your administrator to grant you one of the following basic IAM roles on your Google Cloud projects: Project Viewer Project Editor Project Owner Note : If you are viewing Cloud Billing reports using project-level permissions only, some of the billing-account-level report features aren't available.
- CSV file name For the Reports data, the file name follows this pattern: [Billing Account name] Reports, [YYYY-MM-DD] — [YYYY-MM-DD].csv For example, a CSV file of the Reports data downloaded for a Cloud Billing account named My Billing Account , for a date range of October 1 to December 31, 2022 , is named: My Billing Account Reports, 2022-10-01 - 2022-12-31.csv Duplicate report names If you download a report with the same date range multiple times, then the default report name will be the same.

### "Understand your savings with cost breakdown reports \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Related topics View your Cloud Billing reports and cost trends Analyze the effectiveness of your committed use discounts Export Cloud Billing data to BigQuery View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Understand your savings with cost breakdown reports Stay organized with collections Save and categorize content based on your preferences.
- To learn more about organizations, folders, and project hierarchy, see Billing reports: Analyzing your costs by project hierarchy .
- To learn more about organizations, folders, and project hierarchy, see Billing reports: Analyzing your costs by project hierarchy .

### "Review utilization and wasted usage insights \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights](https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights)
- Source ID: `site-docs-root-2`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Go to FinOps hub At the prompt, choose the Cloud Billing account for which you want to view the FinOps hub.
- Resources FinOps hub Google Cloud Well-Architected Framework: Cost optimization Optimize costs with committed use discounts Purchasing spend-based committed use discounts Purchasing resource-based committed use discounts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google Kubernetes Engine (GKE) Idle clusters Overprovisioned clusters Underprovisioned clusters Cloud SQL Idle SQL instances Overprovisioned SQL instances Underprovisioned SQL instances Cloud Run Suboptimal configuration: The recommender looks at CPU allocation configuration and determines if there is a different billing model available that would be less expensive to use.
- View recommendation Summarize and send with Gemini Cloud Assist On the FinOps Utilization insights dashboard, you can discover if resources are used efficiently and view high-impact utilization insights based on the potential costs of wasted resources.

