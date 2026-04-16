---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.676Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Inverse trigonometric SQL functions"
feature_slug: "inverse-trigonometric-sql-functions"
latest_feature_date: "2022-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions"
keywords:
  - "inverse"
  - "trigonometric"
  - "sql"
  - "functions"
  - "set"
  - "adds"
  - "hyperbolic"
  - "including"
---

# Inverse trigonometric SQL functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

This function set adds trigonometric and hyperbolic functions including COT, COTH, CSC, CSCH, SEC, and SECH.

## Extended Definition

This function set adds trigonometric and hyperbolic functions including COT, COTH, CSC, CSCH, SEC, and SECH.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)

## Supporting Pages

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- ATANH Computes the inverse hyperbolic tangent of X .
- ACOSH Computes the inverse hyperbolic cosine of X .
- ASINH Computes the inverse hyperbolic sine of X .
- Home Documentation Data analytics BigQuery Reference Send feedback Functions (alphabetical) Stay organized with collections Save and categorize content based on your preferences.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Expressions in the SELECT clause can contain field names, literals, and function calls (including aggregate functions and window functions ) as well as combinations of the three.
- This query makes use of BigQuery's mathematical and trigonometric functions, such as PI() , SIN() , and COS() .
- Example This query adds the GROUPING function to the previous example to better identify the rows added because of the ROLLUP function. legacySQL SELECT year , GROUPING ( year ) as rollup year , is male , GROUPING ( is male ) as rollup gender , COUNT ( 1 ) as count FROM [ bigquery - public - data : samples . natality ] WHERE year > = 2000 AND year < = 2002 GROUP BY ROLLUP ( year , is male ) ORDER BY year , is male ; These are the result the new query returns. +------+-------------+---------+---------------+----------+ year rollup year is male rollup gender count +------+-------------+---------+---------------+----------+ NULL 1 NULL 1 12122730 2000 0 NULL 1 4063823 2000 0 false 0 1984255 2000 0 true 0 2079568 2001 0 NULL 1 4031531 2001 0 false 0 1970770 2001 0 true 0 2060761 2002 0 NULL 1 4027376 2002 0 false 0 1966519 2002 0 true 0 2060857 +------+-------------+---------+---------------+----------+ Notes: Non-aggregated fields in the SELECT clause must be listed in the GROUP BY clause. legacySQL SELECT word , corpus , COUNT ( word ) FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word , corpus ; / Succeeds because all non-aggregated fields are group keys. / legacySQL SELECT word , corpus , COUNT ( word ) FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word ; / Fails because corpus is not aggregated nor is it a group key. / Expressions computed in the SELECT clause cannot be used in the corresponding GROUP BY clause. legacySQL SELECT word , corpus , COUNT ( word ) word count FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word , corpus , word count ; / Fails because word count is not visible to this GROUP BY clause. / Grouping by float and double values is not supported, because the equality function for those types is not well-defined.
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count rank handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 3 circumstance 3 5 RATIO TO REPORT( <column> ) Returns the ratio of each value to the sum of the values, as a double between 0 and 1. legacySQL SELECT word , word count , RATIO TO REPORT ( word count ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) r to r , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count r to r handkerchief 29 0.6444444444444445 satisfaction 5 0.1111111111111111 displeasure 4 0.08888888888888889 instruments 4 0.08888888888888889 circumstance 3 0.06666666666666667 ROW NUMBER() Returns the current row number of the query result over the window, starting with 1. legacySQL SELECT word , word count , ROW NUMBER () OVER ( PARTITION BY corpus ORDER BY word count DESC ) row num , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count row num handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 4 circumstance 3 5 Other functions Syntax Other functions CASE WHEN ...

### Geography functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- Source ID: `site-docs-reference-required-7`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Return type STRUCT < count , min FLOAT64 , max FLOAT64 , stdDev FLOAT64 , sum FLOAT64 , mean FLOAT64 , area FLOAT64 Return values: count : The number of pixels that intersect with geography , including partially intersecting pixels. min : The minimum band value of the valid pixels that intersect with geography . max : The maximum band value of the valid pixels that intersect with geography . stdDev : The weighted standard deviation of the band values of the pixels that intersect with geography . sum : The weighted sum of the band values of the pixels that intersect with geography . mean : The weighted mean of the band values of the pixels that intersect with geography . area : The sum of the area of valid pixels, or parts of valid pixels, that intersect geography .
- Transformations ST BOUNDARY ST BUFFER ST BUFFERWITHTOLERANCE ST CENTROID ST CENTROID AGG (Aggregate) ST CLOSESTPOINT ST CONVEXHULL ST DIFFERENCE ST EXTERIORRING ST INTERIORRINGS ST INTERSECTION ST LINEINTERPOLATEPOINT ST LINESUBSTRING ST SIMPLIFY ST SNAPTOGRID ST UNION ST UNION AGG (Aggregate) Functions that generate a new geography based on input.
- Categories The geography functions are grouped into the following categories based on their behavior: Category Functions Description Constructors ST GEOGPOINT ST MAKELINE ST MAKEPOLYGON ST MAKEPOLYGONORIENTED Functions that build new geography values from coordinates or existing geographies.
- Predicates ST CONTAINS ST COVEREDBY ST COVERS ST DISJOINT ST DWITHIN ST EQUALS ST HAUSDORFFDWITHIN ST INTERSECTS ST INTERSECTSBOX ST TOUCHES ST WITHIN Functions that return TRUE or FALSE for some spatial relationship between two geographies or some property of a geography.

