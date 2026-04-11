---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.513Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML supervised tuning for Gemini remote models"
feature_slug: "bigquery-ml-supervised-tuning-for-gemini-remote-models"
latest_feature_date: "2024-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
keywords:
  - "BQML supervised tuning"
  - "Gemini 1.0-pro-002"
  - "supervised tuning for remote models"
  - "supervised tuning"
  - "Gemini remote tuning"
  - "ML remote tuning"
  - "CREATE MODEL OPTIONS"
  - "BigQuery DataFrames"
---

# BigQuery ML supervised tuning for Gemini remote models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML now supports supervised tuning of remote models based on gemini-1.0-pro-002, including via BigQuery DataFrames APIs.

## Extended Definition

BigQuery ML supports supervised tuning for BigQuery ML remote models using Vertex AI Gemini model variants (specifically gemini-2.0-flash-001 and gemini-2.0-flash-lite-001). BigQuery documentation also indicates that Gemini-related capabilities are available via BigQuery SQL and BigQuery DataFrames (including multimodal workflows), so the tuning-capable remote model workflow is part of the broader BigQuery AI/ML integration surface. The provided excerpts do not provide details for `CREATE MODEL ... OPTIONS` syntax or confirm support for gemini-1.0-pro-002 in this context.

## Evidence Summary

Release notes provide the direct evidence of supervised tuning support for Gemini-based remote models, while the multimodal DataFrames tutorial corroborates Gemini integration through BigQuery DataFrames methods and AI generation flows.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)

