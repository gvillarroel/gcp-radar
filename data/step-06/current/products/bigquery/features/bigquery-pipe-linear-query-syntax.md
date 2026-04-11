---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.442Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery pipe linear query syntax"
feature_slug: "bigquery-pipe-linear-query-syntax"
latest_feature_date: "2025-04-01"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "query readability"
  - "pipe query syntax"
  - "SQL pipe syntax"
  - "linear query"
  - "linear SQL"
  - "pipe syntax"
  - "pipeline query"
  - "|> operator"
---

# BigQuery pipe linear query syntax

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery pipe syntax now supports a linear query structure to make queries easier to read and maintain.

## Extended Definition

BigQuery pipe query syntax is an extension to GoogleSQL that expresses query logic as a linear sequence of operations to improve readability, writing clarity, and maintenance. Each step is a pipe operator formed by the pipe symbol `>` with an operator name and arguments, and these operators can be added to the end of a valid query as successive stages. Release notes indicate the feature includes specific operators such as DISTINCT, WITH, and AGGREGATE that can be used within this linear pipe style.

## Evidence Summary

The pipe syntax guide provides the core syntax and purpose of BigQuery’s linear operator-based query format, while release notes confirm active support for key pipe operators.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide](https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Work with pipe query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide](https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide)
- Source ID: `site-docs-root-2`
- Final score: 102
- Re-rank relevance: STRONG
- Re-rank rationale: The page is dedicated to pipe query syntax and explicitly describes its linear query structure and how it makes queries easier to read, write, and maintain.

Evidence snippets:
- What's next Analyze data using pipe syntax Pipe query syntax reference Standard query syntax reference VLDB 2024 conference paper on pipe syntax Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- FROM ( SELECT 1 AS x , 2 AS y , 3 AS z ) AS t > RENAME y AS w ; / ---+---+---+ x w z +---+---+---+ 1 2 3 +---+---+--- / AGGREGATE pipe operator To perform aggregation in pipe syntax, use the AGGREGATE pipe operator , followed by any number of aggregate functions, followed by a GROUP BY clause.
- Pipe syntax has the following key characteristics: Each pipe operator in pipe syntax consists of the pipe symbol, > , an operator name, and any arguments: > operator name argument list Pipe operators can be added to the end of any valid query.
- Pipe query syntax is an extension to GoogleSQL that supports a linear query structure designed to make your queries easier to read, write, and maintain.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Example: legacySQL SELECT state , / If 'is male' is True, return 'Male', / / otherwise return 'Female' / IF ( is male , 'Male' , 'Female' ) AS sex , / The count value is aliased as 'cnt' / / and used in the HAVING clause below. / COUNT ( ) AS cnt FROM [ bigquery - public - data : samples . natality ] WHERE state != '' GROUP BY state , sex HAVING cnt > 3000000 ORDER BY cnt DESC Returns: +-------+--------+---------+ state sex cnt +-------+--------+---------+ CA Male 7060826 CA Female 6733288 TX Male 5107542 TX Female 4879247 NY Male 4442246 NY Female 4227891 IL Male 3089555 +-------+--------+---------+ Arithmetic operators Arithmetic operators take numeric arguments and return a numeric result.
- Syntax Operator Description Example & Bitwise AND SELECT (1 + 3) & 1 Returns: 0 Bitwise OR SELECT 24 12 Returns: 28 ^ Bitwise XOR SELECT 1 ^ 0 Returns: 1 << Bitwise shift left SELECT 1 << (2 + 2) Returns: 16 > Bitwise shift right SELECT (6 + 2) >> 2 Returns: 2 Bitwise NOT SELECT 2 Returns: -3 BIT COUNT( <numeric expr> ) Returns the number of bits that are set in <numeric expr> .
- Syntax Operator Description Example + Addition SELECT 6 + (5 - 1); Returns: 10 - Subtraction SELECT 6 - (4 + 1); Returns: 1 Multiplication SELECT 6 (5 - 1); Returns: 24 / Division SELECT 6 / (2 + 2); Returns: 1.5 % Modulo SELECT 6 % (2 + 2); Returns: 2 Bitwise functions Bitwise functions operate at the level of individual bits and require numerical arguments.
- Arithmetic operators + Addition - Subtraction Multiplication / Division % Modulo Bitwise functions & Bitwise AND Bitwise OR ^ Bitwise XOR << Bitwise shift left > Bitwise shift right Bitwise NOT BIT COUNT() Returns the number of bits ...

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- July 21, 2025 Libraries Python 3.35.0 (2025-07-15) Features Add null markers property to LoadJobConfig and CSVOptions ( #2239 ) ( 289446d ) Add total slot ms to RowIterator ( #2233 ) ( d44bf02 ) Add UpdateMode to update dataset ( #2204 ) ( eb9c2af ) Adds dataset view parameter to get dataset method ( #2198 ) ( 28a5750 ) Adds date format to load job and external config ( #2231 ) ( 7d31828 ) Adds datetime format as an option ( #2236 ) ( 54d3dc6 ) Adds source column match and associated tests ( #2227 ) ( 6d5d236 ) Adds time format and timestamp format and associated tests ( #2238 ) ( 371ad29 ) Adds time zone to external config and load job ( #2229 ) ( b2300d0 ) Bug Fixes Adds magics.context.project to eliminate issues with unit tests … ( #2228 ) ( 27ff3a8 ) Fix rows returned when both start index and page size are provided ( #2181 ) ( 45643a2 ) Make AccessEntry equality consistent with from api repr ( #2218 ) ( 4941de4 ) Update type hints for various BigQuery files ( #2206 ) ( b863291 ) Documentation Improve clarity of "Output Only" fields in Dataset class ( #2201 ) ( bd5aba8 ) Libraries Java 2.53.0 (2025-07-14) Features bigquery: Add OpenTelemetry support to BQ rpcs ( #3860 ) ( e2d23c1 ) bigquery: Add support for custom timezones and timestamps ( #3859 ) ( e5467c9 ) Next release from main branch is 2.53.0 ( #3879 ) ( c47a062 ) Bug Fixes Load jobs preserve ascii control characters configuration ( #3876 ) ( 5cfdf85 ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.69.0 ( #3870 ) ( a7f1007 ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250615-2.0.0 ( #3872 ) ( f081589 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #3878 ) ( 0e971b8 ) Documentation Update maven format command ( #3877 ) ( d2918da ) Java 2.53.0 (2025-07-14) Features bigquery: Add OpenTelemetry support to BQ rpcs ( #3860 ) ( e2d23c1 ) bigquery: Add support for custom timezones and timestamps ( #3859 ) ( e5467c9 ) Next release from main branch is 2.53.0 ( #3879 ) ( c47a062 ) Bug Fixes Load jobs preserve ascii control characters configuration ( #3876 ) ( 5cfdf85 ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.69.0 ( #3870 ) ( a7f1007 ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250615-2.0.0 ( #3872 ) ( f081589 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #3878 ) ( 0e971b8 ) Documentation Update maven format command ( #3877 ) ( d2918da ) Feature You can now use the DISTINCT pipe operator to select distinct rows from a table in your pipe syntax queries.
- July 17, 2025 Feature You can now use the WITH pipe operator to define common table expressions in your pipe syntax queries.
- Feature Pipe syntax supports a linear query structure designed to make your queries easier to read, write, and maintain.
- Change BigQuery data preparations are now represented in the SQLX format and in the pipe query syntax to simplify the CI/CD code review process.

