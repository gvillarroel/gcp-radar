---
title: "Data store tool settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/access-control
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings
  title: "Data store tool settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Data store tool settings
Stay organized with collections
Save and categorize content based on your preferences.
The following
data store tool
configuration settings are available.
Tool settings (Conversational Agents console only)
Selecting an option from the Tool settings drop-down menu automatically
affects which other tool configurations are available.
The Default and Optimized for voice options are default settings that will
automatically configure all other parameters in the tool configuration menu.
The following options are available:
Tool setting name
Description
Default
Optimized for all agent types.
Optimized for voice
This default tool type has been configured specifically for voice agents.
Customize
Choosing the Customize option lets you specify your own Grounding , Rewriter , and Summarization parameters instead of using the Default and Optimized for voice assigned defaults.
Grounding
Dialogflow CX calculates a confidence level for each response generated from the
content of your connected data stores. This gauges the confidence that all
information in the response is supported by information in the data stores.
You can adjust which responses are allowed by selecting the lowest confidence
level you are comfortable with. You can select
the lowest confidence level allowed, and the agent won't return responses lower
than that level.
There are 5 confidence levels to choose from: VERY_LOW , LOW , MEDIUM ,
HIGH , and VERY_HIGH .
You can also apply a grounding heuristics filter. If enabled, responses
containing content that is likely inaccurate based on common hallucinations are
suppressed.
Select summarization model
You can select the generative model used by a data store agent for the
summarization generative request. The following table contains the available
options:
Model Name
Launch Stage
Model Spec
Default
GA
This is the recommended configuration and is subject to change over time. If you
use this option, you may experience changes in agent behavior (likely improvements).
If you would like more consistency in agent behavior, select a specific model.
Disabled
GA
Only supported under Customer Engagement AI. Disables the summarization component
under Data Store Tool. Latency will improve, but quality will be degraded.
Summarization by agent
GA
Only supported under Customer Engagement AI. This option delegates
summarization to the agent. It is specifically optimized for voice interactions
with optimized latency.
gemini-2.5-flash
GA
Gemini 2.5 flash
gemini-2.5-flash-lite
GA
Gemini 2.5 flash lite
gemini-2.0-flash-001
GA
Gemini 2.0 flash
gemini-2.0-flash-lite-001
GA
Gemini 2.0 flash lite
gemini-2.0-flash-lite-001-voice-mode
GA
Gemini 2.0 flash lite
optimized for voice.
All listed models are available in all
supported languages and
supported regions .
Summarization custom prompt
Note: Providing a custom prompt might influence the quality of answers either
positively or negatively. You are responsible for the quality of the answers.
You can either use a default summarization prompt with your selected
summarization model or provide your own. The prompt is a text template that may
contain predefined placeholders. The placeholders will be replaced with the
appropriate values at runtime and the final text will be sent to the LLM.
The placeholders are as follows:
$original-query : The user's query text.
$rewritten-query : Dialogflow uses a rewriter module to rewrite
the original user query into a more accurate format.
$sources : Dialogflow uses Enterprise Search to search for sources
based on the user's query. The found sources are rendered in a specific
format:
[1] title of first source
content of first source
[2] title of second source
content of second source
$end-user-metadata : Information about the user sending the query is
rendered in the following format:
The following additional information is available about the human: {
"key1": "value1",
"key2": "value2",
...
}
$conversation : The conversation history is rendered in the following
format:
Human: user's first query
AGENT: answer to user's first query
Human: user's second query
AGENT: answer to user's second query
${conversation USER:"<user prefix>" AGENT:"<agent prefix>" TURNS:<turn
count>} : A parameterized version of the $conversation placeholder. You
can customize the end-user prefix ( USER ), the agent prefix ( AGENT ), and the
number of previous turns to include ( TURNS ). All placeholder parameter
values must be specified.
For example, ${conversation USER:"Human says:" AGENT:"Agent says:" TURNS:1} .
The conversation history is rendered as:
Human says: user's first query
Agent says: answer to user's first query
Important: The placeholders $original-query (or $rewritten-query ) and
$sources are required in custom prompts. You will be prevented from saving
prompts missing these placeholders because the agent won't function
correctly without them. The $conversation placeholder is recommended -
without it the agent won't be able to use contextual information from the
conversation to answer questions.
A custom prompt should instruct the LLM to return "NOT_ENOUGH_INFORMATION" when
it cannot provide an answer. In this case, the agent will invoke a no-match
event .
For example:
Given the conversation between a Human and a AI assistant and a list of sources,
write a final answer for the AI assistant.
Follow these guidelines:
+ Answer the Human's query and make sure you mention all relevant details from
the sources, using exactly the same words as the sources if possible.
+ The answer must be based only on the sources and not introduce any additional
information.
+ All numbers, like price, date, time or phone numbers must appear exactly as
they are in the sources.
+ Give as comprehensive answer as possible given the sources. Include all
important details, and any caveats and conditions that apply.
+ The answer MUST be in English.
+ Don't try to make up an answer: If the answer cannot be found in the sources,
you admit that you don't know and you answer NOT_ENOUGH_INFORMATION.
You will be given a few examples before you begin.
Example 1:
Sources:
[1] <product or service> Info Page
Yes, <company> offers <product or service> in various options or variations.
Human: Do you sell <product or service>?
AI: Yes, <company> sells <product or service>. Is there anything else I can
help you with?
Example 2:
Sources:
[1] Andrea - Wikipedia
Andrea is a given name which is common worldwide for both males and females.
Human: How is the weather?
AI: NOT_ENOUGH_INFORMATION
Begin! Let's work this out step by step to be sure we have the right answer.
Sources:
$sources
$end-user-metadata
$conversation
Human: $original-query
AI:
Select rewriter model
Note: Providing a custom prompt might influence the quality of answers either
positively or negatively. You are responsible for the quality of the answers.
When a user query is processed, the agent sends the user query and a prompt to
the LLM to refactor the user query, which performs a rewriter .
You can select the generative model used by a data store agent for the
rewriter generative request. The following table lists the available
options:
Model Name
Launch Stage
Model Spec
Default
GA
This is the recommended configuration and is subject to change over time. If you
use this option, you may experience changes in agent behavior (likely improvements).
If you would like more consistency in agent behavior, select a specific model.
Disabled Rewriter
GA
No query rewrite will occur. Latency will improve, but quality will be degraded. In
particular, the data store tool may struggle to answer questions that require
context from conversation history.
rewrite-by-agent.
GA
Only supported under Customer Engagement AI. This option delegates rewrite to the
agent. It is optimized for both voice and text with optimized latency
gemini-2.5-flash
GA
Gemini 2.5 flash
gemini-2.5-flash-lite
GA
Gemini 2.5 flash lite
gemini-2.0-flash-001
GA
Gemini 2.0 flash
gemini-2.0-flash-lite-001
GA
Gemini 2.0 flash lite
All listed models are available in all
supported languages and
supported regions .
Rewriter custom prompt
You can use a default prompt or optionally provide your own. The prompt is a
text template that may contain predefined placeholders. The placeholders will be
replaced with the appropriate values at runtime and the final text will be sent
to the LLM.
The placeholders and required text are as follows:
$original-query : The user's query text.
$conversation : The conversation history is rendered in the following
format:
Human: user's first query
AGENT: answer to user's first query
Human: user's second query
AGENT: answer to user's second query
${conversation USER:"<user prefix>" AGENT:"<agent prefix>" TURNS:<turn
count>} : A parameterized version of the $conversation placeholder. You
can customize the end-user prefix ( USER ), the agent prefix ( AGENT ), and the
number of previous turns to include ( TURNS ). All placeholder parameter
values must be specified.
For example, ${conversation USER:"Human says:" AGENT:"Agent says:" TURNS:1} .
The conversation history is rendered as:
Human says: user's first query
Agent says: answer to user's first query
$end-user-metadata : Information about the user sending the query is
rendered in the following format:
The following additional information is available about the human: {
"key1": "value1",
"key2": "value2",
...
}
For example:
Your goal is to perform a search query to help the AI assistant respond to the human's last statement.
* Always output the best search query you can, even if you suspect it's not needed.
* Never generate a query that is the same as the user's last statement.
* Include as much context as necessary from the conversation history.
* Output a concise search query, and nothing else.
* Don't use quotes or search operators.
* The query must be in ${ language ! } .
Conversation History: $conversation
Human: $original -query
Search Query:
Payload settings
Payload settings provide a way to add the data store snippets as rich content in
the response payload, which is rendered in the messenger .
You have the option of turning this feature on or off.
Data store tool search configuration
You can configure dynamic search parameters to fine-tune your results based on
context from an ongoing conversation. See the
search configuration documentation
for details.
Previous
arrow_back
Data store tools
Next
Data store performance improvements
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
