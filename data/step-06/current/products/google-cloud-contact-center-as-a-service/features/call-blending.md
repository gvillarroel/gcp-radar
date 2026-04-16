---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.053Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Call blending"
feature_slug: "call-blending"
latest_feature_date: "2025-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "call"
  - "blending"
  - "agents"
  - "can"
  - "automatically"
  - "transitioned"
  - "between"
  - "outbound"
---

# Call blending

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Agents can be automatically transitioned between outbound campaign calls and inbound calls based on configured call volumes and conditions.

## Extended Definition

Agents can be automatically transitioned between outbound campaign calls and inbound calls based on configured call volumes and conditions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Restrict outbound calling for special service numbers Admins can configure dedicated restrictions for special service phone numbers so that only agents, teams, or locations allowed for the special service number can make calls to that number.
- Restrict outbound calling for agents (new number) To restrict outbound calling for agents, follow these steps: Go to Settings > Call > Phone Number Management > Add Number and configure the number as a special service number.
- Queue selection for outbound calls To let agents select the queue that they want to use to make an outbound call, select the Allow agents to select a queue for Agent initiated outbound call checkbox.
- To assign extension numbers to your agents, do one of the following: To automatically generate phone extensions for your agents, select the Enable Auto-generated extension checkbox.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Admin Portal settings that can impact the Agent experience Do not append call or chat session to any existing open ticket Prompt agents to select open case from list (when applicable) Allow agent to select "Create a new case" option for outbound calls Allow agent to select "Do not create a case" option for outbound calls Allow "Use entered number to make call" option Attach CCAI Platform Sessions directly to the account lookup object.
- Agent transferred from: agent initiating the session transfer Agent transferred to: agent receiving the session transfer Created at: time transfer was created Fail reason: reason for failure of session transfer Menu transferred from: the originating queue menu from which transfer was initiated Menu transferred to: queue menu the session was transferred to Session: CCAI Platform session ID Status: status of transfer Transfer from materialized path: the materialized path transfer was originated from Transfer to materialized path: the materialized path the session was transferred to CCAI Platform agent experience in Salesforce Lightning Provide expected CCAI Platform behaviour in Salesforce Lightning to Admins and Agents, specifically when connecting to the Activity object rather than the CCAI Platform Session object.
- No cases will be created CRM data impacting the Agent experience Number of contacts with the same phone number No Contact with phone number Only one Contact with phone number Multiple Contacts with phone number Number of open cases No Case Only one Case Multiple Cases Placing an outbound call Dialed outbound call Placing a call by syncing with the current page in Salesforce From Salesforce, navigate to a Case, Contact, Account, or Lead.
- Once enabled and configured, there are 3 ways an agent status can be updated Agent updates status in the Adapter: existing agent status behavior Agent selects next status during a live session: existing agent feature, described in Allow agents to set their next status while on a call or chat.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Add a third party calls (while the agent remains on the call) Enable Call Recording Redaction for agents : Enables Call Redaction to be used on outbound calls.
- Prevent agents from selecting a queue for an outbound call You can hide a queue in the agent adapter so that agents can't select it for an outbound call.
- To prevent agents from selecting a queue for an outbound call, do the following: In the CCAI Platform portal, click Settings > Queue .
- Details and tips Due to the number of digits on a keypad, there's a 9 top-level queue menu limit If you need to more than 9 queues, nest more queues within a top-level queue All numbers assigned to your environment will default to the top of the queue unless otherwise assigned as Direct Access points (DAPs) If you are using multiple languages, numbers will default to the language selection message, then when the language is selected, will route to the top of the menu structure for the selected language If you want to hide a queue from a caller who dials into a number that goes to the top of the queue, toggle the Hide Selection From Menu option to Hide in the menu settings For internal transfers to teams or groups not available to callers, create one queue, hide the option from callers, and create all the necessary sub-queues for agents to pick from for transfers Once your queues are set up, you can see the numbers that the caller needs to select.

