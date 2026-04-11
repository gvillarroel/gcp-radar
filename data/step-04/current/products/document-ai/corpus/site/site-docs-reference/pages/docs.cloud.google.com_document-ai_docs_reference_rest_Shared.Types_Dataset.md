---
title: "Dataset \_|\_ Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/Dataset
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/Dataset
  title: "Dataset \_|\_ Document AI \_|\_ Google Cloud Documentation"
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
Dataset
Stay organized with collections
Save and categorize content based on your preferences.
A singleton resource under a Processor which configures a collection of documents.
JSON representation
{
"name" : string ,
"state" : enum ( State ) ,
"satisfiesPzs" : boolean ,
"satisfiesPzi" : boolean ,
// Union field storage_source can be only one of the following:
"gcsManagedConfig" : {
object ( GCSManagedConfig )
} ,
"documentWarehouseConfig" : {
object ( DocumentWarehouseConfig )
} ,
"unmanagedDatasetConfig" : {
object ( UnmanagedDatasetConfig )
}
// End of list of possible types for union field storage_source .
// Union field indexing_source can be only one of the following:
"spannerIndexingConfig" : {
object ( SpannerIndexingConfig )
}
// End of list of possible types for union field indexing_source .
}
Fields
name
string
Dataset resource name. Format: projects/{project}/locations/{location}/processors/{processor}/dataset
state
enum ( State )
Required. State of the dataset. Ignored when updating dataset.
satisfiesPzs
boolean
Output only. Reserved for future use.
satisfiesPzi
boolean
Output only. Reserved for future use.
Union field storage_source .
storage_source can be only one of the following:
gcsManagedConfig
object ( GCSManagedConfig )
Optional. User-managed Cloud Storage dataset configuration. Use this configuration if the dataset documents are stored under a user-managed Cloud Storage location.
documentWarehouseConfig (deprecated)
object ( DocumentWarehouseConfig )
This item is deprecated!
Optional. Deprecated. Warehouse-based dataset configuration is not supported.
unmanagedDatasetConfig
object ( UnmanagedDatasetConfig )
Optional. Unmanaged dataset configuration. Use this configuration if the dataset documents are managed by the document service internally (not user-managed).
Union field indexing_source .
indexing_source can be only one of the following:
spannerIndexingConfig
object ( SpannerIndexingConfig )
Optional. A lightweight indexing source with low latency and high reliability, but lacking advanced features like CMEK and content-based search.
GCSManagedConfig
Configuration specific to the Cloud Storage-based implementation.
JSON representation
{
"gcsPrefix" : {
object ( GcsPrefix )
}
}
Fields
gcsPrefix
object ( GcsPrefix )
Required. The Cloud Storage URI (a directory) where the documents belonging to the dataset must be stored.
GcsPrefix
Specifies all documents on Cloud Storage with a common prefix.
JSON representation
{
"gcsUriPrefix" : string
}
Fields
gcsUriPrefix
string
The URI prefix.
DocumentWarehouseConfig
Configuration specific to the Document AI Warehouse-based implementation.
JSON representation
{
"collection" : string ,
"schema" : string
}
Fields
collection
string
Output only. The collection in Document AI Warehouse associated with the dataset.
schema
string
Output only. The schema in Document AI Warehouse associated with the dataset.
UnmanagedDatasetConfig
This type has no fields.
Configuration specific to an unmanaged dataset.
SpannerIndexingConfig
This type has no fields.
Configuration specific to spanner-based indexing.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
