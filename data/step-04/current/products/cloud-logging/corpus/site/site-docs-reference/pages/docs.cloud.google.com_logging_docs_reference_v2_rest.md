---
title: "Cloud Logging API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/reference/v2/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/reference/v2/rest
  title: "Cloud Logging API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Reference
Send feedback
Cloud Logging API
Stay organized with collections
Save and categorize content based on your preferences.
Writes log entries and manages your Cloud Logging configuration.
REST Resource: v2
REST Resource: v2.billingAccounts
REST Resource: v2.billingAccounts.exclusions
REST Resource: v2.billingAccounts.locations.buckets
REST Resource: v2.billingAccounts.locations.buckets.links
REST Resource: v2.billingAccounts.locations.buckets.views
REST Resource: v2.billingAccounts.locations.buckets.views.logs
REST Resource: v2.billingAccounts.locations.operations
REST Resource: v2.billingAccounts.locations.recentQueries
REST Resource: v2.billingAccounts.locations.savedQueries
REST Resource: v2.billingAccounts.logs
REST Resource: v2.billingAccounts.sinks
REST Resource: v2.entries
REST Resource: v2.exclusions
REST Resource: v2.folders
REST Resource: v2.folders.exclusions
REST Resource: v2.folders.locations.buckets
REST Resource: v2.folders.locations.buckets.links
REST Resource: v2.folders.locations.buckets.views
REST Resource: v2.folders.locations.buckets.views.logs
REST Resource: v2.folders.locations.logScopes
REST Resource: v2.folders.locations.operations
REST Resource: v2.folders.locations.recentQueries
REST Resource: v2.folders.locations.savedQueries
REST Resource: v2.folders.logs
REST Resource: v2.folders.sinks
REST Resource: v2.locations.buckets
REST Resource: v2.locations.buckets.links
REST Resource: v2.locations.buckets.views
REST Resource: v2.locations.operations
REST Resource: v2.logs
REST Resource: v2.monitoredResourceDescriptors
REST Resource: v2.organizations
REST Resource: v2.organizations.exclusions
REST Resource: v2.organizations.locations.buckets
REST Resource: v2.organizations.locations.buckets.links
REST Resource: v2.organizations.locations.buckets.views
REST Resource: v2.organizations.locations.buckets.views.logs
REST Resource: v2.organizations.locations.logScopes
REST Resource: v2.organizations.locations.operations
REST Resource: v2.organizations.locations.recentQueries
REST Resource: v2.organizations.locations.savedQueries
REST Resource: v2.organizations.logs
REST Resource: v2.organizations.sinks
REST Resource: v2.projects
REST Resource: v2.projects.exclusions
REST Resource: v2.projects.locations.buckets
REST Resource: v2.projects.locations.buckets.links
REST Resource: v2.projects.locations.buckets.views
REST Resource: v2.projects.locations.buckets.views.logs
REST Resource: v2.projects.locations.logScopes
REST Resource: v2.projects.locations.operations
REST Resource: v2.projects.locations.recentQueries
REST Resource: v2.projects.locations.savedQueries
REST Resource: v2.projects.logs
REST Resource: v2.projects.metrics
REST Resource: v2.projects.sinks
REST Resource: v2.sinks
Service: logging.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://logging.googleapis.com/$discovery/rest?version=v2
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://logging.googleapis.com
REST Resource: v2
Methods
getCmekSettings
GET /v2/{name=*/*}/cmekSettings
Gets the Logging CMEK settings for the given resource.
getSettings
GET /v2/{name=*/*}/settings
Gets the settings for the given resource.
updateCmekSettings
PATCH /v2/{name=*/*}/cmekSettings
Updates the Log Router CMEK settings for the given resource.
updateSettings
PATCH /v2/{name=*/*}/settings
Updates the settings for the given resource.
REST Resource: v2.billingAccounts
Methods
getCmekSettings
GET /v2/{name=billingAccounts/*}/cmekSettings
Gets the Logging CMEK settings for the given resource.
getSettings
GET /v2/{name=billingAccounts/*}/settings
Gets the settings for the given resource.
REST Resource: v2.billingAccounts.exclusions
Methods
create
POST /v2/{parent=billingAccounts/*}/exclusions
Creates a new exclusion in the _Default sink in a specified parent resource.
delete
DELETE /v2/{name=billingAccounts/*/exclusions/*}
Deletes an exclusion in the _Default sink.
get
GET /v2/{name=billingAccounts/*/exclusions/*}
Gets the description of an exclusion in the _Default sink.
list
GET /v2/{parent=billingAccounts/*}/exclusions
Lists all the exclusions on the _Default sink in a parent resource.
patch
PATCH /v2/{name=billingAccounts/*/exclusions/*}
Changes one or more properties of an existing exclusion in the _Default sink.
REST Resource: v2.billingAccounts.locations.buckets
Methods
create
POST /v2/{parent=billingAccounts/*/locations/*}/buckets
Creates a log bucket that can be used to store log entries.
createAsync
POST /v2/{parent=billingAccounts/*/locations/*}/buckets:createAsync
Creates a log bucket asynchronously that can be used to store log entries.
delete
DELETE /v2/{name=billingAccounts/*/locations/*/buckets/*}
Deletes a log bucket.
get
GET /v2/{name=billingAccounts/*/locations/*/buckets/*}
Gets a log bucket.
list
GET /v2/{parent=billingAccounts/*/locations/*}/buckets
Lists log buckets.
patch
PATCH /v2/{name=billingAccounts/*/locations/*/buckets/*}
Updates a log bucket.
undelete
POST /v2/{name=billingAccounts/*/locations/*/buckets/*}:undelete
Undeletes a log bucket.
updateAsync
POST /v2/{name=billingAccounts/*/locations/*/buckets/*}:updateAsync
Updates a log bucket asynchronously.
REST Resource: v2.billingAccounts.locations.buckets.links
Methods
create
POST /v2/{parent=billingAccounts/*/locations/*/buckets/*}/links
Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket.
delete
DELETE /v2/{name=billingAccounts/*/locations/*/buckets/*/links/*}
Deletes a link.
get
GET /v2/{name=billingAccounts/*/locations/*/buckets/*/links/*}
Gets a link.
list
GET /v2/{parent=billingAccounts/*/locations/*/buckets/*}/links
Lists links.
REST Resource: v2.billingAccounts.locations.buckets.views
Methods
create
POST /v2/{parent=billingAccounts/*/locations/*/buckets/*}/views
Creates a view over log entries in a log bucket.
delete
DELETE /v2/{name=billingAccounts/*/locations/*/buckets/*/views/*}
Deletes a view on a log bucket.
get
GET /v2/{name=billingAccounts/*/locations/*/buckets/*/views/*}
Gets a view on a log bucket.
list
GET /v2/{parent=billingAccounts/*/locations/*/buckets/*}/views
Lists views on a log bucket.
patch
PATCH /v2/{name=billingAccounts/*/locations/*/buckets/*/views/*}
Updates a view on a log bucket.
REST Resource: v2.billingAccounts.locations.buckets.views.logs
Methods
list
GET /v2/{parent=billingAccounts/*/locations/*/buckets/*/views/*}/logs
Lists the logs in projects, organizations, folders, or billing accounts.
REST Resource: v2.billingAccounts.locations.operations
Methods
cancel
POST /v2/{name=billingAccounts/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
get
GET /v2/{name=billingAccounts/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v2/{name=billingAccounts/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2.billingAccounts.locations.recentQueries
Methods
list
GET /v2/{parent=billingAccounts/*/locations/*}/recentQueries
Lists the RecentQueries that were created by the user making the request.
REST Resource: v2.billingAccounts.locations.savedQueries
Methods
create
POST /v2/{parent=billingAccounts/*/locations/*}/savedQueries
Creates a new SavedQuery for the user making the request.
delete
DELETE /v2/{name=billingAccounts/*/locations/*/savedQueries/*}
Deletes an existing SavedQuery that was created by the user making the request.
get
GET /v2/{name=billingAccounts/*/locations/*/savedQueries/*}
Returns all data associated with the requested query.
list
GET /v2/{parent=billingAccounts/*/locations/*}/savedQueries
Lists the SavedQueries that were created by the user making the request.
patch
PATCH /v2/{savedQuery.name=billingAccounts/*/locations/*/savedQueries/*}
Updates an existing SavedQuery.
REST Resource: v2.billingAccounts.logs
Methods
delete
DELETE /v2/{logName=billingAccounts/*/logs/*}
Deletes all the log entries in a log for the global _Default Log Bucket.
list
GET /v2/{parent=billingAccounts/*}/logs
Lists the logs in projects, organizations, folders, or billing accounts.
REST Resource: v2.billingAccounts.sinks
Methods
create
POST /v2/{parent=billingAccounts/*}/sinks
Creates a sink that exports specified log entries to a destination.
delete
DELETE /v2/{sinkName=billingAccounts/*/sinks/*}
Deletes a sink.
get
GET /v2/{sinkName=billingAccounts/*/sinks/*}
Gets a sink.
list
GET /v2/{parent=billingAccounts/*}/sinks
Lists sinks.
patch
PATCH /v2/{sinkName=billingAccounts/*/sinks/*}
Updates a sink.
update
PUT /v2/{sinkName=billingAccounts/*/sinks/*}
Updates a sink.
REST Resource: v2.entries
Methods
copy
POST /v2/entries:copy
Copies a set of log entries from a log bucket to a Cloud Storage bucket.
list
POST /v2/entries:list
Lists log entries.
tail
POST /v2/entries:tail
Streaming read of log entries as they are received.
write
POST /v2/entries:write
Writes log entries to Logging.
REST Resource: v2.exclusions
Methods
create
POST /v2/{parent=*/*}/exclusions
Creates a new exclusion in the _Default sink in a specified parent resource.
delete
DELETE /v2/{name=*/*/exclusions/*}
Deletes an exclusion in the _Default sink.
get
GET /v2/{name=*/*/exclusions/*}
Gets the description of an exclusion in the _Default sink.
list
GET /v2/{parent=*/*}/exclusions
Lists all the exclusions on the _Default sink in a parent resource.
patch
PATCH /v2/{name=*/*/exclusions/*}
Changes one or more properties of an existing exclusion in the _Default sink.
REST Resource: v2.folders
Methods
getCmekSettings
GET /v2/{name=folders/*}/cmekSettings
Gets the Logging CMEK settings for the given resource.
getSettings
GET /v2/{name=folders/*}/settings
Gets the settings for the given resource.
updateSettings
PATCH /v2/{name=folders/*}/settings
Updates the settings for the given resource.
REST Resource: v2.folders.exclusions
Methods
create
POST /v2/{parent=folders/*}/exclusions
Creates a new exclusion in the _Default sink in a specified parent resource.
delete
DELETE /v2/{name=folders/*/exclusions/*}
Deletes an exclusion in the _Default sink.
get
GET /v2/{name=folders/*/exclusions/*}
Gets the description of an exclusion in the _Default sink.
list
GET /v2/{parent=folders/*}/exclusions
Lists all the exclusions on the _Default sink in a parent resource.
patch
PATCH /v2/{name=folders/*/exclusions/*}
Changes one or more properties of an existing exclusion in the _Default sink.
REST Resource: v2.folders.locations.buckets
Methods
create
POST /v2/{parent=folders/*/locations/*}/buckets
Creates a log bucket that can be used to store log entries.
createAsync
POST /v2/{parent=folders/*/locations/*}/buckets:createAsync
Creates a log bucket asynchronously that can be used to store log entries.
delete
DELETE /v2/{name=folders/*/locations/*/buckets/*}
Deletes a log bucket.
get
GET /v2/{name=folders/*/locations/*/buckets/*}
Gets a log bucket.
list
GET /v2/{parent=folders/*/locations/*}/buckets
Lists log buckets.
patch
PATCH /v2/{name=folders/*/locations/*/buckets/*}
Updates a log bucket.
undelete
POST /v2/{name=folders/*/locations/*/buckets/*}:undelete
Undeletes a log bucket.
updateAsync
POST /v2/{name=folders/*/locations/*/buckets/*}:updateAsync
Updates a log bucket asynchronously.
REST Resource: v2.folders.locations.buckets.links
Methods
create
POST /v2/{parent=folders/*/locations/*/buckets/*}/links
Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket.
delete
DELETE /v2/{name=folders/*/locations/*/buckets/*/links/*}
Deletes a link.
get
GET /v2/{name=folders/*/locations/*/buckets/*/links/*}
Gets a link.
list
GET /v2/{parent=folders/*/locations/*/buckets/*}/links
Lists links.
REST Resource: v2.folders.locations.buckets.views
Methods
create
POST /v2/{parent=folders/*/locations/*/buckets/*}/views
Creates a view over log entries in a log bucket.
delete
DELETE /v2/{name=folders/*/locations/*/buckets/*/views/*}
Deletes a view on a log bucket.
get
GET /v2/{name=folders/*/locations/*/buckets/*/views/*}
Gets a view on a log bucket.
getIamPolicy
POST /v2/{resource=folders/*/locations/*/buckets/*/views/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v2/{parent=folders/*/locations/*/buckets/*}/views
Lists views on a log bucket.
patch
PATCH /v2/{name=folders/*/locations/*/buckets/*/views/*}
Updates a view on a log bucket.
setIamPolicy
POST /v2/{resource=folders/*/locations/*/buckets/*/views/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v2/{resource=folders/*/locations/*/buckets/*/views/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v2.folders.locations.buckets.views.logs
Methods
list
GET /v2/{parent=folders/*/locations/*/buckets/*/views/*}/logs
Lists the logs in projects, organizations, folders, or billing accounts.
REST Resource: v2.folders.locations.logScopes
Methods
create
POST /v2/{parent=folders/*/locations/*}/logScopes
Creates a log scope.
delete
DELETE /v2/{name=folders/*/locations/*/logScopes/*}
Deletes a log scope.
get
GET /v2/{name=folders/*/locations/*/logScopes/*}
Gets a log scope.
list
GET /v2/{parent=folders/*/locations/*}/logScopes
Lists log scopes.
patch
PATCH /v2/{logScope.name=folders/*/locations/*/logScopes/*}
Updates a log scope.
REST Resource: v2.folders.locations.operations
Methods
cancel
POST /v2/{name=folders/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
get
GET /v2/{name=folders/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v2/{name=folders/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2.folders.locations.recentQueries
Methods
list
GET /v2/{parent=folders/*/locations/*}/recentQueries
Lists the RecentQueries that were created by the user making the request.
REST Resource: v2.folders.locations.savedQueries
Methods
create
POST /v2/{parent=folders/*/locations/*}/savedQueries
Creates a new SavedQuery for the user making the request.
delete
DELETE /v2/{name=folders/*/locations/*/savedQueries/*}
Deletes an existing SavedQuery that was created by the user making the request.
get
GET /v2/{name=folders/*/locations/*/savedQueries/*}
Returns all data associated with the requested query.
list
GET /v2/{parent=folders/*/locations/*}/savedQueries
Lists the SavedQueries that were created by the user making the request.
patch
PATCH /v2/{savedQuery.name=folders/*/locations/*/savedQueries/*}
Updates an existing SavedQuery.
REST Resource: v2.folders.logs
Methods
delete
DELETE /v2/{logName=folders/*/logs/*}
Deletes all the log entries in a log for the global _Default Log Bucket.
list
GET /v2/{parent=folders/*}/logs
Lists the logs in projects, organizations, folders, or billing accounts.
REST Resource: v2.folders.sinks
Methods
create
POST /v2/{parent=folders/*}/sinks
Creates a sink that exports specified log entries to a destination.
delete
DELETE /v2/{sinkName=folders/*/sinks/*}
Deletes a sink.
get
GET /v2/{sinkName=folders/*/sinks/*}
Gets a sink.
list
GET /v2/{parent=folders/*}/sinks
Lists sinks.
patch
PATCH /v2/{sinkName=folders/*/sinks/*}
Updates a sink.
update
PUT /v2/{sinkName=folders/*/sinks/*}
Updates a sink.
REST Resource: v2.locations.buckets
Methods
create
POST /v2/{parent=*/*/locations/*}/buckets
Creates a log bucket that can be used to store log entries.
createAsync
POST /v2/{parent=*/*/locations/*}/buckets:createAsync
Creates a log bucket asynchronously that can be used to store log entries.
delete
DELETE /v2/{name=*/*/locations/*/buckets/*}
Deletes a log bucket.
get
GET /v2/{name=*/*/locations/*/buckets/*}
Gets a log bucket.
list
GET /v2/{parent=*/*/locations/*}/buckets
Lists log buckets.
patch
PATCH /v2/{name=*/*/locations/*/buckets/*}
Updates a log bucket.
undelete
POST /v2/{name=*/*/locations/*/buckets/*}:undelete
Undeletes a log bucket.
updateAsync
POST /v2/{name=*/*/locations/*/buckets/*}:updateAsync
Updates a log bucket asynchronously.
REST Resource: v2.locations.buckets.links
Methods
create
POST /v2/{parent=*/*/locations/*/buckets/*}/links
Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket.
delete
DELETE /v2/{name=*/*/locations/*/buckets/*/links/*}
Deletes a link.
get
GET /v2/{name=*/*/locations/*/buckets/*/links/*}
Gets a link.
list
GET /v2/{parent=*/*/locations/*/buckets/*}/links
Lists links.
REST Resource: v2.locations.buckets.views
Methods
create
POST /v2/{parent=*/*/locations/*/buckets/*}/views
Creates a view over log entries in a log bucket.
delete
DELETE /v2/{name=*/*/locations/*/buckets/*/views/*}
Deletes a view on a log bucket.
get
GET /v2/{name=*/*/locations/*/buckets/*/views/*}
Gets a view on a log bucket.
getIamPolicy
POST /v2/{resource=*/*/locations/*/buckets/*/views/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v2/{parent=*/*/locations/*/buckets/*}/views
Lists views on a log bucket.
patch
PATCH /v2/{name=*/*/locations/*/buckets/*/views/*}
Updates a view on a log bucket.
setIamPolicy
POST /v2/{resource=*/*/locations/*/buckets/*/views/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v2/{resource=*/*/locations/*/buckets/*/views/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v2.locations.operations
Methods
cancel
POST /v2/{name=*/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
get
GET /v2/{name=*/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v2/{name=*/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2.logs
Methods
delete
DELETE /v2/{logName=*/*/logs/*}
Deletes all the log entries in a log for the global _Default Log Bucket.
list
GET /v2/{parent=*/*}/logs
Lists the logs in projects, organizations, folders, or billing accounts.
REST Resource: v2.monitoredResourceDescriptors
Methods
list
GET /v2/monitoredResourceDescriptors
Lists the descriptors for monitored resource types used by Logging.
REST Resource: v2.organizations
Methods
getCmekSettings
GET /v2/{name=organizations/*}/cmekSettings
Gets the Logging CMEK settings for the given resource.
getSettings
GET /v2/{name=organizations/*}/settings
Gets the settings for the given resource.
updateCmekSettings
PATCH /v2/{name=organizations/*}/cmekSettings
Updates the Log Router CMEK settings for the given resource.
updateSettings
PATCH /v2/{name=organizations/*}/settings
Updates the settings for the given resource.
REST Resource: v2.organizations.exclusions
Methods
create
POST /v2/{parent=organizations/*}/exclusions
Creates a new exclusion in the _Default sink in a specified parent resource.
delete
DELETE /v2/{name=organizations/*/exclusions/*}
Deletes an exclusion in the _Default sink.
get
GET /v2/{name=organizations/*/exclusions/*}
Gets the description of an exclusion in the _Default sink.
list
GET /v2/{parent=organizations/*}/exclusions
Lists all the exclusions on the _Default sink in a parent resource.
patch
PATCH /v2/{name=organizations/*/exclusions/*}
Changes one or more properties of an existing exclusion in the _Default sink.
REST Resource: v2.organizations.locations.buckets
Methods
create
POST /v2/{parent=organizations/*/locations/*}/buckets
Creates a log bucket that can be used to store log entries.
createAsync
POST /v2/{parent=organizations/*/locations/*}/buckets:createAsync
Creates a log bucket asynchronously that can be used to store log entries.
delete
DELETE /v2/{name=organizations/*/locations/*/buckets/*}
Deletes a log bucket.
get
GET /v2/{name=organizations/*/locations/*/buckets/*}
Gets a log bucket.
list
GET /v2/{parent=organizations/*/locations/*}/buckets
Lists log buckets.
patch
PATCH /v2/{name=organizations/*/locations/*/buckets/*}
Updates a log bucket.
undelete
POST /v2/{name=organizations/*/locations/*/buckets/*}:undelete
Undeletes a log bucket.
updateAsync
POST /v2/{name=organizations/*/locations/*/buckets/*}:updateAsync
Updates a log bucket asynchronously.
REST Resource: v2.organizations.locations.buckets.links
Methods
create
POST /v2/{parent=organizations/*/locations/*/buckets/*}/links
Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket.
delete
DELETE /v2/{name=organizations/*/locations/*/buckets/*/links/*}
Deletes a link.
get
GET /v2/{name=organizations/*/locations/*/buckets/*/links/*}
Gets a link.
list
GET /v2/{parent=organizations/*/locations/*/buckets/*}/links
Lists links.
REST Resource: v2.organizations.locations.buckets.views
Methods
create
POST /v2/{parent=organizations/*/locations/*/buckets/*}/views
Creates a view over log entries in a log bucket.
delete
DELETE /v2/{name=organizations/*/locations/*/buckets/*/views/*}
Deletes a view on a log bucket.
get
GET /v2/{name=organizations/*/locations/*/buckets/*/views/*}
Gets a view on a log bucket.
getIamPolicy
POST /v2/{resource=organizations/*/locations/*/buckets/*/views/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v2/{parent=organizations/*/locations/*/buckets/*}/views
Lists views on a log bucket.
patch
PATCH /v2/{name=organizations/*/locations/*/buckets/*/views/*}
Updates a view on a log bucket.
setIamPolicy
POST /v2/{resource=organizations/*/locations/*/buckets/*/views/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v2/{resource=organizations/*/locations/*/buckets/*/views/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v2.organizations.locations.buckets.views.logs
Methods
list
GET /v2/{parent=organizations/*/locations/*/buckets/*/views/*}/logs
Lists the logs in projects, organizations, folders, or billing accounts.
REST Resource: v2.organizations.locations.logScopes
Methods
create
POST /v2/{parent=organizations/*/locations/*}/logScopes
Creates a log scope.
delete
DELETE /v2/{name=organizations/*/locations/*/logScopes/*}
Deletes a log scope.
get
GET /v2/{name=organizations/*/locations/*/logScopes/*}
Gets a log scope.
list
GET /v2/{parent=organizations/*/locations/*}/logScopes
Lists log scopes.
patch
PATCH /v2/{logScope.name=organizations/*/locations/*/logScopes/*}
Updates a log scope.
REST Resource: v2.organizations.locations.operations
Methods
cancel
POST /v2/{name=organizations/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
get
GET /v2/{name=organizations/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v2/{name=organizations/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2.organizations.locations.recentQueries
Methods
list
GET /v2/{parent=organizations/*/locations/*}/recentQueries
Lists the RecentQueries that were created by the user making the request.
REST Resource: v2.organizations.locations.savedQueries
Methods
create
POST /v2/{parent=organizations/*/locations/*}/savedQueries
Creates a new SavedQuery for the user making the request.
delete
DELETE /v2/{name=organizations/*/locations/*/savedQueries/*}
Deletes an existing SavedQuery that was created by the user making the request.
get
GET /v2/{name=organizations/*/locations/*/savedQueries/*}
Returns all data associated with the requested query.
list
GET /v2/{parent=organizations/*/locations/*}/savedQueries
Lists the SavedQueries that were created by the user making the request.
patch
PATCH /v2/{savedQuery.name=organizations/*/locations/*/savedQueries/*}
Updates an existing SavedQuery.
REST Resource: v2.organizations.logs
Methods
delete
DELETE /v2/{logName=organizations/*/logs/*}
Deletes all the log entries in a log for the global _Default Log Bucket.
list
GET /v2/{parent=organizations/*}/logs
Lists the logs in projects, organizations, folders, or billing accounts.
REST Resource: v2.organizations.sinks
Methods
create
POST /v2/{parent=organizations/*}/sinks
Creates a sink that exports specified log entries to a destination.
delete
DELETE /v2/{sinkName=organizations/*/sinks/*}
Deletes a sink.
get
GET /v2/{sinkName=organizations/*/sinks/*}
Gets a sink.
list
GET /v2/{parent=organizations/*}/sinks
Lists sinks.
patch
PATCH /v2/{sinkName=organizations/*/sinks/*}
Updates a sink.
update
PUT /v2/{sinkName=organizations/*/sinks/*}
Updates a sink.
REST Resource: v2.projects
Methods
getCmekSettings
GET /v2/{name=projects/*}/cmekSettings
Gets the Logging CMEK settings for the given resource.
getSettings
GET /v2/{name=projects/*}/settings
Gets the settings for the given resource.
REST Resource: v2.projects.exclusions
Methods
create
POST /v2/{parent=projects/*}/exclusions
Creates a new exclusion in the _Default sink in a specified parent resource.
delete
DELETE /v2/{name=projects/*/exclusions/*}
Deletes an exclusion in the _Default sink.
get
GET /v2/{name=projects/*/exclusions/*}
Gets the description of an exclusion in the _Default sink.
list
GET /v2/{parent=projects/*}/exclusions
Lists all the exclusions on the _Default sink in a parent resource.
patch
PATCH /v2/{name=projects/*/exclusions/*}
Changes one or more properties of an existing exclusion in the _Default sink.
REST Resource: v2.projects.locations.buckets
Methods
create
POST /v2/{parent=projects/*/locations/*}/buckets
Creates a log bucket that can be used to store log entries.
createAsync
POST /v2/{parent=projects/*/locations/*}/buckets:createAsync
Creates a log bucket asynchronously that can be used to store log entries.
delete
DELETE /v2/{name=projects/*/locations/*/buckets/*}
Deletes a log bucket.
get
GET /v2/{name=projects/*/locations/*/buckets/*}
Gets a log bucket.
list
GET /v2/{parent=projects/*/locations/*}/buckets
Lists log buckets.
patch
PATCH /v2/{name=projects/*/locations/*/buckets/*}
Updates a log bucket.
undelete
POST /v2/{name=projects/*/locations/*/buckets/*}:undelete
Undeletes a log bucket.
updateAsync
POST /v2/{name=projects/*/locations/*/buckets/*}:updateAsync
Updates a log bucket asynchronously.
REST Resource: v2.projects.locations.buckets.links
Methods
create
POST /v2/{parent=projects/*/locations/*/buckets/*}/links
Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket.
delete
DELETE /v2/{name=projects/*/locations/*/buckets/*/links/*}
Deletes a link.
get
GET /v2/{name=projects/*/locations/*/buckets/*/links/*}
Gets a link.
list
GET /v2/{parent=projects/*/locations/*/buckets/*}/links
Lists links.
REST Resource: v2.projects.locations.buckets.views
Methods
create
POST /v2/{parent=projects/*/locations/*/buckets/*}/views
Creates a view over log entries in a log bucket.
delete
DELETE /v2/{name=projects/*/locations/*/buckets/*/views/*}
Deletes a view on a log bucket.
get
GET /v2/{name=projects/*/locations/*/buckets/*/views/*}
Gets a view on a log bucket.
getIamPolicy
POST /v2/{resource=projects/*/locations/*/buckets/*/views/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v2/{parent=projects/*/locations/*/buckets/*}/views
Lists views on a log bucket.
patch
PATCH /v2/{name=projects/*/locations/*/buckets/*/views/*}
Updates a view on a log bucket.
setIamPolicy
POST /v2/{resource=projects/*/locations/*/buckets/*/views/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v2/{resource=projects/*/locations/*/buckets/*/views/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v2.projects.locations.buckets.views.logs
Methods
list
GET /v2/{parent=projects/*/locations/*/buckets/*/views/*}/logs
Lists the logs in projects, organizations, folders, or billing accounts.
REST Resource: v2.projects.locations.logScopes
Methods
create
POST /v2/{parent=projects/*/locations/*}/logScopes
Creates a log scope.
delete
DELETE /v2/{name=projects/*/locations/*/logScopes/*}
Deletes a log scope.
get
GET /v2/{name=projects/*/locations/*/logScopes/*}
Gets a log scope.
list
GET /v2/{parent=projects/*/locations/*}/logScopes
Lists log scopes.
patch
PATCH /v2/{logScope.name=projects/*/locations/*/logScopes/*}
Updates a log scope.
REST Resource: v2.projects.locations.operations
Methods
cancel
POST /v2/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
get
GET /v2/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v2/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2.projects.locations.recentQueries
Methods
list
GET /v2/{parent=projects/*/locations/*}/recentQueries
Lists the RecentQueries that were created by the user making the request.
REST Resource: v2.projects.locations.savedQueries
Methods
create
POST /v2/{parent=projects/*/locations/*}/savedQueries
Creates a new SavedQuery for the user making the request.
delete
DELETE /v2/{name=projects/*/locations/*/savedQueries/*}
Deletes an existing SavedQuery that was created by the user making the request.
get
GET /v2/{name=projects/*/locations/*/savedQueries/*}
Returns all data associated with the requested query.
list
GET /v2/{parent=projects/*/locations/*}/savedQueries
Lists the SavedQueries that were created by the user making the request.
patch
PATCH /v2/{savedQuery.name=projects/*/locations/*/savedQueries/*}
Updates an existing SavedQuery.
REST Resource: v2.projects.logs
Methods
delete
DELETE /v2/{logName=projects/*/logs/*}
Deletes all the log entries in a log for the global _Default Log Bucket.
list
GET /v2/{parent=projects/*}/logs
Lists the logs in projects, organizations, folders, or billing accounts.
REST Resource: v2.projects.metrics
Methods
create
POST /v2/{parent=projects/*}/metrics
Creates a logs-based metric.
delete
DELETE /v2/{metricName=projects/*/metrics/*}
Deletes a logs-based metric.
get
GET /v2/{metricName=projects/*/metrics/*}
Gets a logs-based metric.
list
GET /v2/{parent=projects/*}/metrics
Lists logs-based metrics.
update
PUT /v2/{metricName=projects/*/metrics/*}
Creates or updates a logs-based metric.
REST Resource: v2.projects.sinks
Methods
create
POST /v2/{parent=projects/*}/sinks
Creates a sink that exports specified log entries to a destination.
delete
DELETE /v2/{sinkName=projects/*/sinks/*}
Deletes a sink.
get
GET /v2/{sinkName=projects/*/sinks/*}
Gets a sink.
list
GET /v2/{parent=projects/*}/sinks
Lists sinks.
patch
PATCH /v2/{sinkName=projects/*/sinks/*}
Updates a sink.
update
PUT /v2/{sinkName=projects/*/sinks/*}
Updates a sink.
REST Resource: v2.sinks
Methods
create
POST /v2/{parent=*/*}/sinks
Creates a sink that exports specified log entries to a destination.
delete
DELETE /v2/{sinkName=*/*/sinks/*}
Deletes a sink.
get
GET /v2/{sinkName=*/*/sinks/*}
Gets a sink.
list
GET /v2/{parent=*/*}/sinks
Lists sinks.
update
PUT /v2/{sinkName=*/*/sinks/*}
Updates a sink.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-21 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-21 UTC."],[],[]]
