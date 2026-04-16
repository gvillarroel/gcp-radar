---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.574Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Compute Engine Flexible CUD recommendations"
feature_slug: "compute-engine-flexible-cud-recommendations"
latest_feature_date: "2024-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-hub"
  - "https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds"
keywords:
  - "compute"
  - "engine"
  - "flexible"
  - "cud"
  - "recommendations"
  - "committed"
  - "use"
  - "discounts"
---

# Compute Engine Flexible CUD recommendations

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Recommendations for Compute Engine Flexible committed use discounts are now generally available in FinOps Hub to optimize commitment purchase amounts across projects, regions, or machine series.

## Extended Definition

Recommendations for Compute Engine Flexible committed use discounts are now generally available in FinOps Hub to optimize commitment purchase amounts across projects, regions, or machine series.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- [https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds](https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds)

## Supporting Pages

### "Calculate savings with Compute flexible commitments \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible)
- Source ID: `site-docs-root-2`
- Final score: 203
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Open Cloud Billing Reports View Compute flexible commitments You can review your Compute flexible commitments in your Cloud Billing report by setting specific report filters : In the Credits filter, select Committed use discounts (spend based) .
- Compute flexible committed use discounts (CUDs) are the discounts you receive when you purchase a spend-based Compute flexible commitment.
- For example, a credit for a Compute flexible CUD for the usage of N1 CORE running in Americas appears as: Credit type : COMMITTED USAGE DISCOUNT DOLLAR BASE Credit name : Committed use discount - dollar based: GCE Commitments SKU description : N1 CORE running in Americas Analyze commitment costs and credits on your invoice or statement To view and analyze detailed costs and credits for a given invoice or statement, access the Cost table report , a cost management tool that you can use to understand the costs that reconcile to your invoice.
- Related topics Learn more about CUDs Get recommendations for committed use discounts View and download the cost details of your invoice or statement Understand your savings with cost breakdown reports Get a Cloud Billing document such as an invoice, statement, or receipt View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Optimize costs with FinOps hub \_|\_ Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Name Recommender ID Short Description Committed Use Discounts (CUDs) recommenders Committed use discount recommender google.compute.commitment.UsageCommitmentRecommender Reduce costs through purchasing resource-based commitments Committed use discount recommender google.cloudbilling.commitment.SpendBasedCommitmentRecommender Reduce costs through purchasing spend-based and Compute flexible commitments Compute Engine recommenders Idle custom image recommender google.compute.image.IdleResourceRecommender Remove unused images Idle IP address recommender google.compute.address.IdleResourceRecommender Remove unused IPs Idle persistent disk recommender google.compute.disk.IdleResourceRecommender Backup and remove unused disks Idle VM recommender google.compute.instance.IdleResourceRecommender Remove unused VMs Idle reservations recommender google.compute.IdleResourceRecommender Remove unused reservations Managed instance group machine type recommender google.compute.instanceGroupManager.MachineTypeRecommender Right-size MIG machine types Underutilized reservations recommender google.compute.RightSizeResourceRecommender Right-size underutilized reservations VM machine type recommender google.compute.instance.MachineTypeRecommender Note: Recommendations of this type indicating an underutilized VM (those with a negative costs savings or cost increase) are shown on the Utilization insights dashboard but not on the FinOps Recommendations dashboard.
- How potential savings are determined The FinOps hub considers four optimization practices to create cost-saving recommendations: Turning off idle resources Right-sizing instances Other configuration changes for certain resources Purchasing committed use discounts (CUDs) Metrics throughout the hub reflect how well you're using those optimizations and identify additional optimization opportunities to reduce costs and improve FinOps practices.
- If there are multiple potential opportunities to save on the same Compute Engine resource, such as purchasing a resource-based CUD and a Compute flexible CUD, the FinOps hub de-duplicates the opportunities and only includes the recommendation that brings you the higher savings.
- Optimize underprovisioned SQL instances Cloud Run recommenders Cloud Run CPU allocation recommender google.run.service.CostRecommender Switch to CPU always-allocated Project recommender - all services Unattended project recommender google.resourcemanager.projectUtilization.Recommender Reclaim or remove unused projects Resources Google Cloud Well-Architected Framework: Cost optimization Optimize costs with committed use discounts Purchasing spend-based committed use discounts Purchasing resource-based committed use discounts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Analyze the effectiveness of your CUDs \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds](https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds)
- Source ID: `site-docs-root-2`
- Final score: 147
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- However, the view doesn't cover the following: Compute Engine resources that are exclusively covered by compute flexible commitments Non-Compute Engine usage that can be covered by a compute flexible commitment, which includes eligible usage from Cloud Run and Google Kubernetes Engine Adjust groupings and data granularity Adjust your bar chart settings to view the data that's most important to you.
- This view takes Compute Engine resources that are covered by resource-based commitments and layers the compute flexible commitment coverage data onto those resources.
- Learn how to calculate savings with Compute Engine flexible commitments .
- Understand how CUDs impact your bill Google Cloud uses a balance sheet format for your bill: We display credits from savings programs, such as Committed Use Discounts (CUDs), in your cost reports to provide a direct and transparent view of your actual savings.

