---
title: "Enterprise Knowledge Graph API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest
  title: "Enterprise Knowledge Graph API \_|\_ Google Cloud Documentation"
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
Enterprise Knowledge Graph API
Stay organized with collections
Save and categorize content based on your preferences.
Service: enterpriseknowledgegraph.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://enterpriseknowledgegraph.googleapis.com
REST Resource: v1.locations.publicKnowledgeGraphEntities
Methods
lookup
GET /v1/{parent}/publicKnowledgeGraphEntities:Lookup
Finds the public KG entities with public KG ID(s).
REST Resource: v1.projects.locations.cloudKnowledgeGraphEntities
Methods
lookup
GET /v1/{parent}/cloudKnowledgeGraphEntities:Lookup
Finds the Cloud KG entities with CKG ID(s).
search
GET /v1/{parent}/cloudKnowledgeGraphEntities:Search
Searches the Cloud KG entities with entity name.
REST Resource: v1.projects.locations.entityReconciliationJobs
Methods
cancel
POST /v1/{name}:cancel
Cancels a EntityReconciliationJob.
create
POST /v1/{parent}/entityReconciliationJobs
Creates a EntityReconciliationJob.
delete
DELETE /v1/{name}
Deletes a EntityReconciliationJob.
get
GET /v1/{name}
Gets a EntityReconciliationJob.
list
GET /v1/{parent}/entityReconciliationJobs
Lists Entity Reconciliation Jobs.
REST Resource: v1.projects.locations.publicKnowledgeGraphEntities
Methods
lookup
GET /v1/{parent}/publicKnowledgeGraphEntities:Lookup
Finds the public KG entities with public KG ID(s).
search
GET /v1/{parent}/publicKnowledgeGraphEntities:Search
Searches the public KG entities with entity name.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-03 UTC."],[],[]]
