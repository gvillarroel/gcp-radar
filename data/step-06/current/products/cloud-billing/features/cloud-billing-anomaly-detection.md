---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.541Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing Anomaly Detection"
feature_slug: "cloud-billing-anomaly-detection"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/resolve-issues"
keywords:
  - "billing"
  - "anomaly"
  - "detection"
  - "generally"
  - "available"
  - "expanded"
  - "capabilities"
  - "including"
---

# Cloud Billing Anomaly Detection

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Cloud Billing Anomaly Detection is generally available with expanded capabilities including auto-generated thresholds, configurable deviation-percentage thresholds, and email alerts for billing administrators; Cloud Billing adds Anomaly Detection in the Anomalies dashboard to surface unexpected cost spikes and provide root cause analysis by service, region, and SKU.

## Extended Definition

Cloud Billing Anomaly Detection is generally available with expanded capabilities including auto-generated thresholds, configurable deviation-percentage thresholds, and email alerts for billing administrators; Cloud Billing adds Anomaly Detection in the Anomalies dashboard to surface unexpected cost spikes and provide root cause analysis by service, region, and SKU.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/resolve-issues](https://docs.cloud.google.com/billing/docs/how-to/resolve-issues)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- When viewing costs by Invoice month , the following data is available in the Cloud Billing reports: Invoices generally include all costs incurred during a given calendar month, but the cost for some services' usage at the very end of a calendar month might roll over to the next month's invoice.
- These system delays also impact budget alerts, anomaly detection, and billing data exported to BigQuery.
- To view the cost reports for your Cloud Billing account, including viewing the cost information for all of the Google Cloud projects that are linked to the billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.getSpendingInformation To gain these permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing To view all costs for an individual Google Cloud project, you need billing-specific permissions on the Google Cloud project .
- To view the Cloud Billing reports for a project, you need a role on the Google Cloud project that includes the following permissions : billing.resourceCosts.get resourcemanager.projects.get To gain these permissions using a predefined role , ask your administrator to grant you one of the following basic IAM roles on your Google Cloud projects: Project Viewer Project Editor Project Owner Note : If you are viewing Cloud Billing reports using project-level permissions only, some of the billing-account-level report features aren't available.

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- These system delays also impact budget alerts, anomaly detection, and billing data exported to BigQuery.
- PARTITIONTIME , DAY )) = '2025-09-16' AND t . sku . description LIKE '%Core%' AND sl reservation . value LIKE '%tc-billing-case2-res-1757983801%' GROUP BY consumer project id , t . sku . description , usage category , usage unit ORDER BY consumer project id , usage category ; Sample Results: consumer project id sku description usage category total usage amount usage unit total cost usd disco-sector-292704 E2 Instance Core running in Americas Instance Usage 14551 seconds 0.088158 flash-freehold-292704 E2 Instance Core running in Americas Instance Usage 7347 seconds 0.044512 united-sandbox-303721 E2 Instance Core running in Americas Unused Capacity 7936 seconds 0.04808 List all the instances consuming a reservation Similarly, we can write a query to understand all the instances, including first-party (1P) instances, that have consumed a given reservation during a given time period.
- Resource-level tags in the Cloud Billing data export are available for the following resources: AlloyDB for PostgreSQL clusters, instances, and backups Artifact Registry repositories Bigtable instances Cloud Run services and jobs Cloud Storage buckets Compute Engine instances Memorystore for Redis instances Secret Manager global and regional secrets Spanner instances Firestore databases Tags limitations Tags might take up to an hour to propagate to BigQuery exports.
- Due to the complexity of our billing and processing systems, you might see a delay between your use of services, the usage charges being applied to your Google payments accounts, and the usage and costs being available to view in the various cost reports and dashboards.

### Resolve Cloud Billing issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/resolve-issues](https://docs.cloud.google.com/billing/docs/how-to/resolve-issues)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These system delays also impact budget alerts, anomaly detection, and billing data exported to BigQuery.
- Due to the complexity of our billing and processing systems, you might see a delay between your use of services, the usage charges being applied to your Google payments accounts, and the usage and costs being available to view in the various cost reports and dashboards.
- The adjustments shown correspond to the invoice, credit memo, and debit memo documents available in the Documents area of the Billing section in the Google Cloud console.
- To learn if and where an adjustment is applied, review the details of the invoice and credit or debit memo documents available in the Cloud Billing Documents page .

