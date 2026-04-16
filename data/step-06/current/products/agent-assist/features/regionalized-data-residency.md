---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:50:35.082Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Regionalized data residency"
feature_slug: "regionalized-data-residency"
latest_feature_date: "2022-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/conversation-data-format"
  - "https://docs.cloud.google.com/agent-assist/docs/conversation-dataset"
  - "https://docs.cloud.google.com/agent-assist/docs/export-conversations"
keywords:
  - "regionalized"
  - "residency"
  - "confine"
  - "users"
  - "lets"
  - "conversation"
---

# Regionalized data residency

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Regionalized data residency lets Agent Assist users confine conversation data at rest to a specified geographic region.

## Extended Definition

Regionalized data residency lets Agent Assist users confine conversation data at rest to a specified geographic region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/conversation-data-format](https://docs.cloud.google.com/agent-assist/docs/conversation-data-format)
- [https://docs.cloud.google.com/agent-assist/docs/conversation-dataset](https://docs.cloud.google.com/agent-assist/docs/conversation-dataset)
- [https://docs.cloud.google.com/agent-assist/docs/export-conversations](https://docs.cloud.google.com/agent-assist/docs/export-conversations)

## Supporting Pages

### Create a conversation dataset \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/conversation-dataset](https://docs.cloud.google.com/agent-assist/docs/conversation-dataset)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Agent Assist Guides Send feedback Create a conversation dataset Stay organized with collections Save and categorize content based on your preferences.
- The URI should have the following format: gs://<bucket name>/<object name> For example: gs://mydata/conversationjsons/conv0 .json gs://mydatabucket/test/conv.json Click Create .
- We suggest that you remove any conversations with fewer than 20 messages or 3 conversation turns (changes in which participant is making an utterance).
- A conversation dataset contains conversation transcript data, and is used to train either a Smart Reply or Summarization custom model.

### Export conversation data \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/export-conversations](https://docs.cloud.google.com/agent-assist/docs/export-conversations)
- Source ID: `site-docs-root`
- Final score: 57
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Agent Assist Guides Send feedback Export conversation data Stay organized with collections Save and categorize content based on your preferences.
- Old conversations are deleted by the system periodically, so if you try to reference an older conversation it may no longer be available.
- Authentication and access control When you send a request to export conversations, use your end-user credentials for authentication .
- A maximum of 10,000 conversations can be exported at a time, and each conversation can have at most 1000 messages.

### Upload conversation data \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/conversation-data-format](https://docs.cloud.google.com/agent-assist/docs/conversation-data-format)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example The following shows an example of a conversation data file. { "conversation info":{ "categories":[ { "display name":"Category 1" } ] }, "entries": [ { "start timestamp usec": 1000000, "text": "Hello, I'm calling in regards to ...", "role": "CUSTOMER", "user id": 1 }, { "start timestamp usec": 5000000, "text": "Yes, I can answer your question ...", "role": "AGENT", "user id": 2 }, ... ] } Upload conversations to Cloud Storage You must provide your conversation data in a Cloud Storage bucket contained within your Google Cloud Platform project.
- You have a nice day", "role": "AGENT" } ], "conversation info": { "annotations": [ { "annotation": { "conversation summarization suggestion": { "text sections": [ { "key": "Situation", "value": "Customer was unable to login to account" }, { "key": "Action", "value": "Agent sent an email with password reset instructions" }, { "key": "Outcome", "value": "Problem was resolved" } ] } } } ] } } Conversation transcript data Text conversation data must be supplied in JSON-formatted files, where each file contains data for a single conversation.
- The following is an example demonstrating the format of a conversation transcript with associated annotation: { "entries": [ { "text": "How can I help?", "role": "AGENT" }, { "text": "I cannot login", "role": "CUSTOMER" }, { "text": "Ok, let me confirm.
- Before you can begin uploading data, you must make sure that that each conversation transcript is in JSON format , has an associated annotation, and is stored in a Google Cloud Storage bucket .

