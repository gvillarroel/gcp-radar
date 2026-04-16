---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.093Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Multiple disposition code lists"
feature_slug: "multiple-disposition-code-lists"
latest_feature_date: "2024-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Reason_Codes___Statuses"
keywords:
  - "multiple"
  - "disposition"
  - "code"
  - "lists"
  - "codes"
  - "can"
  - "grouped"
  - "into"
---

# Multiple disposition code lists

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Disposition codes can be grouped into lists and applied to queues that share common disposition codes.

## Extended Definition

Disposition codes can be grouped into lists and applied to queues that share common disposition codes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Reason_Codes___Statuses](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Reason_Codes___Statuses)

## Supporting Pages

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Disposition Codes and Notes After Automatic wrap-up for calls is toggled On , the settings for disposition notes and codes become available.
- Disposition codes and notes are tools that allow agents to document the final outcome of a customer interaction.
- This status can only be used when notes and disposition codes are enabled.
- For more information, see Disposition Codes and Notes .

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- If disposition codes or notes are also enabled, the agent will see the flexible inbound screen first, then the Disposition & Note selection UI.
- If the number is blocked, and the caller is calling into a UK number from a phone number with a US country code, the callback won't take place since there will be an incorrect number stored for the caller [UK +44 (extracted from inbound IVR number + consumer entered number].
- You can choose from the following: Country code : Select the country from the menu. (Optional) Area code and phone : Enter area codes and phone numbers.
- If the phone number is blocked and therefore the country code not available, the country code is taken from the IVR number the consumer called into.

### "Reason Codes & Statuses \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Reason_Codes___Statuses](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Reason_Codes___Statuses)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Viewing and Identifying Failed Reason Codes Overview This page can help you identify: Call Fail Reasons Chat Fail Reasons The following Failed Reason codes can be viewed: In the Individual Call History standard report.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Reason Codes & Statuses Stay organized with collections Save and categorize content based on your preferences.
- Call Fail Reasons Code Metric Name Description nothing: 0 No Error - Call The sum of calls that did not fail. unknown: 10001 Unknown - Call The sum of calls that failed for unknown reasons. expired: 11001 Expired - Call The sum of calls that failed due to the connection timing out. transfer expired: 11002 Transfer Expired The sum of calls that failed due to the transfer connection timing out. eu canceled: 20001 Cancelled The sum of calls where the end-user hung up while being connected to an agent. eu rejected: 20002 Rejected The sum of outbound calls that were declined by the end-user. eu abandoned: 20003 Abandoned The sum of calls that were abandoned by the end-user while waiting in queue. eu in menu abandoned: 20004 In-Menu Abandoned The sum of calls that were abandoned by the end-user while in the IVR menu. eu repeated voicemail: 20005 Repeated Voicemail The sum of calls that failed because the end-user already had left a voicemail waiting to be answered.
- Chat Fail Reasons Code Metric Name Description nothing: 0 No Error - Chat The sum of chats that did not fail. unknown: 1 Unknown - Chat The sum of chats that failed for unknown reasons. no response: 2 No Response The sum of chats that ended due to the end-user not responding. expired: 3 Expired - Chat The sum of chats that failed due to the connection timing out. after hours: 4 After Hours The sum of chats that reached a queue outside of operating hours. expired menu selection: 31 Expired Menu The sum of chats where end-users selected a queue that no longer existed. end user opt out: 41 Opted Out The sum of chats where end-users opted not to be recorded. over cap email: 50001 Overcapacity Email The sum of chats where end-users sent an email due to the queue being in an overcapacity state. group deleted no substitute: 60001 Group Deleted - Chat The sum of chats that failed due to a cascade group being deleted without any alternative available.

