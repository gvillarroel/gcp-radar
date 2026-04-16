---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.347Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Multi-column data preparation"
feature_slug: "multi-column-data-preparation"
latest_feature_date: "2025-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "multi"
  - "column"
  - "preparation"
  - "bigquery"
  - "can"
  - "apply"
  - "tasks"
  - "including"
---

# Multi-column data preparation

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery data preparation can apply preparation tasks, including dropping columns, across multiple selected columns at once.

## Extended Definition

BigQuery data preparation can apply preparation tasks, including dropping columns, across multiple selected columns at once.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . df grayscale = df products mm [[ "product id" , "product name" , "image" ]] df grayscale [ "gray image uri" ] = f "gs:// { BUCKET } /cymbal-pets-images/grayscale/" + df grayscale [ "image" ] . struct . field ( "uri" ) . str . extract ( r "([^/]+)$" ) df grayscale [ "gray image" ] = bbq . obj . make ref ( df grayscale [ "gray image uri" ], "us.cymbal conn" ) df grayscale [ "image url" ] = bbq . to json string ( bbq . obj . get access url ( df grayscale [ "image" ], "r" ) ) df grayscale [ "gray image url" ] = bbq . to json string ( bbq . obj . get access url ( df grayscale [ "gray image" ], "rw" ) ) df grayscale [[ "image url" , "gray image url" ]] . apply ( to grayscale , axis = 1 ) The results look similar to the following: +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ f0 +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ {"access urls":{"expiry time":"2025-04-26T03:00:48Z", "read url":"https://storage.googleapis.com/mybucket/cymbal-pets-images%2Fgrayscale%2Focean-bites-salmon-%26-tuna-cat-food.png?additional read URL information", "write url":"https://storage.googleapis.com/myproject/cymbal-pets-images%2Fgrayscale%2Focean-bites-salmon-%26-tuna-cat-food.png?additional write URL information"}, "objectref":{"authorizer":"myproject.region.myconnection","uri":"gs://myproject/cymbal-pets-images/grayscale/ocean-bites-salmon-&-tuna-cat-food.png"}} +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ {"access urls":{"expiry time":"2025-04-26T03:00:48Z", "read url":"https://storage.googleapis.com/mybucket/cymbal-pets-images%2Fgrayscale%2Ffluffy-buns-guinea-pig-tunnel.png?additional read URL information", "write url":"https://storage.googleapis.com/myproject/cymbal-pets-images%2Fgrayscale%2Focean-bites-salmon-%26-tuna-cat-food.png?additional write URL information"}, "objectref":{"authorizer":"myproject.region.myconnection","uri":"gs://myproject/cymbal-pets-images%2Fgrayscale%2Ffluffy-buns-guinea-pig-tunnel.png"}} +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ ... +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ Create a Python UDF to chunk PDF data Create a Python UDF to chunk the PDF objects that contain the Cymbal pets product manuals into multiple parts.
- For more information, see Set up ADC for a local development environment . df products mm [[ "product name" , "image" ]] The results look similar to the following: +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ product name image.uri image.version image.authorizer image.details +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ AquaClear Aquarium Background gs://cloud-samples-data/bigquery/ 1234567891011 myproject.region.myconnection {"gcs metadata":{"content type":"image/png", tutorials/cymbal-pets/images/ "md5 hash":"494f63b9b137975ff3e7a11b060edb1d", aquaclear-aquarium-background.png "size":1282805,"updated":1742492680017000}} +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ AquaClear Aquarium gs://cloud-samples-data/bigquery/ 2345678910112 myproject.region.myconnection {"gcs metadata":{"content type":"image/png", Gravel Vacuum tutorials/cymbal-pets/images/ "md5 hash":"b7bfc2e2641a77a402a1937bcf0003fd", aquaclear-aquarium-gravel-vacuum.png "size":820254,"updated":1742492682411000}} +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ ... ... ... ... +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ Generate product information by using a Gemini model Use a Gemini model to generate the following data for the pet store products: Add an image description column to the products mm table.
- For more information, see Set up ADC for a local development environment . result = bbq . ai . generate table ( gemini model , df manuals agg [ "prompt" ], output schema = { "page1 summary" : "STRING" , "page2 summary" : "STRING" , "page3 summary" : "STRING" , }, )[[ "page1 summary" , "page2 summary" , "page3 summary" ]] result The results look similar to the following: +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ page1 summary page2 summary page3 summary +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ This manual provides an overview of the This section explains how to program This page covers connecting the feeder to Wi-Fi CritterCuisine Pro 5000 automatic pet feeder, the feeder's clock, set feeding using the CritterCuisine Connect app, remote including its features, safety precautions, schedules, copy and delete meal settings, feeding, managing feeding schedules, viewing assembly instructions, and initial setup. manually feed your pet, record feeding logs, receiving low food alerts, a voice message, and understand updating firmware, creating multiple pet profiles, the low food level indicator. sharing access with other users, and cleaning and maintaining the feeder. +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ Clean up Caution : Deleting a project has the following effects: Everything in the project is deleted.
- For more information, see Set up ADC for a local development environment . bbq . create external table ( "cymbal pets.product manuals all" , replace = True , connection name = "us.cymbal conn" , options = { "object metadata" : "SIMPLE" , "uris" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/documents/ .pdf" , "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/document chunks/ .pdf" , ], }, ) Run the following to write PDF data to the map manual to chunks table: SQL -- Extract the file and chunks into a single table. -- Store the chunks in the chunks column as array of ObjectRefs (ordered by page number) CREATE OR REPLACE TABLE cymbal pets . map manual to chunks AS SELECT ARRAY AGG ( m1 . ref ) [ 0 ] manual , ARRAY AGG ( m2 . ref ORDER BY m2 . ref . uri ) chunks FROM cymbal pets . product manuals m1 JOIN cymbal pets . product manuals m2 ON REGEXP EXTRACT ( m1 . uri , r '. /([^.] ).[^/]+' ) = REGEXP EXTRACT ( m2 . uri , r '. /([^.] ) page[0-9]+.[^/]+' ) GROUP BY m1 . uri ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

### "Forecast multiple time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You also create the following additional columns that you can use as input variables for the model: date : the date of the order store number : the unique number of the store that placed the order item number : the unique number of the item that was ordered bottles sold : the number of bottles ordered of the associated item temperature : the average temperature at the store location on the order date humidity : the average humidity at the store location on the order date Follow these steps to create the input data table: In the Google Cloud console, go to the BigQuery page.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.multi time series arimax model OPTIONS ( model type = 'ARIMA PLUS XREG' , time series id col = [ 'store number' , 'item number' ] , time series data col = 'bottles sold' , time series timestamp col = 'date' ) AS SELECT FROM bqml tutorial.iowa liquor sales with weather WHERE DATE DATE ( '2022-09-01' ); The query takes approximately 38 minutes to complete, after which you can access the multi time series arimax model model.
- FORECAST ( model bqml tutorial.multi time series arimax model , STRUCT ( 5 AS horizon , 0.8 AS confidence level ), ( SELECT EXCEPT ( bottles sold ) FROM bqml tutorial.iowa liquor sales with weather WHERE DATE >= DATE ( '2022-09-01' ) ) ); The results should look similar to the following: The output rows are in order by the store number value, then by the item ID value, then in chronological order by the forecast timestamp column value.
- EXPLAIN FORECAST ( model bqml tutorial.multi time series arimax model , STRUCT ( 5 AS horizon , 0.8 AS confidence level ), ( SELECT EXCEPT ( bottles sold ) FROM bqml tutorial.iowa liquor sales with weather WHERE DATE >= DATE ( '2022-09-01' ) ) ); The results should look similar to the following: The output rows are ordered chronologically by the time series timestamp column value.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Number of partition modifications for column-partitioned tables quota errors BigQuery returns this error when your column-partitioned table reaches the quota of the number of partition modifications permitted per day.
- As a best practice, group related views into authorized datasets when you design new BigQuery architectures, especially multi-tenant architectures.
- BigQuery Job User : provides permissions to run jobs, including queries, which is essential for Power BI to execute its requests.
- If multiple inserts with the same insertId arrive within a few minutes' window, BigQuery writes a single version of the record.

