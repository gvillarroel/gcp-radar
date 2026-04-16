---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.034Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Email adapter session search"
feature_slug: "email-adapter-session-search"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "email"
  - "adapter"
  - "session"
  - "search"
  - "agents"
  - "can"
  - "sessions"
  - "address"
---

# Email adapter session search

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Agents can search for email sessions by email address and name in the email adapter.

## Extended Definition

Agents can search for email sessions by email address and name in the email adapter.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Wrap-up settings Wrap-up exceeded This setting allows you to transition agents into a Wrap-up Exceeded status after they have gone beyond a wrap-up threshold time and have cleared all ongoing sessions.
- This feature is typically used to help agents manage their time more efficiently and to help ensure that all sessions are properly documented and brought to a close.
- This lets you control the ability of agents to transfer sessions and receive transferred sessions based on the queues or teams that they belong to.
- Emails will have the end-user's entered email address in the Reply-to Header field All emails will use this subject format: {Queue Name} [from: {email} ] Your CRM team should set up a rule that identifies the email address in the subject or body of the email and use the email address to identify the contact for the best experience Once enabled, the email form with the custom email per-queue shows at all times for the email channel, including: during operation hours, after operation hours, and for email deflection options CCAI Platform portal sends to the email address specified and then inbound emails are handled by your email provider.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Admin Portal settings that can impact the Agent experience Do not append call or chat session to any existing open ticket Prompt agents to select open case from list (when applicable) Allow agent to select "Create a new case" option for outbound calls Allow agent to select "Do not create a case" option for outbound calls Allow "Use entered number to make call" option Attach CCAI Platform Sessions directly to the account lookup object.
- V 1.16 - supporting sessions, transfers, actions, files URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t4M000000syZQ&isdtp=p1 V 1.17 - added Email field in Account object (UJET Email c) URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t4M000000kkWd&isdtp=p1 Salesforce configuration updates The following configuration changes are required in Salesforce.
- Once enabled and configured, there are 3 ways an agent status can be updated Agent updates status in the Adapter: existing agent status behavior Agent selects next status during a live session: existing agent feature, described in Allow agents to set their next status while on a call or chat.
- Call and chat routing User segment DAP : CCAI Platform will search for a contact using phone number (IVR) or email address (Mobile) or custom field (Mobile) from Salesforce to match settings in the queue and directly route call or chat to the queue.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Flexible inbound call handling The flexible inbound call handling feature gives Agents the flexibility to manage inbound call sessions using the Agent Adapter.
- CRM integration behavior Since this feature allows agents to select the record or account for the sessions to be associated with during the call and during wrap-up, the CRM integration behavior is impacted.
- Clear voicemails from queues If your agents listen to voicemails using your CRM instead of the agent adapter, voicemails can accumulate in queues.
- CCAI Platform supports the following emergency and special services phone numbers: US emergency numbers Canada emergency numbers Canada special service numbers 911 - Emergency 911 - Emergency 211 - Public information and referral services 933 - Emergency test 311 - Non-emergency municipal government services 411 - Local directory assistance 511 - Weather and traveler information services 611 - Repair service 711 - Message relay service (MRS) 811 - Non-urgent health care telephone triage service 988 - Suicide and crisis lifeline Turn emergency calling on or off Turn on emergency calling to let authorized agents make and manage emergency and special services calls in the call adapter.

