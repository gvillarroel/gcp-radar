---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.854Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Geographic Information Systems (GIS)"
feature_slug: "bigquery-geographic-information-systems-gis"
latest_feature_date: "2019-04-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane"
  - "https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
keywords:
  - "ST_GEOGFROMTEXT"
  - "geospatial functions"
  - "GEOGRAPHY data type"
  - "BigQuery geospatial"
  - "ST_DISTANCE"
  - "BigQuery GIS"
  - "GIS support"
  - "GIS SQL"
---

# BigQuery Geographic Information Systems (GIS)

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Geographic Information Systems (GIS) became generally available.

## Extended Definition

BigQuery Geographic Information Systems (GIS) became generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane](https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane)
- [https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial](https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)

## Supporting Pages

### "Using geospatial analytics to plot a hurricane's path \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane](https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: The page demonstrates core GIS workflows in BigQuery, but does not provide release-status or lifecycle details for GIS.

Evidence snippets:
- SELECT ST GeogPoint ( longitude , latitude ) AS point , name , iso time , dist2land , usa wind , usa pressure , usa sshs , ( usa r34 ne + usa r34 nw + usa r34 se + usa r34 sw ) / 4 AS radius 34kt , ( usa r50 ne + usa r50 nw + usa r50 se + usa r50 sw ) / 4 AS radius 50kt FROM bigquery-public-data.noaa hurricanes.hurricanes WHERE name LIKE '%MARIA%' AND season = '2017' AND ST DWithin ( ST GeogFromText ( 'POLYGON((-179 26, -179 48, -10 48, -10 26, -100 -10.1, -179 26))' ), ST GeogPoint ( longitude , latitude ), 10 ) ORDER BY iso time ASC The query clauses do the following: SELECT ST GeogPoint(longitude, latitude) AS point, name, iso time, dist2land, usa wind, usa pressure, usa sshs, (usa r34 ne + usa r34 nw + usa r34 se + usa r34 sw)/4 AS radius 34kt, (usa r50 ne + usa r50 nw + usa r50 se + usa r50 sw)/4 AS radius 50kt The SELECT clause selects all the storm's weather data and uses the ST GeogPoint function to convert the values in the latitude and longitude columns to GEOGRAPHY types (points).
- SELECT ST GeogPoint ( longitude , latitude ) AS point , name , iso time , dist2land , usa wind , usa pressure , usa sshs , ( usa r34 ne + usa r34 nw + usa r34 se + usa r34 sw ) / 4 AS radius 34kt , ( usa r50 ne + usa r50 nw + usa r50 se + usa r50 sw ) / 4 AS radius 50kt FROM bigquery-public-data.noaa hurricanes.hurricanes WHERE name LIKE '%MARIA%' AND season = '2017' AND ST DWithin ( ST GeogFromText ( 'POLYGON((-179 26, -179 48, -10 48, -10 26, -100 -10.1, -179 26))' ), ST GeogPoint ( longitude , latitude ), 10 ) ORDER BY iso time ASC Click Run .
- SELECT ST GeogPoint ( longitude , latitude ) AS point , name , iso time , dist2land , usa wind , usa pressure , usa sshs , ( usa r34 ne + usa r34 nw + usa r34 se + usa r34 sw ) / 4 AS radius 34kt , ( usa r50 ne + usa r50 nw + usa r50 se + usa r50 sw ) / 4 AS radius 50kt FROM bigquery-public-data.noaa hurricanes.hurricanes WHERE name LIKE '%MARIA%' AND season = '2017' AND ST DWithin ( ST GeogFromText ( 'POLYGON((-179 26, -179 48, -10 48, -10 26, -100 -10.1, -179 26))' ), ST GeogPoint ( longitude , latitude ), 10 ) ORDER BY iso time ASC Click Run .
- WHERE name LIKE '%MARIA%' AND season = '2017' AND ST DWithin(ST GeogFromText('POLYGON((-179 26, -179 48, -10 48, -10 26, -100 -10.1, -179 26))'), ST GeogPoint(longitude, latitude), 10) The WHERE clause filters the data to just the points in the Atlantic corresponding to hurricane Maria in the 2017 hurricane season.

