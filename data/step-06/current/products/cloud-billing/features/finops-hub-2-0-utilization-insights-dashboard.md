---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.216Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "FinOps hub 2.0 Utilization insights dashboard"
feature_slug: "finops-hub-2-0-utilization-insights-dashboard"
latest_feature_date: "2025-04-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-hub"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard"
keywords:
  - "finops"
  - "hub"
  - "utilization"
  - "insights"
  - "dashboard"
  - "introduces"
  - "the"
  - "adding"
---

# FinOps hub 2.0 Utilization insights dashboard

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

FinOps hub 2.0 introduces the Utilization insights dashboard, adding waste detection, waste mapping, and optimization recommendations with optional Gemini Cloud Assist support.

## Extended Definition

FinOps hub 2.0 introduces the Utilization insights dashboard, adding waste detection, waste mapping, and optimization recommendations with optional Gemini Cloud Assist support.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights](https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard)

## Supporting Pages

### "Review utilization and wasted usage insights \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights](https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You might use the FinOps hub Utilization insights dashboard when you want to do the following: View the cost of potentially wasted resources, such as idle, underprovisioned, or overprovisioned resources, and suboptimal configurations.
- Permissions required to access the FinOps hub Utilization insights To access the FinOps hub Utilization insights dashboard, you need the same permissions that are required to access to the FinOps hub .
- Open the Utilization insights dashboard To open the Utilization insights dashboard: In the Google Cloud console, go to the FinOps hub.
- The FinOps hub Utilization insights dashboard focuses on insights and recommendations for workload optimization and waste reduction.

### Optimize costs with FinOps hub \_|\_ Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Name Recommender ID Short Description Committed Use Discounts (CUDs) recommenders Committed use discount recommender google.compute.commitment.UsageCommitmentRecommender Reduce costs through purchasing resource-based commitments Committed use discount recommender google.cloudbilling.commitment.SpendBasedCommitmentRecommender Reduce costs through purchasing spend-based and Compute flexible commitments Compute Engine recommenders Idle custom image recommender google.compute.image.IdleResourceRecommender Remove unused images Idle IP address recommender google.compute.address.IdleResourceRecommender Remove unused IPs Idle persistent disk recommender google.compute.disk.IdleResourceRecommender Backup and remove unused disks Idle VM recommender google.compute.instance.IdleResourceRecommender Remove unused VMs Idle reservations recommender google.compute.IdleResourceRecommender Remove unused reservations Managed instance group machine type recommender google.compute.instanceGroupManager.MachineTypeRecommender Right-size MIG machine types Underutilized reservations recommender google.compute.RightSizeResourceRecommender Right-size underutilized reservations VM machine type recommender google.compute.instance.MachineTypeRecommender Note: Recommendations of this type indicating an underutilized VM (those with a negative costs savings or cost increase) are shown on the Utilization insights dashboard but not on the FinOps Recommendations dashboard.
- Access the FinOps hub To access the FinOps hub for a Cloud Billing account, and view all available recommendations, the FinOps score, CUDs optimization metrics, and utilization insights, you need one of the following predefined Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Administrator If you prefer to use a custom role to access the FinOps hub, you need a role with the following permissions on your Cloud Billing account: billing.accounts.get billing.accounts.getSpendingInformation billing.finOpsBenchmarkInformation.get billing.finOpsHealthInformation.get recommender.costRecommendations.listAll View details of a recommendation and apply the recommendation To view the details and apply a recommendation, you need recommender-specific permissions on the billing account or project.
- Right-size VM machine types Google Kubernetes Engine (GKE) recommenders GKE idle cluster recommender google.container.DiagnosisRecommender subtype: CLUSTER IDLE Remove unused GKE clusters GKE overprovisioned cluster recommender google.container.DiagnosisRecommender subtype: CLUSTER OVERPROVISIONED Right-size overprovisioned GKE clusters GKE underprovisioned cluster recommender google.container.DiagnosisRecommender subtype: CLUSTER UNDERPROVISIONED Note: Underprovisionsed cluster recommendations are shown on the Utilization insights dashboard but aren't included on the FinOps Recommendations dashboard.
- Optimize underprovisioned GKE clusters Cloud SQL recommenders Cloud SQL idle instance recommender google.cloudsql.instance.IdleRecommender Remove unused SQL instances Cloud SQL overprovisioned instance recommender google.cloudsql.instance.OverprovisionedRecommender Right-size overprovisioned SQL instances Cloud SQL underprovisioned instance recommender google.cloudsql.instance.UnderprovisionedRecommender Note: Underprovisionsed instance recommendations are shown on the Utilization insights dashboard but aren't included on the FinOps Recommendations dashboard.

### "Review and apply FinOps hub Recommendations \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To access the FinOps hub and Recommendations dashboard using a custom role, you need the following permissions on your Cloud Billing account: billing.accounts.get billing.accounts.getSpendingInformation billing.finOpsBenchmarkInformation.get billing.finOpsHealthInformation.get recommender.costRecommendations.listAll Open the Recommendations dashboard To view the Recommendations dashboard: In the Google Cloud console, go to the FinOps hub.
- With the FinOps hub Recommendations dashboard, you can access the Recommendations list, then click any of the recommendations to view the details of the recommendation and take action.
- Resources FinOps hub Google Cloud Well-Architected Framework: Cost optimization Optimize costs with committed use discounts Purchasing spend-based committed use discounts Purchasing resource-based committed use discounts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Permissions required to access the FinOps hub Recommendations To access the FinOps hub and view available recommendations, the FinOps score and CUDs optimization metrics, you need either the Billing Account Administrator or the Billing Account Viewer role for your Cloud Billing account.

