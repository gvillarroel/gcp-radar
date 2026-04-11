---
title: "ConversationalFilteringSpec \_|\_ Vertex AI Search for commerce \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/retail/docs/reference/rest/v2/ConversationalFilteringSpec
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/retail/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/retail/docs/reference/rest/v2/ConversationalFilteringSpec
  title: "ConversationalFilteringSpec \_|\_ Vertex AI Search for commerce \_|\_ Google\
    \ Cloud Documentation"
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
ConversationalFilteringSpec
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
UserAnswer
JSON representation
SelectedAnswer
JSON representation
Mode
This field specifies all conversational filtering related parameters addition to conversational retail search.
JSON representation
{
"enableConversationalFiltering" : boolean ,
"userAnswer" : {
object ( UserAnswer )
} ,
"conversationalFilteringMode" : enum ( Mode )
}
Fields
enableConversationalFiltering (deprecated)
boolean
This item is deprecated!
Optional. This field is deprecated. Please use ConversationalFilteringSpec.conversational_filtering_mode instead.
userAnswer
object ( UserAnswer )
Optional. This field specifies the current user answer during the conversational filtering search. It can be either user selected from suggested answers or user input plain text.
conversationalFilteringMode
enum ( Mode )
Optional. Mode to control Conversational Filtering. Defaults to Mode.DISABLED if it's unset.
UserAnswer
This field specifies the current user answer during the conversational filtering search. This can be either user selected from suggested answers or user input plain text.
JSON representation
{
// Union field type can be only one of the following:
"textAnswer" : string ,
"selectedAnswer" : {
object ( SelectedAnswer )
}
// End of list of possible types for union field type .
}
Fields
Union field type . This field specifies the type of user answer. type can be only one of the following:
textAnswer
string
This field specifies the incremental input text from the user during the conversational search.
selectedAnswer
object ( SelectedAnswer )
Optional. This field specifies the selected answer during the conversational search. This should be a subset of ConversationalSearchResponse.FollowupQuestion.SuggestedAnswer .
SelectedAnswer
This field specifies the selected answers during the conversational search.
JSON representation
{
"productAttributeValue" : {
object ( ProductAttributeValue )
} ,
"productAttributeInterval" : {
object ( ProductAttributeInterval )
}
}
Fields
productAttributeValue
object ( ProductAttributeValue )
Optional. This field specifies the selected answer which is a attribute key-value.
productAttributeInterval
object ( ProductAttributeInterval )
Optional. This is an experimental feature. Please contact Google before using it. This field specifies the selected answer which is a attribute key-numeric interval.
Mode
Enum to control Conversational Filtering mode. A single conversation session including multiple turns supports modes for Conversational Search OR Conversational Filtering without Conversational Search, but not both.
Enums
MODE_UNSPECIFIED
Default value.
DISABLED
Disables Conversational Filtering when using Conversational Search.
ENABLED
Enables Conversational Filtering when using Conversational Search.
CONVERSATIONAL_FILTER_ONLY
Enables Conversational Filtering without Conversational Search.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-22 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-22 UTC."],[],[]]
