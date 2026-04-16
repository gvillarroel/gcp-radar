---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.538Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Scenario modeling for committed use discount recommendations"
feature_slug: "scenario-modeling-for-committed-use-discount-recommendations"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-hub"
  - "https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights"
keywords:
  - "scenario"
  - "modeling"
  - "committed"
  - "use"
  - "discount"
  - "recommendations"
  - "generally"
  - "available"
---

# Scenario modeling for committed use discount recommendations

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Scenario modeling for committed use discount recommendations is generally available, letting users simulate spend-based and resource-based CUD scenarios to optimize commitment purchases.

## Extended Definition

Scenario modeling for committed use discount recommendations is generally available, letting users simulate spend-based and resource-based CUD scenarios to optimize commitment purchases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights](https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- When viewing costs by Invoice month , the following data is available in the Cloud Billing reports: Invoices generally include all costs incurred during a given calendar month, but the cost for some services' usage at the very end of a calendar month might roll over to the next month's invoice.
- Legacy spend-based CUD credits : For spend-based committed use discounts (CUDs) that aren't part of the new pricing model, this is the credit earned in exchange for your commitment to spend a minimum amount for a service in a particular region.
- Usage-specific savings : This includes any credits or discounts that were applied directly to the SKU usage, such as sustained use discounts,committed use discounts, or free trial and other promotional credits that were applied.
- Savings programs Savings programs include the various committed use discounts (CUDs) options, which lower the cost of your Google Cloud usage by offering discounts and credits tied to your resource usage or spending.

### "Review utilization and wasted usage insights \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights](https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights)
- Source ID: `site-docs-root-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Savings don't include existing discounts available through active Committed Use Discounts (CUDs).
- The cost is calculated using either the list price or custom contract price (if applicable), and includes any credits applied to the resource, such as committed use discounts (CUDs) and other credits. $514.11, $98.00 Region The region where the resource is located. us-central1, europe-west4, asia-east2 Utilization metric 1 For the specific resource, the primary metric that is analyzed to determine utilization insights.
- Resources FinOps hub Google Cloud Well-Architected Framework: Cost optimization Optimize costs with committed use discounts Purchasing spend-based committed use discounts Purchasing resource-based committed use discounts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Memory: 20%, CPU 11.72% CUD benefit 'Yes' indicates that the resource has an active, purchased Committed Use Discount (CUD) and that a portion of the cost was covered with a CUD. 'No' indicates that the resource isn't covered by an active CUD.

### Optimize costs with FinOps hub \_|\_ Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Name Recommender ID Short Description Committed Use Discounts (CUDs) recommenders Committed use discount recommender google.compute.commitment.UsageCommitmentRecommender Reduce costs through purchasing resource-based commitments Committed use discount recommender google.cloudbilling.commitment.SpendBasedCommitmentRecommender Reduce costs through purchasing spend-based and Compute flexible commitments Compute Engine recommenders Idle custom image recommender google.compute.image.IdleResourceRecommender Remove unused images Idle IP address recommender google.compute.address.IdleResourceRecommender Remove unused IPs Idle persistent disk recommender google.compute.disk.IdleResourceRecommender Backup and remove unused disks Idle VM recommender google.compute.instance.IdleResourceRecommender Remove unused VMs Idle reservations recommender google.compute.IdleResourceRecommender Remove unused reservations Managed instance group machine type recommender google.compute.instanceGroupManager.MachineTypeRecommender Right-size MIG machine types Underutilized reservations recommender google.compute.RightSizeResourceRecommender Right-size underutilized reservations VM machine type recommender google.compute.instance.MachineTypeRecommender Note: Recommendations of this type indicating an underutilized VM (those with a negative costs savings or cost increase) are shown on the Utilization insights dashboard but not on the FinOps Recommendations dashboard.
- How potential savings are determined The FinOps hub considers four optimization practices to create cost-saving recommendations: Turning off idle resources Right-sizing instances Other configuration changes for certain resources Purchasing committed use discounts (CUDs) Metrics throughout the hub reflect how well you're using those optimizations and identify additional optimization opportunities to reduce costs and improve FinOps practices.
- Access the FinOps hub To access the FinOps hub for a Cloud Billing account, and view all available recommendations, the FinOps score, CUDs optimization metrics, and utilization insights, you need one of the following predefined Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Administrator If you prefer to use a custom role to access the FinOps hub, you need a role with the following permissions on your Cloud Billing account: billing.accounts.get billing.accounts.getSpendingInformation billing.finOpsBenchmarkInformation.get billing.finOpsHealthInformation.get recommender.costRecommendations.listAll View details of a recommendation and apply the recommendation To view the details and apply a recommendation, you need recommender-specific permissions on the billing account or project.
- Optimize underprovisioned SQL instances Cloud Run recommenders Cloud Run CPU allocation recommender google.run.service.CostRecommender Switch to CPU always-allocated Project recommender - all services Unattended project recommender google.resourcemanager.projectUtilization.Recommender Reclaim or remove unused projects Resources Google Cloud Well-Architected Framework: Cost optimization Optimize costs with committed use discounts Purchasing spend-based committed use discounts Purchasing resource-based committed use discounts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

