---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.591Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud console cost estimation preview"
feature_slug: "cloud-console-cost-estimation-preview"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/onboarding-checklist"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients"
keywords:
  - "console"
  - "cost"
  - "estimation"
  - "preview"
  - "feature"
  - "lets"
  - "users"
  - "estimate"
---

# Cloud console cost estimation preview

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

A preview feature in Google Cloud console lets users estimate Compute Engine and Cloud Storage workload costs, including custom contract pricing.

## Extended Definition

A preview feature in Google Cloud console lets users estimate Compute Engine and Cloud Storage workload costs, including custom contract pricing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients](https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients)

## Supporting Pages

### "Guide to Cloud Billing Resource Organization and Access Management \_|\_\

- URL: [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Importantly, because this role is required to contact Billing Support, you shouldn't use a service account or mailing list as a billing administrator. monetization on Role: Billing User Billing Users can: Link projects to billing accounts, but can't unlink them View costs Recommended Assignee This role is usually issued broadly in concert with the Project Creator role.
- Configure Access ❑ Grant access to view Billing Reports to people in finance and other departments and roles where users need to track spend or need to review cost anomalies. ❑ Assign multiple Billing Account Administrators to each Billing Account – you might also consider using Organization-level permissions.
- Note: To ensure that Cloud Billing accounts are only created by users that should handle payment information, settings, and cost attribution for the organization, minimize the number of users that are granted the role of Billing Account Creator.
- Configure Access ❑ Review the patterns for adding or synchronizing users and groups . ❑ Add users and groups using the admin console , via Google Cloud Directory Sync , or using the Admin SDK API .

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- For more information about Google Cloud project permissions, see: Access control for projects with IAM IAM basic and predefined roles reference Access the reports page To view the cost reports for your Cloud Billing account or project: Using the procedure that fits your level of access to Cloud Billing accounts , go to your Cloud Billing account in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.
- This document teaches you how to access Cloud Billing Reports in the Google Cloud console and how to configure reports, providing details on how to use the various report settings, filters, and report features to track and understand your Google Cloud usage costs.
- To view the Cloud Billing reports for a project, you need a role on the Google Cloud project that includes the following permissions : billing.resourceCosts.get resourcemanager.projects.get To gain these permissions using a predefined role , ask your administrator to grant you one of the following basic IAM roles on your Google Cloud projects: Project Viewer Project Editor Project Owner Note : If you are viewing Cloud Billing reports using project-level permissions only, some of the billing-account-level report features aren't available.
- Learn more about BigQuery Introduction to SQL in BigQuery Overview of BigQuery analytics Explore using BigQuery in the Google Cloud console About BigQuery IAM roles and permissions Control access to BigQuery resources with IAM Estimating BigQuery storage and query costs Save and share report views You can set many options to customize your online reports.

### "Customize budget alert email recipients \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients](https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients)
- Source ID: `site-docs-root-2`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Link your budget to email notification channels After you create an email notification channel, follow these steps to link your budget to it: Using the procedure that fits your level of access to Cloud Billing accounts, sign in to the Budgets & alerts page in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only ( Preview ) If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.
- Use this option if your organization's Billing Account Administrators, Billing Account Users, and Project Owners aren't the best recipients to take cost control actions based on the alerts.
- To create or modify a budget scoped for a project that you own (this feature is in Preview ), you need the Project Owner role or the Project Editor role on the Google Cloud project.
- Use this option if Billing Account Administrators and Billing Account Users can take cost control actions based on the alert emails.

