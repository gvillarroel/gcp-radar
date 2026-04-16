---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:50:35.077Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Build your own Gen AI Assist Vertex extensions"
feature_slug: "build-your-own-gen-ai-assist-vertex-extensions"
latest_feature_date: "2025-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/byoa-extension"
  - "https://docs.cloud.google.com/agent-assist/docs/build-your-own-genai-assist"
  - "https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist"
keywords:
  - "extensions"
  - "vertex"
  - "build"
  - "your"
---

# Build your own Gen AI Assist Vertex extensions

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Vertex extensions for Build your own Gen AI Assist allow BYOA to access remote APIs through Vertex LLM extensions in preview.

## Extended Definition

Vertex extensions for Build your own Gen AI Assist allow BYOA to access remote APIs through Vertex LLM extensions in preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/byoa-extension](https://docs.cloud.google.com/agent-assist/docs/byoa-extension)
- [https://docs.cloud.google.com/agent-assist/docs/build-your-own-genai-assist](https://docs.cloud.google.com/agent-assist/docs/build-your-own-genai-assist)
- [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)

## Supporting Pages

### "User guide: Build your own GenAI assist extension \_|\_ Agent Assist \_\

- URL: [https://docs.cloud.google.com/agent-assist/docs/byoa-extension](https://docs.cloud.google.com/agent-assist/docs/byoa-extension)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This guide provides instructions for using Vertex AIExtensions to create a Build your own GenAI assist (BYOA) generator.
- Prerequisites To use a Vertex AI Extensions tool, you must have access to the following: Agent Assist console Vertex AI for Vertex extension APIs Cloud Storage for the API spec Create a Vertex AI extension You must set up your own Vertex AI extension which calls the API you want to use.
- Home Documentation AI and ML Agent Assist Guides Send feedback User guide: Build your own GenAI assist extension Stay organized with collections Save and categorize content based on your preferences.
- For this reason, if you intend to use a tool in Agent Assist, use the Vertex AI Extensions tool type.

### Build your own GenAI assist \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/build-your-own-genai-assist](https://docs.cloud.google.com/agent-assist/docs/build-your-own-genai-assist)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following is a JSON example of a conversation profile. { "displayName" : "build-your-own-assist-test" , "humanAgentAssistantConfig" : { "humanAgentSuggestionConfig" : { "generators" : "projects/PROJECT ID/locations/global/generators/GENERATOR ID" } } } Verify with the simulator You can verify the conversation profile in the Agent Assist simulator .
- Build your own GenAI assist includes the following quota limits: Name Description Limit Generator manager operations per minute (per region) Limit on the number of generator manager operations that can be performed each minute, such as creating, listing or deleting generators.
- Generator outputs After you provide the inputs to the text generator, the Build your own GenAI assist generator provides suggestions such as article links, appropriate responses, or backend information about promotional offers.
- Home Documentation AI and ML Agent Assist Guides Send feedback Build your own GenAI assist Stay organized with collections Save and categorize content based on your preferences.

### Generative knowledge assist | Agent Assist | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
- Source ID: `feature-recovery-direct-http`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Guides Reference Support Resources Technology areas More Agent Assist Site Selector More Guides Reference Support Resources Cross-product tools More Console Agent Assist Agent Assist console Documentation Overview Send feedback Concepts All concepts Agent Assist basics Agent Assist integrations Cloud logging field definitions Features All features AI Coach Overview Tool integration for AI coach Open API and Integration Connectors tools OpenAPI tool for Datastore Best practices Bidirectional API Build your own GenAI assist Build your own assist Build your own assist extension Extended streaming Implement Agent Assist using pre-built modules UI modules overview Implement UI modules and connectors UI modules Container V1 Container V2 Knowledge assist Generative knowledge assist Smart reply Summarization Transcript Agent desktop integration Custom events and custom UI module connectors UI module events Genesys Cloud integration Deploy the application server AudioHook voice integration Configuration for chat integration Test chat integration Twilio integration Twilio basics Deploy Twilio Flex Twilio SIPREC integration Salesforce integration Overview Salesforce chat integration Salesforce voice integration with Twilio Flex Salesforce voice integration with NiCE CXone LivePerson integration Basics Deploy the application server Deploy the proxy server Backend modules basics Integrate backend modules with your system (Proactive) Generative knowledge assist User guide Knowledge assist filters Skip PubSub notifications for empty suggestions Troubleshoot knowledge assist features Best practices Sentiment analysis Smart Reply Summarization Summarization with custom sections user guide Summarization with custom sections best practices Automatic evaluation basics Automatic evaluation user guide Automatic evaluation best practices Transcription Voice Transcription Transcription with Chirp 3 PubSub intermediate transcription How-to guides All how-to guides Enable Cloud Pub/Sub notifications Enable CMEK Enable real-time entity extraction Handoff a conversation CX Agent Studio Dialogflow CX Dialogflow ES Set up Speech-to-Text model adaptation Upload and export conversation data Upload conversation data Export conversation data Tutorials All tutorials Create a conversation profile Train an AI model Train a smart reply model Train a summarization custom model for chat Upload data Overview Conversation datasets Knowledge bases Use the Agent Assist simulator Deprecations Article suggestion FAQ Assist Knowledge documents best practices AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Public sites Agent Assist public features Agent Assist console Home Documentation AI and ML Agent Assist Guides Send feedback Generative knowledge assist Stay organized with collections Save and categorize content based on your preferences.
- Check the status of your refund with the return tracking number found on your orders page." } ] }, }, "answerRecord": "projects/ PROJECT_ID /answerRecords/ ANSWER_RECORD_ID " }, } } ] } Python For more information, see the Vertex AI Search Python API reference documentation .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /conversations/ CONVERSATION_ID /participants/ PARTICIPANT_ID :analyzeContent" | Select-Object -Expand Content You should receive a JSON response similar to the following: { "message": { "name": "projects/ PROJECT_ID /conversations/ CONVERSATION_ID /messages/ MESSAGE_ID ", "content": "When can I get my return refund?", "languageCode": "en-US", "participant": " PARTICIPANT_ID ", "participantRole": "END_USER", "createTime": "2020-02-13T00:07:35.925Z" }, "humanAgentSuggestionResults": [ { "suggestKnowledgeAssistResponse": { "knowledgeAssistAnswer": { "suggestedQuery": { "queryText": "Refund processing time" }, "suggestedQueryAnswer": { "answerText": "After your return is processed, you receive your refund in 7 days.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /conversations/ CONVERSATION_ID /participants/ PARTICIPANT_ID :analyzeContent" | Select-Object -Expand Content You should receive a JSON response similar to the following: { "message": { "name": "projects/ PROJECT_ID /conversations/ CONVERSATION_ID /messages/ MESSAGE_ID ", "content": "How may I help you?", "languageCode": "en-US", "participant": " PARTICIPANT_ID ", "participantRole": "HUMAN_AGENT", "createTime": "2020-02-13T00:01:30.683Z" } } Python For more information, see the Vertex AI Search Python API reference documentation .

