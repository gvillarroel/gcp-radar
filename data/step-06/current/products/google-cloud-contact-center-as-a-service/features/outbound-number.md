---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.129Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Outbound Number"
feature_slug: "outbound-number"
latest_feature_date: "2023-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "outbound"
  - "number"
  - "lets"
  - "dialer"
  - "choose"
  - "which"
  - "phone"
  - "use"
---

# Outbound Number

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Outbound Number lets the outbound dialer choose which outbound phone number to use for each contact.

## Extended Definition

Outbound Number lets the outbound dialer choose which outbound phone number to use for each contact.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Phone number selection in the Agent Adapter When an agent clicks on the dial option of the adapter, they will now see a drop-down of the default Global Outbound number as well as any other outbound numbers which are associated with the queues to which they are assigned.
- Agents have options for specific outbound numbers based on their queue assignments, or can be configured to not have options at all and will always dial outbound from the phone number which is set by the administrator.
- Session types for reporting For reporting, calls to or from direct phone numbers generate the following session types: Voice Inbound (Direct) : an inbound call to a direct phone number Voice Outbound (Direct) : an outbound call from a direct phone number Voice Internal : an internal call to or from a direct phone number Estimated wait time announcement for calls Estimated Wait Time (EWT) Announcements use a calculation to predict the wait time until a caller is connected with an agent.
- For more information, see the following: Salesforce : Outbound click to call Kustomer : Kustomer click to call ServiceNow : Add Click to Call to the top of the form Show the dial pad screen If you have a CRM configured for click-to-call, you can configure your instance to display the dial pad screen after an agent clicks a phone number in the CRM but before a call starts.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Keep the following in mind: Incoming SMS phone numbers can be assigned to only one queue (a queue can have multiple incoming numbers as long as they are not used for any other queue.) Outbound SMS phone numbers can be assigned to any number of queues and a queue can have any number of outbound phone numbers.
- Any agents assigned to the queue can use any of the outbound phone numbers; therefore, If you want an agent to have their own number, they must have their own leaf queue.
- If an IVR queue menu is mapped as an Mobile PSTN fallback, the queue cannot be deleted without removing this association Rich data The following data is passed to the CRM ticket for the IVR fallback call: End-user's phone number To gather the phone number data, the end-user is required to input their phone number Example phone number gathering screen in Mobile: Selected queue menu When the end-user makes a call via PSTN, the system retrieves the queue name and custom data package via phone number lookup Custom data package (as configured by your mobile development team) The custom data package is mapped to the correct ticket based on the active call session with the phone number entered by the end-user in the app CCAI Platform portal configuration Go to Settings > Queue > Mobile .
- Queue keywords When an end-user texts a Top-level queue, the system automatically prompts the end-user to enter a number associated with a sub queue(based on the order in which you have listed your queues on the Queue Menu Setting page.) You can also add keywords to queues.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Configuration Choose from available routing logic options Enable and configure in the CCAI Platform Portal Create DAPs in the Queue Settings Test Routing Call the IVR using a phone number which should trigger the API DAP.
- When there are multiple contacts with the same phone number, CCAI Platform will display the contact selection screen in the Agent widget where the agent can choose which contact to use or choose to create a new contact.
- Account and case behavior Account ID Account ID can be selected by: Clicking on the phone number from Account or Contact record Clicking the sync icon to sync when on the page of an Account or Contact record Entering an outbound phone number that is associated to an Account Clicking on a phone number in a Case that is associated with an Account ID and Case Case ID Case ID can be selected by: Once the Account ID is selected by one of the options above, CCAI Platform checks for one or more open cases for the selected Account ID and selects the most recent, or allows the agent to select based on your settings.
- Feedback: when enabled, shows customer feedback collected during session on record Case: case the session object is attached to Initial menu selected: initial queue menu selected Materialized menu path: the selected path leading to connection with the agent Language: the language used or selected for the session Outbound phone number -- applicable outbound phone number Status: status of the session Total transfers: number of total transfers during the session Files All media files associated with the session object are attached as files to the session object.

