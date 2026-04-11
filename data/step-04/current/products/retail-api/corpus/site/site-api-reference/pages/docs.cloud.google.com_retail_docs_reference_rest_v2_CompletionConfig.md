---
title: "CompletionConfig \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/retail/docs/reference/rest/v2/CompletionConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/retail/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/retail/docs/reference/rest/v2/CompletionConfig
  title: "CompletionConfig \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Vertex AI Search for commerce
Reference
Send feedback
CompletionConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Catalog level autocomplete config for customers to customize autocomplete feature's settings.
JSON representation
{
"name" : string ,
"matchingOrder" : string ,
"maxSuggestions" : integer ,
"minPrefixLength" : integer ,
"autoLearning" : boolean ,
"suggestionsInputConfig" : {
object ( CompletionDataInputConfig )
} ,
"lastSuggestionsImportOperation" : string ,
"denylistInputConfig" : {
object ( CompletionDataInputConfig )
} ,
"lastDenylistImportOperation" : string ,
"allowlistInputConfig" : {
object ( CompletionDataInputConfig )
} ,
"lastAllowlistImportOperation" : string
}
Fields
name
string
Required. Immutable. Fully qualified name projects/*/locations/*/catalogs/*/completionConfig
matchingOrder
string
Specifies the matching order for autocomplete suggestions, e.g., a query consisting of 'sh' with 'out-of-order' specified would suggest "women's shoes", whereas a query of 'red s' with 'exact-prefix' specified would suggest "red shoes". Currently supported values:
'out-of-order'
'exact-prefix'
Default value: 'exact-prefix'.
maxSuggestions
integer
The maximum number of autocomplete suggestions returned per term. Default value is 20. If left unset or set to 0, then will fallback to default value.
Value range is 1 to 20.
minPrefixLength
integer
The minimum number of characters needed to be typed in order to get suggestions. Default value is 2. If left unset or set to 0, then will fallback to default value.
Value range is 1 to 20.
autoLearning
boolean
If set to true, the auto learning function is enabled. Auto learning uses user data to generate suggestions using ML techniques. Default value is false. Only after enabling auto learning can users use cloud-retail data in CompleteQueryRequest .
suggestionsInputConfig
object ( CompletionDataInputConfig )
Output only. The source data for the latest import of the autocomplete suggestion phrases.
lastSuggestionsImportOperation
string
Output only. Name of the LRO corresponding to the latest suggestion terms list import.
Can use operations.get API method to retrieve the latest state of the Long Running Operation.
denylistInputConfig
object ( CompletionDataInputConfig )
Output only. The source data for the latest import of the autocomplete denylist phrases.
lastDenylistImportOperation
string
Output only. Name of the LRO corresponding to the latest denylist import.
Can use operations.get API to retrieve the latest state of the Long Running Operation.
allowlistInputConfig
object ( CompletionDataInputConfig )
Output only. The source data for the latest import of the autocomplete allowlist phrases.
lastAllowlistImportOperation
string
Output only. Name of the LRO corresponding to the latest allowlist import.
Can use operations.get API to retrieve the latest state of the Long Running Operation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
