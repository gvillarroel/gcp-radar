---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.473Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery DataFrames"
feature_slug: "bigquery-dataframes"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/pandas-gbq-migration"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/libraries"
keywords:
  - "bigquery"
  - "dataframes"
  - "open"
  - "source"
  - "python"
  - "library"
  - "set"
  - "implements"
---

# BigQuery DataFrames

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery DataFrames is an open source Python library set that implements pandas and scikit-learn APIs with server-side processing; BigQuery DataFrames is a Python API for data analysis and machine learning in BigQuery.

## Extended Definition

BigQuery DataFrames is an open source Python library set that implements pandas and scikit-learn APIs with server-side processing; BigQuery DataFrames is a Python API for data analysis and machine learning in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/pandas-gbq-migration](https://docs.cloud.google.com/bigquery/docs/pandas-gbq-migration)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/libraries](https://docs.cloud.google.com/bigquery/docs/reference/libraries)

## Supporting Pages

### Use open source Python libraries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/pandas-gbq-migration](https://docs.cloud.google.com/bigquery/docs/pandas-gbq-migration)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Introduction to BigQuery DataFrames . pandas-gbq Python based data processing using client side data copy Open source library maintained by PyData and volunteer contributors Lets you move data to and from Python DataFrames on the client side.
- For more information, see the documentation and source code . google-cloud-bigquery BigQuery deployment, administration, and SQL-based querying Open source library maintained by Google Python package that wraps all the BigQuery APIs.
- Use open source Python libraries You can choose from among three Python libraries in BigQuery, based on your use case.
- SchemaField ( "my string" , "STRING" ), ] ) job = client . load table from dataframe ( df , table id , job config = job config ) Wait for the load job to complete. job . result () Features not supported by pandas-gbq While the pandas-gbq library provides a useful interface for querying data and writing data to tables, it does not cover many of the BigQuery API features, including but not limited to: Managing datasets , including creating new datasets , updating dataset properties , and deleting datasets Loading data into BigQuery from formats other than pandas DataFrames or from pandas DataFrames with JSON columns Managing tables , including listing tables in a dataset , copying table data , and deleting tables Exporting BigQuery data directly to Cloud Storage Troubleshooting connection pool errors Error string: Connection pool is full, discarding connection: bigquery.googleapis.com.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CREATE OR REPLACE FUNCTION cymbal pets . chunk pdf ( src json STRING , chunk size INT64 , overlap size INT64 ) RETURNS ARRAY<STRING > LANGUAGE python WITH CONNECTION us.cymbal conn OPTIONS ( entry point = 'chunk pdf' , runtime version = 'python-3.11' , packages =[ 'pypdf' ] ) AS " "" import io import json from pypdf import PdfReader # type: ignore from urllib.request import urlopen, Request def chunk pdf(src ref: str, chunk size: int, overlap size: int) -> str: src json = json.loads(src ref) srcUrl = src json[" access urls "][" read url "] req = urlopen(srcUrl) pdf file = io.BytesIO(bytearray(req.read())) reader = PdfReader(pdf file, strict=False) extract and chunk text simultaneously all text chunks = [] curr chunk = "" for page in reader.pages: page text = page.extract text() if page text: curr chunk += page text split the accumulated text into chunks of a specific size with overlaop this loop implements a sliding window approach to create chunks while len(curr chunk) >= chunk size: split idx = curr chunk.rfind(" ", 0, chunk size) if split idx == -1: split idx = chunk size actual chunk = curr chunk[:split idx] all text chunks.append(actual chunk) overlap = curr chunk[split idx + 1 : split idx + 1 + overlap size] curr chunk = overlap + curr chunk[split idx + 1 + overlap size :] if curr chunk: all text chunks.append(curr chunk) return all text chunks "" " ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Run the following to create the to grayscale UDF: SQL CREATE OR REPLACE FUNCTION cymbal pets . to grayscale ( src json STRING , dst json STRING ) RETURNS STRING LANGUAGE python WITH CONNECTION us.cymbal conn OPTIONS ( entry point = 'to grayscale' , runtime version = 'python-3.11' , packages =[ 'numpy' , 'opencv-python' ] ) AS " "" import cv2 as cv import numpy as np from urllib.request import urlopen, Request import json Transform the image to grayscale. def to grayscale(src ref, dst ref): src json = json.loads(src ref) srcUrl = src json[" access urls "][" read url "] dst json = json.loads(dst ref) dstUrl = dst json[" access urls "][" write url "] req = urlopen(srcUrl) arr = np.asarray(bytearray(req.read()), dtype=np.uint8) img = cv.imdecode(arr, -1) # 'Load it as it is' Convert the image to grayscale gray image = cv.cvtColor(img, cv.COLOR BGR2GRAY) Send POST request to the URL , img encoded = cv.imencode('.png', gray image) req = Request(url=dstUrl, data=img encoded.tobytes(), method='PUT', headers = { " Content - Type ": " image / png ", }) with urlopen(req) as f: pass return dst ref "" " ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . @bpd . udf ( dataset = "cymbal pets" , name = "to grayscale" , packages = [ "numpy" , "opencv-python" ], bigquery connection = "us.cymbal conn" , max batching rows = 1 , ) def to grayscale ( src ref : str , dst ref : str ) - > str : import json from urllib.request import Request , urlopen import cv2 as cv import numpy as np src json = json . loads ( src ref ) srcUrl = src json [ "access urls" ][ "read url" ] dst json = json . loads ( dst ref ) dstUrl = dst json [ "access urls" ][ "write url" ] req = urlopen ( srcUrl ) arr = np . asarray ( bytearray ( req . read ()), dtype = np . uint8 ) img = cv . imdecode ( arr , - 1 ) # 'Load it as it is' Convert the image to grayscale gray image = cv . cvtColor ( img , cv .
- The Python UDF uses open source libraries, and also uses parallel execution to transform multiple images simultaneously.

