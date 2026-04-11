---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.492Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Gemini partitioning and clustering recommendations"
feature_slug: "bigquery-gemini-partitioning-and-clustering-recommendations"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://cloud.google.com/bigquery/docs/partitioned-tables"
keywords:
  - "partitioning advice"
  - "clustering advice"
  - "Gemini advisor"
  - "schema optimization recommendations"
  - "schema tuning recommendations"
  - "partitioning recommendations"
  - "clustering recommendations"
  - "table partitioning"
---

# BigQuery Gemini partitioning and clustering recommendations

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Gemini now provides recommendations for table partitioning and clustering.

## Extended Definition

Available evidence only shows that BigQuery supports combining table partitioning and clustering—partitioning first, then clustering within partitions—to achieve finer-grained sorting and better query optimization. This does not confirm that BigQuery Gemini itself is providing partitioning or clustering recommendations in the cited material, so that capability remains unverified from the provided excerpt.

## Evidence Summary

The cited BigQuery partitioned tables documentation explains partitioning, clustering, and their combined optimization benefits, but provides no explicit evidence of Gemini-generated recommendation functionality.

## Source Links

- [https://cloud.google.com/bigquery/docs/partitioned-tables](https://cloud.google.com/bigquery/docs/partitioned-tables)

## Supporting Pages

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- In a combined approach using both table partitioning and clustering, you first segment table data into partitions, then you cluster the data within each partition by the clustering columns.
- Combining clustered and partitioned tables You can combine table partitioning with table clustering to achieve finely grained sorting for further query optimization.
- You can also combine clustering and table partitioning to achieve finer-grained sorting.