### "Create a k-means model to cluster London bicycle hires dataset \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial](https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.london station clusters OPTIONS ( model type = 'kmeans' , num clusters = 4 ) AS WITH hs AS ( SELECT h . start station name AS station name , IF ( EXTRACT ( DAYOFWEEK FROM h . start date ) = 1 OR EXTRACT ( DAYOFWEEK FROM h . start date ) = 7 , 'weekend' , 'weekday' ) AS isweekday , h . duration , ST DISTANCE ( ST GEOGPOINT ( s . longitude , s . latitude ), ST GEOGPOINT ( - 0.1 , 51.5 )) / 1000 AS distance from city center FROM bigquery-public-data.london bicycles.cycle hire AS h JOIN bigquery-public-data.london bicycles.cycle stations AS s ON h . start station id = s . id WHERE h . start date BETWEEN CAST ( '2015-01-01 00:00:00' AS TIMESTAMP ) AND CAST ( '2016-01-01 00:00:00' AS TIMESTAMP ) ), stationstats AS ( SELECT station name , isweekday , AVG ( duration ) AS duration , COUNT ( duration ) AS num trips , MAX ( distance from city center ) AS distance from city center FROM hs GROUP BY station name , isweekday ) SELECT EXCEPT ( station name , isweekday ) FROM stationstats ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Go to BigQuery In the query editor, paste in the following query and click Run : WITH hs AS ( SELECT h . start station name AS station name , IF ( EXTRACT ( DAYOFWEEK FROM h . start date ) = 1 OR EXTRACT ( DAYOFWEEK FROM h . start date ) = 7 , 'weekend' , 'weekday' ) AS isweekday , h . duration , ST DISTANCE ( ST GEOGPOINT ( s . longitude , s . latitude ), ST GEOGPOINT ( - 0.1 , 51.5 )) / 1000 AS distance from city center FROM bigquery-public-data.london bicycles.cycle hire AS h JOIN bigquery-public-data.london bicycles.cycle stations AS s ON h . start station id = s . id WHERE h . start date BETWEEN CAST ( '2015-01-01 00:00:00' AS TIMESTAMP ) AND CAST ( '2016-01-01 00:00:00' AS TIMESTAMP ) ), stationstats AS ( SELECT station name , isweekday , AVG ( duration ) AS duration , COUNT ( duration ) AS num trips , MAX ( distance from city center ) AS distance from city center FROM hs GROUP BY station name , isweekday ) SELECT FROM stationstats ORDER BY distance from city center ASC ; The results should look similar to the following: BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Go to BigQuery In the query editor, paste in the following query and click Run : WITH hs AS ( SELECT h . start station name AS station name , IF ( EXTRACT ( DAYOFWEEK FROM h . start date ) = 1 OR EXTRACT ( DAYOFWEEK FROM h . start date ) = 7 , 'weekend' , 'weekday' ) AS isweekday , h . duration , ST DISTANCE ( ST GEOGPOINT ( s . longitude , s . latitude ), ST GEOGPOINT ( - 0.1 , 51.5 )) / 1000 AS distance from city center FROM bigquery-public-data.london bicycles.cycle hire AS h JOIN bigquery-public-data.london bicycles.cycle stations AS s ON h . start station id = s . id WHERE h . start date BETWEEN CAST ( '2015-01-01 00:00:00' AS TIMESTAMP ) AND CAST ( '2016-01-01 00:00:00' AS TIMESTAMP ) ), stationstats AS ( SELECT station name , isweekday , AVG ( duration ) AS duration , COUNT ( duration ) AS num trips , MAX ( distance from city center ) AS distance from city center FROM hs GROUP BY station name , isweekday ) SELECT EXCEPT ( nearest centroids distance ) FROM ML .
- Use the read gbq function to represent cycle hires data as a DataFrame. h = bpd . read gbq ( "bigquery-public-data.london bicycles.cycle hire" , col order = [ "start station name" , "start station id" , "start date" , "duration" ], ) . rename ( columns = { "start station name" : "station name" , "start station id" : "station id" , } ) Use GeoSeries.from xy and BigQuery.st distance to analyze geographical data.

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following query produces the same results: SELECT ST GEOGFROMTEXT ( 'POINT EMPTY' ) AS a , ST GEOGFROMTEXT ( 'GEOMETRYCOLLECTION EMPTY' ) AS b / --------------------------+--------------------------+ a b +--------------------------+--------------------------+ GEOMETRYCOLLECTION EMPTY GEOMETRYCOLLECTION EMPTY +--------------------------+-------------------------- / The structure of compound geometry objects isn't preserved if a simpler type can be produced.
- SELECT ST GEOGFROMTEXT ( 'MULTIPOINT(1 1, 2 2)' ) AS a , ST GEOGFROMTEXT ( 'GEOMETRYCOLLECTION(POINT(1 1), POINT(2 2))' ) AS b / ----------------------+----------------------+ a b +----------------------+----------------------+ MULTIPOINT(1 1, 2 2) MULTIPOINT(1 1, 2 2) +----------------------+---------------------- / A geography is the result of, or an argument to, a Geography Function .

