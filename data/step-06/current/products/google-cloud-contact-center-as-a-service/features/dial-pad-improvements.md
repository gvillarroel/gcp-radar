---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.021Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Dial pad improvements"
feature_slug: "dial-pad-improvements"
latest_feature_date: "2025-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "dial"
  - "pad"
  - "improvements"
  - "agent"
  - "adapter"
  - "now"
  - "includes"
  - "additional"
---

# Dial pad improvements

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The agent adapter dial pad now includes additional selectors such as country code, outbound number, language, and queue.

## Extended Definition

The agent adapter dial pad now includes additional selectors such as country code, outbound number, language, and queue.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- No Case: ability to connect the CCAI Platform Custom Session object directly to any Salesforce account object, bypassing the need to create a case This builds on two related features: Option to look-up end users in Person Account object (instead of Contact ( default )) Option to leverage our CCAI Platform Session Object which stores all assets and data related to a single session in optimized CCAI Platform Session object Configuration availability requirements The configuration options for Account Lookup and Session Data are only available if the following conditions are met: Account Lookup configuration To configure custom account lookup settings, the following is required: Logged in Agent - at least one agent needs to be logged into a CCAI Platform adapter in Salesforce.
- Many new updates to the Agent call adapter Review and select from multiple matching account records Select from open cases associated with the selected account Create a new case Configurable option to not create a ticket and/or create a new ticket Handling multiple matching account records Flexible ticket to session association Feature details The object/term Account is referenced below as well as in the Agent Adapter UI, however, the object being referenced as "Account" may be different based on your configuration in Developer Settings .
- No cases will be created CRM data impacting the Agent experience Number of contacts with the same phone number No Contact with phone number Only one Contact with phone number Multiple Contacts with phone number Number of open cases No Case Only one Case Multiple Cases Placing an outbound call Dialed outbound call Placing a call by syncing with the current page in Salesforce From Salesforce, navigate to a Case, Contact, Account, or Lead.
- Configuration saved in Settings > Developer Settings for Account Lookup can be overridden by agent selection in the agent adapter if an object other than the primary object is synced Account ID and case ID field details Labels The object/term Account is referenced in this article as well as in the Agent Adapter UI, however, the object being referenced as "Account" may be different based on your configuration in Developer Settings.

### "Receive and make calls \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide)
- Source ID: `site-docs-reference-required-8`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- If you have a Salesforce or Zendesk customer relationship management (CRM) app, click the phone number that you want to dial, paste a phone number into the call adapter, or dial the number.
- To make an outbound call without outbound calling improvements, follow these steps: In the call adapter, click Start call .
- To make an outbound call using flexible outbound dialing, follow these steps: In the call adapter, click Start call .
- If auto-answer is enabled, an Incoming call screen appears in the call adapter and the target pick-up time a After you answer the call, the following sequence begins in the call adapter: A new screen appears that displays caller information, queue information, and the support phone number that the caller used.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Details and tips Due to the number of digits on a keypad, there's a 9 top-level queue menu limit If you need to more than 9 queues, nest more queues within a top-level queue All numbers assigned to your environment will default to the top of the queue unless otherwise assigned as Direct Access points (DAPs) If you are using multiple languages, numbers will default to the language selection message, then when the language is selected, will route to the top of the menu structure for the selected language If you want to hide a queue from a caller who dials into a number that goes to the top of the queue, toggle the Hide Selection From Menu option to Hide in the menu settings For internal transfers to teams or groups not available to callers, create one queue, hide the option from callers, and create all the necessary sub-queues for agents to pick from for transfers Once your queues are set up, you can see the numbers that the caller needs to select.
- EWT for calls For calls, EWT is calculated based on the following formula: EWT = ((average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued calls - available agents)) + {EWT for callbacks, campaign calls, and scheduled calls} EWT for chats For chats, EWT is calculated based on the following formula: EWT = (average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued chats - available agents) Note: In chat channels, the value for active agents includes a multiplier based on the chat concurrency if the chat concurrency is >1.
- Manual wrap-up If an agent manually changes their status to Wrap-up in the agent adapter, wrap-up activities are automatically assigned to the agent's last completed call or chat session.
- Record agent-initiated outbound calls Enables calls recording for Agent initiated calls: Dialed outbound calls Short call callbacks - For more information see Call recovery features .

