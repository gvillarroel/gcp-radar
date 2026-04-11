---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.926Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Standard SQL parameterized queries"
feature_slug: "bigquery-standard-sql-parameterized-queries"
latest_feature_date: "2016-12-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/bigquery/latest/dbapi"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical"
keywords:
  - "@parameter placeholders"
  - "positional parameters"
  - "named parameters"
  - "query parameter syntax"
  - "parameterized queries"
  - "parameterized query"
  - "query parameters"
---

# BigQuery Standard SQL parameterized queries

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL added support for parameterized queries to reduce SQL injection risk from user input.

## Extended Definition

BigQuery Standard SQL added support for parameterized queries to reduce SQL injection risk from user input.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/dbapi](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/dbapi)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical)

## Supporting Pages

### DB-API Reference \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/dbapi](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/dbapi)
- Source ID: `site-python-reference`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: The page is a BigQuery Python DB-API reference covering connection/cursor execution APIs, which may document how client code submits queries with parameters but not the SQL parameter feature itself in depth.

Evidence snippets:
- Return type google.cloud.bigquery.dbapi.Connection DB-API Query-Parameter Syntax The BigQuery DB-API uses the qmark parameter style for unnamed/positional parameters and the pyformat parameter style for named parameters.
- For named parameters, a BigQuery type is provided after the name separated by a colon, as in: insert into people (name, income) values (%(name:string)s, %(income:numeric)s) For unnamed parameters, use the named syntax with a type, but no name, as in: insert into people (name, income) values (%(:string)s, %(:numeric)s) Providing type information is the only way to pass struct data: cursor.execute( "insert into points (point) values (%(:struct<x float64, y float64>)s)", [{"x": 10, "y": 20}], ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- An example of a query using unnamed parameters: insert into people (name, income) values (?, ?) and using named parameters: insert into people (name, income) values (%(name)s, %(income)s) Providing explicit type information BigQuery requires type information for parameters.
- For more information about BigQuery data types, see: https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types STRUCT / RECORD and REPEATED query parameters are not yet supported.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Example: data policies +=["data policy1", "data policy2"] VALUE is a constant expression containing only literals, query parameters, and scalar functions.
- Example: data policies +=["data policy1", "data policy2"] VALUE is a constant expression containing only literals, query parameters, and scalar functions.
- VALUE is a constant expression that contains only literals, query parameters, and scalar functions.
- VALUE is a constant expression containing only literals, query parameters, and scalar functions.

### Lexical structure and syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Query parameters can't be used in the SQL body of these statements: CREATE FUNCTION , CREATE VIEW , CREATE MATERIALIZED VIEW , and CREATE PROCEDURE .
- SELECT FROM Roster WHERE LastName = @myparam Positional query parameters Positional query parameters are denoted using the ? character.
- Example SELECT name , release date , FROM Books Query parameters You can use query parameters to substitute arbitrary expressions.
- Named query parameters Syntax: @parameter name A named query parameter is denoted using an identifier preceded by the @ character.

