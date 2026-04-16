---
title: "ExportAgentResponse \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ExportAgentResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ExportAgentResponse
  title: "ExportAgentResponse \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Reference
Send feedback
ExportAgentResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The response message for Agents.ExportAgent .
JSON representation
{
// Union field agent can be only one of the following:
"agentUri" : string ,
"agentContent" : string ,
"commitSha" : string
// End of list of possible types for union field agent .
}
Fields
Union field agent . The exported agent. agent can be only one of the following:
agentUri
string
The URI to a file containing the exported agent. This field is populated if agentUri is specified in ExportAgentRequest .
agentContent
string ( bytes format)
Uncompressed raw byte content for agent. This field is populated if none of agentUri and gitDestination are specified in ExportAgentRequest .
A base64-encoded string.
commitSha
string
Commit SHA of the git push. This field is populated if gitDestination is specified in ExportAgentRequest .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
