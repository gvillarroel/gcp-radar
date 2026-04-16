---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.445Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery JupyterLab plugin"
feature_slug: "bigquery-jupyterlab-plugin"
latest_feature_date: "2024-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
keywords:
  - "bigquery"
  - "jupyterlab"
  - "plugin"
  - "lets"
  - "users"
  - "explore"
  - "use"
  - "dataframes"
---

# BigQuery JupyterLab plugin

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery JupyterLab plugin lets users explore data, use BigQuery DataFrames in notebooks, and deploy DataFrames notebooks to Cloud Composer.

## Extended Definition

The BigQuery JupyterLab plugin lets users explore data, use BigQuery DataFrames in notebooks, and deploy DataFrames notebooks to Cloud Composer.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)

## Supporting Pages

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- CREATE OR REPLACE FUNCTION cymbal pets . chunk pdf ( src json STRING , chunk size INT64 , overlap size INT64 ) RETURNS ARRAY<STRING > LANGUAGE python WITH CONNECTION us.cymbal conn OPTIONS ( entry point = 'chunk pdf' , runtime version = 'python-3.11' , packages =[ 'pypdf' ] ) AS " "" import io import json from pypdf import PdfReader # type: ignore from urllib.request import urlopen, Request def chunk pdf(src ref: str, chunk size: int, overlap size: int) -> str: src json = json.loads(src ref) srcUrl = src json[" access urls "][" read url "] req = urlopen(srcUrl) pdf file = io.BytesIO(bytearray(req.read())) reader = PdfReader(pdf file, strict=False) extract and chunk text simultaneously all text chunks = [] curr chunk = "" for page in reader.pages: page text = page.extract text() if page text: curr chunk += page text split the accumulated text into chunks of a specific size with overlaop this loop implements a sliding window approach to create chunks while len(curr chunk) >= chunk size: split idx = curr chunk.rfind(" ", 0, chunk size) if split idx == -1: split idx = chunk size actual chunk = curr chunk[:split idx] all text chunks.append(actual chunk) overlap = curr chunk[split idx + 1 : split idx + 1 + overlap size] curr chunk = overlap + curr chunk[split idx + 1 + overlap size :] if curr chunk: all text chunks.append(curr chunk) return all text chunks "" " ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Run the following to create the to grayscale UDF: SQL CREATE OR REPLACE FUNCTION cymbal pets . to grayscale ( src json STRING , dst json STRING ) RETURNS STRING LANGUAGE python WITH CONNECTION us.cymbal conn OPTIONS ( entry point = 'to grayscale' , runtime version = 'python-3.11' , packages =[ 'numpy' , 'opencv-python' ] ) AS " "" import cv2 as cv import numpy as np from urllib.request import urlopen, Request import json Transform the image to grayscale. def to grayscale(src ref, dst ref): src json = json.loads(src ref) srcUrl = src json[" access urls "][" read url "] dst json = json.loads(dst ref) dstUrl = dst json[" access urls "][" write url "] req = urlopen(srcUrl) arr = np.asarray(bytearray(req.read()), dtype=np.uint8) img = cv.imdecode(arr, -1) # 'Load it as it is' Convert the image to grayscale gray image = cv.cvtColor(img, cv.COLOR BGR2GRAY) Send POST request to the URL , img encoded = cv.imencode('.png', gray image) req = Request(url=dstUrl, data=img encoded.tobytes(), method='PUT', headers = { " Content - Type ": " image / png ", }) with urlopen(req) as f: pass return dst ref "" " ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . bbq . create external table ( "cymbal pets.product manuals all" , replace = True , connection name = "us.cymbal conn" , options = { "object metadata" : "SIMPLE" , "uris" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/documents/ .pdf" , "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/document chunks/ .pdf" , ], }, ) Run the following to write PDF data to the map manual to chunks table: SQL -- Extract the file and chunks into a single table. -- Store the chunks in the chunks column as array of ObjectRefs (ordered by page number) CREATE OR REPLACE TABLE cymbal pets . map manual to chunks AS SELECT ARRAY AGG ( m1 . ref ) [ 0 ] manual , ARRAY AGG ( m2 . ref ORDER BY m2 . ref . uri ) chunks FROM cymbal pets . product manuals m1 JOIN cymbal pets . product manuals m2 ON REGEXP EXTRACT ( m1 . uri , r '. /([^.] ).[^/]+' ) = REGEXP EXTRACT ( m2 . uri , r '. /([^.] ) page[0-9]+.[^/]+' ) GROUP BY m1 . uri ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . df prompt = bbq . obj . get access url ( df products mm [ "image" ], "R" ) . to frame () df prompt [ "prompt0" ] = "For the image of a pet product, concisely generate the following metadata: 1) animal type and 2) 5 SEO search keywords, and 3) product subcategory." df products mm [ "prompt" ] = bbq . struct ( df prompt [[ "prompt0" , "image" ]]) df products mm = df products mm . drop ( columns = [ "animal type" , "search keywords" , "subcategory" ] ) df products mm = bbq . ai . generate table ( gemini model , df products mm , output schema = "animal type STRING, search keywords ARRAY<STRING>, subcategory STRING" , ) Run the following to view the generated data: SQL SELECT product name , image description , animal type , search keywords , subcategory , FROM cymbal pets . products mm ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- It lets users create, explore, and share interactive dashboards directly from cloud data warehouses like Google BigQuery, leveraging live data without extracts and offering embedded analytics capabilities.
- Partner references Numbers station BigQuery Quickstart BigQuery integration OWOX Solution Owox BI Category BI, ML, & Advanced Analytics Description OWOX BI is a leading data democratization platform, designed for collaboration between data teams and business users, giving the right tools to empower everyone to explore and act upon business data.
- Partner references Import BigQuery Data into Amplitude Export data to BigQuery AskYourDatabase Solution AskYourDatabase Category BI, ML, & Advanced Analytics Description AskYourDatabase is an AI-powered tool that lets users ask questions in plain English and get instant answers from their database.
- It lets users ingest, join, and analyze streaming data with the same ease as a traditional database, offering seamless integration to sink processed data into BigQuery for long-term storage and analysis.

