---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.580Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "FinOps Hub"
feature_slug: "finops-hub"
latest_feature_date: "2023-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-hub"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights"
keywords:
  - "finops"
  - "hub"
  - "introduces"
  - "preview"
  - "monitor"
  - "savings"
  - "recommend"
  - "optimization"
---

# FinOps Hub

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Introduces FinOps Hub (Preview) to monitor savings, recommend optimization opportunities, and set optimization goals using usage and commitment insights.

## Extended Definition

Introduces FinOps Hub (Preview) to monitor savings, recommend optimization opportunities, and set optimization goals using usage and commitment insights.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights](https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights)

## Supporting Pages

### Optimize costs with FinOps hub \_|\_ Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- With the FinOps hub, you can monitor and communicate your current savings, explore new recommended opportunities to optimize costs, and plan your optimization goals.
- How potential savings are determined The FinOps hub considers four optimization practices to create cost-saving recommendations: Turning off idle resources Right-sizing instances Other configuration changes for certain resources Purchasing committed use discounts (CUDs) Metrics throughout the hub reflect how well you're using those optimizations and identify additional optimization opportunities to reduce costs and improve FinOps practices.
- The FinOps hub dashboard The FinOps hub dashboard summarizes your current cost optimizations and introduces Google Cloud-recommended optimizations.
- Name Recommender ID Short Description Committed Use Discounts (CUDs) recommenders Committed use discount recommender google.compute.commitment.UsageCommitmentRecommender Reduce costs through purchasing resource-based commitments Committed use discount recommender google.cloudbilling.commitment.SpendBasedCommitmentRecommender Reduce costs through purchasing spend-based and Compute flexible commitments Compute Engine recommenders Idle custom image recommender google.compute.image.IdleResourceRecommender Remove unused images Idle IP address recommender google.compute.address.IdleResourceRecommender Remove unused IPs Idle persistent disk recommender google.compute.disk.IdleResourceRecommender Backup and remove unused disks Idle VM recommender google.compute.instance.IdleResourceRecommender Remove unused VMs Idle reservations recommender google.compute.IdleResourceRecommender Remove unused reservations Managed instance group machine type recommender google.compute.instanceGroupManager.MachineTypeRecommender Right-size MIG machine types Underutilized reservations recommender google.compute.RightSizeResourceRecommender Right-size underutilized reservations VM machine type recommender google.compute.instance.MachineTypeRecommender Note: Recommendations of this type indicating an underutilized VM (those with a negative costs savings or cost increase) are shown on the Utilization insights dashboard but not on the FinOps Recommendations dashboard.

### "Review and apply FinOps hub Recommendations \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permissions required to access the FinOps hub Recommendations To access the FinOps hub and view available recommendations, the FinOps score and CUDs optimization metrics, you need either the Billing Account Administrator or the Billing Account Viewer role for your Cloud Billing account.
- Use the optimization category tabs to focus your list of recommendations to a specific savings category, such as switching off idle resources, right-sizing instances, or purchasing additional CUDs.
- In the FinOps hub , from the Potential savings/month chart, click View all recommendations .
- To access the FinOps hub and Recommendations dashboard using a custom role, you need the following permissions on your Cloud Billing account: billing.accounts.get billing.accounts.getSpendingInformation billing.finOpsBenchmarkInformation.get billing.finOpsHealthInformation.get recommender.costRecommendations.listAll Open the Recommendations dashboard To view the Recommendations dashboard: In the Google Cloud console, go to the FinOps hub.

### "Review utilization and wasted usage insights \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights](https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights)
- Source ID: `site-docs-root-2`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The FinOps hub Utilization insights dashboard focuses on insights and recommendations for workload optimization and waste reduction.
- Supported services and optimization categories The Utilization insights dashboard provides recommendations about potentially wasted usage for the following services and optimization categories: Service Optimization categories Compute Engine Idle VM instances Overprovisioned VM instances Underprovisioned VM instances Idle disks Suboptimal configuration: Identified as VM instances using custom machine configurations that appear identical to standard, predefined machine types.
- Resources FinOps hub Google Cloud Well-Architected Framework: Cost optimization Optimize costs with committed use discounts Purchasing spend-based committed use discounts Purchasing resource-based committed use discounts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Draft an email with Gemini-generated insights To help with financial accountability collaboration and data-driven decision making requirements, Gemini Cloud Assist offers a tool to draft an email report based on the results of the utilization insights and optimization recommendations.

