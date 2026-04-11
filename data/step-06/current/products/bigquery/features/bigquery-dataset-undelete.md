---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.580Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery dataset undelete"
feature_slug: "bigquery-dataset-undelete"
latest_feature_date: "2024-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "recover deleted dataset"
  - "dataset restore operation"
  - "restore dataset"
  - "dataset restore"
  - "dataset undelete"
  - "undelete dataset"
  - "time travel window"
  - "dataset recovery"
---

# BigQuery dataset undelete

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now allows users to undelete a dataset within the time travel window and restore it to its prior state.

## Extended Definition

BigQuery provides a dataset undelete capability that lets users restore a deleted dataset while it is still inside its dataset time-travel window. In BigQuery DDL, the dataset-level `max time travel hours` setting controls this window, and Google’s documentation describes a default time-travel retention context of seven days.

## Evidence Summary

The DDL reference explicitly states that a dataset can be undeleted within its time-travel window, and the cost/operations guidance confirms the window is set at dataset level with a documented seven-day default baseline.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Reducing the time travel window from the default value of seven days reduces the retention period for data deleted from or changed in a table.
- Reduce the time travel window Best practice: Based on your requirements, you can lower the time travel window.
- You can also set the default time travel window for new datasets using configuration settings .
- The time travel window is set at the dataset level.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Tables: mytable and MyTable can coexist in the same dataset if case-sensitivity for the dataset is turned on. is primary BOOLEAN Declares if the dataset is the primary replica. labels <ARRAY<STRUCT<STRING, STRING>>> An array of labels for the dataset, expressed as key-value pairs. max time travel hours SMALLINT Specifies the duration in hours of the time travel window for the dataset.
- If you specify this option and also explicitly set the location for the query job, the two values must match; otherwise the query fails. max time travel hours SMALLINT Specifies the duration in hours of the time travel window for the dataset.
- If the dataset already exists or has passed the time travel window, then the statement returns an error.
- Undeletes a dataset within your time travel window.

