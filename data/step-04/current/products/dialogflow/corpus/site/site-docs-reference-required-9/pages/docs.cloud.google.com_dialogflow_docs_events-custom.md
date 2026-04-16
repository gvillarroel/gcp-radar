---
title: "Custom events \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/docs/events-custom
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/docs/events-custom
  title: "Custom events \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Custom events
Stay organized with collections
Save and categorize content based on your preferences.
Custom events are events that you define.
They are used to handle things that happen
outside the conversation with the end-user.
For example,
the end-user clicked a button,
a certain amount of time has passed,
available inventory has changed during the conversation,
and so on.
You can invoke these events using either
fulfillment
or
the API .
Invoke events with the API
The request for a
Sessions
type detectIntent call contains a queryInput.event field,
which is used to invoke events.
The type of this field is a EventInput ,
and it contains fields for the event name,
optional parameters ,
and the language code.
When you provide an event to a detect intent call,
you do not provide other data, like an end-user expression.
The call's sole purpose is to invoke an event and trigger an intent.
Invoke events with fulfillment
You can invoke events via
fulfillment
by setting the followupEventInput field of the
WebhookResponse .
You can optionally set the followupEventInput.parameters field to provide
parameters
to the intent.
For example:
{
"followupEventInput": {
"name": "event-name",
"parameters": {
"parameter-name-1": "parameter-value-1",
"parameter-name-2": "parameter-value-2"
},
"languageCode": "en-US"
}
}
When the followupEventInput parameter is set for a WebhookResponse ,
Dialogflow ignores the fulfillmentText , fulfillmentMessages ,
and payload fields.
In addition, the followupEventInput.languageCode field is a required field,
but Dialogflow ignores this field,
because the language was already defined
in the originating detect intent request.
When Dialogflow receives a webhook response that includes an event,
it immediately triggers the corresponding intent in which it was
defined .
The following flow describes the steps:
The end-user types or speaks an expression.
Dialogflow matches the end-user expression to Intent-1 ,
which is configured for fulfillment.
Dialogflow sends a webhook request to your server.
Your server responds with a webhook response that includes a followup event.
Instead of responding to the user for the Intent-1 match,
Dialogflow triggers Intent-2 ,
which is configured for the event.
Dialogflow proceeds as though the end-user initiated the match for Intent-2
and handles required parameters and fulfillment
as dictated by the configuration of Intent-2 .
Chaining intent matches with webhook response events
It is possible to chain intent matches with webhook response events.
In the flow described above,
Intent-2 could also be configured for fulfillment.
If your server's webhook response supplies another event,
Dialogflow proceeds to match Intent-3 (configured for the event)
without responding to the end-user for Intent-2 .
Dialogflow does not respond to the end-user until the chain has ended.
When chaining intents in such a way,
each webhook response must be sent within
timeout restrictions .
Note: You can chain at most 3 intent matches in this way.
Previous
arrow_back
Platform events
Next
Fulfillment
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
