---
title: "Google Vault API \_|\_ Google for Developers"
url: https://developers.google.com/workspace/vault/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/vault/guides
source_metadata:
  url: https://developers.google.com/workspace/vault/reference/rest
  title: "Google Vault API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Vault
Reference
Send feedback
Google Vault API
Stay organized with collections
Save and categorize content based on your preferences.
Retention and eDiscovery for Google Workspace.
To work with Vault resources, the account must have the required Vault privileges and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the View All Matters privilege. For example, to download an export, an account needs the Manage Exports privilege and the matter shared with them.
REST Resource: v1.matters
REST Resource: v1.matters.exports
REST Resource: v1.matters.holds
REST Resource: v1.matters.holds.accounts
REST Resource: v1.matters.savedQueries
REST Resource: v1.operations
Service: vault.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://vault.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://vault.googleapis.com
REST Resource: v1.matters
Methods
addPermissions
POST /v1/matters/{matterId}:addPermissions
Adds an account as a matter collaborator.
close
POST /v1/matters/{matterId}:close
Closes the specified matter.
count
POST /v1/matters/{matterId}:count
Counts the accounts processed by the specified query.
create
POST /v1/matters
Creates a matter with the given name and description.
delete
DELETE /v1/matters/{matterId}
Deletes the specified matter.
get
GET /v1/matters/{matterId}
Gets the specified matter.
list
GET /v1/matters
Lists matters the requestor has access to.
removePermissions
POST /v1/matters/{matterId}:removePermissions
Removes an account as a matter collaborator.
reopen
POST /v1/matters/{matterId}:reopen
Reopens the specified matter.
undelete
POST /v1/matters/{matterId}:undelete
Undeletes the specified matter.
update
PUT /v1/matters/{matterId}
Updates the specified matter.
REST Resource: v1.matters.exports
Methods
create
POST /v1/matters/{matterId}/exports
Creates an export.
delete
DELETE /v1/matters/{matterId}/exports/{exportId}
Deletes an export.
get
GET /v1/matters/{matterId}/exports/{exportId}
Gets an export.
list
GET /v1/matters/{matterId}/exports
Lists details about the exports in the specified matter.
REST Resource: v1.matters.holds
Methods
addHeldAccounts
POST /v1/matters/{matterId}/holds/{holdId}:addHeldAccounts
Adds accounts to a hold.
create
POST /v1/matters/{matterId}/holds
Creates a hold in the specified matter.
delete
DELETE /v1/matters/{matterId}/holds/{holdId}
Removes the specified hold and releases the accounts or organizational unit covered by the hold.
get
GET /v1/matters/{matterId}/holds/{holdId}
Gets the specified hold.
list
GET /v1/matters/{matterId}/holds
Lists the holds in a matter.
removeHeldAccounts
POST /v1/matters/{matterId}/holds/{holdId}:removeHeldAccounts
Removes the specified accounts from a hold.
update
PUT /v1/matters/{matterId}/holds/{holdId}
Updates the scope (organizational unit or accounts) and query parameters of a hold.
REST Resource: v1.matters.holds.accounts
Methods
create
POST /v1/matters/{matterId}/holds/{holdId}/accounts
Adds an account to a hold.
delete
DELETE /v1/matters/{matterId}/holds/{holdId}/accounts/{accountId}
Removes an account from a hold.
list
GET /v1/matters/{matterId}/holds/{holdId}/accounts
Lists the accounts covered by a hold.
REST Resource: v1.matters.savedQueries
Methods
create
POST /v1/matters/{matterId}/savedQueries
Creates a saved query.
delete
DELETE /v1/matters/{matterId}/savedQueries/{savedQueryId}
Deletes the specified saved query.
get
GET /v1/matters/{matterId}/savedQueries/{savedQueryId}
Retrieves the specified saved query.
list
GET /v1/matters/{matterId}/savedQueries
Lists the saved queries in a matter.
REST Resource: v1.operations
Methods
cancel
POST /v1/{name=operations/**}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=operations/**}
Deletes a long-running operation.
get
GET /v1/{name=operations/**}
Gets the latest state of a long-running operation.
list
GET /v1/{name=operations}
Lists operations that match the specified filter in the request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-17 UTC."],[],[]]
