---
title: "Application Integration API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/reference/rest/v2
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/reference/rest/v2
  title: "Application Integration API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Integration
Reference
Send feedback
Application Integration API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v2.projects.locations.integrations
REST Resource: v2.projects.locations.integrations.executions
REST Resource: v2.projects.locations.integrations.executions.taskExecutions
REST Resource: v1.projects.locations.authConfigs
REST Resource: v1.projects.locations.certificates
REST Resource: v1.projects.locations.clients
REST Resource: v1.projects.locations.integrations
REST Resource: v1.projects.locations.integrations.executions
REST Resource: v1.projects.locations.integrations.executions.suspensions
REST Resource: v1.projects.locations.integrations.versions
REST Resource: v1.projects.locations.integrations.versions.testCases
REST Resource: v1.projects.locations.sfdcInstances
REST Resource: v1.projects.locations.sfdcInstances.sfdcChannels
REST Resource: v1.projects.locations.templates
Service: integrations.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://integrations.googleapis.com/$discovery/rest?version=v2
https://integrations.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://integrations.googleapis.com
REST Resource: v2.projects.locations.integrations
Methods
execute
POST /v2/{parent=projects/*/locations/*/integrations/*}:execute
Executes integrations synchronously.
schedule
POST /v2/{parent=projects/*/locations/*/integrations/*}:schedule
Schedules an integration for execution.
REST Resource: v2.projects.locations.integrations.executions
Methods
list
GET /v2/{parent=projects/*/locations/*/integrations/*}/executions
Lists the results of all the integration executions.
troubleshoot
GET /v2/{name=projects/*/locations/*/integrations/*/executions/*}:troubleshoot
View detailed explanation of why an integration execution failed, using LLM
REST Resource: v2.projects.locations.integrations.executions.taskExecutions
Methods
get
GET /v2/{name=projects/*/locations/*/integrations/*/executions/*/taskExecutions/*}
Get a TaskExecution in the specified project.
REST Resource: v1.projects.locations
Methods
generateOpenApiSpec
POST /v1/{name=projects/*/locations/*}:generateOpenApiSpec
Generate OpenAPI spec for the requested integrations and api triggers
REST Resource: v1.projects.locations.authConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*}/authConfigs
Creates an auth config record.
delete
DELETE /v1/{name=projects/*/locations/*/authConfigs/*}
Deletes an auth config.
get
GET /v1/{name=projects/*/locations/*/authConfigs/*}
Gets a complete auth config.
list
GET /v1/{parent=projects/*/locations/*}/authConfigs
Lists all auth configs that match the filter.
patch
PATCH /v1/{authConfig.name=projects/*/locations/*/authConfigs/*}
Updates an auth config.
REST Resource: v1.projects.locations.certificates
Methods
create
POST /v1/{parent=projects/*/locations/*}/certificates
Creates a new certificate.
delete
DELETE /v1/{name=projects/*/locations/*/certificates/*}
Delete a certificate
get
GET /v1/{name=projects/*/locations/*/certificates/*}
Get a certificates in the specified project.
list
GET /v1/{parent=projects/*/locations/*}/certificates
List all the certificates that match the filter.
patch
PATCH /v1/{certificate.name=projects/*/locations/*/certificates/*}
Updates the certificate by id.
REST Resource: v1.projects.locations.clients
Methods
changeConfig
POST /v1/{parent=projects/*/locations/*}/clients:changeConfig
Updates the client customer configuration for the given project and location resource name
provision
POST /v1/{parent=projects/*/locations/*}/clients:provision
Perform the provisioning steps to enable a user GCP project to use IP.
provisionClientPostProcessor
POST /v1/{parent=projects/*/locations/*}/clients:provisionClientPostProcessor
Perform post provisioning steps after client is provisioned.
switchVariableMasking
POST /v1/{parent=projects/*/locations/*}/clients:switchVariableMasking
Update variable masking for provisioned client
toggleHttp
POST /v1/{parent=projects/*/locations/*}/clients:toggleHttp
Enable/Disable http call for provisioned client
REST Resource: v1.projects.locations.integrations
Methods
execute
POST /v1/{name=projects/*/locations/*/integrations/*}:execute
Executes integrations synchronously by passing the trigger id in the request body.
list
GET /v1/{parent=projects/*/locations/*}/integrations
Returns the list of all integrations in the specified project.
schedule
POST /v1/{name=projects/*/locations/*/integrations/*}:schedule
Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
search
GET /v1/{parent=projects/*/locations/*}/integrations:search
Searches and returns the list of integrations in the specified project.
test
POST /v1/{integrationVersion.name=projects/*/locations/*/integrations/*}:test
Execute the integration in draft state
REST Resource: v1.projects.locations.integrations.executions
Methods
cancel
POST /v1/{name=projects/*/locations/*/integrations/*/executions/*}:cancel
Cancellation of an execution and associated sub-executions.
list
GET /v1/{parent=projects/*/locations/*/integrations/*}/executions
Lists the results of all the integration executions.
replay
POST /v1/{name=projects/*/locations/*/integrations/*/executions/*}:replay
Re-execute an existing execution, with same request parameters and execution strategy.
REST Resource: v1.projects.locations.integrations.executions.suspensions
Methods
lift
POST /v1/{name=projects/*/locations/*/integrations/*/executions/*/suspensions/*}:lift
* Lifts suspension for the Suspension task.
list
GET /v1/{parent=projects/*/locations/*/integrations/*/executions/*}/suspensions
* Lists suspensions associated with a specific execution.
resolve
POST /v1/{name=projects/*/locations/*/integrations/*/executions/*/suspensions/*}:resolve
* Resolves (lifts/rejects) any number of suspensions.
REST Resource: v1.projects.locations.integrations.versions
Methods
create
POST /v1/{parent=projects/*/locations/*/integrations/*}/versions
Create a integration with a draft version in the specified project.
delete
DELETE /v1/{name=projects/*/locations/*/integrations/*/versions/*}
Soft-deletes the integration.
download
GET /v1/{name=projects/*/locations/*/integrations/*/versions/*}:download
Downloads an integration.
downloadJsonPackage
GET /v1/{name=projects/*/locations/*/integrations/*/versions/*}:downloadJsonPackage
Downloads an Integration version package like IntegrationVersion,Integration Config etc.
get
GET /v1/{name=projects/*/locations/*/integrations/*/versions/*}
Get a integration in the specified project.
list
GET /v1/{parent=projects/*/locations/*/integrations/*}/versions
Returns the list of all integration versions in the specified project.
patch
PATCH /v1/{integrationVersion.name=projects/*/locations/*/integrations/*/versions/*}
Update a integration with a draft version in the specified project.
publish
POST /v1/{name=projects/*/locations/*/integrations/*/versions/*}:publish
This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state.
unpublish
POST /v1/{name=projects/*/locations/*/integrations/*/versions/*}:unpublish
Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it.
upload
POST /v1/{parent=projects/*/locations/*/integrations/*}/versions:upload
Uploads an integration.
REST Resource: v1.projects.locations.integrations.versions.testCases
Methods
create
POST /v1/{parent=projects/*/locations/*/integrations/*/versions/*}/testCases
Creates a new test case
delete
DELETE /v1/{name=projects/*/locations/*/integrations/*/versions/*/testCases/*}
Deletes a test case
download
GET /v1/{name=projects/*/locations/*/integrations/*/versions/*/testCases/*}:download
Downloads a test case.
execute
POST /v1/{parent=projects/*/locations/*/integrations/*/versions/*}/testCases:execute
Executes all test cases in an integration version.
executeTest
POST /v1/{testCaseName=projects/*/locations/*/integrations/*/versions/*/testCases/*}:executeTest
Executes functional test
get
GET /v1/{name=projects/*/locations/*/integrations/*/versions/*/testCases/*}
Get a test case
list
GET /v1/{parent=projects/*/locations/*/integrations/*/versions/*}/testCases
Lists all the test cases that satisfy the filters.
patch
PATCH /v1/{testCase.name=projects/*/locations/*/integrations/*/versions/*/testCases/*}
Updates a test case
takeoverEditLock
POST /v1/{name=projects/*/locations/*/integrations/*/versions/*/testCases/*}:takeoverEditLock
Clear the lock fields and assign them to current user
upload
POST /v1/{parent=projects/*/locations/*/integrations/*/versions/*}/testCases:upload
Uploads a test case.
REST Resource: v1.projects.locations.sfdcInstances
Methods
create
POST /v1/{parent=projects/*/locations/*}/sfdcInstances
Creates an sfdc instance record.
delete
DELETE /v1/{name=projects/*/locations/*/sfdcInstances/*}
Deletes an sfdc instance.
get
GET /v1/{name=projects/*/locations/*/sfdcInstances/*}
Gets an sfdc instance.
list
GET /v1/{parent=projects/*/locations/*}/sfdcInstances
Lists all sfdc instances that match the filter.
patch
PATCH /v1/{sfdcInstance.name=projects/*/locations/*/sfdcInstances/*}
Updates an sfdc instance.
REST Resource: v1.projects.locations.sfdcInstances.sfdcChannels
Methods
create
POST /v1/{parent=projects/*/locations/*/sfdcInstances/*}/sfdcChannels
Creates an sfdc channel record.
delete
DELETE /v1/{name=projects/*/locations/*/sfdcInstances/*/sfdcChannels/*}
Deletes an sfdc channel.
get
GET /v1/{name=projects/*/locations/*/sfdcInstances/*/sfdcChannels/*}
Gets an sfdc channel.
list
GET /v1/{parent=projects/*/locations/*/sfdcInstances/*}/sfdcChannels
Lists all sfdc channels that match the filter.
patch
PATCH /v1/{sfdcChannel.name=projects/*/locations/*/sfdcInstances/*/sfdcChannels/*}
Updates an sfdc channel.
REST Resource: v1.projects.locations.templates
Methods
create
POST /v1/{parent=projects/*/locations/*}/templates
Creates a new template
delete
DELETE /v1/{name=projects/*/locations/*/templates/*}
Deletes a template
download
GET /v1/{name=projects/*/locations/*/templates/*}:download
Downloads a template.
get
GET /v1/{name=projects/*/locations/*/templates/*}
Get a template in the specified project.
import
POST /v1/{name=projects/*/locations/*/templates/*}:import
Import the template to an existing integration.
list
GET /v1/{parent=projects/*/locations/*}/templates
Lists all templates matching the filter.
patch
PATCH /v1/{template.name=projects/*/locations/*/templates/*}
Updates the template by given id.
search
GET /v1/{parent=projects/*/locations/*}/templates:search
Search templates based on user query and filters.
share
POST /v1/{name=projects/*/locations/*/templates/*}:share
Share a template with other clients.
unshare
POST /v1/{name=projects/*/locations/*/templates/*}:unshare
Unshare a template from given clients.
upload
POST /v1/{parent=projects/*/locations/*}/templates:upload
Uploads a template.
use
POST /v1/{name=projects/*/locations/*/templates/*}:use
Use the template to create integration.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-22 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-22 UTC."],[],[]]
