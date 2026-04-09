---
title: "Method: catalog.search \_|\_ Data Catalog Documentation \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/catalog/search
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/data-catalog/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/catalog/search
  title: "Method: catalog.search \_|\_ Data Catalog Documentation \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Data Catalog API methods that are related to Data Catalog search and metadata are deprecated and will be discontinued on January 30, 2026. See Transition from Data Catalog to Dataplex Universal Catalog . Methods that are related to policy tags and policy tag taxonomies are not deprecated.
Home
Technology areas
Data Catalog
Documentation
Reference
Send feedback
Method: catalog.search
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Request body
JSON representation
Response body
JSON representation
Authorization scopes
Scope
JSON representation
SearchCatalogResult
JSON representation
SearchResultType
Try it!
Data Catalog is deprecated. Please use Dataplex Universal Catalog instead.
Searches Data Catalog for multiple resources like entries and tags that match a query.
This is a Custom Method that doesn't return all information on a resource, only its ID and high level fields. To get more information, you can subsequently call specific get methods.
Note: Data Catalog search queries don't guarantee full recall. Results that match your query might not be returned, even in subsequent result pages. Additionally, returned (and not returned) results can vary if you repeat search queries.
For more information, see Data Catalog search syntax .
HTTP request
POST https://datacatalog.googleapis.com/v1/catalog:search
Request body
The request body contains data with the following structure:
JSON representation
{
"scope" : {
object ( Scope )
} ,
"query" : string ,
"pageSize" : integer ,
"pageToken" : string ,
"orderBy" : string ,
"adminSearch" : boolean
}
Fields
scope
object ( Scope )
Required. The scope of this search request.
The scope is invalid if includeOrgIds , includeProjectIds are empty AND includeGcpPublicDatasets is set to false . In this case, the request returns an error.
query
string
Optional. The query string with a minimum of 3 characters and specific syntax. For more information, see Data Catalog search syntax .
An empty query string returns all data assets (in the specified scope) that you have access to.
A query string can be a simple xyz or qualified by predicates:
name:x
column:y
description:z
pageSize
integer
Upper bound on the number of results you can get in a single response.
Can't be negative or 0, defaults to 10 in this case. The maximum number is 1000. If exceeded, throws an "invalid argument" exception.
pageToken
string
Optional. Pagination token that, if specified, returns the next page of search results. If empty, returns the first page.
This token is returned in the SearchCatalogResponse.next_page_token field of the response to a previous SearchCatalogRequest call.
orderBy
string
Specifies the order of results.
Currently supported case-sensitive values are:
relevance that can only be descending
last_modified_timestamp [asc|desc] with descending ( desc ) as default
default that can only be descending
Search queries don't guarantee full recall. Results that match your query might not be returned, even in subsequent result pages. Additionally, returned (and not returned) results can vary if you repeat search queries. If you are experiencing recall issues and you don't have to fetch the results in any specific order, consider setting this parameter to default .
If this parameter is omitted, it defaults to the descending relevance .
adminSearch
boolean
Optional. If set, use searchAll permission granted on organizations from includeOrgIds and projects from includeProjectIds instead of the fine grained per resource permissions when filtering the search results. The only allowed orderBy criteria for adminSearch mode is default . Using this flags guarantees a full recall of the search results.
Response body
Response message for catalog.search .
If successful, the response body contains data with the following structure:
JSON representation
{
"results" : [
{
object ( SearchCatalogResult )
}
] ,
"totalSize" : integer ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
results[]
object ( SearchCatalogResult )
Search results.
totalSize
integer
The approximate total number of entries matched by the query.
nextPageToken
string
Pagination token that can be used in subsequent calls to retrieve the next page of results.
unreachable[]
string
Unreachable locations. Search results don't include data from those locations.
To get additional information on an error, repeat the search request and restrict it to specific locations by setting the SearchCatalogRequest.scope.restricted_locations parameter.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Scope
The criteria that select the subspace used for query matching.
JSON representation
{
"includeOrgIds" : [
string
] ,
"includeProjectIds" : [
string
] ,
"includeGcpPublicDatasets" : boolean ,
"restrictedLocations" : [
string
] ,
"starredOnly" : boolean ,
"includePublicTagTemplates" : boolean
}
Fields
includeOrgIds[]
string
The list of organization IDs to search within.
To find your organization ID, follow the steps from Creating and managing organizations .
includeProjectIds[]
string
The list of project IDs to search within.
For more information on the distinction between project names, IDs, and numbers, see Projects .
includeGcpPublicDatasets
boolean
If true , include Google Cloud public datasets in search results. By default, they are excluded.
See Google Cloud Public Datasets for more information.
restrictedLocations[]
string
Optional. The list of locations to search within. If empty, all locations are searched.
Returns an error if any location in the list isn't one of the Supported regions .
If a location is unreachable, its name is returned in the SearchCatalogResponse.unreachable field. To get additional information on the error, repeat the search request and set the location name as the value of this parameter.
starredOnly
boolean
Optional. If true , search only among starred entries.
By default, all results are returned, starred or not.
includePublicTagTemplates (deprecated)
boolean
This item is deprecated!
Optional. This field is deprecated. The search mechanism for public and private tag templates is the same.
SearchCatalogResult
Result in the response to a search request.
Each result captures details of one entry that matches the search.
JSON representation
{
"searchResultType" : enum ( SearchResultType ) ,
"searchResultSubtype" : string ,
"relativeResourceName" : string ,
"linkedResource" : string ,
"modifyTime" : string ,
"fullyQualifiedName" : string ,
"displayName" : string ,
"description" : string ,
// Union field system can be only one of the following:
"integratedSystem" : enum ( IntegratedSystem ) ,
"userSpecifiedSystem" : string
// End of list of possible types for union field system .
}
Fields
searchResultType
enum ( SearchResultType )
Type of the search result.
You can use this field to determine which get method to call to fetch the full resource.
searchResultSubtype
string
Sub-type of the search result.
A dot-delimited full type of the resource. The same type you specify in the type search predicate.
Examples: entry.table , entry.dataStream , tagTemplate .
relativeResourceName
string
The relative name of the resource in URL format.
Examples:
projects/{PROJECT_ID}/locations/{LOCATION_ID}/entryGroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}
projects/{PROJECT_ID}/tagTemplates/{TAG_TEMPLATE_ID}
linkedResource
string
The full name of the Google Cloud resource the entry belongs to.
For more information, see Full Resource Name .
Example:
//bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID
modifyTime
string ( Timestamp format)
The last modification timestamp of the entry in the source system.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
fullyQualifiedName
string
Fully qualified name (FQN) of the resource.
FQNs take two forms:
For non-regionalized resources:
{SYSTEM}:{PROJECT}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}
For regionalized resources:
{SYSTEM}:{PROJECT}.{LOCATION_ID}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}
Example for a DPMS table:
dataproc_metastore:PROJECT_ID.LOCATION_ID.INSTANCE_ID.DATABASE_ID.TABLE_ID
displayName
string
The display name of the result.
description
string
Entry description that can consist of several sentences or paragraphs that describe entry contents.
Union field system . The source system of the entry. Applicable only when the search_result_type is ENTRY . system can be only one of the following:
integratedSystem
enum ( IntegratedSystem )
Output only. The source system that Data Catalog automatically integrates with, such as BigQuery, Cloud Pub/Sub, or Dataproc Metastore.
userSpecifiedSystem
string
Custom source system that you can manually integrate Data Catalog with.
SearchResultType
The resource types that can be returned in search results.
Enums
SEARCH_RESULT_TYPE_UNSPECIFIED
Default unknown type.
ENTRY
An Entry .
TAG_TEMPLATE
A TagTemplate .
ENTRY_GROUP
An EntryGroup .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
