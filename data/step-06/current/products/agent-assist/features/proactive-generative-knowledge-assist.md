---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:50:35.078Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Proactive generative knowledge assist"
feature_slug: "proactive-generative-knowledge-assist"
latest_feature_date: "2024-10-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist"
  - "https://docs.cloud.google.com/agent-assist/docs/custom-events"
  - "https://docs.cloud.google.com/agent-assist/docs/features"
keywords:
  - "generative"
  - "proactive"
  - "functions"
  - "additional"
  - "knowledge"
  - "includes"
  - "expanded"
---

# Proactive generative knowledge assist

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Proactive Generative Knowledge Assist includes additional functions and expanded language support; Agent Assist introduces Proactive generative knowledge assist as GA, which automatically surfaces likely agent questions and answers.

## Extended Definition

Proactive Generative Knowledge Assist includes additional functions and expanded language support; Agent Assist introduces Proactive generative knowledge assist as GA, which automatically surfaces likely agent questions and answers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
- [https://docs.cloud.google.com/agent-assist/docs/custom-events](https://docs.cloud.google.com/agent-assist/docs/custom-events)
- [https://docs.cloud.google.com/agent-assist/docs/features](https://docs.cloud.google.com/agent-assist/docs/features)

## Supporting Pages

### Generative knowledge assist \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
- Source ID: `site-docs-reference-required-2`
- Final score: 337
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can also use the following configurations as part of your SearchKnowledge request: querySource : Set this field to indicate whether an agent typed the query or proactive generative knowledge assist automatically suggested it. exactSearch : Set this field to indicate whether to search the exact input query without query rewrite. endUserMetadata : Set this field to include additional information about the end user that improves the generated answer.
- Answer agent questions The following is an example JSON request for sending feedback about answering agent questions. { "name" : "projects/ PROJECT ID /locations/ LOCATION ID /answerRecords/ ANSWER RECORD ID " , "answerFeedback" : { "displayed" : true "clicked" : true "correctnessLevel" : "FULLY CORRECT" "agentAssistantDetailFeedback" : { "knowledgeSearchFeedback" : { "answerCopied" : true "clickedUris" : [ "url 1" , "url 2" , "url 3" , ] } } } } Proactively suggest Q&A The following is an example JSON request for sending feedback about proactive suggestions. { "name" : "projects/PROJECT ID/locations/LOCATION ID/answerRecords/ANSWER RECORD ID" , "answerFeedback" : { "displayed" : true "clicked" : true "correctnessLevel" : "FULLY CORRECT" "agentAssistantDetailFeedback" : { "knowledgeAssistFeedback" : { "answerCopied" : true "clickedUris" : [ "url 1" , "url 2" , "url 3" , ] } } } } Metadata If you configure metadata for a knowledge document, both generative knowledge assist and proactive generative knowledge assist will return the document's metadata along with the response.
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID LOCATION ID : the ID for your location AGENT ID : your flow-based or playbook-based data store agent ID from the previous step The following is a JSON example: { "displayName" : "my-conversation-profile-display-name" , "humanAgentAssistantConfig" : { "humanAgentSuggestionConfig" : { "featureConfigs" : [ { "suggestionFeature" : { "type" : "KNOWLEDGE SEARCH" }, "queryConfig" : { "dialogflowQuerySource" : { "humanAgentSideConfig" : { "agent" : "projects/ PROJECT ID /locations/ LOCATION ID /agents/ AGENT ID " } } }, "disableAgentQueryLogging" : false , "enableConversationAugmentedQuery" : false , } ] } } } When you create a conversation profile in the Agent Assist console, Agent Assist automatically enables both generative knowledge assist and proactive generative knowledge assist.
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID LOCATION ID : the ID for your location AGENT ID : your flow-based or playbook-based data store agent ID from the previous step The following is a JSON example: { "displayName" : "my-conversation-profile-display-name" , "humanAgentAssistantConfig" : { "humanAgentSuggestionConfig" : { "featureConfigs" : [ { "suggestionFeature" : { "type" : "KNOWLEDGE ASSIST" }, "queryConfig" : { "dialogflowQuerySource" : { "agent" : "projects/ PROJECT ID /locations/ LOCATION ID /agents/ AGENT ID " } }, "enableQuerySuggestionWhenNoAnswer" : false , } ] } } } Step 2: Handle conversations at runtime Proactive generative knowledge assist processes conversations at runtime to proactively provide search query suggestions based on the current conversation context and the answer.

### Custom events and custom UI module connectors | Agent Assist | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/custom-events](https://docs.cloud.google.com/agent-assist/docs/custom-events)
- Source ID: `feature-recovery-direct-http`
- Final score: 203
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Guides Reference Support Resources Technology areas More Agent Assist Site Selector More Guides Reference Support Resources Cross-product tools More Console Agent Assist Agent Assist console Documentation Overview Send feedback Concepts All concepts Agent Assist basics Agent Assist integrations Cloud logging field definitions Features All features AI Coach Overview Tool integration for AI coach Open API and Integration Connectors tools OpenAPI tool for Datastore Best practices Bidirectional API Build your own GenAI assist Build your own assist Build your own assist extension Extended streaming Implement Agent Assist using pre-built modules UI modules overview Implement UI modules and connectors UI modules Container V1 Container V2 Knowledge assist Generative knowledge assist Smart reply Summarization Transcript Agent desktop integration Custom events and custom UI module connectors UI module events Genesys Cloud integration Deploy the application server AudioHook voice integration Configuration for chat integration Test chat integration Twilio integration Twilio basics Deploy Twilio Flex Twilio SIPREC integration Salesforce integration Overview Salesforce chat integration Salesforce voice integration with Twilio Flex Salesforce voice integration with NiCE CXone LivePerson integration Basics Deploy the application server Deploy the proxy server Backend modules basics Integrate backend modules with your system (Proactive) Generative knowledge assist User guide Knowledge assist filters Skip PubSub notifications for empty suggestions Troubleshoot knowledge assist features Best practices Sentiment analysis Smart Reply Summarization Summarization with custom sections user guide Summarization with custom sections best practices Automatic evaluation basics Automatic evaluation user guide Automatic evaluation best practices Transcription Voice Transcription Transcription with Chirp 3 PubSub intermediate transcription How-to guides All how-to guides Enable Cloud Pub/Sub notifications Enable CMEK Enable real-time entity extraction Handoff a conversation CX Agent Studio Dialogflow CX Dialogflow ES Set up Speech-to-Text model adaptation Upload and export conversation data Upload conversation data Export conversation data Tutorials All tutorials Create a conversation profile Train an AI model Train a smart reply model Train a summarization custom model for chat Upload data Overview Conversation datasets Knowledge bases Use the Agent Assist simulator Deprecations Article suggestion FAQ Assist Knowledge documents best practices AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Public sites Agent Assist public features Agent Assist console Home Documentation AI and ML Agent Assist Guides Send feedback Custom events and custom UI module connectors Stay organized with collections Save and categorize content based on your preferences.
- For Generative Knowledge Assist, update the agent's input field whenever a knowledge assist answer is pasted into the input box.
- Event name: knowledge-assist-v2-answer-pasted .

### Features \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/features](https://docs.cloud.google.com/agent-assist/docs/features)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Implement Agent Assist using pre-built modules Integrate Agent Assist into your agents' console. (Proactive) Generative knowledge assist Automatically answer your agent's questions based on documents you provide.

