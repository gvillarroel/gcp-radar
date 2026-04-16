---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.603Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Resource-based committed use discount prioritized attribution"
feature_slug: "resource-based-committed-use-discount-prioritized-attribution"
latest_feature_date: "2021-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/cud-analysis"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-hub"
keywords:
  - "resource"
  - "based"
  - "committed"
  - "use"
  - "discount"
  - "prioritized"
  - "attribution"
  - "introduces"
---

# Resource-based committed use discount prioritized attribution

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Introduces prioritized attribution for resource-based committed use discounts so credits and subscription fees can be distributed to projects in Cloud Billing.

## Extended Definition

Introduces prioritized attribution for resource-based committed use discounts so credits and subscription fees can be distributed to projects in Cloud Billing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)

## Supporting Pages

### "Optimize costs with Committed Use Discounts \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cud-analysis](https://docs.cloud.google.com/billing/docs/how-to/cud-analysis)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Related topics Overview of committed use discounts Purchasing spend-based committed use discounts Purchasing resource-based committed use discounts View your Cloud Billing reports and cost trends Understand your savings with cost breakdown reports Export Cloud Billing data to BigQuery View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Analyze your CUDs After you've purchased commitments, you can use the CUD analysis report to analyze the effectiveness of your discounts: To learn how to analyze your spend- or resource-based CUDs, see Analyze the effectiveness of your CUDs .
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Optimize costs with Committed Use Discounts Stay organized with collections Save and categorize content based on your preferences.
- Committed use discounts (CUDs) provide discounted prices in exchange for your commitment to use a minimum level of resources for a one-year or three-year period.

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Resource-based CUD credits : Resource-based committed use discounts (CUDs) provide credits on Compute Engine virtual machines (VMs) when you commit to using eligible resources during a specified term.
- Legacy spend-based CUD credits : For spend-based committed use discounts (CUDs) that aren't part of the new pricing model, this is the credit earned in exchange for your commitment to spend a minimum amount for a service in a particular region.
- Savings programs Savings programs include the various committed use discounts (CUDs) options, which lower the cost of your Google Cloud usage by offering discounts and credits tied to your resource usage or spending.
- Spend-based CUD discounts : Spend-based committed use discounts (CUDs) provide discounted prices on certain Google Cloud services when you commit to spending a minimum amount during a specified term.

### Optimize costs with FinOps hub \_|\_ Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Optimize underprovisioned SQL instances Cloud Run recommenders Cloud Run CPU allocation recommender google.run.service.CostRecommender Switch to CPU always-allocated Project recommender - all services Unattended project recommender google.resourcemanager.projectUtilization.Recommender Reclaim or remove unused projects Resources Google Cloud Well-Architected Framework: Cost optimization Optimize costs with committed use discounts Purchasing spend-based committed use discounts Purchasing resource-based committed use discounts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Name Recommender ID Short Description Committed Use Discounts (CUDs) recommenders Committed use discount recommender google.compute.commitment.UsageCommitmentRecommender Reduce costs through purchasing resource-based commitments Committed use discount recommender google.cloudbilling.commitment.SpendBasedCommitmentRecommender Reduce costs through purchasing spend-based and Compute flexible commitments Compute Engine recommenders Idle custom image recommender google.compute.image.IdleResourceRecommender Remove unused images Idle IP address recommender google.compute.address.IdleResourceRecommender Remove unused IPs Idle persistent disk recommender google.compute.disk.IdleResourceRecommender Backup and remove unused disks Idle VM recommender google.compute.instance.IdleResourceRecommender Remove unused VMs Idle reservations recommender google.compute.IdleResourceRecommender Remove unused reservations Managed instance group machine type recommender google.compute.instanceGroupManager.MachineTypeRecommender Right-size MIG machine types Underutilized reservations recommender google.compute.RightSizeResourceRecommender Right-size underutilized reservations VM machine type recommender google.compute.instance.MachineTypeRecommender Note: Recommendations of this type indicating an underutilized VM (those with a negative costs savings or cost increase) are shown on the Utilization insights dashboard but not on the FinOps Recommendations dashboard.
- How potential savings are determined The FinOps hub considers four optimization practices to create cost-saving recommendations: Turning off idle resources Right-sizing instances Other configuration changes for certain resources Purchasing committed use discounts (CUDs) Metrics throughout the hub reflect how well you're using those optimizations and identify additional optimization opportunities to reduce costs and improve FinOps practices.
- The estimated savings in a recommendation doesn't consider existing committed use discounts that you have purchased that might apply to the resource.

