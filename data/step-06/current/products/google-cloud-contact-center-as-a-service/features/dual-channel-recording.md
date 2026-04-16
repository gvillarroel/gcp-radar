---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.138Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Dual Channel Recording"
feature_slug: "dual-channel-recording"
latest_feature_date: "2022-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages"
keywords:
  - "dual"
  - "channel"
  - "recording"
  - "feature"
  - "records"
  - "calls"
  - "separate"
  - "customer"
---

# Dual Channel Recording

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

This feature records calls in separate customer and agent audio channels.

## Extended Definition

This feature records calls in separate customer and agent audio channels.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)

## Supporting Pages

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When analyzing calls, dual-channel recordings allow your call centre managers and quality supervisors to concentrate on a single channel (only the end-user or only the agent).
- Use dual channel recording settings Enable dual channel recording to record your call using two separate channels, for example an end-user channel and an agent channel.
- Selecting the checkbox will record all calls as dual channel audio recordings.
- Record : Records all calls Do Not Record : Does not record any calls for the queue Ask Permission to Record : Asks the caller for permission to record Channel Note: This setting behaves different based on channel IVR When using the Ask Permission to Record option, you will need to add the Ask to Record message found on the IVR Message Setup page.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Call experience flows Call Flow experience for different call types Overcapacity Deflection IVR Mobile Afterhours Deflection IVR Mobile Recording Per Queue Option Temporary Redirect per IVR Queue Credit Card Over IVR Scheduled calls Rather than waiting in queue for an agent, give consumers the option to select a time that works for them to receive a call from an agent.
- Specific Interactive Voice Response (IVR) inbound routing If you have a line that is specific to a particular customer type or marketing promotion, Direct Access Points can be used to direct phone calls to that specific point in the queue.
- Click the Mobile and Web SDK - Enable Overcapacity Deflection toggle to the on position to deflect customers reaching out using Mobile and Web channels when the wait time in queue is greater than the specified duration.
- For Call Recording , select the Record Consumer-to-Agent Calls checkbox to enable recording end-user to agent calls.

### "Customizing languages, recordings, & messages \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- Source ID: `site-docs-reference-2`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customer-facing languages currently include: Arabic Czech Chinese, Simplified Chinese, Traditional Danish Dutch English (Australian) English (Canada) English (UK) English (US) Finnish French (France) French (Canada) German Hungarian Italian Japanese Korean Norwegian Polish Portuguese (Brazil) Portuguese (Portugal) Spanish (Spain) Spanish (Mexico) Swedish Thai Turkish Vietnamese Note: Text-to-Speech (TTS) is not yet available for these languages.
- When selecting a Mobile App, the Channel drop-down automatically regulates all message configurations listed in both "Mobile & Web SDK" and "Audible Messages" sections for the selected mobile app, with the following exceptions: IVR Purchase Flow Messages All IVR messages customized for use within a mobile app can currently only be configured for English US.
- Variables for dynamic consumer messages Variables are dynamic content tags that allow you to personalize messaging configuration in order to manage secure payments, configure greeting and after-hours messaging, and inform customers of their wait time and place in queue.
- Enabling multiple languages for IVR, mobile, and web channels Adding languages creates a new queue structure for each channel, enabling all queue settings and assignments, messages, and all queue-specific settings to be set per language.

