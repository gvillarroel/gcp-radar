---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.718Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Auto answer settings relocation"
feature_slug: "auto-answer-settings-relocation"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs"
keywords:
  - "auto"
  - "answer"
  - "settings"
  - "relocation"
  - "for"
  - "calls"
  - "and"
  - "chats"
---

# Auto answer settings relocation

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Auto answer settings for calls and chats have been moved to new routing configuration locations.

## Extended Definition

Auto answer settings for calls and chats have been moved to new routing configuration locations.

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
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Feature Auto answer settings are relocated The following auto answer settings for calls and chats have been relocated.
- Functionality remains the same: Global settings (moved to the Operations Management Routing page): Old Locations: Calls: Settings > Call Chats: Settings > Chat New Locations: Calls: Settings > Operation Management > Routing > Call Routing > Deltacast Chats: Settings > Operation Management > Routing > Chat Routing > Deltacast Queue-level settings (moved to the Deltacast Settings page): Old Locations: Calls: Settings > Queue > [IVR] [Mobile] [Web] Chats: Settings > Queue > Web New Locations: Calls: Settings > Queue > [IVR] [Mobile] [Web] > Routing > Call Routing > Deltacast Chats: Settings > Queue > Web > Routing > Call Routing > Deltacast For more information, see Auto answer .
- Administrators: The new Disable Multicast fallback after all Deltacast attempts checkbox appears in the following places: Settings > Operation Management > Routing Call Routing Settings > Operation Management > Routing Chat Routing Settings > Queue > IVR or Mobile or Web Edit / View > QUEUE NAME > Routing Configure > Call Routing Settings > Queue > IVR or Mobile or Web Edit / View > QUEUE NAME > Routing Configure > Chat Routing For more information, see Turn on deltacast for calls globally and Turn on deltacast for calls at the queue level .
- Feature Performance overview dashboard The performance overview dashboard now includes the following tiles: Avg Queue Time : the average time a session (call or chat) spent in a queue until an agent accepted it or the end-user abandoned it Avg Queue Abandon Time : the average time that sessions (calls or chats) waited in a queue before being disconnected without an agent accepting them Sentiment Score : the average sentiment score for sessions (calls or chats) For more information, see Performance overview dashboard .

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Instant web calls: Provide visitors with an estimated wait time and automatically initiate an outbound call to a site visitor when their place in the support queue is reached Scheduled calls: Allow site visitors to schedule a time to talk with your support team Queue deflection: Automatically route end users to a message or page on your site Chat support: Provide live chat support directly from your website Proactive triggers : Display a contact bubble for web calls and chats automatically based on visitor behavior.
- Configure settings for handling chats Enable chat, create proactive web triggers, establish chat channel settings like chat threshold for agents and timeout settings at Settings > Chat Create chat shortcuts for agents to use.
- Configure settings for handling calls Call recording, call timers and displays, and default call routing settings: Settings > Calls > Call Details .
- Detects calls to your main support number from the device's dialer and converts the call to a Mobile call Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Working from home Contact Center AI Platform (CCAI Platform) is the perfect tool to empower agents to work from home.

### "CCaaS (CCAI Platform) \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs](https://docs.cloud.google.com/contact-center/ccai-platform/docs)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Agent Assist : Identifies your customers' intent and provides real-time, step-by-step assistance to employees during their calls and chats with customers.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- What's next Get started with CCAI Platform Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Contact Center AI Platform (CCAI Platform) is an AI-driven Contact Center as a Service platform that is built natively on Google Cloud and uses the other Gemini Enterprise for Customer Experience products at its core.

