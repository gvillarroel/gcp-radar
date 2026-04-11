---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.323Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Compute Engine committed use discount recommendations"
feature_slug: "compute-engine-committed-use-discount-recommendations"
latest_feature_date: "2021-02-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible"
  - "https://docs.cloud.google.com/billing/docs/how-to/cud-analysis"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-hub"
keywords:
  - "compute"
  - "engine"
  - "committed"
  - "use"
  - "discount"
  - "recommendations"
  - "made"
  - "generally"
---

# Compute Engine committed use discount recommendations

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Made Compute Engine committed use discount recommendations generally available, providing optimal and stable-usage recommendation options based on VM spending trends; Introduced beta availability of Compute Engine committed use discount recommendations that suggest CUD contracts from VM spending trend analysis.

## Extended Definition

Made Compute Engine committed use discount recommendations generally available, providing optimal and stable-usage recommendation options based on VM spending trends; Introduced beta availability of Compute Engine committed use discount recommendations that suggest CUD contracts from VM spending trend analysis.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible)
- [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)

## Supporting Pages

### "Calculate savings with Compute flexible commitments \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- For example, a credit for a Compute flexible CUD for the usage of N1 CORE running in Americas appears as: Credit type : COMMITTED USAGE DISCOUNT DOLLAR BASE Credit name : Committed use discount - dollar based: GCE Commitments SKU description : N1 CORE running in Americas Analyze commitment costs and credits on your invoice or statement To view and analyze detailed costs and credits for a given invoice or statement, access the Cost table report , a cost management tool that you can use to understand the costs that reconcile to your invoice.
- Related topics Learn more about CUDs Get recommendations for committed use discounts View and download the cost details of your invoice or statement Understand your savings with cost breakdown reports Get a Cloud Billing document such as an invoice, statement, or receipt View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Open Cloud Billing Reports View Compute flexible commitments You can review your Compute flexible commitments in your Cloud Billing report by setting specific report filters : In the Credits filter, select Committed use discounts (spend based) .
- Compute flexible committed use discounts (CUDs) are the discounts you receive when you purchase a spend-based Compute flexible commitment.

### "Optimize costs with Committed Use Discounts \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Related topics Overview of committed use discounts Purchasing spend-based committed use discounts Purchasing resource-based committed use discounts View your Cloud Billing reports and cost trends Understand your savings with cost breakdown reports Export Cloud Billing data to BigQuery View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Depending on the service, you can get a resource-based CUD in exchange for your commitment to use a minimum level of Compute Engine resources in a region, or a spend-based CUD in exchange for your commitment to spend a minimum amount on a product or service.
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Optimize costs with Committed Use Discounts Stay organized with collections Save and categorize content based on your preferences.
- Committed use discounts (CUDs) provide discounted prices in exchange for your commitment to use a minimum level of resources for a one-year or three-year period.

### Optimize costs with FinOps hub \_|\_ Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Name Recommender ID Short Description Committed Use Discounts (CUDs) recommenders Committed use discount recommender google.compute.commitment.UsageCommitmentRecommender Reduce costs through purchasing resource-based commitments Committed use discount recommender google.cloudbilling.commitment.SpendBasedCommitmentRecommender Reduce costs through purchasing spend-based and Compute flexible commitments Compute Engine recommenders Idle custom image recommender google.compute.image.IdleResourceRecommender Remove unused images Idle IP address recommender google.compute.address.IdleResourceRecommender Remove unused IPs Idle persistent disk recommender google.compute.disk.IdleResourceRecommender Backup and remove unused disks Idle VM recommender google.compute.instance.IdleResourceRecommender Remove unused VMs Idle reservations recommender google.compute.IdleResourceRecommender Remove unused reservations Managed instance group machine type recommender google.compute.instanceGroupManager.MachineTypeRecommender Right-size MIG machine types Underutilized reservations recommender google.compute.RightSizeResourceRecommender Right-size underutilized reservations VM machine type recommender google.compute.instance.MachineTypeRecommender Note: Recommendations of this type indicating an underutilized VM (those with a negative costs savings or cost increase) are shown on the Utilization insights dashboard but not on the FinOps Recommendations dashboard.
- How potential savings are determined The FinOps hub considers four optimization practices to create cost-saving recommendations: Turning off idle resources Right-sizing instances Other configuration changes for certain resources Purchasing committed use discounts (CUDs) Metrics throughout the hub reflect how well you're using those optimizations and identify additional optimization opportunities to reduce costs and improve FinOps practices.
- Optimize underprovisioned SQL instances Cloud Run recommenders Cloud Run CPU allocation recommender google.run.service.CostRecommender Switch to CPU always-allocated Project recommender - all services Unattended project recommender google.resourcemanager.projectUtilization.Recommender Reclaim or remove unused projects Resources Google Cloud Well-Architected Framework: Cost optimization Optimize costs with committed use discounts Purchasing spend-based committed use discounts Purchasing resource-based committed use discounts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Right-size VM machine types Google Kubernetes Engine (GKE) recommenders GKE idle cluster recommender google.container.DiagnosisRecommender subtype: CLUSTER IDLE Remove unused GKE clusters GKE overprovisioned cluster recommender google.container.DiagnosisRecommender subtype: CLUSTER OVERPROVISIONED Right-size overprovisioned GKE clusters GKE underprovisioned cluster recommender google.container.DiagnosisRecommender subtype: CLUSTER UNDERPROVISIONED Note: Underprovisionsed cluster recommendations are shown on the Utilization insights dashboard but aren't included on the FinOps Recommendations dashboard.

