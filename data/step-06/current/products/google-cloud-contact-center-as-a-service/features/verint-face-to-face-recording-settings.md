---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.099Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Verint Face-to-Face recording settings"
feature_slug: "verint-face-to-face-recording-settings"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages"
keywords:
  - "verint"
  - "face"
  - "recording"
  - "settings"
  - "integration"
  - "administrators"
  - "can"
  - "add"
---

# Verint Face-to-Face recording settings

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

With a Verint integration, administrators can add email domains to record calls made by agents with matching email domains.

## Extended Definition

With a Verint integration, administrators can add email domains to record calls made by agents with matching email domains.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- The Call Settings page enables the following settings, and the Languages and Messages page offers the configuration for voice recordings or Text-to-Speech prompts that are required after certain settings are enabled.
- To configure call recording, follow these steps: In the CCAI Platform portal, click Settings > Call .
- To configure call recording, follow these steps: In the CCAI Platform portal, click Settings > Call .
- Prerequisites In order to enable the Pre-session Deflection, you must have the following: A valid CCAI Platform account with Admin role assigned A valid Legacy, Pro, Enterprise, or Digital License Package A valid subscription for CCAI Platform IVR Support with IVR enabled A valid subscription for CCAI Platform SMS Support enabled with a valid queue structure The SMS must be functional (agent assigned) Basic configuration Do the following procedures, in order: Enable pre-session SMS deflection Enable and save the pre-session SMS deflection offer and opted-in messages Enable and save the pre-session SMS deflection greeting message Configure pre-session SMS deflection for a specific queue Enable pre-session SMS deflection Go Settings > Call.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Allow agent to select "Do not create a case" option for outbound calls When settings indicate that session data is mapped to the CCAI Platform Session object, call data including the call recording will be stored in the CCAI Platform Session and associated to the selected lookup object.
- When settings indicate that session data is mapped to the Activity Object, no call data will be stored, including the call recording.
- No Case: ability to connect the CCAI Platform Custom Session object directly to any Salesforce account object, bypassing the need to create a case This builds on two related features: Option to look-up end users in Person Account object (instead of Contact ( default )) Option to leverage our CCAI Platform Session Object which stores all assets and data related to a single session in optimized CCAI Platform Session object Configuration availability requirements The configuration options for Account Lookup and Session Data are only available if the following conditions are met: Account Lookup configuration To configure custom account lookup settings, the following is required: Logged in Agent - at least one agent needs to be logged into a CCAI Platform adapter in Salesforce.
- Account and case behavior Account ID Account ID can be selected by: Clicking on the phone number from Account or Contact record Clicking the sync icon to sync when on the page of an Account or Contact record Entering an outbound phone number that is associated to an Account Clicking on a phone number in a Case that is associated with an Account ID and Case Case ID Case ID can be selected by: Once the Account ID is selected by one of the options above, CCAI Platform checks for one or more open cases for the selected Account ID and selects the most recent, or allows the agent to select based on your settings.

### "Customizing languages, recordings, & messages \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Ask Permission to Record : plays if Ask User Permission To Record is selected in the Call Recording Settings pane for a queue.
- Agent Assigned Message: Message sent to the consumer once an agent has been assigned to the session. @{AGENT} will chat with you about @{QUEUE} Dismissal Warning Notification (Web Only): When inactive chats are set to auto-dismiss messages, this message is sent to the consumer based on the timer set in Settings > Chat .
- Pre-defined SMS messages can be created at Settings > Languages and Messages > Pre-session SMS Deflection Global messages for WhatsApp can be created at Settings > Languages and Messages > WhatsApp @{COMPANY NAME} Description: inserts the company name as defined in Support Center Details > Display Name .
- Enabling multiple languages for IVR, mobile, and web channels Adding languages creates a new queue structure for each channel, enabling all queue settings and assignments, messages, and all queue-specific settings to be set per language.

