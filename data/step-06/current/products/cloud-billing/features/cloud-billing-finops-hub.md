---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.569Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing FinOps Hub"
feature_slug: "cloud-billing-finops-hub"
latest_feature_date: "2024-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/gemini/overview"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-hub"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard"
keywords:
  - "billing"
  - "finops"
  - "hub"
  - "now"
  - "generally"
  - "available"
  - "providing"
  - "savings"
---

# Cloud Billing FinOps Hub

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Cloud Billing FinOps Hub is now generally available, providing savings monitoring, recommendations, and optimization goal planning based on usage and commitments.

## Extended Definition

Cloud Billing FinOps Hub is now generally available, providing savings monitoring, recommendations, and optimization goal planning based on usage and commitments.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/gemini/overview](https://docs.cloud.google.com/billing/docs/how-to/gemini/overview)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard)

## Supporting Pages

### Optimize costs with FinOps hub \_|\_ Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Name Recommender ID Short Description Committed Use Discounts (CUDs) recommenders Committed use discount recommender google.compute.commitment.UsageCommitmentRecommender Reduce costs through purchasing resource-based commitments Committed use discount recommender google.cloudbilling.commitment.SpendBasedCommitmentRecommender Reduce costs through purchasing spend-based and Compute flexible commitments Compute Engine recommenders Idle custom image recommender google.compute.image.IdleResourceRecommender Remove unused images Idle IP address recommender google.compute.address.IdleResourceRecommender Remove unused IPs Idle persistent disk recommender google.compute.disk.IdleResourceRecommender Backup and remove unused disks Idle VM recommender google.compute.instance.IdleResourceRecommender Remove unused VMs Idle reservations recommender google.compute.IdleResourceRecommender Remove unused reservations Managed instance group machine type recommender google.compute.instanceGroupManager.MachineTypeRecommender Right-size MIG machine types Underutilized reservations recommender google.compute.RightSizeResourceRecommender Right-size underutilized reservations VM machine type recommender google.compute.instance.MachineTypeRecommender Note: Recommendations of this type indicating an underutilized VM (those with a negative costs savings or cost increase) are shown on the Utilization insights dashboard but not on the FinOps Recommendations dashboard.
- Access the FinOps hub To access the FinOps hub for a Cloud Billing account, and view all available recommendations, the FinOps score, CUDs optimization metrics, and utilization insights, you need one of the following predefined Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Administrator If you prefer to use a custom role to access the FinOps hub, you need a role with the following permissions on your Cloud Billing account: billing.accounts.get billing.accounts.getSpendingInformation billing.finOpsBenchmarkInformation.get billing.finOpsHealthInformation.get recommender.costRecommendations.listAll View details of a recommendation and apply the recommendation To view the details and apply a recommendation, you need recommender-specific permissions on the billing account or project.
- To access the FinOps hub for a Cloud Billing account — to view all available recommendations, the FinOps score, CUDs optimization metrics, and utilization insights — you need Cloud Billing permissions.
- For more information about Cloud Billing permissions , see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing For more information about Google Cloud project permissions , see: Access control for projects with IAM IAM basic and predefined roles reference Explore the FinOps hub To view the FinOps hub: In the Google Cloud console, go to the FinOps hub.

### Gemini Cloud Assist in Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/gemini/overview](https://docs.cloud.google.com/billing/docs/how-to/gemini/overview)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- DevOps and FinOps practitioners who want to use Gemini Cloud Assist to understand cloud costs, identify opportunities for cost savings, and get AI insights to maximize cloud resource utilization and performance can use the Gemini-assisted Cloud Billing tools available in the following Billing pages: Cost Reports : For assistance in finding or creating a billing report to gain insights into your Google Cloud spending, identify key trends, and uncover what's driving your Cloud Billing costs, use the Gemini Cloud Assist prompt available on the Cloud Billing Reports page .
- FinOps-focused AI assistance in Cloud Billing To provide an integrated assistance experience, Gemini Cloud Assist in Cloud Billing is available on the following Billing pages in the Google Cloud console: Reports - Gemini Cloud Assist in Cost Reports provides insights into your cloud spending, allowing you to create custom reports, identify key trends, and uncover what's driving your costs.
- You might be able to enable Gemini Cloud Assist from the FinOps hub Consider the following when you view the Cloud Billing FinOps hub page: If you haven't enabled the Gemini for Google Cloud API in a Google Cloud project but you have adequate project permissions to do so, you can select Enable Gemini API to use Gemini Cloud Assist in Cloud Billing: If you haven't enabled the Gemini for Google Cloud API in a Google Cloud project, and you don't have adequate project permissions to enable the API in any of the projects associated with the Cloud Billing account, the Enable Gemini API button is greyed out: Ask an administrator or project owner to set you up to use Gemini Cloud Assist in Cloud Billing .
- How to interact with Gemini Cloud Assist in Cloud Billing After you enable Gemini Cloud Assist in a Google Cloud project, in Cloud Billing you can find Gemini-provided assistance in the following places: Cloud Billing: Reports page and FinOps hub page Google Cloud console, including Cloud Billing pages: Gemini Cloud Assist chat panel Cloud Billing: Reports page and FinOps hub Cost Reports To access the new AI features in your Cloud Billing reports, log into the Google Cloud console, select the Gemini project, then open your Cloud Billing account and view the Reports page.

### "Review and apply FinOps hub Recommendations \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permissions required to access the FinOps hub Recommendations To access the FinOps hub and view available recommendations, the FinOps score and CUDs optimization metrics, you need either the Billing Account Administrator or the Billing Account Viewer role for your Cloud Billing account.
- To access the FinOps hub and Recommendations dashboard using a custom role, you need the following permissions on your Cloud Billing account: billing.accounts.get billing.accounts.getSpendingInformation billing.finOpsBenchmarkInformation.get billing.finOpsHealthInformation.get recommender.costRecommendations.listAll Open the Recommendations dashboard To view the Recommendations dashboard: In the Google Cloud console, go to the FinOps hub.
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Review and apply FinOps hub Recommendations Stay organized with collections Save and categorize content based on your preferences.
- The project option of Savings not specific to a project applies to costs and credits that are calculated at the billing account level, such as commitment fees.

