---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.204Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "File-based data preparation sources"
feature_slug: "file-based-data-preparation-sources"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial"
keywords:
  - "file"
  - "based"
  - "preparation"
  - "sources"
  - "bigquery"
  - "preparations"
  - "can"
  - "clean"
---

# File-based data preparation sources

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery data preparations can clean, transform, and enrich files from Cloud Storage and Google Drive.

## Extended Definition

BigQuery data preparations can clean, transform, and enrich files from Cloud Storage and Google Drive.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- It can help Google customers in consolidating data from various sources to Google BigQuery or loading data from it to other sources, import and export CSV files to/from file storages, creating refreshable Google Sheets reports with data from various sources and more.
- With GrowthLoop, you can activate 100% of your customer data in minutes by creating customer segments based on the entire customer profile and measuring impact all within BigQuery.
- Home Documentation Data analytics BigQuery Resources Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Partner references Google BigQuery resources Connect to BigQuery Understanding BigQuery costs Unravel for BigQuery datasheet Partner Advantage page Direct link Validio Solution Validio Platform Category Data Quality, Observability, & FinOps Description Validio is the next generation data quality and reliability platform and offers the only data quality solution on the market monitoring and validating both data in motion and data at rest on datapoint and pipeline metadata level.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . df manuals agg The results look similar to the following: +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ manual.uri manual.version manual.authorizer manual.details chunks.uri chunks.version chunks.authorizer chunks.details +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ gs://cloud-samples-data/bigquery/ 1742492785900455 myproject.region.myconnection {"gcs metadata":{"content type":"application/pef", gs://cloud-samples-data/bigquery/ 1745875761227129 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"c9032b037693d15a33210d638c763d0e", tutorials/cymbal-pets/documents/ "md5 hash":"5a1116cce4978ec1b094d8e8b49a1d7c", crittercuisine 5000 user manual.pdf "size":566105,"updated":1742492785941000}} crittercuisine 5000 user manual page1.pdf "size":504583,"updated":1745875761266000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ crittercuisine 5000 user manual page1.pdf 1745875760613874 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"94d03ec65d28b173bc87eac7e587b325", crittercuisine 5000 user manual page2.pdf "size":94622,"updated":1745875760649000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ ... ... ... ... +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ Run the following to generate a single response from a Gemini model based on the analysis of an array of ObjectRef values: SQL WITH manuals AS ( SELECT OBJ .
- For more information, see Set up ADC for a local development environment . result = bbq . ai . generate table ( gemini model , df manuals agg [ "prompt" ], output schema = { "page1 summary" : "STRING" , "page2 summary" : "STRING" , "page3 summary" : "STRING" , }, )[[ "page1 summary" , "page2 summary" , "page3 summary" ]] result The results look similar to the following: +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ page1 summary page2 summary page3 summary +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ This manual provides an overview of the This section explains how to program This page covers connecting the feeder to Wi-Fi CritterCuisine Pro 5000 automatic pet feeder, the feeder's clock, set feeding using the CritterCuisine Connect app, remote including its features, safety precautions, schedules, copy and delete meal settings, feeding, managing feeding schedules, viewing assembly instructions, and initial setup. manually feed your pet, record feeding logs, receiving low food alerts, a voice message, and understand updating firmware, creating multiple pet profiles, the low food level indicator. sharing access with other users, and cleaning and maintaining the feeder. +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ Clean up Caution : Deleting a project has the following effects: Everything in the project is deleted.
- CREATE OR REPLACE FUNCTION cymbal pets . chunk pdf ( src json STRING , chunk size INT64 , overlap size INT64 ) RETURNS ARRAY<STRING > LANGUAGE python WITH CONNECTION us.cymbal conn OPTIONS ( entry point = 'chunk pdf' , runtime version = 'python-3.11' , packages =[ 'pypdf' ] ) AS " "" import io import json from pypdf import PdfReader # type: ignore from urllib.request import urlopen, Request def chunk pdf(src ref: str, chunk size: int, overlap size: int) -> str: src json = json.loads(src ref) srcUrl = src json[" access urls "][" read url "] req = urlopen(srcUrl) pdf file = io.BytesIO(bytearray(req.read())) reader = PdfReader(pdf file, strict=False) extract and chunk text simultaneously all text chunks = [] curr chunk = "" for page in reader.pages: page text = page.extract text() if page text: curr chunk += page text split the accumulated text into chunks of a specific size with overlaop this loop implements a sliding window approach to create chunks while len(curr chunk) >= chunk size: split idx = curr chunk.rfind(" ", 0, chunk size) if split idx == -1: split idx = chunk size actual chunk = curr chunk[:split idx] all text chunks.append(actual chunk) overlap = curr chunk[split idx + 1 : split idx + 1 + overlap size] curr chunk = overlap + curr chunk[split idx + 1 + overlap size :] if curr chunk: all text chunks.append(curr chunk) return all text chunks "" " ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . bbq . create external table ( "cymbal pets.product manuals all" , replace = True , connection name = "us.cymbal conn" , options = { "object metadata" : "SIMPLE" , "uris" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/documents/ .pdf" , "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/document chunks/ .pdf" , ], }, ) Run the following to write PDF data to the map manual to chunks table: SQL -- Extract the file and chunks into a single table. -- Store the chunks in the chunks column as array of ObjectRefs (ordered by page number) CREATE OR REPLACE TABLE cymbal pets . map manual to chunks AS SELECT ARRAY AGG ( m1 . ref ) [ 0 ] manual , ARRAY AGG ( m2 . ref ORDER BY m2 . ref . uri ) chunks FROM cymbal pets . product manuals m1 JOIN cymbal pets . product manuals m2 ON REGEXP EXTRACT ( m1 . uri , r '. /([^.] ).[^/]+' ) = REGEXP EXTRACT ( m2 . uri , r '. /([^.] ) page[0-9]+.[^/]+' ) GROUP BY m1 . uri ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

### "Create recommendations based on explicit feedback with a matrix factorization\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Call model.predict() to get predicted ratings. import bigframes.bigquery as bbq Load movies movies = bpd . read gbq ( "bqml tutorial.movies" ) Merge the movies df with the previously created predicted df merged df = bpd . merge ( predicted , movies , left on = "item id" , right on = "movie id" ) Separate users and predicted data, setting the index to 'movie id' users = merged df [[ "user id" , "movie id" ]] . set index ( "movie id" ) Take the predicted data and sort it in descending order by 'predicted rating', setting the index to 'movie id' sort data = ( merged df [[ "movie title" , "genre" , "predicted rating" , "movie id" ]] . sort values ( by = "predicted rating" , ascending = False ) . set index ( "movie id" ) ) re-merge the separated dfs by index merged user = sort data . join ( users , how = "outer" ) group the users and set the user id as the index merged user . groupby ( "user id" ) . head ( 5 ) . set index ( "user id" ) . sort index () print ( merged user ) Output: movie title genre predicted rating user id 1 Saving Private Ryan (1998) Action Drama War 5.19326 1 Fargo (1996) Crime Drama Thriller 4.996954 1 Driving Miss Daisy (1989) Drama 4.983671 1 Ben-Hur (1959) Action Adventure Drama 4.877622 1 Schindler's List (1993) Drama War 4.802336 2 Saving Private Ryan (1998) Action Drama War 5.19326 2 Braveheart (1995) Action Drama War 5.174145 2 Gladiator (2000) Action Drama 5.066372 2 On Golden Pond (1981) Drama 5.01198 2 Driving Miss Daisy (1989) Drama 4.983671 Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- First, create a Client object with bqclient = google.cloud.bigquery.Client() , then load the movielens1m data into the dataset you created in the previous step. import io import zipfile import google.api core.exceptions import requests try : Check if you've already created the Movielens tables to avoid downloading and uploading the dataset unnecessarily. bqclient . get table ( "bqml tutorial.ratings" ) bqclient . get table ( "bqml tutorial.movies" ) except google . api core . exceptions .
- Home Documentation Data analytics BigQuery Guides Send feedback Create recommendations based on explicit feedback with a matrix factorization model Stay organized with collections Save and categorize content based on your preferences.
- In the query editor, paste in the following query and click Run : SELECT user id , ARRAY AGG ( STRUCT ( movie title , genre , predicted rating ) ORDER BY predicted rating DESC LIMIT 5 ) FROM ( SELECT user id , item id , predicted rating , movie title , genre FROM bqml tutorial.recommend JOIN bqml tutorial.movies ON item id = movie id ) GROUP BY user id ; The results should look similar to the following: +---------+-------------------------------------+------------------------+--------------------+ user id f0 movie title f0 genre predicted rating +---------+-------------------------------------+------------------------+--------------------+ 4597 Song of Freedom (1936) Drama 6.8495752907364009 I Went Down (1997) Action/Comedy/Crime 6.7203235758772877 Men With Guns (1997) Action/Drama 6.399407352232001 Kid, The (1921) Action 6.1952890198126731 Hype! (1996) Documentary 6.1895766097451475 +---------+-------------------------------------+------------------------+--------------------+ 5349 Fandango (1985) Comedy 9.944574012151549 Breakfast of Champions (1999) Comedy 9.55661860430112 Funny Bones (1995) Comedy 9.52778917835076 Paradise Road (1997) Drama/War 9.1643621767929133 Surviving Picasso (1996) Drama 8.807353289233772 +---------+-------------------------------------+------------------------+--------------------+ ... ... ... ... +---------+-------------------------------------+------------------------+--------------------+ BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

