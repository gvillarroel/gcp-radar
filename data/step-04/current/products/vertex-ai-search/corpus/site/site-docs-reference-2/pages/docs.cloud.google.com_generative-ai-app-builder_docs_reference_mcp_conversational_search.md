---
title: "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search
  title: "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\
    \ \_|\_ Google Cloud Documentation"
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
MCP Tools Reference: discoveryengine.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
Tool: conversational_search
Perform a conversational search on ingested data in Google owned data stores
The following sample demonstrate how to use curl to invoke the conversational_search MCP tool.
Curl Request
curl --location 'https://discoveryengine.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "conversational_search",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request message for ConversationalSearchService.AnswerQuery method.
AnswerQueryRequest
JSON representation
{
"servingConfig" : string ,
"query" : {
object ( Query )
} ,
"session" : string ,
"safetySpec" : {
object ( SafetySpec )
} ,
"relatedQuestionsSpec" : {
object ( RelatedQuestionsSpec )
} ,
"groundingSpec" : {
object ( GroundingSpec )
} ,
"answerGenerationSpec" : {
object ( AnswerGenerationSpec )
} ,
"searchSpec" : {
object ( SearchSpec )
} ,
"queryUnderstandingSpec" : {
object ( QueryUnderstandingSpec )
} ,
"asynchronousMode" : boolean ,
"userPseudoId" : string ,
"userLabels" : {
string : string ,
...
} ,
"endUserSpec" : {
object ( EndUserSpec )
}
}
Fields
servingConfig
string
Required. The resource name of the Search serving config, such as projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config , or projects/*/locations/global/collections/default_collection/dataStores/*/servingConfigs/default_serving_config . This field is used to identify the serving configuration name, set of models used to make the search.
query
object ( Query )
Required. Current user query.
session
string
The session resource name. Not required.
When session field is not set, the API is in sessionless mode.
We support auto session mode: users can use the wildcard symbol - as session ID. A new ID will be automatically generated and assigned.
safetySpec
object ( SafetySpec )
Model specification.
relatedQuestionsSpec
object ( RelatedQuestionsSpec )
Related questions specification.
groundingSpec
object ( GroundingSpec )
Optional. Grounding specification.
answerGenerationSpec
object ( AnswerGenerationSpec )
Answer generation specification.
searchSpec
object ( SearchSpec )
Search specification.
queryUnderstandingSpec
object ( QueryUnderstandingSpec )
Query understanding specification.
asynchronousMode (deprecated)
boolean
This item is deprecated!
Deprecated: This field is deprecated. Streaming Answer API will be supported.
Asynchronous mode control.
If enabled, the response will be returned with answer/session resource name without final answer. The API users need to do the polling to get the latest status of answer/session by calling ConversationalSearchService.GetAnswer or ConversationalSearchService.GetSession method.
userPseudoId
string
A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website.
This field should NOT have a fixed value such as unknown_visitor .
The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
userLabels
map (key: string, value: string)
The user labels applied to a resource must meet the following requirements:
Each resource can have multiple labels, up to a maximum of 64.
Each label must be a key-value pair.
Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters.
Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed.
The key portion of a label must be unique. However, you can use the same key with multiple resources.
Keys must start with a lowercase letter or international character.
See Google Cloud Document for more details.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
endUserSpec
object ( EndUserSpec )
Optional. End user specification.
Query
JSON representation
{
"queryId" : string ,
// Union field content can be only one of the following:
"text" : string
// End of list of possible types for union field content .
}
Fields
queryId
string
Output only. Unique Id for the query.
Union field content . Query content. content can be only one of the following:
text
string
Plain text.
SafetySpec
JSON representation
{
"enable" : boolean ,
"safetySettings" : [
{
object ( SafetySetting )
}
]
}
Fields
enable
boolean
Enable the safety filtering on the answer response. It is false by default.
safetySettings[]
object ( SafetySetting )
Optional. Safety settings. This settings are effective only when the safety_spec.enable is true.
SafetySetting
JSON representation
{
"category" : enum ( HarmCategory ) ,
"threshold" : enum ( HarmBlockThreshold )
}
Fields
category
enum ( HarmCategory )
Required. Harm category.
threshold
enum ( HarmBlockThreshold )
Required. The harm block threshold.
RelatedQuestionsSpec
JSON representation
{
"enable" : boolean
}
Fields
enable
boolean
Enable related questions feature if true.
GroundingSpec
JSON representation
{
"includeGroundingSupports" : boolean ,
"filteringLevel" : enum ( FilteringLevel )
}
Fields
includeGroundingSupports
boolean
Optional. Specifies whether to include grounding_supports in the answer. The default value is false .
When this field is set to true , returned answer will have grounding_score and will contain GroundingSupports for each claim.
filteringLevel
enum ( FilteringLevel )
Optional. Specifies whether to enable the filtering based on grounding score and at what level.
AnswerGenerationSpec
JSON representation
{
"modelSpec" : {
object ( ModelSpec )
} ,
"promptSpec" : {
object ( PromptSpec )
} ,
"includeCitations" : boolean ,
"answerLanguageCode" : string ,
"ignoreAdversarialQuery" : boolean ,
"ignoreNonAnswerSeekingQuery" : boolean ,
"ignoreJailBreakingQuery" : boolean ,
"multimodalSpec" : {
object ( MultimodalSpec )
} ,
// Union field _ignore_low_relevant_content can be only one of the following:
"ignoreLowRelevantContent" : boolean
// End of list of possible types for union field _ignore_low_relevant_content .
}
Fields
modelSpec
object ( ModelSpec )
Answer generation model specification.
promptSpec
object ( PromptSpec )
Answer generation prompt specification.
includeCitations
boolean
Specifies whether to include citation metadata in the answer. The default value is false .
answerLanguageCode
string
Language code for Answer. Use language tags defined by BCP47 . Note: This is an experimental feature.
ignoreAdversarialQuery
boolean
Specifies whether to filter out adversarial queries. The default value is false .
Google employs search-query classification to detect adversarial queries. No answer is returned if the search query is classified as an adversarial query. For example, a user might ask a question regarding negative comments about the company or submit a query designed to generate unsafe, policy-violating output. If this field is set to true , we skip generating answers for adversarial queries and return fallback messages instead.
ignoreNonAnswerSeekingQuery
boolean
Specifies whether to filter out queries that are not answer-seeking. The default value is false .
Google employs search-query classification to detect answer-seeking queries. No answer is returned if the search query is classified as a non-answer seeking query. If this field is set to true , we skip generating answers for non-answer seeking queries and return fallback messages instead.
ignoreJailBreakingQuery
boolean
Optional. Specifies whether to filter out jail-breaking queries. The default value is false .
Google employs search-query classification to detect jail-breaking queries. No summary is returned if the search query is classified as a jail-breaking query. A user might add instructions to the query to change the tone, style, language, content of the answer, or ask the model to act as a different entity, e.g. "Reply in the tone of a competing company's CEO". If this field is set to true , we skip generating summaries for jail-breaking queries and return fallback messages instead.
multimodalSpec
object ( MultimodalSpec )
Optional. Multimodal specification.
Union field _ignore_low_relevant_content .
_ignore_low_relevant_content can be only one of the following:
ignoreLowRelevantContent
boolean
Specifies whether to filter out queries that have low relevance.
If this field is set to false , all search results are used regardless of relevance to generate answers. If set to true or unset, the behavior will be determined automatically by the service.
ModelSpec
JSON representation
{
"modelVersion" : string
}
Fields
modelVersion
string
Model version. If not set, it will use the default stable model. Allowed values are: stable, preview.
PromptSpec
JSON representation
{
"preamble" : string
}
Fields
preamble
string
Customized preamble.
MultimodalSpec
JSON representation
{
"imageSource" : enum ( ImageSource )
}
Fields
imageSource
enum ( ImageSource )
Optional. Source of image returned in the answer.
SearchSpec
JSON representation
{
// Union field input can be only one of the following:
"searchParams" : {
object ( SearchParams )
} ,
"searchResultList" : {
object ( SearchResultList )
}
// End of list of possible types for union field input .
}
Fields
Union field input . Search parameters to control the search behavior. Or provide search result list to generate answer. input can be only one of the following:
searchParams
object ( SearchParams )
Search parameters.
searchResultList
object ( SearchResultList )
Search result list.
SearchParams
JSON representation
{
"maxReturnResults" : integer ,
"filter" : string ,
"boostSpec" : {
object ( BoostSpec )
} ,
"orderBy" : string ,
"searchResultMode" : enum ( SearchResultMode ) ,
"customFineTuningSpec" : {
object ( CustomFineTuningSpec )
} ,
"dataStoreSpecs" : [
{
object ( DataStoreSpec )
}
] ,
"naturalLanguageQueryUnderstandingSpec" : {
object ( NaturalLanguageQueryUnderstandingSpec )
}
}
Fields
maxReturnResults
integer
Number of search results to return. The default value is 10.
filter
string
The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. Filter expression is case-sensitive. This will be used to filter search results which may affect the Answer response.
If this field is unrecognizable, an INVALID_ARGUMENT is returned.
Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema. For example a media customers might have a field 'name' in their schema. In this case the filter would look like this: filter --> name:'ANY("king kong")'
For more information about filtering including syntax and filter operators, see Filter
boostSpec
object ( BoostSpec )
Boost specification to boost certain documents in search results which may affect the answer query response. For more information on boosting, see Boosting
orderBy
string
The order in which documents are returned. Documents can be ordered by a field in an Document object. Leave it unset if ordered by relevance. order_by expression is case-sensitive. For more information on ordering, see Ordering
If this field is unrecognizable, an INVALID_ARGUMENT is returned.
searchResultMode
enum ( SearchResultMode )
Specifies the search result mode. If unspecified, the search result mode defaults to DOCUMENTS . See parse and chunk documents
customFineTuningSpec
object ( CustomFineTuningSpec )
Custom fine tuning configs.
dataStoreSpecs[]
object ( DataStoreSpec )
Specs defining dataStores to filter on in a search call and configurations for those dataStores. This is only considered for engines with multiple dataStores use case. For single dataStore within an engine, they should use the specs at the top level.
naturalLanguageQueryUnderstandingSpec
object ( NaturalLanguageQueryUnderstandingSpec )
Optional. Specification to enable natural language understanding capabilities for search requests.
BoostSpec
JSON representation
{
"conditionBoostSpecs" : [
{
object ( ConditionBoostSpec )
}
]
}
Fields
conditionBoostSpecs[]
object ( ConditionBoostSpec )
Condition boost specifications. If a document matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 20.
ConditionBoostSpec
JSON representation
{
"condition" : string ,
"boost" : number ,
"boostControlSpec" : {
object ( BoostControlSpec )
}
}
Fields
condition
string
An expression which specifies a boost condition. The syntax and supported fields are the same as a filter expression. See SearchRequest.filter for detail syntax and limitations.
Examples:
To boost documents with document ID "doc_1" or "doc_2", and color "Red" or "Blue": (document_id: ANY("doc_1", "doc_2")) AND (color: ANY("Red", "Blue"))
boost
number
Strength of the condition boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0.
Setting to 1.0 gives the document a big promotion. However, it does not necessarily mean that the boosted document will be the top result at all times, nor that other documents will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant documents.
Setting to -1.0 gives the document a big demotion. However, results that are deeply relevant might still be shown. The document will have an upstream battle to get a fairly high ranking, but it is not blocked out completely.
Setting to 0.0 means no boost applied. The boosting condition is ignored. Only one of the (condition, boost) combination or the boost_control_spec below are set. If both are set then the global boost is ignored and the more fine-grained boost_control_spec is applied.
boostControlSpec
object ( BoostControlSpec )
Complex specification for custom ranking based on customer defined attribute value.
BoostControlSpec
JSON representation
{
"fieldName" : string ,
"attributeType" : enum ( AttributeType ) ,
"interpolationType" : enum ( InterpolationType ) ,
"controlPoints" : [
{
object ( ControlPoint )
}
]
}
Fields
fieldName
string
The name of the field whose value will be used to determine the boost amount.
attributeType
enum ( AttributeType )
The attribute type to be used to determine the boost amount. The attribute value can be derived from the field value of the specified field_name. In the case of numerical it is straightforward i.e. attribute_value = numerical_field_value. In the case of freshness however, attribute_value = (time.now() - datetime_field_value).
interpolationType
enum ( InterpolationType )
The interpolation type to be applied to connect the control points listed below.
controlPoints[]
object ( ControlPoint )
The control points used to define the curve. The monotonic function (defined through the interpolation_type above) passes through the control points listed here.
ControlPoint
JSON representation
{
"attributeValue" : string ,
"boostAmount" : number
}
Fields
attributeValue
string
Can be one of: 1. The numerical field value. 2. The duration spec for freshness: The value must be formatted as an XSD dayTimeDuration value (a restricted subset of an ISO 8601 duration value). The pattern for this is: [nD][T[nH][nM][nS]] .
boostAmount
number
The value between -1 to 1 by which to boost the score if the attribute_value evaluates to the value specified above.
CustomFineTuningSpec
JSON representation
{
"enableSearchAdaptor" : boolean
}
Fields
enableSearchAdaptor
boolean
Whether or not to enable and include custom fine tuned search adaptor model.
DataStoreSpec
JSON representation
{
"dataStore" : string ,
"filter" : string ,
"boostSpec" : {
object ( BoostSpec )
} ,
"customSearchOperators" : string
}
Fields
dataStore
string
Required. Full resource name of DataStore , such as projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id} . The path must include the project number, project ID is not supported for this field.
filter
string
Optional. Filter specification to filter documents in the data store specified by data_store field. For more information on filtering, see Filtering
boostSpec
object ( BoostSpec )
Optional. Boost specification to boost certain documents. For more information on boosting, see Boosting
customSearchOperators
string
Optional. Custom search operators which if specified will be used to filter results from workspace data stores. For more information on custom search operators, see SearchOperators .
NaturalLanguageQueryUnderstandingSpec
JSON representation
{
"filterExtractionCondition" : enum ( FilterExtractionCondition ) ,
"geoSearchQueryDetectionFieldNames" : [
string
] ,
"extractedFilterBehavior" : enum ( ExtractedFilterBehavior ) ,
"allowedFieldNames" : [
string
]
}
Fields
filterExtractionCondition
enum ( FilterExtractionCondition )
The condition under which filter extraction should occur. Server behavior defaults to DISABLED .
geoSearchQueryDetectionFieldNames[]
string
Field names used for location-based filtering, where geolocation filters are detected in natural language search queries. Only valid when the FilterExtractionCondition is set to ENABLED .
If this field is set, it overrides the field names set in ServingConfig.geo_search_query_detection_field_names .
extractedFilterBehavior
enum ( ExtractedFilterBehavior )
Optional. Controls behavior of how extracted filters are applied to the search. The default behavior depends on the request. For single datastore structured search, the default is HARD_FILTER . For multi-datastore search, the default behavior is SOFT_BOOST . Location-based filters are always applied as hard filters, and the SOFT_BOOST setting will not affect them. This field is only used if SearchRequest.NaturalLanguageQueryUnderstandingSpec.FilterExtractionCondition is set to FilterExtractionCondition.ENABLED .
allowedFieldNames[]
string
Optional. Allowlist of fields that can be used for natural language filter extraction. By default, if this is unspecified, all indexable fields are eligible for natural language filter extraction (but are not guaranteed to be used). If any fields are specified in allowed_field_names, only the fields that are both marked as indexable in the schema and specified in the allowlist will be eligible for natural language filter extraction. Note: for multi-datastore search, this is not yet supported, and will be ignored.
SearchResultList
JSON representation
{
"searchResults" : [
{
object ( SearchResult )
}
]
}
Fields
searchResults[]
object ( SearchResult )
Search results.
SearchResult
JSON representation
{
// Union field content can be only one of the following:
"unstructuredDocumentInfo" : {
object ( UnstructuredDocumentInfo )
} ,
"chunkInfo" : {
object ( ChunkInfo )
}
// End of list of possible types for union field content .
}
Fields
Union field content . Search result content. content can be only one of the following:
unstructuredDocumentInfo
object ( UnstructuredDocumentInfo )
Unstructured document information.
chunkInfo
object ( ChunkInfo )
Chunk information.
UnstructuredDocumentInfo
JSON representation
{
"document" : string ,
"uri" : string ,
"title" : string ,
"documentContexts" : [
{
object ( DocumentContext )
}
] ,
"extractiveSegments" : [
{
object ( ExtractiveSegment )
}
] ,
"extractiveAnswers" : [
{
object ( ExtractiveAnswer )
}
]
}
Fields
document
string
Document resource name.
uri
string
URI for the document.
title
string
Title.
documentContexts[]
object ( DocumentContext )
List of document contexts. The content will be used for Answer Generation. This is supposed to be the main content of the document that can be long and comprehensive.
extractiveSegments[]
object ( ExtractiveSegment )
List of extractive segments.
extractiveAnswers[] (deprecated)
object ( ExtractiveAnswer )
This item is deprecated!
Deprecated: This field is deprecated and will have no effect on the Answer generation. Please use document_contexts and extractive_segments fields. List of extractive answers.
DocumentContext
JSON representation
{
"pageIdentifier" : string ,
"content" : string
}
Fields
pageIdentifier
string
Page identifier.
content
string
Document content to be used for answer generation.
ExtractiveSegment
JSON representation
{
"pageIdentifier" : string ,
"content" : string
}
Fields
pageIdentifier
string
Page identifier.
content
string
Extractive segment content.
ExtractiveAnswer
JSON representation
{
"pageIdentifier" : string ,
"content" : string
}
Fields
pageIdentifier
string
Page identifier.
content
string
Extractive answer content.
ChunkInfo
JSON representation
{
"chunk" : string ,
"content" : string ,
"documentMetadata" : {
object ( DocumentMetadata )
}
}
Fields
chunk
string
Chunk resource name.
content
string
Chunk textual content.
documentMetadata
object ( DocumentMetadata )
Metadata of the document from the current chunk.
DocumentMetadata
JSON representation
{
"uri" : string ,
"title" : string
}
Fields
uri
string
Uri of the document.
title
string
Title of the document.
QueryUnderstandingSpec
JSON representation
{
"queryClassificationSpec" : {
object ( QueryClassificationSpec )
} ,
"queryRephraserSpec" : {
object ( QueryRephraserSpec )
} ,
"disableSpellCorrection" : boolean
}
Fields
queryClassificationSpec
object ( QueryClassificationSpec )
Query classification specification.
queryRephraserSpec
object ( QueryRephraserSpec )
Query rephraser specification.
disableSpellCorrection
boolean
Optional. Whether to disable spell correction. The default value is false .
QueryClassificationSpec
JSON representation
{
"types" : [
enum ( Type )
]
}
Fields
types[]
enum ( Type )
Enabled query classification types.
QueryRephraserSpec
JSON representation
{
"disable" : boolean ,
"maxRephraseSteps" : integer ,
"modelSpec" : {
object ( ModelSpec )
}
}
Fields
disable
boolean
Disable query rephraser.
maxRephraseSteps
integer
Max rephrase steps. The max number is 5 steps. If not set or set to < 1, it will be set to 1 by default.
modelSpec
object ( ModelSpec )
Optional. Query Rephraser Model specification.
ModelSpec
JSON representation
{
"modelType" : enum ( ModelType )
}
Fields
modelType
enum ( ModelType )
Optional. Enabled query rephraser model type. If not set, it will use LARGE by default.
UserLabelsEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
EndUserSpec
JSON representation
{
"endUserMetadata" : [
{
object ( EndUserMetaData )
}
]
}
Fields
endUserMetadata[]
object ( EndUserMetaData )
Optional. End user metadata.
EndUserMetaData
JSON representation
{
// Union field content can be only one of the following:
"chunkInfo" : {
object ( ChunkInfo )
}
// End of list of possible types for union field content .
}
Fields
Union field content . Search result content. content can be only one of the following:
chunkInfo
object ( ChunkInfo )
Chunk information.
ChunkInfo
JSON representation
{
"content" : string ,
"documentMetadata" : {
object ( DocumentMetadata )
}
}
Fields
content
string
Chunk textual content. It is limited to 8000 characters.
documentMetadata
object ( DocumentMetadata )
Metadata of the document from the current chunk.
DocumentMetadata
JSON representation
{
"title" : string
}
Fields
title
string
Title of the document.
Output Schema
Response message for ConversationalSearchService.AnswerQuery method.
AnswerQueryResponse
JSON representation
{
"answer" : {
object ( Answer )
} ,
"session" : {
object ( Session )
} ,
"answerQueryToken" : string
}
Fields
answer
object ( Answer )
Answer resource object. If AnswerQueryRequest.QueryUnderstandingSpec.QueryRephraserSpec.max_rephrase_steps is greater than 1, use Answer.name to fetch answer information using ConversationalSearchService.GetAnswer API.
session
object ( Session )
Session resource object. It will be only available when session field is set and valid in the AnswerQueryRequest request.
answerQueryToken
string
A global unique ID used for logging.
Answer
JSON representation
{
"name" : string ,
"state" : enum ( State ) ,
"answerText" : string ,
"citations" : [
{
object ( Citation )
}
] ,
"groundingSupports" : [
{
object ( GroundingSupport )
}
] ,
"references" : [
{
object ( Reference )
}
] ,
"blobAttachments" : [
{
object ( BlobAttachment )
}
] ,
"relatedQuestions" : [
string
] ,
"steps" : [
{
object ( Step )
}
] ,
"queryUnderstandingInfo" : {
object ( QueryUnderstandingInfo )
} ,
"answerSkippedReasons" : [
enum ( AnswerSkippedReason )
] ,
"createTime" : string ,
"completeTime" : string ,
"safetyRatings" : [
{
object ( SafetyRating )
}
] ,
// Union field _grounding_score can be only one of the following:
"groundingScore" : number
// End of list of possible types for union field _grounding_score .
}
Fields
name
string
Immutable. Fully qualified name projects/{project}/locations/global/collections/{collection}/engines/{engine}/sessions/*/answers/*
state
enum ( State )
The state of the answer generation.
answerText
string
The textual answer.
citations[]
object ( Citation )
Citations.
groundingSupports[]
object ( GroundingSupport )
Optional. Grounding supports.
references[]
object ( Reference )
References.
blobAttachments[]
object ( BlobAttachment )
List of blob attachments in the answer.
relatedQuestions[]
string
Suggested related questions.
steps[]
object ( Step )
Answer generation steps.
queryUnderstandingInfo
object ( QueryUnderstandingInfo )
Query understanding information.
answerSkippedReasons[]
enum ( AnswerSkippedReason )
Additional answer-skipped reasons. This provides the reason for ignored cases. If nothing is skipped, this field is not set.
createTime
string ( Timestamp format)
Output only. Answer creation timestamp.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
completeTime
string ( Timestamp format)
Output only. Answer completed timestamp.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
safetyRatings[]
object ( SafetyRating )
Optional. Safety ratings.
Union field _grounding_score .
_grounding_score can be only one of the following:
groundingScore
number
A score in the range of [0, 1] describing how grounded the answer is by the reference chunks.
Citation
JSON representation
{
"startIndex" : string ,
"endIndex" : string ,
"sources" : [
{
object ( CitationSource )
}
]
}
Fields
startIndex
string ( int64 format)
Index indicates the start of the segment, measured in bytes (UTF-8 unicode). If there are multi-byte characters,such as non-ASCII characters, the index measurement is longer than the string length.
endIndex
string ( int64 format)
End of the attributed segment, exclusive. Measured in bytes (UTF-8 unicode). If there are multi-byte characters,such as non-ASCII characters, the index measurement is longer than the string length.
sources[]
object ( CitationSource )
Citation sources for the attributed segment.
CitationSource
JSON representation
{
"referenceId" : string
}
Fields
referenceId
string
ID of the citation source.
GroundingSupport
JSON representation
{
"startIndex" : string ,
"endIndex" : string ,
"sources" : [
{
object ( CitationSource )
}
] ,
// Union field _grounding_score can be only one of the following:
"groundingScore" : number
// End of list of possible types for union field _grounding_score .
// Union field _grounding_check_required can be only one of the following:
"groundingCheckRequired" : boolean
// End of list of possible types for union field _grounding_check_required .
}
Fields
startIndex
string ( int64 format)
Required. Index indicates the start of the claim, measured in bytes (UTF-8 unicode).
endIndex
string ( int64 format)
Required. End of the claim, exclusive.
sources[]
object ( CitationSource )
Optional. Citation sources for the claim.
Union field _grounding_score .
_grounding_score can be only one of the following:
groundingScore
number
A score in the range of [0, 1] describing how grounded is a specific claim by the references. Higher value means that the claim is better supported by the reference chunks.
Union field _grounding_check_required .
_grounding_check_required can be only one of the following:
groundingCheckRequired
boolean
Indicates that this claim required grounding check. When the system decided this claim didn't require attribution/grounding check, this field is set to false. In that case, no grounding check was done for the claim and therefore grounding_score , sources is not returned.
Reference
JSON representation
{
// Union field content can be only one of the following:
"unstructuredDocumentInfo" : {
object ( UnstructuredDocumentInfo )
} ,
"chunkInfo" : {
object ( ChunkInfo )
} ,
"structuredDocumentInfo" : {
object ( StructuredDocumentInfo )
}
// End of list of possible types for union field content .
}
Fields
Union field content . Search result content. content can be only one of the following:
unstructuredDocumentInfo
object ( UnstructuredDocumentInfo )
Unstructured document information.
chunkInfo
object ( ChunkInfo )
Chunk information.
structuredDocumentInfo
object ( StructuredDocumentInfo )
Structured document information.
UnstructuredDocumentInfo
JSON representation
{
"document" : string ,
"uri" : string ,
"title" : string ,
"chunkContents" : [
{
object ( ChunkContent )
}
] ,
"structData" : {
object
}
}
Fields
document
string
Document resource name.
uri
string
URI for the document.
title
string
Title.
chunkContents[]
object ( ChunkContent )
List of cited chunk contents derived from document content.
structData
object ( Struct format)
The structured JSON metadata for the document. It is populated from the struct data from the Chunk in search result.
ChunkContent
JSON representation
{
"content" : string ,
"pageIdentifier" : string ,
"blobAttachmentIndexes" : [
string
] ,
// Union field _relevance_score can be only one of the following:
"relevanceScore" : number
// End of list of possible types for union field _relevance_score .
}
Fields
content
string
Chunk textual content.
pageIdentifier
string
Page identifier.
blobAttachmentIndexes[]
string ( int64 format)
Output only. Stores indexes of blobattachments linked to this chunk.
Union field _relevance_score .
_relevance_score can be only one of the following:
relevanceScore
number
The relevance of the chunk for a given query. Values range from 0.0 (completely irrelevant) to 1.0 (completely relevant). This value is for informational purpose only. It may change for the same query and chunk at any time due to a model retraining or change in implementation.
Struct
JSON representation
{
"fields" : {
string : value ,
...
}
}
Fields
fields
map (key: string, value: value ( Value format))
Unordered map of dynamically typed values.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
FieldsEntry
JSON representation
{
"key" : string ,
"value" : value
}
Fields
key
string
value
value ( Value format)
Value
JSON representation
{
// Union field kind can be only one of the following:
"nullValue" : null ,
"numberValue" : number ,
"stringValue" : string ,
"boolValue" : boolean ,
"structValue" : {
object
} ,
"listValue" : array
// End of list of possible types for union field kind .
}
Fields
Union field kind . The kind of value. kind can be only one of the following:
nullValue
null
Represents a null value.
numberValue
number
Represents a double value.
stringValue
string
Represents a string value.
boolValue
boolean
Represents a boolean value.
structValue
object ( Struct format)
Represents a structured value.
listValue
array ( ListValue format)
Represents a repeated Value .
ListValue
JSON representation
{
"values" : [
value
]
}
Fields
values[]
value ( Value format)
Repeated field of dynamically typed values.
ChunkInfo
JSON representation
{
"chunk" : string ,
"content" : string ,
"documentMetadata" : {
object ( DocumentMetadata )
} ,
"blobAttachmentIndexes" : [
string
] ,
// Union field _relevance_score can be only one of the following:
"relevanceScore" : number
// End of list of possible types for union field _relevance_score .
}
Fields
chunk
string
Chunk resource name.
content
string
Chunk textual content.
documentMetadata
object ( DocumentMetadata )
Document metadata.
blobAttachmentIndexes[]
string ( int64 format)
Output only. Stores indexes of blobattachments linked to this chunk.
Union field _relevance_score .
_relevance_score can be only one of the following:
relevanceScore
number
The relevance of the chunk for a given query. Values range from 0.0 (completely irrelevant) to 1.0 (completely relevant). This value is for informational purpose only. It may change for the same query and chunk at any time due to a model retraining or change in implementation.
DocumentMetadata
JSON representation
{
"document" : string ,
"uri" : string ,
"title" : string ,
"pageIdentifier" : string ,
"structData" : {
object
}
}
Fields
document
string
Document resource name.
uri
string
URI for the document.
title
string
Title.
pageIdentifier
string
Page identifier.
structData
object ( Struct format)
The structured JSON metadata for the document. It is populated from the struct data from the Chunk in search result.
StructuredDocumentInfo
JSON representation
{
"document" : string ,
"structData" : {
object
} ,
"title" : string ,
"uri" : string
}
Fields
document
string
Document resource name.
structData
object ( Struct format)
Structured search data.
title
string
Output only. The title of the document.
uri
string
Output only. The URI of the document.
BlobAttachment
JSON representation
{
"data" : {
object ( Blob )
} ,
"attributionType" : enum ( AttributionType )
}
Fields
data
object ( Blob )
Output only. The mime type and data of the blob.
attributionType
enum ( AttributionType )
Output only. The attribution type of the blob.
Blob
JSON representation
{
"mimeType" : string ,
"data" : string
}
Fields
mimeType
string
Output only. The media type (MIME type) of the generated or retrieved data.
data
string ( bytes format)
Output only. Raw bytes.
A base64-encoded string.
Step
JSON representation
{
"state" : enum ( State ) ,
"description" : string ,
"thought" : string ,
"actions" : [
{
object ( Action )
}
]
}
Fields
state
enum ( State )
The state of the step.
description
string
The description of the step.
thought
string
The thought of the step.
actions[]
object ( Action )
Actions.
Action
JSON representation
{
"observation" : {
object ( Observation )
} ,
// Union field action can be only one of the following:
"searchAction" : {
object ( SearchAction )
}
// End of list of possible types for union field action .
}
Fields
observation
object ( Observation )
Observation.
Union field action . The action. action can be only one of the following:
searchAction
object ( SearchAction )
Search action.
SearchAction
JSON representation
{
"query" : string
}
Fields
query
string
The query to search.
Observation
JSON representation
{
"searchResults" : [
{
object ( SearchResult )
}
]
}
Fields
searchResults[]
object ( SearchResult )
Search results observed by the search action, it can be snippets info or chunk info, depending on the citation type set by the user.
SearchResult
JSON representation
{
"document" : string ,
"uri" : string ,
"title" : string ,
"snippetInfo" : [
{
object ( SnippetInfo )
}
] ,
"chunkInfo" : [
{
object ( ChunkInfo )
}
] ,
"structData" : {
object
}
}
Fields
document
string
Document resource name.
uri
string
URI for the document.
title
string
Title.
snippetInfo[]
object ( SnippetInfo )
If citation_type is DOCUMENT_LEVEL_CITATION, populate document level snippets.
chunkInfo[]
object ( ChunkInfo )
If citation_type is CHUNK_LEVEL_CITATION and chunk mode is on, populate chunk info.
structData
object ( Struct format)
Data representation. The structured JSON data for the document. It's populated from the struct data from the Document, or the Chunk in search result.
SnippetInfo
JSON representation
{
"snippet" : string ,
"snippetStatus" : string
}
Fields
snippet
string
Snippet content.
snippetStatus
string
Status of the snippet defined by the search team.
ChunkInfo
JSON representation
{
"chunk" : string ,
"content" : string ,
// Union field _relevance_score can be only one of the following:
"relevanceScore" : number
// End of list of possible types for union field _relevance_score .
}
Fields
chunk
string
Chunk resource name.
content
string
Chunk textual content.
Union field _relevance_score .
_relevance_score can be only one of the following:
relevanceScore
number
The relevance of the chunk for a given query. Values range from 0.0 (completely irrelevant) to 1.0 (completely relevant). This value is for informational purpose only. It may change for the same query and chunk at any time due to a model retraining or change in implementation.
QueryUnderstandingInfo
JSON representation
{
"queryClassificationInfo" : [
{
object ( QueryClassificationInfo )
}
]
}
Fields
queryClassificationInfo[]
object ( QueryClassificationInfo )
Query classification information.
QueryClassificationInfo
JSON representation
{
"type" : enum ( Type ) ,
"positive" : boolean
}
Fields
type
enum ( Type )
Query classification type.
positive
boolean
Classification output.
Timestamp
JSON representation
{
"seconds" : string ,
"nanos" : integer
}
Fields
seconds
string ( int64 format)
Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be between -62135596800 and 253402300799 inclusive (which corresponds to 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z).
nanos
integer
Non-negative fractions of a second at nanosecond resolution. This field is the nanosecond portion of the duration, not an alternative to seconds. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be between 0 and 999,999,999 inclusive.
SafetyRating
JSON representation
{
"category" : enum ( HarmCategory ) ,
"probability" : enum ( HarmProbability ) ,
"probabilityScore" : number ,
"severity" : enum ( HarmSeverity ) ,
"severityScore" : number ,
"blocked" : boolean
}
Fields
category
enum ( HarmCategory )
Output only. Harm category.
probability
enum ( HarmProbability )
Output only. Harm probability levels in the content.
probabilityScore
number
Output only. Harm probability score.
severity
enum ( HarmSeverity )
Output only. Harm severity levels in the content.
severityScore
number
Output only. Harm severity score.
blocked
boolean
Output only. Indicates whether the content was filtered out because of this rating.
Session
JSON representation
{
"name" : string ,
"displayName" : string ,
"state" : enum ( State ) ,
"userPseudoId" : string ,
"turns" : [
{
object ( Turn )
}
] ,
"labels" : [
string
] ,
"startTime" : string ,
"endTime" : string ,
"isPinned" : boolean
}
Fields
name
string
Immutable. Fully qualified name projects/{project}/locations/global/collections/{collection}/engines/{engine}/sessions/*
displayName
string
Optional. The display name of the session.
This field is used to identify the session in the UI. By default, the display name is the first turn query text in the session.
state
enum ( State )
The state of the session.
userPseudoId
string
A unique identifier for tracking users.
turns[]
object ( Turn )
Turns.
labels[]
string
Optional. The labels for the session. Can be set as filter in ListSessionsRequest.
startTime
string ( Timestamp format)
Output only. The time the session started.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
Output only. The time the session finished.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
isPinned
boolean
Optional. Whether the session is pinned, pinned session will be displayed on the top of the session list.
Turn
JSON representation
{
"query" : {
object ( Query )
} ,
"answer" : string ,
"detailedAnswer" : {
object ( Answer )
} ,
"detailedAssistAnswer" : {
object ( AssistAnswer )
} ,
"queryConfig" : {
string : string ,
...
}
}
Fields
query
object ( Query )
Optional. The user query. May not be set if this turn is merely regenerating an answer to a different turn
answer
string
Optional. The resource name of the answer to the user query.
Only set if the answer generation (/answer API call) happened in this turn.
detailedAnswer
object ( Answer )
Output only. In ConversationalSearchService.GetSession API, if GetSessionRequest.include_answer_details is set to true, this field will be populated when getting answer query session.
detailedAssistAnswer
object ( AssistAnswer )
Output only. In ConversationalSearchService.GetSession API, if GetSessionRequest.include_answer_details is set to true, this field will be populated when getting assistant session.
queryConfig
map (key: string, value: string)
Optional. Represents metadata related to the query config, for example LLM model and version used, model parameters (temperature, grounding parameters, etc.). The prefix "google." is reserved for Google-developed functionality.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Query
JSON representation
{
"queryId" : string ,
// Union field content can be only one of the following:
"text" : string
// End of list of possible types for union field content .
}
Fields
queryId
string
Output only. Unique Id for the query.
Union field content . Query content. content can be only one of the following:
text
string
Plain text.
AssistAnswer
JSON representation
{
"name" : string ,
"state" : enum ( State ) ,
"replies" : [
{
object ( Reply )
}
] ,
"assistSkippedReasons" : [
enum ( AssistSkippedReason )
] ,
"customerPolicyEnforcementResult" : {
object ( CustomerPolicyEnforcementResult )
}
}
Fields
name
string
Immutable. Identifier. Resource name of the AssistAnswer . Format: projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/sessions/{session}/assistAnswers/{assist_answer}
This field must be a UTF-8 encoded string with a length limit of 1024 characters.
state
enum ( State )
State of the answer generation.
replies[]
object ( Reply )
Replies of the assistant.
assistSkippedReasons[]
enum ( AssistSkippedReason )
Reasons for not answering the assist call.
customerPolicyEnforcementResult
object ( CustomerPolicyEnforcementResult )
Optional. The field contains information about the various policy checks' results like the banned phrases or the Model Armor checks. This field is populated only if the assist call was skipped due to a policy violation.
Reply
JSON representation
{
"replyId" : string ,
// Union field reply can be only one of the following:
"groundedContent" : {
object ( AssistantGroundedContent )
}
// End of list of possible types for union field reply .
}
Fields
replyId
string
Output only. When set, uniquely identifies a reply within the AssistAnswer resource. During an AssistantService.StreamAssist call, multiple Reply messages with the same ID can occur within the response stream (across multiple StreamAssistResponse messages). These represent parts of a single Reply message in the final AssistAnswer resource.
Union field reply . Alternatives for the assistant reply. reply can be only one of the following:
groundedContent
object ( AssistantGroundedContent )
Possibly grounded response text or media from the assistant.
AssistantGroundedContent
JSON representation
{
"content" : {
object ( AssistantContent )
} ,
"citationMetadata" : {
object ( CitationMetadata )
} ,
// Union field metadata can be only one of the following:
"textGroundingMetadata" : {
object ( TextGroundingMetadata )
}
// End of list of possible types for union field metadata .
}
Fields
content
object ( AssistantContent )
The content.
citationMetadata
object ( CitationMetadata )
Source attribution of the generated content. See also https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview#citation_check
Union field metadata . Grounding metadata for various modals. It only supports text for now. metadata can be only one of the following:
textGroundingMetadata
object ( TextGroundingMetadata )
Metadata for grounding based on text sources.
TextGroundingMetadata
JSON representation
{
"segments" : [
{
object ( Segment )
}
] ,
"references" : [
{
object ( Reference )
}
]
}
Fields
segments[]
object ( Segment )
Grounding information for parts of the text.
references[]
object ( Reference )
References for the grounded text.
Segment
JSON representation
{
"startIndex" : string ,
"endIndex" : string ,
"referenceIndices" : [
integer
] ,
"groundingScore" : number ,
"text" : string
}
Fields
startIndex
string ( int64 format)
Zero-based index indicating the start of the segment, measured in bytes of a UTF-8 string (i.e. characters encoded on multiple bytes have a length of more than one).
endIndex
string ( int64 format)
End of the segment, exclusive.
referenceIndices[]
integer
References for the segment.
groundingScore
number
Score for the segment.
text
string
The text segment itself.
Reference
JSON representation
{
"content" : string ,
"documentMetadata" : {
object ( DocumentMetadata )
}
}
Fields
content
string
Referenced text content.
documentMetadata
object ( DocumentMetadata )
Document metadata.
DocumentMetadata
JSON representation
{
// Union field _document can be only one of the following:
"document" : string
// End of list of possible types for union field _document .
// Union field _uri can be only one of the following:
"uri" : string
// End of list of possible types for union field _uri .
// Union field _title can be only one of the following:
"title" : string
// End of list of possible types for union field _title .
// Union field _page_identifier can be only one of the following:
"pageIdentifier" : string
// End of list of possible types for union field _page_identifier .
// Union field _domain can be only one of the following:
"domain" : string
// End of list of possible types for union field _domain .
// Union field _mime_type can be only one of the following:
"mimeType" : string
// End of list of possible types for union field _mime_type .
}
Fields
Union field _document .
_document can be only one of the following:
document
string
Document resource name.
Union field _uri .
_uri can be only one of the following:
uri
string
URI for the document. It may contain a URL that redirects to the actual website.
Union field _title .
_title can be only one of the following:
title
string
Title.
Union field _page_identifier .
_page_identifier can be only one of the following:
pageIdentifier
string
Page identifier.
Union field _domain .
_domain can be only one of the following:
domain
string
Domain name from the document URI. Note that the uri field may contain a URL that redirects to the actual website, in which case this will contain the domain name of the target site.
Union field _mime_type .
_mime_type can be only one of the following:
mimeType
string
The mime type of the document. https://www.iana.org/assignments/media-types/media-types.xhtml .
AssistantContent
JSON representation
{
"role" : string ,
"thought" : boolean ,
// Union field data can be only one of the following:
"text" : string ,
"inlineData" : {
object ( Blob )
} ,
"file" : {
object ( File )
} ,
"executableCode" : {
object ( ExecutableCode )
} ,
"codeExecutionResult" : {
object ( CodeExecutionResult )
}
// End of list of possible types for union field data .
}
Fields
role
string
The producer of the content. Can be "model" or "user".
thought
boolean
Optional. Indicates if the part is thought from the model.
Union field data . Contained data. data can be only one of the following:
text
string
Inline text.
inlineData
object ( Blob )
Inline binary data.
file
object ( File )
A file, e.g., an audio summary.
executableCode
object ( ExecutableCode )
Code generated by the model that is meant to be executed.
codeExecutionResult
object ( CodeExecutionResult )
Result of executing an ExecutableCode.
Blob
JSON representation
{
"mimeType" : string ,
"data" : string
}
Fields
mimeType
string
Required. The media type (MIME type) of the generated data.
data
string ( bytes format)
Required. Raw bytes.
A base64-encoded string.
File
JSON representation
{
"mimeType" : string ,
"fileId" : string
}
Fields
mimeType
string
Required. The media type (MIME type) of the file.
fileId
string
Required. The file ID.
ExecutableCode
JSON representation
{
"code" : string
}
Fields
code
string
Required. The code content. Currently only supports Python.
CodeExecutionResult
JSON representation
{
"outcome" : enum ( Outcome ) ,
"output" : string
}
Fields
outcome
enum ( Outcome )
Required. Outcome of the code execution.
output
string
Optional. Contains stdout when code execution is successful, stderr or other description otherwise.
CitationMetadata
JSON representation
{
"citations" : [
{
object ( Citation )
}
]
}
Fields
citations[]
object ( Citation )
Output only. List of citations.
Citation
JSON representation
{
"startIndex" : integer ,
"endIndex" : integer ,
"uri" : string ,
"title" : string ,
"license" : string ,
"publicationDate" : {
object ( Date )
}
}
Fields
startIndex
integer
Output only. Start index into the content.
endIndex
integer
Output only. End index into the content.
uri
string
Output only. Url reference of the attribution.
title
string
Output only. Title of the attribution.
license
string
Output only. License of the attribution.
publicationDate
object ( Date )
Output only. Publication date of the attribution.
Date
JSON representation
{
"year" : integer ,
"month" : integer ,
"day" : integer
}
Fields
year
integer
Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
month
integer
Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
day
integer
Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
CustomerPolicyEnforcementResult
JSON representation
{
"verdict" : enum ( Verdict ) ,
"policyResults" : [
{
object ( PolicyEnforcementResult )
}
]
}
Fields
verdict
enum ( Verdict )
Final verdict of the customer policy enforcement. If only one policy blocked the processing, the verdict is BLOCK.
policyResults[]
object ( PolicyEnforcementResult )
Customer policy enforcement results. Populated only if the assist call was skipped due to a policy violation. It contains results from those filters that blocked the processing of the query.
PolicyEnforcementResult
JSON representation
{
// Union field enforcement_result can be only one of the following:
"bannedPhraseEnforcementResult" : {
object ( BannedPhraseEnforcementResult )
} ,
"modelArmorEnforcementResult" : {
object ( ModelArmorEnforcementResult )
}
// End of list of possible types for union field enforcement_result .
}
Fields
Union field enforcement_result . The policy type specific result. It can be either an error or a detailed information about the policy enforcement result. enforcement_result can be only one of the following:
bannedPhraseEnforcementResult
object ( BannedPhraseEnforcementResult )
The policy enforcement result for the banned phrase policy.
modelArmorEnforcementResult
object ( ModelArmorEnforcementResult )
The policy enforcement result for the Model Armor policy.
BannedPhraseEnforcementResult
JSON representation
{
"bannedPhrases" : [
string
]
}
Fields
bannedPhrases[]
string
The banned phrases that were found in the query or the answer.
ModelArmorEnforcementResult
JSON representation
{
// Union field result can be only one of the following:
"modelArmorViolation" : string ,
"error" : {
object ( Status )
}
// End of list of possible types for union field result .
}
Fields
Union field result . The Model Armor policy result. result can be only one of the following:
modelArmorViolation
string
The Model Armor violation that was found.
error
object ( Status )
The error returned by Model Armor if the policy enforcement failed for some reason.
Status
JSON representation
{
"code" : integer ,
"message" : string ,
"details" : [
{
"@type" : string ,
field1 : ... ,
...
}
]
}
Fields
code
integer
The status code, which should be an enum value of google.rpc.Code .
message
string
A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
details[]
object
A list of messages that carry the error details. There is a common set of message types for APIs to use.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
Any
JSON representation
{
"typeUrl" : string ,
"value" : string
}
Fields
typeUrl
string
A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL's path must represent the fully qualified name of the type (as in path/google.protobuf.Duration ). The name should be in a canonical form (e.g., leading "." is not accepted).
In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme http , https , or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows:
If no scheme is provided, https is assumed.
An HTTP GET on the URL must yield a google.protobuf.Type value in binary format, or produce an error.
Applications are allowed to cache lookup results based on the URL, or have them precompiled into a binary to avoid any lookup. Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.)
Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. As of May 2023, there are no widely used type server implementations and no plans to implement one.
Schemes other than http , https (or the empty scheme) might be used with implementation specific semantics.
value
string ( bytes format)
Must be a valid serialized protocol buffer of the above specified type.
A base64-encoded string.
QueryConfigEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-20 UTC."],[],[]]
