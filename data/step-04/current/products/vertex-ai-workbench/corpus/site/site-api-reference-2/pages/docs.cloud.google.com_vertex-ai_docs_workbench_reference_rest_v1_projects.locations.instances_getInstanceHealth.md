---
title: "Method: projects.locations.instances.getInstanceHealth \_|\_ Vertex AI \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth
  title: "Method: projects.locations.instances.getInstanceHealth \_|\_ Vertex AI \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Reference
Send feedback
Method: projects.locations.instances.getInstanceHealth
Stay organized with collections
Save and categorize content based on your preferences.
Checks whether a notebook instance is healthy.
HTTP request
GET https://notebooks.googleapis.com/v1/{name}:getInstanceHealth
Path parameters
Parameters
name
string
Required. Format: projects/{projectId}/locations/{location}/instances/{instanceId}
Authorization requires the following IAM permission on the specified resource name :
notebooks.instances.getHealth
Request body
The request body must be empty.
Response body
Response for checking if a notebook instance is healthy.
If successful, the response body contains data with the following structure:
JSON representation
{
"healthState" : enum ( HealthState ) ,
"healthInfo" : {
string : string ,
...
}
}
Fields
healthState
enum ( HealthState )
Output only. Runtime healthState.
healthInfo
map (key: string, value: string)
Output only. Additional information about instance health. Example: healthInfo": { "docker_proxy_agent_status": "1", "docker_status": "1", "jupyterlab_api_status": "-1", "jupyterlab_status": "-1", "updated": "2020-10-18 09:40:03.573409" }
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
HealthState
If an instance is healthy or not.
Enums
HEALTH_STATE_UNSPECIFIED
The instance substate is unknown.
HEALTHY
The instance is known to be in an healthy state (for example, critical daemons are running) Applies to ACTIVE state.
UNHEALTHY
The instance is known to be in an unhealthy state (for example, critical daemons are not running) Applies to ACTIVE state.
AGENT_NOT_INSTALLED
The instance has not installed health monitoring agent. Applies to ACTIVE state.
AGENT_NOT_RUNNING
The instance health monitoring agent is not running. Applies to ACTIVE state.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
