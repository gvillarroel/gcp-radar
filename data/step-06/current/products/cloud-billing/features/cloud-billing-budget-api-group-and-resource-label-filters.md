---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.631Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing Budget API group and resource-label filters"
feature_slug: "cloud-billing-budget-api-group-and-resource-label-filters"
latest_feature_date: "2020-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets"
keywords:
  - "billing"
  - "budget"
  - "group"
  - "resource"
  - "label"
  - "filters"
  - "now"
  - "supports"
---

# Cloud Billing Budget API group and resource-label filters

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

The Cloud Billing Budget API now supports budget filters for groups of subaccounts and resource labels.

## Extended Definition

The Cloud Billing Budget API now supports budget filters for groups of subaccounts and resource labels.

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
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- To create budgets for a project, you need a role that includes the following permissions on the project: resourcemanager.projects.get billing.resourceCosts.get (optional) billing.resourcebudgets.read billing.resourcebudgets.write To gain these permissions using a predefined role, ask your administrator to grant you one of the following IAM roles on your project: Project Owner Project Editor Optional project permission: A user with the billing.resourceCosts.get permission on the project can view the costs for the project, including reports and the cost trend chart that displays on the budget create or edit pages.
- To manage budgets for a project, you need a role that includes the following permissions on the project: resourcemanager.projects.get billing.resourceCosts.get (optional) billing.resourcebudgets.read billing.resourcebudgets.write To gain these permissions using a predefined role, ask your administrator to grant you one of the following IAM roles on your project: Project Owner Project Editor Optional project permission: A user with the billing.resourceCosts.get permission on the project can view the costs for the project, including reports and the cost trend chart that displays on the budget create or edit pages.
- To view a list of budgets for your project, you need a role that includes the following permissions on the project: resourcemanager.projects.get billing.resourceCosts.get (optional) billing.resourcebudgets.read To gain these permissions using a predefined role, ask your administrator to grant you one of the following IAM roles on your project: Project Owner Project Editor Project Viewer Optional project permission: A user with the billing.resourceCosts.get permission on the project can view the costs for the project, including reports and the cost trend chart that displays on the budget create or edit pages.
- While you're creating a new budget , when you click the View report link, your budget scope filters are automatically applied 1 to the billing report filters to configure your billing report view to match your budget scope.

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget's time period, as well as other filters. amount object ( BudgetAmount ) Required.
- Home Documentation Costs and usage management Cloud Billing APIs & Reference Send feedback REST Resource: billingAccounts.budgets Stay organized with collections Save and categorize content based on your preferences.
- A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget.
- JSON representation { "projects" : [ string ] , "resourceAncestors" : [ string ] , "creditTypes" : [ string ] , "creditTypesTreatment" : enum ( CreditTypesTreatment ) , "services" : [ string ] , "subaccounts" : [ string ] , "labels" : { string : array , ... } , // Union field usage period can be only one of the following: "calendarPeriod" : enum ( CalendarPeriod ) , "customPeriod" : { object ( CustomPeriod ) } // End of list of possible types for union field usage period . } Fields projects[] string Optional.

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget's time period, as well as other filters. amount object ( BudgetAmount ) Required.
- Home Documentation Costs and usage management Cloud Billing APIs & Reference Send feedback REST Resource: billingAccounts.budgets Stay organized with collections Save and categorize content based on your preferences.
- BILLING ACCOUNT Only billing account users have full access to the Budget , resource-level users have read-only access, provided that they have the required IAM permissions.
- ALL USERS The Budget is fully accessible to both billing account users and resource users, provided that they have the required IAM permissions.

