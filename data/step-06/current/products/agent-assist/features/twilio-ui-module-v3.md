---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:50:35.075Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Twilio UI Module v3"
feature_slug: "twilio-ui-module-v3"
latest_feature_date: "2025-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/backend-module-install"
  - "https://docs.cloud.google.com/agent-assist/docs/custom-events"
  - "https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist"
keywords:
  - "module"
  - "version"
  - "twilio"
  - "adds"
---

# Twilio UI Module v3

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Adds the Twilio UI module version 3 for Agent Assist, providing an upgraded Twilio integration.

## Extended Definition

Adds the Twilio UI module version 3 for Agent Assist, providing an upgraded Twilio integration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install)
- [https://docs.cloud.google.com/agent-assist/docs/custom-events](https://docs.cloud.google.com/agent-assist/docs/custom-events)
- [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)

## Supporting Pages

### "Integrate backend modules with your system \_|\_ Agent Assist \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Customize the user authentication method The code repository supports both backend users and users of the frontend module for Genesys Cloud and Twilio.
- GCP PROJECT ID = $( gcloud config get-value project ) Create the Cloud storage bucket gcloud storage buckets create gs:// ${ GCP PROJECT ID } -tfstate Enable Object Versioning to keep the history of your deployments gcloud storage buckets update gs:// ${ GCP PROJECT ID } -tfstate --versioning Export the value of required terraform variables gcp project id , ui connector docker image and cloud pubsub interceptor docker image .
- Home Documentation AI and ML Agent Assist Guides Send feedback Integrate backend modules with your system Stay organized with collections Save and categorize content based on your preferences.
- Backend modules provide an infrastructure to process large volumes of feature-related messages and interact with the agent desktop UI.

### Custom events and custom UI module connectors | Agent Assist | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/custom-events](https://docs.cloud.google.com/agent-assist/docs/custom-events)
- Source ID: `feature-recovery-direct-http`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Guides Reference Support Resources Technology areas More Agent Assist Site Selector More Guides Reference Support Resources Cross-product tools More Console Agent Assist Agent Assist console Documentation Overview Send feedback Concepts All concepts Agent Assist basics Agent Assist integrations Cloud logging field definitions Features All features AI Coach Overview Tool integration for AI coach Open API and Integration Connectors tools OpenAPI tool for Datastore Best practices Bidirectional API Build your own GenAI assist Build your own assist Build your own assist extension Extended streaming Implement Agent Assist using pre-built modules UI modules overview Implement UI modules and connectors UI modules Container V1 Container V2 Knowledge assist Generative knowledge assist Smart reply Summarization Transcript Agent desktop integration Custom events and custom UI module connectors UI module events Genesys Cloud integration Deploy the application server AudioHook voice integration Configuration for chat integration Test chat integration Twilio integration Twilio basics Deploy Twilio Flex Twilio SIPREC integration Salesforce integration Overview Salesforce chat integration Salesforce voice integration with Twilio Flex Salesforce voice integration with NiCE CXone LivePerson integration Basics Deploy the application server Deploy the proxy server Backend modules basics Integrate backend modules with your system (Proactive) Generative knowledge assist User guide Knowledge assist filters Skip PubSub notifications for empty suggestions Troubleshoot knowledge assist features Best practices Sentiment analysis Smart Reply Summarization Summarization with custom sections user guide Summarization with custom sections best practices Automatic evaluation basics Automatic evaluation user guide Automatic evaluation best practices Transcription Voice Transcription Transcription with Chirp 3 PubSub intermediate transcription How-to guides All how-to guides Enable Cloud Pub/Sub notifications Enable CMEK Enable real-time entity extraction Handoff a conversation CX Agent Studio Dialogflow CX Dialogflow ES Set up Speech-to-Text model adaptation Upload and export conversation data Upload conversation data Export conversation data Tutorials All tutorials Create a conversation profile Train an AI model Train a smart reply model Train a summarization custom model for chat Upload data Overview Conversation datasets Knowledge bases Use the Agent Assist simulator Deprecations Article suggestion FAQ Assist Knowledge documents best practices AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Public sites Agent Assist public features Agent Assist console Home Documentation AI and ML Agent Assist Guides Send feedback Custom events and custom UI module connectors Stay organized with collections Save and categorize content based on your preferences.
- To manually dispatch a custom event, use the following syntax: dispatchAgentAssistEvent ( 'event_name' , { detail : event_payload , }); The following example shows how to dispatch the analyze-content-received event: if (newMessageFromHumanAgent) { dispatchAgentAssistEvent('analyze-content-received', { detail: { participantRole: 'HUMAN_AGENT', request: { textInput: {text: newMessageFromHumanAgent}, messageSendTime: new Date().toISOString() } } }); } After a you dispatch a custom event, you will see the following in the UI module connector service: this . api . analyzeContent (...) . then ( function ( response ) { dispatchAgentAssistEvent('analyze-content-response-received', { detail : { response : response } } ); } ); And you will see the following in the module: addAgentAssistEventListener('analyze-content-response-received', function (event) { // Use the AnalyzeContent response to render suggestions in the UI. }); To manually subscribe to a custom event, use the following syntax: addAgentAssistEventListener ( 'event_name' , function ( event ) { // ` event . detail ` contains the event payload . }); The following example shows a custom event subscription: addAgentAssistEventListener('smart-reply-selected', function (event) { var chipContent = event.details; // Populate the agent chat box with the selected Smart Reply chip. }); Custom UI module connectors You can also use custom events to create your own custom UI module connectors, which allow you to integrate the UI modules into an agent desktop that isn't supported by Agent Assist.
- Custom events and custom UI module connectors | Agent Assist | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Agent Assist Start free Agent Assist Site Selector Public sites Agent Assist public features Guides, examples, and references for Agent Assist public features.
- For example: const connector = new UiModulesConnector (); const config = {}; // ...other UI module connector config options config . uiModuleEventOptions = { namespace : this . recordId } const containerElement = document . createElement ( "agent-assist-ui-modules-v2" ); // ...other UI modules HTML attributes containerEl . setAttribute ( "namespace" , this . recordId ); Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Generative knowledge assist | Agent Assist | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
- Source ID: `feature-recovery-direct-http`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Guides Reference Support Resources Technology areas More Agent Assist Site Selector More Guides Reference Support Resources Cross-product tools More Console Agent Assist Agent Assist console Documentation Overview Send feedback Concepts All concepts Agent Assist basics Agent Assist integrations Cloud logging field definitions Features All features AI Coach Overview Tool integration for AI coach Open API and Integration Connectors tools OpenAPI tool for Datastore Best practices Bidirectional API Build your own GenAI assist Build your own assist Build your own assist extension Extended streaming Implement Agent Assist using pre-built modules UI modules overview Implement UI modules and connectors UI modules Container V1 Container V2 Knowledge assist Generative knowledge assist Smart reply Summarization Transcript Agent desktop integration Custom events and custom UI module connectors UI module events Genesys Cloud integration Deploy the application server AudioHook voice integration Configuration for chat integration Test chat integration Twilio integration Twilio basics Deploy Twilio Flex Twilio SIPREC integration Salesforce integration Overview Salesforce chat integration Salesforce voice integration with Twilio Flex Salesforce voice integration with NiCE CXone LivePerson integration Basics Deploy the application server Deploy the proxy server Backend modules basics Integrate backend modules with your system (Proactive) Generative knowledge assist User guide Knowledge assist filters Skip PubSub notifications for empty suggestions Troubleshoot knowledge assist features Best practices Sentiment analysis Smart Reply Summarization Summarization with custom sections user guide Summarization with custom sections best practices Automatic evaluation basics Automatic evaluation user guide Automatic evaluation best practices Transcription Voice Transcription Transcription with Chirp 3 PubSub intermediate transcription How-to guides All how-to guides Enable Cloud Pub/Sub notifications Enable CMEK Enable real-time entity extraction Handoff a conversation CX Agent Studio Dialogflow CX Dialogflow ES Set up Speech-to-Text model adaptation Upload and export conversation data Upload conversation data Export conversation data Tutorials All tutorials Create a conversation profile Train an AI model Train a smart reply model Train a summarization custom model for chat Upload data Overview Conversation datasets Knowledge bases Use the Agent Assist simulator Deprecations Article suggestion FAQ Assist Knowledge documents best practices AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Public sites Agent Assist public features Agent Assist console Home Documentation AI and ML Agent Assist Guides Send feedback Generative knowledge assist Stay organized with collections Save and categorize content based on your preferences.
- Within both the Agent Assist simulator and UI modules , both generative knowledge assist and proactive generative knowledge assist automatically display a document metadata value for certain keys. gka_source_label : Value is displayed in the suggestion card directly. gka_source_tooltip : When the value is struct type, holding your cursor over the source link expands and displays the value in a tooltip.
- If you have the following metadata for a knowledge document, then the suggestion card lists the source as External Doc and the tooltip adds doc_visibility: public doc .
- You can manually submit the suggested query to the SearchKnowledge API and automatically submit in the Agent Assist console simulator and UI modules.

