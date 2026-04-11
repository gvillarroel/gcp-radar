---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.229Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Gemini Cloud Assist in Cloud Billing Reports"
feature_slug: "gemini-cloud-assist-in-cloud-billing-reports"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/gemini/set-up-gemini"
  - "https://docs.cloud.google.com/billing/docs/how-to/gemini/overview"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
keywords:
  - "gemini"
  - "assist"
  - "in"
  - "billing"
  - "reports"
  - "now"
  - "includes"
  - "to"
---

# Gemini Cloud Assist in Cloud Billing Reports

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing Reports now includes Gemini Cloud Assist support to help users access saved reports, create custom reports, and summarize report insights.

## Extended Definition

Cloud Billing Reports now includes Gemini Cloud Assist support to help users access saved reports, create custom reports, and summarize report insights.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/gemini/set-up-gemini](https://docs.cloud.google.com/billing/docs/how-to/gemini/set-up-gemini)
- [https://docs.cloud.google.com/billing/docs/how-to/gemini/overview](https://docs.cloud.google.com/billing/docs/how-to/gemini/overview)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)

## Supporting Pages

### Set up Gemini Cloud Assist in Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/gemini/set-up-gemini](https://docs.cloud.google.com/billing/docs/how-to/gemini/set-up-gemini)
- Source ID: `site-docs-root-2`
- Final score: 292
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Any custom roles for project permissions that you create need the following permissions to access Gemini Cloud Assist: geminicloudassist.companions.generateChat geminicloudassist.companions.generateCode serviceusage.services.use Grant IAM roles in a Cloud Billing account For users who need access to Cloud Billing cost data, you need to grant permissions on the Cloud Billing account that are adequate to access the Reports page and the FinOps hub .
- If the project users also have access to view Cloud Billing data , they can use Gemini Cloud Assist in Cloud Billing Reports and the FinOps hub to get AI assistance to create cost reports and to summarize key insights about cloud costs and optimization recommendations.
- For users who need access to Cloud Billing data and Gemini Cloud Assist in Cloud Billing, grant IAM roles in the Cloud Billing account that's linked to the project where the Gemini Cloud Assist API is enabled.
- After you enable the Gemini Cloud Assist API in the specified Google Cloud project, Gemini Cloud Assist is now available to all users who have the required IAM roles on the specified project.

### Gemini Cloud Assist in Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/gemini/overview](https://docs.cloud.google.com/billing/docs/how-to/gemini/overview)
- Source ID: `site-docs-root-2`
- Final score: 276
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You might be able to enable Gemini Cloud Assist from the billing report Consider the following when you view the Cloud Billing Reports page: If you haven't enabled the Gemini for Google Cloud API in a Google Cloud project but you have adequate project permissions to do so, you can select Enable Gemini API to use Gemini Cloud Assist in Cloud Billing: If you haven't enabled the Gemini for Google Cloud API in a Google Cloud project, and you don't have adequate project permissions to enable the API in any of the projects associated with the Cloud Billing account, the Enable Gemini API button is greyed out: Ask an administrator or project owner to set you up to use Gemini Cloud Assist in Cloud Billing .
- How to interact with Gemini Cloud Assist in Cloud Billing After you enable Gemini Cloud Assist in a Google Cloud project, in Cloud Billing you can find Gemini-provided assistance in the following places: Cloud Billing: Reports page and FinOps hub page Google Cloud console, including Cloud Billing pages: Gemini Cloud Assist chat panel Cloud Billing: Reports page and FinOps hub Cost Reports To access the new AI features in your Cloud Billing reports, log into the Google Cloud console, select the Gemini project, then open your Cloud Billing account and view the Reports page.
- DevOps and FinOps practitioners who want to use Gemini Cloud Assist to understand cloud costs, identify opportunities for cost savings, and get AI insights to maximize cloud resource utilization and performance can use the Gemini-assisted Cloud Billing tools available in the following Billing pages: Cost Reports : For assistance in finding or creating a billing report to gain insights into your Google Cloud spending, identify key trends, and uncover what's driving your Cloud Billing costs, use the Gemini Cloud Assist prompt available on the Cloud Billing Reports page .
- When you're viewing the Reports page, if the Gemini Cloud Assist API is already enabled in a Google Cloud project where you have adequate project permissions to use Gemini assistants, you see the Gemini Cloud Assist in Cloud Billing features on the Reports page: What you can do if Gemini is not enabled in billing reports If Gemini Cloud Assist in Cloud Billing is not yet enabled, you can still access the preconfigured and saved reports in the See all reports tab.

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Also, for customers who have enabled Gemini Cloud Assist in Cloud Billing , the preset reports and your custom saved reports are accessible in a carousel that displays below the Ask Gemini Cloud Assist prompt field.
- Also, for customers who have enabled Gemini Cloud Assist in Cloud Billing , your custom saved reports and the preset reports are accessible in a carousel that displays below the Ask Gemini Cloud Assist prompt field.
- Note that to use the reports carousel, you must enable Gemini Cloud Assist in Cloud Billing .
- To view the cost reports for your Cloud Billing account, including viewing the cost information for all of the Google Cloud projects that are linked to the billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.getSpendingInformation To gain these permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing To view all costs for an individual Google Cloud project, you need billing-specific permissions on the Google Cloud project .

