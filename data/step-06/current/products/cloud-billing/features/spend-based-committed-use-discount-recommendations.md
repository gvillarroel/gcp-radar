---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.604Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Spend-based committed use discount recommendations"
feature_slug: "spend-based-committed-use-discount-recommendations"
latest_feature_date: "2021-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/cud-analysis"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-hub"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard"
keywords:
  - "spend"
  - "based"
  - "committed"
  - "use"
  - "discount"
  - "recommendations"
  - "adds"
  - "generally"
---

# Spend-based committed use discount recommendations

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Adds generally available recommendations to help users optimize costs by suggesting spend-based committed use discounts based on spending trends.

## Extended Definition

Adds generally available recommendations to help users optimize costs by suggesting spend-based committed use discounts based on spending trends.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard)

## Supporting Pages

### "Optimize costs with Committed Use Discounts \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Related topics Overview of committed use discounts Purchasing spend-based committed use discounts Purchasing resource-based committed use discounts View your Cloud Billing reports and cost trends Understand your savings with cost breakdown reports Export Cloud Billing data to BigQuery View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Analyze your CUDs After you've purchased commitments, you can use the CUD analysis report to analyze the effectiveness of your discounts: To learn how to analyze your spend- or resource-based CUDs, see Analyze the effectiveness of your CUDs .
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Optimize costs with Committed Use Discounts Stay organized with collections Save and categorize content based on your preferences.
- Depending on the service, you can get a resource-based CUD in exchange for your commitment to use a minimum level of Compute Engine resources in a region, or a spend-based CUD in exchange for your commitment to spend a minimum amount on a product or service.

### Optimize costs with FinOps hub \_|\_ Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Name Recommender ID Short Description Committed Use Discounts (CUDs) recommenders Committed use discount recommender google.compute.commitment.UsageCommitmentRecommender Reduce costs through purchasing resource-based commitments Committed use discount recommender google.cloudbilling.commitment.SpendBasedCommitmentRecommender Reduce costs through purchasing spend-based and Compute flexible commitments Compute Engine recommenders Idle custom image recommender google.compute.image.IdleResourceRecommender Remove unused images Idle IP address recommender google.compute.address.IdleResourceRecommender Remove unused IPs Idle persistent disk recommender google.compute.disk.IdleResourceRecommender Backup and remove unused disks Idle VM recommender google.compute.instance.IdleResourceRecommender Remove unused VMs Idle reservations recommender google.compute.IdleResourceRecommender Remove unused reservations Managed instance group machine type recommender google.compute.instanceGroupManager.MachineTypeRecommender Right-size MIG machine types Underutilized reservations recommender google.compute.RightSizeResourceRecommender Right-size underutilized reservations VM machine type recommender google.compute.instance.MachineTypeRecommender Note: Recommendations of this type indicating an underutilized VM (those with a negative costs savings or cost increase) are shown on the Utilization insights dashboard but not on the FinOps Recommendations dashboard.
- Optimize underprovisioned SQL instances Cloud Run recommenders Cloud Run CPU allocation recommender google.run.service.CostRecommender Switch to CPU always-allocated Project recommender - all services Unattended project recommender google.resourcemanager.projectUtilization.Recommender Reclaim or remove unused projects Resources Google Cloud Well-Architected Framework: Cost optimization Optimize costs with committed use discounts Purchasing spend-based committed use discounts Purchasing resource-based committed use discounts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- How potential savings are determined The FinOps hub considers four optimization practices to create cost-saving recommendations: Turning off idle resources Right-sizing instances Other configuration changes for certain resources Purchasing committed use discounts (CUDs) Metrics throughout the hub reflect how well you're using those optimizations and identify additional optimization opportunities to reduce costs and improve FinOps practices.
- Access the FinOps hub To access the FinOps hub for a Cloud Billing account, and view all available recommendations, the FinOps score, CUDs optimization metrics, and utilization insights, you need one of the following predefined Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Administrator If you prefer to use a custom role to access the FinOps hub, you need a role with the following permissions on your Cloud Billing account: billing.accounts.get billing.accounts.getSpendingInformation billing.finOpsBenchmarkInformation.get billing.finOpsHealthInformation.get recommender.costRecommendations.listAll View details of a recommendation and apply the recommendation To view the details and apply a recommendation, you need recommender-specific permissions on the billing account or project.

### "Review and apply FinOps hub Recommendations \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resources FinOps hub Google Cloud Well-Architected Framework: Cost optimization Optimize costs with committed use discounts Purchasing spend-based committed use discounts Purchasing resource-based committed use discounts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To access the FinOps hub and Recommendations dashboard using a custom role, you need the following permissions on your Cloud Billing account: billing.accounts.get billing.accounts.getSpendingInformation billing.finOpsBenchmarkInformation.get billing.finOpsHealthInformation.get recommender.costRecommendations.listAll Open the Recommendations dashboard To view the Recommendations dashboard: In the Google Cloud console, go to the FinOps hub.
- If you select an individual service, or opt to view only some of the projects, the values in the summary (such as Last month's realized savings or Potential savings/month ) and the recommendations in the list update based on the selections.
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Review and apply FinOps hub Recommendations Stay organized with collections Save and categorize content based on your preferences.

