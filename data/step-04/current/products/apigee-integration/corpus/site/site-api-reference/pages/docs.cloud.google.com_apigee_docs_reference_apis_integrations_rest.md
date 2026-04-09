---
title: "Apigee Integrations API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest
  title: "Apigee Integrations API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Send feedback
Apigee Integrations API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1.projects.locations.products.authConfigs
REST Resource: v1.projects.locations.products.certificates
REST Resource: v1.projects.locations.products.integrations
REST Resource: v1.projects.locations.products.integrations.executions
REST Resource:
v1.projects.locations.products.integrations.executions.suspensions
REST Resource: v1.projects.locations.products.integrations.versions
REST Resource: v1.projects.locations.products.sfdcInstances
REST Resource: v1.projects.locations.products.sfdcInstances.sfdcChannels
Service: integrations.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://integrations.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint
is a base URL that specifies the network address of an API service. Apigee Integrations has regional service endpoints, where a region
corresponds to a specific geographic location. You can send
API requests to a regional service endpoint based on your requirements. For example, if you want your
data to be processed or stored in a specific region, you can send your request to the
corresponding regional endpoint. Similarly, if you have connectors in a particular region,
you can choose that regional endpoint to run your integration. Requests originating
from a region are routed to the region's service endpoint. If
Apigee Integration becomes unavailable in a region, requests originating within that
region are not load-balanced to a different region.
Apigee Integration provides the following regional service endpoints:
Region
REST/HTTP endpoint
asia-east1
asia-east1-integrations.googleapis.com
asia-northeast1
asia-northeast1-integrations.googleapis.com
asia-south1
asia-south1-integrations.googleapis.com
asia-southeast1
asia-southeast1-integrations.googleapis.com
australia-southeast1
australia-southeast1-integrations.googleapis.com
australia-southeast2
australia-southeast2-integrations.googleapis.com
europe-north1
europe-north1-integrations.googleapis.com
europe-west1
europe-west1-integrations.googleapis.com
europe-west2
europe-west2-integrations.googleapis.com
europe-west3
europe-west3-integrations.googleapis.com
europe-west4
europe-west4-integrations.googleapis.com
europe-west6
europe-west6-integrations.googleapis.com
europe-west9
europe-west9-integrations.googleapis.com
europe-southwest1
europe-southwest1-integrations.googleapis.com
northamerica-northeast1
northamerica-northeast1-integrations.googleapis.com
southamerica-east1
southamerica-east1-integrations.googleapis.com
us-central1
us-central1-integrations.googleapis.com
us-east1
us-east1-integrations.googleapis.com
us-east4
us-east4-integrations.googleapis.com
us-west1
us-west1-integrations.googleapis.com
us-west2
us-west2-integrations.googleapis.com
me-central1
me-central1-integrations.googleapis.com
me-west1
me-west1-integrations.googleapis.com
REST Resource: v1.projects.locations.products.authConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*/products/*}/authConfigs
Creates an auth config record.
delete
DELETE /v1/{name=projects/*/locations/*/products/*/authConfigs/*}
Deletes an auth config.
get
GET /v1/{name=projects/*/locations/*/products/*/authConfigs/*}
Gets a complete auth config.
list
GET /v1/{parent=projects/*/locations/*/products/*}/authConfigs
Lists all auth configs that match the filter.
patch
PATCH /v1/{authConfig.name=projects/*/locations/*/products/*/authConfigs/*}
Updates an auth config.
REST Resource: v1.projects.locations.products.certificates
Methods
create
POST /v1/{parent=projects/*/locations/*/products/*}/certificates
Creates a new certificate.
delete
DELETE /v1/{name=projects/*/locations/*/products/*/certificates/*}
Delete a certificate
get
GET /v1/{name=projects/*/locations/*/products/*/certificates/*}
Get a certificates in the specified project.
list
GET /v1/{parent=projects/*/locations/*/products/*}/certificates
List all the certificates that match the filter.
patch
PATCH /v1/{certificate.name=projects/*/locations/*/products/*/certificates/*}
Updates the certificate by id.
REST Resource: v1.projects.locations.products.integrations
Methods
delete
DELETE /v1/{name=projects/*/locations/*/products/*/integrations/*}
Deletes the selected integration, including all the versions of that integration.
execute
POST /v1/{name=projects/*/locations/*/products/*/integrations/*}:execute
Executes integrations synchronously by passing the trigger id in the request body.
list
GET /v1/{parent=projects/*/locations/*/products/*}/integrations
Returns the list of all integrations in the specified project.
schedule
POST /v1/{name=projects/*/locations/*/products/*/integrations/*}:schedule
Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
REST Resource: v1.projects.locations.products.integrations.executions
Methods
get
GET /v1/{name=projects/*/locations/*/products/*/integrations/*}/executions
Gets an execution in the specified project.
list
GET /v1/{parent=projects/*/locations/*/products/*/integrations/*}/executions
Lists the results of all the integration executions.
REST Resource: v1.projects.locations.products.integrations.executions.suspensions
Methods
lift
POST /v1/{name=projects/*/locations/*/products/*/integrations/*/executions/*/suspensions/*}:lift
* Lifts suspension for advanced suspension task.
list
GET /v1/{parent=projects/*/locations/*/products/*/integrations/*/executions/*}/suspensions
* Lists suspensions associated with a specific execution.
resolve
POST /v1/{name=projects/*/locations/*/products/*/integrations/*/executions/*/suspensions/*}:resolve
* Resolves (lifts/rejects) any number of suspensions.
REST Resource: v1.projects.locations.products.integrations.versions
Methods
create
POST /v1/{parent=projects/*/locations/*/products/*/integrations/*}/versions
Create a integration with a draft version in the specified project.
delete
DELETE /v1/{name=projects/*/locations/*/products/*/integrations/*/versions/*}
Soft-deletes the integration.
download
GET /v1/{name=projects/*/locations/*/products/*/integrations/*/versions/*}:download
Downloads an integration.
get
GET /v1/{name=projects/*/locations/*/products/*/integrations/*/versions/*}
Get a integration in the specified project.
list
GET /v1/{parent=projects/*/locations/*/products/*/integrations/*}/versions
Returns the list of all integration versions in the specified project.
patch
PATCH /v1/{integrationVersion.name=projects/*/locations/*/products/*/integrations/*/versions/*}
Update a integration with a draft version in the specified project.
publish
POST /v1/{name=projects/*/locations/*/products/*/integrations/*/versions/*}:publish
This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state.
takeoverEditLock
POST /v1/{integrationVersion=projects/*/locations/*/products/*/integrations/*/versions/*}:takeoverEditLock
Clears the locked_by and locked_at_timestamp in the DRAFT version of this integration.
unpublish
POST /v1/{name=projects/*/locations/*/products/*/integrations/*/versions/*}:unpublish
Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it.
upload
POST /v1/{parent=projects/*/locations/*/products/*/integrations/*}/versions:upload
Uploads an integration.
REST Resource: v1.projects.locations.products.sfdcInstances
Methods
create
POST /v1/{parent=projects/*/locations/*/products/*}/sfdcInstances
Creates an sfdc instance record.
delete
DELETE /v1/{name=projects/*/locations/*/products/*/sfdcInstances/*}
Deletes an sfdc instance.
get
GET /v1/{name=projects/*/locations/*/products/*/sfdcInstances/*}
Gets an sfdc instance.
list
GET /v1/{parent=projects/*/locations/*/products/*}/sfdcInstances
Lists all sfdc instances that match the filter.
patch
PATCH /v1/{sfdcInstance.name=projects/*/locations/*/products/*/sfdcInstances/*}
Updates an sfdc instance.
REST Resource: v1.projects.locations.products.sfdcInstances.sfdcChannels
Methods
create
POST /v1/{parent=projects/*/locations/*/products/*/sfdcInstances/*}/sfdcChannels
Creates an sfdc channel record.
delete
DELETE /v1/{name=projects/*/locations/*/products/*/sfdcInstances/*/sfdcChannels/*}
Deletes an sfdc channel.
get
GET /v1/{name=projects/*/locations/*/products/*/sfdcInstances/*/sfdcChannels/*}
Gets an sfdc channel.
list
GET /v1/{parent=projects/*/locations/*/products/*/sfdcInstances/*}/sfdcChannels
Lists all sfdc channels that match the filter.
patch
PATCH /v1/{sfdcChannel.name=projects/*/locations/*/products/*/sfdcInstances/*/sfdcChannels/*}
Updates an sfdc channel.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
