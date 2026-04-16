---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.892Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "HyperLogLog++ approximate distinct count functions"
feature_slug: "hyperloglog-approximate-distinct-count-functions"
latest_feature_date: "2017-03-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "hyperloglog"
  - "approximate"
  - "distinct"
  - "count"
  - "functions"
  - "bigquery"
  - "standard"
  - "sql"
---

# HyperLogLog++ approximate distinct count functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL provides HyperLogLog++-based functions for estimating unique values in large datasets.

## Extended Definition

BigQuery Standard SQL provides HyperLogLog++-based functions for estimating unique values in large datasets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)

## Supporting Pages

### Approximate aggregate functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples SELECT APPROX QUANTILES ( x , 2 ) AS approx quantiles FROM UNNEST ( [ 1 , 1 , 1 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ------------------+ approx quantiles +------------------+ [1, 5, 10] +------------------ / SELECT APPROX QUANTILES ( x , 100 ) [ OFFSET ( 90 ) ] AS percentile 90 FROM UNNEST ( [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ---------------+ percentile 90 +---------------+ 9 +--------------- / SELECT APPROX QUANTILES ( DISTINCT x , 2 ) AS approx quantiles FROM UNNEST ( [ 1 , 1 , 1 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ------------------+ approx quantiles +------------------+ [1, 6, 10] +------------------ / SELECT FORMAT ( "%T" , APPROX QUANTILES ( x , 2 RESPECT NULLS )) AS approx quantiles FROM UNNEST ( [ NULL , NULL , 1 , 1 , 1 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ------------------+ approx quantiles +------------------+ [NULL, 4, 10] +------------------ / SELECT FORMAT ( "%T" , APPROX QUANTILES ( DISTINCT x , 2 RESPECT NULLS )) AS approx quantiles FROM UNNEST ( [ NULL , NULL , 1 , 1 , 1 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ------------------+ approx quantiles +------------------+ [NULL, 6, 10] +------------------ / APPROX TOP COUNT APPROX TOP COUNT ( expression , number ) Description Returns the approximate top elements of expression as an array of STRUCT s.
- Supported Argument Types Any data type except : ARRAY STRUCT INTERVAL Returned Data Types INT64 Examples SELECT APPROX COUNT DISTINCT ( x ) as approx distinct FROM UNNEST ( [ 0 , 1 , 1 , 2 , 3 , 5 ] ) as x ; / -----------------+ approx distinct +-----------------+ 5 +----------------- / APPROX QUANTILES APPROX QUANTILES ( [ DISTINCT ] expression , number [ { IGNORE RESPECT } NULLS ] ) Description Returns the approximate boundaries for a group of expression values, where number represents the number of quantiles to create.
- Home Documentation Data analytics BigQuery Reference Send feedback Approximate aggregate functions Stay organized with collections Save and categorize content based on your preferences.
- These functions typically require less memory than exact aggregation functions like COUNT(DISTINCT ...) , but also introduce statistical uncertainty.

### Geography functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- Source ID: `site-docs-reference-required-7`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Return type STRUCT < count , min FLOAT64 , max FLOAT64 , stdDev FLOAT64 , sum FLOAT64 , mean FLOAT64 , area FLOAT64 Return values: count : The number of pixels that intersect with geography , including partially intersecting pixels. min : The minimum band value of the valid pixels that intersect with geography . max : The maximum band value of the valid pixels that intersect with geography . stdDev : The weighted standard deviation of the band values of the pixels that intersect with geography . sum : The weighted sum of the band values of the pixels that intersect with geography . mean : The weighted mean of the band values of the pixels that intersect with geography . area : The sum of the area of valid pixels, or parts of valid pixels, that intersect geography .
- GoogleSQL for BigQuery supports the following functions that can be used to analyze geographical data, determine spatial relationships between geographical features, and construct or manipulate GEOGRAPHY s.
- Home Documentation Data analytics BigQuery Reference Send feedback Geography functions Stay organized with collections Save and categorize content based on your preferences.
- The statistics include the count, minimum, maximum, sum, standard deviation, mean, and area of the valid pixels of the raster band named band name .

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count rank handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 3 circumstance 3 5 RATIO TO REPORT( <column> ) Returns the ratio of each value to the sum of the values, as a double between 0 and 1. legacySQL SELECT word , word count , RATIO TO REPORT ( word count ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) r to r , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count r to r handkerchief 29 0.6444444444444445 satisfaction 5 0.1111111111111111 displeasure 4 0.08888888888888889 instruments 4 0.08888888888888889 circumstance 3 0.06666666666666667 ROW NUMBER() Returns the current row number of the query result over the window, starting with 1. legacySQL SELECT word , word count , ROW NUMBER () OVER ( PARTITION BY corpus ORDER BY word count DESC ) row num , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count row num handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 4 circumstance 3 5 Other functions Syntax Other functions CASE WHEN ...
- This example displays the top TLDs that are not in a list of common examples. legacySQL SELECT TLD ( repository homepage ) AS user tld , COUNT ( ) AS activity count FROM [ bigquery - public - data : samples . github timeline ] GROUP BY user tld HAVING / Only consider TLDs that are NOT NULL / / or in our list of common TLDs / user tld IS NOT NULL AND NOT user tld IN ( '' , '.com' , '.net' , '.org' , '.info' , '.edu' ) ORDER BY activity count DESC LIMIT 5 ; Returns: +----------+----------------+ user tld activity count +----------+----------------+ .de 22934 .io 17528 .me 13652 .fr 12895 .co.uk 9135 +----------+----------------+ Window functions Window functions, also known as analytic functions, enable calculations on a specific subset, or "window", of a result set.
- Example: legacySQL SELECT / Multiply timestamp by 1000000 and convert / / into a more human-readable format. / TOP ( FORMAT UTC USEC ( timestamp 1000000 ), 5 ) AS top revision time , COUNT ( ) AS revision count FROM [ bigquery - public - data : samples . wikipedia ]; Returns: +----------------------------+----------------+ top revision time revision count +----------------------------+----------------+ 2002-02-25 15:51:15.000000 20976 2002-02-25 15:43:11.000000 15974 2010-02-02 03:34:51.000000 3 2010-02-02 01:04:59.000000 3 2010-02-01 23:55:05.000000 3 +----------------------------+----------------+ Bucketing Results by Timestamp It's useful to use date and time functions to group query results into buckets corresponding to particular years, months, or days.
- The window frame comprises two rows that move with the current row. legacySQL SELECT name , value , AVG ( value ) OVER ( ORDER BY value ROWS BETWEEN 1 PRECEDING AND CURRENT ROW ) AS MovingAverage FROM ( SELECT "a" AS name , 0 AS value ), ( SELECT "b" AS name , 1 AS value ), ( SELECT "c" AS name , 2 AS value ), ( SELECT "d" AS name , 3 AS value ), ( SELECT "e" AS name , 4 AS value ); Return value: +------+-------+---------------+ name value MovingAverage +------+-------+---------------+ a 0 0.0 b 1 0.5 c 2 1.5 d 3 2.5 e 4 3.5 +------+-------+---------------+ Syntax Window functions AVG() COUNT( ) COUNT([DISTINCT]) MAX() MIN() STDDEV() SUM() The same operation as the corresponding Aggregate functions , but are computed over a window defined by the OVER clause.

