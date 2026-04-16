---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.110Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Microsoft Dynamics contact object case field population"
feature_slug: "microsoft-dynamics-contact-object-case-field-population"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide"
keywords:
  - "microsoft"
  - "dynamics"
  - "contact"
  - "object"
  - "case"
  - "field"
  - "population"
  - "when"
---

# Microsoft Dynamics contact object case field population

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

When the Contact object type is used, customer information can populate fields on a Case object at the same time.

## Extended Definition

When the Contact object type is used, customer information can populate fields on a Case object at the same time.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Extension input at the beginning of a call is on When extension input at the beginning of a call is on, the end-user experience is as follows: The end-user calls the contact center's global number.
- In the case that you don't have phone numbers stored in your CRM, or prefer to use a Unique ID (UID) for this contact lookup instead, CCAI Platform can deliver the same seamless experience.
- Giving agents the opportunity to add an area code to a phone number is particularly important in cases when the area code isn't included in the CRM record.
- In the SMS Queue selection field, search and select the destination SMS queue where the consumers will be deflected when they opt-in for SMS deflection.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Sync button behavior Sync button works on the following types of Salesforce objects: Case page CCAI Platform finds the current lookup object - Contact, Account, Person Account, or Lead The phone number field is populated based on the default phone setting Contact or Account or PersonAccount or Lead page If the current object is the same object type as lookup object, the object is populated and the object's phone number field.
- Salesforce: CCAI Platform session mapping to case or account objects (person account, contact, lead) When a call or chat takes place, the associated data needs to be made available in your CRM and CCAI Platform offers flexibility in how the call/chat session data to is attached to Salesforce data objects.
- When the Account ID is selected and the option Allow agent to select "Create a new case" option for outbound calls is enabled, a new case ID entered in the field and CCAI Platform pops a case and call attaches session data to the case using activity or CCAI Platform Session object.
- Sample UI of multiple CCAI Platform sessions related to a case CCAI Platform session object data hierarchy The session object is organized as follows: Session(s) related list: the list of session(s) related to a case or account object Session Detail : presents the core session object details Core session fields: lists any associated transfers and files File list: any files that have been uploaded or created as part of the session File detail: all details about a file, including access to file itself Actions: a list of actions that occurred during the session Action detail: additional info about a specific action Transfers: complete list of transfers that occurred during the session Transfer detail: displays all fields and data associated with a single transfer events CCAI Platform session overview After opening a session, the following view will be provided, listing all associated CCAI Platform session actions, attached files, and transfers.

### "Salesforce installation guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Configure the Object Settings for Accounts , Cases , Contacts , and Leads using this table: Object Read Create Edit Delete View All Modify All Cases X X X X Contacts X X X X Accounts X X X X Leads X X X X To configure these settings, click the Object Name .
- Repeat these steps for each of the four objects (Accounts, Cases, Contacts, and Leads).
- Create a custom permission set and apply to all agents In this section, you will create a custom permission set (with the minimum requirements needed for integration), update it with case and contact permissions, and apply it to all agents who use the CCAI Platform portal.
- Object Field Read Access Edit Access Tasks Type X X Once all configurations are done, click Manage Assignments .

