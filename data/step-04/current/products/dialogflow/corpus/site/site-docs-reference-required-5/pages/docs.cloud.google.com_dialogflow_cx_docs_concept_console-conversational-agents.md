---
title: "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/audit-logging
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents
  title: "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\
    \ Cloud Documentation"
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
Conversational Agents console overview
Stay organized with collections
Save and categorize content based on your preferences.
Important: This document is a work in progress.
The features used in each of the consoles are conceptually the same,
but the detailed steps for using these features may vary.
Over the next few months, the feature documentation will be updated
to be specific to the Conversational Agents console.
The Conversational Agents console is a new console that includes
features from both the Dialogflow CX console and the Vertex AI Agent Builder console.
All users of the Vertex AI Agent Builder console should start using the
Conversational Agents console.
Users of the Dialogflow CX console that want to incorporate generative features
into agents should start using the
Conversational Agents console.
Using the Conversational Agents console,
you can create interactive agents that use
generative playbooks ,
generative data stores ,
and
deterministic flows .
The Dialogflow CX console will continue to be supported until the
Conversational Agents console is generally available (GA).
Console compatibility
Agents previously built with the Dialogflow CX console or the Vertex AI Agent Builder console
can be seamlessly accessed by the Conversational Agents console.
Agents created with any of these three consoles
use the same Dialogflow API.
Supported regions
This console supports all
regions
already supported by the Dialogflow CX console or the Vertex AI Agent Builder console.
Pricing
Pricing
for agents created with the Conversational Agents console
is the same as it has been for agents created with the Dialogflow CX console.
Agents that utilize generative features such as playbooks,
data stores, generators, or generative fallback
for a request are charged as generative requests.
Create an agent
Prebuilt agents can be used to accelerate development for new agents
in common scenarios.
To create an agent with prebuilt agents:
Open the
Conversational Agents console .
If you haven't already, select or create a project.
Click Create agent .
Click Use a prebuilt agent .
Select a prebuilt agent and follow instructions for installation.
To create an agent with
playbooks
and/or
flows :
Open the
Conversational Agents console .
If you haven't already, select or create a project.
Click Create agent .
Click Build your own .
Provide an agent name,
location ,
time zone, and
default language .
Select a Conversation start option.
If you want your agent to begin the conversation using
a generative playbook, select Playbook .
If you want your agent to begin the conversation using
a deterministic flow, select Flow .
Click Create .
The console loads the editor page for the
default playbook .
To create an agent with
data store handlers :
Open the
Conversational Agents console .
If you haven't already, select or create a project.
Click Create agent .
Click Create a Q&A Agent .
You are redirected to the Vertex AI Agent Builder console.
Follow the instructions to
create an agent .
Top row navigation
The horizontal row at the top of the interface contains the following controls:
X
Item
Project
The currently selected project .
Agent
The currently selected agent .
Language
The currently selected language used when entering language-specific data, and the Manage Languages option which brings you to flow language settings .
Search
Used to search, filter, and access core resources within the agent.
Collaborators
Collaborators that have access to the agent.
Export/Import agent
Agent export and import .
Change history
Agent change history .
Settings
Agent settings .
Publish agent
A convenience button for setting up Dialogflow CX Messenger .
Simulator
The simulator used for testing the agent.
Help
Links to documentation and other help content.
Feedback
Used to provide product feedback.
Left navigation
X
Item
Playbooks
List, create, and edit generative playbooks .
Flows
Visualize, create, and edit deterministic flows .
Tools
List, create, and edit playbook tools .
Prebuilts
Import ready to use prebuilt agents for a variety of common use cases.
Test Cases
List and define test cases to regularly verify agent behavior.
Conversation History
View the conversation history .
Environments
Create and edit various deployment environments .
Versions
Snapshot flow and playbook versions .
Integrations
Integrate your agent with ready to use user interfaces and other conversation platforms.
Conversation Profiles
List, create, and edit conversational profiles for advanced telephony use cases.
Simulator
The simulator is used to test your agent.
You can have a conversation with your agent
while monitoring changes in session state.
Simulator settings
When you first open the simulator,
you can configure the following settings:
Agent environment
Start resource, which can be a
playbook
or
flow
which receives the first input.
The generative model (start resource is a playbook)
or a page (start resource is a flow).
Simulator input
When interacting with the simulator,
you provide end-user input as text or audio from your microphone,
then press enter or click the
send send button.
In addition to plain text,
you can choose alternate input types by typing @ ,
then selecting the option:
Channel :
Send a
channel
value as a query parameter.
DTMF :
Send dual-tone multi-frequency signaling (Touch-Tone)
input for telephony interactions.
End user metadata :
Provide contextual hint in the form of a JSON object for generative AI to
better answer an end-user query.
For example,
for data store fulfillment or tool input, you could use:
{"firstName": "John", "lastName": "Doe"} .
Event :
Invoke an
event .
Cloud Storage uri :
Cloud Storage URI for a file to upload.
You can use this file for images and documents
that provide context to the generative AI.
Parameter :
Inject a
parameter
value.
You can provide new parameters
or provide preset values for existing parameters.
Parameter scope :
Set the
parameter scope .
Simulator controls
Once the conversation has started,
there are several controls available at the top of the simulator panel:
Debug trace
Original response
Show latency
Create test case
Undo
Replay conversation
Reset conversation
Options :
Enable or disable
webhook
calls at any time with the
webhook toggle button.
Enable or disable
partial responses .
Enable or disable
sentiment analysis .
Save as example :
See instructions
Simulator history
When using the simulator to have a conversation with your agent,
the conversation history is shown in the simulator panel.
You can click each conversational turn
to expand more details about that turn.
For agent responses,
you can also preview the audio response by clicking the
play button for the conversational turn.
Previous
arrow_back
Important terms
Next
Dialogflow CX console overview
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
