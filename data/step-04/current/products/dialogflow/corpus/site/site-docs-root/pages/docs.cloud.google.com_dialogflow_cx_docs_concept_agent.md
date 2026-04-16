---
title: "Agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent
  title: "Agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Agents
Stay organized with collections
Save and categorize content based on your preferences.
A
Dialogflow CX agent
is a virtual agent
that handles concurrent conversations with your end-users.
It is a natural language understanding module
that understands the nuances of human language.
Dialogflow CX translates end-user text or audio during a conversation
to structured data that your apps and services can understand.
You design and build a Dialogflow CX agent
to handle the types of conversations required for your system.
A Dialogflow CX agent is similar to a human call center agent.
You train them both to handle expected conversation scenarios,
and your training does not need to be overly explicit.
Create an agent
Note: You can create multiple Dialogflow CX agents for one
Google Cloud project .
To create an agent:
Console
Open the Dialogflow CX console .
Create or choose a Google Cloud project.
Click Create agent .
Select Auto-generate to create a
data store agent
or select Build your own to create other kinds of agents.
Complete the form for basic agent settings:
You can choose any display name.
Select your preferred
location .
Click the Edit button if you want to change advanced
location settings .
Select your preferred time zone.
Select the default language for your agent.
You cannot change the default language for an agent
once it is created.
Click Save .
API
If you have not already configured
location settings
for your project,
you must configure these settings with the console
before creating agents with the API.
Currently, you cannot configure location settings with the API.
To create an agent,
see the create method for the Agent type.
Go to the Agent API reference
Select a protocol and version for the Agent reference:
Protocol
V3
V3beta1
REST
Agent resource
Agent resource
RPC
Agent interface
Agent interface
C++
AgentsClient
Not available
C#
AgentsClient
Not available
Go
AgentsClient
Not available
Java
AgentsClient
AgentsClient
Node.js
AgentsClient
AgentsClient
PHP
Not available
Not available
Python
AgentsClient
AgentsClient
Ruby
Not available
Not available
Close
Agent data
Dialogflow CX agents serve as top-level containers
for settings and data for virtual agents.
The following data is associated with agents:
Intents
Entity types
Webhooks
Flows
Pages
Route groups
For more information about how data is applied at varying levels, see the
data application levels .
Export and restore an agent
Warning: We will no longer export raw value credentials for OpenAPI Tools and
Webhooks, starting Aug 15, 2025. You should migrate
to store your credentials in Secret Manager. See
Webhook
and Tool
documentations for instructions.
You can export an agent to a file,
and restore an agent with that file.
An agent export includes all agent data except the following:
Flow versions :
Only the draft flows are exported to file.
Environments :
Custom environments are not exported to file.
An agent restore overwrites all target agent data
(including all flow versions) except the following:
Environments :
All custom environments remain unchanged in the target agent.
Flow versions referenced by custom environments in the target agent
will continue to exist, as long as the associated environments exist.
However, these stale flow versions are not listed or selectable
flow versions for the agent.
Vertex AI Agents Apps :
The association to a Vertex AI Agents App remains unchanged
in the target agent. (In other words, the value of engine in
GenAppBuilderSettings )
This means that data store agents can only be restored
into other existing data store agents, because the resulting agent also needs
to have an association to a Vertex AI Agents App.
Vertex AI Agents Data Stores :
All references to data stores will be overwritten in the target agent
according to the following rules:
If the target agent isn't associated with an App, then it's not possible
to restore an agent with data store references into it. Trying to do so results
in an error message. To fix that, you can either
create a new data store agent from scratch. (Alternatively, you
can turn your existing agent into a data store agent by adding a data store
state handler
to it. In this case you'll be guided through adding an associated App to
your agent.)
If the target agent is associated with an App, then all the data store
references will be updated upon restore: their Google Cloud project ID and
location will be updated to match the App of the target agent. The
collection ID and data store ID will remain unchanged. This means that you
need to add data stores for all the IDs with matching types into the App
of the target agent prior to the restore operation.
Example: if the source agent refers to a data store named
projects/123/locations/eu-west2/collections/default_collection/dataStores/myDataStore1
and the App of the target agent is named
projects/321/locations/us-east1/collections/default_collections/engines/app123 ,
then the resulting data store reference in the target agent will become:
projects/321/locations/us-east1/collections/default_collection/dataStores/myDataStore1
Note: in the API and in the contents of the exported data, a
Vertex AI Agents App is called a GenAppBuilder Engine. For
example in an exported JSON Package you can find the name of the engine in the
agent.json file under the key genAppBuilderSettings.engine .
When exporting,
you can select the export file format.
If you are using source control versioning for your agent data,
you should
export in the JSON format .
When you restore an agent,
Dialogflow CX automatically determines the file format.
To export or restore an agent:
Console
Open the Dialogflow CX console .
Choose the Google Cloud project for the agent.
Click the option
more_vert
menu for an agent in the list.
Click the Export or Restore button.
Follow instructions to complete.
Note: To restore a data store agent, make sure that the target agent was
created as a data store agent .
API
See the export and restore methods for the Agent type.
Go to the Agent API reference
Select a protocol and version for the Agent reference:
Protocol
V3
V3beta1
REST
Agent resource
Agent resource
RPC
Agent interface
Agent interface
C++
AgentsClient
Not available
C#
AgentsClient
Not available
Go
AgentsClient
Not available
Java
AgentsClient
AgentsClient
Node.js
AgentsClient
AgentsClient
PHP
Not available
Not available
Python
AgentsClient
AgentsClient
Ruby
Not available
Not available
Close
If the agent size exceeds the maximum limit , use the
Cloud Storage option for agent export and restore.
If you use GitHub, also see the
GitHub export/restore guide .
Delete an agent
Caution: Deleting an agent cannot be undone. Export your agent to
keep a backup if necessary.
In order to delete an agent,
you need a role that provides full access or edit access.
See the
access control guide
for more information.
To delete an agent:
Console
Open the Dialogflow CX console .
Choose the Google Cloud project for the agent.
Click the option
more_vert
menu for an agent in the list.
Click the delete
delete
button.
Confirm deletion in the dialog.
API
See the delete method for the Agent type.
Go to the Agent API reference
Select a protocol and version for the Agent reference:
Protocol
V3
V3beta1
REST
Agent resource
Agent resource
RPC
Agent interface
Agent interface
C++
AgentsClient
Not available
C#
AgentsClient
Not available
Go
AgentsClient
Not available
Java
AgentsClient
AgentsClient
Node.js
AgentsClient
AgentsClient
PHP
Not available
Not available
Python
AgentsClient
AgentsClient
Ruby
Not available
Not available
Close
If you
delete your project ,
all Dialogflow CX agents and data associated with the project
are deleted immediately.
Previous
arrow_back
Dialogflow CX console overview
Next
Overview
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
