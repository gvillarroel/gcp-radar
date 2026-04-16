---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.590Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Configurable time travel window"
feature_slug: "configurable-time-travel-window"
latest_feature_date: "2023-07-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries"
keywords:
  - "configurable"
  - "time"
  - "travel"
  - "window"
  - "can"
  - "configured"
  - "two"
  - "seven"
---

# Configurable time travel window

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The time travel window can be configured from two to seven days; This feature lets you set the time travel retention window from two to seven days.

## Extended Definition

The time travel window can be configured from two to seven days; This feature lets you set the time travel retention window from two to seven days.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Tables: mytable and MyTable can coexist in the same dataset if case-sensitivity for the dataset is turned on. is primary BOOLEAN Declares if the dataset is the primary replica. labels <ARRAY<STRUCT<STRING, STRING>>> An array of labels for the dataset, expressed as key-value pairs. max time travel hours SMALLINT Specifies the duration in hours of the time travel window for the dataset.
- If you specify this option and also explicitly set the location for the query job, the two values must match; otherwise the query fails. max time travel hours SMALLINT Specifies the duration in hours of the time travel window for the dataset.
- If you have configured dataset-level table expiration , the renamed table might be immediately deleted if its original creation timestamp falls outside of the expiration window.
- If the dataset already exists or has passed the time travel window, then the statement returns an error.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Unexpected storage charges Scenarios that could lead to storage charge increases: Increases in the amount of data that is stored in your tables—use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view to monitor the change in bytes for your tables Changing dataset billing models Increasing the time-travel window for physical billing model datasets Modification of tables that have data in long-term storage , causing them to become active storage Deletion of table(s) or dataset(s) resulted in higher BigQuery storage costs The BigQuery time travel feature retains deleted data for duration of the configured time-travel window and an additional 7 days for fail-safe recovery.
- Reducing the time travel window from the default value of seven days reduces the retention period for data deleted from or changed in a table.
- When you overwrite a table, for example by using the --replace parameter in batch load jobs or using the TRUNCATE TABLE SQL statement, the replaced data is kept for the duration of the time travel and failsafe windows.
- The recommended approach to minimize costs caused by data deletion for physical storage billing model datasets is to reduce the time-travel window to 2 days.

### Create continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)
- Source ID: `site-docs-reference-5`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- CURRENT TIMESTAMP () - INTERVAL 10 MINUTE ) WHERE ride status = 'enroute' ); Specify a starting point earlier than the time travel window To include data that is outside of the seven day time travel window, use a standard query to backfill data up to a particular point in time, and then start a continuous query from that point.
- When specifying the start timestamp argument, the value must fall within the table's time travel window, which defaults to seven days for standard tables.
- FOR SYSTEM TIME AS OF '2025-01-01 00:00:00 UTC' WHERE ride status = 'dropoff' ; Run a continuous query from the point in time at which the query stopped: INSERT INTO myproject.real time taxi streaming.transformed taxirides SELECT timestamp , meter reading , ride status , passenger count , ST Distance ( ST GeogPoint ( pickup longitude , pickup latitude ), ST GeogPoint ( dropoff longitude , dropoff latitude )) AS euclidean trip distance , SAFE DIVIDE ( meter reading , passenger count ) AS cost per passenger FROM APPENDS ( TABLE myproject.real time taxi streaming.taxirides , -- Configure the APPENDS TVF start timestamp to start processing -- data right where the batch query left off + 1 microsecond. -- This timestamp must be within the time travel window.
- Run a standard query to backfill data up to a particular point in time: INSERT INTO myproject.real time taxi streaming.transformed taxirides SELECT timestamp , meter reading , ride status , passenger count , ST Distance ( ST GeogPoint ( pickup longitude , pickup latitude ), ST GeogPoint ( dropoff longitude , dropoff latitude )) AS euclidean trip distance , SAFE DIVIDE ( meter reading , passenger count ) AS cost per passenger FROM myproject.real time taxi streaming.taxirides -- Include all data inserted into the table up to this handoff point. -- This handoff timestamp must be within the time travel window.

