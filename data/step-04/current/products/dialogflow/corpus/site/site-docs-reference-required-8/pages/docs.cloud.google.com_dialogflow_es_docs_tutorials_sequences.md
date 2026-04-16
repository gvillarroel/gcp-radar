---
title: "Build a webhook for iterative confirmation of spoken sequences \_|\_ Dialogflow\
  \ ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/es/docs/entities-regexp
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences
  title: "Build a webhook for iterative confirmation of spoken sequences \_|\_ Dialogflow\
    \ ES \_|\_ Google Cloud Documentation"
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
Build a webhook for iterative confirmation of spoken sequences
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial walks through building a flow for collecting long digit and
alphanumeric sequences where the end-user can speak a few characters at a time.
A webhook allows you to validate and confirm the sequence one section at a time,
making it easy for end-users to correct the agent when it mishears "BVP" as "BBV",
for example.
The lessons in the tutorial include:
Using regexp entities with auto speech adaptation.
Building webhooks to loop slot-filling.
Using contexts to carry data between intents.
The final interaction will behave like this:
Participant
Dialog
End-user
Check my order.
Agent
What is your sequence? Please pause after a few characters so I can confirm as we go.
End-user
12ABC
Agent
12ABC. Okay, continue.
End-user
34DE
Agent
12ABC34BE. Okay, continue.
End-user
No that's not right.
Agent
Let's try again. What comes after 12ABC ?
End-user
34DE
Agent
12ABC34DE. Okay, continue.
End-user
That's it.
Finally, the webhook validates the full sequence and proceeeds with the rest of your flow.
Next
Create a sequence recognizer entity
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
