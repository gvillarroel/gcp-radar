---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.047Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Automatic wrap-up assignment for the last completed chat"
feature_slug: "automatic-wrap-up-assignment-for-the-last-completed-chat"
latest_feature_date: "2025-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "automatic"
  - "wrap"
  - "up"
  - "assignment"
  - "last"
  - "completed"
  - "chat"
  - "automatically"
---

# Automatic wrap-up assignment for the last completed chat

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Automatically assigns wrap-up status to the agent's last completed chat when the agent enters wrap-up manually.

## Extended Definition

Automatically assigns wrap-up status to the agent's last completed chat when the agent enters wrap-up manually.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- For the Automatically select account and record option, select if you want the system to automatically assign the account or record when the call ends, or after the call wrap-up ends.
- Select the last available menu : If the caller does not make a selection after the selected number of repetitions, this option automatically places them in the previous menu.
- Short call recovery If Automatic Wrap up is enabled and the call connects but is ended within 10 seconds of connecting, the call adapter appears with a message "The call was too short" and provides an option to either Call back , or go Back to Available , placing them back in Available status.
- Use callback fulfillment hours to automatically reschedule callbacks to the next business day when they fall outside of a configured window, rather than cancelling them when queue expiration is reached.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Manual wrap-up If an agent manually changes their status to Wrap-up in the agent adapter, wrap-up activities are automatically assigned to the agent's last completed call or chat session.
- Select the last available menu : If the caller does not make a selection after the specified number of repetitions, this option automatically places them in the previous menu.
- Example : If the Mobile menu 'Existing Customer Help' is mapped to the IVR menu 'Customer' for PSTN fallback, and an end-user selects 'Existing Customer Help' when PSTN fallback is active, the call would automatically be directed to IVR queue menu 'Customer.' If no PSTN fallback to IVR option is enabled and configured, the PSTN fallback call will be directed to the top of the IVR structure for that language.
- Queue keywords When an end-user texts a Top-level queue, the system automatically prompts the end-user to enter a number associated with a sub queue(based on the order in which you have listed your queues on the Queue Menu Setting page.) You can also add keywords to queues.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Chat Timeout Set the duration (in minutes) of time a customer has to respond to the last chat message sent before the chat is ended automatically.
- Feature benefits For Managers and Admins Automatically remind agents to respond promptly to conversations For Agents Visually shows which chat needs their attention first For end-users Less waiting time and quicker resolution time Feature details The response timer starts when the agent is assigned and the consumer has sent a message and applies even if an agent has not yet sent a message If the agent responds, the counter will not begin again until the consumer replies.
- Dismiss Inactive Chats Overview Agents can spend more spend time on active chats, with the option to dismiss inactive chats automatically or manually after a set threshold.
- Agent Experience Based on the configuration in chat settings, an Agent can manually dismiss a chat or a chat is automatically dismissed without an Agent taking action.

