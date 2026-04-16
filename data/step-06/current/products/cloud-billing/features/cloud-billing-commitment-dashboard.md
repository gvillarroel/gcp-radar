---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.625Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing commitment dashboard"
feature_slug: "cloud-billing-commitment-dashboard"
latest_feature_date: "2020-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-hub"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
keywords:
  - "billing"
  - "commitment"
  - "dashboard"
  - "now"
  - "displays"
  - "spend"
  - "based"
  - "cud"
---

# Cloud Billing commitment dashboard

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

The Cloud Billing commitment dashboard now displays a spend-based CUD summary and enables purchasing new commitments.

## Extended Definition

The Cloud Billing commitment dashboard now displays a spend-based CUD summary and enables purchasing new commitments.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Legacy spend-based CUD credits : For spend-based committed use discounts (CUDs) that aren't part of the new pricing model, this is the credit earned in exchange for your commitment to spend a minimum amount for a service in a particular region.
- A notification in the Billing Overview page shows the date when we will begin the automatic migration from the legacy spend-based CUD model using credits, to the new spend-based CUD model using discounts.
- Analyze Resource-based CUD credits and Legacy spend-based CUD credits When analyzing your Google Cloud costs, it's useful to understand how your purchased commitments are impacting your costs.
- Resource-based and Legacy spend-based CUDs consist of three components using a balance sheet format on your bill: Commitment fee is the discounted cost of your covered usage.

### Optimize costs with FinOps hub \_|\_ Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Name Recommender ID Short Description Committed Use Discounts (CUDs) recommenders Committed use discount recommender google.compute.commitment.UsageCommitmentRecommender Reduce costs through purchasing resource-based commitments Committed use discount recommender google.cloudbilling.commitment.SpendBasedCommitmentRecommender Reduce costs through purchasing spend-based and Compute flexible commitments Compute Engine recommenders Idle custom image recommender google.compute.image.IdleResourceRecommender Remove unused images Idle IP address recommender google.compute.address.IdleResourceRecommender Remove unused IPs Idle persistent disk recommender google.compute.disk.IdleResourceRecommender Backup and remove unused disks Idle VM recommender google.compute.instance.IdleResourceRecommender Remove unused VMs Idle reservations recommender google.compute.IdleResourceRecommender Remove unused reservations Managed instance group machine type recommender google.compute.instanceGroupManager.MachineTypeRecommender Right-size MIG machine types Underutilized reservations recommender google.compute.RightSizeResourceRecommender Right-size underutilized reservations VM machine type recommender google.compute.instance.MachineTypeRecommender Note: Recommendations of this type indicating an underutilized VM (those with a negative costs savings or cost increase) are shown on the Utilization insights dashboard but not on the FinOps Recommendations dashboard.
- The FinOps hub automatically generates the dashboard based on historical usage metrics gathered by Cloud Billing and Recommender , including recent usage and current commitments.
- The score is a calculation based on how you follow optimization best practices, including the following: Monitoring spend by actively logging in and using Cloud Billing tools.
- Access the FinOps hub To access the FinOps hub for a Cloud Billing account, and view all available recommendations, the FinOps score, CUDs optimization metrics, and utilization insights, you need one of the following predefined Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Administrator If you prefer to use a custom role to access the FinOps hub, you need a role with the following permissions on your Cloud Billing account: billing.accounts.get billing.accounts.getSpendingInformation billing.finOpsBenchmarkInformation.get billing.finOpsHealthInformation.get recommender.costRecommendations.listAll View details of a recommendation and apply the recommendation To view the details and apply a recommendation, you need recommender-specific permissions on the billing account or project.

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- COMMITTED USAGE DISCOUNT DOLLAR BASE : For legacy spend-based committed use discounts (CUDs) that aren't part of the new pricing model , this is the credit earned in exchange for your commitment to spend a minimum amount for a service in a particular region.
- Note that in the Cloud Billing reports available in the Google Cloud console, the discount credit type is listed as Spending-based discounts .
- Permissions required to access the Cost table report To view the Cost table report for your Cloud Billing account, you need a role that includes the following permission on your Cloud Billing account: billing.accounts.getSpendingInformation to view costs and usage for a billing account.
- The totals in the footer include taxes (for each tax type), invoice corrections and billing modifications , and rounding errors (if applicable to your Cloud Billing account), as well as the total of the costs in the table, based on the selected filters.

