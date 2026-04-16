---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.014Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Keyboard DTMF entry in the agent adapter"
feature_slug: "keyboard-dtmf-entry-in-the-agent-adapter"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set"
keywords:
  - "keyboard"
  - "dtmf"
  - "entry"
  - "agent"
  - "adapter"
  - "agents"
  - "can"
  - "type"
---

# Keyboard DTMF entry in the agent adapter

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Agents can type or paste alphanumeric strings into the call adapter to play DTMF tones with pauses.

## Extended Definition

Agents can type or paste alphanumeric strings into the call adapter to play DTMF tones with pauses.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)

## Supporting Pages

### "Agent Assist \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Spelling and grammar correction : provides spelling and grammar suggestions for messages that agents type into the message field of the chat adapter.
- A ( -- ) displays when no score is available. last sentiment score for the last consumer response (updates in real-time) session current average sentiment score (updates in real-time) prev. leg average sentiment score of the previous segment There are three sentiments types (neutral, happy, and negative) in the Real-Time Sentiment Analysis and scores displayed fall into the following ranges: Over 63 = Happy Between 38 and 63 = Neutral Below 38 = Negative During the session, the Real-Time Sentiment Analysis scores are sent the to the Agent Adapter.
- There are three sentiments types (neutral, happy, and negative) in the Real-Time Sentiment Analysis and scores displayed fall into the following ranges: 40-75 = Neutral Over 75 = Happy Below 30 = Negative During the session, the Real-Time Sentiment Analysis scores are sent the to the Agent Adapter.
- If you select the Spelling and Grammar Check checkbox, then the following two checkboxes appear: Allow agents to turn on/off automatic checks : Select this checkbox to let agents turn on and off spelling and grammar check in the chat adapter.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Mobile SDK All Mobile SDK functionality is the same as the Web SDK with these notable exceptions: Mobile SDK supports Picture and Video attachments up to 18MB Mobile SDK allows for multiple file types to be uploaded to the same message Mobile SDK supports uploading all file types (Text, Picture, Video) No rich text editor functionality Does not support reCAPTCHA Setting up and assigning agents to channels and queues: IVR, mobile, web Overview Channels are configurable and should be enabled and set up individually.
- Prevent agents from selecting a queue for an outbound call You can hide a queue in the agent adapter so that agents can't select it for an outbound call.
- Details and tips Due to the number of digits on a keypad, there's a 9 top-level queue menu limit If you need to more than 9 queues, nest more queues within a top-level queue All numbers assigned to your environment will default to the top of the queue unless otherwise assigned as Direct Access points (DAPs) If you are using multiple languages, numbers will default to the language selection message, then when the language is selected, will route to the top of the menu structure for the selected language If you want to hide a queue from a caller who dials into a number that goes to the top of the queue, toggle the Hide Selection From Menu option to Hide in the menu settings For internal transfers to teams or groups not available to callers, create one queue, hide the option from callers, and create all the necessary sub-queues for agents to pick from for transfers Once your queues are set up, you can see the numbers that the caller needs to select.
- EWT for calls For calls, EWT is calculated based on the following formula: EWT = ((average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued calls - available agents)) + {EWT for callbacks, campaign calls, and scheduled calls} EWT for chats For chats, EWT is calculated based on the following formula: EWT = (average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued chats - available agents) Note: In chat channels, the value for active agents includes a multiplier based on the chat concurrency if the chat concurrency is >1.

### "Standard Reports Agent and Teams Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Date and Timestamp Agent Status Summary and Timeline Report Agent statuses, also known as Aux codes, are used to track time spent on different tasks, make agents available for calls or chats, and are used extensively for workforce management.
- Total Preset SMS Sent: Total number of preset SMS sent by Agents using SMS Blending features like In Call and Wait Time SMS.
- These emergency calling related event types will be displayed in the column Activity Log (Agent Status Summary Report).
- Total Auto Answered Calls: Total number of interactions that were assigned to Agents via auto answer.

