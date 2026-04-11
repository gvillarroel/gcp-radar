---
title: "Manage contexts \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/es/docs/contexts-manage
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/es/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/es/docs/contexts-manage
  title: "Manage contexts \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Dialogflow
Dialogflow ES
Send feedback
Manage contexts
Stay organized with collections
Save and categorize content based on your preferences.
In most cases, you configure contexts at design-time
(when you are building an agent). For example, when you have a training phrase like:
"I would like to add pizza to my shopping cart."
In some advanced scenarios,
you may also want to write code that gets and sets some contexts at runtime
(during a live conversation). An example could be, you detected a device location
and you have added it to the context, so you can refer to the location at a later moment.
This document describes how to get and set contexts
at design-time and runtime by using the
Dialogflow Console ,
the API ,
or fulfillment .
Context naming
The following rules apply to naming contexts:
Rule
Examples
Use alphanumeric names.
mycontext1
Use - or _ instead of spaces.
my-context-1
Names are not case sensitive.
Abc123 and abc123 are considered equivalent.
All context names are lowercase when using the API.
abc123
Set contexts at design-time
Console
Go to the Dialogflow ES console .
Select an agent.
Select Intents in the left sidebar menu.
Expand the Contexts section of the intent data.
Click the Add output context or Add input context field in intent data.
Enter a name for the context and press Return .
For output contexts, optionally click the lifespan circle and change the lifespan.
Add more contexts as needed.
Click Save .
API
See the
Intents reference .
Set contexts at runtime
Fulfillment
When your webhook service sends a
WebhookResponse ,
set the outputContexts field to desired active contexts.
API
The request for a
Sessions
type detectIntent call contains a queryParameters.contexts field,
which is used to set active contexts.
The following is a REST JSON example of a detectIntent request:
POST https://dialogflow.googleapis.com/v2/{session=projects/*/agent/sessions/*}:detectIntent
{
"queryInput": {
"text": {
"languageCode": "en-US",
"text": "I would like to add pizza to my shopping cart."
}
},
"queryParams": {
"contexts": [{
"name": "projects/ project-id /agent/sessions/ session-id /contexts/product-chosen",
"lifespanCount": 5,
"parameters": {
"product": "Pizza",
"device-location" "@52.3377871,4.8698096,17z"
}
}]
}
}
At any time,
you can also call the create, delete, and update methods on the
Contexts
type.
Get contexts at runtime
Fulfillment
When your webhook service receives a
WebhookRequest ,
the queryResult.outputContexts field contains the active contexts.
API
The response to a
Sessions
type detectIntent call contains a
queryResult.outputContexts field,
which provides the list of active contexts.
The following is a REST JSON example of a detectIntent response:
{
"responseId": " response-id ",
"queryResult": {
"queryText": "I would like to add pizza to my shopping cart.",
"parameters": {
"product": "pizza"
},
"allRequiredParamsPresent": true,
"fulfillmentText": "The product has been added.",
"fulfillmentMessages": [
{
"text": {
"text": [
"The product has been added."
]
}
}
],
"outputContexts": [
{
"name": "projects/ project-id /agent/sessions/ session-id /contexts/product-chosen",
"lifespanCount": 5,
"parameters": {
"product": "Pizza",
"device-location" "@52.3377871,4.8698096,17z"
}
}
],
"intent": {
"name": "projects/ project-id /agent/intents/ intent-id ",
"displayName": "buy-product"
},
"intentDetectionConfidence": 0.8057143,
"languageCode": "en",
}
}
At any time,
you can also call the get and list methods on the
Contexts
type.
Previous
arrow_back
Follow-up intents
Next
Events
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
