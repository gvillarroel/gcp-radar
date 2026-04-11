---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.768Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Voice Virtual Agent transfers to parent queues"
feature_slug: "voice-virtual-agent-transfers-to-parent-queues"
latest_feature_date: "2023-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs"
keywords:
  - "voice"
  - "virtual"
  - "agent"
  - "transfers"
  - "to"
  - "parent"
  - "queues"
  - "can"
---

# Voice Virtual Agent transfers to parent queues

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Voice Virtual Agent transfers can be assigned to top-level queues so users can hear subqueue options in IVR.

## Extended Definition

Voice Virtual Agent transfers can be assigned to top-level queues so users can hear subqueue options in IVR.

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
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Feature Voice Virtual Agent assignment, transfers to parent queue : You can now assign voice Virtual Agent transfers to top-level queues.
- If a top-level queue has no available leaf queues or is incorrectly configured, the IVR fallback will redirect the caller to the previous queue (if human agents are available) or provide an error message before disconnecting (if the top-level queue has no available agents).To enable this feature: Enter the top-level queue ID in the Dialogflow destination (you can find parent queue IDs in the Virtual Agent queue menu settings).
- Feature New post events for virtual task assistants The following new virtual task assistant post events are available: Virtual task assistant joined Virtual task assistant left Virtual task assistant session variables received The agent adapter can use the browser's postMessage() method to send events to the parent iFrame to trigger various actions in your custom CRM application.
- Feature Virtual agent to virtual agent direct chat transfers You can configure Dialogflow payloads to transfer chat sessions from one virtual agent directly to another virtual agent, using the destination virtual agent's agent ID.

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Direct queues to a visual message Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Android SDK With the CCAI Platform Android SDK, you can create seamless voice and chat support experiences for users of your Android apps.
- Assigning Agents to queues so they can receive calls/chats.
- Mobile Web Support : Customers on mobile devices can also access your Web SDK Direct Access Points : Decide which queue, language, or channel an end-user should reach when on a particular page or with predefined account details iOS SDK With the CCAI Platform iOS SDK, you can create seamless voice and chat support experiences for users of your iPhone and iPad apps.
- Programs & physical requirements Agents should use a hard-wired connection as Wi-Fi connectivity cannot guarantee the support of proper voice quality.

### "CCaaS (CCAI Platform) \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs](https://docs.cloud.google.com/contact-center/ccai-platform/docs)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- In addition to CCAI Platform, Gemini Enterprise for CX contains the following products: Dialogflow CX : Lets you create advanced virtual agents to handle routine interactions.
- Delivers AI-based omni-channel routing, intelligent Virtual Agent, Agent Assist, and Insights capabilities that enables organizations to streamline customer experiences.
- Agent Assist : Identifies your customers' intent and provides real-time, step-by-step assistance to employees during their calls and chats with customers.
- CCAI Platform is a full-stack contact center platform for queuing and routing customer interactions across voice and digital channels.

