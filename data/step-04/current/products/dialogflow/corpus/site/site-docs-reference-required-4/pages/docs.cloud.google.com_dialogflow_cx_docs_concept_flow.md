---
title: "Flows \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow
  title: "Flows \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Flows
Stay organized with collections
Save and categorize content based on your preferences.
Complex dialogs often involve multiple conversation topics.
For example, a pizza delivery agent may have
food order , customer information , and confirmation
as distinct topics.
Each topic requires multiple conversational turns for an agent
to acquire the relevant information from the end-user.
Flows
are used to define these topics and the associated conversational paths.
Every agent has one flow called the
Default Start Flow .
This single flow may be all you need for a simple agent.
More complicated agents may require additional flows,
and different development team members can be responsible for building
and maintaining these flows.
For example, the flows of a pizza delivery agent may look like the following:
Default start flow
When you create an agent,
the Default Start Flow is created automatically.
For a simple agent,
you can use this flow as your only flow.
For more complex agents,
you can add more flows,
and the default start flow can be used
as a simple entry point to the conversation.
Note: The Default Start Flow cannot be deleted.
When using the API,
you can reference the default start flow with the following flow ID:
00000000-0000-0000-0000-000000000000
Flow start page
Every flow has a special page named Start in the console.
When a flow is selected in the console,
the start page is shown as a node on the graph.
When a flow initially becomes active,
this page becomes the current, active page.
A start page does not have parameters or responses messages like normal pages.
However, you can send a message by using one of the following approaches:
Intent propagation
Use a simple true
condition
in a
route
that has a fulfillment response or
a transition target to a normal page with entry fulfillment.
Custom events
Reference start page in API requests
To reference a flow's start page in runtime API requests, use START_PAGE as a
page ID.
To make design-time changes to a start page through the API, use the get and
patch/update API methods for the Flow type.
Go to the Flow API reference
Select a protocol and version for the Flow reference:
Protocol
V3
V3beta1
REST
Flow resource
Flow resource
RPC
Flow interface
Flow interface
C++
FlowsClient
Not available
C#
FlowsClient
Not available
Go
FlowsClient
Not available
Java
FlowsClient
FlowsClient
Node.js
FlowsClient
FlowsClient
PHP
Not available
Not available
Python
FlowsClient
FlowsClient
Ruby
Not available
Not available
Close
Create a flow
To create a flow:
Console
Open the Dialogflow CX console .
Choose your Google Cloud project.
Select your agent.
Click the add
add
button in the Flows section.
Select Create flow .
Enter a display name for your flow.
Click the flow you just created.
API
See the create method for the Flow type.
Go to the Flow API reference
Select a protocol and version for the Flow reference:
Protocol
V3
V3beta1
REST
Flow resource
Flow resource
RPC
Flow interface
Flow interface
C++
FlowsClient
Not available
C#
FlowsClient
Not available
Go
FlowsClient
Not available
Java
FlowsClient
FlowsClient
Node.js
FlowsClient
FlowsClient
PHP
Not available
Not available
Python
FlowsClient
FlowsClient
Ruby
Not available
Not available
Close
Flow data
To access a flow's data:
Console
Open the Dialogflow CX console .
Choose the Google Cloud project for the agent.
Find the agent in the list.
Click the agent display name.
Click the flow in the Flows section.
The flow's pages are populated in the Pages section.
See the
pages guide
for information on editing pages.
Click the flow in the graph.
A flow edit panel appears.
Use this panel to browse and edit additional flow data.
Click Save to save any changes.
API
For flows, see the get and patch/update for the Flow type.
Go to the Flow API reference
Select a protocol and version for the Flow reference:
Protocol
V3
V3beta1
REST
Flow resource
Flow resource
RPC
Flow interface
Flow interface
C++
FlowsClient
Not available
C#
FlowsClient
Not available
Go
FlowsClient
Not available
Java
FlowsClient
FlowsClient
Node.js
FlowsClient
FlowsClient
PHP
Not available
Not available
Python
FlowsClient
FlowsClient
Ruby
Not available
Not available
Close
For pages, see the get and patch/update methods for the Page type.
Go to the Page API reference
Select a protocol and version for the Page reference:
Protocol
V3
V3beta1
REST
Page resource
Page resource
RPC
Page interface
Page interface
C++
PagesClient
Not available
C#
PagesClient
Not available
Go
PagesClient
Not available
Java
PagesClient
PagesClient
Node.js
PagesClient
PagesClient
PHP
Not available
Not available
Python
PagesClient
PagesClient
Ruby
Not available
Not available
Close
The following data is associated with flows:
Pages :
The list of pages that make up the flow.
Routes :
All of these routes may be called when the start page
for the flow is active.
Routes with an intent requirement may be followed when other
pages of the flow are active.
For details, see
State handler scope
and
Flow-level routes .
Event handlers :
These handlers may be called when the flow is active.
For details, see
Flow-level event handlers
For more information about how data is applied at varying levels, see the
data application levels .
Flow settings
The following settings are available for flows:
Display name :
A human-readable name for the flow.
Description :
A description for the flow.
ML settings
Flow ML settings are also accessed and described in
agent ML settings .
Language auto detection
Language auto detection lets you specify which end-user languages Dialogflow CX
should automatically recognize and respond in. See the
language auto detection documentation
for details.
Flow lock :
A locked flow cannot be edited, including the following changes to its child resources:
Pages cannot be
created, edited, deleted.
Versions cannot be
created, edited, deleted.
Flow-level route groups
cannot be created, edited, deleted.
Agent-level route groups
referenced by a locked flow or any page under a locked flow cannot
be deleted, but they can still be edited.
Note: This setting cannot be changed if the lock is enabled at the agent level .
Advanced speech settings :
These advanced speech settings
can optionally override the same
agent speech settings .
Speech adaptation settings :
Flow level speech adaptation settings with more detailed instructions in
manual speech adaptation .
Input parameters :
Parameters from the task playbook that are made available to the flow.
Return parameters :
Parameters that the flow returns to a task playbook.
For more information about how data is applied at varying levels, see the
data application levels .
To access flow settings:
Console
Open the Dialogflow CX console .
Choose your Google Cloud project.
Select your agent.
Hover your mouse over the flow in the Flows section.
Click the options
more_vert
button.
Select Flow settings .
Browse or edit settings.
Click Save to save any changes.
API
See the get and patch/update methods for the Flow type.
Go to the Flow API reference
Select a protocol and version for the Flow reference:
Protocol
V3
V3beta1
REST
Flow resource
Flow resource
RPC
Flow interface
Flow interface
C++
FlowsClient
Not available
C#
FlowsClient
Not available
Go
FlowsClient
Not available
Java
FlowsClient
FlowsClient
Node.js
FlowsClient
FlowsClient
PHP
Not available
Not available
Python
FlowsClient
FlowsClient
Ruby
Not available
Not available
Close
Delete a flow
To delete a flow:
Console
Open the Dialogflow CX console .
Choose your Google Cloud project.
Select your agent.
Hover your mouse over the flow in the Flows section.
Click the settings
more_vert
button.
Select Delete .
API
See the delete method for the Flow type.
Go to the Flow API reference
Select a protocol and version for the Flow reference:
Protocol
V3
V3beta1
REST
Flow resource
Flow resource
RPC
Flow interface
Flow interface
C++
FlowsClient
Not available
C#
FlowsClient
Not available
Go
FlowsClient
Not available
Java
FlowsClient
FlowsClient
Node.js
FlowsClient
FlowsClient
PHP
Not available
Not available
Python
FlowsClient
FlowsClient
Ruby
Not available
Not available
Close
Train a flow
To train a flow:
Console
Open the Dialogflow CX console .
Choose your Google Cloud project.
Select your agent.
Click Agent Settings .
Open the ML tab.
To train a single flow, click Train in the corresponding row.
To train multiple flows, select them with checkboxs, then
click Train selected flow NLU model .
API
See the train method for the Flow type.
Go to the Flow API reference
Select a protocol and version for the Flow reference:
Protocol
V3
V3beta1
REST
Flow resource
Flow resource
RPC
Flow interface
Flow interface
C++
FlowsClient
Not available
C#
FlowsClient
Not available
Go
FlowsClient
Not available
Java
FlowsClient
FlowsClient
Node.js
FlowsClient
FlowsClient
PHP
Not available
Not available
Python
FlowsClient
FlowsClient
Ruby
Not available
Not available
Close
Export a flow
You can export a flow in two ways:
Data export :
This exports your flow as raw data,
so it can be imported to any agent.
When you export a flow,
the resources referenced by the flow (intents, entities, webhooks)
are also exported.
When following steps below,
choose the raw data data format.
Diagram export ( Preview ):
This exports your flow as a visual diagram.
The export format is draw.io XML,
so you can import the diagram in
Lucidchart ,
diagrams.net ,
or any other diagram tool that can import the draw.io format.
When following steps below,
choose the XML data format.
Note: Diagram export is not available for agents using
CMEK .
You can export a flow with the following options:
Include referenced flows :
Exports the target flow and all levels of referenced flows. Referenced flows include the flows that the target flow is referencing in addition to flows referenced by subsequent referenced flows, with no maximum depth.
During import, all of the exported flows will be imported and the transitions
between these flows will be preserved.
To export a flow:
Console
Open the Dialogflow CX console .
Choose your Google Cloud project.
Select your agent.
Hover your mouse over the flow in the Flows section.
Click the options
more_vert
button.
Select Export flow .
Follow instructions to complete.
API
See the export method for the Flow type.
Go to the Flow API reference
Select a protocol and version for the Flow reference:
Protocol
V3
V3beta1
REST
Flow resource
Flow resource
RPC
Flow interface
Flow interface
C++
FlowsClient
Not available
C#
FlowsClient
Not available
Go
FlowsClient
Not available
Java
FlowsClient
FlowsClient
Node.js
FlowsClient
FlowsClient
PHP
Not available
Not available
Python
FlowsClient
FlowsClient
Ruby
Not available
Not available
Close
Import a flow
When you import a flow from a source agent to a target agent,
the global resources referenced by the flow (intents, entities, webhooks)
are imported along with the flow-specific data.
If the target agent has any global resources
with the same display names found in the source agent,
Dialogflow CX provides a summary of these resources,
along with three options to resolve the conflicts
for these resources:
Replace existing resources :
Source agent resources will overwrite target agent resources.
Import as new resources :
Source agent resources will be added with a distinctive suffix in the name.
Keep original resources :
Target agent resources will be unchanged.
To import a flow:
Console
Open the Dialogflow CX console .
Choose your Google Cloud project.
Select your agent.
Click the add
add
button in the Flows section.
Select Import flow .
Follow instructions to complete.
API
See the import method for the Flow type.
Go to the Flow API reference
Select a protocol and version for the Flow reference:
Protocol
V3
V3beta1
REST
Flow resource
Flow resource
RPC
Flow interface
Flow interface
C++
FlowsClient
Not available
C#
FlowsClient
Not available
Go
FlowsClient
Not available
Java
FlowsClient
FlowsClient
Node.js
FlowsClient
FlowsClient
PHP
Not available
Not available
Python
FlowsClient
FlowsClient
Ruby
Not available
Not available
Close
Previous
arrow_back
Flow-based agent basics
Next
Pages
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
