---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.125Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Outbound dialer list management API"
feature_slug: "outbound-dialer-list-management-api"
latest_feature_date: "2023-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "outbound"
  - "dialer"
  - "list"
  - "management"
  - "lets"
  - "you"
  - "programmatically"
  - "add"
---

# Outbound dialer list management API

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The List Management API lets you programmatically add, remove, and update outbound dialer campaign contact lists.

## Extended Definition

The List Management API lets you programmatically add, remove, and update outbound dialer campaign contact lists.

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
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Restrict outbound calling for locations (new number) To restrict outbound calling for locations, follow these steps Go to Settings > Call > Phone Number Management > Add/Edit Number and configure the number as a special service number.
- Restrict outbound calling for agents (new number) To restrict outbound calling for agents, follow these steps: Go to Settings > Call > Phone Number Management > Add Number and configure the number as a special service number.
- Give agents the ability to set a favorite outbound number or choose from a list of other assigned numbers when making calls.
- Phone number management Phone number management settings offer you the ability to configure outbound calling preferences.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Admin Portal settings that can impact the Agent experience Do not append call or chat session to any existing open ticket Prompt agents to select open case from list (when applicable) Allow agent to select "Create a new case" option for outbound calls Allow agent to select "Do not create a case" option for outbound calls Allow "Use entered number to make call" option Attach CCAI Platform Sessions directly to the account lookup object.
- Sample UI of multiple CCAI Platform sessions related to a case CCAI Platform session object data hierarchy The session object is organized as follows: Session(s) related list: the list of session(s) related to a case or account object Session Detail : presents the core session object details Core session fields: lists any associated transfers and files File list: any files that have been uploaded or created as part of the session File detail: all details about a file, including access to file itself Actions: a list of actions that occurred during the session Action detail: additional info about a specific action Transfers: complete list of transfers that occurred during the session Transfer detail: displays all fields and data associated with a single transfer events CCAI Platform session overview After opening a session, the following view will be provided, listing all associated CCAI Platform session actions, attached files, and transfers.
- Account and case behavior Account ID Account ID can be selected by: Clicking on the phone number from Account or Contact record Clicking the sync icon to sync when on the page of an Account or Contact record Entering an outbound phone number that is associated to an Account Clicking on a phone number in a Case that is associated with an Account ID and Case Case ID Case ID can be selected by: Once the Account ID is selected by one of the options above, CCAI Platform checks for one or more open cases for the selected Account ID and selects the most recent, or allows the agent to select based on your settings.
- Feedback: when enabled, shows customer feedback collected during session on record Case: case the session object is attached to Initial menu selected: initial queue menu selected Materialized menu path: the selected path leading to connection with the agent Language: the language used or selected for the session Outbound phone number -- applicable outbound phone number Status: status of the session Total transfers: number of total transfers during the session Files All media files associated with the session object are attached as files to the session object.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Play Ask Permission to Record Message before Call Recording Message Play Call Recording Message before Ask Permission to Record Message Note: Recording message and Ask Permission to Record messages are played in the configured order for: Callback outbound calls - if the queue is configured for asking to record.
- Keep the following in mind: Incoming SMS phone numbers can be assigned to only one queue (a queue can have multiple incoming numbers as long as they are not used for any other queue.) Outbound SMS phone numbers can be assigned to any number of queues and a queue can have any number of outbound phone numbers.
- Queue keywords When an end-user texts a Top-level queue, the system automatically prompts the end-user to enter a number associated with a sub queue(based on the order in which you have listed your queues on the Queue Menu Setting page.) You can also add keywords to queues.
- For example, since outbound calls do not have an introduction message, you can have the call recording play for consumers before the consent to record (user permission) so they know who is calling (call recording).

