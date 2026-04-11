---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.869Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery GIS"
feature_slug: "bigquery-gis"
latest_feature_date: "2018-09-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane"
  - "https://docs.cloud.google.com/bigquery/docs/visualize-jupyter"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
keywords:
  - "ST_GEOGFROMTEXT"
  - "geospatial SQL functions"
  - "GEOGRAPHY data type"
  - "BigQuery geospatial"
  - "BigQuery Geospatial"
  - "ST_Distance"
  - "BigQuery GIS"
  - "GEOGRAPHY"
---

# BigQuery GIS

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Geographic Information Systems (BigQuery GIS) is now available in Beta.

## Extended Definition

BigQuery Geographic Information Systems (BigQuery GIS) is now available in Beta.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane](https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane)
- [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)

## Supporting Pages

### "Using geospatial analytics to plot a hurricane's path \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane](https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane)
- Source ID: `site-docs-root-2`
- Final score: 52
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a BigQuery geospatial analytics tutorial that demonstrates creating geographic point data from coordinates and visualizing geospatial query results.

Evidence snippets:
- SELECT ST GeogPoint ( longitude , latitude ) AS point , name , iso time , dist2land , usa wind , usa pressure , usa sshs , ( usa r34 ne + usa r34 nw + usa r34 se + usa r34 sw ) / 4 AS radius 34kt , ( usa r50 ne + usa r50 nw + usa r50 se + usa r50 sw ) / 4 AS radius 50kt FROM bigquery-public-data.noaa hurricanes.hurricanes WHERE name LIKE '%MARIA%' AND season = '2017' AND ST DWithin ( ST GeogFromText ( 'POLYGON((-179 26, -179 48, -10 48, -10 26, -100 -10.1, -179 26))' ), ST GeogPoint ( longitude , latitude ), 10 ) ORDER BY iso time ASC The query clauses do the following: SELECT ST GeogPoint(longitude, latitude) AS point, name, iso time, dist2land, usa wind, usa pressure, usa sshs, (usa r34 ne + usa r34 nw + usa r34 se + usa r34 sw)/4 AS radius 34kt, (usa r50 ne + usa r50 nw + usa r50 se + usa r50 sw)/4 AS radius 50kt The SELECT clause selects all the storm's weather data and uses the ST GeogPoint function to convert the values in the latitude and longitude columns to GEOGRAPHY types (points).
- SELECT ST GeogPoint ( longitude , latitude ) AS point , name , iso time , dist2land , usa wind , usa pressure , usa sshs , ( usa r34 ne + usa r34 nw + usa r34 se + usa r34 sw ) / 4 AS radius 34kt , ( usa r50 ne + usa r50 nw + usa r50 se + usa r50 sw ) / 4 AS radius 50kt FROM bigquery-public-data.noaa hurricanes.hurricanes WHERE name LIKE '%MARIA%' AND season = '2017' AND ST DWithin ( ST GeogFromText ( 'POLYGON((-179 26, -179 48, -10 48, -10 26, -100 -10.1, -179 26))' ), ST GeogPoint ( longitude , latitude ), 10 ) ORDER BY iso time ASC Click Run .
- SELECT ST GeogPoint ( longitude , latitude ) AS point , name , iso time , dist2land , usa wind , usa pressure , usa sshs , ( usa r34 ne + usa r34 nw + usa r34 se + usa r34 sw ) / 4 AS radius 34kt , ( usa r50 ne + usa r50 nw + usa r50 se + usa r50 sw ) / 4 AS radius 50kt FROM bigquery-public-data.noaa hurricanes.hurricanes WHERE name LIKE '%MARIA%' AND season = '2017' AND ST DWithin ( ST GeogFromText ( 'POLYGON((-179 26, -179 48, -10 48, -10 26, -100 -10.1, -179 26))' ), ST GeogPoint ( longitude , latitude ), 10 ) ORDER BY iso time ASC Click Run .
- WHERE name LIKE '%MARIA%' AND season = '2017' AND ST DWithin(ST GeogFromText('POLYGON((-179 26, -179 48, -10 48, -10 26, -100 -10.1, -179 26))'), ST GeogPoint(longitude, latitude), 10) The WHERE clause filters the data to just the points in the Atlantic corresponding to hurricane Maria in the 2017 hurricane season.

### "Visualize geospatial analytics data using a Colab notebook \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: The page demonstrates geospatial analytics workflows in BigQuery, but does not describe the GIS feature’s release status or mechanics.

Evidence snippets:
- ST GEOGFROMTEXT ( location ) AS location geography , # WKT string to GEOMETRY EXTRACT ( YEAR FROM timestamp ) AS year , FROM bigquery - public - data . san francisco sfpd incidents . sfpd incidents incidents ) WHERE year = 2015 Click play circle filled Run cell .
- You can open a prebuilt version of the notebook in Colab, Colab Enterprise, or BigQuery Studio by clicking the links at the top of the GitHub version of the tutorial— BigQuery Geospatial Visualization in Colab .
- The output is similar to the following: Visualize polygons Geospatial analytics lets you analyze and visualize geospatial data in BigQuery by using GEOGRAPHY data types and GoogleSQL geography functions.
- The GEOGRAPHY data type in geospatial analytics is a collection of points, linestrings, and polygons, which is represented as a point set, or a subset of the surface of the Earth.

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- ST MAXDISTANCE Gets the longest distance between two non-empty GEOGRAPHY values.
- ST DISTANCE Gets the shortest distance in meters between two GEOGRAPHY values.
- ST GEOGFROMTEXT Converts a STRING WKT geometry value into a GEOGRAPHY value.
- ST ANGLE Takes three point GEOGRAPHY values, which represent two intersecting lines, and returns the angle between these lines.

