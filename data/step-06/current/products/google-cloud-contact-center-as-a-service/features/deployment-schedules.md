---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.081Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Deployment schedules"
feature_slug: "deployment-schedules"
latest_feature_date: "2024-04-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "deployment"
  - "schedules"
  - "let"
  - "you"
  - "control"
  - "when"
  - "automatic"
  - "updates"
---

# Deployment schedules

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Deployment schedules let you control when Google's automatic updates are applied to a contact center instance.

## Extended Definition

Deployment schedules let you control when Google's automatic updates are applied to a contact center instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instant web calls: Provide visitors with an estimated wait time and automatically initiate an outbound call to a site visitor when their place in the support queue is reached Scheduled calls: Allow site visitors to schedule a time to talk with your support team Queue deflection: Automatically route end users to a message or page on your site Chat support: Provide live chat support directly from your website Proactive triggers : Display a contact bubble for web calls and chats automatically based on visitor behavior.
- Google updates instances set for the critical deployment schedule within one week after all regular deployment schedule instances are updated.
- In the Deployment schedule field, select one of the following: Rapid : Get updates as early as possible.
- Regular : Get updates at least two days after updates are available with rapid deployment.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Select the Use the admin user for all record creations/updates that can't be attributed to a specific agent checkbox to make the instance administrator the default author of new or updated tickets created in CCAI Platform when a specific agent hasn't been assigned.
- Attachments and actions logged When an inbound/outboundcall ends, CCAI Platform updates the case with the call recording file when call recording is enabled.
- When a SmartAction fails due to an error on the user's side (i.e. fingerprint access not enabled), CCAI Platform updates the case with the error message.
- When making or receiving calls or chats, the CCAI Platform integration will automatically pop the Salesforce case.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Use callback fulfillment hours to automatically reschedule callbacks to the next business day when they fall outside of a configured window, rather than cancelling them when queue expiration is reached.
- For the Automatically select account and record option, select if you want the system to automatically assign the account or record when the call ends, or after the call wrap-up ends.
- When the threshold time is met, the voicemail is automatically dismissed and the agent is returned to the voicemail queue page.
- Stay on the line and when the session is successfully converted to SMS, this call will be automatically terminated.

