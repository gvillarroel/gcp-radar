---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.217Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Dark theme in Cloud Billing console"
feature_slug: "dark-theme-in-cloud-billing-console"
latest_feature_date: "2025-04-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator"
  - "https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-id"
  - "https://docs.cloud.google.com/billing/docs/how-to/gemini/set-up-gemini"
keywords:
  - "dark"
  - "theme"
  - "in"
  - "billing"
  - "console"
  - "the"
  - "section"
  - "of"
---

# Dark theme in Cloud Billing console

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

The Cloud Billing section of Google Cloud Console now supports a preview dark theme preference for user interface customization.

## Extended Definition

The Cloud Billing section of Google Cloud Console now supports a preview dark theme preference for user interface customization.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator](https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator)
- [https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-id](https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-id)
- [https://docs.cloud.google.com/billing/docs/how-to/gemini/set-up-gemini](https://docs.cloud.google.com/billing/docs/how-to/gemini/set-up-gemini)

## Supporting Pages

### Find a Billing Account Administrator \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator](https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View permissions for a Cloud Billing account in the Info panel In the Billing section of the Google Cloud console, the Info panel is available on the My Billing Accounts page, and on the Account management page.
- To access the Info panel on the My Billing Accounts page and view your Billing Account Administrators, do the following: In the Google Cloud console, go to the My Billing Accounts page in the Billing section.
- On the Cloud Billing account, you need a role that includes the following permissions : billing.accounts.get billing.accounts.getIamPolicy These permissions are granted in many predefined roles for Cloud Billing , including: Billing Account User Billing Account Viewer Billing Account Costs Manager Billing Account Administrator If you have some level of Cloud Billing account access, you can view basic information about the billing account, including viewing the Info panel to identify the administrators and other principals within your organization who have billing account permissions.
- Learn more about principals in IAM What to do if you have no billing account access If you don't have permissions to access the Cloud Billing account, and you need to locate your Billing Account Administrator, try the following options: Recommended : Locate someone at your company or organization who has some level of permissions to access the Cloud Billing account and ask them to look up the billing account administrators.

### Find a Cloud Billing account ID \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-id](https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-id)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- To view a list of all projects you can access and their associated Cloud Billing account, complete the following steps: In the Google Cloud console, go to the My Projects page in the Billing section.
- The billing account ID is displayed on multiple pages in the Billing section of the Google Cloud console.
- The method you use to find the billing account ID depends on your Cloud Billing access permissions : Users with basic Cloud Billing account permissions Users with project-level permissions only (no billing account permissions) If you have basic Billing Account permissions If you are granted the billing.accounts.get permission on a Cloud Billing account, you can access the Billing section in the Google Cloud console to view the billing account ID.
- Go to My Billing Accounts in Cloud Billing console If you have billing accounts for more than one organization, and you want to view accounts across all of your organizations, expand the organization selector and choose None Selected .

### Set up Gemini Cloud Assist in Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/gemini/set-up-gemini](https://docs.cloud.google.com/billing/docs/how-to/gemini/set-up-gemini)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required permissions: for detailed guidance about the permissions required to access Billing Reports , see the Permissions required to access reports section available in the "Analyze billing data and cost trends with Reports" article.
- Advanced IAM setup tasks for projects Instead of using the Google Cloud console or the gcloud CLI to grant predefined IAM roles on a project, you can do any of the following: Use IAM REST APIs or IAM client libraries to grant roles.
- Required permissions: for detailed guidance about the permissions required to access the Billing FinOps hub , see the Permissions required to access the FinOps hub section available in the "Optimize costs with FinOps hub" article.
- Grant access: for guidance on how to grant access to a Cloud Billing account, see the Update user permissions for a Cloud Billing account section available in the "Manage access to Cloud Billing accounts" article.

