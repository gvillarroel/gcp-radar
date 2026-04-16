---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.744Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BIGNUMERIC data type"
feature_slug: "bignumeric-data-type"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/reference/storage"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "bignumeric"
  - "type"
  - "provides"
  - "high"
  - "precision"
  - "numeric"
  - "computation"
  - "bigquery"
---

# BIGNUMERIC data type

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BIGNUMERIC data type provides high-precision numeric computation in BigQuery; The BIGNUMERIC data type provides high-precision numeric computation in BigQuery.

## Extended Definition

The BIGNUMERIC data type provides high-precision numeric computation in BigQuery; The BIGNUMERIC data type provides high-precision numeric computation in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- [https://docs.cloud.google.com/bigquery/docs/reference/storage](https://docs.cloud.google.com/bigquery/docs/reference/storage)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Maximum scale range: 0 ≤ S ≤ 9 Maximum precision range: max(1, S ) ≤ P ≤ S + 29 BIGNUMERIC(P[, S]) BIGDECIMAL(P[, S]) A BIGNUMERIC or BIGDECIMAL type with a maximum precision of P and maximum scale of S , where P and S are INT64 types.
- SQL type name: BIGNUMERIC SQL aliases: BIGDECIMAL An approximate double precision numeric value.
- Name Precision, Scale, and Range NUMERIC DECIMAL Precision: 38 Scale: 9 Minimum value greater than 0 that can be handled: 1e-9 Min: -9.9999999999999999999999999999999999999E+28 Max: 9.9999999999999999999999999999999999999E+28 BIGNUMERIC BIGDECIMAL Precision: approximately 76.8 digits (the 77th digit is partial) Scale: 38 Minimum value greater than 0 that can be handled: 1e-38 Min: -5.7896044618658097711785492504343953926634992332820282019728792003956564819968E+38 Max: 5.7896044618658097711785492504343953926634992332820282019728792003956564819967E+38 DECIMAL is an alias for NUMERIC .
- Numeric types Numeric types include the following types: INT64 with alias INT , SMALLINT , INTEGER , BIGINT , TINYINT , BYTEINT NUMERIC with alias DECIMAL BIGNUMERIC with alias BIGDECIMAL FLOAT64 Integer type Integers are numeric values that don't have fractional components.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 3 columns: x: A parameterized string with a maximum length of 10 y: A STRUCT containing a (an array of parameterized bytes with a maximum length of 5), b (a parameterized NUMERIC with a maximum precision of 15, maximum scale of 2, and rounding mode set to 'ROUND HALF EVEN'), and c (a float) z: A parameterized BIGNUMERIC with a maximum precision of 35 and maximum scale of 0 Creating a partitioned table The following example creates a partitioned table named newtable in mydataset using a DATE column: CREATE TABLE mydataset . newtable ( transaction id INT64 , transaction date DATE ) PARTITION BY transaction date OPTIONS ( partition expiration days = 3 , description = "a table partitioned by transaction date" ) If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Examples Changing the data type for a column The following example changes the data type of column c1 from an INT64 to NUMERIC : CREATE TABLE dataset . my table ( c1 INT64 ); ALTER TABLE dataset . my table ALTER COLUMN c1 SET DATA TYPE NUMERIC ; Changing the data type for a field The following example changes the data type of one of the fields in the s1 column: CREATE TABLE dataset . my table ( s1 STRUCT < a INT64 , b STRING > ); ALTER TABLE dataset . my table ALTER COLUMN s1 SET DATA TYPE STRUCT < a NUMERIC , b STRING > ; Changing precision The following example changes the precision of a parameterized data type column: CREATE TABLE dataset . my table ( pt NUMERIC ( 7 , 2 )); ALTER TABLE dataset . my table ALTER COLUMN pt SET DATA TYPE NUMERIC ( 8 , 2 ); ALTER COLUMN SET DEFAULT statement Sets the default value of a column.
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.

### "Use the BigQuery Storage Read API to read table data \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/storage](https://docs.cloud.google.com/bigquery/docs/reference/storage)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GoogleSQL type Avro type Avro schema annotations Notes BOOLEAN boolean INT64 long FLOAT64 double BYTES bytes STRING string DATE int logicalType: date DATETIME string logicalType: datetime TIMESTAMP long logicalType: timestamp-micros TIME long logicalType: time-micros NUMERIC bytes logicalType: decimal (precision = 38, scale = 9) NUMERIC(P[, S]) bytes logicalType: decimal (precision = P, scale = S) BIGNUMERIC bytes logicalType: decimal (precision = 77, scale = 38) BIGNUMERIC(P[, S]) bytes logicalType: decimal (precision = P, scale = S) GEOGRAPHY string sqlType: GEOGRAPHY ARRAY array STRUCT record JSON string sqlType: JSON RANGE<T> record sqlType: RANGE Contains the following fields: start , with union type ["null", AVRO TYPE(T)] end , with union type ["null", AVRO TYPE(T)] AVRO TYPE(T) is the Avro type representation for the range element type T .
- GoogleSQL type Arrow logical type Notes BOOLEAN Boolean INT64 Int64 FLOAT64 Double BYTES Binary STRING Utf8 DATE Date 32-bit days since epoch DATETIME Timestamp Microsecond precision, no timezone TIMESTAMP Timestamp Microsecond precision, UTC timezone TIME Time Microsecond precision NUMERIC Decimal Precision = 38, scale = 9 NUMERIC(P[, S]) Decimal Precision = P, scale = S BIGNUMERIC Decimal256 Precision = 76, scale = 38 BIGNUMERIC(P[, S]) Decimal256 Precision = P, scale = S GEOGRAPHY Utf8 ARRAY List STRUCT Struct JSON Utf8 RANGE<T> Struct Contains the following fields: start , with ARROW TYPE(T) end , with ARROW TYPE(T) ARROW TYPE(T) is the Arrow type representation of the range element type T .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and update read sessions: bigquery.readsessions.create on the project bigquery.readsessions.getData on the table or higher bigquery.readsessions.update on the table or higher You might also be able to get these permissions with custom roles or other predefined roles .
- Schema conversion Avro schema details Due to type system differences between BigQuery and the Avro specification, Avro schemas may include additional annotations that identify how to map the Avro types to BigQuery representations.

