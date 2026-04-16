---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.044Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Salesforce closed record options for scheduled calls"
feature_slug: "salesforce-closed-record-options-for-scheduled-calls"
latest_feature_date: "2025-07-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "salesforce"
  - "closed"
  - "record"
  - "options"
  - "scheduled"
  - "calls"
  - "lets"
  - "integrated"
---

# Salesforce closed record options for scheduled calls

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Lets Salesforce-integrated CCaaS instances decide whether to reopen or cancel scheduled calls for closed records, or ignore record status checks.

## Extended Definition

Lets Salesforce-integrated CCaaS instances decide whether to reopen or cancel scheduled calls for closed records, or ignore record status checks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Call experience flows Call Flow experience for different call types Overcapacity Deflection IVR Mobile Afterhours Deflection IVR Mobile Recording Per Queue Option Temporary Redirect per IVR Queue Credit Card Over IVR Scheduled calls Rather than waiting in queue for an agent, give consumers the option to select a time that works for them to receive a call from an agent.
- Salesforce-specific configuration options that impact available options If Attach CCAI Platform Sessions directly to the account lookup object option is enabled in Settings > Developer, then the record drop-down is hidden.
- Overcapacity deflection message (if enabled) Estimated wait time announcement (if enabled) Connecting Message Record a Call Message (if enabled) Pre-Call Notification of CSAT survey (if enabled) Any other messages (if applicable) Wait Time SMS consent voice readout (if enabled and "keep waiting" is selected) Configure call settings This section explains configuration options in CCAI Platform.
- Overcapacity Deflection When enabled, the "Overcapacity Deflection" and "Overcapacity Deflection Options" messages will play, as well as specific recordings for options like "Overcapacity Deflection Callback Option." When you add or remove options, be sure to update the message that lists the options callers have, otherwise, callers won't know the new options exist.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- No Case: ability to connect the CCAI Platform Custom Session object directly to any Salesforce account object, bypassing the need to create a case This builds on two related features: Option to look-up end users in Person Account object (instead of Contact ( default )) Option to leverage our CCAI Platform Session Object which stores all assets and data related to a single session in optimized CCAI Platform Session object Configuration availability requirements The configuration options for Account Lookup and Session Data are only available if the following conditions are met: Account Lookup configuration To configure custom account lookup settings, the following is required: Logged in Agent - at least one agent needs to be logged into a CCAI Platform adapter in Salesforce.
- Account and case behavior Account ID Account ID can be selected by: Clicking on the phone number from Account or Contact record Clicking the sync icon to sync when on the page of an Account or Contact record Entering an outbound phone number that is associated to an Account Clicking on a phone number in a Case that is associated with an Account ID and Case Case ID Case ID can be selected by: Once the Account ID is selected by one of the options above, CCAI Platform checks for one or more open cases for the selected Account ID and selects the most recent, or allows the agent to select based on your settings.
- Allow agent to select "Do not create a case" option for outbound calls When settings indicate that session data is mapped to the CCAI Platform Session object, call data including the call recording will be stored in the CCAI Platform Session and associated to the selected lookup object.
- The following configuration options are available: Account Lookup: ability to perform account lookup against any Salesforce end-user based account object Session Data Location : map session data to an Account object (Contact, Person Account, Account, Lead, or Task rather than a Case.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- For When the transfer count exceeds the limit , select one of the following: Disable all transfer options : when the limit is reached, this prevents an agent from making additional transfers Allow one final transfer to the queue : when the limit is reached, this lets an agent do a final transfer to a queue that you specify.
- When a consumer clicks No : The pop-up is closed and the respective queue's contact options are displayed again.
- If a consumer clicks No : The pop-up is closed and the respective queue's contact options are displayed again.
- If After Hour Deflection is disabled, mark the checkbox Allow transfers to queues outside of operation for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter All queues within operating hours All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are after hours with after hour deflection enabled All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation Enable over capacity deflection : Specify the estimated wait time threshold for the consumer to be deflected to the options set below.

