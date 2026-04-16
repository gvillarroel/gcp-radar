---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.060Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "CRM account and record creation skip"
feature_slug: "crm-account-and-record-creation-skip"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide"
keywords:
  - "crm"
  - "account"
  - "record"
  - "creation"
  - "skip"
  - "zendesk"
  - "servicenow"
  - "integrations"
---

# CRM account and record creation skip

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Zendesk and ServiceNow integrations can be configured to skip CRM account and record creation.

## Extended Definition

Zendesk and ServiceNow integrations can be configured to skip CRM account and record creation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- When data is sent: The CRM record creation will be delayed until the Account or Record assignment is made by the Agent or by the system.
- Salesforce-specific configuration options that impact available options If Attach CCAI Platform Sessions directly to the account lookup object option is enabled in Settings > Developer, then the record drop-down is hidden.
- Default selection and available options If Append call or chat session to the latest open case in the same leaf queue option in Case Creation Details is enabled, the latest open record in the same leaf queue is preloaded.
- CRM integration behavior Since this feature allows agents to select the record or account for the sessions to be associated with during the call and during wrap-up, the CRM integration behavior is impacted.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Account and case behavior Account ID Account ID can be selected by: Clicking on the phone number from Account or Contact record Clicking the sync icon to sync when on the page of an Account or Contact record Entering an outbound phone number that is associated to an Account Clicking on a phone number in a Case that is associated with an Account ID and Case Case ID Case ID can be selected by: Once the Account ID is selected by one of the options above, CCAI Platform checks for one or more open cases for the selected Account ID and selects the most recent, or allows the agent to select based on your settings.
- Many new updates to the Agent call adapter Review and select from multiple matching account records Select from open cases associated with the selected account Create a new case Configurable option to not create a ticket and/or create a new ticket Handling multiple matching account records Flexible ticket to session association Feature details The object/term Account is referenced below as well as in the Agent Adapter UI, however, the object being referenced as "Account" may be different based on your configuration in Developer Settings .
- Select the Use the admin user for all record creations/updates that can't be attributed to a specific agent checkbox to make the instance administrator the default author of new or updated tickets created in CCAI Platform when a specific agent hasn't been assigned.
- To configure the CRM account display fields in the call adapter, do the following: In the Matched account display field list, select the field from the lookup object that appears when matched account record(s) are displayed in the call adapter field.

### "Zendesk app installation guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/zendesk-app-installation-guide)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set Zendesk Subdomain to the subdomain of your Zendesk account. https://your zendesk subdomain.zendesk.com Set OAuth Client ID to the Unique Identifier of your Zendesk OAuth client.
- Generate an API Token The following steps enable you to generate an API token in Zendesk: In Zendesk Support Admin Center, click Apps and Integrations > Zendesk API .
- Registering your Application In the Zendesk Support Admin Center, click Apps and Integrations > Zendesk API .
- You can contact your Zendesk representative to obtain and install them to your Zendesk account.

