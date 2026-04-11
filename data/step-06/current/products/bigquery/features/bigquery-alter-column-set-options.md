---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.779Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ALTER COLUMN SET OPTIONS"
feature_slug: "bigquery-alter-column-set-options"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
  - "https://docs.cloud.google.com/bigquery/docs/adding-labels"
keywords:
  - "ALTER COLUMN SET OPTIONS"
  - "ALTER TABLE ALTER COLUMN"
  - "column option update"
  - "ALTER COLUMN statement"
  - "column OPTIONS syntax"
  - "SET OPTIONS clause"
  - "ALTER COLUMN"
  - "SET OPTIONS"
---

# BigQuery ALTER COLUMN SET OPTIONS

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery adds support for the ALTER COLUMN SET OPTIONS DDL statement.

## Extended Definition

BigQuery adds support for the ALTER COLUMN SET OPTIONS DDL statement.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- ALTER TABLE mydataset . mytable ADD COLUMN name STRING +--------------------------------+ mydataset.mytable number INT64 word STRING COLLATE 'und:ci' name STRING COLLATE +--------------------------------+ ALTER COLUMN SET OPTIONS statement Sets options, such as the column description, on a column in a table or view in BigQuery.
- Example: data policies = ["{'name':'myproject.region-us.data policy name1'}", "{'name':'myproject.region-us.data policy name2'}"] The ALTER TABLE ALTER COLUMN statement supports the = and += operators to add data policies to a specific column.
- Example: data policies = ["{'name':'myproject.region-us.data policy name1'}", "{'name':'myproject.region-us.data policy name2'}"] The ALTER TABLE ALTER COLUMN statement supports the = and += operators to add data policies to a specific column.
- Examples The following example sets a new description on a table column called price : ALTER TABLE mydataset . mytable ALTER COLUMN price SET OPTIONS ( description = 'Price per unit' ); The following example sets a new description on a view column called total : ALTER VIEW mydataset . myview ALTER COLUMN total SET OPTIONS ( description = 'Total sales of the product' ); ALTER COLUMN DROP NOT NULL statement Removes a NOT NULL constraint from a column in a table in BigQuery.

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- You can change the differential privacy analysis rule for a view in a data clean room or with the ALTER VIEW statement: ALTER VIEW VIEW NAME SET OPTIONS ( privacy policy = ' '' { "differential privacy policy": { "privacy unit column": " PRIVACY UNIT COLUMN ", "max epsilon per query": MAX EPSILON PER QUERY , "epsilon budget": EPSILON BUDGET , "delta per query": DELTA PER QUERY , "delta budget": DELTA BUDGET , "max groups contributed": MAX GROUPS CONTRIBUTED } } '' ' ) For more information about the values you can set for the privacy policies in the preceding syntax, see Define a differential privacy analysis rule for a view .
- Update an aggregation threshold analysis rule for a view You can change the aggregation threshold analysis rule for a view in a data clean room or with the ALTER VIEW statement: ALTER VIEW VIEW NAME SET OPTIONS ( privacy policy = ' '' { "aggregation threshold policy": { "threshold" : THRESHOLD , "privacy unit column": " PRIVACY UNIT COLUMN " } } '' ' ) For more information about the values you can set for the privacy policies in the preceding syntax, see Define an aggregation threshold analysis rule for a view .
- ExamTable ); Update a list overlap analysis rule for a view You can change the list overlap analysis rule for a view with a data clean room or with the ALTER VIEW statement: ALTER VIEW VIEW NAME SET OPTIONS ( privacy policy = ' '' { "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) For more information about the values you can set for the privacy policy in the preceding syntax, see Define a list overlap analysis rule for a view .
- ExamView SET OPTIONS ( privacy policy = '{"differential privacy policy": {"privacy unit column": "last name", "max epsilon per query": 0.01, "epsilon budget": 1000.0, "delta per query": 0.05, "delta budget": 0.1, "max groups contributed": 2}}' ); -- NOTE: Delta and epsilon parameters are set very high due to the small -- dataset.

### Add labels to resources \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, enter the following statement: ALTER TABLE mydataset . mytable SET OPTIONS ( labels = [ ( 'department' , 'shipping' ), ( 'cost center' , 'logistics' ) ] ); Click play circle Run .
- Go to BigQuery In the query editor, enter the following statement: ALTER TABLE mydataset . mytable SET OPTIONS ( labels =[ ( "key1" , "" ), ( "key2" , "" ) ] ); Click play circle Run .
- Go to BigQuery In the query editor, enter the following statement: ALTER RESERVATION myreservation SET OPTIONS ( labels = [ ( 'sensitivity' , 'high' ) ] ); Click play circle Run .
- SQL Use the ALTER TABLE SET OPTIONS DDL statement to set the labels on an existing table, or the ALTER VIEW SET OPTIONS DDL statement to set the labels on an existing view.

