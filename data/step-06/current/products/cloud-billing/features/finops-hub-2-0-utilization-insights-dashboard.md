---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.547Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "FinOps hub 2.0 Utilization insights dashboard"
feature_slug: "finops-hub-2-0-utilization-insights-dashboard"
latest_feature_date: "2025-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-hub"
  - "https://docs.cloud.google.com/billing/docs/how-to/gemini/overview"
keywords:
  - "finops"
  - "hub"
  - "utilization"
  - "insights"
  - "dashboard"
  - "introduces"
  - "adding"
  - "waste"
---

# FinOps hub 2.0 Utilization insights dashboard

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

FinOps hub 2.0 introduces the Utilization insights dashboard, adding waste detection, waste mapping, and optimization recommendations with optional Gemini Cloud Assist support.

## Extended Definition

FinOps hub 2.0 introduces the Utilization insights dashboard, adding waste detection, waste mapping, and optimization recommendations with optional Gemini Cloud Assist support.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights](https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- [https://docs.cloud.google.com/billing/docs/how-to/gemini/overview](https://docs.cloud.google.com/billing/docs/how-to/gemini/overview)

## Supporting Pages

### "Review utilization and wasted usage insights \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights](https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights)
- Source ID: `site-docs-root-2`
- Final score: 217
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View recommendation Summarize and send with Gemini Cloud Assist On the FinOps Utilization insights dashboard, you can discover if resources are used efficiently and view high-impact utilization insights based on the potential costs of wasted resources.
- You might use the FinOps hub Utilization insights dashboard when you want to do the following: View the cost of potentially wasted resources, such as idle, underprovisioned, or overprovisioned resources, and suboptimal configurations.
- The FinOps hub Utilization insights dashboard focuses on insights and recommendations for workload optimization and waste reduction.
- Supported services and optimization categories The Utilization insights dashboard provides recommendations about potentially wasted usage for the following services and optimization categories: Service Optimization categories Compute Engine Idle VM instances Overprovisioned VM instances Underprovisioned VM instances Idle disks Suboptimal configuration: Identified as VM instances using custom machine configurations that appear identical to standard, predefined machine types.

### Optimize costs with FinOps hub \_|\_ Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Name Recommender ID Short Description Committed Use Discounts (CUDs) recommenders Committed use discount recommender google.compute.commitment.UsageCommitmentRecommender Reduce costs through purchasing resource-based commitments Committed use discount recommender google.cloudbilling.commitment.SpendBasedCommitmentRecommender Reduce costs through purchasing spend-based and Compute flexible commitments Compute Engine recommenders Idle custom image recommender google.compute.image.IdleResourceRecommender Remove unused images Idle IP address recommender google.compute.address.IdleResourceRecommender Remove unused IPs Idle persistent disk recommender google.compute.disk.IdleResourceRecommender Backup and remove unused disks Idle VM recommender google.compute.instance.IdleResourceRecommender Remove unused VMs Idle reservations recommender google.compute.IdleResourceRecommender Remove unused reservations Managed instance group machine type recommender google.compute.instanceGroupManager.MachineTypeRecommender Right-size MIG machine types Underutilized reservations recommender google.compute.RightSizeResourceRecommender Right-size underutilized reservations VM machine type recommender google.compute.instance.MachineTypeRecommender Note: Recommendations of this type indicating an underutilized VM (those with a negative costs savings or cost increase) are shown on the Utilization insights dashboard but not on the FinOps Recommendations dashboard.
- Right-size VM machine types Google Kubernetes Engine (GKE) recommenders GKE idle cluster recommender google.container.DiagnosisRecommender subtype: CLUSTER IDLE Remove unused GKE clusters GKE overprovisioned cluster recommender google.container.DiagnosisRecommender subtype: CLUSTER OVERPROVISIONED Right-size overprovisioned GKE clusters GKE underprovisioned cluster recommender google.container.DiagnosisRecommender subtype: CLUSTER UNDERPROVISIONED Note: Underprovisionsed cluster recommendations are shown on the Utilization insights dashboard but aren't included on the FinOps Recommendations dashboard.
- Optimize underprovisioned GKE clusters Cloud SQL recommenders Cloud SQL idle instance recommender google.cloudsql.instance.IdleRecommender Remove unused SQL instances Cloud SQL overprovisioned instance recommender google.cloudsql.instance.OverprovisionedRecommender Right-size overprovisioned SQL instances Cloud SQL underprovisioned instance recommender google.cloudsql.instance.UnderprovisionedRecommender Note: Underprovisionsed instance recommendations are shown on the Utilization insights dashboard but aren't included on the FinOps Recommendations dashboard.
- On the Potential wasted usage widget, click View utilization insights to access the Utilization insights dashboard .

### Gemini Cloud Assist in Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/gemini/overview](https://docs.cloud.google.com/billing/docs/how-to/gemini/overview)
- Source ID: `site-docs-root-2`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Draft an email with Gemini-generated insights On the FinOps Utilization insights dashboard, you can discover if resources are used efficiently and view high-impact utilization insights based on the potential costs of wasted resources.
- Further, on the Utilization insights dashboard , you can use Gemini Cloud Assist to summarize and send top wasted usage insights to your engineering teams to take action and remediate.
- DevOps and FinOps practitioners who want to use Gemini Cloud Assist to understand cloud costs, identify opportunities for cost savings, and get AI insights to maximize cloud resource utilization and performance can use the Gemini-assisted Cloud Billing tools available in the following Billing pages: Cost Reports : For assistance in finding or creating a billing report to gain insights into your Google Cloud spending, identify key trends, and uncover what's driving your Cloud Billing costs, use the Gemini Cloud Assist prompt available on the Cloud Billing Reports page .
- When you're viewing the FinOps hub page, if the Gemini Cloud Assist API is already enabled in a Google Cloud project where you have adequate project permissions to use Gemini assistants, you see the Gemini Cloud Assist insights in the Optimization summary widget: What you can do if Gemini is not enabled in billing FinOps hub If Gemini Cloud Assist in Cloud Billing is not yet enabled, you won't see the optimization and utilization insights provided by Gemini Cloud Assist .

