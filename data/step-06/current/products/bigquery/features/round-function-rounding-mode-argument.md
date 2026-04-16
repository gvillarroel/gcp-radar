---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.653Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ROUND function rounding mode argument"
feature_slug: "round-function-rounding-mode-argument"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "round"
  - "rounding"
  - "mode"
  - "argument"
  - "accepts"
  - "optional"
  - "bigquery"
---

# ROUND function rounding mode argument

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The ROUND function accepts a rounding mode as an optional argument in BigQuery.

## Extended Definition

The ROUND function accepts a rounding mode as an optional argument in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 3 columns: x: A parameterized string with a maximum length of 10 y: A STRUCT containing a (an array of parameterized bytes with a maximum length of 5), b (a parameterized NUMERIC with a maximum precision of 15, maximum scale of 2, and rounding mode set to 'ROUND HALF EVEN'), and c (a float) z: A parameterized BIGNUMERIC with a maximum precision of 35 and maximum scale of 0 Creating a partitioned table The following example creates a partitioned table named newtable in mydataset using a DATE column: CREATE TABLE mydataset . newtable ( transaction id INT64 , transaction date DATE ) PARTITION BY transaction date OPTIONS ( partition expiration days = 3 , description = "a table partitioned by transaction date" ) If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details description STRING Example: description="a unique id" This property is equivalent to the schema.fields[].description table resource property. rounding mode STRING Example: rounding mode = "ROUND HALF EVEN" This specifies the rounding mode that's used for values written to a NUMERIC or BIGNUMERIC type column or STRUCT field.

### JSON functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- Source ID: `site-docs-reference-required-8`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- This argument accepts one of the two case-sensitive values: exact : The function fails if the result can't be represented as a FLOAT64 without loss of precision. round (default): The numeric value stored in JSON will be rounded to FLOAT64 .
- If false , returns 'false' . string Returns the JSON string as a STRING value. number Returns the JSON number as a STRING value. other type or null NULL Return type STRING Examples Examples with inputs that are JSON strings: SELECT LAX STRING ( JSON '"purple"' ) AS result ; / --------+ result +--------+ purple +-------- / SELECT LAX STRING ( JSON '"10"' ) AS result ; / --------+ result +--------+ 10 +-------- / Examples with inputs that are JSON booleans: SELECT LAX STRING ( JSON 'true' ) AS result ; / --------+ result +--------+ true +-------- / SELECT LAX STRING ( JSON 'false' ) AS result ; / --------+ result +--------+ false +-------- / Examples with inputs that are JSON numbers: SELECT LAX STRING ( JSON '10.0' ) AS result ; / --------+ result +--------+ 10 +-------- / SELECT LAX STRING ( JSON '10' ) AS result ; / --------+ result +--------+ 10 +-------- / SELECT LAX STRING ( JSON '1e100' ) AS result ; / --------+ result +--------+ 1e+100 +-------- / PARSE JSON PARSE JSON ( json string expr [ , wide number mode = > { 'exact' 'round' } ] ) Description Converts a JSON-formatted STRING value to a JSON value .
- Return type FLOAT64 Examples SELECT FLOAT64 ( JSON '9.8' ) AS velocity ; / ----------+ velocity +----------+ 9.8 +---------- / SELECT FLOAT64 ( JSON QUERY ( JSON '{"vo2 max": 39.1, "age": 18}' , "$.vo2 max" )) AS vo2 max ; / ---------+ vo2 max +---------+ 39.1 +--------- / SELECT FLOAT64 ( JSON '18446744073709551615' , wide number mode = > 'round' ) as result ; / ------------------------+ result +------------------------+ 1.8446744073709552e+19 +------------------------ / SELECT FLOAT64 ( JSON '18446744073709551615' ) as result ; / ------------------------+ result +------------------------+ 1.8446744073709552e+19 +------------------------ / The following examples show how invalid requests are handled: -- An error is thrown if JSON isn't of type FLOAT64.
- SELECT PARSE JSON ( '{"id": 922337203685477580701}' , wide number mode = > 'round' ) AS json data ; / ------------------------------+ json data +------------------------------+ {"id":9.223372036854776e+20} +------------------------------ / You can also use valid JSON-formatted strings that don't represent name/value pairs.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- If you create a Spanner connection and want to use Data Boost , include the "useParallelism":true and "useDataBoost":true pairs. --connection credential= CONNECTION CREDENTIAL The credentials of the connection in JSON format. username and password must be specified. --project id= PROJECT ID Specifies the ID of the project that the connection belongs to. --location= LOCATION Specifies the location that the connection will be stored. --display name= DISPLAY NAME Specifies an optional friendly name for the connection. --description= DESCRIPTION Specifies an optional description of the connection. --iam role id= ROLE ID For BigQuery Omni on AWS, specifies an IAM role that allows access to the resource.
- Synopsis bq load [ FLAGS ] DESTINATION TABLE SOURCE DATA [ SCHEMA ] Example bq load myDataset.newTable gs://mybucket/info.csv ./info schema.json Flags and arguments The bq load command uses the following flags and arguments: --allow jagged rows={true false} To allow missing trailing optional columns in CSV data, set to true . --preserve ascii control characters={true false} To allow embedded ASCII control characters in CSV data, set to true . --allow quoted newlines={true false} To allow quoted newlines in CSV data, set to true . --autodetect={true false} To enable schema auto-detection for CSV and JSON data, set to true .
- For example, this command specifies false for the boolean flag --use legacy sql by placing no at the front of the flag: bq query --nouse legacy sql \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Alternatively, to specify false as the flag's argument, you can enter the following: bq query --use legacy sql = false \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Run commands in a script You can run the bq command-line tool in a script, as you would run a Google Cloud CLI command .
- If the configuration setting is not specified, the default value is true ; the query uses legacy SQL. --vertex ai model id= VERTEX AI MODEL ID When specified, updates the model ID for a BigQuery ML model that is registered in the Vertex AI Model Registry. --view= QUERY When specified, updates the SQL query for a view. --view udf resource= FILE Updates the Cloud Storage URI or the path to a local code file that is loaded and evaluated immediately as a user-defined function resource in a view's SQL query.

