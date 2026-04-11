---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.297Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Tags integration in Cloud Billing cost exports"
feature_slug: "tags-integration-in-cloud-billing-cost-exports"
latest_feature_date: "2022-09-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets"
keywords:
  - "tags"
  - "integration"
  - "in"
  - "billing"
  - "cost"
  - "exports"
  - "now"
  - "includes"
---

# Tags integration in Cloud Billing cost exports

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing now includes resource Tags in standard and detailed usage cost exports, enabling cost queries for chargeback, audits, and allocations.

## Extended Definition

Cloud Billing now includes resource Tags in standard and detailed usage cost exports, enabling cost queries for chargeback, audits, and allocations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator](https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator)
- [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- To view the cost reports for your Cloud Billing account, including viewing the cost information for all of the Google Cloud projects that are linked to the billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.getSpendingInformation To gain these permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing To view all costs for an individual Google Cloud project, you need billing-specific permissions on the Google Cloud project .
- To view the Cloud Billing reports for a project, you need a role on the Google Cloud project that includes the following permissions : billing.resourceCosts.get resourcemanager.projects.get To gain these permissions using a predefined role , ask your administrator to grant you one of the following basic IAM roles on your Google Cloud projects: Project Viewer Project Editor Project Owner Note : If you are viewing Cloud Billing reports using project-level permissions only, some of the billing-account-level report features aren't available.
- Promotional credits for custom pricing contracts : If you have a custom pricing contract with Google Cloud, and received promotional credits that apply to costs at list prices , your report includes a service called Invoice , with a SKU called Contract billing adjustment .
- For more information about Google Cloud project permissions, see: Access control for projects with IAM IAM basic and predefined roles reference Access the reports page To view the cost reports for your Cloud Billing account or project: Using the procedure that fits your level of access to Cloud Billing accounts , go to your Cloud Billing account in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.

### Find a Billing Account Administrator \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator](https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- On the Cloud Billing account, you need a role that includes the following permissions : billing.accounts.get billing.accounts.getIamPolicy These permissions are granted in many predefined roles for Cloud Billing , including: Billing Account User Billing Account Viewer Billing Account Costs Manager Billing Account Administrator If you have some level of Cloud Billing account access, you can view basic information about the billing account, including viewing the Info panel to identify the administrators and other principals within your organization who have billing account permissions.
- Billing Account Administrators can manage payment instruments, pay bills, configure billing data exports, view cost information, link and unlink projects, and manage user permissions on the billing account.
- If all else fails : If you have no way to know who your Billing Account Administrators are and you (or your organization) have lost access to your Cloud Billing account and you need to regain access, you can contact Cloud Billing Support using the account recovery form .
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Find a Billing Account Administrator Stay organized with collections Save and categorize content based on your preferences.

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Costs and usage management Cloud Billing APIs & Reference Send feedback REST Resource: billingAccounts.budgets Stay organized with collections Save and categorize content based on your preferences.
- If omitted, the report includes all usage for the billing account, regardless of which project the usage occurred on. resourceAncestors[] string Optional.
- If omitted, the budget includes all usage that the billing account pays for.
- It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification format . monitoringNotificationChannels[] string Optional.

