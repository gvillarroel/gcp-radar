---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.585Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Budget scope for folders and organizations"
feature_slug: "budget-scope-for-folders-and-organizations"
latest_feature_date: "2023-06-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets"
keywords:
  - "budget"
  - "scope"
  - "folders"
  - "organizations"
  - "extends"
  - "billing"
  - "options"
  - "include"
---

# Budget scope for folders and organizations

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Extends Cloud Billing budget scope options to include folders and organizations, covering future projects within those scopes.

## Extended Definition

Extends Cloud Billing budget scope options to include folders and organizations, covering future projects within those scopes.

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
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Billing account level access To modify or delete budgets for your Cloud Billing account, you need a role that includes the following permissions on the Cloud Billing account: billing.budgets.get and billing.budgets.list to view all budgets for the Cloud Billing account. billing.budgets.update to modify an existing budget billing.budgets.delete to delete a budget To gain these permissions using a predefined role, ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Administrator Billing Account Costs Manager Project level access to manage budgets If you have limited or no access to a Cloud Billing account, you might have access to modify or delete a budget that is scoped only to the projects that you own, one project at a time.
- Billing account level access To view a list of budgets for your Cloud Billing account, you need a role that includes the following permissions on the Cloud Billing account: billing.budgets.get billing.budgets.list To gain these permissions using a predefined role, ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Administrator Billing Account Costs Manager Billing Account Viewer Project level access to view budgets If you have limited or no access to a Cloud Billing account, you can still view a list of budgets that are scoped only to the projects that you own, one project at a time.
- For billing account users : Launch the create budgets tutorial For project users : Launch the create budgets tutorial To set up a new budget, you need to complete the following steps: Create and name the budget (Single-project budgets) Control access to the budget Set the budget scope Set the budget amount Set the budget threshold rules and actions Click finish to save the new budget For a deeper discussion about budgets, including all the options and considerations available in each step, continue reading this page.
- Email recipients include: If you select the role-based email options, then budget alert emails are sent to Billing Account Administrators and Billing Account Users on the target Cloud Billing account.

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId} , specifying that usage from only this set of folders and organizations should be included in the budget.
- A set of subaccounts of the form billingAccounts/{account id} , specifying that usage from only this set of subaccounts should be included in the budget.
- Multiple options to choose the budget's time period, specifying that only usage that occurs during this time period should be included in the budget.
- If omitted, the budget includes all usage that the billing account pays for.

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId} , specifying that usage from only this set of folders and organizations should be included in the budget.
- A set of subaccounts of the form billingAccounts/{account id} , specifying that usage from only this set of subaccounts should be included in the budget.
- Multiple options to choose the budget's time period, specifying that only usage that occurs during this time period should be included in the budget.
- If omitted, the budget includes all usage that the billing account pays for.

