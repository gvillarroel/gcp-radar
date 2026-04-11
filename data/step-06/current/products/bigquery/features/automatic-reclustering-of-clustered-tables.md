---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.847Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Automatic reclustering of clustered tables"
feature_slug: "automatic-reclustering-of-clustered-tables"
latest_feature_date: "2019-08-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
keywords:
  - "background reclustering"
  - "reclustering clustered table"
  - "automatic table recluster"
  - "auto reclustering"
  - "automatic reclustering"
  - "reclustering"
  - "clustered tables"
---

# Automatic reclustering of clustered tables

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now automatically reclusters all clustered tables.

## Extended Definition

BigQuery now automatically reclusters all clustered tables.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- On-demand query size calculation To calculate the number of bytes processed by the various types of queries, see the following sections: DML statements DDL statements Clustered tables Note: The selected dataset storage billing model does not affect the on-demand query cost calculation.
- For clustered tables, the estimation of the number of bytes billed for a query is an upper bound, and can be higher than the actual number of bytes billed after running the query.
- Avoid using LIMIT in non-clustered tables Best practice: For non-clustered tables, don't use a LIMIT clause as a method of cost control.
- For non-clustered tables, applying a LIMIT clause to a query doesn't affect the amount of data that is read.

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- For more information on the bq load command, see: Command-line reference For more information on partitioned tables, see: Creating partitioned tables For more information on clustered tables, see: Creating and using clustered tables For more information on table encryption, see: Protecting data with Cloud KMS keys To load CSV data into BigQuery, enter the following command: bq --location = location load \ --source format = format \ dataset.table \ path to source \ schema Where: location is your location.
- The Google Cloud console does not support appending to or overwriting partitioned or clustered tables in a load job.
- For more information, see Creating partitioned tables and Creating and using clustered tables .
- For more information, see Creating partitioned tables and Creating and using clustered tables .

