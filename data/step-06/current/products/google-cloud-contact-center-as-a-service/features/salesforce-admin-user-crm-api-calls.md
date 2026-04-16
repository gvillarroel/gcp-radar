---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.065Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Salesforce admin user CRM API calls"
feature_slug: "salesforce-admin-user-crm-api-calls"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "salesforce"
  - "admin"
  - "user"
  - "crm"
  - "calls"
  - "can"
  - "use"
  - "record"
---

# Salesforce admin user CRM API calls

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Salesforce can use the admin user for CRM API calls for record creation and updates while agents retain ownership of CRM-specific actions.

## Extended Definition

Salesforce can use the admin user for CRM API calls for record creation and updates while agents retain ownership of CRM-specific actions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions](https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Case owner and assignment After the default administrator is enabled, the default administrator is used as the owner for the following: Ticket/case and contact creation when a new chat is initiated before an agent is assigned to the chat Voicemail tickets/cases before receiving a callback call Call ticket/cases for abandoned calls (if enabled) Note: If the default user is not configured, CCAI Platform uses a random Agent When a call/chat is transferred: CCAI Platform assigns the case to the agent who the call is transferred to.
- Installation and configuration requirements Salesforce and CCAI Platform access required CCAI Platform: Ask your internal CCAI Platform contact or administrator for a CCAI Platform user account with both adminstrator and agent roles assigned The Admin role gives you access to developer settings The Agent role gives you access to the agent adapter to utilize and test the agent status capability.
- Select the Use the admin user for all record creations/updates that can't be attributed to a specific agent checkbox to make the instance administrator the default author of new or updated tickets created in CCAI Platform when a specific agent hasn't been assigned.
- Salesforce configuration Steps to configure in Salesforce: Step 1: Configure and enable Default Admin user Define a CRM admin user to represent the default user for all CRM actions and events where a specific agent has not been identified or assigned.

### "User roles and permissions \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions](https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Queue: Full access Reporting Report Builder: Full access to all user data No access Agent adapter in the CCAI Platform portal and CRM Call and chat settings Developer settings Actions available Monitoring all call and chat queues Downloading reports with data concerning agent performance, queue performance, call and chat volume for all queues and Agents Shuffling team and agent assignments between queues based on volume Adding new users and assigning to teams and deactivating users Assigning existing users to teams Creating or editing queue structures for any language or channel Admin Full access to environment settings, queue configuration, monitoring, and reporting.
- CCAI Platform portal access Settings Queue configuration Add and edit queues with full access Settings configuration All settings access including Developer Settings Agent & team: Full access Agent Desktop ( Preview ) Global, queue, and team settings Data Monitoring Call and chat dashboard: Full access Agents: Full access Calls and chats (connected, queued, completed): Full access External storage: access to call recordings, chat transcripts, or both, when they are stored in external storage.
- CCAI Platform portal access Settings Queue Configuration Assign any agents or teams to queues Queue priorities Settings Configuration Agent & team: Full access Target Metrics (within Settings > Operation Management ) Data Monitoring Dashboard access (data for all teams) Calls Chats Agents: Full access Calls and chats (connected, queued, completed): Full access External Storage: Access to call recordings or chat transcripts when they are stored in external storage.
- Custom roles and permissions In addition to the 6 default user roles (Admin, Manager, Manager Data, Manager Teams, Manager Admin, Agent), with custom roles & permissions, you can create custom roles with unique sets of permissions assigned.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Mobile and web SDK calls If the caller's phone number is not available, but User email or User ID is passed using the SDK, then the record drop-down is available.
- For Call Recording , select the Record Consumer-to-Agent Calls checkbox to enable recording end-user to agent calls.
- Configure call recording You can configure whether end-user to agent calls are recorded.
- Call experience flows Call Flow experience for different call types Overcapacity Deflection IVR Mobile Afterhours Deflection IVR Mobile Recording Per Queue Option Temporary Redirect per IVR Queue Credit Card Over IVR Scheduled calls Rather than waiting in queue for an agent, give consumers the option to select a time that works for them to receive a call from an agent.

