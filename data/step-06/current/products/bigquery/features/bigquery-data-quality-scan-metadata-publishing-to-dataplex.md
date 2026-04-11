---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.413Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery data quality scan metadata publishing to Dataplex"
feature_slug: "bigquery-data-quality-scan-metadata-publishing-to-dataplex"
latest_feature_date: "2025-06-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "Dataplex metadata publication"
  - "publish scan results"
  - "Dataplex metadata publishing"
  - "Universal Catalog metadata export"
  - "BigQuery Data Quality scans"
  - "BigQuery quality scan export"
  - "Dataplex Universal Catalog"
  - "data quality scan metadata"
---

# BigQuery data quality scan metadata publishing to Dataplex

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery data quality scan results can now be published as Dataplex Universal Catalog metadata rather than only in Google Cloud console.

## Extended Definition

The provided official excerpt does not provide evidence that BigQuery Data Quality scan results can be published as Dataplex (Universal Catalog) metadata. It only indicates that table/column DDL rename operations can remove Data Catalog tags and Dataplex Universal Catalog aspects attached to those objects.

## Evidence Summary

The cited DDL page documents metadata side effects of BigQuery rename operations, specifically that associated Data Catalog tags or Dataplex Universal Catalog aspects are deleted, but it does not describe Data Quality scan metadata publication.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Examples Renaming a table The following example renames the table mydataset.mytable to mydataset.mynewtable : ALTER TABLE mydataset . mytable RENAME TO mynewtable ALTER TABLE RENAME COLUMN statement Caution: Renaming a column deletes all Data Catalog tags (deprecated) and Dataplex Universal Catalog aspects that are attached to it.
- Caution: Renaming a table deletes all tags (deprecated) or aspects that may be attached to it or its columns in Data Catalog or Dataplex Universal Catalog , respectively.
- Renaming a table removes all Data Catalog tags (deprecated) and Dataplex Universal Catalog aspects on the table.

