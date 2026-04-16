---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.106Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Call recording and chat transcript file access control"
feature_slug: "call-recording-and-chat-transcript-file-access-control"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "call"
  - "recording"
  - "chat"
  - "transcript"
  - "file"
  - "access"
  - "control"
  - "role"
---

# Call recording and chat transcript file access control

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

A role permission now controls whether users can access call recordings and chat transcript files stored in external storage without a CRM.

## Extended Definition

A role permission now controls whether users can access call recordings and chat transcript files stored in external storage without a CRM.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There are only three (3) scenarios when a call recording deletion would be delayed after call completion: Customer CRM has not sent an acknowledgment of successful data upload, The CRM API limit has been reached, or The call recording file is too large for the CRM system to upload.
- User profile flags When reserved data properties are sent to CCAI Platform during a call or chat session, this information is displayed in the agent adapter in the form of user profile flags.
- Maximum file size If the call recording size exceeds 50MB, CCAI Platform will split the file into smaller size files then attach them to CRM ticket in order.
- For information about how these flags are displayed in the agent adapter, see User profile flags for chat and User profile flags for calls .

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Prerequisites In order to enable the Pre-session Deflection, you must have the following: A valid CCAI Platform account with Admin role assigned A valid Legacy, Pro, Enterprise, or Digital License Package A valid subscription for CCAI Platform IVR Support with IVR enabled A valid subscription for CCAI Platform SMS Support enabled with a valid queue structure The SMS must be functional (agent assigned) Basic configuration Do the following procedures, in order: Enable pre-session SMS deflection Enable and save the pre-session SMS deflection offer and opted-in messages Enable and save the pre-session SMS deflection greeting message Configure pre-session SMS deflection for a specific queue Enable pre-session SMS deflection Go Settings > Call.
- Customize announcement By default the estimated wait announcement will be announced using a TTS voice: "Thank you for calling, your estimated wait time is @{ESTIMATED WAIT TIME IN MINUTES}." To customize the message follow these steps: Record a custom audio file that leaves room at the end for the system to fill in the variable for what the estimated wait time will be announced as.
- Call experience flows Call Flow experience for different call types Overcapacity Deflection IVR Mobile Afterhours Deflection IVR Mobile Recording Per Queue Option Temporary Redirect per IVR Queue Credit Card Over IVR Scheduled calls Rather than waiting in queue for an agent, give consumers the option to select a time that works for them to receive a call from an agent.
- Overcapacity Deflection When enabled, the "Overcapacity Deflection" and "Overcapacity Deflection Options" messages will play, as well as specific recordings for options like "Overcapacity Deflection Callback Option." When you add or remove options, be sure to update the message that lists the options callers have, otherwise, callers won't know the new options exist.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- For a custom CRM with a generic API, the chat transcript can be added as a file attachment if the Upload a file endpoint is configured, or posted as a comment if the Comment endpoint has been configured.
- Transcript upload locations in a CRM or external storage After the chat is complete, transcripts are uploaded to the CRM or external storage as a TXT file.
- If images or videos were included in the chat, then URLs to those files are included in the chat transcript.
- Unredacted transcripts are stored in a folder called chat-transcripts-unredacted .

