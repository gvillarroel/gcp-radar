---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.000Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Chat resume endpoint"
feature_slug: "chat-resume-endpoint"
latest_feature_date: "2026-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-attachments-chat-api"
keywords:
  - "chat"
  - "resume"
  - "endpoint"
  - "adds"
  - "resuming"
  - "dismissed"
  - "va"
  - "sessions"
---

# Chat resume endpoint

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Adds an endpoint for resuming dismissed or va_dismissed chat sessions so participants can see the chat history.

## Extended Definition

Adds an endpoint for resuming dismissed or va_dismissed chat sessions so participants can see the chat history.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-attachments-chat-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-attachments-chat-api)

## Supporting Pages

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Dismissed chat details Dismissal settings can be set globally or per-queue When chats have been dismissed, they do not accrue wait time For a chat to be dismissed, both the consumer and agent have to have sent at least one message The dismiss eligibility timer starts from the latest message from an agent Only inbound chats can be dismissed When chats are dismissed and later reactivated, a consumer has to send at least one message afterward before the chat is eligible to be dismissed again Dismissed chats are ultimately ended when the chat timeout duration is met When chats are dismissed, activities are added to the chat transcript Chat Flow CCAI Platform portal configuration Dismissing chats - global setting A global configuration for all chat channels can be configured in Chat Settings.
- When a chat changes from Active to Dismissed: The chat handle time is paused The chat's handle time is based on only the active chat time The chat ID remains the same In the chat transcript, 2 activities are logged Timestamp when the User/Agent left the chat Ex. "[13:30:39 System] Admin U. left the chat." Chat dismissed Ex. "[13:30:39 System] Chat dismissed" When a chat changes from Dismissed to Active: The chat's handle time timer starts from where it left off The chat's handle time is based on the total active chat time The chat ID remains the same Customizing strings/prompts Web SDK To update messaging for your consumers, strings for the Web SDK can be customized by your web developers installing and configuring the Web SDK.
- Reply back to this message to begin a new chat." OR "ujet message chat dismissed": "Welcome Back!<br>Do you have the same issue or a new issue?" "ujet chat new": "New" "ujet chat same": "Same" Mobile SDKs The string file names for customizing this UI are broken down below: ujet chat footer view message dismissed: "Welcome back!\nWe have not heard from you in a while.\nDo you have the same issue or a new issue?" OR ujet chat footer view message timeout: "Your previous chat has ended, please click to start a new chat." ujet common same: "Same" ujet common new: "New" Configure rich messaging and file attachments You can configure CCAI Platform so that agents can use rich messaging, emojis, and file attachments in the chat adapter.
- Real-time and Standard Reporting Real-time reports Dismissed chats are moved from Chats > Ongoing to Chats Previous The status for dismissed chats on the Previous Chats page is Dismissed - Inactive End user If that chat is restarted by the consumer sending a response, the chat is placed back in queue and will show in Chats > Future When an agent picks up a restarted chat, that chat will be moved to the Ongoing chat page Reporting The chat duration timer stops as soon as a chat has been placed into dismissed status.

### "Chat platform API Guide \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- When an end user selects this option, after the email is sent, The customer will need to mark the chat as deflected and ended by using the PATCH /chats/:id endpoint with the following params in the request body: "status": "finished" , "escalation id": &lt;id of escalation> , and "deflection channel": "email" Continue with virtual agent : This is technically a valid deflection option, however it doesn't make sense for using the queue selection VA as the VA would just try to escalate the chat again.
- Sending the media file as a chat message : To send the media file as a chat message, send the following payload to the POST /chats/:id/message endpoint : { "from user id" : <id of end user>, "message" : "type" : < "photo" or "video" >, "content" : { "media id" : < media id returned as described in 2 .c > } } Expect unrecognized JSON keys in API responses All API updates are backward compatible.
- If a link is selected, end the chat and use external link for the deflection channel parameter Send and receive messages To send or receive messages, follow these steps: Text content : To send text messages, use the POST /chats/:id/message endpoint as defined in the API doc.
- When creating a new chat with the POST or chats endpoint, include a custom context payload that includes some context on the created chat that the virtual agent can use to determine which queue the chat should be routed to.

### "Agent file attachments with the chat platform API \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-attachments-chat-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-attachments-chat-api)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authenticate using basic authentication . https:// YOUR CCAAS HOST /apps/api/v1/chats/ CHAT ID /media/ MEDIA ID Replace the following: YOUR CCAAS HOST : your Contact Center AI Platform (CCAI Platform) host CHAT ID : the chat ID MEDIA ID : the ID of the file that you want to download.
- File limitations Here are the file types that agents can attach to a chat session: Images : JPEG, JPG, PNG, GIF, TIFF, RAW, WebP Video : MP4, MOV, AVI, WMV, WebM Audio : MP3, WAV Documents : PDF, XML, XLS, PPT, CSV, TXT The maximum file size is 100 MB.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Agent file attachments with the chat platform API Stay organized with collections Save and categorize content based on your preferences.
- Send a GET request to the following endpoint to get the attachment file, specifying the media id value from the previous step.

