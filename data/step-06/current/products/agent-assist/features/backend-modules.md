---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:50:35.081Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Backend modules"
feature_slug: "backend-modules"
latest_feature_date: "2022-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/backend-basics"
  - "https://docs.cloud.google.com/agent-assist/docs/backend-module-install"
  - "https://docs.cloud.google.com/agent-assist/docs/custom-events"
keywords:
  - "launches"
  - "providing"
  - "backend"
  - "modules"
  - "feature"
---

# Backend modules

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Agent Assist launches backend modules as a GA feature, providing out-of-the-box infrastructure for faster integration with agent systems.

## Extended Definition

Agent Assist launches backend modules as a GA feature, providing out-of-the-box infrastructure for faster integration with agent systems.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/backend-basics](https://docs.cloud.google.com/agent-assist/docs/backend-basics)
- [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install)
- [https://docs.cloud.google.com/agent-assist/docs/custom-events](https://docs.cloud.google.com/agent-assist/docs/custom-events)

## Supporting Pages

### "Integrate backend modules with your system \_|\_ Agent Assist \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Backend modules provide an infrastructure to process large volumes of feature-related messages and interact with the agent desktop UI.
- Home Documentation AI and ML Agent Assist Guides Send feedback Integrate backend modules with your system Stay organized with collections Save and categorize content based on your preferences.
- For more information about background modules concepts and structure, see the backend modules basics documentation.
- This tutorial walks you through the process of integrating backend modules with your agent system.

### Agent Assist backend modules basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/backend-basics](https://docs.cloud.google.com/agent-assist/docs/backend-basics)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Backend modules structure Backend module components Backend modules require the following Google products to integrate Agent Assist into your system: Cloud Pub/Sub Cloud Pub/Sub interceptor Memorystore for Redis UI connector Cloud Pub/Sub Cloud Pub/Sub topics are configured in conversation profiles .
- Agent Assist prices and quotas Pub/Sub prices and quotas Memorystore prices and quotas Cloud Run prices and quotas What's next See the backend modules installation guide for more information about getting started with this integration method.
- Home Documentation AI and ML Agent Assist Guides Send feedback Agent Assist backend modules basics Stay organized with collections Save and categorize content based on your preferences.
- Agent Assist now offers backend modules , an out-of-the-box option for integrating Agent Assist into your system.

### Custom events and custom UI module connectors | Agent Assist | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/custom-events](https://docs.cloud.google.com/agent-assist/docs/custom-events)
- Source ID: `feature-recovery-direct-http`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Guides Reference Support Resources Technology areas More Agent Assist Site Selector More Guides Reference Support Resources Cross-product tools More Console Agent Assist Agent Assist console Documentation Overview Send feedback Concepts All concepts Agent Assist basics Agent Assist integrations Cloud logging field definitions Features All features AI Coach Overview Tool integration for AI coach Open API and Integration Connectors tools OpenAPI tool for Datastore Best practices Bidirectional API Build your own GenAI assist Build your own assist Build your own assist extension Extended streaming Implement Agent Assist using pre-built modules UI modules overview Implement UI modules and connectors UI modules Container V1 Container V2 Knowledge assist Generative knowledge assist Smart reply Summarization Transcript Agent desktop integration Custom events and custom UI module connectors UI module events Genesys Cloud integration Deploy the application server AudioHook voice integration Configuration for chat integration Test chat integration Twilio integration Twilio basics Deploy Twilio Flex Twilio SIPREC integration Salesforce integration Overview Salesforce chat integration Salesforce voice integration with Twilio Flex Salesforce voice integration with NiCE CXone LivePerson integration Basics Deploy the application server Deploy the proxy server Backend modules basics Integrate backend modules with your system (Proactive) Generative knowledge assist User guide Knowledge assist filters Skip PubSub notifications for empty suggestions Troubleshoot knowledge assist features Best practices Sentiment analysis Smart Reply Summarization Summarization with custom sections user guide Summarization with custom sections best practices Automatic evaluation basics Automatic evaluation user guide Automatic evaluation best practices Transcription Voice Transcription Transcription with Chirp 3 PubSub intermediate transcription How-to guides All how-to guides Enable Cloud Pub/Sub notifications Enable CMEK Enable real-time entity extraction Handoff a conversation CX Agent Studio Dialogflow CX Dialogflow ES Set up Speech-to-Text model adaptation Upload and export conversation data Upload conversation data Export conversation data Tutorials All tutorials Create a conversation profile Train an AI model Train a smart reply model Train a summarization custom model for chat Upload data Overview Conversation datasets Knowledge bases Use the Agent Assist simulator Deprecations Article suggestion FAQ Assist Knowledge documents best practices AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Public sites Agent Assist public features Agent Assist console Home Documentation AI and ML Agent Assist Guides Send feedback Custom events and custom UI module connectors Stay organized with collections Save and categorize content based on your preferences.
- To manually dispatch a custom event, use the following syntax: dispatchAgentAssistEvent ( 'event_name' , { detail : event_payload , }); The following example shows how to dispatch the analyze-content-received event: if (newMessageFromHumanAgent) { dispatchAgentAssistEvent('analyze-content-received', { detail: { participantRole: 'HUMAN_AGENT', request: { textInput: {text: newMessageFromHumanAgent}, messageSendTime: new Date().toISOString() } } }); } After a you dispatch a custom event, you will see the following in the UI module connector service: this . api . analyzeContent (...) . then ( function ( response ) { dispatchAgentAssistEvent('analyze-content-response-received', { detail : { response : response } } ); } ); And you will see the following in the module: addAgentAssistEventListener('analyze-content-response-received', function (event) { // Use the AnalyzeContent response to render suggestions in the UI. }); To manually subscribe to a custom event, use the following syntax: addAgentAssistEventListener ( 'event_name' , function ( event ) { // ` event . detail ` contains the event payload . }); The following example shows a custom event subscription: addAgentAssistEventListener('smart-reply-selected', function (event) { var chipContent = event.details; // Populate the agent chat box with the selected Smart Reply chip. }); Custom UI module connectors You can also use custom events to create your own custom UI module connectors, which allow you to integrate the UI modules into an agent desktop that isn't supported by Agent Assist.
- Custom events and custom UI module connectors | Agent Assist | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Agent Assist Start free Agent Assist Site Selector Public sites Agent Assist public features Guides, examples, and references for Agent Assist public features.
- For example: const connector = new UiModulesConnector (); const config = {}; // ...other UI module connector config options config . uiModuleEventOptions = { namespace : this . recordId } const containerElement = document . createElement ( "agent-assist-ui-modules-v2" ); // ...other UI modules HTML attributes containerEl . setAttribute ( "namespace" , this . recordId ); Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

