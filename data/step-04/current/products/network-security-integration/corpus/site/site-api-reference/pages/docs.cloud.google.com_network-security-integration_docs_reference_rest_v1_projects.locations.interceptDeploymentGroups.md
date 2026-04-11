---
title: "REST Resource: projects.locations.interceptDeploymentGroups \_|\_ Network\
  \ Security Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-security-integration/docs/reference/rest/v1/projects.locations.interceptDeploymentGroups
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-security-integration/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/network-security-integration/docs/reference/rest/v1/projects.locations.interceptDeploymentGroups
  title: "REST Resource: projects.locations.interceptDeploymentGroups \_|\_ Network\
    \ Security Integration \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Network Security Integration
Reference
Send feedback
REST Resource: projects.locations.interceptDeploymentGroups
Stay organized with collections
Save and categorize content based on your preferences.
Resource: InterceptDeploymentGroup
A deployment group aggregates many zonal intercept backends (deployments) into a single global intercept service. Consumers can connect this service using an endpoint group.
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"network" : string ,
"connectedEndpointGroups" : [
{
object ( ConnectedEndpointGroup )
}
] ,
"nestedDeployments" : [
{
object ( Deployment )
}
] ,
"state" : enum ( State ) ,
"reconciling" : boolean ,
"description" : string ,
"locations" : [
{
object ( InterceptLocation )
}
]
}
Fields
name
string
Immutable. Identifier. The resource name of this deployment group, for example: projects/123456789/locations/global/interceptDeploymentGroups/my-dg . See https://google.aip.dev/122 for more details.
createTime
string ( Timestamp format)
Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Optional. Labels are key/value pairs that help to organize and filter resources.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
network
string
Required. Immutable. The network that will be used for all child deployments, for example: projects/{project}/global/networks/{network} . See https://google.aip.dev/124 .
connectedEndpointGroups[]
object ( ConnectedEndpointGroup )
Output only. The list of endpoint groups that are connected to this resource.
nestedDeployments[] (deprecated)
object ( Deployment )
This item is deprecated!
Output only. The list of Intercept Deployments that belong to this group.
state
enum ( State )
Output only. The current state of the deployment group. See https://google.aip.dev/216 .
reconciling
boolean
Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This is part of the normal operation (e.g. adding a new deployment to the group) See https://google.aip.dev/128 .
description
string
Optional. User-provided description of the deployment group. Used as additional context for the deployment group.
locations[]
object ( InterceptLocation )
Output only. The list of locations where the deployment group is present.
ConnectedEndpointGroup
An endpoint group connected to this deployment group.
JSON representation
{
"name" : string
}
Fields
name
string
Output only. The connected endpoint group's resource name, for example: projects/123456789/locations/global/interceptEndpointGroups/my-eg . See https://google.aip.dev/124 .
Deployment
A deployment belonging to this deployment group.
JSON representation
{
"name" : string ,
"state" : enum ( State )
}
Fields
name
string
Output only. The name of the Intercept Deployment, in the format: projects/{project}/locations/{location}/interceptDeployments/{interceptDeployment} .
state
enum ( State )
Output only. Most recent known state of the deployment.
State
The current state of the deployment group.
Enums
STATE_UNSPECIFIED
State not set (this is not a valid state).
ACTIVE
The deployment group is ready.
CREATING
The deployment group is being created.
DELETING
The deployment group is being deleted.
Methods
create
Creates a deployment group in a given project and location.
delete
Deletes a deployment group.
get
Gets a specific deployment group.
list
Lists deployment groups in a given project and location.
patch
Updates a deployment group.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-23 UTC."],[],[]]
