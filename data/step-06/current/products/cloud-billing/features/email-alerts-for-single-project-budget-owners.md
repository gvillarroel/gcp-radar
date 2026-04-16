---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.581Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Email alerts for single-project budget owners"
feature_slug: "email-alerts-for-single-project-budget-owners"
latest_feature_date: "2023-08-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets"
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets"
keywords:
  - "email"
  - "alerts"
  - "single"
  - "project"
  - "budget"
  - "owners"
  - "adds"
  - "notification"
---

# Email alerts for single-project budget owners

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Adds an email notification option that sends budget alerts to project owners for budgets scoped to a single project.

## Extended Definition

Adds an email notification option that sends budget alerts to project owners for budgets scoped to a single project.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- [https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients](https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients)
- [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)

## Supporting Pages

### "Create, edit, or delete budgets and budget alerts \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using the role-based option for single-project budgets, you can send email alerts to Project Owners of the budget's project.
- For single-project budgets, the email alerts can also be sent to the project's Project Owners.
- In this document, you can learn how to: Create a budget View a list of budgets and their status Modify or delete a budget Create and manage budgets using an API Customize budget alert email recipients Automate cost control responses using programmatic notifications Permissions required to manage budgets Budgets can be configured for a Cloud Billing account (which can include multiple linked projects), or for individual projects.
- Role-based email notifications The options available for setting a role-based email alert depend on the project scope set on the budget.

### "Customize budget alert email recipients \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients](https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients)
- Source ID: `site-docs-root-2`
- Final score: 239
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For budgets scoped to a single project, you can also send email alerts to Project Owners of the budget's project ( Preview ), when the budget alert threshold rules trigger an email notification.
- To manage budgets for a project and customize the email recipients of budget alerts, you need a role that includes these specific permissions: resourcemanager.projects.get on your project, to view the projects associations (such as the linked billing account) for your project. billing.resourceCosts.get on your project (optional), to view costs and usage for your project. billing.resourcebudgets.read on your project, to view a billing account's single-project budgets that are scoped to your project. billing.resourcebudgets.write on your project, to create or modify single-project budgets that are scoped to your project. roles/monitoring.editor on the project where you want to create notification channels, or roles/monitoring.viewer on the project that stores the notification channels.
- Link your budget to email notification channels After you create an email notification channel, follow these steps to link your budget to it: Using the procedure that fits your level of access to Cloud Billing accounts, sign in to the Budgets & alerts page in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only ( Preview ) If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.
- Permissions required for the recipients of budget alert emails When you select Cloud Monitoring email notification channels to customize who receives alert emails (in addition to Billing Account Administrators, Billing Account Users, or Project Owners), the email addresses you specify are sent the budget alert emails when the threshold rules trigger an alert.

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 205
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource: Budget JSON representation Filter JSON representation CreditTypesTreatment CalendarPeriod CustomPeriod JSON representation BudgetAmount JSON representation LastPeriodAmount ThresholdRule JSON representation Basis NotificationsRule JSON representation OwnershipScope Methods Resource: Budget A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met).
- When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project.
- For Cloud Billing budget alerts, you must use email notification channels .
- JSON representation { "name" : string , "displayName" : string , "budgetFilter" : { object ( Filter ) } , "amount" : { object ( BudgetAmount ) } , "thresholdRules" : [ { object ( ThresholdRule ) } ] , "notificationsRule" : { object ( NotificationsRule ) } , "etag" : string , "ownershipScope" : enum ( OwnershipScope ) } Fields name string Output only.

