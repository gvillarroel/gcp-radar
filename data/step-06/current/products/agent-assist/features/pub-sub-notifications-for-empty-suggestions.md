---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:50:35.072Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Pub/Sub Notifications for Empty Suggestions"
feature_slug: "pub-sub-notifications-for-empty-suggestions"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist"
  - "https://docs.cloud.google.com/agent-assist/docs/backend-module-install"
  - "https://docs.cloud.google.com/agent-assist/docs/article-suggestion"
keywords:
  - "notifications"
  - "notification"
  - "empty"
  - "when"
  - "suggestions"
  - "adds"
---

# Pub/Sub Notifications for Empty Suggestions

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Adds Pub/Sub notification support when Agent Assist suggestions are empty.

## Extended Definition

Adds Pub/Sub notification support when Agent Assist suggestions are empty.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
- [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install)
- [https://docs.cloud.google.com/agent-assist/docs/article-suggestion](https://docs.cloud.google.com/agent-assist/docs/article-suggestion)

## Supporting Pages

### Generative knowledge assist | Agent Assist | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
- Source ID: `feature-recovery-direct-http`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Guides Reference Support Resources Technology areas More Agent Assist Site Selector More Guides Reference Support Resources Cross-product tools More Console Agent Assist Agent Assist console Documentation Overview Send feedback Concepts All concepts Agent Assist basics Agent Assist integrations Cloud logging field definitions Features All features AI Coach Overview Tool integration for AI coach Open API and Integration Connectors tools OpenAPI tool for Datastore Best practices Bidirectional API Build your own GenAI assist Build your own assist Build your own assist extension Extended streaming Implement Agent Assist using pre-built modules UI modules overview Implement UI modules and connectors UI modules Container V1 Container V2 Knowledge assist Generative knowledge assist Smart reply Summarization Transcript Agent desktop integration Custom events and custom UI module connectors UI module events Genesys Cloud integration Deploy the application server AudioHook voice integration Configuration for chat integration Test chat integration Twilio integration Twilio basics Deploy Twilio Flex Twilio SIPREC integration Salesforce integration Overview Salesforce chat integration Salesforce voice integration with Twilio Flex Salesforce voice integration with NiCE CXone LivePerson integration Basics Deploy the application server Deploy the proxy server Backend modules basics Integrate backend modules with your system (Proactive) Generative knowledge assist User guide Knowledge assist filters Skip PubSub notifications for empty suggestions Troubleshoot knowledge assist features Best practices Sentiment analysis Smart Reply Summarization Summarization with custom sections user guide Summarization with custom sections best practices Automatic evaluation basics Automatic evaluation user guide Automatic evaluation best practices Transcription Voice Transcription Transcription with Chirp 3 PubSub intermediate transcription How-to guides All how-to guides Enable Cloud Pub/Sub notifications Enable CMEK Enable real-time entity extraction Handoff a conversation CX Agent Studio Dialogflow CX Dialogflow ES Set up Speech-to-Text model adaptation Upload and export conversation data Upload conversation data Export conversation data Tutorials All tutorials Create a conversation profile Train an AI model Train a smart reply model Train a summarization custom model for chat Upload data Overview Conversation datasets Knowledge bases Use the Agent Assist simulator Deprecations Article suggestion FAQ Assist Knowledge documents best practices AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Public sites Agent Assist public features Agent Assist console Home Documentation AI and ML Agent Assist Guides Send feedback Generative knowledge assist Stay organized with collections Save and categorize content based on your preferences.
- Step 3: Pub/Sub suggestion notifications You can set the notificationConfig field when creating a conversation profile to receive notifications for suggestions.
- This option uses Pub/Sub to send suggestion notifications to your application as the conversation proceeds and new suggestions become available.
- ParticipantsClient () participant_path = client . participant_path ( project_id , conversation_id , participant_id ) text_input = { "text" : text , "language_code" : "en-US" } response = client . analyze_content ( participant = participant_path , text_input = text_input ) print ( "AnalyzeContent Response:" ) print ( f "Reply Text: { response . reply_text } " ) for suggestion_result in response . human_agent_suggestion_results : if suggestion_result . error is not None : print ( f "Error: { suggestion_result . error . message } " ) if suggestion_result . suggest_articles_response : for answer in suggestion_result . suggest_articles_response . article_answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer_record } " ) if suggestion_result . suggest_faq_answers_response : for answer in suggestion_result . suggest_faq_answers_response . faq_answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer_record } " ) if suggestion_result . suggest_smart_replies_response : for ( answer ) in suggestion_result . suggest_smart_replies_response . smart_reply_answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer_record } " ) for suggestion_result in response . end_user_suggestion_results : if suggestion_result . error : print ( f "Error: { suggestion_result . error . message } " ) if suggestion_result . suggest_articles_response : for answer in suggestion_result . suggest_articles_response . article_answers : print ( f "Article Suggestion Answer: { answer . title } " ) print ( f "Answer Record: { answer . answer_record } " ) if suggestion_result . suggest_faq_answers_response : for answer in suggestion_result . suggest_faq_answers_response . faq_answers : print ( f "Faq Answer: { answer . answer } " ) print ( f "Answer Record: { answer . answer_record } " ) if suggestion_result . suggest_smart_replies_response : for ( answer ) in suggestion_result . suggest_smart_replies_response . smart_reply_answers : print ( f "Smart Reply: { answer . reply } " ) print ( f "Answer Record: { answer . answer_record } " ) return response Add a message from the user for suggestions In response to the agent, the user says "When can I get my return refund?" This time, the API response contains a suggested query and the generative AI answer based on the knowledge documents.

