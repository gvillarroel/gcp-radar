---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.722Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Quality management session event agent_number field"
feature_slug: "quality-management-session-event-agent-number-field"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs"
keywords:
  - "quality"
  - "management"
  - "session"
  - "event"
  - "agent"
  - "number"
  - "field"
  - "call"
---

# Quality management session event agent_number field

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Call session event payloads now include the agent_number value for events with an agent participant.

## Extended Definition

Call session event payloads now include the agent_number value for events with an agent participant.

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
- The new field is available in the following event payload streams: QM call events External call events The new session event field is the same as the agent number field in the CCAIP metadata.
- Feature New quality management (QM) session event field CCAIP now passes a new field in the session event payload for calls.
- Fixed an issue where the Consumer Phone Number field was missing from the following dashboards: Agent Activity Failed Sessions - Calls Missed Interactions - Calls Abandons - Calls CSAT - Calls We also renamed the Customer ANI field to Consumer Phone Number .
- Here is an example of a session event field: "agent number":"1660" Feature Contact lists Agents can now use contact lists, which improve the organization and accessibility of external contacts.

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Detects calls to your main support number from the device's dialer and converts the call to a Mobile call Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Working from home Contact Center AI Platform (CCAI Platform) is the perfect tool to empower agents to work from home.
- Instance size and quota The following table shows CCAI Platform instance sizes and the maximum number of concurrent call or chat sessions.
- Importing Users Bulk User Management Create queues and assign agents to queues Setting up queues for IVR calls .
- Billing depending on which of the following charging models is assigned to your instance: Concurrent agents : the maximum number of concurrent users with the agent role that are signed in during the month period Named agents : the maximum number of users in the instance that have the agent role during the month period Minutes used : the number of minutes that users with the agent role are signed in during the month period Note: Telephony charges are charged according to consumption.

### "CCaaS (CCAI Platform) \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs](https://docs.cloud.google.com/contact-center/ccai-platform/docs)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Agent Assist : Identifies your customers' intent and provides real-time, step-by-step assistance to employees during their calls and chats with customers.
- Customer Experience Insights : Uses natural language processing to help contact center managers by identifying call drivers, sentiment, popular questions, and other information about customer interactions.
- In addition to CCAI Platform, Gemini Enterprise for CX contains the following products: Dialogflow CX : Lets you create advanced virtual agents to handle routine interactions.
- Delivers AI-based omni-channel routing, intelligent Virtual Agent, Agent Assist, and Insights capabilities that enables organizations to streamline customer experiences.

