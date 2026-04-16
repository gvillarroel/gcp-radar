---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.019Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Alvaria Advanced List Management integration with the outbound dialer"
feature_slug: "alvaria-advanced-list-management-integration-with-the-outbound-dialer"
latest_feature_date: "2025-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "alvaria"
  - "advanced"
  - "list"
  - "management"
  - "integration"
  - "outbound"
  - "dialer"
  - "can"
---

# Alvaria Advanced List Management integration with the outbound dialer

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The outbound dialer can integrate with Alvaria Advanced List Management to exchange contact and result files through Cloud Storage.

## Extended Definition

The outbound dialer can integrate with Alvaria Advanced List Management to exchange contact and result files through Cloud Storage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Admin Portal settings that can impact the Agent experience Do not append call or chat session to any existing open ticket Prompt agents to select open case from list (when applicable) Allow agent to select "Create a new case" option for outbound calls Allow agent to select "Do not create a case" option for outbound calls Allow "Use entered number to make call" option Attach CCAI Platform Sessions directly to the account lookup object.
- Sample UI of multiple CCAI Platform sessions related to a case CCAI Platform session object data hierarchy The session object is organized as follows: Session(s) related list: the list of session(s) related to a case or account object Session Detail : presents the core session object details Core session fields: lists any associated transfers and files File list: any files that have been uploaded or created as part of the session File detail: all details about a file, including access to file itself Actions: a list of actions that occurred during the session Action detail: additional info about a specific action Transfers: complete list of transfers that occurred during the session Transfer detail: displays all fields and data associated with a single transfer events CCAI Platform session overview After opening a session, the following view will be provided, listing all associated CCAI Platform session actions, attached files, and transfers.
- Account and case behavior Account ID Account ID can be selected by: Clicking on the phone number from Account or Contact record Clicking the sync icon to sync when on the page of an Account or Contact record Entering an outbound phone number that is associated to an Account Clicking on a phone number in a Case that is associated with an Account ID and Case Case ID Case ID can be selected by: Once the Account ID is selected by one of the options above, CCAI Platform checks for one or more open cases for the selected Account ID and selects the most recent, or allows the agent to select based on your settings.
- Feedback: when enabled, shows customer feedback collected during session on record Case: case the session object is attached to Initial menu selected: initial queue menu selected Materialized menu path: the selected path leading to connection with the agent Language: the language used or selected for the session Outbound phone number -- applicable outbound phone number Status: status of the session Total transfers: number of total transfers during the session Files All media files associated with the session object are attached as files to the session object.

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-reference-2`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Instant web calls: Provide visitors with an estimated wait time and automatically initiate an outbound call to a site visitor when their place in the support queue is reached Scheduled calls: Allow site visitors to schedule a time to talk with your support team Queue deflection: Automatically route end users to a message or page on your site Chat support: Provide live chat support directly from your website Proactive triggers : Display a contact bubble for web calls and chats automatically based on visitor behavior.
- Detects calls to your main support number from the device's dialer and converts the call to a Mobile call Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Working from home Contact Center AI Platform (CCAI Platform) is the perfect tool to empower agents to work from home.
- If agents have customized security or firewalls setup with IP allow-listing (as opposed to deny-listing), configuration of the router and possibly your firewall is needed to allow Contact Center AI Platform (CCAI Platform) IP addresses.
- Ideally, agents will be using the same laptops that they used in the office which retain control over allow-listing or deny listing and applications the device uses such as AdBlock, mic permissions, etc.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Restrict outbound calling for locations (new number) To restrict outbound calling for locations, follow these steps Go to Settings > Call > Phone Number Management > Add/Edit Number and configure the number as a special service number.
- Restrict outbound calling for agents (new number) To restrict outbound calling for agents, follow these steps: Go to Settings > Call > Phone Number Management > Add Number and configure the number as a special service number.
- Give agents the ability to set a favorite outbound number or choose from a list of other assigned numbers when making calls.
- Phone number management Phone number management settings offer you the ability to configure outbound calling preferences.

