---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.566Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing detailed export Managed Microsoft AD domain granularity"
feature_slug: "cloud-billing-detailed-export-managed-microsoft-ad-domain-granularity"
latest_feature_date: "2024-06-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
keywords:
  - "billing"
  - "detailed"
  - "export"
  - "managed"
  - "microsoft"
  - "ad"
  - "domain"
  - "granularity"
---

# Cloud Billing detailed export Managed Microsoft AD domain granularity

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing detailed export now supports granular Managed Microsoft Active Directory domain cost data, filterable by resource.name or resource.global_name.

## Extended Definition

Cloud Billing detailed export now supports granular Managed Microsoft Active Directory domain cost data, filterable by resource.name or resource.global_name.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)

## Supporting Pages

### "Full resource names \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/full-resource-names](https://docs.cloud.google.com/iam/docs/full-resource-names)
- Source ID: `site-iam-reference`
- Final score: 56
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource type Full resource name format BigQuery datasets //bigquery.googleapis.com/projects/ PROJECT ID /datasets/ DATASET ID Cloud Billing accounts //cloudbilling.googleapis.com/billingAccounts/ BILLING ACCOUNT ID Cloud Run services //run.googleapis.com/projects/ PROJECT ID /locations/ LOCATION ID /services/ SERVICE ID Spanner instances //spanner.googleapis.com/projects/ PROJECT ID /instances/ INSTANCE ID Cloud SQL instances //sqladmin.googleapis.com/projects/ PROJECT ID /instances/ INSTANCE ID Cloud Storage buckets 1 //storage.googleapis.com/projects/ /buckets/ BUCKET ID Compute Engine instances //compute.googleapis.com/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE ID Compute Engine networks //compute.googleapis.com/projects/ PROJECT ID /global/networks/ NETWORK Compute Engine subnetworks //compute.googleapis.com/projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNETWORK Google Kubernetes Engine clusters //container.googleapis.com/projects/ PROJECT ID /clusters/ CLUSTER ID IAM service accounts //iam.googleapis.com/projects/ PROJECT ID / serviceAccounts/ SERVICE ACCOUNT EMAIL IAM service account keys //iam.googleapis.com/projects/ PROJECT ID / serviceAccounts/ SERVICE ACCOUNT EMAIL /keys/ KEY ID Identity-Aware Proxy App Engine app service //iap.googleapis.com/projects/ PROJECT NUMBER /iap web/appengine- PROJECT ID /services/ APP SERVICE ID Identity-Aware Proxy Compute Engine backend service //iap.googleapis.com/projects/ PROJECT NUMBER /iap web/compute/services/ BACKEND SERVICE ID OR NAME Pub/Sub topics //pubsub.googleapis.com/projects/ PROJECT ID /topics/ TOPIC ID Resource Manager organizations //cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION NUMBER Resource Manager folders //cloudresourcemanager.googleapis.com/folders/ FOLDER NUMBER Resource Manager projects //cloudresourcemanager.googleapis.com/projects/ PROJECT ID 1 The format shown here is compatible with IAM.

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- PARTITIONTIME , DAY )) = '2025-09-16' AND t . sku . description LIKE '%Core%' AND sl reservation . value LIKE '%tc-billing-case2-res-1757983801%' AND t . resource . global name NOT LIKE '%allocation/%' AND t . resource . name IS NOT NULL AND t . resource . name != '' ORDER BY t . usage start time , t . project . id , t . resource . name ; Sample results: usage start time usage end time consumer project id instance name usage amount 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 552 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 533 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 517 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 3600 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 3600 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 3600 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 3022 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 79 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 79 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 3086 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 3151 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 79 Analyze Vertex AI reservation usage using BigQuery To analyze how first-party (1P) products, such as Vertex AI, consume your shared reservations across projects where Vertex AI jobs are active, use the following system labels in BigQuery: compute.googleapis.com/reservation name compute.googleapis.com/reservation project id For more information about how to share reservations with first-party (1P) products in Vertex AI, see the following: Use reservations with training Use reservations with online inference Use reservations with Vertex AI Workbench instances The following example queries show how to use these labels to get detailed visibility into your reservation usage, monitor how instances consume these reservations, and perform in-depth cost analysis.
- Standard SQL SELECT invoice . month , cost type , resource . name , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost 1000000 AS int64 )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount 1000000 as int64 )) FROM UNNEST ( credits ) c ), 0 ))) / 1000000 AS total exact FROM project . dataset . gcp billing export resource v1 XXXXXX XXXXXX XXXXXX GROUP BY 1 , 2 , 3 ORDER BY 1 ASC , 2 ASC , 3 ASC ; For example, the result of the preceding query might be: Row month cost type name total total exact 1 201901 regular null $1000.501209987994782 $1000.50 2 201901 rounding error null –$0.500489920049387 –$0.50 3 201901 tax null $10.000329958477891 $10.00 4 201901 adjustment null –$5.002572999387045 –$5.00 5 201901 regular backend1 $410.998795012082947 $411.00 2 201901 rounding error backend1 –$0.2404900489920378 –$0.24 3 201901 tax backend1 $4.105840329977189 $4.11 Get a breakdown of Google Kubernetes Engine (GKE) cluster costs This section provides examples of filtering GKE cluster costs in your BigQuery export reports.
- Standard SQL SELECT invoice . month , resource . name , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost 1000000 AS int64 )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount 1000000 as int64 )) FROM UNNEST ( credits ) c ), 0 ))) / 1000000 AS total exact FROM project . dataset . gcp billing export resource v1 XXXXXX XXXXXX XXXXXX GROUP BY 1 , 2 ORDER BY 1 ASC , 2 ASC ; For example, the result of the preceding query might be: Row month name total total exact 1 201901 null $1005.004832999999984 $1005.00 2 201901 backend1 $781.8499760000028 $781.85 3 201902 null $953.0034923645475983 $953.03 4 201902 backend1 $992.3101739999999717 $992.31 5 201902 bitnami-launchpad-wordpress-1-wordpress $1.2817819999999998 $1.28 Return details by cost type for each resource, per invoice month This query shows the totals for each cost type for each resource.name per month.
- SELECT t . project . id AS consumer project id , t . sku . description AS sku description , CASE WHEN t . resource . global name NOT LIKE '%instances/%' THEN 'Unused Capacity' WHEN t . resource . name IS NOT NULL AND t . resource . name != '' THEN 'Instance Usage' ELSE 'Other Reservation Cost' END AS usage category , SUM ( t . usage . amount ) AS total usage amount , t . usage . unit AS usage unit , SUM ( t . cost ) AS total cost usd FROM project - ID . dataset . gcp billing export resource v1 X AS t LEFT JOIN UNNEST ( t . system labels ) AS sl reservation ON sl reservation . key = 'compute.googleapis.com/reservation name' LEFT JOIN UNNEST ( t . system labels ) AS sl project id ON sl project id . key = 'compute.googleapis.com/reservation project id' WHERE t . service . id = '6F81-5844-456A' AND DATE ( TIMESTAMP TRUNC ( t .

### "Analyze your AI spend with the AI Cost Summary Agent \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary](https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary)
- Source ID: `site-docs-root-2`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permissions required to use the AI Cost Summary Agent To use the AI Cost Summary widget, you need a role that includes the following permissions on the Cloud Billing account: billing.anomalies.list billing.billingAccountPrices.list billing.billingAccountServices.list billing.billingAccountSkus.list To gain these permissions using a predefined role, ask your administrator to grant you one of the following Cloud Billing IAM role on your Cloud Billing account: Billing Account Viewer Billing Account Administrator Analyze your AI spend The AI Cost Summary Agent is presented as a widget on the Billing Overview page for your Cloud Billing account.
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Analyze your AI spend with the AI Cost Summary Agent Stay organized with collections Save and categorize content based on your preferences.
- To use the AI Cost Summary Agent, complete the following steps: In the Google Cloud console, go to the Billing Overview page for your Cloud Billing account.
- Go to your Cloud Billing account At the prompt, choose the Cloud Billing account for which you'd like to analyze your AI spend.

