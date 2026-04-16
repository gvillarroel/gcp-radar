---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.087Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Virtual task assistant for chats"
feature_slug: "virtual-task-assistant-for-chats"
latest_feature_date: "2024-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "virtual"
  - "task"
  - "assistant"
  - "chats"
  - "available"
  - "chat"
  - "interactions"
  - "web"
---

# Virtual task assistant for chats

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

A virtual task assistant is available for chat interactions in the web SDK.

## Extended Definition

A virtual task assistant is available for chat interactions in the web SDK.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Here is an example reserved data properties in a SIP header: se tt i n g : { redirec t io n : { op t io n : "sip" , sip : { uri : "Destination SIP URI" , da ta parame ters e na bled : true false , da ta parame ters : [ { f ield : "verified customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "bad actor" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "repeat customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" } ], da ta records : { i n me ta da ta : true false , i n crm record : true false } } } } Support for virtual agents If you have a virtual agent (a support agent or a virtual task assistant) that performs end-user verification, the virtual agent can pass the end-user verification information to CCAI Platform.
- Viewing live chat UI Agent : Name of Agent as entered on the Users and Teams page End User : Consumer name or unique ID if available Issue : Queue menu path View Case / Ticket : If your CRM is integrated with Contact Center AI Platform (CCAI Platform), click the link to view the CRM record associated with the chat session After Hour Deflection for Calls and Chats Overview Customize your consumer's experience by configuring specific deflection paths for when consumers try to contact you outside of your Hours of Operation are first configured, then deflection is enabled and configured at the global level in the Call Settings and Chat Settings pages.
- Available Monitoring Pages to end a Call or Chat: Call Monitoring Page ( Calls > Connected , Calls > Queued ) Chat Monitoring Page ( Chats > Connected , Chat > Queued ) Go to call or chat row that you want to end and click on the dots under the Actions column.
- Configure a virtual task assistant to pass the Verified Customer parameter To configure a virtual task assistant to pass the Verified Customer parameter, follow these steps: In the CCAI Platform portal, click Settings > Virtual Agent .

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.
- Total Calls (Calls) Count of the number of completed inbound and outbound calls the agent has taken in the Today timeframe Call count on the Agent monitoring page counts sessions not interactions Call sessions are attributed to the last agent who handled the session Outbound and inbound calls are included Due to some date/time matching differences, this column should only be used as a guide - use downloadable reports for specific call interaction counts per agent Total Chats (Chats) Completed chat sessions handled today Last End Time The end time of the last completed session Last time offered Shows the last time the agent was offered a call/chat notification.
- Handled Total number of completed interactions ASA / Sec Average speed to answer AHT / Sec Average Handle Time Virtual agent chat dashboard This dashboard provides a range of status, session, and performance insights for Chat sessions attended by the Virtual Agents.
- Calculation: (Total Sentiment Score of all call sessions / Total no of Virtual Agent messages) Performance metrics dashboard Overview The Performance Metrics dashboard gives you a high level overview of your support center for both calls and chats.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Example of how to select Agent Activity reports in Reports > Users & Teams: Available in Agent Activity Summary report ( Reports > Users & Teams > Agent Activity - Summary Report) as "Agent exceeded target chat response time." Available in Agent Timeline report ( Reports > Users & Teams > Agent Activity - Timeline Report) as "Agent exceeded target chat response time." When chats are dismissed, chat status will show as Dismissed - inactive end-user .
- All default and custom statuses other than "Available" are considered unavailable, allowing the agent to self-select when they are ready to take chats by changing their status to Available.
- Dismissal Timing: These settings indicate the number of minutes of consumer inactivity that will change the chat status to "Inactive" for both Human Agent chats and Virtual Agent chats.
- Agent status and availability To prevent agents from receiving Auto Answer chats before they're ready, Admins can set an unavailable default status for agents who have just logged in.

