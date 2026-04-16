---
title: "Generative fallback \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative-fallback
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/basics
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/generative-fallback
  title: "Generative fallback \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Generative fallback
Stay organized with collections
Save and categorize content based on your preferences.
Note: The Generative fallback feature is excluded from the Dialogflow CX
SLA .
The generative fallback feature uses Google's latest generative large language
models (LLMs) to generate virtual agent responses when end-user input does not
match an intent or parameter for form filling.
The feature can be configured with a text prompt that instructs the LLM how to
respond. You can use a predefined text prompt or add your own prompts. With the
predefined prompt, the virtual agent is able to handle basic conversational
situations. For example:
Greet and say goodbye to the user.
Repeat what the agent said in case the user didn't understand.
Hold the line when the user asks for it.
Summarize the conversation.
You can enable generative fallback on no-match event handlers used in flows,
pages, or during parameter filling. When generative fallback is enabled for a
no-match event, whenever that event triggers, Dialogflow CX will attempt to produce
a generated response that will be said back to the user. If the response
generation is unsuccessful, the regular prescribed agent response will be issued
instead.
Limitations
The feature is available in the
languages supported by the Gemini API .
Enable generative fallback
You can enable generative fallback in your agent on no-match event handlers ,
which can be used in flow, page or parameter fulfillment.
Enable generative fallback for an entire flow's no-match events:
Go to the Dialogflow CX console .
Select a project.
Select an agent, then select a flow.
Click the Start Page of the flow to expand it.
Click sys.no-match-default under Event handlers .
Check Enable generative fallback under Agent responses .
Click Save .
Enable generative fallback on specific no-match events:
Navigate to the target No-match event handler (any event starting with
No-match , such as No-match default , No-match 1 , and so on).
Check Enable generative fallback under Agent responses .
Click Save .
Configure generative fallback
As mentioned above, the generative fallback feature passes a request to a
large language model in order to produce the generated response. The request
takes the form of a text prompt that is a mix of natural language and
information about the current state of the agent and of the conversation. The
prompt and the generated response are checked against a list of banned
phrases . If they contain any banned phrase, or are otherwise deemed unsafe,
generation will be unsuccessful, and the regular prescribed response (under
Agent says in the same fulfilment) will be issued instead.
The feature can be configured in multiple ways:
Select a predefined prompt.
Define a custom prompt.
Add or remove phrases from the list of banned phrases.
When creating a prompt, in addition to a natural language description of what
kind of context should be generated, the following placeholders can also be
used:
Term
Definition
$conversation
The conversation between the agent and the user, excluding the very last user utterance.
${conversation USER:"<user prefix>" AI:"<agent prefix>" TURNS:<turn count>}
A parameterized version of the $conversation placeholder. You can customize the end-user prefix ( USER ), the agent prefix ( AI ), and the number of previous turns to include ( TURNS ). All placeholder parameter values must be specified. For example, ${conversation USER:"Human says:" AI:"Agent says:" TURNS:4}
$last-user-utterance
The last user utterance.
$flow-description
The flow description of the active flow.
$route-descriptions
The intent descriptions of the active intents.
Make sure to have good flow and intent descriptions.
Choose a predefined prompt
In Agent Settings , navigate to the Generative AI tab, and then the
Generative Fallback sub-tab.
Select one of the options in the Template dropdown.
Click Save .
The feature provides two template prompts, the Default template (which is
not visible) and the Example template that can serve as a guide for writing
your own prompts.
Define your own prompt
In Agent Settings , navigate to the Generative AI tab, and then the
Generative Fallback sub-tab.
Select + new template in the Template dropdown.
Add a Template name .
Add a Text prompt .
Click Save .
You can also start by editing the Example template and saving it as a new
template:
Select Example in the Template dropdown.
Click Edit .
Edit the Template name .
Edit the Text prompt .
Click Save .
Modify the list of banned phrases
Note: Any banned phrases in this list will apply to
generators as well as
generative fallback responses.
In Agent Settings , navigate to the Generative AI tab, and then the
General sub-tab.
In the Banned phrases section, inspect, add to, or remove phrases from
the list.
Click Save .
Test generative fallback
You can test the generative fallback feature in the simulator. Whenever a user
utterance leads to no-match on a flow/page where the no-match event was
configured to produce a generative response (and the generation succeeds), the
agent will output the generated response.
Codelab
Also see the Generative fallback
Codelab .
Troubleshooting
Note: The steps outlined in this section are only available for non-default
prompt templates .
If you want to debug the feature, you can inspect the resolved large language
model (LLM) input prompt in Dialogflow Console simulator:
Click the original response button:
Locate the "Generative Fallback Prompt" field. Read these fields as plain
text and check whether the LLM input makes sense. If any phrase contains
$ , examine the simulator input and clarify whether the $ in the
prompts are intentional (for example, $ in price is $10 would likely
be intentional, while visit $city would likely not and could imply either
mis-usage or a bug). If you are unsure, contact Support .
If you are using a non-default prompt template but can't see the "Generative
Fallback Prompt" field,
contact Support .
Previous
arrow_back
Generators
Next
Overview
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
