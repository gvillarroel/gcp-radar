---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.956Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JSON and Nested/Repeated Field Import"
feature_slug: "json-and-nested-repeated-field-import"
latest_feature_date: "2012-10-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/legacy-nested-repeated"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "nested and repeated fields"
  - "RECORD/STRUCT schema"
  - "nested/repeated"
  - "nested fields"
  - "RECORD type"
  - "REPEATED mode"
  - "STRUCT field"
  - "Load jobs JSON"
---

# JSON and Nested/Repeated Field Import

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Added API support for importing JSON files with nested and repeated field structures.

## Extended Definition

Added API support for importing JSON files with nested and repeated field structures.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/legacy-nested-repeated](https://docs.cloud.google.com/bigquery/docs/legacy-nested-repeated)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.
- Note: Constraints cannot be specified on ARRAY or STRUCT elements. column := column name column schema column schema := { simple type STRUCT<field list> ARRAY<array element schema> } [ PRIMARY KEY NOT ENFORCED REFERENCES table name ( column name ) NOT ENFORCED ] [ DEFAULT default expression GENERATED ALWAYS AS ( generation expression ) STORED OPTIONS ( generation option list ) ] [ NOT NULL ] [ OPTIONS ( column option list ) ] simple type := { data type STRING COLLATE collate specification } field list := field name column schema [ , ... ] array element schema := { simple type STRUCT<field list> } [ NOT NULL ] column name is the name of the column.
- A column name: Must contain only letters (a-z, A-Z), numbers (0-9), or underscores ( ) Must start with a letter or underscore Can be up to 300 characters column schema : Similar to a data type , but supports an optional NOT NULL constraint for types other than ARRAY . column schema also supports options on top-level columns and STRUCT fields. column schema can be used only in the column definition list of CREATE TABLE statements.

### "Querying nested and repeated fields in legacy SQL \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/legacy-nested-repeated](https://docs.cloud.google.com/bigquery/docs/legacy-nested-repeated)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: It explicitly notes that BigQuery supports loading and exporting nested and repeated data in JSON (and Avro), which is relevant context for nested/repeated field import behavior.

Evidence snippets:
- For example, if you try to run a legacy SQL query like the following: SELECT fullName, age FROM [dataset.tableId] WHERE (citiesLived.yearsLived > 1995 ) AND (children.age > 3) BigQuery returns an error similar to: Cannot query the cross product of repeated fields children.age and citiesLived.yearsLived To query across more than one repeated field, you need to flatten one of the fields: SELECT fullName, age, gender, citiesLived.place FROM (FLATTEN([dataset.tableId], children)) WHERE (citiesLived.yearsLived > 1995) AND (children.age > 3) GROUP BY fullName, age, gender, citiesLived.place Which returns: +------------+-----+--------+-------------------+ fullName age gender citiesLived place +------------+-----+--------+-------------------+ John Doe 22 Male Stockholm Mike Jones 35 Male Los Angeles Mike Jones 35 Male Washington DC Mike Jones 35 Male Portland Mike Jones 35 Male Austin +------------+-----+--------+-------------------+ WITHIN Clause The WITHIN keyword specifically works with aggregate functions to aggregate across children and repeated fields within records and nested fields.
- For example, let's take a look at a sample schema for person data: Last modified Schema Total Rows Total Bytes Expiration ----------------- ----------------------------------- ------------ ------------- ------------ 27 Sep 10:01:06 - kind: string 4 794 - fullName: string (required) - age: integer - gender: string +- phoneNumber: record - areaCode: integer - number: integer +- children: record (repeated) - name: string - gender: string - age: integer +- citiesLived: record (repeated) - place: string +- yearsLived: integer (repeated) Notice that there are several repeated and nested fields.
- Using scoped aggregation over nested and repeated fields is one of BigQuery's most powerful features, which can often eliminate expensive joins in queries.
- Although BigQuery can automatically flatten nested fields, you may need to explicitly call FLATTEN when dealing with more than one repeated field.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- The following query executes because the struct fields being grouped have the same group types: WITH TeamStats AS ( SELECT ARRAY<STRUCT<last name STRING , first name STRING , age INT64 >> [ ( 'Adams' , 'Noam' , 20 ), ( 'Buchanan' , 'Jie' , 19 ) ] AS Team , 3 AS PointsScored UNION ALL SELECT [ ( 'Coolidge' , 'Kiran' , 21 ), ( 'Yang' , 'Jason' , 22 ) ] , 4 UNION ALL SELECT [ ( 'Adams' , 'Noam' , 20 ), ( 'Buchanan' , 'Jie' , 19 ) ] , 10 UNION ALL SELECT [ ( 'Coolidge' , 'Kiran' , 21 ), ( 'Yang' , 'Jason' , 22 ) ] , 7 ) SELECT SUM ( PointsScored ) AS total points , Team FROM TeamStats GROUP BY Team ; / --------------+--------------------------+ total points teams +--------------+--------------------------+ 13 [{ last name: "Adams", first name: "Noam", age: 20 },{ last name: "Buchanan", first name: "Jie", age: 19 }] +-----------------------------------------+ 11 [{ last name: "Coolidge", first name: "Kiran", age: 21 },{ last name: "Yang", first name: "Jason", age: 22 }] +--------------+-------------------------- / To learn more about the data types that are supported for values in the GROUP BY clause, see Groupable data types .
- Some examples of valid field path values include: SELECT FROM T1 t1 , t1 . array column ; SELECT FROM T1 t1 , t1 . struct column . array field ; SELECT ( SELECT ARRAY AGG ( c ) FROM t1 . array column c ) FROM T1 t1 ; SELECT a . struct field1 FROM T1 t1 , t1 . array of structs a ; SELECT ( SELECT STRING AGG ( a . struct field1 ) FROM t1 . array of structs a ) FROM T1 t1 ; Field paths in the FROM clause must end in an array field.
- SELECT AS STRUCT SELECT AS STRUCT expr [[ AS ] struct field name1 ] [ ,... ] This produces a value table with a STRUCT row type, where the STRUCT field names and types match the column names and types produced in the SELECT list.
- If no rule is available for any STRUCT field, the entire pivot column is unnamed.

