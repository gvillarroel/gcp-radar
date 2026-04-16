---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.938Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CSV chunked import"
feature_slug: "csv-chunked-import"
latest_feature_date: "2012-08-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery"
keywords:
  - "csv"
  - "chunked"
  - "import"
  - "lets"
  - "bigquery"
  - "process"
  - "imports"
  - "parallel"
---

# CSV chunked import

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

CSV chunked import lets BigQuery process CSV imports in parallel when quoted newlines are disabled.

## Extended Definition

CSV chunked import lets BigQuery process CSV imports in parallel when quoted newlines are disabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery](https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Partner references BigQuery Export Integration BigQuery Import Integration BigQuery Version 2 Export Partner Advantage page Direct link Union.ai Solution Union AI orchestrator Category BI, ML, & Advanced Analytics Description The Union platform empowers AI development teams to rapidly ship high-quality code to production by offering optimized performance, unparalleled resource efficiency, and a delightful workflow authoring experience.
- Partner references Behavioral data for BigQuery BigQuery Loader Measure the latency of your data in BigQuery Debugging bad data in Google Cloud with BigQuery Partner Advantage page Direct link Starburst Data Solution Starburst Galaxy Category BI, ML, & Advanced Analytics Description Starburst Galaxy is the cloud-born and fully-managed service of the Starburst massively parallel processing (MPP) and highly-performant query engine.
- Partner references Import BigQuery Data into Amplitude Export data to BigQuery AskYourDatabase Solution AskYourDatabase Category BI, ML, & Advanced Analytics Description AskYourDatabase is an AI-powered tool that lets users ask questions in plain English and get instant answers from their database.
- It lets users ingest, join, and analyze streaming data with the same ease as a traditional database, offering seamless integration to sink processed data into BigQuery for long-term storage and analysis.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- CREATE OR REPLACE FUNCTION cymbal pets . chunk pdf ( src json STRING , chunk size INT64 , overlap size INT64 ) RETURNS ARRAY<STRING > LANGUAGE python WITH CONNECTION us.cymbal conn OPTIONS ( entry point = 'chunk pdf' , runtime version = 'python-3.11' , packages =[ 'pypdf' ] ) AS " "" import io import json from pypdf import PdfReader # type: ignore from urllib.request import urlopen, Request def chunk pdf(src ref: str, chunk size: int, overlap size: int) -> str: src json = json.loads(src ref) srcUrl = src json[" access urls "][" read url "] req = urlopen(srcUrl) pdf file = io.BytesIO(bytearray(req.read())) reader = PdfReader(pdf file, strict=False) extract and chunk text simultaneously all text chunks = [] curr chunk = "" for page in reader.pages: page text = page.extract text() if page text: curr chunk += page text split the accumulated text into chunks of a specific size with overlaop this loop implements a sliding window approach to create chunks while len(curr chunk) >= chunk size: split idx = curr chunk.rfind(" ", 0, chunk size) if split idx == -1: split idx = chunk size actual chunk = curr chunk[:split idx] all text chunks.append(actual chunk) overlap = curr chunk[split idx + 1 : split idx + 1 + overlap size] curr chunk = overlap + curr chunk[split idx + 1 + overlap size :] if curr chunk: all text chunks.append(curr chunk) return all text chunks "" " ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Run the following to create the to grayscale UDF: SQL CREATE OR REPLACE FUNCTION cymbal pets . to grayscale ( src json STRING , dst json STRING ) RETURNS STRING LANGUAGE python WITH CONNECTION us.cymbal conn OPTIONS ( entry point = 'to grayscale' , runtime version = 'python-3.11' , packages =[ 'numpy' , 'opencv-python' ] ) AS " "" import cv2 as cv import numpy as np from urllib.request import urlopen, Request import json Transform the image to grayscale. def to grayscale(src ref, dst ref): src json = json.loads(src ref) srcUrl = src json[" access urls "][" read url "] dst json = json.loads(dst ref) dstUrl = dst json[" access urls "][" write url "] req = urlopen(srcUrl) arr = np.asarray(bytearray(req.read()), dtype=np.uint8) img = cv.imdecode(arr, -1) # 'Load it as it is' Convert the image to grayscale gray image = cv.cvtColor(img, cv.COLOR BGR2GRAY) Send POST request to the URL , img encoded = cv.imencode('.png', gray image) req = Request(url=dstUrl, data=img encoded.tobytes(), method='PUT', headers = { " Content - Type ": " image / png ", }) with urlopen(req) as f: pass return dst ref "" " ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . import bigframes.bigquery as bbq import bigframes.pandas as bpd bbq . load data ( "cymbal pets.products" , write disposition = "OVERWRITE" , from files options = { "format" : "avro" , "uris" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/tables/products/products .avro" ], }, ) Create the product images table Create an object table that contains the Cymbal pets product images: Run the following to create the product images table: SQL CREATE OR REPLACE EXTERNAL TABLE cymbal pets . product images WITH CONNECTION us.cymbal conn OPTIONS ( object metadata = 'SIMPLE' , uris = [ 'gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/images/ .png' ] , max staleness = INTERVAL 30 MINUTE , metadata cache mode = AUTOMATIC ); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . @bpd . udf ( dataset = "cymbal pets" , name = "to grayscale" , packages = [ "numpy" , "opencv-python" ], bigquery connection = "us.cymbal conn" , max batching rows = 1 , ) def to grayscale ( src ref : str , dst ref : str ) - > str : import json from urllib.request import Request , urlopen import cv2 as cv import numpy as np src json = json . loads ( src ref ) srcUrl = src json [ "access urls" ][ "read url" ] dst json = json . loads ( dst ref ) dstUrl = dst json [ "access urls" ][ "write url" ] req = urlopen ( srcUrl ) arr = np . asarray ( bytearray ( req . read ()), dtype = np . uint8 ) img = cv . imdecode ( arr , - 1 ) # 'Load it as it is' Convert the image to grayscale gray image = cv . cvtColor ( img , cv .

### Continuous data integration in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery](https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Use BigQuery sharing BigQuery sharing (formerly Analytics Hub) lets you share datasets both outside and inside the organization in a way that's designed to be secure.
- For an example of a script that can help automate the processes, see the CI for Data in BigQuery CLI utility GitHub repository.
- Having this snapshot lets you perform a rollback in case an issue is detected later in the process.
- This workflow involves legacy data import processes, acquired databases, and application services.

