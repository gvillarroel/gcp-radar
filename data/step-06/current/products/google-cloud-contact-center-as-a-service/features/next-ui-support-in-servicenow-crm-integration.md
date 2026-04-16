---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.081Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Next UI support in ServiceNow CRM integration"
feature_slug: "next-ui-support-in-servicenow-crm-integration"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "next"
  - "ui"
  - "servicenow"
  - "crm"
  - "integration"
  - "experience"
  - "now"
---

# Next UI support in ServiceNow CRM integration

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Next UI experience is now supported in the ServiceNow CRM integration.

## Extended Definition

The Next UI experience is now supported in the ServiceNow CRM integration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Agent transferred from: agent initiating the session transfer Agent transferred to: agent receiving the session transfer Created at: time transfer was created Fail reason: reason for failure of session transfer Menu transferred from: the originating queue menu from which transfer was initiated Menu transferred to: queue menu the session was transferred to Session: CCAI Platform session ID Status: status of transfer Transfer from materialized path: the materialized path transfer was originated from Transfer to materialized path: the materialized path the session was transferred to CCAI Platform agent experience in Salesforce Lightning Provide expected CCAI Platform behaviour in Salesforce Lightning to Admins and Agents, specifically when connecting to the Activity object rather than the CCAI Platform Session object.
- CRM sends agent status update When Agent is not Offline in CCAI Platform, CRM status changes will be made in CCAI Platform based on status mapping When Agent is in Offline in CCAI Platform, CRM status changes will be ignored When the CRM status changes while on an active session/call CCAI Platform treats this status change the same as the agent Next Status feature and when the session is complete, after Wrap-up, the next status is governed by the new CRM status If the agent has defined their Next Status and a CRM status change request is also received, the agent's next status will be set to the latest received status Salesforce Configuration Configure omni-channel If your org has already configured Omni-Channel, skip this section.
- No cases will be created CRM data impacting the Agent experience Number of contacts with the same phone number No Contact with phone number Only one Contact with phone number Multiple Contacts with phone number Number of open cases No Case Only one Case Multiple Cases Placing an outbound call Dialed outbound call Placing a call by syncing with the current page in Salesforce From Salesforce, navigate to a Case, Contact, Account, or Lead.
- Admin Portal settings that can impact the Agent experience Do not append call or chat session to any existing open ticket Prompt agents to select open case from list (when applicable) Allow agent to select "Create a new case" option for outbound calls Allow agent to select "Do not create a case" option for outbound calls Allow "Use entered number to make call" option Attach CCAI Platform Sessions directly to the account lookup object.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- User experience and reporting CRM integration : The original CRM ticket updated during the inbound call is reused to record the rescheduled callback activity.
- For more information, see the following: Salesforce : Outbound click to call Kustomer : Kustomer click to call ServiceNow : Add Click to Call to the top of the form Show the dial pad screen If you have a CRM configured for click-to-call, you can configure your instance to display the dial pad screen after an agent clicks a phone number in the CRM but before a call starts.
- Call experience flows Call Flow experience for different call types Overcapacity Deflection IVR Mobile Afterhours Deflection IVR Mobile Recording Per Queue Option Temporary Redirect per IVR Queue Credit Card Over IVR Scheduled calls Rather than waiting in queue for an agent, give consumers the option to select a time that works for them to receive a call from an agent.
- Skip the connecting message playback A connecting message is the message that an end-user hears while the system is connecting their call to an agent—for example, "Please wait while we connect your call to the next available agent." For more information about connecting messages, see Configuring IVR messages .

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Here's an example of a transfer limit field: "transfer limit" : { "enabled" : true , "limit count" : 10 , "limit reached" : "true" }, Agent experience If you select Disable all transfer options when configuring the transfer limit, the Chat Transfer button in the agent adapter is inactive when the transfer limit is reached for a chat session.
- Consumer UI examples after chat is dismissed but not timed-out Web: Mobile: When Same is selected, the consumer is placed back in the same chat window waiting for the chat to be re-assigned to the next available agent: If the consumer selects New , they are brought back to the start of the queue menu selection screen.
- When a consumer clicks on an external deflection link: Consumers will also be able to return to the support experience after visiting a redirection link, so they can easily get more help from an agent if the redirect didn't resolve their request or question.
- Please see Chat Routing: Multicast and Deltacast for all routing logic details Agent experience When the chat is assigned to an agent, and is approximately three seconds from being connected, the agent receives a browser notification, New Chat Picked Up.

