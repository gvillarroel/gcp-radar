---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.711Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ROUND_HALF_EVEN support for NUMERIC and BIGNUMERIC"
feature_slug: "round-half-even-support-for-numeric-and-bignumeric"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "BIGNUMERIC ROUND_HALF_EVEN"
  - "NUMERIC ROUND_HALF_EVEN"
  - "half-even rounding"
  - "ROUND_HALF_EVEN"
  - "optional rounding mode argument"
  - "banker's rounding"
  - "ROUND() rounding mode"
---

# ROUND_HALF_EVEN support for NUMERIC and BIGNUMERIC

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery adds the ROUND_HALF_EVEN rounding mode for parameterized NUMERIC and BIGNUMERIC columns, with ROUND() accepting an optional rounding-mode argument.

## Extended Definition

BigQuery’s SQL DDL supports configuring a rounding mode for `NUMERIC` and `BIGNUMERIC` columns (including `STRUCT` fields), and `"ROUND HALF EVEN"` is an explicit supported value. This can be set either per column with a `rounding mode` option or as a table-level `default rounding mode`, which controls the rounding behavior used when values are written to those columns. The provided excerpts do not provide evidence for a separate `ROUND()` function call accepting an optional rounding-mode argument.

## Evidence Summary

The DDL reference documents `ROUND HALF EVEN` as a valid rounding-mode string for `NUMERIC`/`BIGNUMERIC` columns and fields, including both column-level and table-level default configuration.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 3 columns: x: A parameterized string with a maximum length of 10 y: A STRUCT containing a (an array of parameterized bytes with a maximum length of 5), b (a parameterized NUMERIC with a maximum precision of 15, maximum scale of 2, and rounding mode set to 'ROUND HALF EVEN'), and c (a float) z: A parameterized BIGNUMERIC with a maximum precision of 35 and maximum scale of 0 Creating a partitioned table The following example creates a partitioned table named newtable in mydataset using a DATE column: CREATE TABLE mydataset . newtable ( transaction id INT64 , transaction date DATE ) PARTITION BY transaction date OPTIONS ( partition expiration days = 3 , description = "a table partitioned by transaction date" ) If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details description STRING Example: description="a unique id" This property is equivalent to the schema.fields[].description table resource property. rounding mode STRING Example: rounding mode = "ROUND HALF EVEN" This specifies the rounding mode that's used for values written to a NUMERIC or BIGNUMERIC type column or STRUCT field.

