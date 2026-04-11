---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.403Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ST_REGIONSTATS raster-and-vector integration with Google Earth Engine"
feature_slug: "bigquery-st-regionstats-raster-and-vector-integration-with-google-earth-engine"
latest_feature_date: "2025-08-25"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/raster-tutorial-weather"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "Earth Engine raster values"
  - "Google Earth Engine raster"
  - "region stats function"
  - "raster and vector integration"
  - "ST_REGIONSTATS geography"
  - "ST_REGIONSTATS()"
  - "ST_REGIONSTATS"
  - "geography function"
---

# BigQuery ST_REGIONSTATS raster-and-vector integration with Google Earth Engine

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports the ST_REGIONSTATS geography function to combine Earth Engine raster data with BigQuery vector data.

## Extended Definition

ST_REGIONSTATS is a BigQuery geography function that combines raster data from Google Earth Engine with vector geography data stored in BigQuery to produce regional statistics. It can be used to compute aggregate raster-derived values over geographic regions, such as the mean of a raster band (for example, temperature) for each polygon feature.

## Evidence Summary

The release notes confirm the feature’s announcement and purpose, while the tutorial demonstrates a concrete ST_REGIONSTATS query that merges Earth Engine raster input with BigQuery vector geography to calculate regional averages.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/raster-tutorial-weather](https://docs.cloud.google.com/bigquery/docs/raster-tutorial-weather)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Use raster data to analyze temperature \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/raster-tutorial-weather](https://docs.cloud.google.com/bigquery/docs/raster-tutorial-weather)
- Source ID: `site-docs-root-2`
- Final score: 56
- Re-rank relevance: STRONG
- Re-rank rationale: The tutorial uses publicly available Google Earth Engine raster data from BigQuery sharing and applies ST_REGIONSTATS to compute temperature stats by country.

Evidence snippets:
- Compute the average temperature Run the following query to compute the average temperature of each country on January 1, 2025 using the ST REGIONSTATS function : WITH SimplifiedCountries AS ( SELECT ST SIMPLIFY ( geometry , 10000 ) AS simplified geometry , names . primary AS name FROM bigquery-public-data.overture maps.division area WHERE subtype = 'country' ) SELECT sc . simplified geometry AS geometry , sc . name , ST REGIONSTATS ( sc . simplified geometry , 'ee://ECMWF/ERA5 LAND/DAILY AGGR/20250101' , 'temperature 2m' ). mean - 273.15 AS mean temperature FROM SimplifiedCountries AS sc ORDER BY mean temperature DESC ; This query runs on the publicly available division area table that contains GEOGRAPHY values representing the boundaries of various regions on Earth, including countries.
- WITH SimplifiedCountries AS ( SELECT ST SIMPLIFY ( geometry , 10000 ) AS simplified geometry , names . primary AS name FROM bigquery-public-data.overture maps.division area WHERE subtype = 'country' ) SELECT sc . simplified geometry AS geometry , sc . name , ST REGIONSTATS ( sc . simplified geometry , 'ee://ECMWF/ERA5 LAND/DAILY AGGR/20250101' , 'temperature 2m' ). mean - 273.15 AS mean temperature FROM SimplifiedCountries AS sc ORDER BY mean temperature DESC ; Click Run .
- The ST REGIONSTATS function uses the temerature 2m band of the raster image, which contains the temperature of the air at 2 meters above the surface of the land at the given pixel.
- Use the ST REGIONSTATS function to calculate the average temperature in each country at a point in time.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- August 25, 2025 Libraries Python 3.36.0 (2025-08-20) Features Add created/started/ended properties to RowIterator. ( #2260 ) ( 0a95b24 ) Retry query jobs if jobBackendError or jobInternalError are encountered ( #2256 ) ( 3deff1d ) Documentation Add a TROUBLESHOOTING.md file with tips for logging ( #2262 ) ( b684832 ) Update README to break infinite redirect loop ( #2254 ) ( 8f03166 ) Feature You can use the ST REGIONSTATS geography function to combine raster data using Earth Engine with your vector data stored in BigQuery.
- Feature You can now combine raster and vector data with the ST REGIONSTATS geography function to perform geospatial analysis in BigQuery.

