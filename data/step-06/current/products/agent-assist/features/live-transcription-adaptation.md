---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:50:35.079Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Live transcription adaptation"
feature_slug: "live-transcription-adaptation"
latest_feature_date: "2024-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist"
  - "https://docs.cloud.google.com/agent-assist/docs/adaptation-model-guide"
  - "https://docs.cloud.google.com/agent-assist/docs/features"
keywords:
  - "adaptation"
  - "higher"
  - "live"
  - "give"
  - "transcription"
  - "adds"
---

# Live transcription adaptation

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Agent Assist adds Live transcription adaptation to give higher recognition priority to selected phrases and improve transcription quality.

## Extended Definition

Agent Assist adds Live transcription adaptation to give higher recognition priority to selected phrases and improve transcription quality.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
- [https://docs.cloud.google.com/agent-assist/docs/adaptation-model-guide](https://docs.cloud.google.com/agent-assist/docs/adaptation-model-guide)
- [https://docs.cloud.google.com/agent-assist/docs/features](https://docs.cloud.google.com/agent-assist/docs/features)

## Supporting Pages

### Generative knowledge assist | Agent Assist | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
- Source ID: `feature-recovery-direct-http`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Guides Reference Support Resources Technology areas More Agent Assist Site Selector More Guides Reference Support Resources Cross-product tools More Console Agent Assist Agent Assist console Documentation Overview Send feedback Concepts All concepts Agent Assist basics Agent Assist integrations Cloud logging field definitions Features All features AI Coach Overview Tool integration for AI coach Open API and Integration Connectors tools OpenAPI tool for Datastore Best practices Bidirectional API Build your own GenAI assist Build your own assist Build your own assist extension Extended streaming Implement Agent Assist using pre-built modules UI modules overview Implement UI modules and connectors UI modules Container V1 Container V2 Knowledge assist Generative knowledge assist Smart reply Summarization Transcript Agent desktop integration Custom events and custom UI module connectors UI module events Genesys Cloud integration Deploy the application server AudioHook voice integration Configuration for chat integration Test chat integration Twilio integration Twilio basics Deploy Twilio Flex Twilio SIPREC integration Salesforce integration Overview Salesforce chat integration Salesforce voice integration with Twilio Flex Salesforce voice integration with NiCE CXone LivePerson integration Basics Deploy the application server Deploy the proxy server Backend modules basics Integrate backend modules with your system (Proactive) Generative knowledge assist User guide Knowledge assist filters Skip PubSub notifications for empty suggestions Troubleshoot knowledge assist features Best practices Sentiment analysis Smart Reply Summarization Summarization with custom sections user guide Summarization with custom sections best practices Automatic evaluation basics Automatic evaluation user guide Automatic evaluation best practices Transcription Voice Transcription Transcription with Chirp 3 PubSub intermediate transcription How-to guides All how-to guides Enable Cloud Pub/Sub notifications Enable CMEK Enable real-time entity extraction Handoff a conversation CX Agent Studio Dialogflow CX Dialogflow ES Set up Speech-to-Text model adaptation Upload and export conversation data Upload conversation data Export conversation data Tutorials All tutorials Create a conversation profile Train an AI model Train a smart reply model Train a summarization custom model for chat Upload data Overview Conversation datasets Knowledge bases Use the Agent Assist simulator Deprecations Article suggestion FAQ Assist Knowledge documents best practices AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Public sites Agent Assist public features Agent Assist console Home Documentation AI and ML Agent Assist Guides Send feedback Generative knowledge assist Stay organized with collections Save and categorize content based on your preferences.
- For more information, see Set up authentication for a local development environment . def create_conversation ( project_id , conversation_profile_id ): """Creates a conversation with given values Args: project_id: The GCP project linked with the conversation. conversation_profile_id: The conversation profile id used to create conversation.""" client = dialogflow .
- If you're integrating through the AnalyzeContent API, you have the option to enable the disable_high_latency_features_sync_delivery config in ConversationProfile to ensure that the AnalyzeContent API will respond, without waiting for the proactive generative knowledge assist suggestions, and deliver the suggestions through Pub/Sub.
- For more information, see Set up authentication for a local development environment . def create_participant ( project_id : str , conversation_id : str , role : str ): from google.cloud import dialogflow_v2beta1 as dialogflow """Creates a participant in a given conversation.

### "Set up Speech-to-Text model adaptation \_|\_ Agent Assist \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/agent-assist/docs/adaptation-model-guide](https://docs.cloud.google.com/agent-assist/docs/adaptation-model-guide)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Agent Assist uses the Speech-to-Text model adaptation to improve transcription quality by recognizing certain phrases more frequently than others.
- This page provides a guide to setting up model adaptation for Speech-to-Text transcription.
- Run the following Python script to update your conversation profile: Conversation Profile to update PROJECT ID = "sample-project" LOCATION = "global" CONVERSATION PROFILE ID = "sample-conversation-profile" Speech model adaptation resource names SPEECH ADAPTATION PHRASES = ["projects/sample-project/locations/global/phraseSets/sample-phrase-sets"] import google.auth from google.auth.transport.requests import AuthorizedSession scopes=['https://www.googleapis.com/auth/cloud-platform'] credentials, project = google.auth.default( scopes=scopes, quota project id=PROJECT ID, ) session = AuthorizedSession(credentials) profile url = f"https://dialogflow.googleapis.com/v2beta1/projects/{PROJECT ID}/locations/{LOCATION}/conversationProfiles/{CONVERSATION PROFILE ID}" get response = session.get(profile url) print("Checking for existing ConversationProfile...") print(get response.status code) print(get response.json()) if get response.status code == 200: patch response = session.patch( profile url, params={ "updateMask": "sttConfig.phraseSets" }, json={ "sttConfig": { "phraseSets": SPEECH ADAPTATION PHRASES } } ) print("Updating ConversationProfile...") print(patch response.status code) print(patch response.json()) Regional phrase sets While Speech-to-Text model adaptation supports only English ( en-US ), you can configure phrase sets for other language regions with the Speech-to-Text API.
- Home Documentation AI and ML Agent Assist Guides Send feedback Set up Speech-to-Text model adaptation Stay organized with collections Save and categorize content based on your preferences.

### Features | Agent Assist | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/features](https://docs.cloud.google.com/agent-assist/docs/features)
- Source ID: `feature-recovery-direct-http`
- Final score: 147
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Guides Reference Support Resources Technology areas More Agent Assist Site Selector More Guides Reference Support Resources Cross-product tools More Console Agent Assist Agent Assist console Documentation Overview Send feedback Concepts All concepts Agent Assist basics Agent Assist integrations Cloud logging field definitions Features All features AI Coach Overview Tool integration for AI coach Open API and Integration Connectors tools OpenAPI tool for Datastore Best practices Bidirectional API Build your own GenAI assist Build your own assist Build your own assist extension Extended streaming Implement Agent Assist using pre-built modules UI modules overview Implement UI modules and connectors UI modules Container V1 Container V2 Knowledge assist Generative knowledge assist Smart reply Summarization Transcript Agent desktop integration Custom events and custom UI module connectors UI module events Genesys Cloud integration Deploy the application server AudioHook voice integration Configuration for chat integration Test chat integration Twilio integration Twilio basics Deploy Twilio Flex Twilio SIPREC integration Salesforce integration Overview Salesforce chat integration Salesforce voice integration with Twilio Flex Salesforce voice integration with NiCE CXone LivePerson integration Basics Deploy the application server Deploy the proxy server Backend modules basics Integrate backend modules with your system (Proactive) Generative knowledge assist User guide Knowledge assist filters Skip PubSub notifications for empty suggestions Troubleshoot knowledge assist features Best practices Sentiment analysis Smart Reply Summarization Summarization with custom sections user guide Summarization with custom sections best practices Automatic evaluation basics Automatic evaluation user guide Automatic evaluation best practices Transcription Voice Transcription Transcription with Chirp 3 PubSub intermediate transcription How-to guides All how-to guides Enable Cloud Pub/Sub notifications Enable CMEK Enable real-time entity extraction Handoff a conversation CX Agent Studio Dialogflow CX Dialogflow ES Set up Speech-to-Text model adaptation Upload and export conversation data Upload conversation data Export conversation data Tutorials All tutorials Create a conversation profile Train an AI model Train a smart reply model Train a summarization custom model for chat Upload data Overview Conversation datasets Knowledge bases Use the Agent Assist simulator Deprecations Article suggestion FAQ Assist Knowledge documents best practices AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Public sites Agent Assist public features Agent Assist console Home Documentation AI and ML Agent Assist Guides Send feedback Features Stay organized with collections Save and categorize content based on your preferences.
- Bidirectional API Stream audio data and receive transcriptions or human agent suggestions.
- Transcription Convert streaming audio data to text in real time.

