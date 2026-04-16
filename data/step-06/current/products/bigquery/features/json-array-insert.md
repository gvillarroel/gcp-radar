---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.574Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JSON_ARRAY_INSERT"
feature_slug: "json-array-insert"
latest_feature_date: "2023-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions"
keywords:
  - "json"
  - "array"
  - "insert"
  - "inserts"
  - "into"
---

# JSON_ARRAY_INSERT

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

JSON_ARRAY_INSERT inserts JSON data into a JSON array.

## Extended Definition

JSON_ARRAY_INSERT inserts JSON data into a JSON array.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)

## Supporting Pages

### JSON functions | BigQuery | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- Source ID: `feature-recovery-http`
- Final score: 365
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON_ARRAY_INSERT Inserts JSON data into a JSON array.
- SELECT JSON_ARRAY_APPEND ( JSON '{"a": 1}' , '$.b' , 2 ) AS json_data /*-----------+ | json_data | +-----------+ | {"a":1} | +-----------*/ JSON_ARRAY_INSERT JSON_ARRAY_INSERT ( json_expr , json_path_value_pair [ , ... ] [ , insert_each_element = > { TRUE | FALSE } ] ) json_path_value_pair : json_path , value Produces a new JSON value that's created by inserting JSON data into a JSON array.
- SELECT JSON_ARRAY_INSERT ( JSON '{"a": null}' , '$.a[2]' , 10 ) AS json_data /*----------------------+ | json_data | +----------------------+ | {"a":[null,null,10]} | +----------------------*/ In the following example, the operation is ignored because you can't insert data into a JSON number.
- SELECT JSON_ARRAY_INSERT ( JSON '["a", ["b", "c"], "d"]' , '$[1]' , 1 ) AS json_data /*-----------------------+ | json_data | +-----------------------+ | ["a",1,["b","c"],"d"] | +-----------------------*/ In the following example, path $[1][0] is matched and inserts 1 .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- When new data is available, append the data of the 1993 year to the destination table using the INSERT INTO SELECT statement: INSERT INTO myotherdataset . orders SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1993 ; Example 2 The following example inserts data into an ingestion-time partitioned table: CREATE TABLE mydataset . orders ( id String , numeric id INT64 ) PARTITION BY PARTITIONDATE ; After creating a partitioned table, you can insert data into the ingestion-time partitioned table: INSERT INTO mydataset . orders ( PARTITIONTIME , id , numeric id ) SELECT TIMESTAMP ( "2023-01-01" ), id , numeric id , FROM mydataset . ordersof23 WHERE numeric id > 4000000 ; CREATE TABLE LIKE statement Creates a new table with all of the same metadata of another table.
- The table schema contains 2 columns: customer id: The customer ID as a STRING transaction amount: The transaction amount as NUMERIC The table option list specifies the: Description: A table clustered by customer id Creating a temporary table The following example creates a temporary table named Example and inserts values into it.
- BOOL Boolean BYTES Uint8Array DATE Date FLOAT64 Number INT64 BigInt JSON Various types The GoogleSQL JSON data type can be converted into a JavaScript Object , Array , or other GoogleSQL-supported JavaScript data type.
- Next, it inserts a new row into TargetTable , passing the value of target date as one of the column names.

### "Visualize geospatial analytics data using a Colab notebook \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- To aggregate and count the number of stations per neighborhood and to create a polygon column that contains an array of points, enter the following code: Aggregate and count the number of stations per neighborhood. gdf count stations = gdf sanfrancisco neighborhoods . sjoin ( gdf sf bikestations , how = 'left' , predicate = 'contains' ) gdf count stations = gdf count stations . groupby ( by = 'neighborhood' )[ 'station id' ] . count () . rename ( 'num stations' ) gdf stations x neighborhood = gdf sanfrancisco neighborhoods . join ( gdf count stations , on = 'neighborhood' , how = 'inner' ) To simulate non-GeoJSON input data, create a polygon column that contains an array of points by using the pandas.Series.map method. gdf stations x neighborhood [ 'polygon' ] = gdf stations x neighborhood [ 'geometry' ] . map ( lambda g : list ( g . exterior . coords )) Click play circle filled Run cell .
- To convert the data into a JSON format that can be used by HeatmapLayer , enter the following code: Convert to a JSON format recognized by the HeatmapLayer. def make heatmap datum ( row ) -> dict : return { "latitude" : row [ 'h3 center' ][ 0 ], "longitude" : row [ 'h3 center' ][ 1 ], "weight" : float ( row [ 'num incidents' ]), } heatmap data = gdf incidents x cell . apply ( make heatmap datum , axis = 'columns' ) . values . tolist () Click play circle filled Run cell .
- To visualize the polygons, enter the following code. pydeck is used to convert each shapely object instance in the geometry column into GeoJSON format: Visualize the polygons. geojson layer = pdk .
- The output should look like the following: <class 'geopandas.geodataframe.GeoDataFrame'> RangeIndex: 472 entries, 0 to 471 Data columns (total 4 columns): Column Non-Null Count Dtype --- ------ -------------- ----- 0 station id 472 non-null object 1 name 472 non-null object 2 short name 472 non-null object 3 station geom 472 non-null geometry dtypes: geometry(1), object(3) memory usage: 14.9+ KB To insert a code cell, click add Code .

