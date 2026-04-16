---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.008Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Salesforce Service Cloud secondary lookup object"
feature_slug: "salesforce-service-cloud-secondary-lookup-object"
latest_feature_date: "2026-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide"
keywords:
  - "salesforce"
  - "secondary"
  - "lookup"
  - "object"
  - "integration"
  - "can"
  - "use"
  - "when"
---

# Salesforce Service Cloud secondary lookup object

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Salesforce Service Cloud integration can use a secondary lookup object when the primary lookup returns no results.

## Extended Definition

The Salesforce Service Cloud integration can use a secondary lookup object when the primary lookup returns no results.

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
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure account lookup and field mapping You can configure your Salesforce integration to provide flexible account lookup using primary and secondary lookup objects.
- If there is no lookup object association, information cannot be synced CCAI Platform configuration Set lookup object Based on your data model and process, you can choose what the primary lookup object should be when interacting with Salesforce.
- Agent transferred from: agent initiating the session transfer Agent transferred to: agent receiving the session transfer Created at: time transfer was created Fail reason: reason for failure of session transfer Menu transferred from: the originating queue menu from which transfer was initiated Menu transferred to: queue menu the session was transferred to Session: CCAI Platform session ID Status: status of transfer Transfer from materialized path: the materialized path transfer was originated from Transfer to materialized path: the materialized path the session was transferred to CCAI Platform agent experience in Salesforce Lightning Provide expected CCAI Platform behaviour in Salesforce Lightning to Admins and Agents, specifically when connecting to the Activity object rather than the CCAI Platform Session object.
- No Case: ability to connect the CCAI Platform Custom Session object directly to any Salesforce account object, bypassing the need to create a case This builds on two related features: Option to look-up end users in Person Account object (instead of Contact ( default )) Option to leverage our CCAI Platform Session Object which stores all assets and data related to a single session in optimized CCAI Platform Session object Configuration availability requirements The configuration options for Account Lookup and Session Data are only available if the following conditions are met: Account Lookup configuration To configure custom account lookup settings, the following is required: Logged in Agent - at least one agent needs to be logged into a CCAI Platform adapter in Salesforce.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Salesforce-specific configuration options that impact available options If Attach CCAI Platform Sessions directly to the account lookup object option is enabled in Settings > Developer, then the record drop-down is hidden.
- If the Leads lookup object is selected, then the record drop-down is hidden.
- When enabled, configure the TSS or upload a custom greeting in Settings Languages & Messages Deflection to Voicemail option - Request Already Placed Message. - Limit consumer to 1 voicemail per queue: a consumer could leave a separate voicemail request on a separate queue. - Limit consumer to 1 voicemail request across all queues: voicemail option not available if an unattended voicemail is already left form the phone number.
- For more information, see the following: Salesforce : Outbound click to call Kustomer : Kustomer click to call ServiceNow : Add Click to Call to the top of the form Show the dial pad screen If you have a CRM configured for click-to-call, you can configure your instance to display the dial pad screen after an agent clicks a phone number in the CRM but before a call starts.

### "Salesforce installation guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information see Salesforce: CCAI Platform Session Object Technical Details .
- The installation consists of these steps: Locate Org ID and Org Name and add to the portal Install the app in Salesforce Enter connected app consumer key and secret into the portal Create a connected app Place connected app consumer key and secret in the portal Manage the configuration in Salesforce Manage the call center Data required to perform installation Field Name Where to Find Where to Enter Organization Id Salesforce Developer Settings in Portal Organization Name Salesforce Developer Settings in Portal Connected App Consumer Key Salesforce Developer Settings in Portal Connected App Consumer Secret Salesforce Developer Settings in Portal Tenant name Admin Portal <companyName>.<domain> Custom Settings in SFDC Customer Key Developer Settings Custom Settings in SFDC Secret Developer Settings Custom Settings in SFDC Connected App Salesforce Connected App Custom Settings in SFDC Locate Org ID and Org Name and Add to the Portal In this section, you will set up an initial connection between the CCAI Platform portal and Salesforce by finding the required org information and adding it into the CCAI Platform portal.
- Under API (Enable OAuth Settings) , select the Enable OAuth Settings checkbox and update the settings using the table: Field Name Field Value Enable OAuth Settings Selected (TRUE) Callback URL https://<tenant>.<domain>/v1/salesforce/oauth callback Selected OAuth Scopes Access the identity URL service (id, profile, email, address, phone) Manage user data using APIs (API) Perform requests at any time (refresh token, offline access) Require Proof Key for Code Exchange (PKCE) Extension for Supported Authorization Flows Unselected (False) Required Secret for web flow Selected (TRUE) Require Secret for Refresh Token flow.
- Selected (TRUE) Under the Canvas App Settings , update the settings with the following: Field Name Field Value Canvas Selected (TRUE) Canvas App URL https://<tenant>.<domain>/v1/salesforce/start Access Method Signed Request (POST) Locations Console Lightning Component Open CTI Visualforce Page Navigate to the bottom of the page and click Save .

