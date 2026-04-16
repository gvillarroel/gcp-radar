---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.075Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Private Service Connect"
feature_slug: "private-service-connect"
latest_feature_date: "2024-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "private"
  - "connect"
  - "enables"
  - "access"
  - "ccai"
  - "platform"
  - "instances"
  - "while"
---

# Private Service Connect

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect enables private access to CCAI Platform instances while keeping agent, manager, and administrator traffic within Google Cloud.

## Extended Definition

Private Service Connect enables private access to CCAI Platform instances while keeping agent, manager, and administrator traffic within Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-reference-2`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable access to your instance for agents, managers, and CCAI Platform administrators, you need to set up Private Service Connect.
- PSTN Fallback calls : When the end-user doesn't have a strong enough data connection for a VoIP call, CCAI Platform will fallback to a PSTN call while still sending the important custom data packet to your CRM record.
- PSTN Fallback calls : When the end-user doesn't have a strong enough data connection for a VoIP call, CCAI Platform will fallback to a PSTN call while still sending the important custom data packet to your CRM record.
- Important: If you configure private access ( Preview ), you restrict public access to your CCAI Platform instance from the internet (end-users can still contact your contact center as they normally would).

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Reply back to this message to begin a new chat." OR "ujet message chat dismissed": "Welcome Back!<br>Do you have the same issue or a new issue?" "ujet chat new": "New" "ujet chat same": "Same" Mobile SDKs The string file names for customizing this UI are broken down below: ujet chat footer view message dismissed: "Welcome back!\nWe have not heard from you in a while.\nDo you have the same issue or a new issue?" OR ujet chat footer view message timeout: "Your previous chat has ended, please click to start a new chat." ujet common same: "Same" ujet common new: "New" Configure rich messaging and file attachments You can configure CCAI Platform so that agents can use rich messaging, emojis, and file attachments in the chat adapter.
- Dismissed chat details Dismissal settings can be set globally or per-queue When chats have been dismissed, they do not accrue wait time For a chat to be dismissed, both the consumer and agent have to have sent at least one message The dismiss eligibility timer starts from the latest message from an agent Only inbound chats can be dismissed When chats are dismissed and later reactivated, a consumer has to send at least one message afterward before the chat is eligible to be dismissed again Dismissed chats are ultimately ended when the chat timeout duration is met When chats are dismissed, activities are added to the chat transcript Chat Flow CCAI Platform portal configuration Dismissing chats - global setting A global configuration for all chat channels can be configured in Chat Settings.
- When the target response time is met, chats will not end Chats end when: Agent manually clicks end chat The consumer: Closes the active tab Navigates away from the page the chat session started on Clicks x on the chat session When the chat timeout threshold is reached CCAI Platform portal configuration Enabling global target response time Go to Settings > Chat .
- CCAI Platform recommends a high timeout limit when used in conjunction with the Inactive Chat features, no longer than one working day, to give the consumer a longer chance to come back to the chat without having to start a new conversation.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Insert a dynamic user ID Overview This feature enables the CCAI Platform portal to work with your mobile or web SDKs User ID/unique ID as a session variable for tracking or content personalization.
- When the mobile app detects that the data connectivity does not meet the configured performance threshold, CCAI Platform doesn't place a VoIP call.
- Example use cases: Show order details for a specific user via Mobile or Web queues Present your users with product offerings based on their locations by directing to a specialized web page based on user ID Mobile FAQ page landing can be personalized to show the right page for the user's membership tier based on the User ID Feature details If mobile or Web SDK passes User ID/identifier to CCAI Platform portal, it can be inserted as a session variable into your manual deflection webpage or FAQ link From the Admin Portal, an admin can add "@@USER ID@@" into the URL in Manual Deflection to Webpage field under Mobile or Web queues to dynamically retrieve and insert User ID From the Admin Portal, an admin can add "@@USER ID@@" into the URL for Mobile FAQ to dynamically retrieve and insert UID CCAI Platform portal configuration Automatic redirect Go to Settings > Queue > Mobile OR Web .
- If an IVR queue menu is mapped as an Mobile PSTN fallback, the queue cannot be deleted without removing this association Rich data The following data is passed to the CRM ticket for the IVR fallback call: End-user's phone number To gather the phone number data, the end-user is required to input their phone number Example phone number gathering screen in Mobile: Selected queue menu When the end-user makes a call via PSTN, the system retrieves the queue name and custom data package via phone number lookup Custom data package (as configured by your mobile development team) The custom data package is mapped to the correct ticket based on the active call session with the phone number entered by the end-user in the app CCAI Platform portal configuration Go to Settings > Queue > Mobile .

