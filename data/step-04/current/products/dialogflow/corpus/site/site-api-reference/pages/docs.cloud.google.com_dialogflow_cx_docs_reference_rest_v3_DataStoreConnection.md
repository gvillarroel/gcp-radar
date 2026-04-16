---
title: "DataStoreConnection \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection
  title: "DataStoreConnection \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Reference
Send feedback
DataStoreConnection
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
DataStoreType
DocumentProcessingMode
A data store connection. It represents a data store in Discovery Engine and the type of the contents it contains.
JSON representation
{
"dataStoreType" : enum ( DataStoreType ) ,
"dataStore" : string ,
"documentProcessingMode" : enum ( DocumentProcessingMode )
}
Fields
dataStoreType
enum ( DataStoreType )
The type of the connected data store.
dataStore
string
The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}
documentProcessingMode
enum ( DocumentProcessingMode )
The document processing mode for the data store connection. Should only be set for PUBLIC_WEB and UNSTRUCTURED data stores. If not set it is considered as DOCUMENTS, as this is the legacy mode.
DataStoreType
Type of a data store. Determines how search is performed in the data store.
Enums
DATA_STORE_TYPE_UNSPECIFIED
Not specified. This value indicates that the data store type is not specified, so it will not be used during search.
PUBLIC_WEB
A data store that contains public web content.
UNSTRUCTURED
A data store that contains unstructured private data.
STRUCTURED
A data store that contains structured data (for example FAQ).
DocumentProcessingMode
The document processing mode of the data store.
Enums
DOCUMENT_PROCESSING_MODE_UNSPECIFIED
Not specified. This should be set for STRUCTURED type data stores. Due to legacy reasons this is considered as DOCUMENTS for STRUCTURED and PUBLIC_WEB data stores.
DOCUMENTS
Documents are processed as documents.
CHUNKS
Documents are converted to chunks.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
