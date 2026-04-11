---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.928Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Standard SQL URL functions"
feature_slug: "bigquery-standard-sql-url-functions"
latest_feature_date: "2016-12-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
keywords:
  - "URL host parsing"
  - "NET.URL_DECODE"
  - "NET.URL_ENCODE"
  - "PARSE_URL"
  - "BigQuery URL functions"
  - "URL functions"
  - "URL_*"
  - "NET."
---

# BigQuery Standard SQL URL functions

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL introduced URL-related functions.

## Extended Definition

BigQuery Standard SQL introduced URL-related functions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)

## Supporting Pages

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: Any URL-related entries appear only as function names in the broader catalog, without the implementation or behavior detail needed to define URL-function feature changes.

Evidence snippets:
- NET.REG DOMAIN Gets the registered or registrable domain from a URL.
- NET.PUBLIC SUFFIX Gets the public suffix from a URL.
- NET.HOST Gets the hostname from a URL.
- NET.SAFE IP FROM STRING Similar to the NET.IP FROM STRING , but returns NULL instead of producing an error if the input is invalid.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Example: match tables whose names contain "oo" and have a length greater than 4 This example assumes the following tables exist: mydata.boo mydata.fork mydata.ooze mydata.spoon legacySQL SELECT speed FROM ( TABLE QUERY ([ myproject - 1234 : mydata ], 'table id CONTAINS "oo" AND length(table id) >= 4' )) Matches the following tables: mydata.ooze mydata.spoon Example: match tables whose names start with "boo", followed by 3-5 numeric digits This example assumes the following tables exist in a project named myproject-1234 : mydata.book4 mydata.book418 mydata.boom12345 mydata.boom123456789 mydata.taboo999 legacySQL SELECT speed FROM TABLE QUERY ([ myproject - 1234 : mydata ], 'REGEXP MATCH(table id, r"^boo[\d]{3,5}")' ) Matches the following tables: mydata.book418 mydata.boom12345 URL functions Syntax URL functions HOST() Given a URL, returns the host name as a string.
- URL functions HOST() Given a URL, returns the host name as a string.
- Example This example performs a scoped COUNT aggregation and then filters and sorts the records by the aggregated value. legacySQL SELECT repository . url , COUNT ( payload . pages . page name ) WITHIN RECORD AS page count FROM [ bigquery - public - data : samples . github nested ] HAVING page count > 80 ORDER BY page count DESC ; FROM clause FROM [project name:]datasetId.tableId [ [ AS ] alias ] ( subquery ) [ [ AS ] alias ] JOIN clause FLATTEN clause table wildcard function The FROM clause specifies the source data to be queried.
- Example Referring back to the example used for the WITHIN modifier, OMIT RECORD IF can be used to accomplish the same thing WITHIN and HAVING were used to do in that example. legacySQL SELECT repository . url FROM [ bigquery - public - data : samples . github nested ] OMIT RECORD IF COUNT ( payload . pages . page name ) < = 80 ; GROUP BY clause The GROUP BY clause lets you group rows that have the same values for a given field or set of fields so that you can compute aggregations of related fields.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . df grayscale = df products mm [[ "product id" , "product name" , "image" ]] df grayscale [ "gray image uri" ] = f "gs:// { BUCKET } /cymbal-pets-images/grayscale/" + df grayscale [ "image" ] . struct . field ( "uri" ) . str . extract ( r "([^/]+)$" ) df grayscale [ "gray image" ] = bbq . obj . make ref ( df grayscale [ "gray image uri" ], "us.cymbal conn" ) df grayscale [ "image url" ] = bbq . to json string ( bbq . obj . get access url ( df grayscale [ "image" ], "r" ) ) df grayscale [ "gray image url" ] = bbq . to json string ( bbq . obj . get access url ( df grayscale [ "gray image" ], "rw" ) ) df grayscale [[ "image url" , "gray image url" ]] . apply ( to grayscale , axis = 1 ) The results look similar to the following: +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ f0 +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ {"access urls":{"expiry time":"2025-04-26T03:00:48Z", "read url":"https://storage.googleapis.com/mybucket/cymbal-pets-images%2Fgrayscale%2Focean-bites-salmon-%26-tuna-cat-food.png?additional read URL information", "write url":"https://storage.googleapis.com/myproject/cymbal-pets-images%2Fgrayscale%2Focean-bites-salmon-%26-tuna-cat-food.png?additional write URL information"}, "objectref":{"authorizer":"myproject.region.myconnection","uri":"gs://myproject/cymbal-pets-images/grayscale/ocean-bites-salmon-&-tuna-cat-food.png"}} +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ {"access urls":{"expiry time":"2025-04-26T03:00:48Z", "read url":"https://storage.googleapis.com/mybucket/cymbal-pets-images%2Fgrayscale%2Ffluffy-buns-guinea-pig-tunnel.png?additional read URL information", "write url":"https://storage.googleapis.com/myproject/cymbal-pets-images%2Fgrayscale%2Focean-bites-salmon-%26-tuna-cat-food.png?additional write URL information"}, "objectref":{"authorizer":"myproject.region.myconnection","uri":"gs://myproject/cymbal-pets-images%2Fgrayscale%2Ffluffy-buns-guinea-pig-tunnel.png"}} +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ ... +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ Create a Python UDF to chunk PDF data Create a Python UDF to chunk the PDF objects that contain the Cymbal pets product manuals into multiple parts.
- DataFrame ( { "uri" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/images/cozy-naps-cat-scratching-post-with-condo.png" ] } ) . cache () df image [ "image" ] = bbq . obj . make ref ( df image [ "uri" ], "us.cymbal conn" ) df search = bbq . ai . generate embedding ( embedding model , bbq . obj . get access url ( bbq . obj . fetch metadata ( df image [ "image" ]), "R" ), ) search result = bbq . vector search ( "cymbal pets.products embedding" , "embedding" , df search [ "embedding" ] ) search result The results look similar to the following: +-----------------+-----------------+----------------+----------------------------------------------+--------------------+-------------------------------+------------------------------------------------+----------------+ query.embedding base.product id base.embedding base.image.uri base.image.version base.image.authorizer base.image.details distance +-----------------+-----------------+----------------+----------------------------------------------+--------------------+-------------------------------+------------------------------------------------+----------------+ -0.0112330541 181 -0.0112330541 gs://cloud-samples-data/bigquery/ 12345678910 myproject.region.myconnection {"gcs metadata":{"content type": 0.0 0.0142525584 0.0142525584 tutorials/cymbal-pets/images/ "image/png","md5 hash":"21234567hst16555w60j", 0.0135886827 0.0135886827 cozy-naps-cat-scratching-post-with-condo.png "size":828318,"updated":1742492688982000}} 0.0149955815 0.0149955815 ... ... +-----------------+-----------------+----------------+----------------------------------------------+--------------------+-------------------------------+------------------------------------------------+----------------+ -0.0112330541 187 -0.0190353896 gs://cloud-samples-data/bigquery/ 23456789101 myproject.region.myconnection {"gcs metadata":{"content type": 0.4216330832..
- CREATE OR REPLACE FUNCTION cymbal pets . chunk pdf ( src json STRING , chunk size INT64 , overlap size INT64 ) RETURNS ARRAY<STRING > LANGUAGE python WITH CONNECTION us.cymbal conn OPTIONS ( entry point = 'chunk pdf' , runtime version = 'python-3.11' , packages =[ 'pypdf' ] ) AS " "" import io import json from pypdf import PdfReader # type: ignore from urllib.request import urlopen, Request def chunk pdf(src ref: str, chunk size: int, overlap size: int) -> str: src json = json.loads(src ref) srcUrl = src json[" access urls "][" read url "] req = urlopen(srcUrl) pdf file = io.BytesIO(bytearray(req.read())) reader = PdfReader(pdf file, strict=False) extract and chunk text simultaneously all text chunks = [] curr chunk = "" for page in reader.pages: page text = page.extract text() if page text: curr chunk += page text split the accumulated text into chunks of a specific size with overlaop this loop implements a sliding window approach to create chunks while len(curr chunk) >= chunk size: split idx = curr chunk.rfind(" ", 0, chunk size) if split idx == -1: split idx = chunk size actual chunk = curr chunk[:split idx] all text chunks.append(actual chunk) overlap = curr chunk[split idx + 1 : split idx + 1 + overlap size] curr chunk = overlap + curr chunk[split idx + 1 + overlap size :] if curr chunk: all text chunks.append(curr chunk) return all text chunks "" " ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Run the following to create the to grayscale UDF: SQL CREATE OR REPLACE FUNCTION cymbal pets . to grayscale ( src json STRING , dst json STRING ) RETURNS STRING LANGUAGE python WITH CONNECTION us.cymbal conn OPTIONS ( entry point = 'to grayscale' , runtime version = 'python-3.11' , packages =[ 'numpy' , 'opencv-python' ] ) AS " "" import cv2 as cv import numpy as np from urllib.request import urlopen, Request import json Transform the image to grayscale. def to grayscale(src ref, dst ref): src json = json.loads(src ref) srcUrl = src json[" access urls "][" read url "] dst json = json.loads(dst ref) dstUrl = dst json[" access urls "][" write url "] req = urlopen(srcUrl) arr = np.asarray(bytearray(req.read()), dtype=np.uint8) img = cv.imdecode(arr, -1) # 'Load it as it is' Convert the image to grayscale gray image = cv.cvtColor(img, cv.COLOR BGR2GRAY) Send POST request to the URL , img encoded = cv.imencode('.png', gray image) req = Request(url=dstUrl, data=img encoded.tobytes(), method='PUT', headers = { " Content - Type ": " image / png ", }) with urlopen(req) as f: pass return dst ref "" " ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

