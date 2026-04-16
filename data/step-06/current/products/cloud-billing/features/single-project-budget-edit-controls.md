---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.577Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Single-project budget edit controls"
feature_slug: "single-project-budget-edit-controls"
latest_feature_date: "2023-10-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets"
keywords:
  - "single"
  - "project"
  - "budget"
  - "edit"
  - "controls"
  - "introduces"
  - "let"
  - "billing"
---

# Single-project budget edit controls

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Introduces controls that let billing account users prevent project users from modifying single-project budgets.

## Extended Definition

Introduces controls that let billing account users prevent project users from modifying single-project budgets.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)
- [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets)

## Supporting Pages

### "Create, edit, or delete budgets and budget alerts \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- To create budgets for a project, you need a role that includes the following permissions on the project: resourcemanager.projects.get billing.resourceCosts.get (optional) billing.resourcebudgets.read billing.resourcebudgets.write To gain these permissions using a predefined role, ask your administrator to grant you one of the following IAM roles on your project: Project Owner Project Editor Optional project permission: A user with the billing.resourceCosts.get permission on the project can view the costs for the project, including reports and the cost trend chart that displays on the budget create or edit pages.
- To manage budgets for a project, you need a role that includes the following permissions on the project: resourcemanager.projects.get billing.resourceCosts.get (optional) billing.resourcebudgets.read billing.resourcebudgets.write To gain these permissions using a predefined role, ask your administrator to grant you one of the following IAM roles on your project: Project Owner Project Editor Optional project permission: A user with the billing.resourceCosts.get permission on the project can view the costs for the project, including reports and the cost trend chart that displays on the budget create or edit pages.
- To view a list of budgets for your project, you need a role that includes the following permissions on the project: resourcemanager.projects.get billing.resourceCosts.get (optional) billing.resourcebudgets.read To gain these permissions using a predefined role, ask your administrator to grant you one of the following IAM roles on your project: Project Owner Project Editor Project Viewer Optional project permission: A user with the billing.resourceCosts.get permission on the project can view the costs for the project, including reports and the cost trend chart that displays on the budget create or edit pages.
- For billing account users : Launch the create budgets tutorial For project users : Launch the create budgets tutorial To set up a new budget, you need to complete the following steps: Create and name the budget (Single-project budgets) Control access to the budget Set the budget scope Set the budget amount Set the budget threshold rules and actions Click finish to save the new budget For a deeper discussion about budgets, including all the options and considerations available in each step, continue reading this page.

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the folder or organization contains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects. creditTypes[] string Optional.
- Resource: Budget JSON representation Filter JSON representation CreditTypesTreatment CalendarPeriod CustomPeriod JSON representation BudgetAmount JSON representation LastPeriodAmount ThresholdRule JSON representation Basis NotificationsRule JSON representation OwnershipScope Methods Resource: Budget A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met).
- ALL USERS Both billing account-level users and project-level users have full access to the budget, if the users have the required IAM permissions.
- When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project.

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the folder or organization contains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects. creditTypes[] string Optional.
- Resource: Budget JSON representation Filter JSON representation CreditTypesTreatment CalendarPeriod CustomPeriod JSON representation BudgetAmount JSON representation LastPeriodAmount ThresholdRule JSON representation Basis AllUpdatesRule JSON representation OwnershipScope Methods Resource: Budget A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met).
- When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project.
- JSON representation { "projects" : [ string ] , "resourceAncestors" : [ string ] , "creditTypes" : [ string ] , "creditTypesTreatment" : enum ( CreditTypesTreatment ) , "services" : [ string ] , "subaccounts" : [ string ] , "labels" : { string : array , ... } , // Union field usage period can be only one of the following: "calendarPeriod" : enum ( CalendarPeriod ) , "customPeriod" : { object ( CustomPeriod ) } // End of list of possible types for union field usage period . } Fields projects[] string Optional.

