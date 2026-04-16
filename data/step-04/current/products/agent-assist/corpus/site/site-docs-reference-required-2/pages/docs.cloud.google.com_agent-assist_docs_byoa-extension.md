---
title: "User guide: Build your own GenAI assist extension \_|\_ Agent Assist \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-assist/docs/byoa-extension
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist
source_metadata:
  url: https://docs.cloud.google.com/agent-assist/docs/byoa-extension
  title: "User guide: Build your own GenAI assist extension \_|\_ Agent Assist \_\
    |\_ Google Cloud Documentation"
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
User guide: Build your own GenAI assist extension
Stay organized with collections
Save and categorize content based on your preferences.
You can create and use tools to connect with external systems using LLM-powered Agent Assist. Vertex AI Extensions provides the support for tools in Agent Assist. For this reason, if you intend to use a tool in Agent Assist, use the Vertex AI Extensions tool type.
This guide provides instructions for using Vertex AIExtensions to create a Build your own GenAI assist (BYOA) generator.
Prerequisites
To use a Vertex AI Extensions tool, you must have access to the following:
Agent Assist console
Vertex AI for Vertex extension APIs
Cloud Storage for the API spec
Create a Vertex AI extension
You must set up your own Vertex AI extension which calls the API you want to use. You only need to create the extension and the backend will run it when needed.
Create a tool
Navigate to the Agent Assist console and choose a Project .
Agent Assist console
From the menu, select extension Tool .
Create a tool.
In the Extension field, add the Vertex extension resource.
Create a BYOA generator
Navigate to the Agent Assist console and choose a Project .
Agent Assist console
Click Build-your-own-assist > Create .
Add the instructions for your generator.
Create a conversation profile
Navigate to the Agent Assist console and choose a Project .
Agent Assist console
Click conversion_path Conversation profiles .
Click + Create .
Add your BYOA generator.
Test in the simulator
Navigate to the Agent Assist console and choose a Project .
Agent Assist console
Click Simulator .
Select the conversation profile you created.
Click Start .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
