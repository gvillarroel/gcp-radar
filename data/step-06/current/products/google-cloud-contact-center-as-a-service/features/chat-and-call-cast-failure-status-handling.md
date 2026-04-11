---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.771Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Chat and call cast failure status handling"
feature_slug: "chat-and-call-cast-failure-status-handling"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs"
keywords:
  - "chat"
  - "and"
  - "call"
  - "cast"
  - "failure"
  - "status"
  - "handling"
  - "if"
---

# Chat and call cast failure status handling

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

If a chat or call cast fails or is not picked up, the agent status now changes to Unresponsive or Missed Chat as appropriate.

## Extended Definition

If a chat or call cast fails or is not picked up, the agent status now changes to Unresponsive or Missed Chat as appropriate.

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
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- If a call/chat is cast to an agent but the agent fails to pick up, the agent's next status will be moved to Missed Chat status regardless of the status they're currently in.
- Feature Missed chat / Unresponsive status (while in-chat) : Improved handling of agent statuses when a session cast to an agent fails due to network issues.
- Administrators: The new Disable Multicast fallback after all Deltacast attempts checkbox appears in the following places: Settings > Operation Management > Routing Call Routing Settings > Operation Management > Routing Chat Routing Settings > Queue > IVR or Mobile or Web Edit / View > QUEUE NAME > Routing Configure > Call Routing Settings > Queue > IVR or Mobile or Web Edit / View > QUEUE NAME > Routing Configure > Chat Routing For more information, see Turn on deltacast for calls globally and Turn on deltacast for calls at the queue level .
- Fixed a data discrepancy in NICE WFM interval reports where chat metrics (specifically ContactsReceived and HandledLong) were incorrectly showing activity during time intervals where no chats actually occurred.

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Instant web calls: Provide visitors with an estimated wait time and automatically initiate an outbound call to a site visitor when their place in the support queue is reached Scheduled calls: Allow site visitors to schedule a time to talk with your support team Queue deflection: Automatically route end users to a message or page on your site Chat support: Provide live chat support directly from your website Proactive triggers : Display a contact bubble for web calls and chats automatically based on visitor behavior.
- Configure settings for handling chats Enable chat, create proactive web triggers, establish chat channel settings like chat threshold for agents and timeout settings at Settings > Chat Create chat shortcuts for agents to use.
- Call deflections: Configure call deflections based on volume and business hours, and, if needed, to: Allow the user to schedule a call for another time.
- Configure settings for handling calls Call recording, call timers and displays, and default call routing settings: Settings > Calls > Call Details .

### "CCaaS (CCAI Platform) \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs](https://docs.cloud.google.com/contact-center/ccai-platform/docs)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Agent Assist : Identifies your customers' intent and provides real-time, step-by-step assistance to employees during their calls and chats with customers.
- Customer Experience Insights : Uses natural language processing to help contact center managers by identifying call drivers, sentiment, popular questions, and other information about customer interactions.
- CCAI Platform is a unified contact center platform that accelerates the organization's ability to leverage and deploy Gemini Enterprise for CX without relying on multiple technology providers.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

