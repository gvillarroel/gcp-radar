---
title: "Agents overview \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview
  title: "Agents overview \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
Home
Documentation
AI and ML
Gemini Enterprise
Send feedback
Agents overview
Stay organized with collections
Save and categorize content based on your preferences.
Gemini Enterprise provides centralized oversight and management for
agents used by your organization, including those from Google, third parties,
and internal teams.
Agent types
The following table details the different types of agents available in
Gemini Enterprise, the Gemini Enterprise tools that are used to create the agent,
and the admin configurations required to view and manage them on the web app.
Agent type
Gemini Enterprise tool
Description
Employee-made agents from your organization
Agent Designer
This interactive, no-code, low-code tool lets users in your organization create,
launch, and manage single and multi-step agents on the Gemini Enterprise
web app. For more information, see
Agent Designer overview .
A Gemini Enterprise admin must enable this feature on the web app by
turning on the Enable Agent Designer toggle in the
End user features control page. For more information, see
Manage web app features .
Google-made agents
Data Insights
Helps users analyze and understand their data, uncovering trends,
patterns, and key insights from various data sources. Gemini Enterprise
admins must configure these agent to make it available to users on the
Gemini Enterprise web app. For more information, see
Get insights with the Data Insights agent .
Deep Research
Helps users perform in-depth exploration of topics. For more information, see
Get reports with Deep Research .
Idea Generation
Helps users with brainstorming and creative thinking. For more information,
see Ideate with Idea Generation agent .
Custom agents from your organization
ADK agents hosted on Vertex AI Agent Engine
Gemini Enterprise admins can register custom agents built by your
organization and hosted on Vertex AI Agent Engine, making them
available to users on the Gemini Enterprise web app. For more information,
see
Register and manage ADK agents .
Agent-to-Agent (A2A)
Gemini Enterprise admins can register custom agents built using the
Agent-to-Agent (A2A) protocol, making them available to users on the
Gemini Enterprise web app. For more information, see
Register and manage A2A agents .
Dialogflow
Gemini Enterprise admins can register conversational agents built with
Dialogflow, making them available to users on the
Gemini Enterprise web app. For more information, see
Register and manage Dialogflow agents .
View agents
To view the agents that are registered or available, do the following:
In the Google Cloud console, go to the Gemini Enterprise page.
Gemini Enterprise
Click the name of the app that has the agents.
Click Agents . The Agents page is displayed.
Manage agents
A Gemini Enterprise admin can manage the lifecycle of the available agents from
the Agents page in the Gemini Enterprise console and can perform the
following tasks:
Task
Description
Update an agent
You can update the details of an agent. For more information, see:
Update an A2A agent
Update an ADK agent
Update a Dialogflow agent
Share an agent
You can share the available agents in your Google Cloud console. For more
information, see
Share agents from Google Cloud console .
Delete an agent
You can delete an agent from the Agents page. After an agent is
deleted, it is removed from the Agents page and the
Gemini Enterprise web app.
On the Agents page, click
more_vert next to the agent you want to
delete, and then click Delete .
Agent states
This table describes each state that an agent might be in. In the
Google Cloud console on the Agents page, you can see the state listed for each
agent in the Agent state column of the Agents table.
State
Description
Private
The agent is intended for personal use and is available exclusively to
its creator. After the agent's status is changed to Enabled , the
agent is visible to other users on the Gemini Enterprise web app.
Suspended
The agent is temporarily deactivated. It remains visible in the Agent
Gallery with a message explaining its deactivation. Although users can't
interact with the agent, owners and admins retain full access.
Enabled
The agent is active and available for use on the Gemini Enterprise web
app. Authorized users can interact with the agent as intended.
Disabled
The agent is inactive and hidden from the Agent Gallery. Interaction
isn't available for any user until the owner or admin re-enables the
agent.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
