---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.806Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery INFORMATION_SCHEMA TABLE_OPTIONS view"
feature_slug: "bigquery-information-schema-table-options-view"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "INFORMATION_SCHEMA.TABLE_OPTIONS view"
  - "table_option_name field"
  - "INFORMATION_SCHEMA.TABLE_OPTIONS"
  - "table options metadata"
  - "TABLE_OPTIONS view"
  - "`TABLE_OPTIONS`"
  - "TABLE_OPTIONS"
---

# BigQuery INFORMATION_SCHEMA TABLE_OPTIONS view

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The BigQuery INFORMATION_SCHEMA TABLE_OPTIONS view became generally available.

## Extended Definition

The BigQuery INFORMATION_SCHEMA TABLE_OPTIONS view became generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- By default, the table options metadata from the source table are also inherited, but you can override table options by using the OPTIONS clause.
- The table option list specifies the following: Expiration time: 365 days after the time that the table is created Friendly name: my table Description: A table that expires in 1 year Label: org unit = development Create a clone of a table: ignore if the destination table already exists The following example creates the table clone myproject.mydataset.mytableclone based on the table myproject.mydataset.mytable : CREATE TABLE IF NOT EXISTS myproject.mydataset.mytableclone CLONE myproject.mydataset.mytable OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 365 DAY ), friendly name = "my table" , description = "A table that expires in 1 year" , labels =[ ( "org unit" , "development" ) ] ) The table option list specifies the following: Expiration time: 365 days after the time the table is created Friendly name: my table Description: A table that expires in 1 year Label: org unit = development If the table name exists in the dataset, then no action is taken, and no error is returned.
- The table snapshot is created in the dataset mydataset and is named mytablesnapshot : CREATE SNAPSHOT TABLE myproject . mydataset . mytablesnapshot CLONE myproject.mydataset.mytable OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "my table snapshot" , description = "A table snapshot that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] ) If the table snapshot name already exists in the dataset, then the following error is returned: Already Exists: myproject.mydataset.mytablesnapshot The table snapshot option list specifies the following: Expiration time: 48 hours after the time the table snapshot is created Friendly name: my table snapshot Description: A table snapshot that expires in 2 days Label: org unit = development Create a table snapshot: ignore if it already exists The following example creates a table snapshot of the table myproject.mydataset.mytable .
- The table snapshot is created in the dataset mydataset and is named mytablesnapshot : CREATE SNAPSHOT TABLE IF NOT EXISTS myproject . mydataset . mytablesnapshot CLONE myproject.mydataset.mytable OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "my table snapshot" , description = "A table snapshot that expires in 2 days" labels =[ ( "org unit" , "development" ) ] ) The table snapshot option list specifies the following: Expiration time: 48 hours after the time the table snapshot is created Friendly name: my table snapshot Description: A table snapshot that expires in 2 days Label: org unit = development If the table snapshot name already exists in the dataset, then no action is taken, and no error is returned.

