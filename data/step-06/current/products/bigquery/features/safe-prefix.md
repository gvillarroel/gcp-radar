---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.856Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "SAFE prefix"
feature_slug: "safe-prefix"
latest_feature_date: "2018-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions"
  - "https://docs.cloud.google.com/bigquery/docs/gis-data"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions"
keywords:
  - "safe"
  - "prefix"
  - "bigquery"
  - "standard"
  - "sql"
  - "supports"
  - "suppress"
  - "errors"
---

# SAFE prefix

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery standard SQL supports the SAFE prefix to suppress errors.

## Extended Definition

BigQuery standard SQL supports the SAFE prefix to suppress errors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- [https://docs.cloud.google.com/bigquery/docs/gis-data](https://docs.cloud.google.com/bigquery/docs/gis-data)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)

## Supporting Pages

### Geography functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- Source ID: `site-docs-reference-required-7`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- GoogleSQL for BigQuery supports the following functions that can be used to analyze geographical data, determine spatial relationships between geographical features, and construct or manipulate GEOGRAPHY s.
- Use the SAFE prefix if the input can be multipoint, linestring, polygon, or an empty GEOGRAPHY .
- Use the SAFE prefix to obtain NULL for invalid input instead of an error.
- Use the SAFE prefix to return NULL for invalid input instead of an error.

### Working with geospatial data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gis-data](https://docs.cloud.google.com/bigquery/docs/gis-data)
- Source ID: `site-docs-reference-required-7`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- LineString ([( - 118.4085 , 33.9416 ), ( - 73.7781 , 40.6413 )]) rows = [ Convert GeoJSON data into a string. { "geo" : geojson . dumps ( my geography )} ] table already exists and has a column named "geo" with data type GEOGRAPHY. errors = bigquery client . insert rows json ( table id , rows ) if errors : raise RuntimeError ( f "row insert failed: { errors } " ) else : print ( f "wrote 1 row to { table id } " ) You can also convert a GeoJSON geometry object into a GEOGRAPHY value by using the ST GEOGFROMGEOJSON function.
- LineString ( [( - 118.4085 , 33.9416 ), ( - 73.7781 , 40.6413 )] ) rows = [ Convert data into a WKT string. { "geo" : shapely . wkt . dumps ( my geography )}, ] table already exists and has a column named "geo" with data type GEOGRAPHY. errors = bigquery client . insert rows json ( table id , rows ) if errors : raise RuntimeError ( f "row insert failed: { errors } " ) else : print ( f "wrote 1 row to { table id } " ) For more information about streaming data in BigQuery, see Streaming data into BigQuery .
- Handling improperly formatted spatial data When you load spatial data from other tools into BigQuery, you might encounter conversion errors due to invalid WKT or GeoJSON data.
- To find or to ignore the improperly formatted data, use the SAFE function prefix to output the problematic data.

### JSON functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- Source ID: `site-docs-reference-required-8`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- GoogleSQL for BigQuery supports the following functions, which can retrieve and transform JSON data.
- SELECT FLOAT64 ( JSON '123.4' , wide number mode = > 'EXACT' ) as result ; SELECT FLOAT64 ( JSON '123.4' , wide number mode = > 'exac' ) as result ; -- An error is thrown because the number can't be converted to DOUBLE without loss of precision SELECT FLOAT64 ( JSON '18446744073709551615' , wide number mode = > 'exact' ) as result ; -- Returns a SQL NULL SELECT SAFE .
- SELECT JSON SET ( JSON '["a", ["b", "c"], "d"]' , '$[1][0]' , "foo" ) AS json data / -----------------------+ json data +-----------------------+ ["a",["foo","c"],"d"] +----------------------- / In the following example, the path prefix $ points to a JSON null, so the remainder of the path is created.
- SQL input: 1.0 JSON output: 1 SQL input: 9007199254740993 JSON output: 9007199254740993 SQL input: "+inf" JSON output: "Infinity" SQL input: "-inf" JSON output: "-Infinity" SQL input: "NaN" JSON output: "NaN" STRING string Encoded as a string, escaped according to the JSON standard.