### "Integrate backend modules with your system \_|\_ Agent Assist \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The available event notification types are: New suggestion events : Events sent when new Agent Assist suggestions are available (for example, new Smart Reply suggestions in response to a customer utterance).
- When you create a new conversation profile, select Pub/Sub notifications and then Enable Pub/Sub notifications .
- New suggestion events Replace your-new-suggestion-topic-id with the Cloud Pub/Sub topic you configured for new suggestions: $ export TOPIC ID = 'your-new-suggestion-topic-id' && gcloud pubsub subscriptions create $SUBSCRIPTION NAME --topic $TOPIC ID \ --push-endpoint = $INTERCEPTOR SERVICE URL /human-agent-assistant-event \ --push-auth-service-account = cloud-run-pubsub-invoker@ $GCP PROJECT ID .iam.gserviceaccount.com New message events Replace your-new-message-event-topic-id with the Cloud Pub/Sub topic you configured for new message events: $ export TOPIC ID = 'your-new-message-event-topic-id' && gcloud pubsub subscriptions create $SUBSCRIPTION NAME --topic $TOPIC ID \ --push-endpoint = $INTERCEPTOR SERVICE URL /new-message-event \ --push-auth-service-account = cloud-run-pubsub-invoker@ $GCP PROJECT ID .iam.gserviceaccount.com Conversation lifecycle events Replace your-conversation-lifecycle-event-topic with the Cloud Pub/Sub topic you configured for new conversation lifecycle events: $ export TOPIC ID = 'your-conversation-lifecycle-event-topic' && gcloud pubsub subscriptions create $SUBSCRIPTION NAME --topic $TOPIC ID \ --push-endpoint = $INTERCEPTOR SERVICE URL /conversation-lifecycle-event \ --push-auth-service-account = cloud-run-pubsub-invoker@ $GCP PROJECT ID .iam.gserviceaccount.com New recognition-result notification events $ export TOPIC ID = 'your-new-recognition-result-notification-event-topic' && gcloud pubsub subscriptions create $SUBSCRIPTION NAME --topic $TOPIC ID \ --push-endpoint = $INTERCEPTOR SERVICE URL /new-recognition-result-notification-event \ --push-auth-service-account = cloud-run-pubsub-invoker@ $GCP PROJECT ID .iam.gserviceaccount.com Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- New recognition result-notification events : Events sent when intermediate transcript is recognized from an agent or customer (for example, customer says Hi, how can I help you? , an intermediate transcript is Hi how can while customer is speaking).

### Article Suggestion \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/article-suggestion](https://docs.cloud.google.com/agent-assist/docs/article-suggestion)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This option uses Cloud Pub/Sub to send suggestion notifications to your application as the conversation proceeds and new suggestions are available.
- If you prefer to receive notification events for suggestions, you can set the notificationConfig field when creating the conversation profile.
- Optionally, you can enable Cloud Pub/Sub notifications when you configure the conversation profile.
- Pub/Sub suggestion notifications In the sections earlier, the ConversationProfile was created with only a human agent assistant.

