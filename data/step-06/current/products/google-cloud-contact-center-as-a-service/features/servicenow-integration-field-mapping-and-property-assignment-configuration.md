---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.114Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "ServiceNow integration field mapping and property assignment configuration"
feature_slug: "servicenow-integration-field-mapping-and-property-assignment-configuration"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources"
keywords:
  - "servicenow"
  - "integration"
  - "field"
  - "mapping"
  - "property"
  - "assignment"
  - "configuration"
  - "now"
---

# ServiceNow integration field mapping and property assignment configuration

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The ServiceNow integration now provides more flexible field mapping and property assignment configuration options.

## Extended Definition

The ServiceNow integration now provides more flexible field mapping and property assignment configuration options.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Configure account lookup and field mapping You can configure your Salesforce integration to provide flexible account lookup using primary and secondary lookup objects.
- CRM sends agent status update When Agent is not Offline in CCAI Platform, CRM status changes will be made in CCAI Platform based on status mapping When Agent is in Offline in CCAI Platform, CRM status changes will be ignored When the CRM status changes while on an active session/call CCAI Platform treats this status change the same as the agent Next Status feature and when the session is complete, after Wrap-up, the next status is governed by the new CRM status If the agent has defined their Next Status and a CRM status change request is also received, the agent's next status will be set to the latest received status Salesforce Configuration Configure omni-channel If your org has already configured Omni-Channel, skip this section.
- Configuration saved in Settings > Developer Settings for Account Lookup can be overridden by agent selection in the agent adapter if an object other than the primary object is synced Account ID and case ID field details Labels The object/term Account is referenced in this article as well as in the Agent Adapter UI, however, the object being referenced as "Account" may be different based on your configuration in Developer Settings.
- V 1.16 - supporting sessions, transfers, actions, files URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t4M000000syZQ&isdtp=p1 V 1.17 - added Email field in Account object (UJET Email c) URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t4M000000kkWd&isdtp=p1 Salesforce configuration updates The following configuration changes are required in Salesforce.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Prerequisites In order to enable the Pre-session Deflection, you must have the following: A valid CCAI Platform account with Admin role assigned A valid Legacy, Pro, Enterprise, or Digital License Package A valid subscription for CCAI Platform IVR Support with IVR enabled A valid subscription for CCAI Platform SMS Support enabled with a valid queue structure The SMS must be functional (agent assigned) Basic configuration Do the following procedures, in order: Enable pre-session SMS deflection Enable and save the pre-session SMS deflection offer and opted-in messages Enable and save the pre-session SMS deflection greeting message Configure pre-session SMS deflection for a specific queue Enable pre-session SMS deflection Go Settings > Call.
- Overcapacity deflection message (if enabled) Estimated wait time announcement (if enabled) Connecting Message Record a Call Message (if enabled) Pre-Call Notification of CSAT survey (if enabled) Any other messages (if applicable) Wait Time SMS consent voice readout (if enabled and "keep waiting" is selected) Configure call settings This section explains configuration options in CCAI Platform.
- For more information, see the following: Salesforce : Outbound click to call Kustomer : Kustomer click to call ServiceNow : Add Click to Call to the top of the form Show the dial pad screen If you have a CRM configured for click-to-call, you can configure your instance to display the dial pad screen after an agent clicks a phone number in the CRM but before a call starts.
- Select the checkbox for Customize Pre-session SMS Deflection greeting message In the message configurations, enter the SMS message that will be triggered for consumers of that specific IVR queue when they opt-in to using SMS messages instead of IVR support.

### "Developer Resources \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Guide Step 1: SDK Integration Integrate our latest iOS and/or Android SDKs into your mobile app(s) Scenario 1: Single app existing SDK integration It is recommended, but not strictly necessary to upgrade our SDK in your mobile app, however, CCAI Platform portal based configuration for PSTN fallback and data connectivity threshold levels is only available via SDK v 0.30+.
- Example Request URL: http://{​{subdomain}​}.{​{domain}​}/apps/api/v1/wait times Parameters ID Field Name Type Required Description Values Notes 1 menu id id No Response will filter all menus (queues) in that menu's sub-menu, including that menu Root Menu (default) Specific menu If nothing is passed, will return whole queue structure 2 channel type enum No Returns menus of a specific channel voice call chat Optional param 3 menu type enum No Returns menus of specific types ivr menu mobile menu web menu All (default) optional 4 wait[from] int No Returns records if they have a wait greater than the value Validation:Positive Int only 5 wait[to] int No Returns records if they have a wait less than the value Validation:Positive Int only 6 lang enum Yes Queue structure to retrieve the ewt Ex: "en" "es" "fr" "de" "it" "ja" "ko" "pt" "pt-BR" "sv" Responses ID Field Name Type Required Description 1 menu id id yes Foreign key to the /menus manager api endpoint 2 wait INT yes Wait time in minutes 3 Materialized path String Yes Materialized path as found in the /menus api Example http://{​{subdomain}​}.{​{domain}​}apps/api/v1/wait times?lang=en&menu id=10 [ { "menu id" : 10 , "menu type" : "ivr menu" , "voice call" : 120 , "materialized path" : "Subscription" , "logged in agents" : 3 , "available agents" : 0 , "breakthrough agents" : 1 } ] Status Code: 200 Menu ID 10 estimated wait time is 120 seconds (or two minutes) Multiple Mobile Apps (MMA) Overview Allow the mobile (Pro) SDK to be integrated into multiple, distinct mobile apps.
- Voicemail message IVR messages (excluding only the 'purchase flow' messages) Note: only available in English Custom Callback Messages Important: The channel drop-down selection automatically regulates all message configurations listed in both "Mobile & Web SDK" and "Audible Messages" sections for the selected mobile app, with the following exceptions: IVR 'purchase flow' messages All IVR specific messages can only be configured for English Step 7: Mobile App Activation Go to Settings > Developer Settings .
- There will be a 'Mobile Apps' section if you have an existing app configured: To prepare your existing app for MMA mode, click on the edit (pencil) icon and complete the required fields in the Edit Mobile app window.

