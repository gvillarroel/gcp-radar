---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.120Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Fallback IVR navigation settings"
feature_slug: "fallback-ivr-navigation-settings"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "fallback"
  - "ivr"
  - "navigation"
  - "settings"
  - "administrators"
  - "can"
  - "configure"
  - "global"
---

# Fallback IVR navigation settings

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Administrators can configure global and queue-level fallback routing when an end user does not select a queue in IVR navigation.

## Extended Definition

Administrators can configure global and queue-level fallback routing when an end user does not select a queue in IVR navigation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- The number of dialed, failed, and completed calls are reported for the following types of calls: Calls to emergency services Conference calls with emergency services Calls to special services Conference calls with special services Configure global call settings You can configure global call settings on the Settings > Call page of CCAI Platform.
- Configure overcapacity deflections at the global level To configure overcapacity deflections at the global level, follow these steps: In the CCAI Platform portal, click Settings > Call .
- Configure after hours deflections at the global level To configure after hours deflections at the global level, follow these steps: In the CCAI Platform portal, click Settings > Call .
- Important: If you override an agent's self-configured deflection settings, you can't directly revert to the default or global deflection settings.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- In the side menu queue settings, navigate to Custom Fallback IVR Navigation and select Configure .
- If an IVR queue menu is mapped as an Mobile PSTN fallback, the queue cannot be deleted without removing this association Rich data The following data is passed to the CRM ticket for the IVR fallback call: End-user's phone number To gather the phone number data, the end-user is required to input their phone number Example phone number gathering screen in Mobile: Selected queue menu When the end-user makes a call via PSTN, the system retrieves the queue name and custom data package via phone number lookup Custom data package (as configured by your mobile development team) The custom data package is mapped to the correct ticket based on the active call session with the phone number entered by the end-user in the app CCAI Platform portal configuration Go to Settings > Queue > Mobile .
- Configuration iOS/Android Developer : With Multiple Mobile Apps in use, the threshold for PSTN Callback calls will be configured from within the Admin Portal in Settings > Developer Settings > Edit Mobile App > Fallback phone number/threshold .
- Timeout and expiration settings Global timeout settings for SMS chats are configured on the Settings Chat page but you can override them at the queue level.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Dismissed chat details Dismissal settings can be set globally or per-queue When chats have been dismissed, they do not accrue wait time For a chat to be dismissed, both the consumer and agent have to have sent at least one message The dismiss eligibility timer starts from the latest message from an agent Only inbound chats can be dismissed When chats are dismissed and later reactivated, a consumer has to send at least one message afterward before the chat is eligible to be dismissed again Dismissed chats are ultimately ended when the chat timeout duration is met When chats are dismissed, activities are added to the chat transcript Chat Flow CCAI Platform portal configuration Dismissing chats - global setting A global configuration for all chat channels can be configured in Chat Settings.
- Configure automatic redaction settings at the global level To configure automatic redaction settings at the global level, follow these steps: In the CCAI Platform portal, click Settings > Chat .
- Configure chat check-in at the global level To configure chat check-in at the global level, follow these steps: In the CCAI Platform portal, click Settings > Chat .
- For more information, see Configure automatic redaction settings at the global level and Configure automatic redaction settings at the queue level .