### BigQuery API Client Libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/libraries](https://docs.cloud.google.com/bigquery/docs/reference/libraries)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Client () query = """ SELECT name, SUM(number) as total people FROM bigquery-public-data.usa names.usa 1910 2013 WHERE state = 'TX' GROUP BY name, state ORDER BY total people DESC LIMIT 20 """ rows = client . query and wait ( query ) # Make an API request. print ( "The query data:" ) for row in rows : Row values can be accessed by field name or index. print ( "name= {} , count= {} " . format ( row [ 0 ], row [ "total people" ])) Ruby require "google/cloud/bigquery" def query bigquery = Google :: Cloud :: Bigquery . new sql = "SELECT name FROM bigquery-public-data.usa names.usa 1910 2013 " \ "WHERE state = 'TX' " \ "LIMIT 100" Location must match that of the dataset(s) referenced in the query. results = bigquery . query sql do config config . location = "US" end results . each do row puts row . inspect end end Additional resources C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code BigQuery DataFrames (BigFrames) BigQuery DataFrames is a pythonic DataFrame and machine learning (ML) API powered by the BigQuery engine.
- See https : //github.com/GoogleCloudPlatform/cloud-opensource-java/wiki/The-Google-Cloud-Platform-Libraries-BOM -- > < dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>libraries - bom < / artifactId > < version>26 .62.0 < / version > < type>pom < / type > < scope>import < / scope > < / dependency > < / dependencies > < / dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>google - cloud - bigquery < / artifactId > < / dependency > < / dependencies > If you are using Gradle , add the following to your dependencies: implementation platform ( ' com . google . cloud : libraries - bom : 26.45.0 ' ) implementation ' com . google . cloud : google - cloud - bigquery ' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-bigquery" % "2.42.2" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.
- To get started with BigQuery DataFrames, install the library: pip install --upgrade bigframes The following example shows how to initialize BigQuery DataFrames and perform a simple query. import bigframes . pandas as bpd Set BigQuery DataFrames options Note: The project option is not required in all environments.
- Language Library Python pandas-gbq ( usage guide ), ibis ( tutorial ) R bigrquery , BigQueryR Scala spark-bigquery-connector What's next?

