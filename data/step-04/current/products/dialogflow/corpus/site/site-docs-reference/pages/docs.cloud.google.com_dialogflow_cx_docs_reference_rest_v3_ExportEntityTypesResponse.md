---
title: "ExportEntityTypesResponse \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ExportEntityTypesResponse
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ExportEntityTypesResponse
  title: "ExportEntityTypesResponse \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
ExportEntityTypesResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The response message for EntityTypes.ExportEntityTypes .
JSON representation
{
// Union field exported_entity_types can be only one of the following:
"entityTypesUri" : string ,
"entityTypesContent" : {
object ( InlineDestination )
}
// End of list of possible types for union field exported_entity_types .
}
Fields
Union field exported_entity_types . Exported entity types can be either in cloud storage or local download. exported_entity_types can be only one of the following:
entityTypesUri
string
The URI to a file containing the exported entity types. This field is populated only if entityTypesUri is specified in ExportEntityTypesRequest .
entityTypesContent
object ( InlineDestination )
Uncompressed byte content for entity types. This field is populated only if entityTypesContentInline is set to true in ExportEntityTypesRequest .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