## Supporting Pages

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- CREATE OR REPLACE FUNCTION cymbal pets . chunk pdf ( src json STRING , chunk size INT64 , overlap size INT64 ) RETURNS ARRAY<STRING > LANGUAGE python WITH CONNECTION us.cymbal conn OPTIONS ( entry point = 'chunk pdf' , runtime version = 'python-3.11' , packages =[ 'pypdf' ] ) AS " "" import io import json from pypdf import PdfReader # type: ignore from urllib.request import urlopen, Request def chunk pdf(src ref: str, chunk size: int, overlap size: int) -> str: src json = json.loads(src ref) srcUrl = src json[" access urls "][" read url "] req = urlopen(srcUrl) pdf file = io.BytesIO(bytearray(req.read())) reader = PdfReader(pdf file, strict=False) extract and chunk text simultaneously all text chunks = [] curr chunk = "" for page in reader.pages: page text = page.extract text() if page text: curr chunk += page text split the accumulated text into chunks of a specific size with overlaop this loop implements a sliding window approach to create chunks while len(curr chunk) >= chunk size: split idx = curr chunk.rfind(" ", 0, chunk size) if split idx == -1: split idx = chunk size actual chunk = curr chunk[:split idx] all text chunks.append(actual chunk) overlap = curr chunk[split idx + 1 : split idx + 1 + overlap size] curr chunk = overlap + curr chunk[split idx + 1 + overlap size :] if curr chunk: all text chunks.append(curr chunk) return all text chunks "" " ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Run the following to create the to grayscale UDF: SQL CREATE OR REPLACE FUNCTION cymbal pets . to grayscale ( src json STRING , dst json STRING ) RETURNS STRING LANGUAGE python WITH CONNECTION us.cymbal conn OPTIONS ( entry point = 'to grayscale' , runtime version = 'python-3.11' , packages =[ 'numpy' , 'opencv-python' ] ) AS " "" import cv2 as cv import numpy as np from urllib.request import urlopen, Request import json Transform the image to grayscale. def to grayscale(src ref, dst ref): src json = json.loads(src ref) srcUrl = src json[" access urls "][" read url "] dst json = json.loads(dst ref) dstUrl = dst json[" access urls "][" write url "] req = urlopen(srcUrl) arr = np.asarray(bytearray(req.read()), dtype=np.uint8) img = cv.imdecode(arr, -1) # 'Load it as it is' Convert the image to grayscale gray image = cv.cvtColor(img, cv.COLOR BGR2GRAY) Send POST request to the URL , img encoded = cv.imencode('.png', gray image) req = Request(url=dstUrl, data=img encoded.tobytes(), method='PUT', headers = { " Content - Type ": " image / png ", }) with urlopen(req) as f: pass return dst ref "" " ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . bbq . create external table ( "cymbal pets.product manuals all" , replace = True , connection name = "us.cymbal conn" , options = { "object metadata" : "SIMPLE" , "uris" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/documents/ .pdf" , "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/document chunks/ .pdf" , ], }, ) Run the following to write PDF data to the map manual to chunks table: SQL -- Extract the file and chunks into a single table. -- Store the chunks in the chunks column as array of ObjectRefs (ordered by page number) CREATE OR REPLACE TABLE cymbal pets . map manual to chunks AS SELECT ARRAY AGG ( m1 . ref ) [ 0 ] manual , ARRAY AGG ( m2 . ref ORDER BY m2 . ref . uri ) chunks FROM cymbal pets . product manuals m1 JOIN cymbal pets . product manuals m2 ON REGEXP EXTRACT ( m1 . uri , r '. /([^.] ).[^/]+' ) = REGEXP EXTRACT ( m2 . uri , r '. /([^.] ) page[0-9]+.[^/]+' ) GROUP BY m1 . uri ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . df prompt = bbq . obj . get access url ( df products mm [ "image" ], "R" ) . to frame () df prompt [ "prompt0" ] = "For the image of a pet product, concisely generate the following metadata: 1) animal type and 2) 5 SEO search keywords, and 3) product subcategory." df products mm [ "prompt" ] = bbq . struct ( df prompt [[ "prompt0" , "image" ]]) df products mm = df products mm . drop ( columns = [ "animal type" , "search keywords" , "subcategory" ] ) df products mm = bbq . ai . generate table ( gemini model , df products mm , output schema = "animal type STRING, search keywords ARRAY<STRING>, subcategory STRING" , ) Run the following to view the generated data: SQL SELECT product name , image description , animal type , search keywords , subcategory , FROM cymbal pets . products mm ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now use BigQuery DataFrames version 2.0 , which makes security and performance improvements to the BigQuery DataFrames API, adds new features, and introduces breaking changes.
- Use generative AI to analyze multimodal data and generate embeddings by using BigQuery ML SQL functions or BigQuery DataFrames methods with Gemini and multimodal embedding models.
- May 21, 2025 Change You can now perform supervised tuning on a BigQuery ML remote model based on a Vertex AI gemini-2.0-flash-001 or gemini-2.0-flash-lite-001 model.
- Feature You can now use BigQuery and BigQuery DataFrames to enable multimodal analysis, transformation, and data engineering (ELT) workflows in both SQL and Python.

### Create an ML model in BigQuery ML by using SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- PREDICT ( MODEL bqml tutorial.sample model , ( SELECT IFNULL ( device . operatingSystem , "" ) AS os , device . isMobile AS is mobile , IFNULL ( totals . pageviews , 0 ) AS pageviews , IFNULL ( geoNetwork . country , "" ) AS country , fullVisitorId FROM bigquery-public-data.google analytics sample.ga sessions WHERE TABLE SUFFIX BETWEEN '20170701' AND '20170801' )) GROUP BY fullVisitorId ORDER BY total predicted purchases DESC LIMIT 10 The results should look like the following: +---------------------+---------------------------+ fullVisitorId total predicted purchases +---------------------+---------------------------+ 9417857471295131045 4 112288330928895942 2 2158257269735455737 2 489038402765684003 2 057693500927581077 2 2969418676126258798 2 5073919761051630191 2 7420300501523012460 2 0456807427403774085 2 2105122376016897629 2 +---------------------+---------------------------+ BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- To calculate logistic regression specific metrics, you can use the ML.ROC CURVE SQL function or the bigframes.ml.metrics.roc curve BigQuery DataFrames function .
- BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

