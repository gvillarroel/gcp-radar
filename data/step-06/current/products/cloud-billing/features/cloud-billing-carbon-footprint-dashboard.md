---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.245Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing Carbon Footprint dashboard"
feature_slug: "cloud-billing-carbon-footprint-dashboard"
latest_feature_date: "2024-07-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-hub"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights"
keywords:
  - "billing"
  - "carbon"
  - "footprint"
  - "dashboard"
  - "introduces"
  - "in"
  - "finops"
  - "hub"
---

# Cloud Billing Carbon Footprint dashboard

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing introduces a Carbon Footprint dashboard in FinOps hub to display estimated greenhouse gas emissions for Google Cloud usage.

## Extended Definition

Cloud Billing introduces a Carbon Footprint dashboard in FinOps hub to display estimated greenhouse gas emissions for Google Cloud usage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights](https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights)

## Supporting Pages

### Optimize costs with FinOps hub \_|\_ Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The FinOps hub automatically generates the dashboard based on historical usage metrics gathered by Cloud Billing and Recommender , including recent usage and current commitments.
- The FinOps hub dashboard The FinOps hub dashboard summarizes your current cost optimizations and introduces Google Cloud-recommended optimizations.
- Name Recommender ID Short Description Committed Use Discounts (CUDs) recommenders Committed use discount recommender google.compute.commitment.UsageCommitmentRecommender Reduce costs through purchasing resource-based commitments Committed use discount recommender google.cloudbilling.commitment.SpendBasedCommitmentRecommender Reduce costs through purchasing spend-based and Compute flexible commitments Compute Engine recommenders Idle custom image recommender google.compute.image.IdleResourceRecommender Remove unused images Idle IP address recommender google.compute.address.IdleResourceRecommender Remove unused IPs Idle persistent disk recommender google.compute.disk.IdleResourceRecommender Backup and remove unused disks Idle VM recommender google.compute.instance.IdleResourceRecommender Remove unused VMs Idle reservations recommender google.compute.IdleResourceRecommender Remove unused reservations Managed instance group machine type recommender google.compute.instanceGroupManager.MachineTypeRecommender Right-size MIG machine types Underutilized reservations recommender google.compute.RightSizeResourceRecommender Right-size underutilized reservations VM machine type recommender google.compute.instance.MachineTypeRecommender Note: Recommendations of this type indicating an underutilized VM (those with a negative costs savings or cost increase) are shown on the Utilization insights dashboard but not on the FinOps Recommendations dashboard.
- Access the FinOps hub To access the FinOps hub for a Cloud Billing account, and view all available recommendations, the FinOps score, CUDs optimization metrics, and utilization insights, you need one of the following predefined Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Administrator If you prefer to use a custom role to access the FinOps hub, you need a role with the following permissions on your Cloud Billing account: billing.accounts.get billing.accounts.getSpendingInformation billing.finOpsBenchmarkInformation.get billing.finOpsHealthInformation.get recommender.costRecommendations.listAll View details of a recommendation and apply the recommendation To view the details and apply a recommendation, you need recommender-specific permissions on the billing account or project.

### "Review and apply FinOps hub Recommendations \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard)
- Source ID: `site-docs-root-2`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To access the FinOps hub and Recommendations dashboard using a custom role, you need the following permissions on your Cloud Billing account: billing.accounts.get billing.accounts.getSpendingInformation billing.finOpsBenchmarkInformation.get billing.finOpsHealthInformation.get recommender.costRecommendations.listAll Open the Recommendations dashboard To view the Recommendations dashboard: In the Google Cloud console, go to the FinOps hub.
- Permissions required to access the FinOps hub Recommendations To access the FinOps hub and view available recommendations, the FinOps score and CUDs optimization metrics, you need either the Billing Account Administrator or the Billing Account Viewer role for your Cloud Billing account.
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Review and apply FinOps hub Recommendations Stay organized with collections Save and categorize content based on your preferences.
- With the FinOps hub Recommendations dashboard, you can access the Recommendations list, then click any of the recommendations to view the details of the recommendation and take action.

### "Review utilization and wasted usage insights \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights](https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You might use the FinOps hub Utilization insights dashboard when you want to do the following: View the cost of potentially wasted resources, such as idle, underprovisioned, or overprovisioned resources, and suboptimal configurations.
- Permissions required to access the FinOps hub Utilization insights To access the FinOps hub Utilization insights dashboard, you need the same permissions that are required to access to the FinOps hub .
- Open the Utilization insights dashboard To open the Utilization insights dashboard: In the Google Cloud console, go to the FinOps hub.
- The FinOps hub Utilization insights dashboard focuses on insights and recommendations for workload optimization and waste reduction.

