---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.060Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Alvaria Workforce Management chat integration"
feature_slug: "alvaria-workforce-management-chat-integration"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/kustomer-integration-guide"
keywords:
  - "alvaria"
  - "workforce"
  - "management"
  - "chat"
  - "integration"
  - "integrated"
  - "customers"
  - "can"
---

# Alvaria Workforce Management chat integration

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Alvaria-integrated customers can receive chat session data.

## Extended Definition

Alvaria-integrated customers can receive chat session data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/kustomer-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/kustomer-integration-guide)

## Supporting Pages

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- CCAI Platform portal configuration Enable Deltacast From the CCAI Platform portal, go to Settings > Operation Management Deltacast > Chat .
- Chat Settings - Live Translation Live translation provides real-time language translation between customers (end users) and agents.
- Consumer Management Consumer Privacy You can remove call, chat, or email data to ensure consumer privacy.
- For integrated CRMs, chat transcripts are sent to external storage using SFTP.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- When making or receiving calls or chats, the CCAI Platform integration will automatically pop the Salesforce case.
- When making or receiving calls or chats, the CCAI Platform integration will automatically pop the Salesforce case.
- Case owner and assignment After the default administrator is enabled, the default administrator is used as the owner for the following: Ticket/case and contact creation when a new chat is initiated before an agent is assigned to the chat Voicemail tickets/cases before receiving a callback call Call ticket/cases for abandoned calls (if enabled) Note: If the default user is not configured, CCAI Platform uses a random Agent When a call/chat is transferred: CCAI Platform assigns the case to the agent who the call is transferred to.
- Feature details 1 to 1 Salesforce agent account to CCAI Platform agent account mapping is required This feature allows for 1-way sync from the CRM -> CCAI Platform If the status is changed in CCAI Platform, the CRM status will not be changed Status change behavior CCAI Platform statuses protected from real-time CRM changes If an agent is In-call, In-chat, or Wrap-up, the status inherited from the CRM will be applied once the call, chat, or wrap-up has ended.

### "Kustomer CRM integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/kustomer-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/kustomer-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After the Contact Center AI Platform app is configured, your team can go to Widgets on the navigation bar and select the appropriate voice or chat widget to login and access their Contact Center AI Platform adapters in Kustomer.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Kustomer CRM integration guide Stay organized with collections Save and categorize content based on your preferences.
- Testing the Integration Before integration testing, you have to force reload the page in your browser to apply and display app settings changes in Kustomer.
- When agents receive calls through the Contact Center AI Platform adapter, Kustomer automatically creates and logs new customers and conversations.

