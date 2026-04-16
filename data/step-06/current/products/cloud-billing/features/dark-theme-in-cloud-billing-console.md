---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.548Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Dark theme in Cloud Billing console"
feature_slug: "dark-theme-in-cloud-billing-console"
latest_feature_date: "2025-04-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup"
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications"
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients"
keywords:
  - "dark"
  - "theme"
  - "billing"
  - "console"
  - "section"
  - "now"
  - "supports"
  - "preview"
---

# Dark theme in Cloud Billing console

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

The Cloud Billing section of Google Cloud Console now supports a preview dark theme preference for user interface customization.

## Extended Definition

The Cloud Billing section of Google Cloud Console now supports a preview dark theme preference for user interface customization.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup)
- [https://docs.cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications](https://docs.cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications)
- [https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients](https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients)

## Supporting Pages

### Set up Cloud Billing data export to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup)
- Source ID: `site-docs-root-2`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- You enable Cloud Billing data export in the Cloud Billing section of the Google Cloud console.
- Resource-level tags are available for the following resources: Compute Engine instances Spanner instances Cloud Run services Artifact Registry repositories Related topics Topics related to exported Cloud Billing data Understanding the Cloud Billing data tables in BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Overview of billing data export to BigQuery Next Understand the billing data tables in BigQuery arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Committed use discounts (CUD) metadata (Preview) - Contains Cloud Billing CUD metadata information, such as billing account ID, CUD product ID, CUD product type, consumption model ID and description, subscription instance ID, subscription entitlement scope, commitment amount, and term.
- Enable Cloud Billing export to the BigQuery dataset Note: (Resellers) You can set up a reseller-specific export of your Channel Services billing data to a specified BigQuery dataset using the Partner Sales Console.

### "Set up programmatic notifications \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications](https://docs.cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Budget notifications To connect a Pub/Sub topic to a Cloud Billing budget, complete the following steps: Users with Cloud Billing account permissions Users with project-level permissions only ( Preview ) Sign in to the Budgets & alerts page in the Google Cloud console.
- Anomaly notifications To connect a Pub/Sub topic to a cost anomaly, complete the following steps: Users with Cloud Billing account permissions ( Preview ) Sign in to the Anomalies page in the Google Cloud console.
- Navigate to the Billing section: Open the Google Cloud console Navigation menu menu and select Billing .
- Users with Cloud Billing account permissions Users with project-level permissions only ( Preview ) If your organization uses custom roles for authentication, you need the following permissions in the custom roles: billing.budgets.create on the Cloud Billing account. billing.budgets.get on the Cloud Billing account. billing.budgets.list on the Cloud Billing account. billing.budgets.update on the Cloud Billing account. pubsub.topics.setIamPolicy on the target project that contains the Pub/Sub topics that you want to use. pubsub.topics.list on the target project that contains the Pub/Sub topics that you want to use.

### "Customize budget alert email recipients \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients](https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients)
- Source ID: `site-docs-root-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Link your budget to email notification channels After you create an email notification channel, follow these steps to link your budget to it: Using the procedure that fits your level of access to Cloud Billing accounts, sign in to the Budgets & alerts page in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only ( Preview ) If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.
- If you only have project permissions, but don't have any permissions on your project's Cloud Billing account, you need to select your project before you navigate to the Billing section.
- The people you specify to receive alert emails using email notification channels might not have the correct permissions to view the Cloud Billing budgets in the Google Cloud console.
- Next, navigate to Billing : Open the Google Cloud console Navigation menu menu , and then select Billing .

