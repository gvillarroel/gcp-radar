---
title: "KnowledgeConnectorSettings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/KnowledgeConnectorSettings
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/KnowledgeConnectorSettings
  title: "KnowledgeConnectorSettings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
KnowledgeConnectorSettings
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The Knowledge Connector settings for this page or flow. This includes information such as the attached Knowledge Bases, and the way to execute fulfillment.
JSON representation
{
"enabled" : boolean ,
"triggerFulfillment" : {
object ( Fulfillment )
} ,
"dataStoreConnections" : [
{
object ( DataStoreConnection )
}
] ,
// Union field target can be only one of the following:
"targetPage" : string ,
"targetFlow" : string
// End of list of possible types for union field target .
}
Fields
enabled
boolean
Whether Knowledge Connector is enabled or not.
triggerFulfillment
object ( Fulfillment )
The fulfillment to be triggered.
When the answers from the Knowledge Connector are selected by Dialogflow, you can utitlize the request scoped parameter $request.knowledge.answers (contains up to the 5 highest confidence answers) and $request.knowledge.questions (contains the corresponding questions) to construct the fulfillment.
dataStoreConnections[]
object ( DataStoreConnection )
Optional. List of related data store connections.
Union field target . The target to transition to, either a page in the same host flow (the flow that owns this KnowledgeConnectorSettings ), or another flow in the same agent. target can be only one of the following:
targetPage
string
The target page to transition to. Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/flows/<FlowID>/pages/<PageID> .
targetFlow
string
The target flow to transition to. Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/flows/<FlowID> .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
