---
title: "REST Resource: projects.locations.deploymentGroups \_|\_ Infrastructure Manager\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/projects.locations.deploymentGroups
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/projects.locations.deploymentGroups
  title: "REST Resource: projects.locations.deploymentGroups \_|\_ Infrastructure\
    \ Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Infrastructure Manager
Reference
Send feedback
REST Resource: projects.locations.deploymentGroups
Stay organized with collections
Save and categorize content based on your preferences.
Resource: DeploymentGroup
JSON representation
State
DeploymentUnit
JSON representation
ProvisioningState
Methods
Resource: DeploymentGroup
A DeploymentGroup is a collection of DeploymentUnits that in a DAG-like structure.
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"annotations" : {
string : string ,
...
} ,
"state" : enum ( State ) ,
"stateDescription" : string ,
"deploymentUnits" : [
{
object ( DeploymentUnit )
}
] ,
"provisioningState" : enum ( ProvisioningState ) ,
"provisioningStateDescription" : string ,
"provisioningError" : {
object ( Status )
}
}
Fields
name
string
Identifier. The name of the deployment group. Format: 'projects/{projectId}/locations/{location}/deploymentGroups/{deploymentGroup}'.
createTime
string ( Timestamp format)
Output only. Time when the deployment group was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. Time when the deployment group was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Optional. User-defined metadata for the deployment group.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
annotations
map (key: string, value: string)
Optional. Arbitrary key-value metadata storage e.g. to help client tools identify deployment group during automation. See https://google.aip.dev/148#annotations for details on format and size limitations.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
state
enum ( State )
Output only. Current state of the deployment group.
stateDescription
string
Output only. Additional information regarding the current state.
deploymentUnits[]
object ( DeploymentUnit )
The deployment units of the deployment group in a DAG like structure. When a deployment group is being provisioned, the deployment units are deployed in a DAG order. The provided units must be in a DAG order, otherwise an error will be returned.
provisioningState
enum ( ProvisioningState )
Output only. The provisioning state of the deployment group.
provisioningStateDescription
string
Output only. Additional information regarding the current provisioning state.
provisioningError
object ( Status )
Output only. The error status of the deployment group provisioning or deprovisioning.
State
Possible states of a deployment group.
Enums
STATE_UNSPECIFIED
The default value. This value is used if the state is omitted.
CREATING
The deployment group is being created.
ACTIVE
The deployment group is healthy.
UPDATING
The deployment group is being updated.
DELETING
The deployment group is being deleted.
FAILED
The deployment group has encountered an unexpected error.
SUSPENDED
The deployment group is no longer being actively reconciled. This may be the result of recovering the project after deletion.
DELETED
The deployment group has been deleted.
DeploymentUnit
A DeploymentUnit is a container for a deployment and its dependencies. An existing deployment can be provided directly in the unit, or the unit can act as a placeholder to define the DAG, with the deployment specs supplied in a provisionDeploymentRequest .
JSON representation
{
"id" : string ,
"dependencies" : [
string
] ,
"deployment" : string
}
Fields
id
string
The id of the deployment unit. Must be unique within the deployment group.
dependencies[]
string
Required. The IDs of the deployment units within the deployment group that this unit depends on.
deployment
string
Optional. The name of the deployment to be provisioned. Format: 'projects/{projectId}/locations/{location}/deployments/{deployment}'.
ProvisioningState
Possible provisioning states of a deployment group.
Enums
PROVISIONING_STATE_UNSPECIFIED
Unspecified provisioning state.
PROVISIONING
The deployment group is being provisioned.
PROVISIONED
The deployment group is provisioned.
FAILED_TO_PROVISION
The deployment group failed to be provisioned.
DEPROVISIONING
The deployment group is being deprovisioned.
DEPROVISIONED
The deployment group is deprovisioned.
FAILED_TO_DEPROVISION
The deployment group failed to be deprovisioned.
Methods
create
Creates a DeploymentGroup The newly created DeploymentGroup will be in the CREATING state and can be retrieved via Get and List calls.
delete
Deletes a DeploymentGroup
deprovision
Deprovisions a deployment group.
get
Get a DeploymentGroup for a given project and location.
list
List DeploymentGroups for a given project and location.
patch
Updates a DeploymentGroup
provision
Provisions a deployment group.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
