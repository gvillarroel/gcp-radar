---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.102Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Localization country code setting for calls"
feature_slug: "localization-country-code-setting-for-calls"
latest_feature_date: "2023-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
keywords:
  - "localization"
  - "country"
  - "code"
  - "setting"
  - "calls"
  - "call"
  - "add"
  - "party"
---

# Localization country code setting for calls

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Call and add-party dialogs can use a country code based on the outgoing or dialed number.

## Extended Definition

Call and add-party dialogs can use a country code based on the outgoing or dialed number.

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
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The number of dialed, failed, and completed calls are reported for the following types of calls: Calls to emergency services Conference calls with emergency services Calls to special services Conference calls with special services Configure global call settings You can configure global call settings on the Settings > Call page of CCAI Platform.
- If the number is blocked, and the caller is calling into a UK number from a phone number with a US country code, the callback won't take place since there will be an incorrect number stored for the caller [UK +44 (extracted from inbound IVR number + consumer entered number].
- Examples: If a consumer dials a UK number from a UK phone and does not enter UK country code [44], the number will be stored with +44 and the callback call will take place as usual since the correct number is stored.
- Enable callback fulfillment hours globally To enable callback fulfillment hours globally, follow these steps: Go to Settings > Calls > Callback Settings .

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- New calls while on a chat : If an agent is assigned to both call and chat queues, enabling this setting will allow the agent to be assigned new calls when they are on a chat.
- Add Phone Number ::: warning Add the Country Code to ensure the phone number will be blocked. ::: Go to Settings > Consumer Management > Phone Number Blocklist .
- Global Chat Settings New chats while on a call : If an agent is assigned to both call and chat queues, enabling this setting will allow the agent to be assigned new chats when they are on a call.
- To configure the redaction settings, do the following: To redact sensitive data from all incoming messages, select the Automatically redact all incoming messages to agents checkbox.

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Settings recommendations Use a longer ringtone and/or more frequent notification if: Agents are often multitasking and not always waiting to take a call In an open office or louder environment Agents might listen to music from their computer Use a shorter ringtone if: Agents are always alert and waiting for calls Higher call frequency Call whisper: Use this when the queue selection and type of call highly impact the first communication from the agent Increase speed of whisper for decreased wait time impact For very low second count SLAs: Only use whisper and countdown if necessary as the duration of these messages contributes to the wait time for calls Send reserved data properties With reserved data properties, you can send information about an end-user to CCAI Platform when a chat or call session begins, or even after a session has begun.
- Viewing live chat UI Agent : Name of Agent as entered on the Users and Teams page End User : Consumer name or unique ID if available Issue : Queue menu path View Case / Ticket : If your CRM is integrated with Contact Center AI Platform (CCAI Platform), click the link to view the CRM record associated with the chat session After Hour Deflection for Calls and Chats Overview Customize your consumer's experience by configuring specific deflection paths for when consumers try to contact you outside of your Hours of Operation are first configured, then deflection is enabled and configured at the global level in the Call Settings and Chat Settings pages.
- Under General , configure the following settings: Use whisper for calls : Once a call is assigned to the Agent, they will hear an audible message stating the call type and queue: "{Call Type} from {Queue Name}." Whisper read speed : Increase or decrease the speed at which the whisper message is read.
- Deflect to Queue: deflects the consumer to another queue OR Deflection Options (select one or more): Scheduled Call : When scheduled calls are enabled in the Channel Settings for this queue, you can select this option to present consumers with timeslots for a scheduled call during operating hours.

