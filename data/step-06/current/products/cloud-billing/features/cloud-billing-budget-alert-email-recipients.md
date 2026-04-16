---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.633Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing budget alert email recipients"
feature_slug: "cloud-billing-budget-alert-email-recipients"
latest_feature_date: "2020-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients"
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets"
  - "https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets"
keywords:
  - "billing"
  - "budget"
  - "alert"
  - "email"
  - "recipients"
  - "notifications"
  - "can"
  - "now"
---

# Cloud Billing budget alert email recipients

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Budget notifications can now be sent to up to five additional recipients through Cloud Monitoring notification configuration.

## Extended Definition

Budget notifications can now be sent to up to five additional recipients through Cloud Monitoring notification configuration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients](https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients)
- [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)

## Supporting Pages

### "Customize budget alert email recipients \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients](https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To manage budgets for a project and customize the email recipients of budget alerts, you need a role that includes these specific permissions: resourcemanager.projects.get on your project, to view the projects associations (such as the linked billing account) for your project. billing.resourceCosts.get on your project (optional), to view costs and usage for your project. billing.resourcebudgets.read on your project, to view a billing account's single-project budgets that are scoped to your project. billing.resourcebudgets.write on your project, to create or modify single-project budgets that are scoped to your project. roles/monitoring.editor on the project where you want to create notification channels, or roles/monitoring.viewer on the project that stores the notification channels.
- About Google Cloud permissions For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing For more information about Google Cloud project permissions, see: Access control for projects with IAM IAM basic and predefined roles reference Set up and enable Cloud Monitoring email notifications To customize the email addresses that will receive budget alert notifications, link notification channels to your budget.
- Permissions required for the recipients of budget alert emails When you select Cloud Monitoring email notification channels to customize who receives alert emails (in addition to Billing Account Administrators, Billing Account Users, or Project Owners), the email addresses you specify are sent the budget alert emails when the threshold rules trigger an alert.
- If you want the recipients of the alert emails to be able to view the budget, email recipients need permissions on the Cloud Billing account (to view billing-account-level budgets) or on the budget's project (for single-project-scoped budgets).

### "Create, edit, or delete budgets and budget alerts \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In this document, you can learn how to: Create a budget View a list of budgets and their status Modify or delete a budget Create and manage budgets using an API Customize budget alert email recipients Automate cost control responses using programmatic notifications Permissions required to manage budgets Budgets can be configured for a Cloud Billing account (which can include multiple linked projects), or for individual projects.
- Cloud Monitoring notification channels for email notifications Beyond sending alert emails to Billing Account Administrators and Billing Account Users on the target Cloud Billing account, you can customize the email recipients using Cloud Monitoring notifications to send alerts to email addresses of your choice.
- If you set the optional Monitoring email notifications channels to specify the email alert recipients, then when the budget thresholds are met, a budget alert email is sent to the Cloud Monitoring email notification channels you linked to the budget.
- Manage notifications Set the manage notifications options to do any of the following: Control the default email behavior of budget alert notifications and customize the recipients of the alert emails using Cloud Monitoring notifications.

### "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When a threshold is crossed (spend exceeds the specified percentages of the budget), budget alert emails are sent to the email recipients you specify in the NotificationsRule .
- To customize budget alert email recipients with monitoring notification channels, you must create the monitoring notification channels before you link them to a budget .
- For guidance on setting up notification channels to use with budgets, see Customize budget alert email recipients .
- This is in addition to the DefaultIamRecipients who receive alert emails based on their billing account IAM role.

