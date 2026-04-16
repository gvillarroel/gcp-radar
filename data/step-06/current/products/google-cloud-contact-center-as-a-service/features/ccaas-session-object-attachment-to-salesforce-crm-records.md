---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.049Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "CCaaS session object attachment to Salesforce CRM records"
feature_slug: "ccaas-session-object-attachment-to-salesforce-crm-records"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide"
keywords:
  - "ccaas"
  - "session"
  - "object"
  - "attachment"
  - "salesforce"
  - "crm"
  - "records"
  - "lets"
---

# CCaaS session object attachment to Salesforce CRM records

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Lets Salesforce CRMs attach a CCaaS session object to a matching CRM record when a call or chat session is appended.

## Extended Definition

Lets Salesforce CRMs attach a CCaaS session object to a matching CRM record when a call or chat session is appended.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- No Records - if the CCAI Platform Session object is directly attached to a Salesforce Account object or Task object, no records will be created.
- Agent transferred from: agent initiating the session transfer Agent transferred to: agent receiving the session transfer Created at: time transfer was created Fail reason: reason for failure of session transfer Menu transferred from: the originating queue menu from which transfer was initiated Menu transferred to: queue menu the session was transferred to Session: CCAI Platform session ID Status: status of transfer Transfer from materialized path: the materialized path transfer was originated from Transfer to materialized path: the materialized path the session was transferred to CCAI Platform agent experience in Salesforce Lightning Provide expected CCAI Platform behaviour in Salesforce Lightning to Admins and Agents, specifically when connecting to the Activity object rather than the CCAI Platform Session object.
- No Case: ability to connect the CCAI Platform Custom Session object directly to any Salesforce account object, bypassing the need to create a case This builds on two related features: Option to look-up end users in Person Account object (instead of Contact ( default )) Option to leverage our CCAI Platform Session Object which stores all assets and data related to a single session in optimized CCAI Platform Session object Configuration availability requirements The configuration options for Account Lookup and Session Data are only available if the following conditions are met: Account Lookup configuration To configure custom account lookup settings, the following is required: Logged in Agent - at least one agent needs to be logged into a CCAI Platform adapter in Salesforce.
- Many new updates to the Agent call adapter Review and select from multiple matching account records Select from open cases associated with the selected account Create a new case Configurable option to not create a ticket and/or create a new ticket Handling multiple matching account records Flexible ticket to session association Feature details The object/term Account is referenced below as well as in the Agent Adapter UI, however, the object being referenced as "Account" may be different based on your configuration in Developer Settings .

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Salesforce-specific configuration options that impact available options If Attach CCAI Platform Sessions directly to the account lookup object option is enabled in Settings > Developer, then the record drop-down is hidden.
- Agent experience The Agent's available options rely heavily on the CCAI Platform portal configuration as well as which records and accounts match the incoming call session.
- Pre-session SMS Deflection lets you to offer SMS chat support as an alternative option for IVR callers before the call is connected to an agent.
- Prerequisites In order to enable the Pre-session Deflection, you must have the following: A valid CCAI Platform account with Admin role assigned A valid Legacy, Pro, Enterprise, or Digital License Package A valid subscription for CCAI Platform IVR Support with IVR enabled A valid subscription for CCAI Platform SMS Support enabled with a valid queue structure The SMS must be functional (agent assigned) Basic configuration Do the following procedures, in order: Enable pre-session SMS deflection Enable and save the pre-session SMS deflection offer and opted-in messages Enable and save the pre-session SMS deflection greeting message Configure pre-session SMS deflection for a specific queue Enable pre-session SMS deflection Go Settings > Call.

### "Salesforce installation guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information see Salesforce: CCAI Platform Session Object Technical Details .
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Salesforce installation guide Stay organized with collections Save and categorize content based on your preferences.
- Note: Skip this step if using the CCAI Platform Session object.
- The installation consists of these steps: Locate Org ID and Org Name and add to the portal Install the app in Salesforce Enter connected app consumer key and secret into the portal Create a connected app Place connected app consumer key and secret in the portal Manage the configuration in Salesforce Manage the call center Data required to perform installation Field Name Where to Find Where to Enter Organization Id Salesforce Developer Settings in Portal Organization Name Salesforce Developer Settings in Portal Connected App Consumer Key Salesforce Developer Settings in Portal Connected App Consumer Secret Salesforce Developer Settings in Portal Tenant name Admin Portal <companyName>.<domain> Custom Settings in SFDC Customer Key Developer Settings Custom Settings in SFDC Secret Developer Settings Custom Settings in SFDC Connected App Salesforce Connected App Custom Settings in SFDC Locate Org ID and Org Name and Add to the Portal In this section, you will set up an initial connection between the CCAI Platform portal and Salesforce by finding the required org information and adding it into the CCAI Platform portal.