### "Create recommendations based on explicit feedback with a matrix factorization\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Call model.predict() to get predicted ratings. import bigframes.bigquery as bbq Load movies movies = bpd . read gbq ( "bqml tutorial.movies" ) Merge the movies df with the previously created predicted df merged df = bpd . merge ( predicted , movies , left on = "item id" , right on = "movie id" ) Separate users and predicted data, setting the index to 'movie id' users = merged df [[ "user id" , "movie id" ]] . set index ( "movie id" ) Take the predicted data and sort it in descending order by 'predicted rating', setting the index to 'movie id' sort data = ( merged df [[ "movie title" , "genre" , "predicted rating" , "movie id" ]] . sort values ( by = "predicted rating" , ascending = False ) . set index ( "movie id" ) ) re-merge the separated dfs by index merged user = sort data . join ( users , how = "outer" ) group the users and set the user id as the index merged user . groupby ( "user id" ) . head ( 5 ) . set index ( "user id" ) . sort index () print ( merged user ) Output: movie title genre predicted rating user id 1 Saving Private Ryan (1998) Action Drama War 5.19326 1 Fargo (1996) Crime Drama Thriller 4.996954 1 Driving Miss Daisy (1989) Drama 4.983671 1 Ben-Hur (1959) Action Adventure Drama 4.877622 1 Schindler's List (1993) Drama War 4.802336 2 Saving Private Ryan (1998) Action Drama War 5.19326 2 Braveheart (1995) Action Drama War 5.174145 2 Gladiator (2000) Action Drama 5.066372 2 On Golden Pond (1981) Drama 5.01198 2 Driving Miss Daisy (1989) Drama 4.983671 Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- In the query editor, paste in the following query and click Run : SELECT user id , ARRAY AGG ( STRUCT ( movie title , genre , predicted rating ) ORDER BY predicted rating DESC LIMIT 5 ) FROM ( SELECT user id , item id , predicted rating , movie title , genre FROM bqml tutorial.recommend JOIN bqml tutorial.movies ON item id = movie id ) GROUP BY user id ; The results should look similar to the following: +---------+-------------------------------------+------------------------+--------------------+ user id f0 movie title f0 genre predicted rating +---------+-------------------------------------+------------------------+--------------------+ 4597 Song of Freedom (1936) Drama 6.8495752907364009 I Went Down (1997) Action/Comedy/Crime 6.7203235758772877 Men With Guns (1997) Action/Drama 6.399407352232001 Kid, The (1921) Action 6.1952890198126731 Hype! (1996) Documentary 6.1895766097451475 +---------+-------------------------------------+------------------------+--------------------+ 5349 Fandango (1985) Comedy 9.944574012151549 Breakfast of Champions (1999) Comedy 9.55661860430112 Funny Bones (1995) Comedy 9.52778917835076 Paradise Road (1997) Drama/War 9.1643621767929133 Surviving Picasso (1996) Drama 8.807353289233772 +---------+-------------------------------------+------------------------+--------------------+ ... ... ... ... +---------+-------------------------------------+------------------------+--------------------+ BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- RECOMMEND ( MODEL bqml tutorial.mf explicit , ( SELECT user id FROM bqml tutorial.ratings LIMIT 5 )); The results should look similar to the following: +--------------------+---------+---------+ predicted rating user id item id +--------------------+---------+---------+ 4.2125303962491873 4 3169 +--------------------+---------+---------+ 4.8068920531981263 4 3739 +--------------------+---------+---------+ 3.8742203494732403 4 3574 +--------------------+---------+---------+ ... ... ... +--------------------+---------+---------+ BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

