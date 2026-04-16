---
title: "Create and manage agents \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/es/docs/agents-manage
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/es/docs/entities-options
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/es/docs/agents-manage
  title: "Create and manage agents \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Create and manage agents
Stay organized with collections
Save and categorize content based on your preferences.
All agent-related menus and information are found at the top of the left sidebar menu at the Dialogflow Console. There, you'll see a list of the agents associated with your account and the option to create a new agent.
Create an agent
Note: You can only create one agent per region
for a GCP project.
If you need multiple agents in the same region, you will need to create multiple
projects.
To create an agent with the console (common), follow these steps:
You must have a
role with full or edit access
in order to create an agent.
Go to the Dialogflow ES console .
If requested, sign in to the Dialogflow console.
See Dialogflow console overview for more information.
Click Create Agent in the left menu.
(If you already have other agents, click the agent name,
scroll to the bottom and click Create new agent .)
Enter your agent's name, default language, default time zone and GCP project, then click the
Create button. (You can change the
agent edition
after creation.)
To create an agent with the API (uncommon),
see Create an agent with the API .
Delete an agent
Caution: Deleting an agent cannot be undone. Export your agent to keep a backup if necessary.
You must have a
role with full access
in order to delete an agent in the Dialogflow Console.
Note: Either full or edit access can delete an agent when using the API.
Before deleting an agent,
you must remove access for all users besides yourself:
If you are the only user with the Owner/Admin role,
you can
use the Dialogflow Console to remove other users .
If more than one user has the Owner/Admin role,
you must
use the GCP Console to remove other users .
To delete an agent:
Go to the Dialogflow ES console .
Select the agent you wish to delete.
Click on the settings settings button next to the agent's name.
Select the General tab,
and scroll down to the bottom.
Click Delete this agent .
If you do not see the Delete this agent button,
it is because you do not have the required Owner/Admin role.
Enter DELETE in the text field.
Click Delete .
If you
delete your project ,
all Dialogflow ES agents and data associated with the project
are deleted within 60 days of project deletion.
If you receive an error when attempting to delete a project
due to an existing lien,
see the troubleshooting documentation
section on project liens .
Previous
arrow_back
Agents
Next
Prebuilt agents
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
