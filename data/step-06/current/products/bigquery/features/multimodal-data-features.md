---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.353Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Multimodal data features"
feature_slug: "multimodal-data-features"
latest_feature_date: "2025-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analyze-multimodal-data"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/ai-introduction"
keywords:
  - "multimodal"
  - "features"
  - "bigquery"
  - "dataframes"
  - "now"
  - "analysis"
  - "transformation"
  - "embeddings"
---

# Multimodal data features

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery and BigQuery DataFrames now support multimodal analysis, transformation, embeddings, and ELT workflows across SQL and Python.

## Extended Definition

BigQuery and BigQuery DataFrames now support multimodal analysis, transformation, embeddings, and ELT workflows across SQL and Python.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analyze-multimodal-data](https://docs.cloud.google.com/bigquery/docs/analyze-multimodal-data)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)

## Supporting Pages

### Analyze multimodal data in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analyze-multimodal-data](https://docs.cloud.google.com/bigquery/docs/analyze-multimodal-data)
- Source ID: `site-docs-reference-5`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generative AI functions Generate text, embeddings, and scalar values based on ObjectRef or ObjectRefRuntime input by using the following generative AI functions with Gemini models: AI.GENERATE AI.GENERATE TEXT AI.GENERATE TABLE AI.GENERATE BOOL AI.GENERATE DOUBLE AI.GENERATE INT AI.GENERATE EMBEDDING AI.EMBED AI.SIMILARITY AI.CLASSIFY AI.IF AI.SCORE Work with multimodal data in Python You can analyze multimodal data in Python by using BigQuery DataFrames classes and methods.
- Generate annotations, embeddings, and scalar values from multimodal data by creating multimodal DataFrames in BigQuery DataFrames and using Python libraries.
- Use of BigQuery Python UDFs, and of multimodal DataFrames and object transformations methods in BigQuery DataFrames, incurs Python UDF costs.
- Limitations The following limitations apply to BigQuery multimodal data features: If you don't explicitly specify the name of the project that contains the connection in the authorizer field of an ObjectRef value, then the connection must exist either in the project that contains the object table that stores it, or in the project in which the query that references the ObjectRef value is run.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . gemini model = bbq . ml . create model ( "cymbal pets.gemini" , replace = True , connection name = "us.cymbal conn" , options = { "endpoint" : "gemini-2.5-flash" }, ) Create an embedding generation model Create a BigQuery ML remote model that represents a Vertex AI multimodal embedding model: Run the following to create the remote model: SQL CREATE OR REPLACE MODEL cymbal pets.embedding model REMOTE WITH CONNECTION us.cymbal conn OPTIONS ( ENDPOINT = 'multimodalembedding@001' ); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Analyze multimodal data with SQL and BigQuery DataFrames This tutorial shows you how to analyze multimodal data by using SQL queries and BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . df manuals agg The results look similar to the following: +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ manual.uri manual.version manual.authorizer manual.details chunks.uri chunks.version chunks.authorizer chunks.details +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ gs://cloud-samples-data/bigquery/ 1742492785900455 myproject.region.myconnection {"gcs metadata":{"content type":"application/pef", gs://cloud-samples-data/bigquery/ 1745875761227129 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"c9032b037693d15a33210d638c763d0e", tutorials/cymbal-pets/documents/ "md5 hash":"5a1116cce4978ec1b094d8e8b49a1d7c", crittercuisine 5000 user manual.pdf "size":566105,"updated":1742492785941000}} crittercuisine 5000 user manual page1.pdf "size":504583,"updated":1745875761266000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ crittercuisine 5000 user manual page1.pdf 1745875760613874 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"94d03ec65d28b173bc87eac7e587b325", crittercuisine 5000 user manual page2.pdf "size":94622,"updated":1745875760649000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ ... ... ... ... +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ Run the following to generate a single response from a Gemini model based on the analysis of an array of ObjectRef values: SQL WITH manuals AS ( SELECT OBJ .
- CREATE OR REPLACE FUNCTION cymbal pets . chunk pdf ( src json STRING , chunk size INT64 , overlap size INT64 ) RETURNS ARRAY<STRING > LANGUAGE python WITH CONNECTION us.cymbal conn OPTIONS ( entry point = 'chunk pdf' , runtime version = 'python-3.11' , packages =[ 'pypdf' ] ) AS " "" import io import json from pypdf import PdfReader # type: ignore from urllib.request import urlopen, Request def chunk pdf(src ref: str, chunk size: int, overlap size: int) -> str: src json = json.loads(src ref) srcUrl = src json[" access urls "][" read url "] req = urlopen(srcUrl) pdf file = io.BytesIO(bytearray(req.read())) reader = PdfReader(pdf file, strict=False) extract and chunk text simultaneously all text chunks = [] curr chunk = "" for page in reader.pages: page text = page.extract text() if page text: curr chunk += page text split the accumulated text into chunks of a specific size with overlaop this loop implements a sliding window approach to create chunks while len(curr chunk) >= chunk size: split idx = curr chunk.rfind(" ", 0, chunk size) if split idx == -1: split idx = chunk size actual chunk = curr chunk[:split idx] all text chunks.append(actual chunk) overlap = curr chunk[split idx + 1 : split idx + 1 + overlap size] curr chunk = overlap + curr chunk[split idx + 1 + overlap size :] if curr chunk: all text chunks.append(curr chunk) return all text chunks "" " ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

### Introduction to AI in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- Source ID: `site-docs-reference-2`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Search BigQuery offers a variety of search functions and features to help you efficiently find specific data or discover similarities between data including multimodal data.
- You can generate multimodal embeddings by using models provided by or hosted on Vertex AI, or by using models imported and run in BigQuery.
- Assistive AI features AI-powered assistance features in BigQuery, collectively referred to as Gemini in BigQuery , help you discover, prepare, query, and visualize your data.
- AI functions BigQuery offers various SQL functions that you can use for AI tasks such as text generation, text or unstructured data analysis, and translation.

