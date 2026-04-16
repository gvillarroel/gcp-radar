---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.079Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Quality management session events"
feature_slug: "quality-management-session-events"
latest_feature_date: "2024-07-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "quality"
  - "management"
  - "session"
  - "events"
  - "integrations"
  - "can"
  - "now"
  - "receive"
---

# Quality management session events

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Quality management integrations can now receive session events for hold, mute, redaction, recording indication, and queue information.

## Extended Definition

Quality management integrations can now receive session events for hold, mute, redaction, recording indication, and queue information.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Agent chat response time Overview When an agent is in an active chat session and receives a message from the consumer, a timer will begin and a series of UI cues to prompt the agent to respond within a response threshold.
- The following variables are available: Customer Attributes : First Name : the end-user's first name Last Name : the end-user's last name Full Name : the end-user's full name Agent Attributes : First Name : the agent's first name Last Name : the agent's last name Full Name : the agent's full name Alias : the agent's alias ID : the agent's ID Session Attributes : Queue : the assigned queue Repeat this step to add more attributes.
- When the target response time is met, chats will not end Chats end when: Agent manually clicks end chat The consumer: Closes the active tab Navigates away from the page the chat session started on Clicks x on the chat session When the chat timeout threshold is reached CCAI Platform portal configuration Enabling global target response time Go to Settings > Chat .
- Here's an example of a transfer limit field: "transfer limit" : { "enabled" : true , "limit count" : 10 , "limit reached" : "true" }, Agent experience If you select Disable all transfer options when configuring the transfer limit, the Chat Transfer button in the agent adapter is inactive when the transfer limit is reached for a chat session.

### "Session data feed \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To turn on the session data feed, follow these steps: In the CCAI Platform portal, click Settings > Operation Management .
- A session data feed captures the stream of data that is generated when events take place during a session.
- Session data feed events Here is a list of the events for which the session data feed captures data.
- Captured VA session variables Chat ID: 3070 Menu: In-App Support (QUEUE qca02)/Support/PN/PN 1 Chatbot Platform: Virtual Agent PN Chatbot Workflow: Post Session Transfer - Chat Virtual Agent: Virtual Agent PN - Chat Intent: Captured At: July 5, 2024 at 3:08:39 PM GMT+7 Captured Variables agentHelpfulness: 4 issueResolution: yes agentComprehension: 5 openFeedback: nothing Co-browse session started Screen Share session was started by Agent Time of start: July 5, 2024 at 3:16:54 PM GMT+7 Co-browse session ended Screen Share session was ended by Agent Time of end: July 5, 2024 at 3:19:31 PM GMT+7 Co-browse remote control requested Screen Share remote control was requested Co-browse remote control accepted Screen Share remote control was accepted Co-browse remote control rejected Screen Share remote control was rejected Co-browse full device control requested Screen Share full device control was requested Co-browse full device control accepted Screen Share full device control was accepted Co-browse full device control rejected Screen Share full device control was rejected Session sentiment score Average sentiment score for the segment: 52 Customer email collected Customer email: 222larabrown@gmail.com Realtime Transcript Call ID: 6800 July 5, 2024 at 4:23:03 PM GMT+7 00:25 ---------------------------------------- [July 5, 2024 at 4:23:05 PM GMT+7 Virtual Agent PN - Voice] Hello, I am CX Agent Number 1.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Restrict queue transfers CCAI Platform lets you restrict the queues and teams that can transfer a session, and the queues and teams that can receive a transferred session.
- This lets you control the ability of agents to transfer sessions and receive transferred sessions based on the queues or teams that they belong to.
- Example use cases: Show order details for a specific user via Mobile or Web queues Present your users with product offerings based on their locations by directing to a specialized web page based on user ID Mobile FAQ page landing can be personalized to show the right page for the user's membership tier based on the User ID Feature details If mobile or Web SDK passes User ID/identifier to CCAI Platform portal, it can be inserted as a session variable into your manual deflection webpage or FAQ link From the Admin Portal, an admin can add "@@USER ID@@" into the URL in Manual Deflection to Webpage field under Mobile or Web queues to dynamically retrieve and insert User ID From the Admin Portal, an admin can add "@@USER ID@@" into the URL for Mobile FAQ to dynamically retrieve and insert UID CCAI Platform portal configuration Automatic redirect Go to Settings > Queue > Mobile OR Web .
- If an IVR queue menu is mapped as an Mobile PSTN fallback, the queue cannot be deleted without removing this association Rich data The following data is passed to the CRM ticket for the IVR fallback call: End-user's phone number To gather the phone number data, the end-user is required to input their phone number Example phone number gathering screen in Mobile: Selected queue menu When the end-user makes a call via PSTN, the system retrieves the queue name and custom data package via phone number lookup Custom data package (as configured by your mobile development team) The custom data package is mapped to the correct ticket based on the active call session with the phone number entered by the end-user in the app CCAI Platform portal configuration Go to Settings > Queue > Mobile .

