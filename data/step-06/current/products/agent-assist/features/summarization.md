---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:50:35.083Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Summarization"
feature_slug: "summarization"
latest_feature_date: "2022-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide"
  - "https://docs.cloud.google.com/agent-assist/docs/conversation-dataset"
  - "https://docs.cloud.google.com/agent-assist/docs/features"
keywords:
  - "generates"
  - "after"
  - "automatically"
  - "summarization"
  - "summaries"
  - "agents"
---

# Summarization

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Agent Assist summarization automatically generates summaries for agents after each conversation ends.

## Extended Definition

Agent Assist summarization automatically generates summaries for agents after each conversation ends.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide](https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide)
- [https://docs.cloud.google.com/agent-assist/docs/conversation-dataset](https://docs.cloud.google.com/agent-assist/docs/conversation-dataset)
- [https://docs.cloud.google.com/agent-assist/docs/features](https://docs.cloud.google.com/agent-assist/docs/features)

## Supporting Pages

### "User guide: Summarization automatic evaluation \_|\_ Agent Assist \_|\_\

- URL: [https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide](https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin Create a summarization generator that generates candidate summaries for your evaluation.
- Compare summarization generator versions You can also use summarization autoevaluation to compare summaries from different versions of a summarization generator.
- Summarization automatic evaluation (autoevaluation) assesses the quality of summaries based on three metrics: accuracy, completeness, and adherence.
- Choose an evaluation dataset with one of the following two options: Random sample of conversations from date range : If you've paid for the Agent Assist summarization feature, specify a Date range and maximum Number of conversations .

### Features | Agent Assist | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/features](https://docs.cloud.google.com/agent-assist/docs/features)
- Source ID: `feature-recovery-direct-http`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Summarization automatic evaluation Automatically evaluate the quality of AI generated summaries based on accuracy, completeness, and adherence.
- Implement Agent Assist using pre-built modules Integrate Agent Assist into your agents' console. (Proactive) Generative knowledge assist Automatically answer your agent's questions based on documents you provide.
- Summarization with custom sections Automatically summarize your customer service conversations.
- Guides Reference Support Resources Technology areas More Agent Assist Site Selector More Guides Reference Support Resources Cross-product tools More Console Agent Assist Agent Assist console Documentation Overview Send feedback Concepts All concepts Agent Assist basics Agent Assist integrations Cloud logging field definitions Features All features AI Coach Overview Tool integration for AI coach Open API and Integration Connectors tools OpenAPI tool for Datastore Best practices Bidirectional API Build your own GenAI assist Build your own assist Build your own assist extension Extended streaming Implement Agent Assist using pre-built modules UI modules overview Implement UI modules and connectors UI modules Container V1 Container V2 Knowledge assist Generative knowledge assist Smart reply Summarization Transcript Agent desktop integration Custom events and custom UI module connectors UI module events Genesys Cloud integration Deploy the application server AudioHook voice integration Configuration for chat integration Test chat integration Twilio integration Twilio basics Deploy Twilio Flex Twilio SIPREC integration Salesforce integration Overview Salesforce chat integration Salesforce voice integration with Twilio Flex Salesforce voice integration with NiCE CXone LivePerson integration Basics Deploy the application server Deploy the proxy server Backend modules basics Integrate backend modules with your system (Proactive) Generative knowledge assist User guide Knowledge assist filters Skip PubSub notifications for empty suggestions Troubleshoot knowledge assist features Best practices Sentiment analysis Smart Reply Summarization Summarization with custom sections user guide Summarization with custom sections best practices Automatic evaluation basics Automatic evaluation user guide Automatic evaluation best practices Transcription Voice Transcription Transcription with Chirp 3 PubSub intermediate transcription How-to guides All how-to guides Enable Cloud Pub/Sub notifications Enable CMEK Enable real-time entity extraction Handoff a conversation CX Agent Studio Dialogflow CX Dialogflow ES Set up Speech-to-Text model adaptation Upload and export conversation data Upload conversation data Export conversation data Tutorials All tutorials Create a conversation profile Train an AI model Train a smart reply model Train a summarization custom model for chat Upload data Overview Conversation datasets Knowledge bases Use the Agent Assist simulator Deprecations Article suggestion FAQ Assist Knowledge documents best practices AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Public sites Agent Assist public features Agent Assist console Home Documentation AI and ML Agent Assist Guides Send feedback Features Stay organized with collections Save and categorize content based on your preferences.

### Create a conversation dataset \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/conversation-dataset](https://docs.cloud.google.com/agent-assist/docs/conversation-dataset)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- They use the annotations to generate conversation summaries to human agents after a conversation has completed.
- If you are implementing Summarization using your own transcript and annotation data, make sure your transcripts are in the specified format and stored in a Google Cloud Storage bucket .
- We also suggest that you remove any bot messages or messages automatically generated by systems (for example, "Agent enters the chat room").
- A conversation dataset contains conversation transcript data, and is used to train either a Smart Reply or Summarization custom model.

