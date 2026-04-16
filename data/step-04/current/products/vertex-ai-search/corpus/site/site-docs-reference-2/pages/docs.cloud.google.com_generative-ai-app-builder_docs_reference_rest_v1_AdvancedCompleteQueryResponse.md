---
title: "AdvancedCompleteQueryResponse \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1/AdvancedCompleteQueryResponse
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1/AdvancedCompleteQueryResponse
  title: "AdvancedCompleteQueryResponse \_|\_ Vertex AI Search \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Reference
Send feedback
AdvancedCompleteQueryResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
QuerySuggestion
JSON representation
PersonSuggestion
JSON representation
PersonType
ContentSuggestion
JSON representation
ContentType
RecentSearchSuggestion
JSON representation
Response message for CompletionService.AdvancedCompleteQuery method.
JSON representation
{
"querySuggestions" : [
{
object ( QuerySuggestion )
}
] ,
"tailMatchTriggered" : boolean ,
"peopleSuggestions" : [
{
object ( PersonSuggestion )
}
] ,
"contentSuggestions" : [
{
object ( ContentSuggestion )
}
] ,
"recentSearchSuggestions" : [
{
object ( RecentSearchSuggestion )
}
]
}
Fields
querySuggestions[]
object ( QuerySuggestion )
Results of the matched query suggestions. The result list is ordered and the first result is a top suggestion.
tailMatchTriggered
boolean
True if the returned suggestions are all tail suggestions.
For tail matching to be triggered, includeTailSuggestions in the request must be true and there must be no suggestions that match the full query.
peopleSuggestions[]
object ( PersonSuggestion )
Results of the matched people suggestions. The result list is ordered and the first result is the top suggestion.
contentSuggestions[]
object ( ContentSuggestion )
Results of the matched content suggestions. The result list is ordered and the first result is the top suggestion.
recentSearchSuggestions[]
object ( RecentSearchSuggestion )
Results of the matched "recent search" suggestions. The result list is ordered and the first result is the top suggestion.
QuerySuggestion
Suggestions as search queries.
JSON representation
{
"suggestion" : string ,
"completableFieldPaths" : [
string
] ,
"dataStore" : [
string
] ,
"score" : number
}
Fields
suggestion
string
The suggestion for the query.
completableFieldPaths[]
string
The unique document field paths that serve as the source of this suggestion if it was generated from completable fields.
This field is only populated for the document-completable model.
dataStore[]
string
The name of the dataStore that this suggestion belongs to.
score
number
The score of each suggestion. The score is in the range of [0, 1].
PersonSuggestion
Suggestions as people.
JSON representation
{
"suggestion" : string ,
"personType" : enum ( PersonType ) ,
"document" : {
object ( Document )
} ,
"dataStore" : string ,
"score" : number ,
"displayPhotoUri" : string ,
"destinationUri" : string
}
Fields
suggestion
string
The suggestion for the query.
personType
enum ( PersonType )
The type of the person.
document
object ( Document )
The document data snippet in the suggestion. Only a subset of fields is populated.
dataStore
string
The name of the dataStore that this suggestion belongs to.
score
number
The score of each suggestion. The score is in the range of [0, 1].
displayPhotoUri
string
The photo uri of the person suggestion.
destinationUri
string
The destination uri of the person suggestion.
PersonType
The type of the person based on the source.
Enums
PERSON_TYPE_UNSPECIFIED
Default value.
CLOUD_IDENTITY
The suggestion is from a GOOGLE_IDENTITY source.
THIRD_PARTY_IDENTITY
The suggestion is from a THIRD_PARTY_IDENTITY source.
ContentSuggestion
Suggestions as content.
JSON representation
{
"suggestion" : string ,
"contentType" : enum ( ContentType ) ,
"document" : {
object ( Document )
} ,
"dataStore" : string ,
"score" : number ,
"iconUri" : string ,
"destinationUri" : string
}
Fields
suggestion
string
The suggestion for the query.
contentType
enum ( ContentType )
The type of the content suggestion.
document
object ( Document )
The document data snippet in the suggestion. Only a subset of fields will be populated.
dataStore
string
The name of the dataStore that this suggestion belongs to.
score
number
The score of each suggestion. The score is in the range of [0, 1].
iconUri
string
The icon uri of the content suggestion.
destinationUri
string
The destination uri of the content suggestion.
ContentType
The type of the content returned for content suggestions.
Enums
CONTENT_TYPE_UNSPECIFIED
Default value.
GOOGLE_WORKSPACE
The suggestion is from a Google Workspace source.
THIRD_PARTY
The suggestion is from a third party source.
RecentSearchSuggestion
Suggestions from recent search history.
JSON representation
{
"suggestion" : string ,
"recentSearchTime" : string ,
"score" : number
}
Fields
suggestion
string
The suggestion for the query.
recentSearchTime
string ( Timestamp format)
The time when this recent rearch happened.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
score
number
The score of each suggestion. The score is in the range of [0, 1].
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-26 UTC."],[],[]]
