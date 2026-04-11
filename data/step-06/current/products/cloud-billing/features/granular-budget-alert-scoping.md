---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.358Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Granular Budget Alert Scoping"
feature_slug: "granular-budget-alert-scoping"
latest_feature_date: "2019-08-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets"
keywords:
  - "granular"
  - "budget"
  - "alert"
  - "scoping"
  - "adds"
  - "more"
  - "filters"
  - "so"
---

# Granular Budget Alert Scoping

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Adds more granular budget filters so budgets and budget alerts can target groups of projects and services.

## Extended Definition

Adds more granular budget filters so budgets and budget alerts can target groups of projects and services.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets)
- [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)

## Supporting Pages

### "Create, edit, or delete budgets and budget alerts \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- To view a list of budgets for your Cloud Billing account, do the following: Using the procedure that fits your level of access to Cloud Billing accounts, sign in to the Budgets & alerts page in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.
- To modify or delete a budget, do the following: Using the procedure that fits your level of access to Cloud Billing accounts, sign in to the Budgets & alerts page in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.
- Create and name the budget Using the procedure that fits your level of access to Cloud Billing accounts, sign in to the Budgets & alerts page in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.
- Subaccounts : (Only available to billing-account-level budgets.) If you're a reseller and your Cloud Billing account has subaccounts, in the Subaccounts field, select one or more subaccounts that you want to apply the budget alert to.

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Resource: Budget JSON representation Filter JSON representation CreditTypesTreatment CalendarPeriod CustomPeriod JSON representation BudgetAmount JSON representation LastPeriodAmount ThresholdRule JSON representation Basis AllUpdatesRule JSON representation OwnershipScope Methods Resource: Budget A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met).
- Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget's time period, as well as other filters. amount object ( BudgetAmount ) Required.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-10 UTC."],[],[]]
- JSON representation { "name" : string , "displayName" : string , "budgetFilter" : { object ( Filter ) } , "amount" : { object ( BudgetAmount ) } , "thresholdRules" : [ { object ( ThresholdRule ) } ] , "allUpdatesRule" : { object ( AllUpdatesRule ) } , "etag" : string , "ownershipScope" : enum ( OwnershipScope ) } Fields name string Output only.

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Resource: Budget JSON representation Filter JSON representation CreditTypesTreatment CalendarPeriod CustomPeriod JSON representation BudgetAmount JSON representation LastPeriodAmount ThresholdRule JSON representation Basis NotificationsRule JSON representation OwnershipScope Methods Resource: Budget A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met).
- Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget's time period, as well as other filters. amount object ( BudgetAmount ) Required.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-10 UTC."],[],[]]
- JSON representation { "name" : string , "displayName" : string , "budgetFilter" : { object ( Filter ) } , "amount" : { object ( BudgetAmount ) } , "thresholdRules" : [ { object ( ThresholdRule ) } ] , "notificationsRule" : { object ( NotificationsRule ) } , "etag" : string , "ownershipScope" : enum ( OwnershipScope ) } Fields name string Output only.

