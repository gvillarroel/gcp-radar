---
title: "Intents \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/docs/intents-overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/docs
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/docs/intents-overview
  title: "Intents \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Intents
Stay organized with collections
Save and categorize content based on your preferences.
An
intent
categorizes an end-user's intention for one conversation turn.
For each agent, you define many intents,
where your combined intents can handle a complete conversation.
When an end-user writes or says something,
referred to as an end-user expression ,
Dialogflow matches the end-user expression to the best intent in your agent.
Matching an intent is also known as intent classification .
For example, you could create a weather agent
that recognizes and responds to end-user questions about the weather.
You would likely define an intent for questions about the weather forecast.
If an end-user says "What's the forecast?",
Dialogflow would match that end-user expression to the forecast intent.
You can also define your intent to extract useful information from the end-user expression,
like a time or location for the desired weather forecast.
This extracted data is important for your system
to perform a weather query for the end-user.
A basic intent contains the following:
Training phrases :
These are example phrases for what end-users might say.
When an end-user expression resembles one of these phrases,
Dialogflow matches the intent.
You don't have to define every possible example,
because Dialogflow's built-in machine learning expands on your list with other,
similar phrases.
Action :
You can define an action for each intent.
When an intent is matched,
Dialogflow provides the action to your system,
and you can use the action to trigger certain actions defined in your system.
Parameters :
When an intent is matched at runtime,
Dialogflow provides the extracted values from the end-user expression as
parameters .
Each parameter has a type, called the
entity type ,
which dictates exactly how the data is extracted.
Unlike raw end-user input,
parameters are structured data that can easily be used to perform some logic or generate responses.
Responses :
You define text, speech, or visual responses to return to the end-user.
These may provide the end-user with answers,
ask the end-user for more information,
or terminate the conversation.
The following diagram shows the basic flow for intent matching and responding to the end-user:
A more complex intent may also contain the following:
Contexts :
Dialogflow contexts are similar to natural language context.
If a person says to you "they are orange",
you need context in order to understand what the person is referring to.
Similarly, for Dialogflow to handle an end-user expression like that,
it needs to be provided with context in order to correctly match an intent.
Events :
With events, you can invoke an intent based on something that has happened,
instead of what an end-user communicates.
Previous
arrow_back
Agent settings
Next
Create and manage intents
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
