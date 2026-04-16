---
title: "Platform events \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/docs/events-platform
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/docs/events-platform
  title: "Platform events \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Platform events
Stay organized with collections
Save and categorize content based on your preferences.
Platform events are provided by platform
integrations .
They are invoked when platform-specific events occur.
See the documentation for your integration platform
for details on platform-specific events.
Welcome events
Welcome events are invoked when a conversation is started.
There are two types of welcome events:
Generic welcome event :
The default welcome intent
is automatically created when you create an agent.
This intent is preconfigured to handle the generic welcome event:
WELCOME .
Platform-specific welcome events :
Each platform invokes a platform-specific welcome event
when a conversation starts.
For example, if an end-user clicks the Get started button
to start a chat with your Facebook Messenger bot, the
FACEBOOK_WELCOME event
is invoked.
When a platform-specific welcome event is invoked,
Dialogflow triggers any intent that is configured for the event.
If no intent is configured for the platform-specific welcome event,
Dialogflow invokes the generic welcome event,
which triggers the default welcome intent.
Google Assistant events
Dialogflow events are referred to as "intents" in Google Assistant documentation.
For more information and a list of events, see the
reference documentation for Google Assistant intents .
Previous
arrow_back
Events
Next
Custom events
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
