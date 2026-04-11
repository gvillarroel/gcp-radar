---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.299Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing project-account link lock"
feature_slug: "cloud-billing-project-account-link-lock"
latest_feature_date: "2022-07-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/view-linked"
  - "https://docs.cloud.google.com/billing/docs/how-to/create-billing-account"
  - "https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator"
keywords:
  - "billing"
  - "project"
  - "account"
  - "link"
  - "lock"
  - "added"
  - "mechanism"
  - "to"
---

# Cloud Billing project-account link lock

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing added a lock mechanism to secure the link between a Google Cloud project and its billing account, preventing accidental billing-state changes.

## Extended Definition

Cloud Billing added a lock mechanism to secure the link between a Google Cloud project and its billing account, preventing accidental billing-state changes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/view-linked](https://docs.cloud.google.com/billing/docs/how-to/view-linked)
- [https://docs.cloud.google.com/billing/docs/how-to/create-billing-account](https://docs.cloud.google.com/billing/docs/how-to/create-billing-account)
- [https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator](https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator)

## Supporting Pages

### View projects linked to Cloud Billing accounts \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/view-linked](https://docs.cloud.google.com/billing/docs/how-to/view-linked)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- A padlock icon lock displays next to each project that's locked to its linked Cloud Billing account.
- A padlock icon lock displays next to each project that's locked to its linked Cloud Billing account.
- To gain this permission using a predefined role, ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator How to view the projects linked to a billing account Follow these steps to open a billing account and then view a list of projects linked to that billing account.
- To gain this permission using a predefined role, ask your administrator to grant you one of the following roles on your projects: Project Browser Project Viewer Project Editor Project Owner How to view a list of projects and their linked billing account Follow these steps to view a list of all your projects and the billing account linked to each project.

### Create a new self-serve Cloud Billing account \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/create-billing-account](https://docs.cloud.google.com/billing/docs/how-to/create-billing-account)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Related topics Modify your Cloud Billing account Close or re-open your Cloud Billing account View projects linked to a Cloud Billing account Enable, disable, or change billing for a project Add, remove, or update a payment method Resolve billing issues View your cost and payment history View your billing reports and cost trends Try it for yourself If you're new to Google Cloud, create an account to evaluate how our products perform in real-world scenarios.
- Product Billing account needed to pay for product usage costs Google Cloud Cloud Billing account Google Maps Platform Cloud Billing account Google Cloud & Google Maps Platform 1 Cloud Billing account Google Workspace Google Workspace billing account Google Cloud & Google Workspace 1 Cloud Billing account + 1 Google Workspace billing account A project and its service-level resources are linked to one Cloud Billing account at a time.
- If you want to change the Cloud Billing account that you're using to pay for a project (that is, link a project to a different Cloud Billing account), see Enable, disable, or change billing for a project .
- Create a FinOps administration project To use many of the powerful tools available in Cloud Billing, you need a project that is linked to the billing account .

### Find a Billing Account Administrator \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator](https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Billing Account Administrators can manage payment instruments, pay bills, configure billing data exports, view cost information, link and unlink projects, and manage user permissions on the billing account.
- Note: Neither the Billing Account Creator role (which is granted at the Organization level) nor the Project Billing Manager role (which is granted on a project) include the permissions needed to access basic information about the billing account.
- Administrator-level permissions on other Google Cloud resources, such as Project Owner, don't grant you the permissions you need to see basic billing account information.
- On the Cloud Billing account, you need a role that includes the following permissions : billing.accounts.get billing.accounts.getIamPolicy These permissions are granted in many predefined roles for Cloud Billing , including: Billing Account User Billing Account Viewer Billing Account Costs Manager Billing Account Administrator If you have some level of Cloud Billing account access, you can view basic information about the billing account, including viewing the Info panel to identify the administrators and other principals within your organization who have billing account permissions.

