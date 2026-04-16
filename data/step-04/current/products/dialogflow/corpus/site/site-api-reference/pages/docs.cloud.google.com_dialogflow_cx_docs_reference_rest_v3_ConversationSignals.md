---
title: "ConversationSignals \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationSignals
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationSignals
  title: "ConversationSignals \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
ConversationSignals
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
TurnSignals
JSON representation
This message is used to hold all the Conversation Signals data, which will be converted to JSON and exported to BigQuery.
JSON representation
{
"turnSignals" : {
object ( TurnSignals )
}
}
Fields
turnSignals
object ( TurnSignals )
Required. Turn signals for the current turn.
TurnSignals
Collection of all signals that were extracted for a single turn of the conversation.
JSON representation
{
"noMatch" : boolean ,
"noUserInput" : boolean ,
"dtmfUsed" : boolean ,
"userEscalated" : boolean ,
"agentEscalated" : boolean ,
"reachedEndPage" : boolean ,
"webhookStatuses" : [
string
] ,
"failureReasons" : [
enum ( FailureReason )
] ,
"sentimentScore" : number ,
"sentimentMagnitude" : number
}
Fields
noMatch
boolean
Whether NLU predicted NO_MATCH.
noUserInput
boolean
Whether user provided no input.
dtmfUsed
boolean
Whether user was using DTMF input.
userEscalated
boolean
Whether user was specifically asking for a live agent.
agentEscalated
boolean
Whether agent responded with LiveAgentHandoff fulfillment.
reachedEndPage
boolean
Whether turn resulted in End Session page.
webhookStatuses[]
string
Human-readable statuses of the webhooks triggered during this turn.
failureReasons[]
enum ( FailureReason )
Failure reasons of the turn.
sentimentScore
number
Sentiment score of the user utterance if sentiment was enabled.
sentimentMagnitude
number
Sentiment magnitude of the user utterance if sentiment was enabled.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
