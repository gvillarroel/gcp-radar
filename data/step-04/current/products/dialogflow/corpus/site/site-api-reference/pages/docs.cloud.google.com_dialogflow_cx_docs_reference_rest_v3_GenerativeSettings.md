---
title: "GenerativeSettings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/GenerativeSettings
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/GenerativeSettings
  title: "GenerativeSettings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Reference
Send feedback
GenerativeSettings
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
FallbackSettings
JSON representation
PromptTemplate
JSON representation
SafetySettings
JSON representation
PhraseMatchStrategy
Phrase
JSON representation
RaiSettings
JSON representation
CategoryFilter
JSON representation
SafetyCategory
SafetyFilterLevel
PromptSecuritySettings
JSON representation
KnowledgeConnectorSettings
JSON representation
Settings for Generative AI.
JSON representation
{
"name" : string ,
"fallbackSettings" : {
object ( FallbackSettings )
} ,
"generativeSafetySettings" : {
object ( SafetySettings )
} ,
"knowledgeConnectorSettings" : {
object ( KnowledgeConnectorSettings )
} ,
"languageCode" : string ,
"llmModelSettings" : {
object ( LlmModelSettings )
}
}
Fields
name
string
Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/generativeSettings .
fallbackSettings
object ( FallbackSettings )
Settings for Generative Fallback.
generativeSafetySettings
object ( SafetySettings )
Settings for Generative Safety.
knowledgeConnectorSettings
object ( KnowledgeConnectorSettings )
Settings for knowledge connector.
languageCode
string
Language for this settings.
llmModelSettings
object ( LlmModelSettings )
LLM model settings.
FallbackSettings
Settings for Generative Fallback.
JSON representation
{
"selectedPrompt" : string ,
"promptTemplates" : [
{
object ( PromptTemplate )
}
]
}
Fields
selectedPrompt
string
Display name of the selected prompt.
promptTemplates[]
object ( PromptTemplate )
Stored prompts that can be selected, for example default templates like "conservative" or "chatty", or user defined ones.
PromptTemplate
Prompt template.
JSON representation
{
"displayName" : string ,
"promptText" : string ,
"frozen" : boolean
}
Fields
displayName
string
Prompt name.
promptText
string
Prompt text that is sent to a LLM on no-match default, placeholders are filled downstream. For example: "Here is a conversation $conversation, a response is: "
frozen
boolean
If the flag is true, the prompt is frozen and cannot be modified by users.
SafetySettings
Settings for Generative Safety.
JSON representation
{
"defaultBannedPhraseMatchStrategy" : enum ( PhraseMatchStrategy ) ,
"bannedPhrases" : [
{
object ( Phrase )
}
] ,
"raiSettings" : {
object ( RaiSettings )
} ,
"defaultRaiSettings" : {
object ( RaiSettings )
} ,
"promptSecuritySettings" : {
object ( PromptSecuritySettings )
}
}
Fields
defaultBannedPhraseMatchStrategy
enum ( PhraseMatchStrategy )
Optional. Default phrase match strategy for banned phrases.
bannedPhrases[]
object ( Phrase )
Banned phrases for generated text.
raiSettings
object ( RaiSettings )
Optional. Settings for Responsible AI checks.
defaultRaiSettings
object ( RaiSettings )
Optional. Immutable. Default RAI settings to be annotated on the agent, so that users will be able to restore their RAI configurations to the default settings. Read-only field for the API proto only.
promptSecuritySettings
object ( PromptSecuritySettings )
Optional. Settings for prompt security checks.
PhraseMatchStrategy
Strategy for matching phrases.
Enums
PHRASE_MATCH_STRATEGY_UNSPECIFIED
Unspecified, defaults to PARTIAL_MATCH.
PARTIAL_MATCH
Text that contains the phrase as a substring will be matched, e.g. "foo" will match "afoobar".
WORD_MATCH
Text that contains the tokenized words of the phrase will be matched, e.g. "foo" will match "a foo bar" and "foo bar", but not "foobar".
Phrase
Text input which can be used for prompt or banned phrases.
JSON representation
{
"text" : string ,
"languageCode" : string
}
Fields
text
string
Required. Text input which can be used for prompt or banned phrases.
languageCode
string
Required. Language code of the phrase.
RaiSettings
Settings for Responsible AI.
JSON representation
{
"categoryFilters" : [
{
object ( CategoryFilter )
}
]
}
Fields
categoryFilters[]
object ( CategoryFilter )
Optional. RAI blocking configurations.
CategoryFilter
Configuration of the sensitivity level for blocking an RAI category.
JSON representation
{
"category" : enum ( SafetyCategory ) ,
"filterLevel" : enum ( SafetyFilterLevel )
}
Fields
category
enum ( SafetyCategory )
RAI category to configure.
filterLevel
enum ( SafetyFilterLevel )
Blocking sensitivity level to configure for the RAI category.
SafetyCategory
RAI categories to configure.
Enums
SAFETY_CATEGORY_UNSPECIFIED
Unspecified.
DANGEROUS_CONTENT
Dangerous content.
HATE_SPEECH
Hate speech.
HARASSMENT
Harassment.
SEXUALLY_EXPLICIT_CONTENT
Sexually explicit content.
SafetyFilterLevel
Sensitivity level for RAI categories.
Enums
SAFETY_FILTER_LEVEL_UNSPECIFIED
Unspecified -- uses default sensitivity levels.
BLOCK_NONE
Block no text -- effectively disables the category.
BLOCK_FEW
Block a few suspicious texts.
BLOCK_SOME
Block some suspicious texts.
BLOCK_MOST
Block most suspicious texts.
PromptSecuritySettings
Settings for prompt security checks.
JSON representation
{
"enablePromptSecurity" : boolean
}
Fields
enablePromptSecurity
boolean
Optional. Enable prompt security checks.
KnowledgeConnectorSettings
Settings for knowledge connector. These parameters are used for LLM prompt like "You are . You are a helpful and verbose at , . Your task is to help humans on ".
JSON representation
{
"business" : string ,
"agent" : string ,
"agentIdentity" : string ,
"businessDescription" : string ,
"agentScope" : string ,
"disableDataStoreFallback" : boolean
}
Fields
business
string
Name of the company, organization or other entity that the agent represents. Used for knowledge connector LLM prompt and for knowledge search.
agent
string
Name of the virtual agent. Used for LLM prompt. Can be left empty.
agentIdentity
string
Identity of the agent, e.g. "virtual agent", "AI assistant".
businessDescription
string
Company description, used for LLM prompt, e.g. "a family company selling freshly roasted coffee beans".
agentScope
string
Agent scope, e.g. "Example company website", "internal Example company website for employees", "manual of car owner".
disableDataStoreFallback
boolean
Whether to disable fallback to Data Store search results (in case the LLM couldn't pick a proper answer). Per default the feature is enabled.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-20 UTC."],[],[]]
