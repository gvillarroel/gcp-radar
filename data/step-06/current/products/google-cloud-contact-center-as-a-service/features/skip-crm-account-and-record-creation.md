---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.083Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Skip CRM account and record creation"
feature_slug: "skip-crm-account-and-record-creation"
latest_feature_date: "2024-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages"
keywords:
  - "skip"
  - "crm"
  - "account"
  - "record"
  - "creation"
  - "salesforce"
  - "custom"
  - "sessions"
---

# Skip CRM account and record creation

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Salesforce CRM and custom CRM sessions can now skip account creation, record creation, or both.

## Extended Definition

Salesforce CRM and custom CRM sessions can now skip account creation, record creation, or both.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- No Case: ability to connect the CCAI Platform Custom Session object directly to any Salesforce account object, bypassing the need to create a case This builds on two related features: Option to look-up end users in Person Account object (instead of Contact ( default )) Option to leverage our CCAI Platform Session Object which stores all assets and data related to a single session in optimized CCAI Platform Session object Configuration availability requirements The configuration options for Account Lookup and Session Data are only available if the following conditions are met: Account Lookup configuration To configure custom account lookup settings, the following is required: Logged in Agent - at least one agent needs to be logged into a CCAI Platform adapter in Salesforce.
- V 1.16 - supporting sessions, transfers, actions, files URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t4M000000syZQ&isdtp=p1 V 1.17 - added Email field in Account object (UJET Email c) URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t4M000000kkWd&isdtp=p1 Salesforce configuration updates The following configuration changes are required in Salesforce.
- Case creation With standard configuration, using cases as the record type: When a Mobile or Web SDK call/chat comes in, CCAI Platform: Creates a case in Salesforce.
- No Records - if the CCAI Platform Session object is directly attached to a Salesforce Account object or Task object, no records will be created.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Salesforce-specific configuration options that impact available options If Attach CCAI Platform Sessions directly to the account lookup object option is enabled in Settings > Developer, then the record drop-down is hidden.
- CRM integration behavior Since this feature allows agents to select the record or account for the sessions to be associated with during the call and during wrap-up, the CRM integration behavior is impacted.
- When data is sent: The CRM record creation will be delayed until the Account or Record assignment is made by the Agent or by the system.
- Customize announcement By default the estimated wait announcement will be announced using a TTS voice: "Thank you for calling, your estimated wait time is @{ESTIMATED WAIT TIME IN MINUTES}." To customize the message follow these steps: Record a custom audio file that leaves room at the end for the system to fill in the variable for what the estimated wait time will be announced as.

### "Customizing languages, recordings, & messages \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- Source ID: `site-docs-reference-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Customizing languages, recordings, & messages Stay organized with collections Save and categorize content based on your preferences.
- Custom Audio Files & Hold Music Details Overview Almost all messages that are played to callers can be customized with your audio recordings.
- To upload an audio recording for the IVR queue menu readout, do the following: Select Customized record file .
- Select Customized record file .

