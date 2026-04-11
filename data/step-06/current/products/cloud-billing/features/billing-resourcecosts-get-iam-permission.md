---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.370Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "billing.resourceCosts.get IAM permission"
feature_slug: "billing-resourcecosts-get-iam-permission"
latest_feature_date: "2018-08-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets"
keywords:
  - "billing"
  - "resourcecosts"
  - "get"
  - "iam"
  - "permission"
  - "new"
  - "was"
  - "introduced"
---

# billing.resourceCosts.get IAM permission

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

A new Cloud Billing IAM permission, billing.resourceCosts.get, was introduced to provide project-specific access to cost data such as billing reports.

## Extended Definition

A new Cloud Billing IAM permission, billing.resourceCosts.get, was introduced to provide project-specific access to cost data such as billing reports.

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
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- To create budgets for a project, you need a role that includes the following permissions on the project: resourcemanager.projects.get billing.resourceCosts.get (optional) billing.resourcebudgets.read billing.resourcebudgets.write To gain these permissions using a predefined role, ask your administrator to grant you one of the following IAM roles on your project: Project Owner Project Editor Optional project permission: A user with the billing.resourceCosts.get permission on the project can view the costs for the project, including reports and the cost trend chart that displays on the budget create or edit pages.
- To manage budgets for a project, you need a role that includes the following permissions on the project: resourcemanager.projects.get billing.resourceCosts.get (optional) billing.resourcebudgets.read billing.resourcebudgets.write To gain these permissions using a predefined role, ask your administrator to grant you one of the following IAM roles on your project: Project Owner Project Editor Optional project permission: A user with the billing.resourceCosts.get permission on the project can view the costs for the project, including reports and the cost trend chart that displays on the budget create or edit pages.
- To view a list of budgets for your project, you need a role that includes the following permissions on the project: resourcemanager.projects.get billing.resourceCosts.get (optional) billing.resourcebudgets.read To gain these permissions using a predefined role, ask your administrator to grant you one of the following IAM roles on your project: Project Owner Project Editor Project Viewer Optional project permission: A user with the billing.resourceCosts.get permission on the project can view the costs for the project, including reports and the cost trend chart that displays on the budget create or edit pages.
- Billing account level access To modify or delete budgets for your Cloud Billing account, you need a role that includes the following permissions on the Cloud Billing account: billing.budgets.get and billing.budgets.list to view all budgets for the Cloud Billing account. billing.budgets.update to modify an existing budget billing.budgets.delete to delete a budget To gain these permissions using a predefined role, ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Administrator Billing Account Costs Manager Project level access to manage budgets If you have limited or no access to a Cloud Billing account, you might have access to modify or delete a budget that is scoped only to the projects that you own, one project at a time.

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- ALL USERS Both billing account-level users and project-level users have full access to the budget, if the users have the required IAM permissions.
- Methods create Creates a new budget. delete Deletes a budget. get Returns a budget. list Returns a list of budgets for a billing account. patch Updates a budget and returns the updated budget.
- Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account. enableProjectLevelRecipients boolean Optional.
- The ownership scope and users' IAM permissions determine who has full access to the budget's data.

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- BILLING ACCOUNT Only billing account users have full access to the Budget , resource-level users have read-only access, provided that they have the required IAM permissions.
- ALL USERS The Budget is fully accessible to both billing account users and resource users, provided that they have the required IAM permissions.
- See https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#permissions required for this task for more details on Pub/Sub roles and permissions. schemaVersion string Optional.
- Methods create Creates a new budget. delete Deletes a budget. get Returns a budget. list Returns a list of budgets for a billing account. patch Updates a budget and returns the updated budget.

