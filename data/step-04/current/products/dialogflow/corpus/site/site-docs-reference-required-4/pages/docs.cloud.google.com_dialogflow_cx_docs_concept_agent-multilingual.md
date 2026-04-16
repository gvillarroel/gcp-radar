---
title: "Multilingual agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual
  title: "Multilingual agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Multilingual agents
Stay organized with collections
Save and categorize content based on your preferences.
Dialogflow supports many languages.
For the complete list, see the
languages reference page .
The language you choose when creating an agent is set as the default language,
and you can add additional languages.
Scope of language selection in the console and API
When selecting a language in the console or API,
this selection only affects flows for the agent.
For language selection with playbooks, see
playbook language support .
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
To add a language or locale with the Dialogflow CX console Console:
Open the Dialogflow CX console .
Choose the Google Cloud project for the agent.
Find the agent in the list.
Click the agent display name.
Click Agent Settings .
Click the Languages tab.
Add or remove languages as needed.
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
fulfillment responses
entity entries
To access language-specific data with the console,
click the language button at the top of the console.
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
AI generate language-specific data
Dialogflow CX gives you the option to speed up the process of adding
language-specific data by using AI generation to provide the data for you,
instead of manually entering it by hand. This can be done at the intent,
entity, and fulfillment level as a Preview feature.
If you opt not to use AI generation, you can still manually enter the data
for non-default languages.
Intent AI generation
Auto-generate training phrases in a
non-default language:
Go to Agent settings > Languages and make sure you have one or more
non-default languages enabled for your agent.
Navigate to the language drop-down menu at the top of the Console and select
your chosen non-default language.
Navigate to the Manage tab, then click Intents and choose one
of your intents. Make sure that the Description field is populated with
a description of the intent's purpose. The description can be in your
default language or in the language you are viewing.
When you enable a non-default language, Dialogflow CX does not translate any
existing training phrases into the new language. To create new training
phrases in the new language, click the __ newly LLM-generated phrases
radial button. The default value is 3. To copy and automatically
translate your existing training phrases, select All training phrases from
your Default Language translated by AI generation .
Click + Add . Your specified number of training phrases are generated
and populated into the table in the language you've selected. Make sure to
review all generated training phrases for accuracy.
(Preview) Entity AI generation
Note: Translate options are available only if there is no data in the
non-default language for all features.
Auto-generate and auto-translate
reference values and synonyms
in a non-default language:
Go to Agent settings > Languages and make sure you have one or more
non-default languages enabled for your agent.
Navigate to the language drop-down at the top of the Console and select your
chosen non-default language.
Navigate to the Manage tab, then click Entity types and choose one
of your entity types.
When you enable a non-default language, Dialogflow CX does not automatically
translate any existing reference values and synonyms. To auto-translate these
values into the new language, click + Copy from default language . All of
the original data from the default language entity type will be translated
into the new language and populated in the table. Be aware that translating
more than 50 items at a time can cause errors. Each reference and synonym
value counts as an item.
You can also add new reference values by clicking + Add new entry . You
can type a reference value in your default language, and both the reference
value and its synonyms will be automatically translated into the new
language.
(Preview) Fulfillment AI generation
AI generation is available for route, route groups, and event handler
fulfillment types. For more
information about these route types, see the
routes and
event handlers documentation.
This feature will only appear if you are viewing the agent in a non-default
language, and in one of the route types specified. Navigate to the
Fulfillment section of the route. To automatically copy and translate the
agent responses from your default language into the language you're
viewing, click Copy and translate . Be aware that translating more than 50
responses at a time can lead to errors.
Language-specific data when using the API
To access language-specific data with the API,
provide the languageCode parameter when getting, creating, or updating
EntityType , Intent , or Page types.
Go to the EntityType API reference
Select a protocol and version for the EntityType reference:
Protocol
V3
V3beta1
REST
EntityType resource
EntityType resource
RPC
EntityType interface
EntityType interface
C++
EntityTypesClient
Not available
C#
EntityTypesClient
Not available
Go
EntityTypesClient
Not available
Java
EntityTypesClient
EntityTypesClient
Node.js
EntityTypesClient
EntityTypesClient
PHP
Not available
Not available
Python
EntityTypesClient
EntityTypesClient
Ruby
Not available
Not available
Close
Go to the Intent API reference
Select a protocol and version for the Intent reference:
Protocol
V3
V3beta1
REST
Intent resource
Intent resource
RPC
Intent interface
Intent interface
C++
IntentsClient
Not available
C#
IntentsClient
Not available
Go
IntentsClient
Not available
Java
IntentsClient
IntentsClient
Node.js
IntentsClient
IntentsClient
PHP
Not available
Not available
Python
IntentsClient
IntentsClient
Ruby
Not available
Not available
Close
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
queryInput.languageCode
field of the detectIntent method.
For more information, see the
Sessions type.
Go to the Session API reference
Select a protocol and version for the Session reference:
Protocol
V3
V3beta1
REST
Session resource
Session resource
RPC
Session interface
Session interface
C++
SessionsClient
Not available
C#
SessionsClient
Not available
Go
SessionsClient
Not available
Java
SessionsClient
SessionsClient
Node.js
SessionsClient
SessionsClient
PHP
Not available
Not available
Python
SessionsClient
SessionsClient
Ruby
Not available
Not available
Close
Language auto detection
Note: This feature is available for chat conversations only. Note: At the moment, language detection only supports identifying languages with
major structural differences, and not variants of the same language. That means
Dialogflow is able to differentiate among languages like ["en",
"pt-br"], but not among variants of the same language like ["zh-tw",
"zh-cn"] or ["pt", "pt-br"].
If the end-user's query language differs from the language specified in the
request, Dialogflow can detect it and automatically switch to the
end-user's language. See the
language reference page for a list
of languages available for this feature. The LanguageInfo field in a
WebhookRequest
identifies the input language, resolved language, and confidence score when
language detection is enabled.
Enable language auto detection
You must enable language auto detection at both the agent and flow levels.
Go to Agent settings and select the Languages tab.
Check the box next to Enable language auto detection and switching to
enable this feature for the agent. Click Save to save your changes.
Select a flow and navigate to Flow settings . In the flow settings panel,
check the box next to Enable language auto detection and switching .
In the Languages drop-down menu, select the languages you want Dialogflow
to be able to respond in. Make sure that you only select languages that
are
supported by the language auto detect feature .
Click Save to save your changes.
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
integrations
only use the default language of the agent.
Previous
arrow_back
Integrations
Next
Call companion
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
