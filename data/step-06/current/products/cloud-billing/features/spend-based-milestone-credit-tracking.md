---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.556Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Spend-based milestone credit tracking"
feature_slug: "spend-based-milestone-credit-tracking"
latest_feature_date: "2024-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets"
  - "https://docs.cloud.google.com/billing/docs/onboarding-checklist"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
keywords:
  - "spend"
  - "based"
  - "milestone"
  - "credit"
  - "tracking"
  - "users"
  - "can"
  - "now"
---

# Spend-based milestone credit tracking

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Users can now track promotional credits from spend-based milestone contract pricing programs in the Google Cloud console.

## Extended Definition

Users can now track promotional credits from spend-based milestone contract pricing programs in the Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)

## Supporting Pages

### "Create, edit, or delete budgets and budget alerts \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Promotional credits : Promotional credits are things like spend-based milestone credits , Google Cloud Free Trial , and marketing campaign credits, or other grants to use Google Cloud.
- Legacy spend-based CUD credits : For spend-based committed use discounts (CUDs) that aren't part of the new pricing model, this is the credit earned in exchange for your commitment to spend a minimum amount for a service in a particular region.
- This option sends alert emails to Billing Account Administrators and Billing Account Users on the target Cloud Billing account (that is, every user assigned a billing role of either roles/billing.admin or roles/billing.user ) To opt out of Cloud Billing account role-based email notifications, clear Email alerts to billing admins and users .
- About Savings types Savings programs include the various committed use discounts (CUDs) options, which lower the cost of your Google Cloud usage by offering discounts and credits tied to your resource usage or spending.

### "Guide to Cloud Billing Resource Organization and Access Management \_|\_\

- URL: [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Overview Projects are: Required to use resources (such as Compute Engine virtual machines, Pub/Sub topics, and Cloud Storage buckets) The base-level organizing entity in Google Cloud – all service-level resources are parented by projects Used to form the basis for enabling services, APIs, and IAM permissions Folders are: A grouping mechanism for projects and can contain both projects and other folders Used to group resources that share common IAM policies Mapped under an Organization node (you must have an Organization node to use folders) Labels are: Used to categorize your Google Cloud resources (such as Compute Engine instances) Key-value pairs you attach to resources, letting you filter resources based on their labels Great for cost tracking at a granular-level because they're forwarded to the billing system so you can analyze your charges by label stars Key Decision: Folders and Projects Strategy Projects are required.
- Configure Access ❑ Grant access to view Billing Reports to people in finance and other departments and roles where users need to track spend or need to review cost anomalies. ❑ Assign multiple Billing Account Administrators to each Billing Account – you might also consider using Organization-level permissions.
- Note: To ensure users can receive monthly invoices and important communications about Google payments profile issues, new Google payments profile users and administrators will need to verify their email address. ❑ For invoiced billing, assign multiple invoice delivery addresses , both for email delivery and for paper invoice delivery, to ensure that you're always aware of when a new invoice has been sent out. ❑ For electronic notifications and monthly statements, add users and set their email preferences to receive documents and notices.
- The names propagate to Billing Export and can be used to answer questions like "How much am I spending on databases?" and "What projects are costing me the most this month?" ❑ Decide whether or not you'll be purchasing Committed Use Discounts (CUDs) for your Projects and understand how Sustained Use Discounts (SUDs) apply to your Compute Engine resources and bills. ❑ If needed, review how quotas work and request a quota adjustment . ❑ If needed, enable APIs for your projects .

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Promotional credits : Promotional credits are things like spend-based milestone credits , Google Cloud Free Trial , and marketing campaign credits, or other grants to use Google Cloud.
- Legacy spend-based CUD credits : For spend-based committed use discounts (CUDs) that aren't part of the new pricing model, this is the credit earned in exchange for your commitment to spend a minimum amount for a service in a particular region.
- A notification in the Billing Overview page shows the date when we will begin the automatic migration from the legacy spend-based CUD model using credits, to the new spend-based CUD model using discounts.
- Analyze Resource-based CUD credits and Legacy spend-based CUD credits When analyzing your Google Cloud costs, it's useful to understand how your purchased commitments are impacting your costs.

