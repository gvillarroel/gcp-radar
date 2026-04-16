---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.099Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Session data export settings"
feature_slug: "session-data-export-settings"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "session"
  - "export"
  - "settings"
  - "administrators"
  - "can"
  - "configure"
  - "under"
  - "developer"
---

# Session data export settings

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Administrators can configure session data export settings under Developer Settings > Session Data Export.

## Extended Definition

Administrators can configure session data export settings under Developer Settings > Session Data Export.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "Developer Resources \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Voicemail message IVR messages (excluding only the 'purchase flow' messages) Note: only available in English Custom Callback Messages Important: The channel drop-down selection automatically regulates all message configurations listed in both "Mobile & Web SDK" and "Audible Messages" sections for the selected mobile app, with the following exceptions: IVR 'purchase flow' messages All IVR specific messages can only be configured for English Step 7: Mobile App Activation Go to Settings > Developer Settings .
- Push Notifications (required): Certificate PEM file (iOS), FCM (Android) Key Ensure that PEM file is added if the iOS identifier is specified Ensure FCM Key is added if Android identifier is specified Configure Push notification settings based on the readme documents.
- In order to activate a mobile app in Settings > Developer Settings , the mobile app must be assigned as a Mobile App type Direct Access Point (DAP) in the Mobile queue menu structure.
- Scenario 2: Add your first mobile app Go to Settings > Developer Settings and scroll to the Mobile Apps section.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Dismissed chat details Dismissal settings can be set globally or per-queue When chats have been dismissed, they do not accrue wait time For a chat to be dismissed, both the consumer and agent have to have sent at least one message The dismiss eligibility timer starts from the latest message from an agent Only inbound chats can be dismissed When chats are dismissed and later reactivated, a consumer has to send at least one message afterward before the chat is eligible to be dismissed again Dismissed chats are ultimately ended when the chat timeout duration is met When chats are dismissed, activities are added to the chat transcript Chat Flow CCAI Platform portal configuration Dismissing chats - global setting A global configuration for all chat channels can be configured in Chat Settings.
- When the target response time is met, chats will not end Chats end when: Agent manually clicks end chat The consumer: Closes the active tab Navigates away from the page the chat session started on Clicks x on the chat session When the chat timeout threshold is reached CCAI Platform portal configuration Enabling global target response time Go to Settings > Chat .
- Be sure to store this in a secure location. ::: The API Credential Management Settings allow you to: add new API credentials disable / enable credentials regenerate the secret token or edit the name of an existing credential Add an API credential Go to Settings > Developer Settings > API Credential management .
- In the Web & Mobile Chat Settings pane, for Transfer Limits , do the following for Web or Mobile , or both, depending on your requirements: Select the Limit the total count of transfers in a single chat session to [number field] checkbox.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Prerequisites In order to enable the Pre-session Deflection, you must have the following: A valid CCAI Platform account with Admin role assigned A valid Legacy, Pro, Enterprise, or Digital License Package A valid subscription for CCAI Platform IVR Support with IVR enabled A valid subscription for CCAI Platform SMS Support enabled with a valid queue structure The SMS must be functional (agent assigned) Basic configuration Do the following procedures, in order: Enable pre-session SMS deflection Enable and save the pre-session SMS deflection offer and opted-in messages Enable and save the pre-session SMS deflection greeting message Configure pre-session SMS deflection for a specific queue Enable pre-session SMS deflection Go Settings > Call.
- Salesforce-specific configuration options that impact available options If Attach CCAI Platform Sessions directly to the account lookup object option is enabled in Settings > Developer, then the record drop-down is hidden.
- Under the Conditional Settings section, select the Estimated Wait Time limit over which the Pre-session SMS Deflection must be triggered.
- When enabled, configure the TSS or upload a custom greeting in Settings Languages & Messages Deflection to Voicemail option - Request Already Placed Message. - Limit consumer to 1 voicemail per queue: a consumer could leave a separate voicemail request on a separate queue. - Limit consumer to 1 voicemail request across all queues: voicemail option not available if an unattended voicemail is already left form the phone number.

