---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.597Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing project-account link lock"
feature_slug: "cloud-billing-project-account-link-lock"
latest_feature_date: "2022-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/view-linked"
  - "https://docs.cloud.google.com/billing/docs/how-to/create-billing-account"
  - "https://docs.cloud.google.com/billing/docs/onboarding-checklist"
keywords:
  - "billing"
  - "project"
  - "account"
  - "link"
  - "lock"
  - "added"
  - "mechanism"
  - "secure"
---

# Cloud Billing project-account link lock

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Cloud Billing added a lock mechanism to secure the link between a Google Cloud project and its billing account, preventing accidental billing-state changes.

## Extended Definition

Cloud Billing added a lock mechanism to secure the link between a Google Cloud project and its billing account, preventing accidental billing-state changes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/view-linked](https://docs.cloud.google.com/billing/docs/how-to/view-linked)
- [https://docs.cloud.google.com/billing/docs/how-to/create-billing-account](https://docs.cloud.google.com/billing/docs/how-to/create-billing-account)
- [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist)

## Supporting Pages

### View projects linked to Cloud Billing accounts \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/view-linked](https://docs.cloud.google.com/billing/docs/how-to/view-linked)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- For information about unlocking or locking this link, see Secure the link between a project and its billing account .
- For information about unlocking or locking this link, see Secure the link between a project and its billing account .
- A padlock icon lock displays next to each project that's locked to its linked Cloud Billing account.
- A padlock icon lock displays next to each project that's locked to its linked Cloud Billing account.

### Create a new self-serve Cloud Billing account \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/create-billing-account](https://docs.cloud.google.com/billing/docs/how-to/create-billing-account)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Related topics Modify your Cloud Billing account Close or re-open your Cloud Billing account View projects linked to a Cloud Billing account Enable, disable, or change billing for a project Add, remove, or update a payment method Resolve billing issues View your cost and payment history View your billing reports and cost trends Try it for yourself If you're new to Google Cloud, create an account to evaluate how our products perform in real-world scenarios.
- Product Billing account needed to pay for product usage costs Google Cloud Cloud Billing account Google Maps Platform Cloud Billing account Google Cloud & Google Maps Platform 1 Cloud Billing account Google Workspace Google Workspace billing account Google Cloud & Google Workspace 1 Cloud Billing account + 1 Google Workspace billing account A project and its service-level resources are linked to one Cloud Billing account at a time.
- If you want to change the Cloud Billing account that you're using to pay for a project (that is, link a project to a different Cloud Billing account), see Enable, disable, or change billing for a project .
- Create a FinOps administration project To use many of the powerful tools available in Cloud Billing, you need a project that is linked to the billing account .

### "Guide to Cloud Billing Resource Organization and Access Management \_|\_\

- URL: [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Important Roles monetization on Role: Billing Account Admin The Billing Account Admin can: Manage payment instruments Enable Billing Export View costs and spend and set budget alerts Link and unlink projects Manage other user roles tied to the Billing Account Recommended Assignee This role is typically filled by someone with financial control at your company, for example, a business lead that owns the P&L or a technical team member with budget management responsibility.
- Importantly, because this role is required to contact Billing Support, you shouldn't use a service account or mailing list as a billing administrator. monetization on Role: Billing User Billing Users can: Link projects to billing accounts, but can't unlink them View costs Recommended Assignee This role is usually issued broadly in concert with the Project Creator role.
- Note: If you have many projects to move, try our gcloud tool to link projects to a billing account . ❑ star Settle and close any other billing accounts that you no longer intend to use to avoid potential issues in the future.
- You can label the service-level resources (for example, virtual machines), as well as your account-level resources (for example, projects). monetization on Cloud Billing accounts are linked to and pay for projects .

