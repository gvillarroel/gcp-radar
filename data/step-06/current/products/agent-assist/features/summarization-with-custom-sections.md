---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:50:35.069Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Summarization with custom sections"
feature_slug: "summarization-with-custom-sections"
latest_feature_date: "2025-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/custom-events"
  - "https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist"
  - "https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide"
keywords:
  - "delivers"
  - "sections"
  - "custom"
  - "summarization"
  - "version"
  - "generally"
  - "available"
---

# Summarization with custom sections

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Delivers Summarization with custom sections version 5.0 as generally available in all Agent Assist regions; Summarization with custom sections in version 4.0 is generally available in Agent Assist, using Gemini 2.0 Flash to generate concise situation and action summaries.

## Extended Definition

Delivers Summarization with custom sections version 5.0 as generally available in all Agent Assist regions; Summarization with custom sections in version 4.0 is generally available in Agent Assist, using Gemini 2.0 Flash to generate concise situation and action summaries.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/custom-events](https://docs.cloud.google.com/agent-assist/docs/custom-events)
- [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
- [https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide](https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide)

## Supporting Pages

### Custom events and custom UI module connectors | Agent Assist | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/custom-events](https://docs.cloud.google.com/agent-assist/docs/custom-events)
- Source ID: `feature-recovery-direct-http`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Guides Reference Support Resources Technology areas More Agent Assist Site Selector More Guides Reference Support Resources Cross-product tools More Console Agent Assist Agent Assist console Documentation Overview Send feedback Concepts All concepts Agent Assist basics Agent Assist integrations Cloud logging field definitions Features All features AI Coach Overview Tool integration for AI coach Open API and Integration Connectors tools OpenAPI tool for Datastore Best practices Bidirectional API Build your own GenAI assist Build your own assist Build your own assist extension Extended streaming Implement Agent Assist using pre-built modules UI modules overview Implement UI modules and connectors UI modules Container V1 Container V2 Knowledge assist Generative knowledge assist Smart reply Summarization Transcript Agent desktop integration Custom events and custom UI module connectors UI module events Genesys Cloud integration Deploy the application server AudioHook voice integration Configuration for chat integration Test chat integration Twilio integration Twilio basics Deploy Twilio Flex Twilio SIPREC integration Salesforce integration Overview Salesforce chat integration Salesforce voice integration with Twilio Flex Salesforce voice integration with NiCE CXone LivePerson integration Basics Deploy the application server Deploy the proxy server Backend modules basics Integrate backend modules with your system (Proactive) Generative knowledge assist User guide Knowledge assist filters Skip PubSub notifications for empty suggestions Troubleshoot knowledge assist features Best practices Sentiment analysis Smart Reply Summarization Summarization with custom sections user guide Summarization with custom sections best practices Automatic evaluation basics Automatic evaluation user guide Automatic evaluation best practices Transcription Voice Transcription Transcription with Chirp 3 PubSub intermediate transcription How-to guides All how-to guides Enable Cloud Pub/Sub notifications Enable CMEK Enable real-time entity extraction Handoff a conversation CX Agent Studio Dialogflow CX Dialogflow ES Set up Speech-to-Text model adaptation Upload and export conversation data Upload conversation data Export conversation data Tutorials All tutorials Create a conversation profile Train an AI model Train a smart reply model Train a summarization custom model for chat Upload data Overview Conversation datasets Knowledge bases Use the Agent Assist simulator Deprecations Article suggestion FAQ Assist Knowledge documents best practices AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Public sites Agent Assist public features Agent Assist console Home Documentation AI and ML Agent Assist Guides Send feedback Custom events and custom UI module connectors Stay organized with collections Save and categorize content based on your preferences.
- To manually dispatch a custom event, use the following syntax: dispatchAgentAssistEvent ( 'event_name' , { detail : event_payload , }); The following example shows how to dispatch the analyze-content-received event: if (newMessageFromHumanAgent) { dispatchAgentAssistEvent('analyze-content-received', { detail: { participantRole: 'HUMAN_AGENT', request: { textInput: {text: newMessageFromHumanAgent}, messageSendTime: new Date().toISOString() } } }); } After a you dispatch a custom event, you will see the following in the UI module connector service: this . api . analyzeContent (...) . then ( function ( response ) { dispatchAgentAssistEvent('analyze-content-response-received', { detail : { response : response } } ); } ); And you will see the following in the module: addAgentAssistEventListener('analyze-content-response-received', function (event) { // Use the AnalyzeContent response to render suggestions in the UI. }); To manually subscribe to a custom event, use the following syntax: addAgentAssistEventListener ( 'event_name' , function ( event ) { // ` event . detail ` contains the event payload . }); The following example shows a custom event subscription: addAgentAssistEventListener('smart-reply-selected', function (event) { var chipContent = event.details; // Populate the agent chat box with the selected Smart Reply chip. }); Custom UI module connectors You can also use custom events to create your own custom UI module connectors, which allow you to integrate the UI modules into an agent desktop that isn't supported by Agent Assist.
- Custom events and custom UI module connectors | Agent Assist | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Agent Assist Start free Agent Assist Site Selector Public sites Agent Assist public features Guides, examples, and references for Agent Assist public features.
- Event name: dark-mode-toggled In addition, a custom UI module connector must subscribe to the following events to update the agent desktop UI where applicable: For Smart Reply, update the agent's input field whenever a Smart Reply chip is selected.

### "User guide: Summarization automatic evaluation \_|\_ Agent Assist \_|\_\

- URL: [https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide](https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This feature helps you to evaluate the quality of summarization generators, which is crucial when tuning custom section definitions or upgrading software that affect summarization models.
- Step 1: Create a new version of your summarization generator If you don't already use a summarization generator, follow the instructions to create one that uses summarization version 4.0.
- Compare summarization generator versions You can also use summarization autoevaluation to compare summaries from different versions of a summarization generator.
- Then, follow these steps to create a second generator that uses summarization version 5.0: Navigate to the Agent Assist console > Summarization page.

### Generative knowledge assist | Agent Assist | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
- Source ID: `feature-recovery-direct-http`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Guides Reference Support Resources Technology areas More Agent Assist Site Selector More Guides Reference Support Resources Cross-product tools More Console Agent Assist Agent Assist console Documentation Overview Send feedback Concepts All concepts Agent Assist basics Agent Assist integrations Cloud logging field definitions Features All features AI Coach Overview Tool integration for AI coach Open API and Integration Connectors tools OpenAPI tool for Datastore Best practices Bidirectional API Build your own GenAI assist Build your own assist Build your own assist extension Extended streaming Implement Agent Assist using pre-built modules UI modules overview Implement UI modules and connectors UI modules Container V1 Container V2 Knowledge assist Generative knowledge assist Smart reply Summarization Transcript Agent desktop integration Custom events and custom UI module connectors UI module events Genesys Cloud integration Deploy the application server AudioHook voice integration Configuration for chat integration Test chat integration Twilio integration Twilio basics Deploy Twilio Flex Twilio SIPREC integration Salesforce integration Overview Salesforce chat integration Salesforce voice integration with Twilio Flex Salesforce voice integration with NiCE CXone LivePerson integration Basics Deploy the application server Deploy the proxy server Backend modules basics Integrate backend modules with your system (Proactive) Generative knowledge assist User guide Knowledge assist filters Skip PubSub notifications for empty suggestions Troubleshoot knowledge assist features Best practices Sentiment analysis Smart Reply Summarization Summarization with custom sections user guide Summarization with custom sections best practices Automatic evaluation basics Automatic evaluation user guide Automatic evaluation best practices Transcription Voice Transcription Transcription with Chirp 3 PubSub intermediate transcription How-to guides All how-to guides Enable Cloud Pub/Sub notifications Enable CMEK Enable real-time entity extraction Handoff a conversation CX Agent Studio Dialogflow CX Dialogflow ES Set up Speech-to-Text model adaptation Upload and export conversation data Upload conversation data Export conversation data Tutorials All tutorials Create a conversation profile Train an AI model Train a smart reply model Train a summarization custom model for chat Upload data Overview Conversation datasets Knowledge bases Use the Agent Assist simulator Deprecations Article suggestion FAQ Assist Knowledge documents best practices AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Public sites Agent Assist public features Agent Assist console Home Documentation AI and ML Agent Assist Guides Send feedback Generative knowledge assist Stay organized with collections Save and categorize content based on your preferences.
- Generative knowledge assist synthesizes that information with the ongoing conversation and available customer metadata to give a more relevant and timely answer to your agent.
- Access data through Customer Experience Insights Alternatively, your proactive generative knowledge assist generated queries and answers are automatically populated to Customer Experience Insights.
- This option uses Pub/Sub to send suggestion notifications to your application as the conversation proceeds and new suggestions become available.

