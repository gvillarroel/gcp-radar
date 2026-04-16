---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.616Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing budget cost trend chart"
feature_slug: "cloud-billing-budget-cost-trend-chart"
latest_feature_date: "2021-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/onboarding-checklist"
keywords:
  - "billing"
  - "budget"
  - "cost"
  - "trend"
  - "chart"
  - "updated"
  - "creation"
  - "edit"
---

# Cloud Billing budget cost trend chart

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Updated the Cloud Billing budget creation and edit experience to display a 12-month historical cost trend chart aligned with budget filters.

## Extended Definition

Updated the Cloud Billing budget creation and edit experience to display a 12-month historical cost trend chart aligned with budget filters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist)

## Supporting Pages

### "Create, edit, or delete budgets and budget alerts \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To create budgets for a project, you need a role that includes the following permissions on the project: resourcemanager.projects.get billing.resourceCosts.get (optional) billing.resourcebudgets.read billing.resourcebudgets.write To gain these permissions using a predefined role, ask your administrator to grant you one of the following IAM roles on your project: Project Owner Project Editor Optional project permission: A user with the billing.resourceCosts.get permission on the project can view the costs for the project, including reports and the cost trend chart that displays on the budget create or edit pages.
- To manage budgets for a project, you need a role that includes the following permissions on the project: resourcemanager.projects.get billing.resourceCosts.get (optional) billing.resourcebudgets.read billing.resourcebudgets.write To gain these permissions using a predefined role, ask your administrator to grant you one of the following IAM roles on your project: Project Owner Project Editor Optional project permission: A user with the billing.resourceCosts.get permission on the project can view the costs for the project, including reports and the cost trend chart that displays on the budget create or edit pages.
- To view a list of budgets for your project, you need a role that includes the following permissions on the project: resourcemanager.projects.get billing.resourceCosts.get (optional) billing.resourcebudgets.read To gain these permissions using a predefined role, ask your administrator to grant you one of the following IAM roles on your project: Project Owner Project Editor Project Viewer Optional project permission: A user with the billing.resourceCosts.get permission on the project can view the costs for the project, including reports and the cost trend chart that displays on the budget create or edit pages.
- If you are editing an existing budget , when you open the report from the budget's cost trend chart , the cost report chart displays the previously-saved targeted budget amount as a red, dashed, horizontal line.

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you open the cost report from the budget's cost trend chart , if your budget scope is set for all projects, and your Cloud Billing account is incurring charges not specific to a project , you might notice that your costs appear higher in the cost report than in the budget's cost trend chart.
- In the budget's cost trend chart , click the arrow forward View report link to navigate to a cost report that's configured using the budget's scope settings.
- Example of a cost report opened from the cost trend chart of a budget.
- Example of a budget's cost trend chart.

### "Guide to Cloud Billing Resource Organization and Access Management \_|\_\

- URL: [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- We'll also introduce Billing reports to help you understand your current cost trends and forecast your spend at month-end so that you can prevent budget overruns.
- Important Roles monetization on Role: Billing Account Admin The Billing Account Admin can: Manage payment instruments Enable Billing Export View costs and spend and set budget alerts Link and unlink projects Manage other user roles tied to the Billing Account Recommended Assignee This role is typically filled by someone with financial control at your company, for example, a business lead that owns the P&L or a technical team member with budget management responsibility.
- Create a FinOps administration project to use for billing APIs and project-dependent billing tools. ❑ attach money Set up budget alerts with multiple alert thresholds to reduce spending surprises and unexpected cost overruns. ❑ attach money Set up automatic exports of billing data to use for monitoring and analyzing costs.
- You need to allocate support costs differently, because support costs accumulate from across all applicable Billing subaccounts in the organization and charge only to the parent Billing Account. stars Key Decision: Pay with Credit or Debit Card or Use Invoiced Billing?

