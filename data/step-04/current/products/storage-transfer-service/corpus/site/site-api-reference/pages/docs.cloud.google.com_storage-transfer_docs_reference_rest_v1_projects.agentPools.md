---
title: "REST Resource: projects.agentPools \_|\_ Storage Transfer Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools
  title: "REST Resource: projects.agentPools \_|\_ Storage Transfer Service \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Reference
Send feedback
REST Resource: projects.agentPools
Stay organized with collections
Save and categorize content based on your preferences.
Resource: AgentPool
Represents an agent pool.
JSON representation
{
"name" : string ,
"displayName" : string ,
"state" : enum ( State ) ,
"bandwidthLimit" : {
object ( BandwidthLimit )
}
}
Fields
name
string
Required. Specifies a unique string that identifies the agent pool.
Format: projects/{projectId}/agentPools/{agentPoolId}
displayName
string
Specifies the client-specified AgentPool description.
state
enum ( State )
Output only. Specifies the state of the AgentPool.
bandwidthLimit
object ( BandwidthLimit )
Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'.
State
The state of an AgentPool.
Enums
STATE_UNSPECIFIED
Default value. This value is unused.
CREATING
This is an initialization state. During this stage, resources are allocated for the AgentPool.
CREATED
Determines that the AgentPool is created for use. At this state, Agents can join the AgentPool and participate in the transfer jobs in that pool.
DELETING
Determines that the AgentPool deletion has been initiated, and all the resources are scheduled to be cleaned up and freed.
BandwidthLimit
Specifies a bandwidth limit for an agent pool.
JSON representation
{
"limitMbps" : string
}
Fields
limitMbps
string ( int64 format)
Bandwidth rate in megabytes per second, distributed across all the agents in the pool.
Methods
create
Creates an agent pool resource.
delete
Deletes an agent pool.
get
Gets an agent pool.
list
Lists agent pools.
patch
Updates an existing agent pool resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
