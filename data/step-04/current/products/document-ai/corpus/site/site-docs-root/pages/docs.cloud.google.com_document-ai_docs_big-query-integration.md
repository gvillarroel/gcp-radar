---
title: "BigQuery integration \_|\_ Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/big-query-integration
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/big-query-integration
  title: "BigQuery integration \_|\_ Document AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI
Guides
Send feedback
BigQuery integration
Stay organized with collections
Save and categorize content based on your preferences.
BigQuery integrates with Document AI to help build document analytics and generative AI
use cases. As digital transformation accelerates, organizations are generating vast
amounts of text and other document data, all of which holds immense potential for
insights and powering novel generative AI use cases. To help harness this data,
we're excited to announce an integration between BigQuery
and Document AI , letting you extract insights from document data and build
new large language model (LLM) applications.
Overview
BigQuery customers can now create Document AI custom extractors , powered by Google's
cutting-edge foundation models, which they can customize based on their own documents
and metadata. These customized models can then be invoked from BigQuery to
extract structured data from documents in a secure, governed manner, using the
simplicity and power of SQL.
Prior to this integration, some customers tried to construct independent Document AI
pipelines, which involved manually curating extraction logic and schema. The
lack of built-in integration capabilities left them to develop bespoke infrastructure
to synchronize and maintain data consistency. This turned each document analytics
project into a substantial undertaking that required significant investment.
Now, with this integration, customers can create remote models in BigQuery
for their custom extractors in Document AI, and use them to perform document analytics
and generative AI at scale, unlocking a new era of data-driven insights and innovation.
A unified, governed data to AI experience
You can build a custom extractor in the Document AI with three steps:
Define the data you need to extract from your documents. This is called
document schema , stored with each version of the custom extractor, accessible from BigQuery.
Optionally, provide extra documents with annotations as samples of the extraction.
Train the model for the custom extractor, based on the foundation models provided in Document AI.
In addition to custom extractors that require manual training, Document AI also
provides ready to use extractors for expenses, receipts, invoices, tax forms,
government ids, and a multitude of other scenarios, in the processor gallery.
Then, once you have the custom extractor ready, you can move to BigQuery Studio
to analyze the documents using SQL in the following four steps:
Register a BigQuery remote model for the extractor using SQL. The model can
understand the document schema (created above), invoke the custom extractor,
and parse the results.
Create object tables using SQL for the documents stored in Cloud Storage. You
can govern the unstructured data in the tables by setting row-level access policies,
which limits users' access to certain documents and thus restricts the AI power for
privacy and security.
Use the function ML.PROCESS_DOCUMENT on the object table to extract relevant
fields by making inference calls to the API endpoint. You can also filter out the
documents for the extractions with a WHERE clause outside of the function.
The function returns a structured table, with each column being an extracted field.
Join the extracted data with other BigQuery tables to combine structured and
unstructured data, producing business values.
The following example illustrates the user experience:
# Create an object table in BigQuery that maps to the document files stored in Cloud Storage.
CREATE OR REPLACE EXTERNAL TABLE ` my_dataset . document `
WITH CONNECTION ` my_project . us . example_connection `
OPTIONS (
object_metadata = 'SIMPLE' ,
uris = [ 'gs://my_bucket/path/*' ],
metadata_cache_mode = 'AUTOMATIC' ,
max_staleness = INTERVAL 1 HOUR
);
# Create a remote model to register your Doc AI processor in BigQuery.
CREATE OR REPLACE MODEL ` my_dataset . layout_parser `
REMOTE WITH CONNECTION ` my_project . us . example_connection `
OPTIONS (
remote_service_type = 'CLOUD_AI_DOCUMENT_V1' ,
document_processor = ' PROCESSOR_ID '
);
# Invoke the registered model over the object table to parse PDF document
SELECT uri , total_amount , invoice_date
FROM ML . PROCESS_DOCUMENT (
MODEL ` my_dataset . layout_parser ` ,
TABLE ` my_dataset . document ` ,
PROCESS_OPTIONS = > (
JSON '{"layout_config": {"chunking_config": {"chunk_size": 250}}}' )
)
WHERE content_type = 'application/pdf' ;
Table of results
Text analytics, summarization and other document analysis use cases
Once you have extracted text from your documents, you can then perform document
analytics in a few ways:
Use BigQuery ML to perform text-analytics: BigQuery ML supports training and
deploying embedding models in a variety of ways. For example, you can use BigQuery ML
to identify customer sentiment in support calls, or to classify product feedback
into different categories. If you are a Python user, you can also use BigQuery DataFrames
for pandas, and scikit-learn-like APIs for text analysis on your data.
Use text-embedding-004 LLM to generate embeddings from the chunked documents:
BigQuery has a ML.GENERATE_EMBEDDING function that calls the text-embedding-004
model to generate embeddings. For example, you can use a Document AI to extract customer
feedback and summarize the feedback using PaLM 2, all with BigQuery SQL.
Join document metadata with other structured data stored in BigQuery tables:
For example, you can generate embeddings using the chunked documents and use it for vector search.
# Example 1: Parse the chunked data
CREATE OR REPLACE TABLE docai_demo . demo_result_parsed AS ( SELECT
uri ,
JSON_EXTRACT_SCALAR ( json , '$.chunkId' ) AS id ,
JSON_EXTRACT_SCALAR ( json , '$.content' ) AS content ,
JSON_EXTRACT_SCALAR ( json , '$.pageFooters[0].text' ) AS page_footers_text ,
JSON_EXTRACT_SCALAR ( json , '$.pageSpan.pageStart' ) AS page_span_start ,
JSON_EXTRACT_SCALAR ( json , '$.pageSpan.pageEnd' ) AS page_span_end
FROM docai_demo . demo_result , UNNEST ( JSON_EXTRACT_ARRAY ( ml_process_document_result . chunkedDocument . chunks , '$' )) json )
# Example 2: Generate embedding
CREATE OR REPLACE TABLE ` docai_demo . embeddings ` AS
SELECT * FROM ML . GENERATE_EMBEDDING (
MODEL ` docai_demo . embedding_model ` ,
TABLE ` docai_demo . demo_result_parsed `
);
Implement search and generative AI use cases
Once you've extracted structured text from your documents, you can build indexes
optimized for needle in the haystack queries, made possible by BigQuery's search
and indexing capabilities, unlocking powerful search capability.
This integration also helps unlock new generative LLM applications like executing
text-file processing for privacy filtering, content safety checks, and token chunking
using SQL and custom Document AI models. The extracted text, combined with other metadata,
simplifies the curation of the training corpus required to fine-tune large language
models. Moreover, you're building LLM use cases on governed, enterprise data
that's been grounded through BigQuery's embedding generation and vector index
management capabilities. By synchronizing this index with Vertex AI, you can
implement retrieval-augmented generation use cases, for a more governed and
streamlined AI experience.
Sample application
For an example of an end-to-end application using the Document AI Connector:
Refer to this expense report demo on GitHub .
Read the companion blog post .
Watch a deep dive video from Google Cloud Next 2021.
Previous
arrow_back
Normalization
Next
Create and manage processors
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
