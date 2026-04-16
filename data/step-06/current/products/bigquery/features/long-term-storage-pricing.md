---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.918Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Long-term storage pricing"
feature_slug: "long-term-storage-pricing"
latest_feature_date: "2016-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/reference/storage"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "long"
  - "term"
  - "storage"
  - "pricing"
  - "provides"
  - "model"
  - "retained"
  - "bigquery"
---

# Long-term storage pricing

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Long-term storage pricing provides a pricing model for data retained in BigQuery over extended periods.

## Extended Definition

Long-term storage pricing provides a pricing model for data retained in BigQuery over extended periods.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/reference/storage](https://docs.cloud.google.com/bigquery/docs/reference/storage)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As a best practice, consider long-term storage pricing and the physical storage billing model before exporting data out of BigQuery .
- Unexpected storage charges Scenarios that could lead to storage charge increases: Increases in the amount of data that is stored in your tables—use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view to monitor the change in bytes for your tables Changing dataset billing models Increasing the time-travel window for physical billing model datasets Modification of tables that have data in long-term storage , causing them to become active storage Deletion of table(s) or dataset(s) resulted in higher BigQuery storage costs The BigQuery time travel feature retains deleted data for duration of the configured time-travel window and an additional 7 days for fail-safe recovery.
- After that, study the pricing for the corresponding SKUs in the SKU documentation page or the Pricing page in the Cloud Billing UI to understand which feature it is, for example, BigQuery Storage Read API, long-term storage, on-demand pricing, Standard edition.
- This causes the corresponding cost to rise, because active physical bytes are charged approximately 2 times more than long-term physical bytes according to the BigQuery storage pricing page .

### "Use the BigQuery Storage Read API to read table data \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/storage](https://docs.cloud.google.com/bigquery/docs/reference/storage)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the BigQuery Storage Read API to read table data The BigQuery Storage Read API provides fast access to BigQuery-managed storage by using an rpc-based protocol.
- The BigQuery Storage Read API provides a third option that represents an improvement over prior options.
- If you're working in an older version of the Storage Read API, then use the appropriate version of Arrow as follows: v1beta1: Arrow 0.14 and earlier v1: Arrow 0.15 and later Regardless of API version, to access API functions, we recommend that you use the BigQuery Storage API client libraries .
- To support dynamic work rebalancing, the Storage Read API provides an additional method to split a Stream into two child Stream instances whose contents are, together, equal to the contents of the parent Stream .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.
- Once you change a dataset's storage billing model, you must wait 14 days before you can change the storage billing model again. tags <ARRAY<STRUCT<STRING, STRING>>> An array of IAM tags for the dataset, expressed as key-value pairs.
- Once you change a dataset's storage billing model, you must wait 14 days before you can change the storage billing model again. tags <ARRAY<STRUCT<STRING, STRING>>> An array of IAM tags for the dataset, expressed as key-value pairs.
- 168 hours is the default if this option isn't specified. primary replica STRING The replica name to set as the primary replica . storage billing model STRING Alters the storage billing model for the dataset.

