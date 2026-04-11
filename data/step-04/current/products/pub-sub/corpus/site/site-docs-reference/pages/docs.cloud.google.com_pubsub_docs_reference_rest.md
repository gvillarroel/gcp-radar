---
title: "Cloud Pub/Sub API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/reference/rest
  title: "Cloud Pub/Sub API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Reference
Send feedback
Cloud Pub/Sub API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1.projects.schemas
REST Resource: v1.projects.snapshots
REST Resource: v1.projects.subscriptions
REST Resource: v1.projects.topics
REST Resource: v1.projects.topics.snapshots
REST Resource: v1.projects.topics.subscriptions
Service: pubsub.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://pubsub.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://pubsub.googleapis.com
Regional service endpoint
A regional service endpoint is a base URL that specifies the network address of an API service in a single region. A service that is available in multiple regions might have multiple regional endpoints. Select a location to see its regional service endpoint for this service. global
https://pubsub.googleapis.com
REST Resource: v1.projects.schemas
Methods
commit
POST /v1/{name}:commit
Commits a new schema revision to an existing schema.
create
POST /v1/{parent}/schemas
Creates a schema.
delete
DELETE /v1/{name}
Deletes a schema.
deleteRevision
DELETE /v1/{name}:deleteRevision
Deletes a specific schema revision.
get
GET /v1/{name}
Gets a schema.
list
GET /v1/{parent}/schemas
Lists schemas in a project.
listRevisions
GET /v1/{name}:listRevisions
Lists all schema revisions for the named schema.
rollback
POST /v1/{name}:rollback
Creates a new schema revision that is a copy of the provided revision_id.
validate
POST /v1/{parent}/schemas:validate
Validates a schema.
validateMessage
POST /v1/{parent}/schemas:validateMessage
Validates a message against a schema.
REST Resource: v1.projects.snapshots
Methods
create
PUT /v1/{name}
Creates a snapshot from the requested subscription.
delete
DELETE /v1/{snapshot}
Removes an existing snapshot.
get
GET /v1/{snapshot}
Gets the configuration details of a snapshot.
getIamPolicy
GET /v1/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{project}/snapshots
Lists the existing snapshots.
patch
PATCH /v1/{snapshot.name}
Updates an existing snapshot by updating the fields specified in the update mask.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.subscriptions
Methods
acknowledge
POST /v1/{subscription}:acknowledge
Acknowledges the messages associated with the ack_ids in the AcknowledgeRequest .
create
PUT /v1/{name}
Creates a subscription to a given topic.
delete
DELETE /v1/{subscription}
Deletes an existing subscription.
detach
POST /v1/{subscription}:detach
Detaches a subscription from this topic.
get
GET /v1/{subscription}
Gets the configuration details of a subscription.
getIamPolicy
GET /v1/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{project}/subscriptions
Lists matching subscriptions.
modifyAckDeadline
POST /v1/{subscription}:modifyAckDeadline
Modifies the ack deadline for a specific message.
modifyPushConfig
POST /v1/{subscription}:modifyPushConfig
Modifies the PushConfig for a specified subscription.
patch
PATCH /v1/{subscription.name}
Updates an existing subscription by updating the fields specified in the update mask.
pull
POST /v1/{subscription}:pull
Pulls messages from the server.
seek
POST /v1/{subscription}:seek
Seeks an existing subscription to a point in time or to a given snapshot, whichever is provided in the request.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.topics
Methods
create
PUT /v1/{name}
Creates the given topic with the given name.
delete
DELETE /v1/{topic}
Deletes the topic with the given name.
get
GET /v1/{topic}
Gets the configuration of a topic.
getIamPolicy
GET /v1/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{project}/topics
Lists matching topics.
patch
PATCH /v1/{topic.name}
Updates an existing topic by updating the fields specified in the update mask.
publish
POST /v1/{topic}:publish
Adds one or more messages to the topic.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.topics.snapshots
Methods
list
GET /v1/{topic}/snapshots
Lists the names of the snapshots on this topic.
REST Resource: v1.projects.topics.subscriptions
Methods
list
GET /v1/{topic}/subscriptions
Lists the names of the attached subscriptions on this topic.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-13 UTC."],[],[]]
