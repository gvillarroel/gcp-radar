---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.308Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ST_REGIONSTATS function"
feature_slug: "st-regionstats-function"
latest_feature_date: "2025-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gis-data"
  - "https://docs.cloud.google.com/bigquery/docs/raster-tutorial-weather"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions"
keywords:
  - "st"
  - "regionstats"
  - "geography"
  - "combines"
  - "earth"
  - "engine"
  - "raster"
  - "vector"
---

# ST_REGIONSTATS function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The ST_REGIONSTATS geography function combines Earth Engine raster data with vector data stored in BigQuery.

## Extended Definition

The ST_REGIONSTATS geography function combines Earth Engine raster data with vector data stored in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/gis-data](https://docs.cloud.google.com/bigquery/docs/gis-data)
- [https://docs.cloud.google.com/bigquery/docs/raster-tutorial-weather](https://docs.cloud.google.com/bigquery/docs/raster-tutorial-weather)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)

## Supporting Pages

### "Use raster data to analyze temperature \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/raster-tutorial-weather](https://docs.cloud.google.com/bigquery/docs/raster-tutorial-weather)
- Source ID: `site-docs-reference-2`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Compute the average temperature Run the following query to compute the average temperature of each country on January 1, 2025 using the ST REGIONSTATS function : WITH SimplifiedCountries AS ( SELECT ST SIMPLIFY ( geometry , 10000 ) AS simplified geometry , names . primary AS name FROM bigquery-public-data.overture maps.division area WHERE subtype = 'country' ) SELECT sc . simplified geometry AS geometry , sc . name , ST REGIONSTATS ( sc . simplified geometry , 'ee://ECMWF/ERA5 LAND/DAILY AGGR/20250101' , 'temperature 2m' ). mean - 273.15 AS mean temperature FROM SimplifiedCountries AS sc ORDER BY mean temperature DESC ; This query runs on the publicly available division area table that contains GEOGRAPHY values representing the boundaries of various regions on Earth, including countries.
- Enable the APIs Required roles To get the permissions that you need to perform the tasks in this tutorial, ask your administrator to grant you the following IAM roles on your project: Earth Engine Resource Viewer ( roles/earthengine.viewer ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) BigQuery Data Editor ( roles/bigquery.dataEditor ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to perform the tasks in this tutorial: earthengine.computations.create serviceusage.services.use bigquery.datasets.create You might also be able to get these permissions with custom roles or other predefined roles .
- Costs In this tutorial, you use the following billable components of Google Cloud: BigQuery Google Earth Engine Before you begin We recommend that you create a Google Cloud project for this tutorial.

### Geography functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- Source ID: `site-docs-reference-required-7`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- WITH linestring AS ( SELECT ST GEOGFROMTEXT ( 'LINESTRING(1 1, 2 1, 3 2, 3 3)' ) g ) SELECT ST POINTN ( g , 1 ) AS first , ST POINTN ( g , - 1 ) AS last , ST POINTN ( g , 2 ) AS second , ST POINTN ( g , - 2 ) AS second to last FROM linestring ; / --------------+--------------+--------------+----------------+ first last second second to last +--------------+--------------+--------------+----------------+ POINT(1 1) POINT(3 3) POINT(2 1) POINT(3 2) +--------------+--------------+--------------+---------------- / ST REGIONSTATS ST REGIONSTATS ( geography , raster id [ , [ band = > ] value ] [ , include = > value ] [ , options = > value ] ) Description Returns statistics summarizing the pixel values of the raster image referenced by raster id that intersect with geography .
- For more information, read about billing for the ST REGIONSTATS function. geography : A GEOGRAPHY value to intersect with the raster image. raster id : A string that identifies a raster image.
- ST REGIONSTATS Computes statistics describing the pixels in a geospatial raster image that intersect a GEOGRAPHY value.
- Definitions geography 1 : A GEOGRAPHY value that represents the first geography. geography 2 : A GEOGRAPHY value that represents the second geography. distance : A FLOAT64 value that represents meters on the surface of the Earth. directed : A named argument with a BOOL value.

### Working with geospatial data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gis-data](https://docs.cloud.google.com/bigquery/docs/gis-data)
- Source ID: `site-docs-reference-required-7`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Although BigQuery primarily specializes in tabular vector data, representing features with boundaries and points, you can integrate raster data into your BigQuery analyses by using the ST REGIONSTATS function .
- This function uses Earth Engine, Google's raster analysis platform, to perform computations and aggregations on raster data for enhanced geospatial analysis.
- Integrate geospatial raster data with Google Earth Engine Geospatial insights are often presented as grid-based, or raster , data.
- For more information about integrations between Earth Engine and BigQuery, see BigQuery integration in the Earth Engine documentation.

