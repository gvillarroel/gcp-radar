---
title: "Configure cross-project ADK agent access \_|\_ Gemini Enterprise \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/configure-cross-project-adk-agents
  title: "Configure cross-project ADK agent access \_|\_ Gemini Enterprise \_|\_ Google\
    \ Cloud Documentation"
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
Configure cross-project ADK agent access
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how administrators can grant permission for
Gemini Enterprise to access an ADK agent that
runs within Vertex AI Agent Engine in a different Google Cloud project.
Identify the Gemini Enterprise service agent
To find the service agent email address for your Gemini Enterprise app project:
In the Google Cloud console, go to the project that contains your Gemini Enterprise
app.
From the project list, find the project number.
Construct the service agent email address using the following format:
service- PROJECT_NUMBER @gcp-sa-discoveryengine.iam.gserviceaccount.com
Replace PROJECT_NUMBER with the project number from
the previous step.
Grant permissions in the agent project
Grant the Gemini Enterprise service agent permissions in the project where the
ADK agent is hosted with Vertex AI Agent Engine:
In the Google Cloud console, go to the project where the ADK agent is hosted
with Vertex AI Agent Engine.
Go to IAM & Admin > IAM .
Click person_add Grant Access .
In the New principals field, enter the service agent email address that
you identified in the previous section.
In the Select a role list, search for and select Discovery Engine
Service Agent ( roles/discoveryengine.serviceAgent ).
Click Save .
What's next
After granting these permissions, you can
Register the ADK agent
in your Gemini Enterprise app, using the agent's resource path from the agent
project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
