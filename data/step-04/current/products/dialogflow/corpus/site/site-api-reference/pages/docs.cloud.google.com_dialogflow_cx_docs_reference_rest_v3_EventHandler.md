---
title: "EventHandler \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/EventHandler
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/EventHandler
  title: "EventHandler \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
EventHandler
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order:
If there is a triggerFulfillment associated with the event, it will be called.
If there is a targetPage associated with the event, the session will transition into the specified page.
If there is a targetFlow associated with the event, the session will transition into the specified flow.
JSON representation
{
"name" : string ,
"event" : string ,
"triggerFulfillment" : {
object ( Fulfillment )
} ,
// Union field target can be only one of the following:
"targetPage" : string ,
"targetFlow" : string ,
"targetPlaybook" : string
// End of list of possible types for union field target .
}
Fields
name
string
Output only. The unique identifier of this event handler.
event
string
Required. The name of the event to handle.
triggerFulfillment
object ( Fulfillment )
The fulfillment to call when the event occurs. Handling webhook errors with a fulfillment enabled with webhook could cause infinite loop. It is invalid to specify such fulfillment for a handler handling webhooks.
Union field target . The target to transition to, either a page in the same host flow (the flow that owns this TransitionRoute ), or another flow in the same agent. target can be only one of the following:
targetPage
string
The target page to transition to. Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/flows/<FlowID>/pages/<PageID> .
targetFlow
string
The target flow to transition to. Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/flows/<FlowID> .
targetPlaybook
string
The target playbook to transition to. Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/playbooks/<PlaybookID> .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
