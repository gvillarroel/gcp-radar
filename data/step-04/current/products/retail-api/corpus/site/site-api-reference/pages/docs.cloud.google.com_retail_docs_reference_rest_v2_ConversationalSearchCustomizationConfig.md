---
title: "ConversationalSearchCustomizationConfig \_|\_ Vertex AI Search for commerce\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/retail/docs/reference/rest/v2/ConversationalSearchCustomizationConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/retail/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/retail/docs/reference/rest/v2/ConversationalSearchCustomizationConfig
  title: "ConversationalSearchCustomizationConfig \_|\_ Vertex AI Search for commerce\
    \ \_|\_ Google Cloud Documentation"
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
ConversationalSearchCustomizationConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
IntentClassificationConfig
JSON representation
InlineSource
JSON representation
InlineForceIntent
JSON representation
Operation
Example
JSON representation
The public proto to represent the conversational search customization config. It will be converted to the internal proto in the backend.
JSON representation
{
"retailerDisplayName" : string ,
"intentClassificationConfig" : {
object ( IntentClassificationConfig )
} ,
"catalog" : string
}
Fields
retailerDisplayName
string
Optional. The retailer's display name that could be used in our LLM answers. Example - "Google"
intentClassificationConfig
object ( IntentClassificationConfig )
Optional. The configs for intent classification.
catalog
string
Required. Resource name of the catalog. Format: projects/{project}/locations/{location}/catalogs/{catalog}
IntentClassificationConfig
The public proto to represent the intent classification config. It will be converted to the internal proto in the backend.
JSON representation
{
"modelPreamble" : string ,
"example" : [
{
object ( Example )
}
] ,
"blocklistKeywords" : [
string
] ,
"disabledIntentTypes" : [
string
] ,
// Union field force_intent_classification can be only one of the following:
"inlineSource" : {
object ( InlineSource )
}
// End of list of possible types for union field force_intent_classification .
}
Fields
modelPreamble
string
Optional. Customers can use the preamble to specify any requirements for blocklisting intent classification. This preamble will be added to the blocklisting intent classification model prompt.
example[]
object ( Example )
Optional. A list of examples for intent classification.
blocklistKeywords[]
string
Optional. A list of keywords that will be used to classify the query to the "BLOCKLISTED" intent type. The keywords are case insensitive.
disabledIntentTypes[]
string
Optional. A list of intent types that will be disabled for this customer. The intent types must match one of the predefined intent types defined at https://cloud.google.com/retail/docs/reference/rpc/google.cloud.retail.v2alpha#querytype
Union field force_intent_classification . Parsed from the external proto force_intent_classification string. force_intent_classification can be only one of the following:
inlineSource
object ( InlineSource )
Optional. Inline source for intent classifications.
InlineSource
Inline source for intent classifications.
JSON representation
{
"inlineForceIntents" : [
{
object ( InlineForceIntent )
}
]
}
Fields
inlineForceIntents[]
object ( InlineForceIntent )
Optional. A list of inline force intent classifications.
InlineForceIntent
An inline force intent classification configuration.
JSON representation
{
"query" : string ,
"operation" : enum ( Operation ) ,
"intentType" : string
}
Fields
query
string
Optional. A example query.
operation
enum ( Operation )
Optional. The operation to perform for the query.
intentType
string
Optional. The intentType must match one of the predefined intent types defined at https://cloud.google.com/retail/docs/reference/rpc/google.cloud.retail.v2alpha#querytype
Operation
Controls whether the query will be exact match or contains match.
Enums
OPERATION_UNSPECIFIED
Unspecified match operation.
EXACT_MATCH
Exact match.
CONTAINS
Contains match.
Example
An example for intent classification.
JSON representation
{
"query" : string ,
"intentType" : string ,
"reason" : string ,
"classifiedPositive" : boolean
}
Fields
query
string
Required. Example query.
intentType
string
Optional. The intentType must match one of the predefined intent types defined at https://cloud.google.com/retail/docs/reference/rpc/google.cloud.retail.v2alpha#querytype
reason
string
Optional. The reason for the intent classification. This is used to explain the intent classification decision.
classifiedPositive
boolean
Required. Whether the example is classified positively.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-24 UTC."],[],[]]
