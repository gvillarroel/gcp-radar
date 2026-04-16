---
title: "Agent Assist basics \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-assist/docs/basics
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/agent-assist/docs/basics
source_metadata:
  url: https://docs.cloud.google.com/agent-assist/docs/basics
  title: "Agent Assist basics \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Agent Assist
Guides
Send feedback
Agent Assist basics
Stay organized with collections
Save and categorize content based on your preferences.
This document is a basic guide to Agent Assist resources. More details
about the resources described here can be found in the
reference documentation .
We recommend that you familiarize yourself with this guide before diving into
Agent Assist.
Conversations
A Conversation
is a resource that represents an exchange between two or more
participants . Every time a
conversation participant's utterance is passed to Agent Assist as part
of a Conversation resource, a message is created and stored for the
conversation.
Conversation profiles
Each conversation is created using a conversation profile . Each
conversation profile contains a set of parameters that control the
suggestions provided to the human agent during a conversation. You can also configure a conversation profile for use with a virtual agent , which autogenerates a reply
to the end user.
You can create a conversation profile either by using the
Agent Assist Console
or by calling the API directly .
Participants
Each conversation can have the following
participants :
END_USER : Participant is an end-user. This is the person the agent is
conversing with.
AUTOMATED_AGENT : Participant is an
automated agent .
HUMAN_AGENT : Participant is a human agent.
Virtual agents
Dialogflow agents are virtual agents that you can build and configure for
conversations with your end-users. You can design your system so that end-users
initially interact with a
virtual agent before being escalated to a
human agent. You can use either a
Dialogflow ES or
Dialogflow CX agent.
Conversation stages
A conversation with an end-user has multiple stages:
Connection stage :
The end-user initiates a chat dialog.
Virtual agent stage :
The end-user is connected to a
Dialogflow virtual agent .
The virtual agent communicates with the end-user and attempts to resolve all
issues and requests. You can set up your system to bypass the virtual agent
and handoff stages.
Handoff stage :
If the virtual agent cannot resolve all end-user issues, the conversation is
handed off
to a human agent.
Agent Assist stage :
The end-user is connected to one or more human agents.
Agent Assist
supplies real-time document and response suggestions to the human agent that
are relevant to the conversation.
Termination stage :
The end-user is disconnected from the text chat.
Agent desktop
To implement Agent Assist for text-based conversations you must
integrate the Agent Assist API into your agent desktop.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
