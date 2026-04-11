---
title: "Method: projects.locations.cloudKnowledgeGraphEntities.search \_|\_ Enterprise\
  \ Knowledge Graph \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.cloudKnowledgeGraphEntities/search
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.cloudKnowledgeGraphEntities/search
  title: "Method: projects.locations.cloudKnowledgeGraphEntities.search \_|\_ Enterprise\
    \ Knowledge Graph \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Enterprise Knowledge Graph
Reference
Send feedback
Method: projects.locations.cloudKnowledgeGraphEntities.search
Stay organized with collections
Save and categorize content based on your preferences.
Searches the Cloud KG entities with entity name.
HTTP request
GET https://enterpriseknowledgegraph.googleapis.com/v1/{parent}/cloudKnowledgeGraphEntities:Search
Path parameters
Parameters
parent
string
Required. The name of the Entity's parent resource. Format: projects/{project}/locations/{location} It takes the form projects/{project}/locations/{location} .
Query parameters
Parameters
query
string
Required. The literal query string for search.
languages[]
string
The list of language codes (defined in ISO 693) to run the query with, e.g. 'en'.
types[]
string
Restricts returned entities with these types, e.g. Person (as defined in https://schema.org/Person ). If multiple types are specified, returned entities will contain one or more of these types.
limit
integer
Limits the number of entities to be returned.
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
. . . Response message for EnterpriseKnowledgeGraphService.Search .
JSON representation
{
"@context" : value ,
"@type" : value ,
"itemListElement" : array
}
Fields
@context
value ( Value format)
The local context applicable for the response. See more details at https://www.w3.org/TR/json-ld/#context-definitions .
@type
value ( Value format)
The schema type of top-level JSON-LD object, e.g. ItemList.
itemListElement
array ( ListValue format)
The item list of search results.
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
enterpriseknowledgegraph.cloudKnowledgeGraphEntities.search
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-03 UTC."],[],[]]
