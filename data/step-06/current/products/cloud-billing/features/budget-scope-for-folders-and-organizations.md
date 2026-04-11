---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.280Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Budget scope for folders and organizations"
feature_slug: "budget-scope-for-folders-and-organizations"
latest_feature_date: "2023-06-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets"
keywords:
  - "budget"
  - "scope"
  - "for"
  - "folders"
  - "and"
  - "organizations"
  - "extends"
  - "billing"
---

# Budget scope for folders and organizations

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Extends Cloud Billing budget scope options to include folders and organizations, covering future projects within those scopes.

## Extended Definition

Extends Cloud Billing budget scope options to include folders and organizations, covering future projects within those scopes.

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
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Billing account level access To modify or delete budgets for your Cloud Billing account, you need a role that includes the following permissions on the Cloud Billing account: billing.budgets.get and billing.budgets.list to view all budgets for the Cloud Billing account. billing.budgets.update to modify an existing budget billing.budgets.delete to delete a budget To gain these permissions using a predefined role, ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Administrator Billing Account Costs Manager Project level access to manage budgets If you have limited or no access to a Cloud Billing account, you might have access to modify or delete a budget that is scoped only to the projects that you own, one project at a time.
- For billing account users : Launch the create budgets tutorial For project users : Launch the create budgets tutorial To set up a new budget, you need to complete the following steps: Create and name the budget (Single-project budgets) Control access to the budget Set the budget scope Set the budget amount Set the budget threshold rules and actions Click finish to save the new budget For a deeper discussion about budgets, including all the options and considerations available in each step, continue reading this page.
- For users with project-only permissions : If you're a project user, and are accessing the Cloud Billing account using project permissions only, then the budget is automatically scoped to a single project – the project that you selected in the Google Cloud console before you accessed the Billing section.
- A budget can apply to an entire Cloud Billing account or can be scoped to selected subaccounts (for resellers), projects, products/services, a label, and savings types.

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId} , specifying that usage from only this set of folders and organizations should be included in the budget.
- Methods create Creates a new budget. delete Deletes a budget. get Returns a budget. list Returns a list of budgets for a billing account. patch Updates a budget and returns the updated budget.
- Resource: Budget JSON representation Filter JSON representation CreditTypesTreatment CalendarPeriod CustomPeriod JSON representation BudgetAmount JSON representation LastPeriodAmount ThresholdRule JSON representation Basis NotificationsRule JSON representation OwnershipScope Methods Resource: Budget A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met).
- Home Documentation Costs and usage management Cloud Billing APIs & Reference Send feedback REST Resource: billingAccounts.budgets Stay organized with collections Save and categorize content based on your preferences.

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId} , specifying that usage from only this set of folders and organizations should be included in the budget.
- See https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#permissions required for this task for more details on Pub/Sub roles and permissions. schemaVersion string Optional.
- Methods create Creates a new budget. delete Deletes a budget. get Returns a budget. list Returns a list of budgets for a billing account. patch Updates a budget and returns the updated budget.
- Resource: Budget JSON representation Filter JSON representation CreditTypesTreatment CalendarPeriod CustomPeriod JSON representation BudgetAmount JSON representation LastPeriodAmount ThresholdRule JSON representation Basis AllUpdatesRule JSON representation OwnershipScope Methods Resource: Budget A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met).

