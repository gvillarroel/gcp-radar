---
title: "Migrating from V1Beta2 \_|\_ Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/migration-from-v1beta2
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/migration-from-v1beta2
  title: "Migrating from V1Beta2 \_|\_ Document AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI
Reference
Send feedback
Migrating from V1Beta2
Stay organized with collections
Save and categorize content based on your preferences.
Document AI's v1beta2 API is now deprecated in favor of the
v1 API.
Unlike v1beta2 , Document AI v1
is a stateful API, meaning you need to create a Processor
before you can send requests to Process
and BatchProcess
documents.
NOTE: This deprecation only affects the version of the API used to call any processor.
It does not affect the availability of any processor.
The major areas of v1 API backward incompatibility with v1beta2 API are discussed
later in this document.
Creating a processor
To migrate to v1 for processor creation, first create a Processor . The following table serves as a general guideline for choosing an appropriate
ProcessorType
to create, but you can consult the full processor list .
document_type
params
Processor type
invoice
INVOICE_PROCESSOR
general
OCR_PROCESSOR
general
table_extraction_params
FORM_PARSER_PROCESSOR
general
form_extraction_params
FORM_PARSER_PROCESSOR
general
entity_extraction_params
FORM_PARSER_PROCESSOR
general
automl_params
CUSTOM_EXTRACTION_PROCESSOR
For a step-by-step guide to creating a processor, view the
guide .
Processing documents
Document AI v1 has two APIs to accept documents: Process and BatchProcess .
Each of these methods corresponds to a method from v1beta2 . The methods and
their differences are highlighted:
v1beta2 Method
v1 Method
Migration notes
ProcessDocument
Process
InputConfig.Cloud Storage_source not supported in v1 , use BatchProcess to process documents on Cloud Storage.
BatchProcessDocuments
BatchProcess
In addition to accepting individual documents on Cloud Storage, v1 supports a Cloud Storage prefix to process many documents at once.
Client libraries
If using the Client Libraries to interact with
Document AI, switch from using the DocumentUnderstandingService to the
DocumentProcessorService . For a detailed example of using the client libraries
for v1 , see client libraries .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
