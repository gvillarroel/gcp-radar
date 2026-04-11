---
title: "FlowValidationResult \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/FlowValidationResult
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/FlowValidationResult
  title: "FlowValidationResult \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
FlowValidationResult
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
ValidationMessage
JSON representation
ResourceType
ResourceName
JSON representation
Severity
The response message for Flows.GetFlowValidationResult .
JSON representation
{
"name" : string ,
"validationMessages" : [
{
object ( ValidationMessage )
}
] ,
"updateTime" : string
}
Fields
name
string
The unique identifier of the flow validation result. Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/flows/<FlowID>/validationResult .
validationMessages[]
object ( ValidationMessage )
Contains all validation messages.
updateTime
string ( Timestamp format)
Last time the flow was validated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
ValidationMessage
Agent/flow validation message.
JSON representation
{
"resourceType" : enum ( ResourceType ) ,
"resources" : [
string
] ,
"resourceNames" : [
{
object ( ResourceName )
}
] ,
"severity" : enum ( Severity ) ,
"detail" : string
}
Fields
resourceType
enum ( ResourceType )
The type of the resources where the message is found.
resources[] (deprecated)
string
This item is deprecated!
The names of the resources where the message is found.
resourceNames[]
object ( ResourceName )
The resource names of the resources where the message is found.
severity
enum ( Severity )
Indicates the severity of the message.
detail
string
The message detail.
ResourceType
Resource types.
Enums
RESOURCE_TYPE_UNSPECIFIED
Unspecified.
AGENT
Agent.
INTENT
Intent.
INTENT_TRAINING_PHRASE
Intent training phrase.
INTENT_PARAMETER
Intent parameter.
INTENTS
Multiple intents.
INTENT_TRAINING_PHRASES
Multiple training phrases.
ENTITY_TYPE
Entity type.
ENTITY_TYPES
Multiple entity types.
WEBHOOK
Webhook.
FLOW
Flow.
PAGE
Page.
PAGES
Multiple pages.
TRANSITION_ROUTE_GROUP
Transition route group.
AGENT_TRANSITION_ROUTE_GROUP
Agent transition route group.
ResourceName
Resource name and display name.
JSON representation
{
"name" : string ,
"displayName" : string
}
Fields
name
string
Name.
displayName
string
Display name.
Severity
Severity level.
Enums
SEVERITY_UNSPECIFIED
Unspecified.
INFO
The agent doesn't follow Dialogflow best practices.
WARNING
The agent may not behave as expected.
ERROR
The agent may experience failures.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-21 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-21 UTC."],[],[]]
