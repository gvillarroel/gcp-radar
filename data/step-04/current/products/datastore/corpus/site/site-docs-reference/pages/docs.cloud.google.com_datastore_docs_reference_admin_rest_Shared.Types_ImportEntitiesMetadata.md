---
title: "ImportEntitiesMetadata \_|\_ Datastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/reference/admin/rest/Shared.Types/ImportEntitiesMetadata
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/reference/admin/rest/Shared.Types/ImportEntitiesMetadata
  title: "ImportEntitiesMetadata \_|\_ Datastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Datastore
Reference
Send feedback
ImportEntitiesMetadata
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Metadata for ImportEntities operations.
JSON representation
{
"common" : {
object ( CommonMetadata )
} ,
"progressEntities" : {
object ( Progress )
} ,
"progressBytes" : {
object ( Progress )
} ,
"entityFilter" : {
object ( EntityFilter )
} ,
"inputUrl" : string
}
Fields
common
object ( CommonMetadata )
Metadata common to all Datastore Admin operations.
progressEntities
object ( Progress )
An estimate of the number of entities processed.
progressBytes
object ( Progress )
An estimate of the number of bytes processed.
entityFilter
object ( EntityFilter )
Description of which entities are being imported.
inputUrl
string
The location of the import metadata file. This will be the same value as the google.datastore.admin.v1.ExportEntitiesResponse.output_url field.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-05 UTC."],[],[]]
