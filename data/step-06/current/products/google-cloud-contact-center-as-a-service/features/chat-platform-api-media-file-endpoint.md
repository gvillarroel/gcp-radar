---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.020Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Chat platform API media file endpoint"
feature_slug: "chat-platform-api-media-file-endpoint"
latest_feature_date: "2025-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-attachments-chat-api"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "chat"
  - "platform"
  - "media"
  - "file"
  - "endpoint"
  - "adds"
  - "lets"
  - "applications"
---

# Chat platform API media file endpoint

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The chat platform API adds an endpoint that lets applications retrieve media files sent during a chat session.

## Extended Definition

The chat platform API adds an endpoint that lets applications retrieve media files sent during a chat session.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-attachments-chat-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-attachments-chat-api)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "Agent file attachments with the chat platform API \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-attachments-chat-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-attachments-chat-api)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authenticate using basic authentication . https:// YOUR CCAAS HOST /apps/api/v1/chats/ CHAT ID /media/ MEDIA ID Replace the following: YOUR CCAAS HOST : your Contact Center AI Platform (CCAI Platform) host CHAT ID : the chat ID MEDIA ID : the ID of the file that you want to download.
- With a chat platform API custom app, you can set up a workflow that lets your agents attach files during a chat session.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Agent file attachments with the chat platform API Stay organized with collections Save and categorize content based on your preferences.
- Send a GET request to the following endpoint to get the attachment file, specifying the media id value from the previous step.

### "Chat platform API Guide \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sending the media file as a chat message : To send the media file as a chat message, send the following payload to the POST /chats/:id/message endpoint : { "from user id" : <id of end user>, "message" : "type" : < "photo" or "video" >, "content" : { "media id" : < media id returned as described in 2 .c > } } Expect unrecognized JSON keys in API responses All API updates are backward compatible.
- It is recommended to save or cache a mapping of media id to URL in the API consumer, as all media in chat messages will be referenced by media id only. url : the read-only S3 or Cloud Storage URL where the file is located. media id : the ID of the media file in Contact Center AI Platform.
- Adding the media file to the chat : To add the media file to the chat, use the POST /chats/:id/photos or POST /chats/:id/videos endpoint.
- Fetching the pre-signed URL : Fetch a presigned upload URL from Contact Center AI Platform using the POST /v1/chats/:chat id/photos/upload or POST /v1/chats/:chat id/videos/upload endpoints .

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Reply back to this message to begin a new chat." OR "ujet message chat dismissed": "Welcome Back!<br>Do you have the same issue or a new issue?" "ujet chat new": "New" "ujet chat same": "Same" Mobile SDKs The string file names for customizing this UI are broken down below: ujet chat footer view message dismissed: "Welcome back!\nWe have not heard from you in a while.\nDo you have the same issue or a new issue?" OR ujet chat footer view message timeout: "Your previous chat has ended, please click to start a new chat." ujet common same: "Same" ujet common new: "New" Configure rich messaging and file attachments You can configure CCAI Platform so that agents can use rich messaging, emojis, and file attachments in the chat adapter.
- Configure rich messaging and file attachments for the chat adapter To configure rich messaging and file attachments for the chat adapter, follow these steps: In the CCAI Platform portal, click Settings > Chat .
- For a custom CRM with a generic API, the chat transcript can be added as a file attachment if the Upload a file endpoint is configured, or posted as a comment if the Comment endpoint has been configured.
- API Developers can use the CCAI Platform portal API to retrieve the chat answer type (auto or manual) from the /chats endpoint.

