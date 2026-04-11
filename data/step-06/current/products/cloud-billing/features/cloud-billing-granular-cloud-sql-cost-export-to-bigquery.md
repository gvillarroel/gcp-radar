---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.290Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing granular Cloud SQL cost export to BigQuery"
feature_slug: "cloud-billing-granular-cloud-sql-cost-export-to-bigquery"
latest_feature_date: "2022-12-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage"
keywords:
  - "billing"
  - "granular"
  - "sql"
  - "cost"
  - "export"
  - "to"
  - "now"
  - "exposes"
---

# Cloud Billing granular Cloud SQL cost export to BigQuery

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing now exposes granular Cloud SQL instance cost data in the Detailed cost export with filtering through the resource.global_name field.

## Extended Definition

Cloud Billing now exposes granular Cloud SQL instance cost data in the Detailed cost export with filtering through the resource.global_name field.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Related topics Export Cloud Billing data to BigQuery Understand your savings with cost breakdown reports View your cost and payment history Create, modify, or close your Cloud Billing account Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Prerequisites to generate and run a query To generate a query from a Cloud Billing Report , ensure you and your Cloud Billing account meet the following requirements: On your Cloud Billing account, Cloud Billing data export to BigQuery must be enabled, for either the standard usage cost data or detailed usage cost data .
- Generate a query To create a SQL query to run against your billing data exported to BigQuery, that returns results equivalent to the console report, do the following: Go to the Cloud Billing Reports in the Google Cloud console.
- If you enabled Cloud Billing data export to BigQuery , you can generate a SQL query in BigQuery that's configured to use the equivalent Billing Report settings and filters to query your exported billing data.

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Note: Some network data transfer, Cloud SQL backups in specific locations, and Storage Snapshot costs aren't included in the granular Cloud SQL instance costs in Cloud Billing export to BigQuery.
- Standard SQL SELECT invoice . month , cost type , resource . name , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost 1000000 AS int64 )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount 1000000 as int64 )) FROM UNNEST ( credits ) c ), 0 ))) / 1000000 AS total exact FROM project . dataset . gcp billing export resource v1 XXXXXX XXXXXX XXXXXX GROUP BY 1 , 2 , 3 ORDER BY 1 ASC , 2 ASC , 3 ASC ; For example, the result of the preceding query might be: Row month cost type name total total exact 1 201901 regular null $1000.501209987994782 $1000.50 2 201901 rounding error null –$0.500489920049387 –$0.50 3 201901 tax null $10.000329958477891 $10.00 4 201901 adjustment null –$5.002572999387045 –$5.00 5 201901 regular backend1 $410.998795012082947 $411.00 2 201901 rounding error backend1 –$0.2404900489920378 –$0.24 3 201901 tax backend1 $4.105840329977189 $4.11 Get a breakdown of Google Kubernetes Engine (GKE) cluster costs This section provides examples of filtering GKE cluster costs in your BigQuery export reports.
- Standard SQL SELECT invoice . month , resource . name , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost 1000000 AS int64 )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount 1000000 as int64 )) FROM UNNEST ( credits ) c ), 0 ))) / 1000000 AS total exact FROM project . dataset . gcp billing export resource v1 XXXXXX XXXXXX XXXXXX GROUP BY 1 , 2 ORDER BY 1 ASC , 2 ASC ; For example, the result of the preceding query might be: Row month name total total exact 1 201901 null $1005.004832999999984 $1005.00 2 201901 backend1 $781.8499760000028 $781.85 3 201902 null $953.0034923645475983 $953.03 4 201902 backend1 $992.3101739999999717 $992.31 5 201902 bitnami-launchpad-wordpress-1-wordpress $1.2817819999999998 $1.28 Return details by cost type for each resource, per invoice month This query shows the totals for each cost type for each resource.name per month.
- The detailed export includes granular cost information about the following services: AlloyDB for PostgreSQL App Engine BigQuery Bigtable Cloud Data Fusion Cloud Deploy Cloud Run functions Cloud Logging Cloud Run Cloud SQL Cloud Storage Compute Engine Dataflow Managed Service for Apache Spark Metastore Firestore and Datastore Google Kubernetes Engine (GKE) To view a breakdown of GKE cluster costs in a detailed data export, you must also enable cost allocation for GKE .

### "Structure of Standard data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- Source ID: `site-docs-root-2`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Standard SQL SELECT invoice . month , cost type , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost 1000000 AS int64 )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount 1000000 as int64 )) FROM UNNEST ( credits ) c ), 0 ))) / 1000000 AS total exact FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX GROUP BY 1 , 2 ORDER BY 1 ASC , 2 ASC ; For example, the result of the preceding query might be: Row month cost type total total exact 1 201901 regular $1000.501209987994782 $1000.50 2 201901 rounding error –$0.500489920049387 –$0.50 3 201901 tax $10.000329958477891 $10.00 4 201901 adjustment –$5.002572999387045 –$5.00 Query examples with labels Note: Certain fields such as labels and credits are repeated.
- Standard SQL SELECT invoice . month , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost 1000000 AS int64 )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount 1000000 as int64 )) FROM UNNEST ( credits ) c ), 0 ))) / 1000000 AS total exact FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX GROUP BY 1 ORDER BY 1 ASC ; For example, the result of the preceding query might be: Row month total total exact 1 201901 $1005.004832999999984 $1005.00 2 201902 $992.3101739999999717 $992.31 3 201903 $1220.761089999999642 $1220.76 Example 2: Return details by cost type, per invoice month This query shows the totals for each cost type for each month.
- Standard SQL SELECT labels . value as environment , SUM ( cost ) as cost FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX LEFT JOIN UNNEST ( labels ) as labels ON labels . key = "environment" GROUP BY environment ; Legacy SQL SELECT labels . value as environment , SUM ( cost ) as cost FROM [ project : dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX ] WHERE labels . key = "environment" OR labels . key IS NULL GROUP BY environment ; Row environment cost 1 prod $15 2 dev $5 3 null $4 TOTAL $24 Note: The total cost should add up to the same amount as a group by label map query.
- Standard SQL SELECT labels . key as key , labels . value as value , SUM ( cost ) as cost FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX LEFT JOIN UNNEST ( labels ) as labels GROUP BY key , value ; Legacy SQL SELECT labels . key as key , labels . value as value , SUM ( cost ) FROM [ project : dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX ] GROUP BY key , value ; Row key value cost 1 null null $4 2 app chocolate-masher $9 3 app grapefruit-squeezer $11 4 environment dev $5 5 environment prod $15 TOTAL $44 Note that the total sum is greater than your bill.

