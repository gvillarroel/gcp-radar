---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.444Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Agent Assist console"
feature_slug: "agent-assist-console"
latest_feature_date: "2022-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/conversation-profile"
  - "https://docs.cloud.google.com/agent-assist/docs/article-suggestion"
  - "https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist"
keywords:
  - "built-in workflow tutorials"
  - "sample datasets"
  - "demo models"
  - "AA console"
  - "Agent Assist UI console"
  - "Agent Assist console"
  - "console GA"
---

# Agent Assist console

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

The Agent Assist console has reached GA and now includes built-in workflow tutorials, sample datasets, and demo models.

## Extended Definition

The Agent Assist console is a Google Cloud UI used to create and manage Agent Assist conversation profiles and to test suggestion capabilities (such as Article Suggestion and generative knowledge assist) during design-time and model-testing workflows. It supports tutorial-driven setup and allows users to perform console-based actions or simulator/UI testing in place of direct API calls, while runtime usage still requires calling the Agent Assist API directly.

## Evidence Summary

These pages describe the Agent Assist console as a design-time interface for creating conversation profiles, following tutorials, and testing suggestion features, with runtime behavior routed to direct API calls.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/conversation-profile](https://docs.cloud.google.com/agent-assist/docs/conversation-profile)
- [https://docs.cloud.google.com/agent-assist/docs/article-suggestion](https://docs.cloud.google.com/agent-assist/docs/article-suggestion)
- [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)

## Supporting Pages

### Create a conversation profile \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/conversation-profile](https://docs.cloud.google.com/agent-assist/docs/conversation-profile)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: STRONG
- Re-rank rationale: This page explicitly describes creating conversation profiles in the Agent Assist console, using console tutorials, and notes that the console is only for design-time/model testing while runtime requires API calls.

Evidence snippets:
- Create a conversation profile Use the following resources to create a conversation profile: Agent Assist console Application programming interface (API) We recommend that you use the console tutorials first, as follows.
- To create a conversation profile, you can click the Conversation Profile tab in the Agent Assist console or you can use the console tutorials.
- Note: You can only use the Agent Assist console during design-time and model testing phases.
- Navigate to the Agent Assist console.

### Article Suggestion \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/article-suggestion](https://docs.cloud.google.com/agent-assist/docs/article-suggestion)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: The page references the Agent Assist Console as an option for design-time testing and setup, which is relevant context but not a detailed definition of the console feature itself.

Evidence snippets:
- You have the option of using the Agent Assist Console to test your Article Suggestion results during design-time, but you must call the API directly during runtime.
- You can also perform these actions using the Agent Assist Console if you would prefer not to call the API directly.
- You can also perform these actions using the Agent Assist Console if you would prefer not to call the API directly.
- See the tutorials section for details about testing feature performance using the Agent Assist Console.

### Generative knowledge assist \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions creating a conversation profile through the Agent Assist console, but does not describe console-specific GA capabilities like built-in tutorials or demo models.

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID LOCATION ID : the ID for your location AGENT ID : your flow-based or playbook-based data store agent ID from the previous step The following is a JSON example: { "displayName" : "my-conversation-profile-display-name" , "humanAgentAssistantConfig" : { "humanAgentSuggestionConfig" : { "featureConfigs" : [ { "suggestionFeature" : { "type" : "KNOWLEDGE SEARCH" }, "queryConfig" : { "dialogflowQuerySource" : { "humanAgentSideConfig" : { "agent" : "projects/ PROJECT ID /locations/ LOCATION ID /agents/ AGENT ID " } } }, "disableAgentQueryLogging" : false , "enableConversationAugmentedQuery" : false , } ] } } } When you create a conversation profile in the Agent Assist console, Agent Assist automatically enables both generative knowledge assist and proactive generative knowledge assist.
- Step 1: Create a conversation profile We recommend that you create a conversation profile using the Agent Assist console , but you can also use the API.
- You can manually submit the suggested query to the SearchKnowledge API and automatically submit in the Agent Assist console simulator and UI modules.
- Step 1: Create a conversation profile Create a conversation profile using the Agent Assist console or the API.

