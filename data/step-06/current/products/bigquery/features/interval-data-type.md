---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.775Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "INTERVAL data type"
feature_slug: "interval-data-type"
latest_feature_date: "2021-07-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
keywords:
  - "INTERVAL arithmetic"
  - "INTERVAL literals"
  - "time intervals"
  - "duration interval"
  - "INTERVAL data type"
  - "INTERVAL type"
  - "INTERVAL"
---

# INTERVAL data type

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery standard SQL added support for the INTERVAL type to represent durations and amounts of time.

## Extended Definition

BigQuery standard SQL added support for the INTERVAL type to represent durations and amounts of time.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)

## Supporting Pages

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly defines INTERVAL as a BigQuery SQL data type and describes it as a duration of time.

Evidence snippets:
- F ] sign : + or - Y : Year M : Month D : Day H : Hour M : Minute S : Second [.F] : Up to six fractional digits (microsecond precision) To learn more about the literal representation of an interval type, see Interval literals .
- You can use one of the following formats with the interval-supported datetime parts : Datetime part string Datetime parts Example Y-M YEAR TO MONTH INTERVAL '2-11' YEAR TO MONTH Y-M D YEAR TO DAY INTERVAL '2-11 28' YEAR TO DAY Y-M D H YEAR TO HOUR INTERVAL '2-11 28 16' YEAR TO HOUR Y-M D H:M YEAR TO MINUTE INTERVAL '2-11 28 16:15' YEAR TO MINUTE Y-M D H:M:S YEAR TO SECOND INTERVAL '2-11 28 16:15:14' YEAR TO SECOND M D MONTH TO DAY INTERVAL '11 28' MONTH TO DAY M D H MONTH TO HOUR INTERVAL '11 28 16' MONTH TO HOUR M D H:M MONTH TO MINUTE INTERVAL '11 28 16:15' MONTH TO MINUTE M D H:M:S MONTH TO SECOND INTERVAL '11 28 16:15:14' MONTH TO SECOND D H DAY TO HOUR INTERVAL '28 16' DAY TO HOUR D H:M DAY TO MINUTE INTERVAL '28 16:15' DAY TO MINUTE D H:M:S DAY TO SECOND INTERVAL '28 16:15:14' DAY TO SECOND H:M HOUR TO MINUTE INTERVAL '16:15' HOUR TO MINUTE H:M:S HOUR TO SECOND INTERVAL '16:15:14' HOUR TO SECOND M:S MINUTE TO SECOND INTERVAL '15:14' MINUTE TO SECOND For example: -- 0 years, 8 months, 20 days, 17 hours, 0 minutes, and 0 seconds (0-8 20 17:0:0) INTERVAL '8 20 17' MONTH TO HOUR -- 0 years, 8 months, -20 days, 17 hours, 0 minutes, and 0 seconds (0-8 -20 17:0:0) INTERVAL '8 -20 17' MONTH TO HOUR For additional examples, see Interval literals .
- For example: -- 1 year, 0 months, 0 days, 0 hours, 0 minutes, and 0 seconds (1-0 0 0:0:0) INTERVAL 1 YEAR INTERVAL 4 QUARTER INTERVAL 12 MONTH -- 0 years, 3 months, 0 days, 0 hours, 0 minutes, and 0 seconds (0-3 0 0:0:0) INTERVAL 1 QUARTER INTERVAL 3 MONTH -- 0 years, 0 months, 42 days, 0 hours, 0 minutes, and 0 seconds (0-0 42 0:0:0) INTERVAL 6 WEEK INTERVAL 42 DAY -- 0 years, 0 months, 0 days, 25 hours, 0 minutes, and 0 seconds (0-0 0 25:0:0) INTERVAL 25 HOUR INTERVAL 1500 MINUTE INTERVAL 90000 SECOND -- 0 years, 0 months, 0 days, 1 hours, 30 minutes, and 0 seconds (0-0 0 1:30:0) INTERVAL 90 MINUTE -- 0 years, 0 months, 0 days, 0 hours, 1 minutes, and 30 seconds (0-0 0 0:1:30) INTERVAL 90 SECOND -- 0 years, 0 months, -5 days, 0 hours, 0 minutes, and 0 seconds (0-0 -5 0:0:0) INTERVAL - 5 DAY For additional examples, see Interval literals .
- The graph path data type represents a sequence of nodes interleaved with edges and has this format: GRAPH PATH<NODE TYPE , EDGE TYPE > Interval type Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Use the UTC USEC TO <function name> functions if you plan to group query data by time intervals, such as getting all data for a certain month, because the functions are more efficient.
- You can configure the size of the moving window frame based on a number of rows or a range of values, such as a time interval. legacySQL SELECT < window function > OVER ( [ PARTITION BY < expr > ] [ ORDER BY < expr > [ ASC DESC ]] [ < window - frame - clause > ] ) PARTITION BY Defines the base partition over which this function operates.
- Example: SELECT DATE(TIMESTAMP('2012-10-01 02:03:04')); Returns: 2012-10-01 DATE ADD( <timestamp> , <interval> , <interval units> ) Adds the specified interval to a TIMESTAMP data type.
- If interval is a negative number, the interval is subtracted from the TIMESTAMP data type.

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Return Data Type INTERVAL Example SELECT DATE "2021-05-20" - DATE "2020-04-19" AS date diff , TIMESTAMP "2021-06-01 12:34:56.789" - TIMESTAMP "2021-05-31 00:00:00" AS time diff / -------------------+------------------------+ date diff time diff +-------------------+------------------------+ 0-0 396 0:0:0 0-0 0 36:34:56.789 +-------------------+------------------------ / Interval arithmetic operators Addition and subtraction date expression + interval expression = DATETIME date expression - interval expression = DATETIME timestamp expression + interval expression = TIMESTAMP timestamp expression - interval expression = TIMESTAMP datetime expression + interval expression = DATETIME datetime expression - interval expression = DATETIME Description Adds an interval to a datetime value or subtracts an interval from a datetime value.
- Interval arithmetic operators Adds an interval to a datetime or subtracts an interval from a datetime.
- Binary 2 + All numeric types Unary plus Unary - All numeric types Unary minus Unary Integer or BYTES Bitwise not Unary 3 All numeric types Multiplication Binary / All numeric types Division Binary STRING , BYTES , or ARRAY<T> Concatenation operator Binary 4 + All numeric types, DATE with INT64 , INTERVAL Addition Binary - All numeric types, DATE with INT64 , INTERVAL Subtraction Binary 5 << Integer or BYTES Bitwise left-shift Binary > Integer or BYTES Bitwise right-shift Binary 6 & Integer or BYTES Bitwise and Binary 7 ^ Integer or BYTES Bitwise xor Binary 8 Integer or BYTES Bitwise or Binary 9 (Comparison Operators) = Any comparable type.
- Example SELECT DATE "2021-04-20" + INTERVAL 25 HOUR AS date plus , TIMESTAMP "2021-05-02 00:01:02.345+00" - INTERVAL 10 SECOND AS time minus ; / -------------------------+--------------------------------+ date plus time minus +-------------------------+--------------------------------+ 2021-04-21 01:00:00 2021-05-02 00:00:52.345+00 +-------------------------+-------------------------------- / Multiplication and division interval expression integer expression = INTERVAL interval expression / integer expression = INTERVAL Description Multiplies or divides an interval value by an integer.

