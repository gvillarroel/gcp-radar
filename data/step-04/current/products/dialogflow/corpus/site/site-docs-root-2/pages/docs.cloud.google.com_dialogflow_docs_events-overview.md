---
title: "Events \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/docs/events-overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/docs
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/docs/events-overview
  title: "Events \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Events
Stay organized with collections
Save and categorize content based on your preferences.
Intents are normally matched when
an end-user expression matches an intent training phrase.
However, you can also trigger intents using events .
Events can be invoked in many ways.
There are two types of events:
Platform events :
These built-in events are provided by platform
integrations .
They are invoked when platform-specific events occur.
For example, the FACEBOOK_LOCATION event is invoked
by the Facebook integration when an end-user accepts or rejects
a request for the end-user's location.
Custom events :
These are events that you define.
You can invoke these events using either
fulfillment
or
the API .
For example, you might set a timed alert during a conversation,
which invokes an event at a certain time.
This event could trigger an intent that alerts the end-user about something.
Configure an intent for events
Events are identified simply by their name.
Platform-specific events have specific names,
but you can name custom events anything.
To configure an intent so that it is triggered
when certain events are invoked:
Go to the Dialogflow ES console .
Select an agent.
Select Intents in the left sidebar menu.
Select an intent.
Expand the Events section.
Enter one or more event names.
To update intent events with the API,
see the Intents type.
Event parameters
When invoked, events may also have parameter data
that you can access in the triggered intent's responses.
For more information, see
Parameter reference for an event parameter .
Previous
arrow_back
Manage contexts
Next
Platform events
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
