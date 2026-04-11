---
title: "Get Vertex AI text embeddings \_|\_ Spanner \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs/configure-fgac
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings
  title: "Get Vertex AI text embeddings \_|\_ Spanner \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Spanner
Guides
Send feedback
Get Vertex AI text embeddings
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use the Vertex AI text embedding
API to generate, store, and update text embeddings for data stored in
Spanner for GoogleSQL-dialect databases and PostgreSQL-dialect databases.
A text embedding is a vector representation of text data, and they are used in
many ways to find similar items. You interact with them every time you complete
a Google Search or see recommendations when shopping online.
When you create text embeddings, you get vector representations of natural text
as arrays of floating point numbers. This means that all of your input
text is assigned a numerical representation. By comparing the numerical distance
between the vector representations of two pieces of text, an application can
determine the similarity between the text or the objects represented by the
text.
With the Vertex AI text embeddings API, you can create a
text embedding with Generative AI . In
this tutorial, you use the Vertex AI text embedding model to
generate text embeddings for the data stored in Spanner.
To learn more about text embeddings and supported models, see
Get text embeddings .
Objective
In this tutorial, you learn how to:
Register a Vertex AI text embedding model
in a Spanner schema using DDL statements.
Reference the registered model using SQL queries to generate embeddings from
data stored in Spanner.
Pricing
This tutorial uses billable components of Google Cloud, including:
Spanner
Vertex AI
For more information about Spanner costs, see the
Spanner pricing page.
For more information about Vertex AI costs, see the
Vertex AI pricing page.
Generate and store text embeddings
Depending on the model you use, generating embeddings might take some time. For
more performance sensitive workloads, the best practice is to avoid generating
embeddings in read-write transactions. Instead, generate the embeddings in a
read-only transaction using the following SQL examples.
GoogleSQL
Register a text embeddings model in Spanner
In GoogleSQL, you must register a model before using it with
the ML.PREDICT function. To register the Vertex AI text
embedding model in a Spanner database,
execute the following DDL statement :
CREATE MODEL MODEL_NAME
INPUT (
content STRING ( MAX ),
-- Optional: For models that support specifying task type.
task_type STRING ( MAX ),
)
OUTPUT (
embeddings
STRUCT <
statistics STRUCT<truncated BOOL , token_count FLOAT64 > ,
values ARRAY<FLOAT64> >
)
REMOTE OPTIONS (
endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL_NAME '
);
Replace the following:
MODEL_NAME : the name of the Vertex AI text embedding model
PROJECT : the project hosting the Vertex AI endpoint
LOCATION : the location of the Vertex AI endpoint
Spanner grants appropriate permissions automatically. If it
doesn't, review the model endpoint access control .
Schema discovery and validation is not available for Generative AI
models. You are required to provide INPUT and OUTPUT clauses which match
against the models schema. For the full schema of the text embedding model,
see Get text embeddings .
Generate text embeddings
To generate embeddings, pass a piece of text directly to the
ML.PREDICT function using the following SQL:
SELECT embeddings . values
FROM ML . PREDICT (
MODEL MODEL_NAME ,
( SELECT "A product description" as content )
);
To generate embeddings for data stored in a table, use the following SQL:
SELECT id , embeddings . values
FROM ML . PREDICT (
MODEL MODEL_NAME ,
( SELECT id , description as content FROM Products )
);
To specify task type and output dimensions :
UPDATE Products p
SET description_embedding = (
SELECT embeddings . values
FROM ML . PREDICT (
MODEL MODEL_NAME ,
( SELECT p . description as content , "RETRIEVAL_DOCUMENT" as task_type ),
STRUCT ( 768 AS outputDimensionality )
));
SELECT p . product_id , p . name , p . description , COSINE_DISTANCE (
p . description_embedding ,
(
SELECT embeddings . values
FROM ML . PREDICT (
MODEL MODEL_NAME ,
( SELECT @ user_query as content , "RETRIEVAL_QUERY" as task_type ),
STRUCT ( 768 AS outputDimensionality )
)
)
) AS distance
FROM Products p
ORDER BY distance
LIMIT 5 ;
Store text embeddings
After generating the embeddings in a read-only transaction, store them in
Spanner so they can be managed with your operational data. To
store the embeddings, use a read-write transaction .
For workloads that are less performance sensitive, you can generate and insert
embeddings with the following SQL in a read-write transaction:
CREATE TABLE Products (
id INT64 NOT NULL ,
description STRING ( MAX ),
embeddings ARRAY<FLOAT32> ,
) PRIMARY KEY ( id );
INSERT INTO Products ( id , description , embeddings )
SELECT @ Id , @ Description , embeddings . values
FROM ML . PREDICT (
MODEL MODEL_NAME ,
( SELECT @ Description as content )
);
PostgreSQL
Generate text embeddings
To generate embeddings, pass a piece of text directly to the
spanner.ML_PREDICT_ROW function using the following SQL:
SELECT
spanner . ML_PREDICT_ROW (
'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL_NAME ' ,
'{"instances": [{"content": "A product description"}]}' :: jsonb
) - > 'predictions' - > 0 - > 'embeddings' - > 'values' ;
Replace the following:
PROJECT : the project hosting the Vertex AI endpoint
LOCATION : the location of the Vertex AI endpoint
MODEL_NAME : the name of the Vertex AI text embedding model
To generate embeddings for data stored in a table, use the following SQL:
SELECT id , spanner . ML_PREDICT_ROW (
'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL_NAME ' ,
JSONB_BUILD_OBJECT ( 'instances' , JSONB_BUILD_ARRAY ( JSONB_BUILD_OBJECT ( 'content' , description ))))
) - > 'predictions' - > 0 - > 'embeddings' - > 'values'
FROM Products ;
Replace the following:
PROJECT : the project hosting the Vertex AI endpoint
LOCATION : the location of the Vertex AI endpoint
MODEL_NAME : the name of the Vertex AI text embedding model
To specify task type and output dimensions :
UPDATE Products p
SET description_embedding = spanner . float64_array (
spanner . ML_PREDICT_ROW (
'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL_NAME ' ,
JSONB_BUILD_OBJECT (
'instances' , JSONB_BUILD_ARRAY (
JSONB_BUILD_OBJECT (
'content' , p . description ,
'task_type' , 'RETRIEVAL_DOCUMENT'
)
),
'parameters' , JSONB_BUILD_OBJECT ( 'outputDimensionality' , 768 )
)
) - > 'predictions' - > 0 - > 'embeddings' - > 'values'
);
SELECT p . product_id , p . name , p . description , spanner . COSINE_DISTANCE (
p . description_embedding ,
spanner . float64_array (
spanner . ML_PREDICT_ROW (
'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL_NAME ' ,
JSONB_BUILD_OBJECT (
'instances' , JSONB_BUILD_ARRAY (
JSONB_BUILD_OBJECT (
'content' , $ 1 ,
'task_type' , 'RETRIEVAL_QUERY'
)
),
'parameters' , JSONB_BUILD_OBJECT ( 'outputDimensionality' , 768 )
)
) - > 'predictions' - > 0 - > 'embeddings' - > 'values'
)
) AS distance
FROM Products p
ORDER BY distance
LIMIT 5 ;
Replace the following:
PROJECT : the project hosting the Vertex AI endpoint
LOCATION : the location of the Vertex AI endpoint
MODEL_NAME : the name of the Vertex AI text embedding model
Store text embeddings
After generating the embeddings in a read-only transaction, store them in
Spanner so they can be managed with your operational data. To
store the embeddings, use a read-write transaction .
For workloads that are less performance sensitive, you can generate and insert
embeddings with the following SQL in a read-write transaction:
CREATE TABLE Products (
id INT8 NOT NULL ,
description TEXT ,
embeddings REAL [],
PRIMARY KEY ( id )
);
INSERT INTO Products ( id , description , embeddings )
SELECT @ Id , @ Description , spanner . FLOAT32_ARRAY ( spanner . ML_PREDICT_ROW (
'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL_NAME ' ,
JSONB_BUILD_OBJECT ( 'instances' , JSONB_BUILD_ARRAY ( JSONB_BUILD_OBJECT ( 'content' , @ Description )))
) - > 'predictions' - > 0 - > 'embeddings' - > 'values'
));
Replace the following:
PROJECT : the project hosting the Vertex AI endpoint
LOCATION : the location of the Vertex AI endpoint
MODEL_NAME : the name of the Vertex AI text embedding model
Update text embeddings
To update your embeddings or to ingest data in realtime, use the UPDATE
( GoogleSQL
and PostgreSQL )
statement.
To update the Products table in the previous example, use the following SQL:
GoogleSQL
UPDATE Products
SET
description = @ description ,
embeddings = ( SELECT embeddings . values
FROM ML . PREDICT ( MODEL MODEL_NAME , ( SELECT @ description as content ))
)
WHERE id = @ id ;
Replace the following:
MODEL_NAME : the name of the Vertex AI text embedding model
PostgreSQL
UPDATE
Products
SET
description = $ 1 ,
embeddings = spanner . FLOAT32_ARRAY (
spanner . ML_PREDICT_ROW (
'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL_NAME ' ,
JSONB_BUILD_OBJECT ( 'instances' , JSONB_BUILD_ARRAY ( JSONB_BUILD_OBJECT ( 'content' , $ 1 )))
) - > 'predictions' - > 0 - > 'embeddings' - > 'values' )
WHERE
id = $ 2 ;
Replace the following:
PROJECT : the project hosting the Vertex AI endpoint
LOCATION : the location of the Vertex AI endpoint
MODEL_NAME : the name of the Vertex AI text embedding model
What's next
Learn how to use Vertex AI Vector Search
to search for semantically similar items.
Learn more about machine learning and embeddings in our
crash course on embeddings .
Learn more about Vertex AI text embedding models .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
