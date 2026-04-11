---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.440Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Proactive generative knowledge assist"
feature_slug: "proactive-generative-knowledge-assist"
latest_feature_date: "2024-10-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist"
  - "https://docs.cloud.google.com/agent-assist/docs/conversation-profile"
keywords:
  - "agent-facing suggested answers"
  - "proactive generative knowledge assist GA"
  - "auto-generated knowledge suggestions"
  - "likely question surfacing"
  - "Proactive Generative Knowledge Assist"
  - "proactive knowledge assist"
  - "expanded language support"
  - "PGKA"
---

# Proactive generative knowledge assist

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Proactive Generative Knowledge Assist includes additional functions and expanded language support; Agent Assist introduces Proactive generative knowledge assist as GA, which automatically surfaces likely agent questions and answers.

## Extended Definition

Proactive generative knowledge assist is an Agent Assist capability that can be configured in a conversation profile to automatically provide generative knowledge suggestions during live conversations, including proactive search-query suggestions based on the current conversation context and answer. Enabling it requires a flow-based or playbook-based data store agent, can be configured via conversation-profile suggestion settings (such as KNOWLEDGE ASSIST/KNOWLEDGE SEARCH), and returns supporting metadata and suggestion feedback fields for both answered and proactively suggested responses.

## Evidence Summary

The cited pages define configuration prerequisites, runtime behavior, and API-based behavior for proactive generative knowledge assist, but do not provide complete product-announcement details such as GA status, exact launch date, or language coverage.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
- [https://docs.cloud.google.com/agent-assist/docs/conversation-profile](https://docs.cloud.google.com/agent-assist/docs/conversation-profile)

## Supporting Pages

### Generative knowledge assist \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: STRONG
- Re-rank rationale: It explicitly defines proactive generative knowledge assist, including how it follows live conversations and proactively suggests queries based on context.

Evidence snippets:
- Answer agent questions The following is an example JSON request for sending feedback about answering agent questions. { "name" : "projects/ PROJECT ID /locations/ LOCATION ID /answerRecords/ ANSWER RECORD ID " , "answerFeedback" : { "displayed" : true "clicked" : true "correctnessLevel" : "FULLY CORRECT" "agentAssistantDetailFeedback" : { "knowledgeSearchFeedback" : { "answerCopied" : true "clickedUris" : [ "url 1" , "url 2" , "url 3" , ] } } } } Proactively suggest Q&A The following is an example JSON request for sending feedback about proactive suggestions. { "name" : "projects/PROJECT ID/locations/LOCATION ID/answerRecords/ANSWER RECORD ID" , "answerFeedback" : { "displayed" : true "clicked" : true "correctnessLevel" : "FULLY CORRECT" "agentAssistantDetailFeedback" : { "knowledgeAssistFeedback" : { "answerCopied" : true "clickedUris" : [ "url 1" , "url 2" , "url 3" , ] } } } } Metadata If you configure metadata for a knowledge document, both generative knowledge assist and proactive generative knowledge assist will return the document's metadata along with the response.
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID LOCATION ID : the ID for your location AGENT ID : your flow-based or playbook-based data store agent ID from the previous step The following is a JSON example: { "displayName" : "my-conversation-profile-display-name" , "humanAgentAssistantConfig" : { "humanAgentSuggestionConfig" : { "featureConfigs" : [ { "suggestionFeature" : { "type" : "KNOWLEDGE SEARCH" }, "queryConfig" : { "dialogflowQuerySource" : { "humanAgentSideConfig" : { "agent" : "projects/ PROJECT ID /locations/ LOCATION ID /agents/ AGENT ID " } } }, "disableAgentQueryLogging" : false , "enableConversationAugmentedQuery" : false , } ] } } } When you create a conversation profile in the Agent Assist console, Agent Assist automatically enables both generative knowledge assist and proactive generative knowledge assist.
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID LOCATION ID : the ID for your location AGENT ID : your flow-based or playbook-based data store agent ID from the previous step The following is a JSON example: { "displayName" : "my-conversation-profile-display-name" , "humanAgentAssistantConfig" : { "humanAgentSuggestionConfig" : { "featureConfigs" : [ { "suggestionFeature" : { "type" : "KNOWLEDGE ASSIST" }, "queryConfig" : { "dialogflowQuerySource" : { "agent" : "projects/ PROJECT ID /locations/ LOCATION ID /agents/ AGENT ID " } }, "enableQuerySuggestionWhenNoAnswer" : false , } ] } } } Step 2: Handle conversations at runtime Proactive generative knowledge assist processes conversations at runtime to proactively provide search query suggestions based on the current conversation context and the answer.
- You can also use the following configurations as part of your SearchKnowledge request: querySource : Set this field to indicate whether an agent typed the query or proactive generative knowledge assist automatically suggested it. exactSearch : Set this field to indicate whether to search the exact input query without query rewrite. endUserMetadata : Set this field to include additional information about the end user that improves the generated answer.

### Create a conversation profile \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/conversation-profile](https://docs.cloud.google.com/agent-assist/docs/conversation-profile)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: STRONG
- Re-rank rationale: The page identifies proactive generative knowledge assist as a conversation profile suggestion type and specifies required setup (data store agent type) and API-based implementation for runtime use.

Evidence snippets:
- For instructions on how to send API calls, see the Agent Assist how-to guides Before you begin To implement (proactive) generative knowledge assist, you must create a flow-based data store agent or playbook-based data store agent .
- If it's a human agent, you can also configure the category of suggestions to appear: summarization with custom sections or (proactive) generative knowledge assist.
- For (proactive) generative knowledge assist feature you can use the Application programming interface (API) method as well.

