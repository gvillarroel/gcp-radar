---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.059Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Agent Assist added event"
feature_slug: "agent-assist-added-event"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "agent"
  - "assist"
  - "added"
  - "event"
  - "provides"
  - "conversation"
  - "id"
  - "specific"
---

# Agent Assist added event

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

A new Agent_Assist_Added event provides the conversation ID for a specific Agent Assist session.

## Extended Definition

A new Agent_Assist_Added event provides the conversation ID for a specific Agent Assist session.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "Agent Assist \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Knowledge Assist This feature follows a conversation between a human agent and an end-user and provides the human agent with relevant document suggestions.
- Knowledge assist This feature follows a conversation between a live agent and a end-user and provides the live agent with relevant document suggestions.
- In addition, you must grant the following IAM roles to your service account: Dialogflow Agent Assist Client Note: Failure to grant the correct IAM role prevents Agent Assist from working correctly.
- Service account requirements To use Agent Assist, you need to create a Google Cloud Service Account and key in the project where you created your Agent Assist conversation profile .

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Dismissed chat details Dismissal settings can be set globally or per-queue When chats have been dismissed, they do not accrue wait time For a chat to be dismissed, both the consumer and agent have to have sent at least one message The dismiss eligibility timer starts from the latest message from an agent Only inbound chats can be dismissed When chats are dismissed and later reactivated, a consumer has to send at least one message afterward before the chat is eligible to be dismissed again Dismissed chats are ultimately ended when the chat timeout duration is met When chats are dismissed, activities are added to the chat transcript Chat Flow CCAI Platform portal configuration Dismissing chats - global setting A global configuration for all chat channels can be configured in Chat Settings.
- Feature benefits For Managers and Admins Automatically remind agents to respond promptly to conversations For Agents Visually shows which chat needs their attention first For end-users Less waiting time and quicker resolution time Feature details The response timer starts when the agent is assigned and the consumer has sent a message and applies even if an agent has not yet sent a message If the agent responds, the counter will not begin again until the consumer replies.
- For When the transfer count exceeds the limit , select one of the following: Disable all transfer options : when the limit is reached, this prevents an agent from making additional transfers Allow one final transfer to the queue : when the limit is reached, this lets an agent do a final transfer to a queue that you specify.
- Chat Shortcuts Overview When chatting with consumers and prospects, agents need to get to the resolution as quickly as possible, and chat shortcuts can be used to add repeatable phrases, steps, and solutions to chat conversations.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Prerequisites In order to enable the Pre-session Deflection, you must have the following: A valid CCAI Platform account with Admin role assigned A valid Legacy, Pro, Enterprise, or Digital License Package A valid subscription for CCAI Platform IVR Support with IVR enabled A valid subscription for CCAI Platform SMS Support enabled with a valid queue structure The SMS must be functional (agent assigned) Basic configuration Do the following procedures, in order: Enable pre-session SMS deflection Enable and save the pre-session SMS deflection offer and opted-in messages Enable and save the pre-session SMS deflection greeting message Configure pre-session SMS deflection for a specific queue Enable pre-session SMS deflection Go Settings > Call.
- CCAI Platform supports the following emergency and special services phone numbers: US emergency numbers Canada emergency numbers Canada special service numbers 911 - Emergency 911 - Emergency 211 - Public information and referral services 933 - Emergency test 311 - Non-emergency municipal government services 411 - Local directory assistance 511 - Weather and traveler information services 611 - Repair service 711 - Message relay service (MRS) 811 - Non-urgent health care telephone triage service 988 - Suicide and crisis lifeline Turn emergency calling on or off Turn on emergency calling to let authorized agents make and manage emergency and special services calls in the call adapter.
- Agents have options for specific outbound numbers based on their queue assignments, or can be configured to not have options at all and will always dial outbound from the phone number which is set by the administrator.
- Account or record selection CCAI Platform temporarily stores all events/info/data that happen during the call until an Account or Record is assigned either by an Agent or by the system.

