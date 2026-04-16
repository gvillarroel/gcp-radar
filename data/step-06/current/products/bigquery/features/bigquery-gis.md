---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.827Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery GIS"
feature_slug: "bigquery-gis"
latest_feature_date: "2019-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gis-data"
  - "https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions"
keywords:
  - "bigquery"
  - "gis"
  - "adds"
  - "geospatial"
  - "types"
  - "functions"
  - "spatial"
  - "analytics"
---

# BigQuery GIS

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery GIS adds geospatial data types and functions for spatial analytics in BigQuery; BigQuery GIS adds geospatial data types and functions for spatial analytics in BigQuery.

## Extended Definition

BigQuery GIS adds geospatial data types and functions for spatial analytics in BigQuery; BigQuery GIS adds geospatial data types and functions for spatial analytics in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/gis-data](https://docs.cloud.google.com/bigquery/docs/gis-data)
- [https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane](https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)

## Supporting Pages

### Working with geospatial data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gis-data](https://docs.cloud.google.com/bigquery/docs/gis-data)
- Source ID: `site-docs-reference-required-7`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: CREATE EXTERNAL TABLE mydataset . table1 OPTIONS ( format = "NEWLINE DELIMITED JSON" , json extension = 'GEOJSON' , uris = [ 'gs://mybucket/geofile.json' ] ); Loading GeoJSON geometry data Geospatial analytics supports loading individual GeoJSON geometry objects that are embedded as text strings in other file types.
- Geospatial analytics adds additional points to the line where necessary so that the converted sequence of edges remains within 10 meters of the original geodesic line.
- Geospatial analytics adds additional points to the line as necessary, so that the converted sequence of edges remains within 10 meters of the original line.
- Geospatial analytics adds these points so that the GeoJSON line closely follows the same path on the ground as the original line.

### "Using geospatial analytics to plot a hurricane's path \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane](https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Objectives In this tutorial, you: Use a geospatial analytics function to convert latitude and longitude columns into geographical points Run a query that plots the path of a hurricane Visualize your results in BigQuery Visualize your results in BigQuery Geo Viz Costs BigQuery is a paid product and you will incur BigQuery usage in this tutorial.
- Home Documentation Data analytics BigQuery Guides Send feedback Using geospatial analytics to plot a hurricane's path Stay organized with collections Save and categorize content based on your preferences.
- To learn more about the geography functions you can use in geospatial analytics, see Geography functions in GoogleSQL .
- Geospatial analytics let you easily analyze and visualize geospatial data in BigQuery.

### Geography functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- Source ID: `site-docs-reference-required-7`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GoogleSQL for BigQuery supports the following functions that can be used to analyze geographical data, determine spatial relationships between geographical features, and construct or manipulate GEOGRAPHY s.
- Home Documentation Data analytics BigQuery Reference Send feedback Geography functions Stay organized with collections Save and categorize content based on your preferences.
- Raster functions ST REGIONSTATS Functions for analyzing geospatial rasters using geographies.
- SELECT ST GEOHASH ( ST GEOGPOINT ( - 122.35 , 47.62 ), 10 ) geohash / --------------+ geohash +--------------+ c22yzugqw7 +-------------- / ST GEOMETRYTYPE ST GEOMETRYTYPE ( geography expression ) Description Returns the Open Geospatial Consortium (OGC) geometry type that describes the input GEOGRAPHY .

