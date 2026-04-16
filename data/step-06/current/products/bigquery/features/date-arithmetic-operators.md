---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.757Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "DATE arithmetic operators"
feature_slug: "date-arithmetic-operators"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
keywords:
  - "date"
  - "arithmetic"
  - "operators"
  - "bigquery"
  - "standard"
  - "sql"
  - "supports"
  - "values"
---

# DATE arithmetic operators

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery standard SQL supports arithmetic operators for DATE values.

## Extended Definition

BigQuery standard SQL supports arithmetic operators for DATE values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)

## Supporting Pages

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Result types for Addition, Subtraction and Multiplication: INPUT INT64 NUMERIC BIGNUMERIC FLOAT64 INT64 INT64 NUMERIC BIGNUMERIC FLOAT64 NUMERIC NUMERIC NUMERIC BIGNUMERIC FLOAT64 BIGNUMERIC BIGNUMERIC BIGNUMERIC BIGNUMERIC FLOAT64 FLOAT64 FLOAT64 FLOAT64 FLOAT64 FLOAT64 Result types for Division: INPUT INT64 NUMERIC BIGNUMERIC FLOAT64 INT64 FLOAT64 NUMERIC BIGNUMERIC FLOAT64 NUMERIC NUMERIC NUMERIC BIGNUMERIC FLOAT64 BIGNUMERIC BIGNUMERIC BIGNUMERIC BIGNUMERIC FLOAT64 FLOAT64 FLOAT64 FLOAT64 FLOAT64 FLOAT64 Result types for Unary Plus: INPUT INT64 NUMERIC BIGNUMERIC FLOAT64 OUTPUT INT64 NUMERIC BIGNUMERIC FLOAT64 Result types for Unary Minus: INPUT INT64 NUMERIC BIGNUMERIC FLOAT64 OUTPUT INT64 NUMERIC BIGNUMERIC FLOAT64 Date arithmetics operators Operators '+' and '-' can be used for arithmetic operations on dates. date expression + int64 expression int64 expression + date expression date expression - int64 expression Description Adds or subtracts int64 expression days to or from date expression .
- Return Data Type INTERVAL Example SELECT DATE "2021-05-20" - DATE "2020-04-19" AS date diff , TIMESTAMP "2021-06-01 12:34:56.789" - TIMESTAMP "2021-05-31 00:00:00" AS time diff / -------------------+------------------------+ date diff time diff +-------------------+------------------------+ 0-0 396 0:0:0 0-0 0 36:34:56.789 +-------------------+------------------------ / Interval arithmetic operators Addition and subtraction date expression + interval expression = DATETIME date expression - interval expression = DATETIME timestamp expression + interval expression = TIMESTAMP timestamp expression - interval expression = TIMESTAMP datetime expression + interval expression = DATETIME datetime expression - interval expression = DATETIME Description Adds an interval to a datetime value or subtracts an interval from a datetime value.
- Interval arithmetic operators Adds an interval to a datetime or subtracts an interval from a datetime.
- Date arithmetics operators Performs arithmetic operations on dates.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- In the example query, the ORDER BY clause causes the window to be computed from the start of the partition to the current row, which generates a cumulative sum for that year. legacySQL SELECT corpus date , corpus , word count , SUM ( word count ) OVER ( PARTITION BY corpus date ORDER BY word count ) annual total FROM [ bigquery - public - data : samples . shakespeare ] WHERE word = 'love' ORDER BY corpus date , word count Returns: corpus date corpus word count annual total 0 various 37 37 0 sonnets 157 194 1590 2kinghenryvi 18 18 1590 1kinghenryvi 24 42 1590 3kinghenryvi 40 82 CUME DIST() Returns a double that indicates the cumulative distribution of a value in a group of values, calculated using the formula <number of rows preceding or tied with the current row> / <total rows> .
- Example: legacySQL SELECT state , / If 'is male' is True, return 'Male', / / otherwise return 'Female' / IF ( is male , 'Male' , 'Female' ) AS sex , / The count value is aliased as 'cnt' / / and used in the HAVING clause below. / COUNT ( ) AS cnt FROM [ bigquery - public - data : samples . natality ] WHERE state != '' GROUP BY state , sex HAVING cnt > 3000000 ORDER BY cnt DESC Returns: +-------+--------+---------+ state sex cnt +-------+--------+---------+ CA Male 7060826 CA Female 6733288 TX Male 5107542 TX Female 4879247 NY Male 4442246 NY Female 4227891 IL Male 3089555 +-------+--------+---------+ Arithmetic operators Arithmetic operators take numeric arguments and return a numeric result.
- Example: legacySQL SELECT cigarette use , / Finds average and standard deviation / AVG ( weight pounds ) baby weight , STDDEV ( weight pounds ) baby weight stdev , AVG ( mother age ) mother age FROM [ bigquery - public - data : samples . natality ] WHERE year = 2003 AND state = 'OH' / Group the result values by those / / who smoked and those who didn't. / GROUP BY cigarette use ; Filter query results using an aggregated value In order to filter query results using an aggregated value (for example, filtering by the value of a SUM ), use the HAVING function.
- Example: legacySQL SELECT corpus date , / Cast the corpus date to a string value / REGEXP REPLACE ( STRING ( corpus date ), '^16' , 'Written in the sixteen hundreds, in the year \'' ) AS date string FROM [bigquery-public-data:samples.shakespeare] / Cast the corpus date to string, / / match values that begin with ' 16 ' / WHERE REGEXP MATCH(STRING(corpus date), ' ^ 16 ' ) GROUP BY corpus date , date string ORDER BY date string DESC LIMIT 5 ; String functions String functions operate on string data.

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Floating point semantics When working with floating point numbers, there are special non-numeric values that need to be considered: NaN and +/-inf Arithmetic operators provide standard IEEE-754 behavior for all finite input values that produce finite output and for all operations for which at least one input is non-finite.
- The times 2:30 AM and 3:30 AM on that date are treated as the same point in time: SELECT FORMAT TIMESTAMP ( "%c %Z" , "2024-03-10 02:30:00 America/Los Angeles" , "UTC" ) AS two thirty , FORMAT TIMESTAMP ( "%c %Z" , "2024-03-10 03:30:00 America/Los Angeles" , "UTC" ) AS three thirty ; / ------------------------------+------------------------------+ two thirty three thirty +------------------------------+------------------------------+ Sun Mar 10 10:30:00 2024 UTC Sun Mar 10 10:30:00 2024 UTC +------------------------------+------------------------------ / When there's ambiguity in how to represent a civil time in a particular timezone because of DST, the later time is chosen: SELECT FORMAT TIMESTAMP ( "%c %Z" , "2024-03-10 10:30:00 UTC" , "America/Los Angeles" ) as ten thirty ; / --------------------------------+ ten thirty +--------------------------------+ Sun Mar 10 03:30:00 2024 UTC-7 +-------------------------------- / During the transition from DST to standard time, one hour is repeated.
- For example, the following query generates an array that contains all of the odd integers from 11 to 33, inclusive: SELECT GENERATE ARRAY ( 11 , 33 , 2 ) AS odds ; / --------------------------------------------------+ odds +--------------------------------------------------+ [11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33] +-------------------------------------------------- / You can also generate an array of values in descending order by giving a negative step value: SELECT GENERATE ARRAY ( 21 , 14 , - 1 ) AS countdown ; / ----------------------------------+ countdown +----------------------------------+ [21, 20, 19, 18, 17, 16, 15, 14] +---------------------------------- / Generating arrays of dates GENERATE DATE ARRAY generates an array of DATE s from a starting and ending DATE and a step INTERVAL .
- For example, this query returns the current DATE and the following DATE s at 1 WEEK intervals up to and including a later DATE : SELECT GENERATE DATE ARRAY ( '2017-11-21' , '2017-12-31' , INTERVAL 1 WEEK ) AS date array ; / --------------------------------------------------------------------------+ date array +--------------------------------------------------------------------------+ [2017-11-21, 2017-11-28, 2017-12-05, 2017-12-12, 2017-12-19, 2017-12-26] +-------------------------------------------------------------------------- / Boolean type Name Description BOOL BOOLEAN Boolean values are represented by the keywords TRUE and FALSE (case-insensitive).

