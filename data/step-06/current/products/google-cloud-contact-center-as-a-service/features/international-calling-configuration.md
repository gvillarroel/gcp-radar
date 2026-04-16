---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.124Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "International calling configuration"
feature_slug: "international-calling-configuration"
latest_feature_date: "2023-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/add-edit-user"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "international"
  - "calling"
  - "configuration"
  - "phone"
  - "numbers"
  - "can"
  - "configured"
  - "country"
---

# International calling configuration

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Phone numbers can be configured for international calling at the country code level with user-level access controls.

## Extended Definition

Phone numbers can be configured for international calling at the country code level with user-level access controls.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/add-edit-user](https://docs.cloud.google.com/contact-center/ccai-platform/docs/add-edit-user)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- International numbers : after the country code is determined, phone number validation is run based on the number format of that country.
- After this international calling configuration is set at the phone number level, you can manage user-level access.
- CCAI Platform supports the following emergency and special services phone numbers: US emergency numbers Canada emergency numbers Canada special service numbers 911 - Emergency 911 - Emergency 211 - Public information and referral services 933 - Emergency test 311 - Non-emergency municipal government services 411 - Local directory assistance 511 - Weather and traveler information services 611 - Repair service 711 - Message relay service (MRS) 811 - Non-urgent health care telephone triage service 988 - Suicide and crisis lifeline Turn emergency calling on or off Turn on emergency calling to let authorized agents make and manage emergency and special services calls in the call adapter.
- Requesting new phone numbers Contact Support and include the following information about your preferences: Number type: Toll-free, National, Mobile, Local Location of number Number preference details about number structure or patterns Set up emergency and special services calling (US and Canada only) With CCAI Platform, agents in the US and Canada can make calls to emergency and special services using phone numbers that you dedicate to these types of calls.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- If an IVR queue menu is mapped as an Mobile PSTN fallback, the queue cannot be deleted without removing this association Rich data The following data is passed to the CRM ticket for the IVR fallback call: End-user's phone number To gather the phone number data, the end-user is required to input their phone number Example phone number gathering screen in Mobile: Selected queue menu When the end-user makes a call via PSTN, the system retrieves the queue name and custom data package via phone number lookup Custom data package (as configured by your mobile development team) The custom data package is mapped to the correct ticket based on the active call session with the phone number entered by the end-user in the app CCAI Platform portal configuration Go to Settings > Queue > Mobile .
- Configuration iOS/Android Developer : With Multiple Mobile Apps in use, the threshold for PSTN Callback calls will be configured from within the Admin Portal in Settings > Developer Settings > Edit Mobile App > Fallback phone number/threshold .
- Keep the following in mind: Incoming SMS phone numbers can be assigned to only one queue (a queue can have multiple incoming numbers as long as they are not used for any other queue.) Outbound SMS phone numbers can be assigned to any number of queues and a queue can have any number of outbound phone numbers.
- Queue menus can be set to route to a specific group of agents, deflect to messages, other queues, phone numbers, or voicemail, and many features can be applied at the queue level for specific customization.

### "Add, view, and edit users \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/add-edit-user](https://docs.cloud.google.com/contact-center/ccai-platform/docs/add-edit-user)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check this box to enable your global phone management settings' international calling configuration.
- Optional: International Calling: Do not limit dialing to the restricted country codes .
- Note: This field is a drop-down with pre-configured locations.

