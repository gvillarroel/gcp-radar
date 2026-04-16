---
title: "Contexts \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/docs/contexts-overview
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/docs/contexts-overview
  title: "Contexts \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Contexts
Stay organized with collections
Save and categorize content based on your preferences.
Dialogflow
contexts
are similar to natural language context.
If a person says to you "they are orange",
you need context in order to understand what "they" is referring to.
Similarly, for Dialogflow to handle an end-user expression like that,
it needs to be provided with context in order to correctly match an intent.
Using contexts,
you can control the flow of a conversation.
You can configure contexts for an intent by setting
input and output contexts ,
which are identified by string names.
When an intent is matched,
any configured output contexts for that intent become active.
While any contexts are active,
Dialogflow is more likely to match intents
that are configured with input contexts that correspond to
the currently active contexts.
The following diagram shows an example that uses context for a banking agent.
The end-user asks for information about their checking account.
Dialogflow matches this end-user expression to the CheckingInfo intent.
This intent has a checking output context, so that context becomes active.
The agent asks the end-user
for the type of information they want about their checking account.
The end-user responds with "my balance".
Dialogflow matches this end-user expression to the CheckingBalance intent.
This intent has a checking input context,
which needs to be active to match this intent.
A similar SavingsBalance intent may also exist for matching the same end-user expression
when a savings context is active.
After your system performs the necessary database queries,
the agent responds with the checking account balance.
Previous
arrow_back
Export and import entities
Next
Input and output contexts
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
