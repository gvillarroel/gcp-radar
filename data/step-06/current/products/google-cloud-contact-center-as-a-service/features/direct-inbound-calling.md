---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.070Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Direct inbound calling"
feature_slug: "direct-inbound-calling"
latest_feature_date: "2024-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
keywords:
  - "direct"
  - "inbound"
  - "calling"
  - "lets"
  - "administrators"
  - "assign"
  - "phone"
  - "numbers"
---

# Direct inbound calling

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Direct inbound calling lets administrators assign direct phone numbers to agents or queues so end users can bypass IVR queue trees.

## Extended Definition

Direct inbound calling lets administrators assign direct phone numbers to agents or queues so end users can bypass IVR queue trees.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CCAI Platform supports the following emergency and special services phone numbers: US emergency numbers Canada emergency numbers Canada special service numbers 911 - Emergency 911 - Emergency 211 - Public information and referral services 933 - Emergency test 311 - Non-emergency municipal government services 411 - Local directory assistance 511 - Weather and traveler information services 611 - Repair service 711 - Message relay service (MRS) 811 - Non-urgent health care telephone triage service 988 - Suicide and crisis lifeline Turn emergency calling on or off Turn on emergency calling to let authorized agents make and manage emergency and special services calls in the call adapter.
- Session types for reporting For reporting, calls to or from direct phone numbers generate the following session types: Voice Inbound (Direct) : an inbound call to a direct phone number Voice Outbound (Direct) : an outbound call from a direct phone number Voice Internal : an internal call to or from a direct phone number Estimated wait time announcement for calls Estimated Wait Time (EWT) Announcements use a calculation to predict the wait time until a caller is connected with an agent.
- The Assigned Queues / Agents column only displays queues or agents for the following types of numbers: IVR (outbound) SMS (inbound) SMS (outbound) WhatsApp Assigned queue (only for direct numbers) Assigned agent (only for direct numbers) Click Add Number .
- To assign multiple direct phone numbers to an agent, follow the instructions in Bulk user management: Upload new or updated users while following these guidelines: Stay within the limitations for assigning direct phone numbers.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Details and tips Due to the number of digits on a keypad, there's a 9 top-level queue menu limit If you need to more than 9 queues, nest more queues within a top-level queue All numbers assigned to your environment will default to the top of the queue unless otherwise assigned as Direct Access points (DAPs) If you are using multiple languages, numbers will default to the language selection message, then when the language is selected, will route to the top of the menu structure for the selected language If you want to hide a queue from a caller who dials into a number that goes to the top of the queue, toggle the Hide Selection From Menu option to Hide in the menu settings For internal transfers to teams or groups not available to callers, create one queue, hide the option from callers, and create all the necessary sub-queues for agents to pick from for transfers Once your queues are set up, you can see the numbers that the caller needs to select.
- Keep the following in mind: Incoming SMS phone numbers can be assigned to only one queue (a queue can have multiple incoming numbers as long as they are not used for any other queue.) Outbound SMS phone numbers can be assigned to any number of queues and a queue can have any number of outbound phone numbers.
- Any agents assigned to the queue can use any of the outbound phone numbers; therefore, If you want an agent to have their own number, they must have their own leaf queue.
- Assign SMS numbers to queues If you have not yet added and verified SMS phone numbers on the Phone Number Management page, see Adding SMS numbers .

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Call and chat routing User segment DAP : CCAI Platform will search for a contact using phone number (IVR) or email address (Mobile) or custom field (Mobile) from Salesforce to match settings in the queue and directly route call or chat to the queue.
- Add phone numbers as lookup numbers in CCAI Platform portal All phone number types across every CRM object (Contact, Account, Lead, and so on) are available selections in the CCAI Platform portal.
- This makes it easier to connect different support sessions to a single account for consumers who have multiple phone numbers, such as mobile, home, or work numbers.
- Use entered number to make call option A specific account might have multiple locations or contacts, and not all phone numbers are saved to the account or contact.

