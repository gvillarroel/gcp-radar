---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.648Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery time travel window configuration"
feature_slug: "bigquery-time-travel-window-configuration"
latest_feature_date: "2023-07-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/access-historical-data"
keywords:
  - "time travel retention period"
  - "time travel retention"
  - "configure time travel window"
  - "time travel duration"
  - "time travel settings"
  - "ALTER TABLE time_travel"
  - "time travel window"
  - "2 to 7 days"
---

# BigQuery time travel window configuration

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now allows configuration of the time travel window duration between two and seven days.

## Extended Definition

BigQuery allows configuring the time travel window, which is the dataset-level retention period for deleted or changed table data, using the `max time travel hours` setting in table/dataset DDL options. The default time travel window is seven days, and the retention can be reduced from that default based on cost or retention needs. Historical recovery operations (for example, point-in-time queries with `FOR SYSTEM TIME AS OF` or restoring deleted tables) must occur within the configured window, and snapshots are recommended if recovery may be needed later than the window allows.

## Evidence Summary

These pages document that BigQuery time travel is configurable at the dataset level via `max time travel hours`, defaults to seven days, and defines the valid period for historical query/restore operations.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)

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
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Tables: mytable and MyTable can coexist in the same dataset if case-sensitivity for the dataset is turned on. is primary BOOLEAN Declares if the dataset is the primary replica. labels <ARRAY<STRUCT<STRING, STRING>>> An array of labels for the dataset, expressed as key-value pairs. max time travel hours SMALLINT Specifies the duration in hours of the time travel window for the dataset.
- If you specify this option and also explicitly set the location for the query job, the two values must match; otherwise the query fails. max time travel hours SMALLINT Specifies the duration in hours of the time travel window for the dataset.
- If the dataset already exists or has passed the time travel window, then the statement returns an error.
- Undeletes a dataset within your time travel window.

### Access historical data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)
- Source ID: `site-docs-root-2`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: The page references the existence and limits of the time travel window but does not describe configuring its duration.

Evidence snippets:
- Construct the restore-from table ID using a snapshot decorator. snapshot table id = " {} @ {} " . format ( table id , snapshot epoch ) Construct and run a copy job. job = client . copy table ( snapshot table id , recovered table id , Must match the source and destination tables location. location = "US" , ) # Make an API request. job . result () # Wait for the job to complete. print ( "Copied data from deleted table {} to {} " . format ( table id , recovered table id ) ) If you anticipate that you might want to restore a table later than what is allowed by the time travel window, then create a table snapshot of the table.
- The following example copies the version of a table from one hour ago: bq cp mydataset.mytable@-3600000 mydataset.newtable Note: If you attempt to recover data prior to the time travel window or from a time before the table was created, you'll receive an Invalid time travel timestamp error.
- If the timestamp specifies a time from prior to the time travel window or from before the table was created, then the query fails and returns an error like the following: Invalid snapshot time 1601168925462 for table myproject:mydataset.table1@1601168925462.
- Query data at a point in time You can query a table's historical data from any point in time within the time travel window by using a FOR SYSTEM TIME AS OF clause.

