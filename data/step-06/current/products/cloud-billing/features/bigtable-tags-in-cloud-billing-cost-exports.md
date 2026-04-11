---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.218Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "BigTable tags in Cloud Billing cost exports"
feature_slug: "bigtable-tags-in-cloud-billing-cost-exports"
latest_feature_date: "2025-01-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
keywords:
  - "bigtable"
  - "tags"
  - "in"
  - "billing"
  - "cost"
  - "exports"
  - "now"
  - "includes"
---

# BigTable tags in Cloud Billing cost exports

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing now includes tags data for Bigtable instances in both Standard and Detailed usage cost exports.

## Extended Definition

Cloud Billing now includes tags data for Bigtable instances in both Standard and Detailed usage cost exports.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator](https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- To view the cost reports for your Cloud Billing account, including viewing the cost information for all of the Google Cloud projects that are linked to the billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.getSpendingInformation To gain these permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing To view all costs for an individual Google Cloud project, you need billing-specific permissions on the Google Cloud project .
- To view the Cloud Billing reports for a project, you need a role on the Google Cloud project that includes the following permissions : billing.resourceCosts.get resourcemanager.projects.get To gain these permissions using a predefined role , ask your administrator to grant you one of the following basic IAM roles on your Google Cloud projects: Project Viewer Project Editor Project Owner Note : If you are viewing Cloud Billing reports using project-level permissions only, some of the billing-account-level report features aren't available.
- Promotional credits for custom pricing contracts : If you have a custom pricing contract with Google Cloud, and received promotional credits that apply to costs at list prices , your report includes a service called Invoice , with a SKU called Contract billing adjustment .
- For more information about Google Cloud project permissions, see: Access control for projects with IAM IAM basic and predefined roles reference Access the reports page To view the cost reports for your Cloud Billing account or project: Using the procedure that fits your level of access to Cloud Billing accounts , go to your Cloud Billing account in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.

### Find a Billing Account Administrator \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator](https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-administrator)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- On the Cloud Billing account, you need a role that includes the following permissions : billing.accounts.get billing.accounts.getIamPolicy These permissions are granted in many predefined roles for Cloud Billing , including: Billing Account User Billing Account Viewer Billing Account Costs Manager Billing Account Administrator If you have some level of Cloud Billing account access, you can view basic information about the billing account, including viewing the Info panel to identify the administrators and other principals within your organization who have billing account permissions.
- Billing Account Administrators can manage payment instruments, pay bills, configure billing data exports, view cost information, link and unlink projects, and manage user permissions on the billing account.
- If all else fails : If you have no way to know who your Billing Account Administrators are and you (or your organization) have lost access to your Cloud Billing account and you need to regain access, you can contact Cloud Billing Support using the account recovery form .
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Find a Billing Account Administrator Stay organized with collections Save and categorize content based on your preferences.

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Resource-level tags in the Cloud Billing data export are available for the following resources: AlloyDB for PostgreSQL clusters, instances, and backups Artifact Registry repositories Bigtable instances Cloud Run services and jobs Cloud Storage buckets Compute Engine instances Memorystore for Redis instances Secret Manager global and regional secrets Spanner instances Firestore databases Tags limitations Tags might take up to an hour to propagate to BigQuery exports.
- GKE cluster costs before credits SELECT SUM ( cost ) AS cost before credits , labels . value AS cluster name FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX LEFT JOIN UNNEST ( labels ) as labels ON labels . key = "goog-k8s-cluster-name" GROUP BY labels . value ; GKE costs after credits by namespace SELECT labels . value as namespace , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS cost after credits , FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX LEFT JOIN UNNEST ( labels ) as labels ON labels . key = "k8s-namespace" GROUP BY namespace ; GKE costs by SKU SELECT project . id AS project id , labels . value AS cluster name , sku . id AS sku id , sku . description AS sku description , SUM ( cost ) AS cost FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX JOIN UNNEST ( labels ) AS labels ON labels . key = "goog-k8s-cluster-name" GROUP BY cluster name , project id , sku description , sku id ; Query examples with tags The following examples illustrate ways to query your data with tags.
- Tags ) AS tag WHERE tag . key = 'gcp-product' AND tag . value = 'vertex ai' AND tag . inherited = TRUE ) AND sl reservation . value = ' RESERVATION NAME ' AND sl project id . value = ' PROJECT ID ' GROUP BY consumer project id , sku description , usage unit ORDER BY consumer project id , sku description , usage unit ; Sample results The following output shows the contribution of each project to total usage costs while consuming the reservation. consumer project id sku description usage unit total usage amount project1 N1 Predefined Instance Core running in Americas seconds 4221572 project1 N1 Predefined Instance Ram running in Americas byte-seconds 16998309356466500 project1 Nvidia Tesla T4 GPU running in Americas seconds 1057391 project2 N1 Predefined Instance Core running in Americas seconds 3996192 project2 N1 Predefined Instance Ram running in Americas byte-seconds 16009292257431300 project2 Nvidia Tesla T4 GPU running in Americas seconds 993985 Related topics For information related to exported Cloud Billing data, see the following: Set up Cloud Billing data export to BigQuery.
- SELECT invoice . month AS invoice month , tag . value AS cost center , ROUND (( SUM ( CAST ( cost AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS NUMERIC )) FROM UNNEST ( credits ) AS c ), 0 ))), 2 ) AS net cost FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX , UNNEST ( tags ) AS tag WHERE tag . key = "cost center" AND tag . namespace = "821092389413" GROUP BY invoice . month , tag . value ORDER BY invoice . month , tag . value ; For example, the result of the preceding query might be: Row invoice month cost center net cost 1 202208 android mobile apps 9.93 2 202208 ios mobile apps 9.93 3 202209 android mobile apps 25.42 4 202209 ios mobile apps 25.4 5 202209 personalization 16.08 View costs of untagged resources This query shows the invoice total for untagged resources, grouped by invoice month.

