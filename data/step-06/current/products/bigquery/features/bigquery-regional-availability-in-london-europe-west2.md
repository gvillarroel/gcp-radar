---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.867Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery regional availability in London (europe-west2)"
feature_slug: "bigquery-regional-availability-in-london-europe-west2"
latest_feature_date: "2018-10-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/locations"
  - "https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial"
keywords:
  - "location europe-west2"
  - "BigQuery europe-west2"
  - "London region"
  - "europe-west2"
  - "europe west2"
  - "london"
  - "region availability"
---

# BigQuery regional availability in London (europe-west2)

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery became available in the London region (europe-west2).

## Extended Definition

BigQuery became available in the London region (europe-west2).

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- [https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial](https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial)

## Supporting Pages

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery SQL translators are available in the following processing locations: Region description Region name Details Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 EU multi-region eu Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Americas Columbus, Ohio us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Northern Virginia us-east4 Oregon us-west1 Low CO 2 Québec northamerica-northeast1 Low CO 2 São Paulo southamerica-east1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 US multi-region us Africa Johannesburg africa-south1 MiddleEast Dammam me-central2 Doha me-central1 Israel me-west1 BigQuery continuous query locations The following table lists the regions where continuous queries are supported: Region description Region name Details Americas US multi-region us Columbus us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Montréal northamerica-northeast1 Low CO 2 Northern Virginia us-east4 Oklahoma us-central2 Low CO 2 Oregon us-west1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 São Paulo southamerica-east1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 Asia Pacific Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe EU multi-region eu Belgium europe-west1 Low CO 2 Berlin europe-west10 Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zurich europe-west6 Low CO 2 Middle East Doha me-central1 Dammam me-central2 Tel Aviv me-west1 Africa Johannesburg africa-south1 BigQuery partition and cluster recommender locations The BigQuery partitioning and clustering recommender generates partition or cluster recommendations to optimize your BigQuery tables.
- Regional locations The following table contains information about supported locations for all model types other than remote models: Region description Region name Imported models Built-in model training DNN/Autoencoder/ Boosted Tree/ Wide-and-Deep models training AutoML model training Hyperparameter tuning Vertex AI Model Registry integration Americas Columbus, Ohio us-east5 ● ● Dallas us-south1 ● ● Iowa us-central1 ● ● ● ● ● ● Las Vegas us-west4 ● ● ● ● Los Angeles us-west2 ● ● ● ● Mexico northamerica-south1 ● ● Montréal northamerica-northeast1 ● ● ● ● ● ● Northern Virginia us-east4 ● ● ● ● ● ● Oregon us-west1 ● ● ● ● ● Salt Lake City us-west3 ● ● ● São Paulo southamerica-east1 ● ● ● ● Santiago southamerica-west1 ● ● South Carolina us-east1 ● ● ● ● ● Toronto northamerica-northeast2 ● ● ● Europe Belgium europe-west1 ● ● ● ● ● ● Berlin europe-west10 ● ● Finland europe-north1 ● ● ● Frankfurt europe-west3 ● ● ● ● ● ● London europe-west2 ● ● ● ● ● ● Madrid europe-southwest1 ● ● Milan europe-west8 ● ● Netherlands europe-west4 ● ● ● ● ● ● Paris europe-west9 ● ● Stockholm europe-north2 ● ● Turin europe-west12 ● Warsaw europe-central2 ● ● Zürich europe-west6 ● ● ● ● ● ● Asia Pacific Bangkok asia-southeast3 ● ● Delhi asia-south2 ● ● Hong Kong asia-east2 ● ● ● ● ● ● Jakarta asia-southeast2 ● ● ● Melbourne australia-southeast2 ● ● Mumbai asia-south1 ● ● ● ● ● Osaka asia-northeast2 ● ● ● Seoul asia-northeast3 ● ● ● ● ● ● Singapore asia-southeast1 ● ● ● ● ● ● Sydney australia-southeast1 ● ● ● ● ● ● Taiwan asia-east1 ● ● ● ● ● ● Tokyo asia-northeast1 ● ● ● ● ● ● Middle East Dammam me-central2 ● Doha me-central1 ● Tel Aviv me-west1 ● ● Africa Johannesburg africa-south1 ● ● Multi-regional locations All supported models other than remote models are supported in the US and EU multi-regions.
- The following table lists the regions where BigQuery Studio is available: Region description Region name Details Africa Johannesburg africa-south1 Americas Columbus us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Montréal northamerica-northeast1 Low CO 2 North Virginia us-east4 Oklahoma us-central2 Low CO 2 Oregon us-west1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 São Paulo southamerica-east1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Middle East Dammam me-central2 Doha me-central1 Tel Aviv me-west1 BigQuery Omni locations BigQuery Omni processes queries in the same location as the dataset that contains the tables you're querying.
- Region description Region name Vertex AI deployed models Cloud Natural Language API Cloud Translation API Cloud Vision API Document AI API Speech-to-Text API Americas Columbus, Ohio us-east5 Dallas us-south1 ● Iowa us-central1 ● ● Las Vegas us-west4 ● Los Angeles us-west2 ● Mexico northamerica-south1 Montréal northamerica-northeast1 ● Northern Virginia us-east4 ● Oregon us-west1 ● ● Salt Lake City us-west3 ● São Paulo southamerica-east1 ● Santiago southamerica-west1 South Carolina us-east1 ● ● Toronto northamerica-northeast2 ● Europe Belgium europe-west1 ● ● Finland europe-north1 Frankfurt europe-west3 ● ● London europe-west2 ● ● Madrid europe-southwest1 Milan europe-west8 ● Netherlands europe-west4 ● ● Paris europe-west9 ● Stockholm europe-north2 Turin europe-west12 Warsaw europe-central2 ● Zürich europe-west6 ● Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 ● Jakarta asia-southeast2 ● Melbourne australia-southeast2 Mumbai asia-south1 ● ● Osaka asia-northeast2 Seoul asia-northeast3 ● Singapore asia-southeast1 ● ● Sydney australia-southeast1 ● ● Taiwan asia-east1 ● Tokyo asia-northeast1 ● ● Middle East Dammam me-central2 Doha me-central1 Tel Aviv me-west1 ● If the dataset in which you are creating the remote model is in a single region, the Vertex AI model endpoint must be in the same region.

