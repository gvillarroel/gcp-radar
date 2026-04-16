---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.076Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Contact lists"
feature_slug: "contact-lists"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-create-desktop-layouts"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "contact"
  - "lists"
  - "agents"
  - "can"
  - "create"
  - "manage"
  - "personal"
  - "favorite"
---

# Contact lists

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Agents can create and manage personal, favorite, global, and custom contact lists for external contacts.

## Extended Definition

Agents can create and manage personal, favorite, global, and custom contact lists for external contacts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-create-desktop-layouts](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-create-desktop-layouts)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Create desktop layouts \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-create-desktop-layouts](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-create-desktop-layouts)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a desktop layout To create a desktop layout for placing an outbound call, receiving an inbound call, or handling a chat session, follow these steps: In the CCAI Platform portal, click Settings > Operation Management .
- After you create a desktop layout, you can configure which layouts agents see, depending on session type and other factors.
- With agent desktop, you can create customized desktop layouts for different use cases for your human agents.
- For Desktop Layout , click Manage Desktop Layout Lists .

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- CCAI Platform supports the following emergency and special services phone numbers: US emergency numbers Canada emergency numbers Canada special service numbers 911 - Emergency 911 - Emergency 211 - Public information and referral services 933 - Emergency test 311 - Non-emergency municipal government services 411 - Local directory assistance 511 - Weather and traveler information services 611 - Repair service 711 - Message relay service (MRS) 811 - Non-urgent health care telephone triage service 988 - Suicide and crisis lifeline Turn emergency calling on or off Turn on emergency calling to let authorized agents make and manage emergency and special services calls in the call adapter.
- Requesting new phone numbers Contact Support and include the following information about your preferences: Number type: Toll-free, National, Mobile, Local Location of number Number preference details about number structure or patterns Set up emergency and special services calling (US and Canada only) With CCAI Platform, agents in the US and Canada can make calls to emergency and special services using phone numbers that you dedicate to these types of calls.
- Restrict outbound calling for agents (new number) To restrict outbound calling for agents, follow these steps: Go to Settings > Call > Phone Number Management > Add Number and configure the number as a special service number.
- Flexible inbound call handling The flexible inbound call handling feature gives Agents the flexibility to manage inbound call sessions using the Agent Adapter.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Details and tips Due to the number of digits on a keypad, there's a 9 top-level queue menu limit If you need to more than 9 queues, nest more queues within a top-level queue All numbers assigned to your environment will default to the top of the queue unless otherwise assigned as Direct Access points (DAPs) If you are using multiple languages, numbers will default to the language selection message, then when the language is selected, will route to the top of the menu structure for the selected language If you want to hide a queue from a caller who dials into a number that goes to the top of the queue, toggle the Hide Selection From Menu option to Hide in the menu settings For internal transfers to teams or groups not available to callers, create one queue, hide the option from callers, and create all the necessary sub-queues for agents to pick from for transfers Once your queues are set up, you can see the numbers that the caller needs to select.
- This feature is typically used to help agents manage their time more efficiently and to help ensure that all sessions are properly documented and brought to a close.
- To enable contact support, Go to Settings > Operation Management .
- Example use cases: Show order details for a specific user via Mobile or Web queues Present your users with product offerings based on their locations by directing to a specialized web page based on user ID Mobile FAQ page landing can be personalized to show the right page for the user's membership tier based on the User ID Feature details If mobile or Web SDK passes User ID/identifier to CCAI Platform portal, it can be inserted as a session variable into your manual deflection webpage or FAQ link From the Admin Portal, an admin can add "@@USER ID@@" into the URL in Manual Deflection to Webpage field under Mobile or Web queues to dynamically retrieve and insert User ID From the Admin Portal, an admin can add "@@USER ID@@" into the URL for Mobile FAQ to dynamically retrieve and insert UID CCAI Platform portal configuration Automatic redirect Go to Settings > Queue > Mobile OR Web .

