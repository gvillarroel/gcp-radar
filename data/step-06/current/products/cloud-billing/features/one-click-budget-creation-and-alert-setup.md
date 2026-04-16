---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.573Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "One-click budget creation and alert setup"
feature_slug: "one-click-budget-creation-and-alert-setup"
latest_feature_date: "2024-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets"
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients"
  - "https://docs.cloud.google.com/billing/docs/onboarding-checklist"
keywords:
  - "one"
  - "click"
  - "budget"
  - "creation"
  - "alert"
  - "setup"
  - "billing"
  - "now"
---

# One-click budget creation and alert setup

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Cloud Billing now supports creating a first budget in one step from the Billing Overview page with recommended alert thresholds and alerting at 50%, 75%, 100%, and 150% spend levels.

## Extended Definition

Cloud Billing now supports creating a first budget in one step from the Billing Overview page with recommended alert thresholds and alerting at 50%, 75%, 100%, and 150% spend levels.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- [https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients](https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients)
- [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist)

## Supporting Pages

### "Create, edit, or delete budgets and budget alerts \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- On the Budgets & alerts page for the selected billing account, click add box Create budget .
- For billing account users : Launch the create budgets tutorial For project users : Launch the create budgets tutorial To set up a new budget, you need to complete the following steps: Create and name the budget (Single-project budgets) Control access to the budget Set the budget scope Set the budget amount Set the budget threshold rules and actions Click finish to save the new budget For a deeper discussion about budgets, including all the options and considerations available in each step, continue reading this page.
- To view a list of budgets for your Cloud Billing account, do the following: Using the procedure that fits your level of access to Cloud Billing accounts, sign in to the Budgets & alerts page in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.
- In this document, you can learn how to: Create a budget View a list of budgets and their status Modify or delete a budget Create and manage budgets using an API Customize budget alert email recipients Automate cost control responses using programmatic notifications Permissions required to manage budgets Budgets can be configured for a Cloud Billing account (which can include multiple linked projects), or for individual projects.

### "Customize budget alert email recipients \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients](https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients)
- Source ID: `site-docs-root-2`
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To manage budgets for a project and customize the email recipients of budget alerts, you need a role that includes these specific permissions: resourcemanager.projects.get on your project, to view the projects associations (such as the linked billing account) for your project. billing.resourceCosts.get on your project (optional), to view costs and usage for your project. billing.resourcebudgets.read on your project, to view a billing account's single-project budgets that are scoped to your project. billing.resourcebudgets.write on your project, to create or modify single-project budgets that are scoped to your project. roles/monitoring.editor on the project where you want to create notification channels, or roles/monitoring.viewer on the project that stores the notification channels.
- About Google Cloud permissions For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing For more information about Google Cloud project permissions, see: Access control for projects with IAM IAM basic and predefined roles reference Set up and enable Cloud Monitoring email notifications To customize the email addresses that will receive budget alert notifications, link notification channels to your budget.
- Link your budget to email notification channels After you create an email notification channel, follow these steps to link your budget to it: Using the procedure that fits your level of access to Cloud Billing accounts, sign in to the Budgets & alerts page in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only ( Preview ) If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.
- Permissions required for the recipients of budget alert emails When you select Cloud Monitoring email notification channels to customize who receives alert emails (in addition to Billing Account Administrators, Billing Account Users, or Project Owners), the email addresses you specify are sent the budget alert emails when the threshold rules trigger an alert.

### "Guide to Cloud Billing Resource Organization and Access Management \_|\_\

- URL: [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Important Roles monetization on Role: Billing Account Admin The Billing Account Admin can: Manage payment instruments Enable Billing Export View costs and spend and set budget alerts Link and unlink projects Manage other user roles tied to the Billing Account Recommended Assignee This role is typically filled by someone with financial control at your company, for example, a business lead that owns the P&L or a technical team member with budget management responsibility.
- Create a FinOps administration project to use for billing APIs and project-dependent billing tools. ❑ attach money Set up budget alerts with multiple alert thresholds to reduce spending surprises and unexpected cost overruns. ❑ attach money Set up automatic exports of billing data to use for monitoring and analyzing costs.
- Role: Billing Account Admin The Billing Account Admin can enable Billing Export, view cost and spend, set budgets and alerts, and link or unlink projects.
- The setup guide contains the following sections: Domain and Organization Domain (and Identity) Organizations Cloud Billing Accounts Google payments Profiles and Accounts Projects, Folders, and Labels Domain and Organization The Domain and Organization sit at the top of the resource hierarchy.

