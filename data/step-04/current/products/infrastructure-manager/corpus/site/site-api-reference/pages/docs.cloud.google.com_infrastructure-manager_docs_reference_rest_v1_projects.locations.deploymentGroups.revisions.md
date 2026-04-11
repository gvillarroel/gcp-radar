---
title: "REST Resource: projects.locations.deploymentGroups.revisions \_|\_ Infrastructure\
  \ Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/projects.locations.deploymentGroups.revisions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/projects.locations.deploymentGroups.revisions
  title: "REST Resource: projects.locations.deploymentGroups.revisions \_|\_ Infrastructure\
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
REST Resource: projects.locations.deploymentGroups.revisions
Stay organized with collections
Save and categorize content based on your preferences.
Resource: DeploymentGroupRevision
JSON representation
Methods
Resource: DeploymentGroupRevision
A DeploymentGroupRevision represents a snapshot of a DeploymentGroup at a given point in time, created when a DeploymentGroup is provisioned or deprovisioned.
JSON representation
{
"name" : string ,
"snapshot" : {
object ( DeploymentGroup )
} ,
"createTime" : string ,
"alternativeIds" : [
string
]
}
Fields
name
string
Identifier. The name of the deployment group revision. Format: 'projects/{projectId}/locations/{location}/deploymentGroups/{deploymentGroup}/revisions/{revision}'.
snapshot
object ( DeploymentGroup )
Output only. The snapshot of the deployment group at this revision.
createTime
string ( Timestamp format)
Output only. Time when the deployment group revision was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
alternativeIds[]
string
Output only. The alternative IDs of the deployment group revision.
Methods
get
Gets details about a DeploymentGroupRevision .
list
Lists DeploymentGroupRevision s in a given DeploymentGroup .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
