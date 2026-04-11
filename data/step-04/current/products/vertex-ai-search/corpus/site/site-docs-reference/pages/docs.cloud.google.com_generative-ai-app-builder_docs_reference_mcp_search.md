---
title: "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search
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
Tool: search
Perform a search on ingested data in Google owned data stores
The following sample demonstrate how to use curl to invoke the search MCP tool.
Curl Request
curl --location 'https://discoveryengine.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "search",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request message for SearchService.Search method.
SearchRequest
JSON representation
{
"servingConfig" : string ,
"branch" : string ,
"query" : string ,
"pageCategories" : [
string
] ,
"imageQuery" : {
object ( ImageQuery )
} ,
"pageSize" : integer ,
"pageToken" : string ,
"offset" : integer ,
"oneBoxPageSize" : integer ,
"dataStoreSpecs" : [
{
object ( DataStoreSpec )
}
] ,
"filter" : string ,
"canonicalFilter" : string ,
"orderBy" : string ,
"userInfo" : {
object ( UserInfo )
} ,
"languageCode" : string ,
"regionCode" : string ,
"facetSpecs" : [
{
object ( FacetSpec )
}
] ,
"boostSpec" : {
object ( BoostSpec )
} ,
"params" : {
string : value ,
...
} ,
"queryExpansionSpec" : {
object ( QueryExpansionSpec )
} ,
"spellCorrectionSpec" : {
object ( SpellCorrectionSpec )
} ,
"userPseudoId" : string ,
"useLatestData" : boolean ,
"contentSearchSpec" : {
object ( ContentSearchSpec )
} ,
"embeddingSpec" : {
object ( EmbeddingSpec )
} ,
"rankingExpression" : string ,
"rankingExpressionBackend" : enum ( RankingExpressionBackend ) ,
"safeSearch" : boolean ,
"userLabels" : {
string : string ,
...
} ,
"naturalLanguageQueryUnderstandingSpec" : {
object ( NaturalLanguageQueryUnderstandingSpec )
} ,
"searchAsYouTypeSpec" : {
object ( SearchAsYouTypeSpec )
} ,
"customFineTuningSpec" : {
object ( CustomFineTuningSpec )
} ,
"displaySpec" : {
object ( DisplaySpec )
} ,
"crowdingSpecs" : [
{
object ( CrowdingSpec )
}
] ,
"session" : string ,
"sessionSpec" : {
object ( SessionSpec )
} ,
"relevanceThreshold" : enum ( RelevanceThreshold ) ,
"relevanceFilterSpec" : {
object ( RelevanceFilterSpec )
} ,
"personalizationSpec" : {
object ( PersonalizationSpec )
} ,
"relevanceScoreSpec" : {
object ( RelevanceScoreSpec )
} ,
"searchAddonSpec" : {
object ( SearchAddonSpec )
}
}
Fields
servingConfig
string
Required. The resource name of the Search serving config, such as projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config , or projects/*/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config . This field is used to identify the serving configuration name, set of models used to make the search.
branch
string
The branch resource name, such as projects/*/locations/global/collections/default_collection/dataStores/default_data_store/branches/0 .
Use default_branch as the branch ID or leave this field empty, to search documents under the default branch.
query
string
Raw search query.
pageCategories[]
string
Optional. The categories associated with a category page. Must be set for category navigation queries to achieve good search quality. The format should be the same as PageInfo.page_category . This field is the equivalent of the query for browse (navigation) queries. It's used by the browse model when the query is empty.
If the field is empty, it will not be used by the browse model. If the field contains more than one element, only the first element will be used.
To represent full path of a category, use '>' character to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). For example, Graphics Cards > RTX>4090 > Founders Edition where "RTX > 4090" represents one level, can be rewritten as Graphics Cards > RTX_4090
> Founders Edition
imageQuery
object ( ImageQuery )
Raw image query.
pageSize
integer
Maximum number of Document s to return. The maximum allowed value depends on the data type. Values above the maximum value are coerced to the maximum value.
Websites with basic indexing: Default 10 , Maximum 25 .
Websites with advanced indexing: Default 25 , Maximum 50 .
Other: Default 50 , Maximum 100 .
If this field is negative, an INVALID_ARGUMENT is returned.
pageToken
string
A page token received from a previous SearchService.Search call. Provide this to retrieve the subsequent page.
When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
offset
integer
A 0-indexed integer that specifies the current offset (that is, starting result location, amongst the Document s deemed by the API as relevant) in search results. This field is only considered if page_token is unset.
If this field is negative, an INVALID_ARGUMENT is returned.
A large offset may be capped to a reasonable threshold.
oneBoxPageSize
integer
The maximum number of results to return for OneBox. This applies to each OneBox type individually. Default number is 10.
dataStoreSpecs[]
object ( DataStoreSpec )
Specifications that define the specific DataStore s to be searched, along with configurations for those data stores. This is only considered for Engine s with multiple data stores. For engines with a single data store, the specs directly under SearchRequest should be used.
filter
string
The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. Filter expression is case-sensitive.
If this field is unrecognizable, an INVALID_ARGUMENT is returned.
Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema. For example a media customer might have a field 'name' in their schema. In this case the filter would look like this: filter --> name:'ANY("king kong")'
For more information about filtering including syntax and filter operators, see Filter
canonicalFilter
string
The default filter that is applied when a user performs a search without checking any filters on the search page.
The filter applied to every search request when quality improvement such as query expansion is needed. In the case a query does not have a sufficient amount of results this filter will be used to determine whether or not to enable the query expansion flow. The original filter will still be used for the query expanded search. This field is strongly recommended to achieve high search quality.
For more information about filter syntax, see SearchRequest.filter .
orderBy
string
The order in which documents are returned. Documents can be ordered by a field in an Document object. Leave it unset if ordered by relevance. order_by expression is case-sensitive.
For more information on ordering the website search results, see Order web search results . For more information on ordering the healthcare search results, see Order healthcare search results . If this field is unrecognizable, an INVALID_ARGUMENT is returned.
userInfo
object ( UserInfo )
Information about the end user. Highly recommended for analytics and personalization. UserInfo.user_agent is used to deduce device_type for analytics.
languageCode
string
The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see Standard fields . This field helps to better interpret the query. If a value isn't specified, the query language code is automatically detected, which may not be accurate.
regionCode
string
The Unicode country/region code (CLDR) of a location, such as "US" and "419". For more information, see Standard fields . If set, then results will be boosted based on the region_code provided.
facetSpecs[]
object ( FacetSpec )
Facet specifications for faceted search. If empty, no facets are returned.
A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned.
boostSpec
object ( BoostSpec )
Boost specification to boost certain documents. For more information on boosting, see Boosting
params
map (key: string, value: value ( Value format))
Additional search parameters.
For public website search only, supported values are:
user_country_code : string. Default empty. If set to non-empty, results are restricted or boosted based on the location provided. For example, user_country_code: "au"
For available codes see Country Codes
search_type : double. Default empty. Enables non-webpage searching depending on the value. The only valid non-default value is 1, which enables image searching. For example, search_type: 1
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
queryExpansionSpec
object ( QueryExpansionSpec )
The query expansion specification that specifies the conditions under which query expansion occurs.
spellCorrectionSpec
object ( SpellCorrectionSpec )
The spell correction specification that specifies the mode under which spell correction takes effect.
userPseudoId
string
Optional. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website.
This field should NOT have a fixed value such as unknown_visitor .
This should be the same identifier as UserEvent.user_pseudo_id and CompleteQueryRequest.user_pseudo_id
The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
useLatestData
boolean
Uses the Engine, ServingConfig and Control freshly read from the database.
Note: this skips config cache and introduces dependency on databases, which could significantly increase the API latency. It should only be used for testing, but not serving end users.
contentSearchSpec
object ( ContentSearchSpec )
A specification for configuring the behavior of content search.
embeddingSpec
object ( EmbeddingSpec )
Uses the provided embedding to do additional semantic document retrieval. The retrieval is based on the dot product of SearchRequest.EmbeddingSpec.EmbeddingVector.vector and the document embedding that is provided in SearchRequest.EmbeddingSpec.EmbeddingVector.field_path .
If SearchRequest.EmbeddingSpec.EmbeddingVector.field_path is not provided, it will use ServingConfig.EmbeddingConfig.field_path .
rankingExpression
string
Optional. The ranking expression controls the customized ranking on retrieval documents. This overrides ServingConfig.ranking_expression . The syntax and supported features depend on the ranking_expression_backend value. If ranking_expression_backend is not provided, it defaults to RANK_BY_EMBEDDING .
If ranking_expression_backend is not provided or set to RANK_BY_EMBEDDING , it should be a single function or multiple functions that are joined by "+".
ranking_expression = function, { " + ", function };
Supported functions:
double * relevance_score
double * dotProduct(embedding_field_path)
Function variables:
relevance_score : pre-defined keywords, used for measure relevance between query and document.
embedding_field_path : the document embedding field used with query embedding vector.
dotProduct : embedding function between embedding_field_path and query embedding vector.
Example ranking expression:
If document has an embedding field doc_embedding, the ranking expression could be 0.5 * relevance_score + 0.3 * dotProduct(doc_embedding) .
If ranking_expression_backend is set to RANK_BY_FORMULA , the following expression types (and combinations of those chained using + or * operators) are supported:
double
signal
log(signal)
exp(signal)
rr(signal, double > 0) -- reciprocal rank transformation with second argument being a denominator constant.
is_nan(signal) -- returns 0 if signal is NaN, 1 otherwise.
fill_nan(signal1, signal2 | double) -- if signal1 is NaN, returns signal2 | double, else returns signal1.
Here are a few examples of ranking formulas that use the supported ranking expression types:
0.2 * semantic_similarity_score + 0.8 * log(keyword_similarity_score) -- mostly rank by the logarithm of keyword_similarity_score with slight semantic_smilarity_score adjustment.
0.2 * exp(fill_nan(semantic_similarity_score, 0)) + 0.3 *
is_nan(keyword_similarity_score) -- rank by the exponent of semantic_similarity_score filling the value with 0 if it's NaN, also add constant 0.3 adjustment to the final score if semantic_similarity_score is NaN.
0.2 * rr(semantic_similarity_score, 16) + 0.8 *
rr(keyword_similarity_score, 16) -- mostly rank by the reciprocal rank of keyword_similarity_score with slight adjustment of reciprocal rank of semantic_smilarity_score .
The following signals are supported:
semantic_similarity_score : semantic similarity adjustment that is calculated using the embeddings generated by a proprietary Google model. This score determines how semantically similar a search query is to a document.
keyword_similarity_score : keyword match adjustment uses the Best Match 25 (BM25) ranking function. This score is calculated using a probabilistic model to estimate the probability that a document is relevant to a given query.
relevance_score : semantic relevance adjustment that uses a proprietary Google model to determine the meaning and intent behind a user's query in context with the content in the documents.
pctr_rank : predicted conversion rate adjustment as a rank use predicted Click-through rate (pCTR) to gauge the relevance and attractiveness of a search result from a user's perspective. A higher pCTR suggests that the result is more likely to satisfy the user's query and intent, making it a valuable signal for ranking.
freshness_rank : freshness adjustment as a rank
document_age : The time in hours elapsed since the document was last updated, a floating-point number (e.g., 0.25 means 15 minutes).
topicality_rank : topicality adjustment as a rank. Uses proprietary Google model to determine the keyword-based overlap between the query and the document.
base_rank : the default rank of the result
rankingExpressionBackend
enum ( RankingExpressionBackend )
Optional. The backend to use for the ranking expression evaluation.
safeSearch
boolean
Whether to turn on safe search. This is only supported for website search.
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
naturalLanguageQueryUnderstandingSpec
object ( NaturalLanguageQueryUnderstandingSpec )
Optional. Config for natural language query understanding capabilities, such as extracting structured field filters from the query. Refer to this documentation for more information. If naturalLanguageQueryUnderstandingSpec is not specified, no additional natural language query understanding will be done.
searchAsYouTypeSpec
object ( SearchAsYouTypeSpec )
Search as you type configuration. Only supported for the IndustryVertical.MEDIA vertical.
customFineTuningSpec
object ( CustomFineTuningSpec )
Custom fine tuning configs. If set, it has higher priority than the configs set in ServingConfig.custom_fine_tuning_spec .
displaySpec
object ( DisplaySpec )
Optional. Config for display feature, like match highlighting on search results.
crowdingSpecs[]
object ( CrowdingSpec )
Optional. Crowding specifications for improving result diversity. If multiple CrowdingSpecs are specified, crowding will be evaluated on each unique combination of the field values, and max_count will be the maximum value of max_count across all CrowdingSpecs. For example, if the first CrowdingSpec has field = "color" and max_count = 3, and the second CrowdingSpec has field = "size" and max_count = 2, then after 3 documents that share the same color AND size have been returned, subsequent ones should be removed or demoted.
session
string
The session resource name. Optional.
Session allows users to do multi-turn /search API calls or coordination between /search API calls and /answer API calls.
Example #1 (multi-turn /search API calls): Call /search API with the session ID generated in the first call. Here, the previous search query gets considered in query standing. I.e., if the first query is "How did Alphabet do in 2022?" and the current query is "How about 2023?", the current query will be interpreted as "How did Alphabet do in 2023?".
Example #2 (coordination between /search API calls and /answer API calls): Call /answer API with the session ID generated in the first call. Here, the answer generation happens in the context of the search results from the first search call.
Multi-turn Search feature is currently at private GA stage. Please use v1alpha or v1beta version instead before we launch this feature to public GA. Or ask for allowlisting through Google Support team.
sessionSpec
object ( SessionSpec )
Session specification.
Can be used only when session is set.
relevanceThreshold
enum ( RelevanceThreshold )
The global relevance threshold of the search results.
Defaults to Google defined threshold, leveraging a balance of precision and recall to deliver both highly accurate results and comprehensive coverage of relevant information.
If more granular relevance filtering is required, use the relevance_filter_spec instead.
This feature is not supported for healthcare search.
relevanceFilterSpec
object ( RelevanceFilterSpec )
Optional. The granular relevance filtering specification.
If not specified, the global relevance_threshold will be used for all sub-searches. If specified, this overrides the global relevance_threshold to use thresholds on a per sub-search basis.
This feature is currently supported only for custom and site search.
personalizationSpec
object ( PersonalizationSpec )
The specification for personalization.
Notice that if both ServingConfig.personalization_spec and SearchRequest.personalization_spec are set, SearchRequest.personalization_spec overrides ServingConfig.personalization_spec .
relevanceScoreSpec
object ( RelevanceScoreSpec )
Optional. The specification for returning the relevance score.
searchAddonSpec
object ( SearchAddonSpec )
Optional. SearchAddonSpec is used to disable add-ons for search as per new repricing model. This field is only supported for search requests.
ImageQuery
JSON representation
{
// Union field image can be only one of the following:
"imageBytes" : string
// End of list of possible types for union field image .
}
Fields
Union field image .
image can be only one of the following:
imageBytes
string
Base64 encoded image bytes. Supported image formats: JPEG, PNG, and BMP.
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
UserInfo
JSON representation
{
"userId" : string ,
"userAgent" : string ,
"timeZone" : string
}
Fields
userId
string
Highly recommended for logged-in users. Unique identifier for logged-in user, such as a user name. Don't set for anonymous users.
Always use a hashed value for this ID.
Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality.
The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
userAgent
string
User agent as included in the HTTP header.
The field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned.
This should not be set when using the client side event reporting with GTM or JavaScript tag in UserEventService.CollectUserEvent or if UserEvent.direct_user_request is set.
timeZone
string
Optional. IANA time zone, e.g. Europe/Budapest.
FacetSpec
JSON representation
{
"facetKey" : {
object ( FacetKey )
} ,
"limit" : integer ,
"excludedFilterKeys" : [
string
] ,
"enableDynamicPosition" : boolean
}
Fields
facetKey
object ( FacetKey )
Required. The facet key specification.
limit
integer
Maximum facet values that are returned for this facet. If unspecified, defaults to 20. The maximum allowed value is 300. Values above 300 are coerced to 300. For aggregation in healthcare search, when the [FacetKey.key] is "healthcare_aggregation_key", the limit will be overridden to 10,000 internally, regardless of the value set here.
If this field is negative, an INVALID_ARGUMENT is returned.
excludedFilterKeys[]
string
List of keys to exclude when faceting.
By default, FacetKey.key is not excluded from the filter unless it is listed in this field.
Listing a facet key in this field allows its values to appear as facet results, even when they are filtered out of search results. Using this field does not affect what search results are returned.
For example, suppose there are 100 documents with the color facet "Red" and 200 documents with the color facet "Blue". A query containing the filter "color:ANY("Red")" and having "color" as FacetKey.key would by default return only "Red" documents in the search results, and also return "Red" with count 100 as the only color facet. Although there are also blue documents available, "Blue" would not be shown as an available facet value.
If "color" is listed in "excludedFilterKeys", then the query returns the facet values "Red" with count 100 and "Blue" with count 200, because the "color" key is now excluded from the filter. Because this field doesn't affect search results, the search results are still correctly filtered to return only "Red" documents.
A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned.
enableDynamicPosition
boolean
Enables dynamic position for this facet. If set to true, the position of this facet among all facets in the response is determined automatically. If dynamic facets are enabled, it is ordered together. If set to false, the position of this facet in the response is the same as in the request, and it is ranked before the facets with dynamic position enable and all dynamic facets.
For example, you may always want to have rating facet returned in the response, but it's not necessarily to always display the rating facet at the top. In that case, you can set enable_dynamic_position to true so that the position of rating facet in response is determined automatically.
Another example, assuming you have the following facets in the request:
"rating", enable_dynamic_position = true
"price", enable_dynamic_position = false
"brands", enable_dynamic_position = false
And also you have a dynamic facets enabled, which generates a facet gender . Then the final order of the facets in the response can be ("price", "brands", "rating", "gender") or ("price", "brands", "gender", "rating") depends on how API orders "gender" and "rating" facets. However, notice that "price" and "brands" are always ranked at first and second position because their enable_dynamic_position is false.
FacetKey
JSON representation
{
"key" : string ,
"intervals" : [
{
object ( Interval )
}
] ,
"restrictedValues" : [
string
] ,
"prefixes" : [
string
] ,
"contains" : [
string
] ,
"caseInsensitive" : boolean ,
"orderBy" : string
}
Fields
key
string
Required. Supported textual and numerical facet keys in Document object, over which the facet values are computed. Facet key is case-sensitive.
intervals[]
object ( Interval )
Set only if values should be bucketed into intervals. Must be set for facets with numerical values. Must not be set for facet with text values. Maximum number of intervals is 30.
restrictedValues[]
string
Only get facet for the given restricted values. Only supported on textual fields. For example, suppose "category" has three values "Action > 2022", "Action > 2021" and "Sci-Fi > 2022". If set "restricted_values" to "Action > 2022", the "category" facet only contains "Action > 2022". Only supported on textual fields. Maximum is 10.
prefixes[]
string
Only get facet values that start with the given string prefix. For example, suppose "category" has three values "Action > 2022", "Action > 2021" and "Sci-Fi > 2022". If set "prefixes" to "Action", the "category" facet only contains "Action > 2022" and "Action > 2021". Only supported on textual fields. Maximum is 10.
contains[]
string
Only get facet values that contain the given strings. For example, suppose "category" has three values "Action > 2022", "Action > 2021" and "Sci-Fi > 2022". If set "contains" to "2022", the "category" facet only contains "Action > 2022" and "Sci-Fi > 2022". Only supported on textual fields. Maximum is 10.
caseInsensitive
boolean
True to make facet keys case insensitive when getting faceting values with prefixes or contains; false otherwise.
orderBy
string
The order in which documents are returned.
Allowed values are:
"count desc", which means order by SearchResponse.Facet.values.count descending.
"value desc", which means order by SearchResponse.Facet.values.value descending. Only applies to textual facets.
If not set, textual values are sorted in natural order ; numerical intervals are sorted in the order given by FacetSpec.FacetKey.intervals .
Interval
JSON representation
{
// Union field min can be only one of the following:
"minimum" : number ,
"exclusiveMinimum" : number
// End of list of possible types for union field min .
// Union field max can be only one of the following:
"maximum" : number ,
"exclusiveMaximum" : number
// End of list of possible types for union field max .
}
Fields
Union field min . The lower bound of the interval. If neither of the min fields are set, then the lower bound is negative infinity.
This field must be not larger than max. Otherwise, an INVALID_ARGUMENT error is returned. min can be only one of the following:
minimum
number
Inclusive lower bound.
exclusiveMinimum
number
Exclusive lower bound.
Union field max . The upper bound of the interval. If neither of the max fields are set, then the upper bound is positive infinity.
This field must be not smaller than min. Otherwise, an INVALID_ARGUMENT error is returned. max can be only one of the following:
maximum
number
Inclusive upper bound.
exclusiveMaximum
number
Exclusive upper bound.
ParamsEntry
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
QueryExpansionSpec
JSON representation
{
"condition" : enum ( Condition ) ,
"pinUnexpandedResults" : boolean
}
Fields
condition
enum ( Condition )
The condition under which query expansion should occur. Default to Condition.DISABLED .
pinUnexpandedResults
boolean
Whether to pin unexpanded results. If this field is set to true, unexpanded products are always at the top of the search results, followed by the expanded results.
SpellCorrectionSpec
JSON representation
{
"mode" : enum ( Mode )
}
Fields
mode
enum ( Mode )
The mode under which spell correction replaces the original search query. Defaults to Mode.AUTO .
ContentSearchSpec
JSON representation
{
"snippetSpec" : {
object ( SnippetSpec )
} ,
"summarySpec" : {
object ( SummarySpec )
} ,
"extractiveContentSpec" : {
object ( ExtractiveContentSpec )
} ,
"searchResultMode" : enum ( SearchResultMode ) ,
"chunkSpec" : {
object ( ChunkSpec )
}
}
Fields
snippetSpec
object ( SnippetSpec )
If snippetSpec is not specified, snippets are not included in the search response.
summarySpec
object ( SummarySpec )
If summarySpec is not specified, summaries are not included in the search response.
extractiveContentSpec
object ( ExtractiveContentSpec )
If there is no extractive_content_spec provided, there will be no extractive answer in the search response.
searchResultMode
enum ( SearchResultMode )
Specifies the search result mode. If unspecified, the search result mode defaults to DOCUMENTS .
chunkSpec
object ( ChunkSpec )
Specifies the chunk spec to be returned from the search response. Only available if the SearchRequest.ContentSearchSpec.search_result_mode is set to CHUNKS
SnippetSpec
JSON representation
{
"maxSnippetCount" : integer ,
"referenceOnly" : boolean ,
"returnSnippet" : boolean
}
Fields
maxSnippetCount (deprecated)
integer
This item is deprecated!
[DEPRECATED] This field is deprecated. To control snippet return, use return_snippet field. For backwards compatibility, we will return snippet if max_snippet_count > 0.
referenceOnly (deprecated)
boolean
This item is deprecated!
[DEPRECATED] This field is deprecated and will have no affect on the snippet.
returnSnippet
boolean
If true , then return snippet. If no snippet can be generated, we return "No snippet is available for this page." A snippet_status with SUCCESS or NO_SNIPPET_AVAILABLE will also be returned.
SummarySpec
JSON representation
{
"summaryResultCount" : integer ,
"includeCitations" : boolean ,
"ignoreAdversarialQuery" : boolean ,
"ignoreNonSummarySeekingQuery" : boolean ,
"ignoreLowRelevantContent" : boolean ,
"ignoreJailBreakingQuery" : boolean ,
"multimodalSpec" : {
object ( MultiModalSpec )
} ,
"modelPromptSpec" : {
object ( ModelPromptSpec )
} ,
"languageCode" : string ,
"modelSpec" : {
object ( ModelSpec )
} ,
"useSemanticChunks" : boolean
}
Fields
summaryResultCount
integer
The number of top results to generate the summary from. If the number of results returned is less than summaryResultCount , the summary is generated from all of the results.
At most 10 results for documents mode, or 50 for chunks mode, can be used to generate a summary. The chunks mode is used when SearchRequest.ContentSearchSpec.search_result_mode is set to CHUNKS .
includeCitations
boolean
Specifies whether to include citations in the summary. The default value is false .
When this field is set to true , summaries include in-line citation numbers.
Example summary including citations:
BigQuery is Google Cloud's fully managed and completely serverless enterprise data warehouse [1]. BigQuery supports all data types, works across clouds, and has built-in machine learning and business intelligence, all within a unified platform [2, 3].
The citation numbers refer to the returned search results and are 1-indexed. For example, [1] means that the sentence is attributed to the first search result. [2, 3] means that the sentence is attributed to both the second and third search results.
ignoreAdversarialQuery
boolean
Specifies whether to filter out adversarial queries. The default value is false .
Google employs search-query classification to detect adversarial queries. No summary is returned if the search query is classified as an adversarial query. For example, a user might ask a question regarding negative comments about the company or submit a query designed to generate unsafe, policy-violating output. If this field is set to true , we skip generating summaries for adversarial queries and return fallback messages instead.
ignoreNonSummarySeekingQuery
boolean
Specifies whether to filter out queries that are not summary-seeking. The default value is false .
Google employs search-query classification to detect summary-seeking queries. No summary is returned if the search query is classified as a non-summary seeking query. For example, why is the sky blue and Who
is the best soccer player in the world? are summary-seeking queries, but SFO airport and world cup 2026 are not. They are most likely navigational queries. If this field is set to true , we skip generating summaries for non-summary seeking queries and return fallback messages instead.
ignoreLowRelevantContent
boolean
Specifies whether to filter out queries that have low relevance. The default value is false .
If this field is set to false , all search results are used regardless of relevance to generate answers. If set to true , only queries with high relevance search results will generate answers.
ignoreJailBreakingQuery
boolean
Optional. Specifies whether to filter out jail-breaking queries. The default value is false .
Google employs search-query classification to detect jail-breaking queries. No summary is returned if the search query is classified as a jail-breaking query. A user might add instructions to the query to change the tone, style, language, content of the answer, or ask the model to act as a different entity, e.g. "Reply in the tone of a competing company's CEO". If this field is set to true , we skip generating summaries for jail-breaking queries and return fallback messages instead.
multimodalSpec
object ( MultiModalSpec )
Optional. Multimodal specification.
modelPromptSpec
object ( ModelPromptSpec )
If specified, the spec will be used to modify the prompt provided to the LLM.
languageCode
string
Language code for Summary. Use language tags defined by BCP47 . Note: This is an experimental feature.
modelSpec
object ( ModelSpec )
If specified, the spec will be used to modify the model specification provided to the LLM.
useSemanticChunks
boolean
If true, answer will be generated from most relevant chunks from top search results. This feature will improve summary quality. Note that with this feature enabled, not all top search results will be referenced and included in the reference list, so the citation source index only points to the search results listed in the reference list.
MultiModalSpec
JSON representation
{
"imageSource" : enum ( ImageSource )
}
Fields
imageSource
enum ( ImageSource )
Optional. Source of image returned in the answer.
ModelPromptSpec
JSON representation
{
"preamble" : string
}
Fields
preamble
string
Text at the beginning of the prompt that instructs the assistant. Examples are available in the user guide.
ModelSpec
JSON representation
{
"version" : string
}
Fields
version
string
The model version used to generate the summary.
Supported values are:
stable : string. Default value when no value is specified. Uses a generally available, fine-tuned model. For more information, see Answer generation model versions and lifecycle .
preview : string. (Public preview) Uses a preview model. For more information, see Answer generation model versions and lifecycle .
ExtractiveContentSpec
JSON representation
{
"maxExtractiveAnswerCount" : integer ,
"maxExtractiveSegmentCount" : integer ,
"returnExtractiveSegmentScore" : boolean ,
"numPreviousSegments" : integer ,
"numNextSegments" : integer
}
Fields
maxExtractiveAnswerCount
integer
The maximum number of extractive answers returned in each search result.
An extractive answer is a verbatim answer extracted from the original document, which provides a precise and contextually relevant answer to the search query.
If the number of matching answers is less than the max_extractive_answer_count , return all of the answers. Otherwise, return the max_extractive_answer_count .
At most five answers are returned for each SearchResult .
maxExtractiveSegmentCount
integer
The max number of extractive segments returned in each search result. Only applied if the DataStore is set to DataStore.ContentConfig.CONTENT_REQUIRED or DataStore.solution_types is SOLUTION_TYPE_CHAT .
An extractive segment is a text segment extracted from the original document that is relevant to the search query, and, in general, more verbose than an extractive answer. The segment could then be used as input for LLMs to generate summaries and answers.
If the number of matching segments is less than max_extractive_segment_count , return all of the segments. Otherwise, return the max_extractive_segment_count .
returnExtractiveSegmentScore
boolean
Specifies whether to return the confidence score from the extractive segments in each search result. This feature is available only for new or allowlisted data stores. To allowlist your data store, contact your Customer Engineer. The default value is false .
numPreviousSegments
integer
Specifies whether to also include the adjacent from each selected segments. Return at most num_previous_segments segments before each selected segments.
numNextSegments
integer
Return at most num_next_segments segments after each selected segments.
ChunkSpec
JSON representation
{
"numPreviousChunks" : integer ,
"numNextChunks" : integer
}
Fields
numPreviousChunks
integer
The number of previous chunks to be returned of the current chunk. The maximum allowed value is 3. If not specified, no previous chunks will be returned.
numNextChunks
integer
The number of next chunks to be returned of the current chunk. The maximum allowed value is 3. If not specified, no next chunks will be returned.
EmbeddingSpec
JSON representation
{
"embeddingVectors" : [
{
object ( EmbeddingVector )
}
]
}
Fields
embeddingVectors[]
object ( EmbeddingVector )
The embedding vector used for retrieval. Limit to 1.
EmbeddingVector
JSON representation
{
"fieldPath" : string ,
"vector" : [
number
]
}
Fields
fieldPath
string
Embedding field path in schema.
vector[]
number
Query embedding vector.
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
SearchAsYouTypeSpec
JSON representation
{
"condition" : enum ( Condition )
}
Fields
condition
enum ( Condition )
The condition under which search as you type should occur. Default to Condition.DISABLED .
CustomFineTuningSpec
JSON representation
{
"enableSearchAdaptor" : boolean
}
Fields
enableSearchAdaptor
boolean
Whether or not to enable and include custom fine tuned search adaptor model.
DisplaySpec
JSON representation
{
"matchHighlightingCondition" : enum ( MatchHighlightingCondition )
}
Fields
matchHighlightingCondition
enum ( MatchHighlightingCondition )
The condition under which match highlighting should occur.
CrowdingSpec
JSON representation
{
"field" : string ,
"maxCount" : integer ,
"mode" : enum ( Mode )
}
Fields
field
string
The field to use for crowding. Documents can be crowded by a field in the Document object. Crowding field is case sensitive.
maxCount
integer
The maximum number of documents to keep per value of the field. Once there are at least max_count previous results which contain the same value for the given field (according to the order specified in order_by ), later results with the same value are "crowded away". If not specified, the default value is 1.
mode
enum ( Mode )
Mode to use for documents that are crowded away.
SessionSpec
JSON representation
{
"queryId" : string ,
// Union field _search_result_persistence_count can be only one of the
// following:
"searchResultPersistenceCount" : integer
// End of list of possible types for union field
// _search_result_persistence_count .
}
Fields
queryId
string
If set, the search result gets stored to the "turn" specified by this query ID.
Example: Let's say the session looks like this: session { name: ".../sessions/xxx" turns { query { text: "What is foo?" query_id: ".../questions/yyy" } answer: "Foo is ..." } turns { query { text: "How about bar then?" query_id: ".../questions/zzz" } } }
The user can call /search API with a request like this:
session: ".../sessions/xxx" session_spec { query_id: ".../questions/zzz" }
Then, the API stores the search result, associated with the last turn. The stored search result can be used by a subsequent /answer API call (with the session ID and the query ID specified). Also, it is possible to call /search and /answer in parallel with the same session ID & query ID.
Union field _search_result_persistence_count .
_search_result_persistence_count can be only one of the following:
searchResultPersistenceCount
integer
The number of top search results to persist. The persisted search results can be used for the subsequent /answer api call.
This field is similar to the summary_result_count field in SearchRequest.ContentSearchSpec.SummarySpec.summary_result_count .
At most 10 results for documents mode, or 50 for chunks mode.
RelevanceFilterSpec
JSON representation
{
"keywordSearchThreshold" : {
object ( RelevanceThresholdSpec )
} ,
"semanticSearchThreshold" : {
object ( RelevanceThresholdSpec )
}
}
Fields
keywordSearchThreshold
object ( RelevanceThresholdSpec )
Optional. Relevance filtering threshold specification for keyword search.
semanticSearchThreshold
object ( RelevanceThresholdSpec )
Optional. Relevance filtering threshold specification for semantic search.
RelevanceThresholdSpec
JSON representation
{
// Union field relevance_threshold_spec can be only one of the following:
"relevanceThreshold" : enum ( RelevanceThreshold ) ,
"semanticRelevanceThreshold" : number
// End of list of possible types for union field relevance_threshold_spec .
}
Fields
Union field relevance_threshold_spec . Configures how the relevance threshold is determined. relevance_threshold_spec can be only one of the following:
relevanceThreshold
enum ( RelevanceThreshold )
Pre-defined relevance threshold for the sub-search.
semanticRelevanceThreshold
number
Custom relevance threshold for the sub-search. The value must be in [0.0, 1.0].
PersonalizationSpec
JSON representation
{
"mode" : enum ( Mode )
}
Fields
mode
enum ( Mode )
The personalization mode of the search request. Defaults to Mode.AUTO .
RelevanceScoreSpec
JSON representation
{
"returnRelevanceScore" : boolean
}
Fields
returnRelevanceScore
boolean
Optional. Whether to return the relevance score for search results. The higher the score, the more relevant the document is to the query.
SearchAddonSpec
JSON representation
{
"disableSemanticAddOn" : boolean ,
"disableKpiPersonalizationAddOn" : boolean ,
"disableGenerativeAnswerAddOn" : boolean
}
Fields
disableSemanticAddOn
boolean
Optional. If true, semantic add-on is disabled. Semantic add-on includes embeddings and jetstream.
disableKpiPersonalizationAddOn
boolean
Optional. If true, disables event re-ranking and personalization to optimize KPIs & personalize results.
disableGenerativeAnswerAddOn
boolean
Optional. If true, generative answer add-on is disabled. Generative answer add-on includes natural language to filters and simple answers.
Output Schema
Response message for SearchService.Search method.
SearchResponse
JSON representation
{
"results" : [
{
object ( SearchResult )
}
] ,
"facets" : [
{
object ( Facet )
}
] ,
"guidedSearchResult" : {
object ( GuidedSearchResult )
} ,
"totalSize" : integer ,
"attributionToken" : string ,
"redirectUri" : string ,
"nextPageToken" : string ,
"correctedQuery" : string ,
"suggestedQuery" : string ,
"summary" : {
object ( Summary )
} ,
"appliedControls" : [
string
] ,
"geoSearchDebugInfo" : [
{
object ( GeoSearchDebugInfo )
}
] ,
"queryExpansionInfo" : {
object ( QueryExpansionInfo )
} ,
"naturalLanguageQueryUnderstandingInfo" : {
object ( NaturalLanguageQueryUnderstandingInfo )
} ,
"sessionInfo" : {
object ( SessionInfo )
} ,
"oneBoxResults" : [
{
object ( OneBoxResult )
}
] ,
"searchLinkPromotions" : [
{
object ( SearchLinkPromotion )
}
] ,
"semanticState" : enum ( SemanticState )
}
Fields
results[]
object ( SearchResult )
A list of matched documents. The order represents the ranking.
facets[]
object ( Facet )
Results of facets requested by user.
guidedSearchResult
object ( GuidedSearchResult )
Guided search result.
totalSize
integer
The estimated total count of matched items irrespective of pagination. The count of results returned by pagination may be less than the total_size that matches.
attributionToken
string
A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance. This also helps to identify a request during the customer support scenarios.
redirectUri
string
The URI of a customer-defined redirect page. If redirect action is triggered, no search is performed, and only redirect_uri and attribution_token are set in the response.
nextPageToken
string
A token that can be sent as SearchRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
correctedQuery
string
Contains the spell corrected query, if found. If the spell correction type is AUTOMATIC, then the search results are based on corrected_query. Otherwise the original query is used for search.
suggestedQuery
string
Corrected query with low confidence, AKA did you mean query. Compared with corrected_query, this field is set when SpellCorrector returned a response, but FPR(full page replacement) is not triggered because the corrction is of low confidence(eg, reversed because there are matches of the original query in document corpus).
summary
object ( Summary )
A summary as part of the search results. This field is only returned if SearchRequest.ContentSearchSpec.summary_spec is set.
appliedControls[]
string
Controls applied as part of the Control service.
geoSearchDebugInfo[]
object ( GeoSearchDebugInfo )
queryExpansionInfo
object ( QueryExpansionInfo )
Query expansion information for the returned results.
naturalLanguageQueryUnderstandingInfo
object ( NaturalLanguageQueryUnderstandingInfo )
Output only. Natural language query understanding information for the returned results.
sessionInfo
object ( SessionInfo )
Session information.
Only set if SearchRequest.session is provided. See its description for more details.
oneBoxResults[]
object ( OneBoxResult )
A list of One Box results. There can be multiple One Box results of different types.
searchLinkPromotions[]
object ( SearchLinkPromotion )
Promotions for site search.
semanticState
enum ( SemanticState )
Output only. Indicates the semantic state of the search response.
SearchResult
JSON representation
{
"id" : string ,
"document" : {
object ( Document )
} ,
"chunk" : {
object ( Chunk )
} ,
"modelScores" : {
string : {
object ( DoubleList )
} ,
...
} ,
"rankSignals" : {
object ( RankSignals )
}
}
Fields
id
string
Document.id of the searched Document .
document
object ( Document )
The document data snippet in the search response. Only fields that are marked as retrievable are populated.
chunk
object ( Chunk )
The chunk data in the search response if the SearchRequest.ContentSearchSpec.search_result_mode is set to CHUNKS .
modelScores
map (key: string, value: object ( DoubleList ))
Output only. Google provided available scores.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
rankSignals
object ( RankSignals )
Optional. A set of ranking signals associated with the result.
Document
JSON representation
{
"name" : string ,
"id" : string ,
"schemaId" : string ,
"content" : {
object ( Content )
} ,
"parentDocumentId" : string ,
"derivedStructData" : {
object
} ,
"aclInfo" : {
object ( AclInfo )
} ,
"indexTime" : string ,
"indexStatus" : {
object ( IndexStatus )
} ,
// Union field data can be only one of the following:
"structData" : {
object
} ,
"jsonData" : string
// End of list of possible types for union field data .
}
Fields
name
string
Immutable. The full resource name of the document. Format: projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id} .
This field must be a UTF-8 encoded string with a length limit of 1024 characters.
id
string
Immutable. The identifier of the document.
Id should conform to RFC-1034 standard with a length limit of 128 characters.
schemaId
string
The identifier of the schema located in the same data store.
content
object ( Content )
The unstructured data linked to this document. Content can only be set and must be set if this document is under a CONTENT_REQUIRED data store.
parentDocumentId
string
The identifier of the parent document. Currently supports at most two level document hierarchy.
Id should conform to RFC-1034 standard with a length limit of 63 characters.
derivedStructData
object ( Struct format)
Output only. This field is OUTPUT_ONLY. It contains derived data that are not in the original input document.
aclInfo
object ( AclInfo )
Access control information for the document.
indexTime
string ( Timestamp format)
Output only. The last time the document was indexed. If this field is set, the document could be returned in search results.
This field is OUTPUT_ONLY. If this field is not populated, it means the document has never been indexed.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
indexStatus
object ( IndexStatus )
Output only. The index status of the document.
If document is indexed successfully, the index_time field is populated.
Otherwise, if document is not indexed due to errors, the error_samples field is populated.
Otherwise, if document's index is in progress, the pending_message field is populated.
Union field data . Data representation. One of struct_data or json_data should be provided otherwise an INVALID_ARGUMENT error is thrown. data can be only one of the following:
structData
object ( Struct format)
The structured JSON data for the document. It should conform to the registered Schema or an INVALID_ARGUMENT error is thrown.
jsonData
string
The JSON string representation of the document. It should conform to the registered Schema or an INVALID_ARGUMENT error is thrown.
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
Content
JSON representation
{
"mimeType" : string ,
// Union field content can be only one of the following:
"rawBytes" : string ,
"uri" : string
// End of list of possible types for union field content .
}
Fields
mimeType
string
The MIME type of the content. Supported types:
application/pdf (PDF, only native PDFs are supported for now)
text/html (HTML)
text/plain (TXT)
application/xml or text/xml (XML)
application/json (JSON)
application/vnd.openxmlformats-officedocument.wordprocessingml.document (DOCX)
application/vnd.openxmlformats-officedocument.presentationml.presentation (PPTX)
application/vnd.openxmlformats-officedocument.spreadsheetml.sheet (XLSX)
application/vnd.ms-excel.sheet.macroenabled.12 (XLSM)
The following types are supported only if layout parser is enabled in the data store:
image/bmp (BMP)
image/gif (GIF)
image/jpeg (JPEG)
image/png (PNG)
image/tiff (TIFF)
See https://www.iana.org/assignments/media-types/media-types.xhtml .
Union field content . The content of the unstructured document. content can be only one of the following:
rawBytes
string ( bytes format)
The content represented as a stream of bytes. The maximum length is 1,000,000 bytes (1 MB / ~0.95 MiB).
Note: As with all bytes fields, this field is represented as pure binary in Protocol Buffers and base64-encoded string in JSON. For example, abc123!?$*&()'-=@~ should be represented as YWJjMTIzIT8kKiYoKSctPUB+ in JSON. See https://developers.google.com/protocol-buffers/docs/proto3#json .
A base64-encoded string.
uri
string
The URI of the content. Only Cloud Storage URIs (e.g. gs://bucket-name/path/to/file ) are supported. The maximum file size is 2.5 MB for text-based formats, 200 MB for other formats.
AclInfo
JSON representation
{
"readers" : [
{
object ( AccessRestriction )
}
]
}
Fields
readers[]
object ( AccessRestriction )
Readers of the document.
AccessRestriction
JSON representation
{
"principals" : [
{
object ( Principal )
}
] ,
"idpWide" : boolean
}
Fields
principals[]
object ( Principal )
List of principals.
idpWide
boolean
All users within the Identity Provider.
Principal
JSON representation
{
// Union field principal can be only one of the following:
"userId" : string ,
"groupId" : string ,
"externalEntityId" : string
// End of list of possible types for union field principal .
}
Fields
Union field principal . Union field principal. Principal can be a user or a group. principal can be only one of the following:
userId
string
User identifier. For Google Workspace user account, user_id should be the google workspace user email. For non-google identity provider user account, user_id is the mapped user identifier configured during the workforcepool config.
groupId
string
Group identifier. For Google Workspace user account, group_id should be the google workspace group email. For non-google identity provider user account, group_id is the mapped group identifier configured during the workforcepool config.
externalEntityId
string
For 3P application identities which are not present in the customer identity provider.
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
IndexStatus
JSON representation
{
"indexTime" : string ,
"errorSamples" : [
{
object ( Status )
}
] ,
"pendingMessage" : string
}
Fields
indexTime
string ( Timestamp format)
The time when the document was indexed. If this field is populated, it means the document has been indexed.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
errorSamples[]
object ( Status )
A sample of errors encountered while indexing the document. If this field is populated, the document is not indexed due to errors.
pendingMessage
string
Immutable. The message indicates the document index is in progress. If this field is populated, the document index is pending.
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
Chunk
JSON representation
{
"name" : string ,
"id" : string ,
"content" : string ,
"documentMetadata" : {
object ( DocumentMetadata )
} ,
"derivedStructData" : {
object
} ,
"pageSpan" : {
object ( PageSpan )
} ,
"chunkMetadata" : {
object ( ChunkMetadata )
} ,
"dataUrls" : [
string
] ,
"annotationContents" : [
string
] ,
"annotationMetadata" : [
{
object ( AnnotationMetadata )
}
] ,
// Union field _relevance_score can be only one of the following:
"relevanceScore" : number
// End of list of possible types for union field _relevance_score .
}
Fields
name
string
The full resource name of the chunk. Format: projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id}/chunks/{chunk_id} .
This field must be a UTF-8 encoded string with a length limit of 1024 characters.
id
string
Unique chunk ID of the current chunk.
content
string
Content is a string from a document (parsed content).
documentMetadata
object ( DocumentMetadata )
Metadata of the document from the current chunk.
derivedStructData
object ( Struct format)
Output only. This field is OUTPUT_ONLY. It contains derived data that are not in the original input document.
pageSpan
object ( PageSpan )
Page span of the chunk.
chunkMetadata
object ( ChunkMetadata )
Output only. Metadata of the current chunk.
dataUrls[]
string
Output only. Image Data URLs if the current chunk contains images. Data URLs are composed of four parts: a prefix (data:), a MIME type indicating the type of data, an optional base64 token if non-textual, and the data itself: data:[ ][;base64],
annotationContents[]
string
Output only. Annotation contents if the current chunk contains annotations.
annotationMetadata[]
object ( AnnotationMetadata )
Output only. The annotation metadata includes structured content in the current chunk.
Union field _relevance_score .
_relevance_score can be only one of the following:
relevanceScore
number
Output only. Represents the relevance score based on similarity. Higher score indicates higher chunk relevance. The score is in range [-1.0, 1.0]. Only populated on SearchResponse .
DocumentMetadata
JSON representation
{
"uri" : string ,
"title" : string ,
"mimeType" : string ,
"structData" : {
object
}
}
Fields
uri
string
Uri of the document.
title
string
Title of the document.
mimeType
string
The mime type of the document. https://www.iana.org/assignments/media-types/media-types.xhtml .
structData
object ( Struct format)
Data representation. The structured JSON data for the document. It should conform to the registered Schema or an INVALID_ARGUMENT error is thrown.
PageSpan
JSON representation
{
"pageStart" : integer ,
"pageEnd" : integer
}
Fields
pageStart
integer
The start page of the chunk.
pageEnd
integer
The end page of the chunk.
ChunkMetadata
JSON representation
{
"previousChunks" : [
{
object ( Chunk )
}
] ,
"nextChunks" : [
{
object ( Chunk )
}
]
}
Fields
previousChunks[]
object ( Chunk )
The previous chunks of the current chunk. The number is controlled by SearchRequest.ContentSearchSpec.ChunkSpec.num_previous_chunks . This field is only populated on SearchService.Search API.
nextChunks[]
object ( Chunk )
The next chunks of the current chunk. The number is controlled by SearchRequest.ContentSearchSpec.ChunkSpec.num_next_chunks . This field is only populated on SearchService.Search API.
AnnotationMetadata
JSON representation
{
"structuredContent" : {
object ( StructuredContent )
} ,
"imageId" : string
}
Fields
structuredContent
object ( StructuredContent )
Output only. The structured content information.
imageId
string
Output only. Image ID is provided if the structured content is based on an image.
StructuredContent
JSON representation
{
"structureType" : enum ( StructureType ) ,
"content" : string
}
Fields
structureType
enum ( StructureType )
Output only. The structure type of the structured content.
content
string
Output only. The content of the structured content.
ModelScoresEntry
JSON representation
{
"key" : string ,
"value" : {
object ( DoubleList )
}
}
Fields
key
string
value
object ( DoubleList )
DoubleList
JSON representation
{
"values" : [
number
]
}
Fields
values[]
number
Double values.
RankSignals
JSON representation
{
"defaultRank" : number ,
"customSignals" : [
{
object ( CustomSignal )
}
] ,
// Union field _keyword_similarity_score can be only one of the following:
"keywordSimilarityScore" : number
// End of list of possible types for union field _keyword_similarity_score .
// Union field _relevance_score can be only one of the following:
"relevanceScore" : number
// End of list of possible types for union field _relevance_score .
// Union field _semantic_similarity_score can be only one of the following:
"semanticSimilarityScore" : number
// End of list of possible types for union field _semantic_similarity_score .
// Union field _pctr_rank can be only one of the following:
"pctrRank" : number
// End of list of possible types for union field _pctr_rank .
// Union field _topicality_rank can be only one of the following:
"topicalityRank" : number
// End of list of possible types for union field _topicality_rank .
// Union field _document_age can be only one of the following:
"documentAge" : number
// End of list of possible types for union field _document_age .
// Union field _boosting_factor can be only one of the following:
"boostingFactor" : number
// End of list of possible types for union field _boosting_factor .
}
Fields
defaultRank
number
Optional. The default rank of the result.
customSignals[]
object ( CustomSignal )
Optional. A list of custom clearbox signals.
Union field _keyword_similarity_score .
_keyword_similarity_score can be only one of the following:
keywordSimilarityScore
number
Optional. Keyword matching adjustment.
Union field _relevance_score .
_relevance_score can be only one of the following:
relevanceScore
number
Optional. Semantic relevance adjustment.
Union field _semantic_similarity_score .
_semantic_similarity_score can be only one of the following:
semanticSimilarityScore
number
Optional. Semantic similarity adjustment.
Union field _pctr_rank .
_pctr_rank can be only one of the following:
pctrRank
number
Optional. Predicted conversion rate adjustment as a rank.
Union field _topicality_rank .
_topicality_rank can be only one of the following:
topicalityRank
number
Optional. Topicality adjustment as a rank.
Union field _document_age .
_document_age can be only one of the following:
documentAge
number
Optional. Age of the document in hours.
Union field _boosting_factor .
_boosting_factor can be only one of the following:
boostingFactor
number
Optional. Combined custom boosts for a doc.
CustomSignal
JSON representation
{
"name" : string ,
"value" : number
}
Fields
name
string
Optional. Name of the signal.
value
number
Optional. Float value representing the ranking signal (e.g. 1.25 for BM25).
Facet
JSON representation
{
"key" : string ,
"values" : [
{
object ( FacetValue )
}
] ,
"dynamicFacet" : boolean
}
Fields
key
string
The key for this facet. For example, "colors" or "price" . It matches SearchRequest.FacetSpec.FacetKey.key .
values[]
object ( FacetValue )
The facet values for this field.
dynamicFacet
boolean
Whether the facet is dynamically generated.
FacetValue
JSON representation
{
"count" : string ,
// Union field facet_value can be only one of the following:
"value" : string ,
"interval" : {
object ( Interval )
}
// End of list of possible types for union field facet_value .
}
Fields
count
string ( int64 format)
Number of items that have this facet value.
Union field facet_value . A facet value which contains values. facet_value can be only one of the following:
value
string
Text value of a facet, such as "Black" for facet "colors".
interval
object ( Interval )
Interval value for a facet, such as [10, 20) for facet "price". It matches SearchRequest.FacetSpec.FacetKey.intervals .
Interval
JSON representation
{
// Union field min can be only one of the following:
"minimum" : number ,
"exclusiveMinimum" : number
// End of list of possible types for union field min .
// Union field max can be only one of the following:
"maximum" : number ,
"exclusiveMaximum" : number
// End of list of possible types for union field max .
}
Fields
Union field min . The lower bound of the interval. If neither of the min fields are set, then the lower bound is negative infinity.
This field must be not larger than max. Otherwise, an INVALID_ARGUMENT error is returned. min can be only one of the following:
minimum
number
Inclusive lower bound.
exclusiveMinimum
number
Exclusive lower bound.
Union field max . The upper bound of the interval. If neither of the max fields are set, then the upper bound is positive infinity.
This field must be not smaller than min. Otherwise, an INVALID_ARGUMENT error is returned. max can be only one of the following:
maximum
number
Inclusive upper bound.
exclusiveMaximum
number
Exclusive upper bound.
GuidedSearchResult
JSON representation
{
"refinementAttributes" : [
{
object ( RefinementAttribute )
}
] ,
"followUpQuestions" : [
string
]
}
Fields
refinementAttributes[]
object ( RefinementAttribute )
A list of ranked refinement attributes.
followUpQuestions[]
string
Suggested follow-up questions.
RefinementAttribute
JSON representation
{
"attributeKey" : string ,
"attributeValue" : string
}
Fields
attributeKey
string
Attribute key used to refine the results. For example, "movie_type" .
attributeValue
string
Attribute value used to refine the results. For example, "drama" .
Summary
JSON representation
{
"summaryText" : string ,
"summarySkippedReasons" : [
enum ( SummarySkippedReason )
] ,
"safetyAttributes" : {
object ( SafetyAttributes )
} ,
"summaryWithMetadata" : {
object ( SummaryWithMetadata )
}
}
Fields
summaryText
string
The summary content.
summarySkippedReasons[]
enum ( SummarySkippedReason )
Additional summary-skipped reasons. This provides the reason for ignored cases. If nothing is skipped, this field is not set.
safetyAttributes
object ( SafetyAttributes )
A collection of Safety Attribute categories and their associated confidence scores.
summaryWithMetadata
object ( SummaryWithMetadata )
Summary with metadata information.
SafetyAttributes
JSON representation
{
"categories" : [
string
] ,
"scores" : [
number
]
}
Fields
categories[]
string
The display names of Safety Attribute categories associated with the generated content. Order matches the Scores.
scores[]
number
The confidence scores of the each category, higher value means higher confidence. Order matches the Categories.
SummaryWithMetadata
JSON representation
{
"summary" : string ,
"citationMetadata" : {
object ( CitationMetadata )
} ,
"references" : [
{
object ( Reference )
}
] ,
"blobAttachments" : [
{
object ( BlobAttachment )
}
]
}
Fields
summary
string
Summary text with no citation information.
citationMetadata
object ( CitationMetadata )
Citation metadata for given summary.
references[]
object ( Reference )
Document References.
blobAttachments[]
object ( BlobAttachment )
Output only. Store multimodal data for answer enhancement.
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
Citations for segments.
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
Index indicates the start of the segment, measured in bytes/unicode.
endIndex
string ( int64 format)
End of the attributed segment, exclusive.
sources[]
object ( CitationSource )
Citation sources for the attributed segment.
CitationSource
JSON representation
{
"referenceIndex" : string
}
Fields
referenceIndex
string ( int64 format)
Document reference index from SummaryWithMetadata.references. It is 0-indexed and the value will be zero if the reference_index is not set explicitly.
Reference
JSON representation
{
"title" : string ,
"document" : string ,
"uri" : string ,
"chunkContents" : [
{
object ( ChunkContent )
}
]
}
Fields
title
string
Title of the document.
document
string
Required. Document.name of the document. Full resource name of the referenced document, in the format projects/*/locations/*/collections/*/dataStores/*/branches/*/documents/* .
uri
string
Cloud Storage or HTTP uri for the document.
chunkContents[]
object ( ChunkContent )
List of cited chunk contents derived from document content.
ChunkContent
JSON representation
{
"content" : string ,
"pageIdentifier" : string ,
"blobAttachmentIndexes" : [
string
]
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
Output only. The blob data.
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
Output only. The media type (MIME type) of the generated data.
data
string ( bytes format)
Output only. Raw bytes.
A base64-encoded string.
GeoSearchDebugInfo
JSON representation
{
"originalAddressQuery" : string ,
"errorMessage" : string
}
Fields
originalAddressQuery
string
The address from which forward geocoding ingestion produced issues.
errorMessage
string
The error produced.
QueryExpansionInfo
JSON representation
{
"expandedQuery" : boolean ,
"pinnedResultCount" : string
}
Fields
expandedQuery
boolean
Bool describing whether query expansion has occurred.
pinnedResultCount
string ( int64 format)
Number of pinned results. This field will only be set when expansion happens and SearchRequest.QueryExpansionSpec.pin_unexpanded_results is set to true.
NaturalLanguageQueryUnderstandingInfo
JSON representation
{
"extractedFilters" : string ,
"rewrittenQuery" : string ,
"classifiedIntents" : [
string
] ,
"structuredExtractedFilter" : {
object ( StructuredExtractedFilter )
}
}
Fields
extractedFilters
string
The filters that were extracted from the input query.
rewrittenQuery
string
Rewritten input query minus the extracted filters.
classifiedIntents[]
string
The classified intents from the input query.
structuredExtractedFilter
object ( StructuredExtractedFilter )
The filters that were extracted from the input query represented in a structured form.
StructuredExtractedFilter
JSON representation
{
"expression" : {
object ( Expression )
}
}
Fields
expression
object ( Expression )
The expression denoting the filter that was extracted from the input query in a structured form. It can be a simple expression denoting a single string, numerical or geolocation constraint or a compound expression which is a combination of multiple expressions connected using logical (OR and AND) operators.
Expression
JSON representation
{
// Union field expr can be only one of the following:
"stringConstraint" : {
object ( StringConstraint )
} ,
"numberConstraint" : {
object ( NumberConstraint )
} ,
"geolocationConstraint" : {
object ( GeolocationConstraint )
} ,
"andExpr" : {
object ( AndExpression )
} ,
"orExpr" : {
object ( OrExpression )
}
// End of list of possible types for union field expr .
}
Fields
Union field expr . The expression type. expr can be only one of the following:
stringConstraint
object ( StringConstraint )
String constraint expression.
numberConstraint
object ( NumberConstraint )
Numerical constraint expression.
geolocationConstraint
object ( GeolocationConstraint )
Geolocation constraint expression.
andExpr
object ( AndExpression )
Logical "And" compound operator connecting multiple expressions.
orExpr
object ( OrExpression )
Logical "Or" compound operator connecting multiple expressions.
StringConstraint
JSON representation
{
"fieldName" : string ,
"values" : [
string
] ,
"querySegment" : string
}
Fields
fieldName
string
Name of the string field as defined in the schema.
values[]
string
Values of the string field. The record will only be returned if the field value matches one of the values specified here.
querySegment
string
Identifies the keywords within the search query that match a filter.
NumberConstraint
JSON representation
{
"fieldName" : string ,
"comparison" : enum ( Comparison ) ,
"value" : number ,
"querySegment" : string
}
Fields
fieldName
string
Name of the numerical field as defined in the schema.
comparison
enum ( Comparison )
The comparison operation performed between the field value and the value specified in the constraint.
value
number
The value specified in the numerical constraint.
querySegment
string
Identifies the keywords within the search query that match a filter.
GeolocationConstraint
JSON representation
{
"fieldName" : string ,
"address" : string ,
"latitude" : number ,
"longitude" : number ,
"radiusInMeters" : number
}
Fields
fieldName
string
The name of the geolocation field as defined in the schema.
address
string
The reference address that was inferred from the input query. The proximity of the reference address to the geolocation field will be used to filter the results.
latitude
number
The latitude of the geolocation inferred from the input query.
longitude
number
The longitude of the geolocation inferred from the input query.
radiusInMeters
number
The radius in meters around the address. The record is returned if the location of the geolocation field is within the radius.
AndExpression
JSON representation
{
"expressions" : [
{
object ( Expression )
}
]
}
Fields
expressions[]
object ( Expression )
The expressions that were ANDed together.
OrExpression
JSON representation
{
"expressions" : [
{
object ( Expression )
}
]
}
Fields
expressions[]
object ( Expression )
The expressions that were ORed together.
SessionInfo
JSON representation
{
"name" : string ,
"queryId" : string
}
Fields
name
string
Name of the session. If the auto-session mode is used (when SearchRequest.session ends with "-"), this field holds the newly generated session name.
queryId
string
Query ID that corresponds to this search API call. One session can have multiple turns, each with a unique query ID.
By specifying the session name and this query ID in the Answer API call, the answer generation happens in the context of the search results from this search call.
OneBoxResult
JSON representation
{
"oneBoxType" : enum ( OneBoxType ) ,
"searchResults" : [
{
object ( SearchResult )
}
]
}
Fields
oneBoxType
enum ( OneBoxType )
The type of One Box result.
searchResults[]
object ( SearchResult )
The search results for this One Box.
SearchLinkPromotion
JSON representation
{
"title" : string ,
"uri" : string ,
"document" : string ,
"imageUri" : string ,
"description" : string ,
"enabled" : boolean
}
Fields
title
string
Required. The title of the promotion. Maximum length: 160 characters.
uri
string
Optional. The URL for the page the user wants to promote. Must be set for site search. For other verticals, this is optional.
document
string
Optional. The Document the user wants to promote. For site search, leave unset and only populate uri. Can be set along with uri.
imageUri
string
Optional. The promotion thumbnail image url.
description
string
Optional. The Promotion description. Maximum length: 200 characters.
enabled
boolean
Optional. The enabled promotion will be returned for any serving configs associated with the parent of the control this promotion is attached to.
This flag is used for basic site search only.
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-20 UTC."],[],[]]
