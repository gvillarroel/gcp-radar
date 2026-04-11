---
title: "Method: locations.publicKnowledgeGraphEntities.lookup \_|\_ Enterprise Knowledge\
  \ Graph \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/locations.publicKnowledgeGraphEntities/lookup
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/locations.publicKnowledgeGraphEntities/lookup
  title: "Method: locations.publicKnowledgeGraphEntities.lookup \_|\_ Enterprise Knowledge\
    \ Graph \_|\_ Google Cloud Documentation"
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
Method: locations.publicKnowledgeGraphEntities.lookup
Stay organized with collections
Save and categorize content based on your preferences.
Finds the public KG entities with public KG ID(s).
HTTP request
GET https://enterpriseknowledgegraph.googleapis.com/v1/{parent}/publicKnowledgeGraphEntities:Lookup
Path parameters
Parameters
parent
string
Required. The name of the Entity's parent resource. Format: projects/{project}/locations/{location} It takes the form locations/{location} .
Query parameters
Parameters
ids[]
string
Required. The list of entity ids to be used for lookup.
languages[]
string
The list of language codes (defined in ISO 693) to run the query with, e.g. 'en'.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of LookupPublicKgResponse .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
enterpriseknowledgegraph.publicKnowledgeGraphEntities.lookup
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-03 UTC."],[],[]]
