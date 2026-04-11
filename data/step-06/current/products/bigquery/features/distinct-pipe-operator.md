---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.407Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "DISTINCT pipe operator"
feature_slug: "distinct-pipe-operator"
latest_feature_date: "2025-07-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "DISTINCT pipe operator"
  - "return distinct rows"
  - "DISTINCT in pipe"
  - "pipe DISTINCT"
  - "pipe syntax"
  - "|> DISTINCT"
---

# DISTINCT pipe operator

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Pipe syntax queries in BigQuery now support a DISTINCT pipe operator to return distinct rows.

## Extended Definition

BigQuery’s DISTINCT pipe operator is a pipe-syntax feature that lets query pipelines return only distinct rows from a table. In practice, it adds support for a `DISTINCT` stage in a pipe query so duplicate rows are removed in the pipeline output.

## Evidence Summary

The BigQuery release notes are the only provided official source that explicitly describes this feature, stating that a DISTINCT operator can now be used in pipe syntax queries to select distinct rows.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- July 21, 2025 Libraries Python 3.35.0 (2025-07-15) Features Add null markers property to LoadJobConfig and CSVOptions ( #2239 ) ( 289446d ) Add total slot ms to RowIterator ( #2233 ) ( d44bf02 ) Add UpdateMode to update dataset ( #2204 ) ( eb9c2af ) Adds dataset view parameter to get dataset method ( #2198 ) ( 28a5750 ) Adds date format to load job and external config ( #2231 ) ( 7d31828 ) Adds datetime format as an option ( #2236 ) ( 54d3dc6 ) Adds source column match and associated tests ( #2227 ) ( 6d5d236 ) Adds time format and timestamp format and associated tests ( #2238 ) ( 371ad29 ) Adds time zone to external config and load job ( #2229 ) ( b2300d0 ) Bug Fixes Adds magics.context.project to eliminate issues with unit tests … ( #2228 ) ( 27ff3a8 ) Fix rows returned when both start index and page size are provided ( #2181 ) ( 45643a2 ) Make AccessEntry equality consistent with from api repr ( #2218 ) ( 4941de4 ) Update type hints for various BigQuery files ( #2206 ) ( b863291 ) Documentation Improve clarity of "Output Only" fields in Dataset class ( #2201 ) ( bd5aba8 ) Libraries Java 2.53.0 (2025-07-14) Features bigquery: Add OpenTelemetry support to BQ rpcs ( #3860 ) ( e2d23c1 ) bigquery: Add support for custom timezones and timestamps ( #3859 ) ( e5467c9 ) Next release from main branch is 2.53.0 ( #3879 ) ( c47a062 ) Bug Fixes Load jobs preserve ascii control characters configuration ( #3876 ) ( 5cfdf85 ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.69.0 ( #3870 ) ( a7f1007 ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250615-2.0.0 ( #3872 ) ( f081589 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #3878 ) ( 0e971b8 ) Documentation Update maven format command ( #3877 ) ( d2918da ) Java 2.53.0 (2025-07-14) Features bigquery: Add OpenTelemetry support to BQ rpcs ( #3860 ) ( e2d23c1 ) bigquery: Add support for custom timezones and timestamps ( #3859 ) ( e5467c9 ) Next release from main branch is 2.53.0 ( #3879 ) ( c47a062 ) Bug Fixes Load jobs preserve ascii control characters configuration ( #3876 ) ( 5cfdf85 ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.69.0 ( #3870 ) ( a7f1007 ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250615-2.0.0 ( #3872 ) ( f081589 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #3878 ) ( 0e971b8 ) Documentation Update maven format command ( #3877 ) ( d2918da ) Feature You can now use the DISTINCT pipe operator to select distinct rows from a table in your pipe syntax queries.
- February 11, 2026 Feature You can now run pipelines with three distinct execution methods: running all tasks, running selected tasks, and running tasks with selected tags.
- May 13, 2025 Feature The following SQL features are now generally available (GA) in BigQuery: GROUP BY STRUCT and the SELECT DISTINCT clause.
- July 17, 2025 Feature You can now use the WITH pipe operator to define common table expressions in your pipe syntax queries.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- The window frame comprises two rows that move with the current row. legacySQL SELECT name , value , AVG ( value ) OVER ( ORDER BY value ROWS BETWEEN 1 PRECEDING AND CURRENT ROW ) AS MovingAverage FROM ( SELECT "a" AS name , 0 AS value ), ( SELECT "b" AS name , 1 AS value ), ( SELECT "c" AS name , 2 AS value ), ( SELECT "d" AS name , 3 AS value ), ( SELECT "e" AS name , 4 AS value ); Return value: +------+-------+---------------+ name value MovingAverage +------+-------+---------------+ a 0 0.0 b 1 0.5 c 2 1.5 d 3 2.5 e 4 3.5 +------+-------+---------------+ Syntax Window functions AVG() COUNT( ) COUNT([DISTINCT]) MAX() MIN() STDDEV() SUM() The same operation as the corresponding Aggregate functions , but are computed over a window defined by the OVER clause.
- AVG( numeric expr ) COUNT( ) COUNT([DISTINCT] field ) MAX( field ) MIN( field ) STDDEV( numeric expr ) SUM( field ) These window functions perform the same operation as the corresponding Aggregate functions , but are computed over a window defined by the OVER clause.
- Another significant difference is that the COUNT([DISTINCT] field ) function produces exact results when used as a window function, with behavior similar to the EXACT COUNT DISTINCT() aggregate function.
- Window functions AVG() COUNT( ) COUNT([DISTINCT]) MAX() MIN() STDDEV() SUM() The same operation as the corresponding Aggregate functions , but are computed over a window defined by the OVER clause.

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Return type BOOL Examples These return TRUE : SELECT 1 IS DISTINCT FROM 2 SELECT 1 IS DISTINCT FROM NULL SELECT 1 IS NOT DISTINCT FROM 1 SELECT NULL IS NOT DISTINCT FROM NULL These return FALSE : SELECT NULL IS DISTINCT FROM NULL SELECT 1 IS DISTINCT FROM 1 SELECT 1 IS NOT DISTINCT FROM 2 SELECT 1 IS NOT DISTINCT FROM NULL LIKE operator expression [ NOT ] LIKE pattern Description LIKE returns TRUE if the string in the first operand expression matches a pattern specified by the second operand pattern , otherwise returns FALSE .
- SELECT FROM UNNEST([a,b]) x GROUP BY x returning 2 rows. a IS DISTINCT FROM b is equivalent to NOT (a = b) , except for the following cases: This operator never returns NULL so NULL values are considered to be distinct from non- NULL values, not other NULL values.
- IS DISTINCT FROM operator expression 1 IS [ NOT ] DISTINCT FROM expression 2 Description IS DISTINCT FROM returns TRUE if the input values are considered to be distinct from each other by the DISTINCT and GROUP BY clauses.
- Value is [not] in the set of values specified Binary IS [NOT] DISTINCT FROM All Value is [not] DISTINCT FROM Binary IS [NOT] NULL All Value is [not] NULL Unary IS [NOT] TRUE BOOL Value is [not] TRUE .

