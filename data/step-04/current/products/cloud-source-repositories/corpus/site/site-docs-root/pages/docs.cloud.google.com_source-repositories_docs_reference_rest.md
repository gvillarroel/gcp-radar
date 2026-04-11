---
title: "Cloud Source Repositories API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/source-repositories/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/source-repositories/docs
source_metadata:
  url: https://docs.cloud.google.com/source-repositories/docs/reference/rest
  title: "Cloud Source Repositories API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Effective June 17, 2024, Cloud Source Repositories isn't available to new customers. For alternative source hosting options, Secure Source Manager is a regionally deployed, single tenant, managed source code repository hosted on Google Cloud.
If your organization hasn't previously used Cloud Source Repositories, you can't enable the API or use Cloud Source Repositories. New projects not connected to an organization can't enable the Cloud Source Repositories API. Organizations that have used Cloud Source Repositories prior to June 17, 2024 are not affected by this change.
Home
Documentation
Application development
Cloud Source Repositories
Reference
Send feedback
Cloud Source Repositories API
Stay organized with collections
Save and categorize content based on your preferences.
Accesses source code repositories hosted by Google.
REST Resource: v1.projects
REST Resource: v1.projects.repos
Service: sourcerepo.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://sourcerepo.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://sourcerepo.googleapis.com
REST Resource: v1.projects
Methods
getConfig
GET /v1/{name=projects/*}/config
Returns the Cloud Source Repositories configuration of the project.
updateConfig
PATCH /v1/{name=projects/*}/config
Updates the Cloud Source Repositories configuration of the project.
REST Resource: v1.projects.repos
Methods
create
POST /v1/{parent=projects/*}/repos
Creates a repo in the given project with the given name.
delete
DELETE /v1/{name=projects/*/repos/**}
Deletes a repo.
get
GET /v1/{name=projects/*/repos/**}
Returns information about a repo.
getIamPolicy
GET /v1/{resource=projects/*/repos/**}:getIamPolicy
Gets the IAM policy policy for a resource.
list
GET /v1/{name=projects/*}/repos
Returns all repos belonging to a project.
patch
PATCH /v1/{name=projects/*/repos/**}
Updates information about a repo.
setIamPolicy
POST /v1/{resource=projects/*/repos/**}:setIamPolicy
Sets the IAM policy on the specified resource.
sync
POST /v1/{name=projects/*/repos/**}:sync
Synchronize a connected repo.
testIamPermissions
POST /v1/{resource=projects/*/repos/**}:testIamPermissions
Returns permissions that a caller has on the specified resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
