---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.712Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ST_BUFFER"
feature_slug: "st-buffer"
latest_feature_date: "2021-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions"
keywords:
  - "st"
  - "buffer"
  - "returns"
  - "geography"
  - "representing"
  - "around"
  - "input"
  - "segment"
---

# ST_BUFFER

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

ST_BUFFER returns a GEOGRAPHY representing a buffer around an input geography using a segment-based approximation.

## Extended Definition

ST_BUFFER returns a GEOGRAPHY representing a buffer around an input geography using a segment-based approximation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)

## Supporting Pages

### Geography functions | BigQuery | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- Source ID: `feature-recovery-http`
- Final score: 369
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ST_BUFFER ST_BUFFER ( geography , buffer_radius [ , num_seg_quarter_circle = > num_segments ] [ , use_spheroid = > boolean_expression ] [ , endcap = > endcap_style ] [ , side = > line_side ] ) Description Returns a GEOGRAPHY that represents the buffer around the input GEOGRAPHY .
- SELECT -- num_seg_quarter_circle=2 ST_NUMPOINTS ( ST_BUFFER ( ST_GEOGFROMTEXT ( 'POINT(1 2)' ), 50 , 2 )) AS eight_sides , -- num_seg_quarter_circle=8, since 8 is the default ST_NUMPOINTS ( ST_BUFFER ( ST_GEOGFROMTEXT ( 'POINT(100 2)' ), 50 )) AS thirty_two_sides ; /*-------------+------------------+ | eight_sides | thirty_two_sides | +-------------+------------------+ | 9 | 33 | +-------------+------------------*/ ST_BUFFERWITHTOLERANCE ST_BUFFERWITHTOLERANCE ( geography , buffer_radius , tolerance_meters = > tolerance [ , use_spheroid = > boolean_expression ] [ , endcap = > endcap_style ] [ , side = > line_side ] ) Returns a GEOGRAPHY that represents the buffer around the input GEOGRAPHY .
- This function is similar to ST_BUFFERWITHTOLERANCE , but you specify the number of segments instead of providing tolerance to determine how much the resulting geography can deviate from the ideal buffer radius. geography : The input GEOGRAPHY to encircle with the buffer radius. buffer_radius : FLOAT64 that represents the radius of the buffer around the input geography.
- This function is similar to ST_BUFFER , but you provide tolerance instead of segments to determine how much the resulting geography can deviate from the ideal buffer radius. geography : The input GEOGRAPHY to encircle with the buffer radius. buffer_radius : FLOAT64 that represents the radius of the buffer around the input geography.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- CREATE FUNCTION mydataset . multiplyInputs ( x FLOAT64 , y FLOAT64 ) RETURNS FLOAT64 LANGUAGE python OPTIONS ( entry point = 'multiply' , runtime version = 'python-3.11' packages = [ 'pandas==2.2' ]) AS r """ import pandas as pd def multiply(df: pd.DataFrame): return df['x'] df['y'] """ ; CREATE AGGREGATE FUNCTION statement (SQL) Creates a new SQL user-defined aggregate function (UDAF).
- CREATE TEMP FUNCTION multiplyInputs ( x FLOAT64 , y FLOAT64 ) RETURNS FLOAT64 LANGUAGE js AS r " "" return x y; "" " ; SELECT multiplyInputs ( a , b ) FROM ( SELECT 3 as a , 2 as b ); Create a remote function The following example creates a temporary remote function named tempRemoteMultiplyInputs in US location, using a connection called myconnection in the 'US' region.
- CREATE TEMP FUNCTION tempRemoteMultiplyInputs ( x FLOAT64 , y FLOAT64 ) RETURNS FLOAT64 REMOTE WITH CONNECTION us . myconnection OPTIONS ( endpoint = "https://us-central1-myproject.cloudfunctions.net/multiply" ); The following example creates a persistent remote function named remoteMultiplyInputs in a dataset named mydataset using a connection called myconnection .
- CREATE FUNCTION mydataset . remoteMultiplyInputs ( x FLOAT64 , y FLOAT64 ) RETURNS FLOAT64 REMOTE WITH CONNECTION us . myconnection OPTIONS ( endpoint = "https://us-central1-myproject.cloudfunctions.net/multiply" ); Create a Python UDF The following example creates a Python UDF named multiplyInputs .

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- An input record will pass through the WHERE filter if either of the expressions returns true . legacySQL SELECT word FROM [ bigquery - public - data : samples . shakespeare ] WHERE ( word CONTAINS 'prais' AND word CONTAINS 'ing' ) OR ( word CONTAINS 'laugh' AND word CONTAINS 'ed' ); OMIT RECORD IF clause The OMIT RECORD IF clause is a construct that is unique to BigQuery.
- For example: legacySQL SELECT TO BASE64 ( SHA1 ( corpus )) FROM [ bigquery - public - data : samples . shakespeare ] LIMIT 100 ; SOME( <condition> ) Returns true if condition is true for at least one of its inputs.
- FARM FINGERPRINT( expr ) Computes and returns a 64-bit signed fingerprint value of the STRING or BYTES input using the Fingerprint64 function from the open-source FarmHash library .
- Advanced examples Bounding box query The following query returns a collection of points within a rectangular bounding box centered around San Francisco (37.46, -122.50).

