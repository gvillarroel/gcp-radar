---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.783Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery row-level security"
feature_slug: "bigquery-row-level-security"
latest_feature_date: "2021-06-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/v2"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
keywords:
  - "ALTER TABLE DROP ROW ACCESS POLICY"
  - "RLS"
  - "CREATE ROW ACCESS POLICY"
  - "row-level security"
  - "row access policies"
  - "row access policy"
  - "ROW ACCESS POLICY"
  - "row-level policy"
---

# BigQuery row-level security

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery adds generally available row-level security controls on table data.

## Extended Definition

BigQuery adds generally available row-level security controls on table data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/v2](https://docs.cloud.google.com/bigquery/docs/reference/v2)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Syntax DROP ROW ACCESS POLICY [ IF EXISTS ] row access policy name ON table name ; DROP ALL ROW ACCESS POLICIES ON table name ; Arguments IF EXISTS : If no row-level access policy exists with that name, the statement has no effect. row access policy name : The name of the row-level access policy that you are deleting.
- Examples Delete a row-level access policy from a table: DROP ROW ACCESS POLICY my row filter ON project . dataset . my table ; Delete all the row-level access policies from a table: DROP ALL ROW ACCESS POLICIES ON project . dataset . my table ; DROP CAPACITY statement Deletes a capacity commitment.
- SelectFromTablesAndAppend ( CURRENT DATE (), rows added ); SELECT FORMAT ( 'Added %d rows' , rows added ); CREATE ROW ACCESS POLICY statement Creates or replaces a row-level access policy .
- Existing table ACLs and row access policies are preserved, but table ACL and row access policy updates made during the table rename are not preserved.

### BigQuery API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/v2](https://docs.cloud.google.com/bigquery/docs/reference/v2)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v2.rowAccessPolicies Methods batchDelete POST /bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/rowAccessPolicies:batchDelete Deletes provided row access policies. delete DELETE /bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/rowAccessPolicies/{policyId} Deletes a row access policy. get GET /bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/rowAccessPolicies/{policyId} Gets the specified row access policy by policy ID. getIamPolicy POST /bigquery/v2/{resource=projects/ /datasets/ /tables/ /rowAccessPolicies/ }:getIamPolicy Gets the access control policy for a resource. insert POST /bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/rowAccessPolicies Creates a row access policy. list GET /bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/rowAccessPolicies Lists all row access policies on the specified table. testIamPermissions POST /bigquery/v2/{resource=projects/ /datasets/ /tables/ /rowAccessPolicies/ }:testIamPermissions Returns permissions that a caller has on the specified resource. update PUT /bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/rowAccessPolicies/{policyId} Updates a row access policy.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . df grayscale = df products mm [[ "product id" , "product name" , "image" ]] df grayscale [ "gray image uri" ] = f "gs:// { BUCKET } /cymbal-pets-images/grayscale/" + df grayscale [ "image" ] . struct . field ( "uri" ) . str . extract ( r "([^/]+)$" ) df grayscale [ "gray image" ] = bbq . obj . make ref ( df grayscale [ "gray image uri" ], "us.cymbal conn" ) df grayscale [ "image url" ] = bbq . to json string ( bbq . obj . get access url ( df grayscale [ "image" ], "r" ) ) df grayscale [ "gray image url" ] = bbq . to json string ( bbq . obj . get access url ( df grayscale [ "gray image" ], "rw" ) ) df grayscale [[ "image url" , "gray image url" ]] . apply ( to grayscale , axis = 1 ) The results look similar to the following: +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ f0 +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ {"access urls":{"expiry time":"2025-04-26T03:00:48Z", "read url":"https://storage.googleapis.com/mybucket/cymbal-pets-images%2Fgrayscale%2Focean-bites-salmon-%26-tuna-cat-food.png?additional read URL information", "write url":"https://storage.googleapis.com/myproject/cymbal-pets-images%2Fgrayscale%2Focean-bites-salmon-%26-tuna-cat-food.png?additional write URL information"}, "objectref":{"authorizer":"myproject.region.myconnection","uri":"gs://myproject/cymbal-pets-images/grayscale/ocean-bites-salmon-&-tuna-cat-food.png"}} +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ {"access urls":{"expiry time":"2025-04-26T03:00:48Z", "read url":"https://storage.googleapis.com/mybucket/cymbal-pets-images%2Fgrayscale%2Ffluffy-buns-guinea-pig-tunnel.png?additional read URL information", "write url":"https://storage.googleapis.com/myproject/cymbal-pets-images%2Fgrayscale%2Focean-bites-salmon-%26-tuna-cat-food.png?additional write URL information"}, "objectref":{"authorizer":"myproject.region.myconnection","uri":"gs://myproject/cymbal-pets-images%2Fgrayscale%2Ffluffy-buns-guinea-pig-tunnel.png"}} +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ ... +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ Create a Python UDF to chunk PDF data Create a Python UDF to chunk the PDF objects that contain the Cymbal pets product manuals into multiple parts.
- CREATE OR REPLACE FUNCTION cymbal pets . chunk pdf ( src json STRING , chunk size INT64 , overlap size INT64 ) RETURNS ARRAY<STRING > LANGUAGE python WITH CONNECTION us.cymbal conn OPTIONS ( entry point = 'chunk pdf' , runtime version = 'python-3.11' , packages =[ 'pypdf' ] ) AS " "" import io import json from pypdf import PdfReader # type: ignore from urllib.request import urlopen, Request def chunk pdf(src ref: str, chunk size: int, overlap size: int) -> str: src json = json.loads(src ref) srcUrl = src json[" access urls "][" read url "] req = urlopen(srcUrl) pdf file = io.BytesIO(bytearray(req.read())) reader = PdfReader(pdf file, strict=False) extract and chunk text simultaneously all text chunks = [] curr chunk = "" for page in reader.pages: page text = page.extract text() if page text: curr chunk += page text split the accumulated text into chunks of a specific size with overlaop this loop implements a sliding window approach to create chunks while len(curr chunk) >= chunk size: split idx = curr chunk.rfind(" ", 0, chunk size) if split idx == -1: split idx = chunk size actual chunk = curr chunk[:split idx] all text chunks.append(actual chunk) overlap = curr chunk[split idx + 1 : split idx + 1 + overlap size] curr chunk = overlap + curr chunk[split idx + 1 + overlap size :] if curr chunk: all text chunks.append(curr chunk) return all text chunks "" " ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Run the following to create the to grayscale UDF: SQL CREATE OR REPLACE FUNCTION cymbal pets . to grayscale ( src json STRING , dst json STRING ) RETURNS STRING LANGUAGE python WITH CONNECTION us.cymbal conn OPTIONS ( entry point = 'to grayscale' , runtime version = 'python-3.11' , packages =[ 'numpy' , 'opencv-python' ] ) AS " "" import cv2 as cv import numpy as np from urllib.request import urlopen, Request import json Transform the image to grayscale. def to grayscale(src ref, dst ref): src json = json.loads(src ref) srcUrl = src json[" access urls "][" read url "] dst json = json.loads(dst ref) dstUrl = dst json[" access urls "][" write url "] req = urlopen(srcUrl) arr = np.asarray(bytearray(req.read()), dtype=np.uint8) img = cv.imdecode(arr, -1) # 'Load it as it is' Convert the image to grayscale gray image = cv.cvtColor(img, cv.COLOR BGR2GRAY) Send POST request to the URL , img encoded = cv.imencode('.png', gray image) req = Request(url=dstUrl, data=img encoded.tobytes(), method='PUT', headers = { " Content - Type ": " image / png ", }) with urlopen(req) as f: pass return dst ref "" " ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . @bpd . udf ( dataset = "cymbal pets" , name = "to grayscale" , packages = [ "numpy" , "opencv-python" ], bigquery connection = "us.cymbal conn" , max batching rows = 1 , ) def to grayscale ( src ref : str , dst ref : str ) - > str : import json from urllib.request import Request , urlopen import cv2 as cv import numpy as np src json = json . loads ( src ref ) srcUrl = src json [ "access urls" ][ "read url" ] dst json = json . loads ( dst ref ) dstUrl = dst json [ "access urls" ][ "write url" ] req = urlopen ( srcUrl ) arr = np . asarray ( bytearray ( req . read ()), dtype = np . uint8 ) img = cv . imdecode ( arr , - 1 ) # 'Load it as it is' Convert the image to grayscale gray image = cv . cvtColor ( img , cv .

