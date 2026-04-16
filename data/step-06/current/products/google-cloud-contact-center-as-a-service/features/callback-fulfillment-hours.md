---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:46.999Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Callback fulfillment hours"
feature_slug: "callback-fulfillment-hours"
latest_feature_date: "2026-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "callback"
  - "fulfillment"
  - "hours"
  - "lets"
  - "administrators"
  - "define"
  - "during"
  - "which"
---

# Callback fulfillment hours

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Lets administrators define the hours during which the contact center fulfills callbacks, with optional rollover to the next day.

## Extended Definition

Lets administrators define the hours during which the contact center fulfills callbacks, with optional rollover to the next day.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Callback fulfillment hours You can define callback fulfillment hours at the global and queue level.
- In the Define Callback Fulfillment Hours field, select the hours of operation.
- In the Define Callback Fulfillment Hours field, select the hours of operation.
- Use callback fulfillment hours to automatically reschedule callbacks to the next business day when they fall outside of a configured window, rather than cancelling them when queue expiration is reached.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Emails will have the end-user's entered email address in the Reply-to Header field All emails will use this subject format: {Queue Name} [from: {email} ] Your CRM team should set up a rule that identifies the email address in the subject or body of the email and use the email address to identify the contact for the best experience Once enabled, the email form with the custom email per-queue shows at all times for the email channel, including: during operation hours, after operation hours, and for email deflection options CCAI Platform portal sends to the email address specified and then inbound emails are handled by your email provider.
- EWT for calls For calls, EWT is calculated based on the following formula: EWT = ((average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued calls - available agents)) + {EWT for callbacks, campaign calls, and scheduled calls} EWT for chats For chats, EWT is calculated based on the following formula: EWT = (average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued chats - available agents) Note: In chat channels, the value for active agents includes a multiplier based on the chat concurrency if the chat concurrency is >1.
- Feature details Only agents assigned to calls from or to queues that have been specifically enabled will see the option to redact calls Calls initiated from an enabled queue that are transferred to a queue without call redaction enabled will not have the call redaction feature available Agents need to manually initiate and end the redaction Agents will still be able to hear during the redacted section of the call while on the live call Admin portal configuration Enable call redaction for inbound calls Go to Settings > Queue .
- Play Ask Permission to Record Message before Call Recording Message Play Call Recording Message before Ask Permission to Record Message Note: Recording message and Ask Permission to Record messages are played in the configured order for: Callback outbound calls - if the queue is configured for asking to record.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- There are three pre-configured thresholds displayed by default: SLA >= 80 60 > SLA < 80 SLA <= 60 The metrics displayed are defined as follows: Queues See Data Dictionary Total SLA See Data Dictionary Volume Total interactions which qualify for SLA calculation.
- The metrics displayed are defined as follows: Queues See Data Dictionary Total SLA See Data Dictionary Volume Interactions which qualify for SLA calculation.
- Volume per Hour: Calculates the average Connected, Finished, and Failed calls per hour during operation hours.
- Users Repeating/Returning: Total number of consumers who returned to interact with the same Virtual Agent within 24 hours of a previous session "Did not Understand" Rate: The % of Virtual Agent chat messages sent where a Virtual Agent states that they did not understand the consumer (No. of default fallback responses / Total no. of VA responses) 100 Current status Top queues : Top 5 chat queues in order of the highest to lowest total Virtual Agent sessions Top Virtual Agents: Top 5 Virtual Agents in order of the highest success rates Virtual Agent status Online: Enabled and functioning Virtual Agents Offline: Enabled but unreachable.

