---
title: "REST Resource: projects.indexes \_|\_ Datastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/reference/admin/rest/v1/projects.indexes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/reference/admin/rest/v1/projects.indexes
  title: "REST Resource: projects.indexes \_|\_ Datastore \_|\_ Google Cloud Documentation"
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
REST Resource: projects.indexes
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Index
JSON representation
AncestorMode
IndexedProperty
JSON representation
Direction
State
Methods
Resource: Index
Datastore composite index definition.
JSON representation
{
"projectId" : string ,
"indexId" : string ,
"kind" : string ,
"ancestor" : enum ( AncestorMode ) ,
"properties" : [
{
object ( IndexedProperty )
}
] ,
"state" : enum ( State )
}
Fields
projectId
string
Output only. Project ID.
indexId
string
Output only. The resource ID of the index.
kind
string
Required. The entity kind to which this index applies.
ancestor
enum ( AncestorMode )
Required. The index's ancestor mode. Must not be ANCESTOR_MODE_UNSPECIFIED.
properties[]
object ( IndexedProperty )
Required. An ordered sequence of property names and their index attributes.
Requires:
A maximum of 100 properties.
state
enum ( State )
Output only. The state of the index.
AncestorMode
For an ordered index, specifies whether each of the entity's ancestors will be included.
Enums
ANCESTOR_MODE_UNSPECIFIED
The ancestor mode is unspecified.
NONE
Do not include the entity's ancestors in the index.
ALL_ANCESTORS
Include all the entity's ancestors in the index.
IndexedProperty
A property of an index.
JSON representation
{
"name" : string ,
"direction" : enum ( Direction )
}
Fields
name
string
Required. The property name to index.
direction
enum ( Direction )
Required. The indexed property's direction. Must not be DIRECTION_UNSPECIFIED.
Direction
The direction determines how a property is indexed.
Enums
DIRECTION_UNSPECIFIED
The direction is unspecified.
ASCENDING
The property's values are indexed so as to support sequencing in ascending order and also query by <, >, <=, >=, and =.
DESCENDING
The property's values are indexed so as to support sequencing in descending order and also query by <, >, <=, >=, and =.
State
The possible set of states of an index.
Enums
STATE_UNSPECIFIED
The state is unspecified.
CREATING
The index is being created, and cannot be used by queries. There is an active long-running operation for the index. The index is updated when writing an entity. Some index data may exist.
READY
The index is ready to be used. The index is updated when writing an entity. The index is fully populated from all stored entities it applies to.
DELETING
The index is being deleted, and cannot be used by queries. There is an active long-running operation for the index. The index is not updated when writing an entity. Some index data may exist.
ERROR
The index was being created or deleted, but something went wrong. The index cannot by used by queries. There is no active long-running operation for the index, and the most recently finished long-running operation failed. The index is not updated when writing an entity. Some index data may exist.
Methods
create
Creates the specified index.
delete
Deletes an existing index.
get
Gets an index.
list
Lists the indexes that match the specified filters.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-30 UTC."],[],[]]
