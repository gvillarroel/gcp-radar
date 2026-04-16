---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.107Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Chat outbound message event"
feature_slug: "chat-outbound-message-event"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist"
keywords:
  - "chat"
  - "outbound"
  - "message"
  - "event"
  - "agent"
  - "adapter"
  - "now"
  - "emits"
---

# Chat outbound message event

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The agent chat adapter now emits a Chat Outbound Message event when an agent message is sent.

## Extended Definition

The agent chat adapter now emits a Chat Outbound Message event when an agent message is sent.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)

## Supporting Pages

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Reply back to this message to begin a new chat." OR "ujet message chat dismissed": "Welcome Back!<br>Do you have the same issue or a new issue?" "ujet chat new": "New" "ujet chat same": "Same" Mobile SDKs The string file names for customizing this UI are broken down below: ujet chat footer view message dismissed: "Welcome back!\nWe have not heard from you in a while.\nDo you have the same issue or a new issue?" OR ujet chat footer view message timeout: "Your previous chat has ended, please click to start a new chat." ujet common same: "Same" ujet common new: "New" Configure rich messaging and file attachments You can configure CCAI Platform so that agents can use rich messaging, emojis, and file attachments in the chat adapter.
- Image Video Audio Document JPEG, JPG, PNG, GIF, WebP MP4, MOV, AVI, WMV, WebM MP3, WAV, M4A, WEBA PDF, DOC, XLS, PPT, CSV, TXT File size limits The following table shows size limits for files that agents can attach to messages in the chat adapter.
- Agent Experience - Message Preview In the Agent Adapter, the appearance of a Message Preview is very similar to chat messages that have already been sent, but with a few small differences.
- Allowed file types The following table shows the file types that agents can attach to messages in the chat adapter.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Prevent agents from selecting a queue for an outbound call You can hide a queue in the agent adapter so that agents can't select it for an outbound call.
- Manual wrap-up If an agent manually changes their status to Wrap-up in the agent adapter, wrap-up activities are automatically assigned to the agent's last completed call or chat session.
- To prevent agents from selecting a queue for an outbound call, do the following: In the CCAI Platform portal, click Settings > Queue .
- Play Call Recording Messages : Plays a message to the caller receiving the outbound call from an agent.

### "Agent Assist \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Spelling and grammar correction : provides spelling and grammar suggestions for messages that agents type into the message field of the chat adapter.
- This lets you use Agent Assist with the following session types: Calls to direct phone numbers Calls to agent extension numbers Outbound calls where no queue is selected Chats transferred directly to another agent Note: When a chat is transferred, the originating agent sees Agent Assist as it's configured for the originating team or queue, and the receiving agent sees Agent Assist as it's configured for the receiving team or queue.
- If you select the Spelling and Grammar Check checkbox, then the following two checkboxes appear: Allow agents to turn on/off automatic checks : Select this checkbox to let agents turn on and off spelling and grammar check in the chat adapter.
- View knowledge suggestions : As the chat continues, the system analyzes both end-user and agent messages and displays relevant article suggestions as Clickable tiles .

