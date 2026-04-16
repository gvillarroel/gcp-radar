---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.134Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Agent Adapter audio chimes"
feature_slug: "agent-adapter-audio-chimes"
latest_feature_date: "2023-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
keywords:
  - "agent"
  - "adapter"
  - "audio"
  - "chimes"
  - "adds"
  - "updates"
  - "call"
  - "connection"
---

# Agent Adapter audio chimes

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Adds and updates audio chimes in the Agent Adapter for call connection and related call events.

## Extended Definition

Adds and updates audio chimes in the Agent Adapter for call connection and related call events.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- CCAI Platform supports the following emergency and special services phone numbers: US emergency numbers Canada emergency numbers Canada special service numbers 911 - Emergency 911 - Emergency 211 - Public information and referral services 933 - Emergency test 311 - Non-emergency municipal government services 411 - Local directory assistance 511 - Weather and traveler information services 611 - Repair service 711 - Message relay service (MRS) 811 - Non-urgent health care telephone triage service 988 - Suicide and crisis lifeline Turn emergency calling on or off Turn on emergency calling to let authorized agents make and manage emergency and special services calls in the call adapter.
- Mobile SDK: Automatic call recovery If the agent's connection is interrupted or unexpectedly ended from their voice provider, CCAI Platform will wait for the agent to be reconnected for up to one minute.
- If selected, agents will see a list of the calls completed in the last 30 days and associated metadata such as time stamps, call duration, and disposition notes in the Call Adapter.
- Recovery calls If an agent assigns an account or record and then uses the Hang up and Callback option, the adapter will show the previous account or record selection.

### "Agent extensions guide \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-extensions-guide)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- This document walks you through the Call Adapter functions directly impacted by the addition of agent extensions.
- Receive an internal call When an internal call comes in from another agent, the agent's name and extension appear under Calling from on the Incoming call screen.
- Set deflections for extension calls If your administrator gives you permissions, you can set deflections for agent to agent calls or end-user to agent calls.
- Agent extensions allow agents to be assigned a phone number extension for agent to agent and end-user to agent calling.

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Mark the checkbox Allow transfers to queues outside of operation hours for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter: All queues within operating hours All queues that are outside of operation hours with after hour deflection enabled All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation Select Mobile and Web SDK call deflection options When selected, visual options will be displayed when outside of hours of operation.
- User profile flags When reserved data properties are sent to CCAI Platform during a call or chat session, this information is displayed in the agent adapter in the form of user profile flags.
- For information about how these flags are displayed in the agent adapter, see User profile flags for chat and User profile flags for calls .
- Settings recommendations Use a longer ringtone and/or more frequent notification if: Agents are often multitasking and not always waiting to take a call In an open office or louder environment Agents might listen to music from their computer Use a shorter ringtone if: Agents are always alert and waiting for calls Higher call frequency Call whisper: Use this when the queue selection and type of call highly impact the first communication from the agent Increase speed of whisper for decreased wait time impact For very low second count SLAs: Only use whisper and countdown if necessary as the duration of these messages contributes to the wait time for calls Send reserved data properties With reserved data properties, you can send information about an end-user to CCAI Platform when a chat or call session begins, or even after a session has begun.

