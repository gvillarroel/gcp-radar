---
title: "Multilingual agents \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/es/docs/agents-multilingual
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/es/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/es/docs/agents-multilingual
  title: "Multilingual agents \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Multilingual agents
Stay organized with collections
Save and categorize content based on your preferences.
Dialogflow supports many languages.
For the complete list, see the
languages reference page .
The language you choose when creating an agent is set as the default language,
and you can add additional languages.
Root and locale-specific languages
There are two categories of languages:
Root languages :
These are languages like English (en) that do not specify a locale.
Locale-specific languages :
These are languages like English-US (en-US) that do specify a locale
as a specific region or country.
Some languages act as both root and locale-specific.
There are significant differences between locales for these languages,
so the locales cannot share a common root language.
Examples:
Chinese-Cantonese (zh-HK)
Chinese-Simplified (zh-CN)
Chinese-Traditional (zh-TW)
Portuguese-Brazil (pt-BR)
Portuguese-Portugal (pt)
You should primarily design your agent for root languages,
and only customize for locale-specific languages as needed.
Add a language
Note: As a best practice, you should complete your agent in the default language
before adding additional languages.
To add a language or locale with the Dialogflow ES console Console:
In the left sidebar menu,
click the add language add button
next to the existing language(s).
This takes you to the Languages tab of agent settings.
Choose a language from the Select Additional Language dropdown menu.
To add a locale, hover over a root language and click + Add locale .
Click Save .
Language-specific data
Note: The information in this section applies to both locale-specific and root
languages. For example; en , en-US , and en-GB each have unique data for
intent training phrases.
Most agent data is common for all languages of a multilingual agent.
However, text used to interact with an end-user is language-specific.
When building a multilingual agent, you must supply this language-specific data
for each language. When you select a language from the console or provide a
language to the API, you can access this language-specific data for the given
language. The following is a complete list of language-specific data:
intent training phrases
intent responses
entity entries
To access language-specific data with the console,
click the language button under the agent name.
For example, the size entity type below is used for ordering t-shirts.
The agent was originally configured in English, so the entity has entries like
"S" with the synonym "small". When Spanish is added as a language,
the entity is created by Dialogflow for the new language, but you need
to supply entity entries in Spanish.
Entity
Synonyms
XS
XS, extra pequeño
S
S, pequeño
M
M, medio
L
L, grande
XL
XL, extra grande
Language-specific data when using the API
To access language-specific data with the API,
provide the languageCode parameter when getting, creating, or updating
EntityType
or
Intent
types.
You must make separate API calls
for each language to access all language-specific data.
If your API calls update language-generic data,
that data is updated for all languages.
Test in the simulator
When using the
simulator ,
choose the language you want to use by selecting it below the agent name.
Supply a language using the API
When sending requests via the API, set the
queryInput.input.languageCode
field of the detectIntent method.
For more information, see the
Sessions type.
Requests that do not supply an agent's language
When Dialogflow receives a request
that does not supply a language supported by the agent,
the following rules apply:
When a request does not supply a language, Dialogflow automatically determines
the input language and responds in that language
if automatic language detection is enabled . If automatic language
detection is disabled, Dialogflow handles the request using the default
language.
When a request supplies a locale-specific language
that is not supported by the agent,
but the associated root language is supported by the agent,
Dialogflow handles the request using the root language.
System entity extraction is an exception to the previous rule.
System entity extraction uses the supplied locale-specific language,
even if the locale-specific language is not supported by the agent.
Integrations
Agent interactions through text-based
and phone gateway
integrations
only use the default language of the agent.
Previous
arrow_back
Versions and environments
Next
Mega agents
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
