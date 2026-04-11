---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.625Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Revert to agent deflection settings"
feature_slug: "revert-to-agent-deflection-settings"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs"
keywords:
  - "revert"
  - "to"
  - "agent"
  - "deflection"
  - "settings"
  - "administrators"
  - "can"
  - "the"
---

# Revert to agent deflection settings

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Administrators can revert agent deflection settings to the values selected by the agent in the call adapter.

## Extended Definition

Administrators can revert agent deflection settings to the values selected by the agent in the call adapter.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes](https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs](https://docs.cloud.google.com/contact-center/ccai-platform/docs)

## Supporting Pages

### "Contact Center AI Platform release notes \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes](https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- A new Upload audio recording option appears in the call adapter in the following locations: Options > Agent Deflections > After hours deflection Options > Agent Deflections > Overcapacity deflection Options > Agent Deflections > Automatic redirections If you make changes to an agent's after-hours deflection settings, overcapacity deflection settings, or automatic redirection settings, you can now revert to the settings that the agent selected in the call adapter.
- The Revert to agent settings button appears in the Agent Call Deflections section on the agent's Edit User page.
- Administrators: You can find the settings for configuring automatic redaction in the following locations: To add a redaction platform: Settings > Developer Settings Redaction Platform To configure automatic redaction at the global level: Settings Chat > Automatic Redaction To configure automatic redaction at the queue level: Settings > Queue > Web > Edit / View > SELECT QUEUE Automatic Redaction For more information, see Sensitive data redaction .
- If a top-level queue has no available leaf queues or is incorrectly configured, the IVR fallback will redirect the caller to the previous queue (if human agents are available) or provide an error message before disconnecting (if the top-level queue has no available agents).To enable this feature: Enter the top-level queue ID in the Dialogflow destination (you can find parent queue IDs in the Virtual Agent queue menu settings).

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Assigning Agents to queues so they can receive calls/chats.
- Instant web calls: Provide visitors with an estimated wait time and automatically initiate an outbound call to a site visitor when their place in the support queue is reached Scheduled calls: Allow site visitors to schedule a time to talk with your support team Queue deflection: Automatically route end users to a message or page on your site Chat support: Provide live chat support directly from your website Proactive triggers : Display a contact bubble for web calls and chats automatically based on visitor behavior.
- Recommended headset features Binaural - Audio in both ears cuts down on background noise Noise-canceling microphone Noise-canceling headset USB connection Brands of headsets our customers use Jabra Logitech Plantronics Sennheiser What's next Configure a sample contact center Private Service Connect Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Billing depending on which of the following charging models is assigned to your instance: Concurrent agents : the maximum number of concurrent users with the agent role that are signed in during the month period Named agents : the maximum number of users in the instance that have the agent role during the month period Minutes used : the number of minutes that users with the agent role are signed in during the month period Note: Telephony charges are charged according to consumption.

### "CCaaS (CCAI Platform) \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs](https://docs.cloud.google.com/contact-center/ccai-platform/docs)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- In addition to CCAI Platform, Gemini Enterprise for CX contains the following products: Dialogflow CX : Lets you create advanced virtual agents to handle routine interactions.
- Agent Assist : Identifies your customers' intent and provides real-time, step-by-step assistance to employees during their calls and chats with customers.
- It uses the contact center AI building blocks to allow a seamless transition to human agents.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

