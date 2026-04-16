---
title: "Follow-up intents \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/es/docs/contexts-follow-up-intents
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/es/docs/entities-regexp
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/es/docs/contexts-follow-up-intents
  title: "Follow-up intents \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Follow-up intents
Stay organized with collections
Save and categorize content based on your preferences.
You can use
follow-up intents
to automatically set contexts for pairs of intents.
A follow-up intent is a child of its associated parent intent.
When you create a follow-up intent,
an output context is automatically added to the parent intent
and an input context of the same name is added to the follow-up intent.
A follow-up intent is only matched
when the parent intent is matched in the previous conversational turn.
You can also create multiple levels of nested follow-up intents.
Dialogflow provides many
predefined follow-up intents
for common end-user replies like "yes", "no", or "cancel".
You can also create your own follow-up intents to handle custom replies.
For example, a hair stylist agent might have the following nested intents.
Intent name
Training phrase
Input context
Output context
Intent response
Appointment
Hello
appointment-followup
Would you like to make an appointment?
⤷ Appointment - yes
Yes
appointment-followup
appointment-yes-followup
Would you like a haircut?
⤷ Haircut - yes
Yes
appointment-yes-followup
Your appointment is set.
⤷ Haircut - no
No
appointment-yes-followup
Goodbye.
⤷ Appointment - no
No
appointment-followup
Goodbye.
Where to find this data
When building an agent,
it is most common to use the
Dialogflow ES console ( visit documentation , open console ).
The instructions below focus on using the console.
To access intent data:
Go to the Dialogflow ES console .
Select an agent.
Select Intents in the left sidebar menu.
If you are building an agent using the API instead of the console, see the
Intents reference .
The API field names are similar to the console field names.
Create a follow-up intent
To create a follow-up intent:
From the intent list,
hover your mouse pointer over the desired parent intent.
Click Add follow-up intent .
Select one of the predefined follow-up intents, or choose custom .
The predefined follow-up intents already include
training phrases for expected end-user replies.
Previous
arrow_back
Input and output contexts
Next
Manage contexts
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
