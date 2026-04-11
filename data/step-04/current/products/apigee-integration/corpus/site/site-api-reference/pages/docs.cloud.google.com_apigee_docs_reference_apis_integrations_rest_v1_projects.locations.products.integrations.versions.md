---
title: "REST Resource: projects.locations.products.integrations.versions \_|\_ Apigee\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.versions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.versions
  title: "REST Resource: projects.locations.products.integrations.versions \_|\_ Apigee\
    \ \_|\_ Google Cloud Documentation"
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
REST Resource: projects.locations.products.integrations.versions
Stay organized with collections
Save and categorize content based on your preferences.
Resource: IntegrationVersion
JSON representation
Methods
Resource: IntegrationVersion
The integration version definition.
JSON representation
{
"name" : string ,
"description" : string ,
"taskConfigs" : [
{
object ( TaskConfig )
}
] ,
"triggerConfigs" : [
{
object ( TriggerConfig )
}
] ,
"integrationParameters" : [
{
object ( IntegrationParameter )
}
] ,
"state" : enum ( IntegrationState ) ,
"snapshotNumber" : string ,
"updateTime" : string ,
"lockHolder" : string ,
"createTime" : string ,
"lastModifierEmail" : string ,
"parentTemplateId" : string ,
"userLabel" : string ,
"databasePersistencePolicy" : enum ( DatabasePersistencePolicy )
}
Fields
name
string
Output only. Auto-generated primary key.
description
string
Optional. The integration description.
taskConfigs[]
object ( TaskConfig )
Optional. Task configuration for the integration. It's optional, but the integration doesn't do anything without taskConfigs.
triggerConfigs[]
object ( TriggerConfig )
Optional. Trigger configurations.
integrationParameters[]
object ( IntegrationParameter )
Optional. Parameters that are expected to be passed to the integration when an event is triggered. This consists of all the parameters that are expected in the integration execution. This gives the user the ability to provide default values, add information like PII and also provide data types of each parameter.
state
enum ( IntegrationState )
Output only. User should not set it as an input.
snapshotNumber
string ( int64 format)
Optional. An increasing sequence that is set when a new snapshot is created. The last created snapshot can be identified by [workflowName, org_id latest(snapshotNumber)]. However, last created snapshot need not be same as the HEAD. So users should always use "HEAD" tag to identify the head.
updateTime
string ( Timestamp format)
Output only. Auto-generated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
lockHolder
string
Optional. The edit lock holder's email address. Generated based on the End User Credentials/LOAS role of the user making the call.
createTime
string ( Timestamp format)
Output only. Auto-generated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
lastModifierEmail
string
Optional. The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call.
parentTemplateId
string
Optional. The id of the template which was used to create this integrationVersion.
userLabel
string
Optional. A user-defined label that annotates an integration version. Typically, this is only set when the integration version is created.
databasePersistencePolicy
enum ( DatabasePersistencePolicy )
Optional. Flag to disable database persistence for execution data, including event execution info, execution export info, execution metadata index and execution param index.
Methods
create
Create a integration with a draft version in the specified project.
delete
Soft-deletes the integration.
download
Downloads an integration.
get
Get a integration in the specified project.
list
Returns the list of all integration versions in the specified project.
patch
Update a integration with a draft version in the specified project.
publish
This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state.
takeoverEditLock
Clears the locked_by and locked_at_timestamp in the DRAFT version of this integration.
unpublish
Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it.
upload
Uploads an integration.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
