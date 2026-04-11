---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.266Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Compute Engine Flexible CUD recommendations"
feature_slug: "compute-engine-flexible-cud-recommendations"
latest_feature_date: "2024-01-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible"
  - "https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-hub"
keywords:
  - "compute"
  - "engine"
  - "flexible"
  - "cud"
  - "recommendations"
  - "for"
  - "committed"
  - "use"
---

# Compute Engine Flexible CUD recommendations

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Recommendations for Compute Engine Flexible committed use discounts are now generally available in FinOps Hub to optimize commitment purchase amounts across projects, regions, or machine series.

## Extended Definition

Recommendations for Compute Engine Flexible committed use discounts are now generally available in FinOps Hub to optimize commitment purchase amounts across projects, regions, or machine series.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible)
- [https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds](https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)

## Supporting Pages

### "Calculate savings with Compute flexible commitments \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible)
- Source ID: `site-docs-root-2`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, a credit for a Compute flexible CUD for the usage of N1 CORE running in Americas appears as: Credit type : COMMITTED USAGE DISCOUNT DOLLAR BASE Credit name : Committed use discount - dollar based: GCE Commitments SKU description : N1 CORE running in Americas Analyze commitment costs and credits on your invoice or statement To view and analyze detailed costs and credits for a given invoice or statement, access the Cost table report , a cost management tool that you can use to understand the costs that reconcile to your invoice.
- TABLE LEFT JOIN UNNEST ( credits ) AS credits WHERE credits . full name LIKE 'Committed use discount - dollar based: GCE Commitments%' GROUP BY 1 ; To view both your credits drawn down by all-usage SKUs and commitment fees, use the following sample query: Standard SQL SELECT FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX LEFT JOIN UNNEST ( credits ) AS credits WHERE credits . full name LIKE 'Committed use discount - dollar based: GCE Commitments%' OR sku . description LIKE "%GCE for 1 year%" OR sku . description LIKE "%GCE for 3 year%" ; Calculate your overall flexible CUDs savings The total effective savings from flexible CUDs vary depending on the resources used in a given month and the on-demand pricing of those resources.
- Related topics Learn more about CUDs Get recommendations for committed use discounts View and download the cost details of your invoice or statement Understand your savings with cost breakdown reports Get a Cloud Billing document such as an invoice, statement, or receipt View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Compute flexible CUDs apply to your spend across one or more of the following services: Compute Engine Google Kubernetes Engine Cloud Run Spending on instance-based billing is also eligible for Cloud Run.

### "Analyze the effectiveness of your CUDs \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds](https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Important: The CUD analysis doesn't compute utilization when you aggregate more than one type of CUD, because the utilization might be on different resources (cores, RAM, etc.) Summary cards Summary cards above the stacked bar chart show the following details for the selected commitment type: Active commitment : The current quantity of active commitments you purchased for a selected resource.
- Understand how CUDs impact your bill Google Cloud uses a balance sheet format for your bill: We display credits from savings programs, such as Committed Use Discounts (CUDs), in your cost reports to provide a direct and transparent view of your actual savings.
- Google Cloud offers two types of CUDs: Resource-based CUDs : You get a credit back to offset the on-demand price in exchange for your commitment to purchase a minimum level of Compute Engine resources belonging to a particular machine series and region.
- Note: If you want to buy commitments to cover any gray portion shown in CUD analysis, you should manually calculate the discounted value based on the discounts provided by the CUD product, or use the CUD Recommendations for automated guidance.

### Optimize costs with FinOps hub \_|\_ Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Name Recommender ID Short Description Committed Use Discounts (CUDs) recommenders Committed use discount recommender google.compute.commitment.UsageCommitmentRecommender Reduce costs through purchasing resource-based commitments Committed use discount recommender google.cloudbilling.commitment.SpendBasedCommitmentRecommender Reduce costs through purchasing spend-based and Compute flexible commitments Compute Engine recommenders Idle custom image recommender google.compute.image.IdleResourceRecommender Remove unused images Idle IP address recommender google.compute.address.IdleResourceRecommender Remove unused IPs Idle persistent disk recommender google.compute.disk.IdleResourceRecommender Backup and remove unused disks Idle VM recommender google.compute.instance.IdleResourceRecommender Remove unused VMs Idle reservations recommender google.compute.IdleResourceRecommender Remove unused reservations Managed instance group machine type recommender google.compute.instanceGroupManager.MachineTypeRecommender Right-size MIG machine types Underutilized reservations recommender google.compute.RightSizeResourceRecommender Right-size underutilized reservations VM machine type recommender google.compute.instance.MachineTypeRecommender Note: Recommendations of this type indicating an underutilized VM (those with a negative costs savings or cost increase) are shown on the Utilization insights dashboard but not on the FinOps Recommendations dashboard.
- How potential savings are determined The FinOps hub considers four optimization practices to create cost-saving recommendations: Turning off idle resources Right-sizing instances Other configuration changes for certain resources Purchasing committed use discounts (CUDs) Metrics throughout the hub reflect how well you're using those optimizations and identify additional optimization opportunities to reduce costs and improve FinOps practices.
- Access the FinOps hub To access the FinOps hub for a Cloud Billing account, and view all available recommendations, the FinOps score, CUDs optimization metrics, and utilization insights, you need one of the following predefined Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Administrator If you prefer to use a custom role to access the FinOps hub, you need a role with the following permissions on your Cloud Billing account: billing.accounts.get billing.accounts.getSpendingInformation billing.finOpsBenchmarkInformation.get billing.finOpsHealthInformation.get recommender.costRecommendations.listAll View details of a recommendation and apply the recommendation To view the details and apply a recommendation, you need recommender-specific permissions on the billing account or project.
- If there are multiple potential opportunities to save on the same Compute Engine resource, such as purchasing a resource-based CUD and a Compute flexible CUD, the FinOps hub de-duplicates the opportunities and only includes the recommendation that brings you the higher savings.

