---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.113Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "ServiceNow integration default user support"
feature_slug: "servicenow-integration-default-user-support"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "servicenow"
  - "integration"
  - "default"
  - "user"
  - "now"
  - "supports"
  - "option"
  - "reduced"
---

# ServiceNow integration default user support

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The ServiceNow integration now supports a Default User option with reduced admin permission requirements.

## Extended Definition

The ServiceNow integration now supports a Default User option with reduced admin permission requirements.

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
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- No Case: ability to connect the CCAI Platform Custom Session object directly to any Salesforce account object, bypassing the need to create a case This builds on two related features: Option to look-up end users in Person Account object (instead of Contact ( default )) Option to leverage our CCAI Platform Session Object which stores all assets and data related to a single session in optimized CCAI Platform Session object Configuration availability requirements The configuration options for Account Lookup and Session Data are only available if the following conditions are met: Account Lookup configuration To configure custom account lookup settings, the following is required: Logged in Agent - at least one agent needs to be logged into a CCAI Platform adapter in Salesforce.
- Case owner and assignment After the default administrator is enabled, the default administrator is used as the owner for the following: Ticket/case and contact creation when a new chat is initiated before an agent is assigned to the chat Voicemail tickets/cases before receiving a callback call Call ticket/cases for abandoned calls (if enabled) Note: If the default user is not configured, CCAI Platform uses a random Agent When a call/chat is transferred: CCAI Platform assigns the case to the agent who the call is transferred to.
- The following configuration options are available: Account Lookup: ability to perform account lookup against any Salesforce end-user based account object Session Data Location : map session data to an Account object (Contact, Person Account, Account, Lead, or Task rather than a Case.
- Select the Use the admin user for all record creations/updates that can't be attributed to a specific agent checkbox to make the instance administrator the default author of new or updated tickets created in CCAI Platform when a specific agent hasn't been assigned.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Customize your global EWT announcement message By default, the estimated wait announcement is: "Thank you for calling, your estimated wait time is @{ESTIMATED WAIT TIME IN MINUTES} ." You have the option of changing either the content of the message or the voice used (or both).
- Phone number selection in the Agent Adapter When an agent clicks on the dial option of the adapter, they will now see a drop-down of the default Global Outbound number as well as any other outbound numbers which are associated with the queues to which they are assigned.
- Default selection and available options If Append call or chat session to the latest open case in the same leaf queue option in Case Creation Details is enabled, the latest open record in the same leaf queue is preloaded.
- To configure a prompt for the end-user, do the following: Select the Extension input announcement message checkbox. (Optional): Edit the text-to-speech message or upload an audio recording that contains your prompt.

### "User roles and permissions \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions](https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions)
- Source ID: `site-iam-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Queue: Full access Reporting Report builder: Full access to all user data No access Agent adapter in the CCAI Platform portal and CRM Actions available Responsible for viewing or managing users on multiple teams, even when not assigned as the team manager Are responsible for monitoring call and chat queues for all queues Are responsible for downloading reports with data concerning agent performance, queue performance, call and chat volume for all users Configuring queues, redirects, and per-queue routing options Responsible for assigning agents to queues Shuffling team and agent assignments between queues based on volume Adding new users and assigning to teams or deactivating users Assigning existing users to teams Creating or editing queue structures for any language or channel Modifying environment wide settings to disable or enable channels, update how Agents are notified of new sessions, hours of operation, messages played to consumers or routing features like enabling Auto Answer or Priority routing Setting up technical integrations Don't see a role you want?
- Custom roles and permissions In addition to the 6 default user roles (Admin, Manager, Manager Data, Manager Teams, Manager Admin, Agent), with custom roles & permissions, you can create custom roles with unique sets of permissions assigned.
- Default user roles and permissions Within CCAI Platform there are 6 predefined roles that have assigned permission sets.
- Each user must be given a role upon creation, and may optionally be assigned up to 9 more additional roles.