### "Create a k-means model to cluster London bicycle hires dataset \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial](https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: The page includes a London sample dataset but provides no information about BigQuery regional availability.

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.london station clusters OPTIONS ( model type = 'kmeans' , num clusters = 4 ) AS WITH hs AS ( SELECT h . start station name AS station name , IF ( EXTRACT ( DAYOFWEEK FROM h . start date ) = 1 OR EXTRACT ( DAYOFWEEK FROM h . start date ) = 7 , 'weekend' , 'weekday' ) AS isweekday , h . duration , ST DISTANCE ( ST GEOGPOINT ( s . longitude , s . latitude ), ST GEOGPOINT ( - 0.1 , 51.5 )) / 1000 AS distance from city center FROM bigquery-public-data.london bicycles.cycle hire AS h JOIN bigquery-public-data.london bicycles.cycle stations AS s ON h . start station id = s . id WHERE h . start date BETWEEN CAST ( '2015-01-01 00:00:00' AS TIMESTAMP ) AND CAST ( '2016-01-01 00:00:00' AS TIMESTAMP ) ), stationstats AS ( SELECT station name , isweekday , AVG ( duration ) AS duration , COUNT ( duration ) AS num trips , MAX ( distance from city center ) AS distance from city center FROM hs GROUP BY station name , isweekday ) SELECT EXCEPT ( station name , isweekday ) FROM stationstats ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Go to BigQuery In the query editor, paste in the following query and click Run : WITH hs AS ( SELECT h . start station name AS station name , IF ( EXTRACT ( DAYOFWEEK FROM h . start date ) = 1 OR EXTRACT ( DAYOFWEEK FROM h . start date ) = 7 , 'weekend' , 'weekday' ) AS isweekday , h . duration , ST DISTANCE ( ST GEOGPOINT ( s . longitude , s . latitude ), ST GEOGPOINT ( - 0.1 , 51.5 )) / 1000 AS distance from city center FROM bigquery-public-data.london bicycles.cycle hire AS h JOIN bigquery-public-data.london bicycles.cycle stations AS s ON h . start station id = s . id WHERE h . start date BETWEEN CAST ( '2015-01-01 00:00:00' AS TIMESTAMP ) AND CAST ( '2016-01-01 00:00:00' AS TIMESTAMP ) ), stationstats AS ( SELECT station name , isweekday , AVG ( duration ) AS duration , COUNT ( duration ) AS num trips , MAX ( distance from city center ) AS distance from city center FROM hs GROUP BY station name , isweekday ) SELECT FROM stationstats ORDER BY distance from city center ASC ; The results should look similar to the following: BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Go to BigQuery In the query editor, paste in the following query and click Run : WITH hs AS ( SELECT h . start station name AS station name , IF ( EXTRACT ( DAYOFWEEK FROM h . start date ) = 1 OR EXTRACT ( DAYOFWEEK FROM h . start date ) = 7 , 'weekend' , 'weekday' ) AS isweekday , h . duration , ST DISTANCE ( ST GEOGPOINT ( s . longitude , s . latitude ), ST GEOGPOINT ( - 0.1 , 51.5 )) / 1000 AS distance from city center FROM bigquery-public-data.london bicycles.cycle hire AS h JOIN bigquery-public-data.london bicycles.cycle stations AS s ON h . start station id = s . id WHERE h . start date BETWEEN CAST ( '2015-01-01 00:00:00' AS TIMESTAMP ) AND CAST ( '2016-01-01 00:00:00' AS TIMESTAMP ) ), stationstats AS ( SELECT station name , isweekday , AVG ( duration ) AS duration , COUNT ( duration ) AS num trips , MAX ( distance from city center ) AS distance from city center FROM hs GROUP BY station name , isweekday ) SELECT EXCEPT ( nearest centroids distance ) FROM ML .
- For more information, see Set up ADC for a local development environment . from bigframes.ml.cluster import KMeans To determine an optimal number of clusters, construct and fit several K-Means objects with different values of num clusters, find the error measure, and pick the point at which the error measure is at its minimum value. cluster model = KMeans ( n clusters = 4 ) cluster model . fit ( stationstats ) cluster model . to gbq ( your model id , # For example: "bqml tutorial.london station clusters" replace = True , ) Interpret the data clusters The information in the model's Evaluation tab can help you to interpret the clusters produced by the model.

