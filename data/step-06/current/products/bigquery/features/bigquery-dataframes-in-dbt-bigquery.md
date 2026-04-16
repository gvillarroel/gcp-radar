---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.343Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery DataFrames in dbt-bigquery"
feature_slug: "bigquery-dataframes-in-dbt-bigquery"
latest_feature_date: "2025-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/pandas-gbq-migration"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
keywords:
  - "bigquery"
  - "dataframes"
  - "dbt"
  - "adapter"
  - "can"
  - "run"
  - "python"
  - "code"
---

# BigQuery DataFrames in dbt-bigquery

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The dbt-bigquery adapter can run Python code defined in BigQuery DataFrames.

## Extended Definition

The dbt-bigquery adapter can run Python code defined in BigQuery DataFrames.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/pandas-gbq-migration](https://docs.cloud.google.com/bigquery/docs/pandas-gbq-migration)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)

## Supporting Pages

### Use open source Python libraries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/pandas-gbq-migration](https://docs.cloud.google.com/bigquery/docs/pandas-gbq-migration)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: client = bigquery.Client () adapter = requests.adapters.HTTPAdapter ( pool connections = 128 , pool maxsize = 128 ,max retries = 3 ) client. http.mount ( "https://" ,adapter ) client. http. auth request.session.mount ( "https://" ,adapter ) query job = client.query ( QUERY ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information, see Introduction to BigQuery DataFrames . pandas-gbq Python based data processing using client side data copy Open source library maintained by PyData and volunteer contributors Lets you move data to and from Python DataFrames on the client side.
- For more information, see the documentation and source code . google-cloud-bigquery BigQuery deployment, administration, and SQL-based querying Open source library maintained by Google Python package that wraps all the BigQuery APIs.
- Use case Maintained by Description BigQuery DataFrames Python based data processing and ML operations with server-side processing (for example, using slots) Google Pandas and scikit-learn APIs implemented with server-side pushdown.

### "Deploy and apply a remote function using BigQuery DataFrames \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)
- Source ID: `site-docs-reference-required-15`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The BigQuery remote function created to support the BigQuery DataFrames remote function can be located via a property bigframes remote function set in the remote function object. print ( f "Created BQ remote function: { get bucket . bigframes remote function } " ) The cloud function can be located via another property bigframes cloud function set in the remote function object. print ( f "Created cloud function: { get bucket . bigframes cloud function } " ) Warning: The deployed cloud function may be visible to other users with sufficient privilege in the project, so the user should be careful about having any sensitive data in the code that will be deployed as a remote function.
- Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Use the BigQuery DataFrames API to deploy a Python function as a Cloud Function and use it as a remote function.
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Set BigQuery DataFrames options bpd . options . bigquery . project = your gcp project id bpd . options . bigquery . location = "US" BigQuery DataFrames gives you the ability to turn your custom scalar functions into a BigQuery remote function.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Run the following to create the to grayscale UDF: SQL CREATE OR REPLACE FUNCTION cymbal pets . to grayscale ( src json STRING , dst json STRING ) RETURNS STRING LANGUAGE python WITH CONNECTION us.cymbal conn OPTIONS ( entry point = 'to grayscale' , runtime version = 'python-3.11' , packages =[ 'numpy' , 'opencv-python' ] ) AS " "" import cv2 as cv import numpy as np from urllib.request import urlopen, Request import json Transform the image to grayscale. def to grayscale(src ref, dst ref): src json = json.loads(src ref) srcUrl = src json[" access urls "][" read url "] dst json = json.loads(dst ref) dstUrl = dst json[" access urls "][" write url "] req = urlopen(srcUrl) arr = np.asarray(bytearray(req.read()), dtype=np.uint8) img = cv.imdecode(arr, -1) # 'Load it as it is' Convert the image to grayscale gray image = cv.cvtColor(img, cv.COLOR BGR2GRAY) Send POST request to the URL , img encoded = cv.imencode('.png', gray image) req = Request(url=dstUrl, data=img encoded.tobytes(), method='PUT', headers = { " Content - Type ": " image / png ", }) with urlopen(req) as f: pass return dst ref "" " ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- CREATE OR REPLACE FUNCTION cymbal pets . chunk pdf ( src json STRING , chunk size INT64 , overlap size INT64 ) RETURNS ARRAY<STRING > LANGUAGE python WITH CONNECTION us.cymbal conn OPTIONS ( entry point = 'chunk pdf' , runtime version = 'python-3.11' , packages =[ 'pypdf' ] ) AS " "" import io import json from pypdf import PdfReader # type: ignore from urllib.request import urlopen, Request def chunk pdf(src ref: str, chunk size: int, overlap size: int) -> str: src json = json.loads(src ref) srcUrl = src json[" access urls "][" read url "] req = urlopen(srcUrl) pdf file = io.BytesIO(bytearray(req.read())) reader = PdfReader(pdf file, strict=False) extract and chunk text simultaneously all text chunks = [] curr chunk = "" for page in reader.pages: page text = page.extract text() if page text: curr chunk += page text split the accumulated text into chunks of a specific size with overlaop this loop implements a sliding window approach to create chunks while len(curr chunk) >= chunk size: split idx = curr chunk.rfind(" ", 0, chunk size) if split idx == -1: split idx = chunk size actual chunk = curr chunk[:split idx] all text chunks.append(actual chunk) overlap = curr chunk[split idx + 1 : split idx + 1 + overlap size] curr chunk = overlap + curr chunk[split idx + 1 + overlap size :] if curr chunk: all text chunks.append(curr chunk) return all text chunks "" " ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . @bpd . udf ( dataset = "cymbal pets" , name = "to grayscale" , packages = [ "numpy" , "opencv-python" ], bigquery connection = "us.cymbal conn" , max batching rows = 1 , ) def to grayscale ( src ref : str , dst ref : str ) - > str : import json from urllib.request import Request , urlopen import cv2 as cv import numpy as np src json = json . loads ( src ref ) srcUrl = src json [ "access urls" ][ "read url" ] dst json = json . loads ( dst ref ) dstUrl = dst json [ "access urls" ][ "write url" ] req = urlopen ( srcUrl ) arr = np . asarray ( bytearray ( req . read ()), dtype = np . uint8 ) img = cv . imdecode ( arr , - 1 ) # 'Load it as it is' Convert the image to grayscale gray image = cv . cvtColor ( img , cv .
- For more information, see Set up ADC for a local development environment . bbq . create external table ( "cymbal pets.product manuals all" , replace = True , connection name = "us.cymbal conn" , options = { "object metadata" : "SIMPLE" , "uris" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/documents/ .pdf" , "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/document chunks/ .pdf" , ], }, ) Run the following to write PDF data to the map manual to chunks table: SQL -- Extract the file and chunks into a single table. -- Store the chunks in the chunks column as array of ObjectRefs (ordered by page number) CREATE OR REPLACE TABLE cymbal pets . map manual to chunks AS SELECT ARRAY AGG ( m1 . ref ) [ 0 ] manual , ARRAY AGG ( m2 . ref ORDER BY m2 . ref . uri ) chunks FROM cymbal pets . product manuals m1 JOIN cymbal pets . product manuals m2 ON REGEXP EXTRACT ( m1 . uri , r '. /([^.] ).[^/]+' ) = REGEXP EXTRACT ( m2 . uri , r '. /([^.] ) page[0-9]+.[^/]+' ) GROUP BY m1 . uri ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

