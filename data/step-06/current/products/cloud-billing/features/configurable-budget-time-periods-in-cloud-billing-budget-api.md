---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.321Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Configurable budget time periods in Cloud Billing Budget API"
feature_slug: "configurable-budget-time-periods-in-cloud-billing-budget-api"
latest_feature_date: "2021-04-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets/get"
keywords:
  - "configurable"
  - "budget"
  - "time"
  - "periods"
  - "in"
  - "billing"
  - "api"
  - "adds"
---

# Configurable budget time periods in Cloud Billing Budget API

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Adds support in the Budget API for non-monthly budget periods using usage_period with CalendarPeriod or CustomPeriod values.

## Extended Definition

Adds support in the Budget API for non-monthly budget periods using usage_period with CalendarPeriod or CustomPeriod values.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)
- [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets)
- [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets/get](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets/get)

## Supporting Pages

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Costs and usage management Cloud Billing APIs & Reference Send feedback REST Resource: billingAccounts.budgets Stay organized with collections Save and categorize content based on your preferences.
- Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget's time period, as well as other filters. amount object ( BudgetAmount ) Required.
- It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification format . monitoringNotificationChannels[] string Optional.
- Methods create Creates a new budget. delete Deletes a budget. get Returns a budget. list Returns a list of budgets for a billing account. patch Updates a budget and returns the updated budget.

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Costs and usage management Cloud Billing APIs & Reference Send feedback REST Resource: billingAccounts.budgets Stay organized with collections Save and categorize content based on your preferences.
- Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget's time period, as well as other filters. amount object ( BudgetAmount ) Required.
- See https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#permissions required for this task for more details on Pub/Sub roles and permissions. schemaVersion string Optional.
- It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification format . monitoringNotificationChannels[] string Optional.

### "Method: billingAccounts.budgets.get \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets/get](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets/get)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Costs and usage management Cloud Billing APIs & Reference Send feedback Method: billingAccounts.budgets.get Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://billingbudgets.googleapis.com/v1/{name=billingAccounts/ /budgets/ } The URL uses gRPC Transcoding syntax.
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/cloud-billing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Authorization requires the following IAM permission on the specified resource name : billing.budgets.get Request body The request body must be empty.

