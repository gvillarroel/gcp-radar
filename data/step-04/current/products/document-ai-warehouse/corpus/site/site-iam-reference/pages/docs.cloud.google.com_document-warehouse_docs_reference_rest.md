---
title: "Document AI Warehouse API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-warehouse/docs/reference/rest
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-fetch-acl
source_metadata:
  url: https://docs.cloud.google.com/document-warehouse/docs/reference/rest
  title: "Document AI Warehouse API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI Warehouse
Reference
Send feedback
Document AI Warehouse API
Stay organized with collections
Save and categorize content based on your preferences.
Service: contentwarehouse.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://contentwarehouse.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://contentwarehouse.googleapis.com
REST Resource: v1.projects
Methods
fetchAcl
POST /v1/{resource}:fetchAcl
Gets the access control policy for a resource.
setAcl
POST /v1/{resource}:setAcl
Sets the access control policy for a resource.
REST Resource: v1.projects.locations
Methods
getStatus
GET /v1/{location}:getStatus
Get the project status.
initialize
POST /v1/{location}:initialize
Provisions resources for given tenant project.
runPipeline
POST /v1/{name}:runPipeline
Run a predefined pipeline.
REST Resource: v1.projects.locations.documentSchemas
Methods
create
POST /v1/{parent}/documentSchemas
Creates a document schema.
delete
DELETE /v1/{name}
Deletes a document schema.
get
GET /v1/{name}
Gets a document schema.
list
GET /v1/{parent}/documentSchemas
Lists document schemas.
patch
PATCH /v1/{name}
Updates a Document Schema.
REST Resource: v1.projects.locations.documents
Methods
create
POST /v1/{parent}/documents
Creates a document.
delete
POST /v1/{name}:delete
Deletes a document.
fetchAcl
POST /v1/{resource}:fetchAcl
Gets the access control policy for a resource.
get
POST /v1/{name}:get
Gets a document.
linkedSources
POST /v1/{parent}/linkedSources
Return all source document-links from the document.
linkedTargets
POST /v1/{parent}/linkedTargets
Return all target document-links from the document.
lock
POST /v1/{name}:lock
Lock the document so the document cannot be updated by other users.
patch
PATCH /v1/{name}
Updates a document.
search
POST /v1/{parent}/documents:search
Searches for documents using provided SearchDocumentsRequest .
setAcl
POST /v1/{resource}:setAcl
Sets the access control policy for a resource.
REST Resource: v1.projects.locations.documents.documentLinks
Methods
create
POST /v1/{parent}/documentLinks
Create a link between a source document and a target document.
delete
POST /v1/{name}:delete
Remove the link between the source and target documents.
REST Resource: v1.projects.locations.documents.referenceId
Methods
delete
POST /v1/{name}:delete
Deletes a document.
get
POST /v1/{name}:get
Gets a document.
patch
PATCH /v1/{name}
Updates a document.
REST Resource: v1.projects.locations.operations
Methods
get
GET /v1/{name}
Gets the latest state of a long-running operation.
REST Resource: v1.projects.locations.ruleSets
Methods
create
POST /v1/{parent}/ruleSets
Creates a ruleset.
delete
DELETE /v1/{name}
Deletes a ruleset.
get
GET /v1/{name}
Gets a ruleset.
list
GET /v1/{parent}/ruleSets
Lists rulesets.
patch
PATCH /v1/{name}
Updates a ruleset.
REST Resource: v1.projects.locations.synonymSets
Methods
create
POST /v1/{parent}/synonymSets
Creates a SynonymSet for a single context.
delete
DELETE /v1/{name}
Deletes a SynonymSet for a given context.
get
GET /v1/{name}
Gets a SynonymSet for a particular context.
list
GET /v1/{parent}/synonymSets
Returns all SynonymSets (for all contexts) for the specified location.
patch
PATCH /v1/{name}
Remove the existing SynonymSet for the context and replaces it with a new one.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-08 UTC."],[],[]]
