---
title: "Google Workspace Events API \_|\_ Google for Developers"
url: https://developers.google.com/workspace/events/reference/rest/v1
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/events/reference/rest/v1
source_metadata:
  url: https://developers.google.com/workspace/events/reference/rest/v1
  title: "Google Workspace Events API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Google Workspace Events API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Google Workspace Events API enables you to subscribe to events and manage change notifications for various Google Workspace applications.
You can utilize the API to create, delete, get, list, patch, and reactivate subscriptions.
Operations can be monitored using the API to get their latest status.
Client libraries are recommended for interacting with the service, but direct API calls are also supported using the provided service endpoint and discovery document.
The Google Workspace Events API lets you subscribe to events and manage change notifications across Google Workspace applications.
REST Resource: v1.operations
REST Resource: v1.subscriptions
Service: workspaceevents.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://workspaceevents.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://workspaceevents.googleapis.com
REST Resource: v1.operations
Methods
get
GET /v1/{name=operations/**}
Gets the latest state of a long-running operation.
REST Resource: v1.subscriptions
Methods
create
POST /v1/subscriptions
Creates a Google Workspace subscription.
delete
DELETE /v1/{name=subscriptions/*}
Deletes a Google Workspace subscription.
get
GET /v1/{name=subscriptions/*}
Gets details about a Google Workspace subscription.
list
GET /v1/subscriptions
Lists Google Workspace subscriptions.
patch
PATCH /v1/{subscription.name=subscriptions/*}
Updates or renews a Google Workspace subscription.
reactivate
POST /v1/{name=subscriptions/*}:reactivate
Reactivates a suspended Google Workspace subscription.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-24 UTC."],[],["The Google Workspace Events API manages change notifications via subscriptions. It provides two main REST resources: `v1.operations` and `v1.subscriptions`. `v1.operations` allows retrieving the state of long-running tasks with `get`. `v1.subscriptions` allows users to `create`, `delete`, `get`, `list`, `patch`, and `reactivate` subscriptions. Client interaction can be achieved by using Google-provided libraries or user-created ones. A discovery document and service endpoint are available for API interactions.\n"]]
