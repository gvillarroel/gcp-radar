---
title: "Versions and environments \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/es/docs/agents-versions
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/es/docs/entities-options
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/es/docs/agents-versions
  title: "Versions and environments \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Versions and environments
Stay organized with collections
Save and categorize content based on your preferences.
You can create multiple versions of your agent
and publish them to separate environments.
When you edit an agent,
you are editing the draft agent .
At any point, you can save the draft agent as an agent version ,
which is an immutable snapshot of your agent.
When you save the draft agent,
it is published to the default environment .
When you create agent versions,
you can publish them to custom environments .
You can create a variety of custom environments for:
testing
development
production
etc.
Production traffic
Always use agent versions for production traffic
A draft agent is updated every time a developer on your team makes a change.
It is easy to break a draft agent unintentionally,
especially if multiple people have write access to the agent.
In addition, a recently edited draft agent
may be inconsistent with the trained model,
because training may have a delay or require manual execution.
You should always use agent versions for your production traffic.
Draft agents should be tested before promoting them to production versions,
and you can rollback to a previous version if any problems are discovered.
Consider possible agent errors while changing versions
If you change an agent version in your production environment
while sessions are active,
it may cause agent errors for some active sessions.
These errors may happen if the previous and new versions
are inconsistent with each other
in a way that disrupts session state.
Due to this,
you should plan to change versions during
down-time or off-peak hours.
Publish a version in a new environment
To publish an agent draft to a version
and create a custom environment:
Console
Go to the Dialogflow ES console .
Select your agent near the top of the left sidebar menu.
Click the settings settings button next to the agent name.
Click the Environments tab.
Click Publish a version .
Add an optional description and click Next .
Select +New Environment .
Note: You can create an agent version without publishing it
by selecting Create version without publishing
from the environment menu.
Enter an environment name.
Choose the fulfillment method for the environment.
Select Text-to-speech settings for the environment.
Click Publish .
The environment information is now listed
in the Custom environments section.
API
Call the create method for the
Version type
to create a new agent version.
Call the create method for the
Environment type
to create a new environment.
Provide the agent version you just created to the agentVersion field.
Revert an environment to a previous version
You can revert an environment to a previous agent version:
Console
Click an environment in the Custom environments section.
The environment settings dialog opens.
Click the option more_vert button
for a previously published version in the
Publishing History section.
Click Revert to this version .
The publishing history will be updated.
API
Call the patch / update method for the
Environment type
to update an environment.
Provide the agent version you previously created to the agentVersion field.
Load a previous version to draft
Loading a previous version to draft
overwrites the draft agent in the default environment
with a selected agent version.
Caution: Loading a previous version to draft
will negate all recent changes to draft and can't be undone.
You may want to save the draft to a version before taking these steps.
To load a previous version to draft:
Console
Go to the Dialogflow ES console .
Select your agent near the top of the left sidebar menu.
Click the settings settings button next to the agent name.
Click the Environments tab.
Click View all versions in the Draft section.
Click the option more_vert button
for a version that you want to load to draft.
Click Load to Draft .
Click Yes, I'm sure .
Reload any open console browser tabs,
so they are refreshed with the latest agent data.
API
Call the patch / update method for the
Environment type
with the following inputs:
Use - as the environment ID to specify the default environment.
Set allowLoadToDraftAndDiscardChanges to true.
For the agentVersion field,
supply the agent version that will overwrite the draft agent.
Export a version
To export a version, you need to load it to draft first, then
export the agent .
Test your agent in an environment
You can use the API to test your agent in any of your custom environments.
Call the
detect intent
method, but alter the endpoint URL by inserting
environments/environment-name/users/-/ between agent and sessions .
For example, the following endpoint uses the "development" environment with an unspecified user:
"https://dialogflow.googleapis.com/v2/projects/my-project-id/agent/environments/development/users/-/sessions/123456789:detectIntent"
Environment-specific settings
Fulfillment and text-to-speech are configured by the environment,
so the agent will use the environment's settings for these features.
For more information about how data is applied at various levels, see
agent application levels .
Google Assistant
If you are using
Actions on Google release environments ,
see the versioning limitations for the
Dialogflow fulfillment library .
Mega agent
See how versions and environments work in mega agents .
Limitations
The following limitations apply:
Maximum number of environments per agent: 10
Maximum number of versions per agent: 1000
Previous
arrow_back
Prebuilt agents
Next
Multilingual agents
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
