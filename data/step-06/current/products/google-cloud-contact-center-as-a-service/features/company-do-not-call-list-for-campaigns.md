---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.101Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Company Do Not Call list for campaigns"
feature_slug: "company-do-not-call-list-for-campaigns"
latest_feature_date: "2023-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "company"
  - "do"
  - "not"
  - "call"
  - "list"
  - "campaigns"
  - "campaign"
  - "owners"
---

# Company Do Not Call list for campaigns

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Campaign owners can create and manage a company Do Not Call list to block selected outbound campaign calls.

## Extended Definition

Campaign owners can create and manage a company Do Not Call list to block selected outbound campaign calls.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Standard Reports: Campaign Data Sets \_|\_ Google Cloud Contact Center as\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Campaign_Data_Sets)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Carrier Error The total number of interactions where there was an error on the carrier side Not Picked Up The total number of interactions where the call was unanswered by the consumer DNC Company The total number of skipped calls because a contact was on a company DNC list.
- This is calculated as BCW +Talk Time + Hold time + Wrap-up time / All handled interactions Predictive Dialer Disposition Report The Predictive Dialer Disposition Report provides details on the statuses of the dispositioned calls within the selected campaigns.
- Preview Dialer Disposition Report The Preview Dialer Disposition Report provides details on the statuses of the dispositioned calls within the selected campaigns.
- Total Volume The total volume of calls presented from the Campaign Handled Calls The interactions that were handled by an agent Abandoned by Contact The interaction was answered by the consumer and then the consumer decides to disconnect from the call.

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Settings recommendations Use a longer ringtone and/or more frequent notification if: Agents are often multitasking and not always waiting to take a call In an open office or louder environment Agents might listen to music from their computer Use a shorter ringtone if: Agents are always alert and waiting for calls Higher call frequency Call whisper: Use this when the queue selection and type of call highly impact the first communication from the agent Increase speed of whisper for decreased wait time impact For very low second count SLAs: Only use whisper and countdown if necessary as the duration of these messages contributes to the wait time for calls Send reserved data properties With reserved data properties, you can send information about an end-user to CCAI Platform when a chat or call session begins, or even after a session has begun.
- Monitoring Live Calls and Chats Overview Supervisors and Agents in training benefit from listening in on live calls and viewing live chats, without joining the session or interrupting the consumer and Agent on the call or chat.
- End the call or chat if it exceeds a company defined queue wait time threshold.
- Mark the checkbox Allow transfers to queues outside of operation hours for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter: All queues within operating hours All queues that are outside of operation hours with after hour deflection enabled All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation Select Mobile and Web SDK call deflection options When selected, visual options will be displayed when outside of hours of operation.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- EWT for calls For calls, EWT is calculated based on the following formula: EWT = ((average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued calls - available agents)) + {EWT for callbacks, campaign calls, and scheduled calls} EWT for chats For chats, EWT is calculated based on the following formula: EWT = (average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued chats - available agents) Note: In chat channels, the value for active agents includes a multiplier based on the chat concurrency if the chat concurrency is >1.
- Queue keywords When an end-user texts a Top-level queue, the system automatically prompts the end-user to enter a number associated with a sub queue(based on the order in which you have listed your queues on the Queue Menu Setting page.) You can also add keywords to queues.
- Listen to call recordings Once the call has been recorded, the recording will most likely be saved in your CRM, depending on your configuration.
- Mark the checkbox for Scheduled Voice Call to show an option for customers to select from a list of available times to receive a call.

