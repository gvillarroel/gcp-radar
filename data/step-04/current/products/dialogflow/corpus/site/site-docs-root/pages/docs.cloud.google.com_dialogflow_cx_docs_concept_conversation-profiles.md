---
title: "Conversation profiles \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-profiles
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-profiles
  title: "Conversation profiles \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Send feedback
Conversation profiles
Stay organized with collections
Save and categorize content based on your preferences.
Conversation profiles provide some important characteristics about conversations
between end-users and agents. They can be created in conjunction with either
Dialogflow CX Phone Gateway integration
or Agent Assist .
The Dialogflow CX Phone Gateway conversation profiles are relevant if you want to use
Call companion .
Agent Assist conversation profiles can be linked to either
Dialogflow CX or Dialogflow ES agents in the
Agent Assist console . You
can also link conversation profiles to Dialogflow CX agents in
Conversational Agents console, as described in the agent
linking section.
To see a list of conversation profiles that have already been created for a
specific project and region and to create new ones, open an agent associated
with the project and region, and click Conversation profiles in the left
navigation. For example, to see all conversation profiles created in a project
for the global region, open an agent associated with the global region in
that project and click Conversation profiles .
Create a conversation profile
The following fields are required to create a new conversation profile:
Display name : Display name for the conversation profile.
Language : Language for the conversation profile.
Enable Call companion : Enable this to use call companion for
Dialogflow CX Phone Gateway. You can create the conversation profile without
enabling this field, but the conversation profile will only be available for
use with Agent Assist, not the Dialogflow CX agent.
Agent linking
To link a conversation profile to an agent:
Select the conversation profile.
Click Link with agent .
Select the agent.
Click Select .
Click Save .
To change the linked agent:
Click Linked with ... .
Click Switch agent .
Select the agent.
Click Select .
Click Save .
To unlink an agent from a conversation profile:
Click Linked with ... .
Click Unlink from this agent .
Click Save .
Previous
arrow_back
Continuous tests and deployment
Next
Training
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
