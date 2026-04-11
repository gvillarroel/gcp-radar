---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.264Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "One-click budget creation and alert setup"
feature_slug: "one-click-budget-creation-and-alert-setup"
latest_feature_date: "2024-03-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets"
keywords:
  - "one"
  - "click"
  - "budget"
  - "creation"
  - "and"
  - "alert"
  - "setup"
  - "billing"
---

# One-click budget creation and alert setup

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing now supports creating a first budget in one step from the Billing Overview page with recommended alert thresholds and alerting at 50%, 75%, 100%, and 150% spend levels.

## Extended Definition

Cloud Billing now supports creating a first budget in one step from the Billing Overview page with recommended alert thresholds and alerting at 50%, 75%, 100%, and 150% spend levels.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)
- [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets)

## Supporting Pages

### "Create, edit, or delete budgets and budget alerts \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Subaccounts : (Only available to billing-account-level budgets.) If you're a reseller and your Cloud Billing account has subaccounts, in the Subaccounts field, select one or more subaccounts that you want to apply the budget alert to.
- Billing account level access To modify or delete budgets for your Cloud Billing account, you need a role that includes the following permissions on the Cloud Billing account: billing.budgets.get and billing.budgets.list to view all budgets for the Cloud Billing account. billing.budgets.update to modify an existing budget billing.budgets.delete to delete a budget To gain these permissions using a predefined role, ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Administrator Billing Account Costs Manager Project level access to manage budgets If you have limited or no access to a Cloud Billing account, you might have access to modify or delete a budget that is scoped only to the projects that you own, one project at a time.
- To create budgets for a project, you need a role that includes the following permissions on the project: resourcemanager.projects.get billing.resourceCosts.get (optional) billing.resourcebudgets.read billing.resourcebudgets.write To gain these permissions using a predefined role, ask your administrator to grant you one of the following IAM roles on your project: Project Owner Project Editor Optional project permission: A user with the billing.resourceCosts.get permission on the project can view the costs for the project, including reports and the cost trend chart that displays on the budget create or edit pages.
- To manage budgets for a project, you need a role that includes the following permissions on the project: resourcemanager.projects.get billing.resourceCosts.get (optional) billing.resourcebudgets.read billing.resourcebudgets.write To gain these permissions using a predefined role, ask your administrator to grant you one of the following IAM roles on your project: Project Owner Project Editor Optional project permission: A user with the billing.resourceCosts.get permission on the project can view the costs for the project, including reports and the cost trend chart that displays on the budget create or edit pages.

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Costs and usage management Cloud Billing APIs & Reference Send feedback REST Resource: billingAccounts.budgets Stay organized with collections Save and categorize content based on your preferences.
- Methods create Creates a new budget. delete Deletes a budget. get Returns a budget. list Returns a list of budgets for a billing account. patch Updates a budget and returns the updated budget.
- ALL USERS Both billing account-level users and project-level users have full access to the budget, if the users have the required IAM permissions.
- For Cloud Billing budget alerts, you must use email notification channels .

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Costs and usage management Cloud Billing APIs & Reference Send feedback REST Resource: billingAccounts.budgets Stay organized with collections Save and categorize content based on your preferences.
- See https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#permissions required for this task for more details on Pub/Sub roles and permissions. schemaVersion string Optional.
- Methods create Creates a new budget. delete Deletes a budget. get Returns a budget. list Returns a list of budgets for a billing account. patch Updates a budget and returns the updated budget.
- ALL USERS The Budget is fully accessible to both billing account users and resource users, provided that they have the required IAM permissions.

