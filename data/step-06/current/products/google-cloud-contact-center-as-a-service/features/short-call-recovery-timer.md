---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.057Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Short call recovery timer"
feature_slug: "short-call-recovery-timer"
latest_feature_date: "2025-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
keywords:
  - "short"
  - "call"
  - "recovery"
  - "timer"
  - "after"
  - "reduced"
  - "180"
  - "seconds"
---

# Short call recovery timer

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The recovery timer after a short call is reduced from 180 seconds to 15 seconds.

## Extended Definition

The recovery timer after a short call is reduced from 180 seconds to 15 seconds.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Short call recovery If Automatic Wrap up is enabled and the call connects but is ended within 10 seconds of connecting, the call adapter appears with a message "The call was too short" and provides an option to either Call back , or go Back to Available , placing them back in Available status.
- For more information, see the following: Salesforce : Outbound click to call Kustomer : Kustomer click to call ServiceNow : Add Click to Call to the top of the form Show the dial pad screen If you have a CRM configured for click-to-call, you can configure your instance to display the dial pad screen after an agent clicks a phone number in the CRM but before a call starts.
- Call experience flows Call Flow experience for different call types Overcapacity Deflection IVR Mobile Afterhours Deflection IVR Mobile Recording Per Queue Option Temporary Redirect per IVR Queue Credit Card Over IVR Scheduled calls Rather than waiting in queue for an agent, give consumers the option to select a time that works for them to receive a call from an agent.
- This will place a new Outbound Call and set the status of the original Voicemail call to 'Voicemail Read.' Scheduled call recovery If a consumer scheduled a call using the Web or Mobile SDK, then doesn't pick up the call at the scheduled time, a Callback option presented to Agent which will create a new Outbound call.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Dismissed chat details Dismissal settings can be set globally or per-queue When chats have been dismissed, they do not accrue wait time For a chat to be dismissed, both the consumer and agent have to have sent at least one message The dismiss eligibility timer starts from the latest message from an agent Only inbound chats can be dismissed When chats are dismissed and later reactivated, a consumer has to send at least one message afterward before the chat is eligible to be dismissed again Dismissed chats are ultimately ended when the chat timeout duration is met When chats are dismissed, activities are added to the chat transcript Chat Flow CCAI Platform portal configuration Dismissing chats - global setting A global configuration for all chat channels can be configured in Chat Settings.
- Feature benefits For Managers and Admins Automatically remind agents to respond promptly to conversations For Agents Visually shows which chat needs their attention first For end-users Less waiting time and quicker resolution time Feature details The response timer starts when the agent is assigned and the consumer has sent a message and applies even if an agent has not yet sent a message If the agent responds, the counter will not begin again until the consumer replies.
- The timer display one of the following colors to indicate how much of the target response time remains: Yellow : more than 45 seconds remain until the target response time expires Orange : between 45 and 15 seconds remain until the target response time expires Red : less than 15 seconds remain until the target response time expires If the target response time expires, the active chat indicator continues to display red until the agent responds.
- Chat timeout timer restarts when: Chat is assigned to an agent After each message sent by the consumer If a reply isn't made to the chat within the set time frame, the chat will time out and end with one of the following chat statuses: Timeout Agent No Message Timeout End User No Message Timeout Agent Stopped End User Stopped Click Set Chat Details to save.

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Settings recommendations Use a longer ringtone and/or more frequent notification if: Agents are often multitasking and not always waiting to take a call In an open office or louder environment Agents might listen to music from their computer Use a shorter ringtone if: Agents are always alert and waiting for calls Higher call frequency Call whisper: Use this when the queue selection and type of call highly impact the first communication from the agent Increase speed of whisper for decreased wait time impact For very low second count SLAs: Only use whisper and countdown if necessary as the duration of these messages contributes to the wait time for calls Send reserved data properties With reserved data properties, you can send information about an end-user to CCAI Platform when a chat or call session begins, or even after a session has begun.
- Call notification frequency : Choose for the agent to only hear the notification tone one time, or repeated after a specified number of seconds have passed.
- Mark the checkbox Allow transfers to queues outside of operation hours for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter: All queues within operating hours All queues that are outside of operation hours with after hour deflection enabled All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation Select Mobile and Web SDK call deflection options When selected, visual options will be displayed when outside of hours of operation.
- Viewing live chat UI Agent : Name of Agent as entered on the Users and Teams page End User : Consumer name or unique ID if available Issue : Queue menu path View Case / Ticket : If your CRM is integrated with Contact Center AI Platform (CCAI Platform), click the link to view the CRM record associated with the chat session After Hour Deflection for Calls and Chats Overview Customize your consumer's experience by configuring specific deflection paths for when consumers try to contact you outside of your Hours of Operation are first configured, then deflection is enabled and configured at the global level in the Call Settings and Chat Settings pages.

