---
title: "Fulfillment \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/docs/fulfillment-overview
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/docs/fulfillment-overview
  title: "Fulfillment \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Fulfillment
Stay organized with collections
Save and categorize content based on your preferences.
By default, your agent responds to a matched intent
with a static response.
If you're using one of the
integration
options, you can provide a more dynamic response by using
fulfillment .
When you enable fulfillment for an intent,
Dialogflow responds to that intent
by calling a service that you define.
For example, if an end-user wants to schedule a haircut on Friday,
your service can check your database and respond to the end-user
with availability information for Friday.
Each
intent
has a setting to enable fulfillment.
If an intent requires some action by your system or a dynamic response,
you should enable fulfillment for the intent.
If an intent without fulfillment enabled is matched,
Dialogflow uses the static response you defined for the intent.
When an intent with fulfillment enabled is matched,
Dialogflow sends a request to your webhook service with information about the matched intent.
Your system can perform any required actions and respond to
Dialogflow with information for how to proceed.
When fulfillment is enabled, the static response you defined for the intent
is only used if your
webhook service fails .
The following diagram shows the processing flow for fulfillment.
The end-user types or speaks an expression.
Dialogflow matches the end-user expression to an intent and extracts parameters.
Dialogflow sends a
webhook request
message to your webhook service.
This message contains information about the matched intent, the action, the parameters,
and the response defined for the intent.
Your service performs actions as needed, like database queries or external API calls.
Your service sends a
webhook response
message to Dialogflow.
This message contains the response that should be sent to the end-user.
Dialogflow sends the response to the end-user.
The end-user sees or hears the response.
Previous
arrow_back
Custom events
Next
Inline editor
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
