---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.359Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Raster analysis with ST_REGIONSTATS"
feature_slug: "raster-analysis-with-st-regionstats"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/raster-tutorial-weather"
  - "https://docs.cloud.google.com/bigquery/docs/gis-data"
keywords:
  - "raster"
  - "analysis"
  - "st"
  - "regionstats"
  - "bigquery"
  - "geospatial"
  - "can"
  - "now"
---

# Raster analysis with ST_REGIONSTATS

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery geospatial analysis can now combine raster and vector data by using the ST_REGIONSTATS geography function.

## Extended Definition

BigQuery geospatial analysis can now combine raster and vector data by using the ST_REGIONSTATS geography function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/raster-tutorial-weather](https://docs.cloud.google.com/bigquery/docs/raster-tutorial-weather)
- [https://docs.cloud.google.com/bigquery/docs/gis-data](https://docs.cloud.google.com/bigquery/docs/gis-data)

## Supporting Pages

### "Use raster data to analyze temperature \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/raster-tutorial-weather](https://docs.cloud.google.com/bigquery/docs/raster-tutorial-weather)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use raster data to analyze temperature This tutorial describes how to perform geospatial analysis on raster data .
- Compute the average temperature Run the following query to compute the average temperature of each country on January 1, 2025 using the ST REGIONSTATS function : WITH SimplifiedCountries AS ( SELECT ST SIMPLIFY ( geometry , 10000 ) AS simplified geometry , names . primary AS name FROM bigquery-public-data.overture maps.division area WHERE subtype = 'country' ) SELECT sc . simplified geometry AS geometry , sc . name , ST REGIONSTATS ( sc . simplified geometry , 'ee://ECMWF/ERA5 LAND/DAILY AGGR/20250101' , 'temperature 2m' ). mean - 273.15 AS mean temperature FROM SimplifiedCountries AS sc ORDER BY mean temperature DESC ; This query runs on the publicly available division area table that contains GEOGRAPHY values representing the boundaries of various regions on Earth, including countries.
- WITH SimplifiedCountries AS ( SELECT ST SIMPLIFY ( geometry , 10000 ) AS simplified geometry , names . primary AS name FROM bigquery-public-data.overture maps.division area WHERE subtype = 'country' ) SELECT sc . simplified geometry AS geometry , sc . name , ST REGIONSTATS ( sc . simplified geometry , 'ee://ECMWF/ERA5 LAND/DAILY AGGR/20250101' , 'temperature 2m' ). mean - 273.15 AS mean temperature FROM SimplifiedCountries AS sc ORDER BY mean temperature DESC ; Click Run .
- The ST REGIONSTATS function uses the temperature 2m band of the raster image, which contains the temperature of the air at 2 meters above the surface of the land at the given pixel.

### "Deploy and apply a remote function using BigQuery DataFrames \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)
- Source ID: `site-docs-reference-required-15`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The BigQuery remote function created to support the BigQuery DataFrames remote function can be located via a property bigframes remote function set in the remote function object. print ( f "Created BQ remote function: { get bucket . bigframes remote function } " ) The cloud function can be located via another property bigframes cloud function set in the remote function object. print ( f "Created cloud function: { get bucket . bigframes cloud function } " ) Warning: The deployed cloud function may be visible to other users with sufficient privilege in the project, so the user should be careful about having any sensitive data in the code that will be deployed as a remote function.
- One can find more details about the usage and the requirements via help command. help ( bpd . remote function ) Read a table and inspect the column of interest. df = bpd . read gbq ( "bigquery-public-data.ml datasets.penguins" ) df [ "body mass g" ] . head ( 10 ) Define a custom function, and specify the intent to turn it into a remote function.
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Set BigQuery DataFrames options bpd . options . bigquery . project = your gcp project id bpd . options . bigquery . location = "US" BigQuery DataFrames gives you the ability to turn your custom scalar functions into a BigQuery remote function.
- For that, there is a google cloud function deployed by serializing the user code, and a BigQuery remote function created to call the cloud function via the latter's http endpoint on the data in the DataFrame.

### Working with geospatial data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gis-data](https://docs.cloud.google.com/bigquery/docs/gis-data)
- Source ID: `site-docs-reference-required-7`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Although BigQuery primarily specializes in tabular vector data, representing features with boundaries and points, you can integrate raster data into your BigQuery analyses by using the ST REGIONSTATS function .
- This function uses Earth Engine, Google's raster analysis platform, to perform computations and aggregations on raster data for enhanced geospatial analysis.
- Integrate geospatial raster data with Google Earth Engine Geospatial insights are often presented as grid-based, or raster , data.
- To load WKT data into BigQuery, provide a schema that specifies a GEOGRAPHY column for the geospatial data.

