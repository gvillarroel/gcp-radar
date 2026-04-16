---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.085Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Chat adapter message timestamps in seconds"
feature_slug: "chat-adapter-message-timestamps-in-seconds"
latest_feature_date: "2024-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
keywords:
  - "chat"
  - "adapter"
  - "message"
  - "timestamps"
  - "seconds"
  - "can"
  - "display"
  - "second"
---

# Chat adapter message timestamps in seconds

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The chat adapter can display message timestamps with second-level precision.

## Extended Definition

The chat adapter can display message timestamps with second-level precision.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)

## Supporting Pages

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Settings recommendations Use a longer ringtone and/or more frequent notification if: Agents are often multitasking and not always waiting to take a call In an open office or louder environment Agents might listen to music from their computer Use a shorter ringtone if: Agents are always alert and waiting for calls Higher call frequency Call whisper: Use this when the queue selection and type of call highly impact the first communication from the agent Increase speed of whisper for decreased wait time impact For very low second count SLAs: Only use whisper and countdown if necessary as the duration of these messages contributes to the wait time for calls Send reserved data properties With reserved data properties, you can send information about an end-user to CCAI Platform when a chat or call session begins, or even after a session has begun.
- Use countdown for calls : Plays an audible message to the agent counting down seconds until the caller is live on the phone: "You're up - call starting in 3,2,1." Incoming call notification : Click on each option to hear the tone.
- User profile flags When reserved data properties are sent to CCAI Platform during a call or chat session, this information is displayed in the agent adapter in the form of user profile flags.
- If you turn on this setting, CCAI Platform plays a message to the agent that counts down the seconds until the call starts—for example, "You're up - call starts in 3, 2, 1." Click Save .

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- The timer display one of the following colors to indicate how much of the target response time remains: Yellow : more than 45 seconds remain until the target response time expires Orange : between 45 and 15 seconds remain until the target response time expires Red : less than 15 seconds remain until the target response time expires If the target response time expires, the active chat indicator continues to display red until the agent responds.
- Reply back to this message to begin a new chat." OR "ujet message chat dismissed": "Welcome Back!<br>Do you have the same issue or a new issue?" "ujet chat new": "New" "ujet chat same": "Same" Mobile SDKs The string file names for customizing this UI are broken down below: ujet chat footer view message dismissed: "Welcome back!\nWe have not heard from you in a while.\nDo you have the same issue or a new issue?" OR ujet chat footer view message timeout: "Your previous chat has ended, please click to start a new chat." ujet common same: "Same" ujet common new: "New" Configure rich messaging and file attachments You can configure CCAI Platform so that agents can use rich messaging, emojis, and file attachments in the chat adapter.
- To differentiate between a Message Preview and a message that was previously sent by the consumer, the Message Preview is displayed with the following changes while the consumer is typing: The background of the chat bubble is white/transparent The chat bubble has a dashed-line border The chat font is italicized The chat displays Message Preview below the bubble instead of the timestamp Once the consumer sends their message, the Message Preview is updated to display as a typical message with the colored background, standard font, and timestamp.
- Please see Chat Routing: Multicast and Deltacast for all routing logic details Agent experience When the chat is assigned to an agent, and is approximately three seconds from being connected, the agent receives a browser notification, New Chat Picked Up.

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 0 = Show everywhere, 1 = Hide from the options menu, 2 = Hide from the post chat screen, 3 = Hide from both the options menu and the post chat screen. .setPushNotificationsAllowed ( true ) .build () ; //The following customizes various attributes in chat UI ChatStyles chatStyles = new ChatStyles () ; chatStyles.setBackButton ( new BackButtonStyle ( false, "ujet agent sample" )) ; //customizes back button styles chatStyles.setHeader ( ... ) ; //customizes chat header styles chatStyles.setAgentMessageBubbles ( ... ) ; //customizes agent messages styles chatStyles.setConsumerMessageBubbles ( ... ) ; //customizes consumer messages styles chatStyles.setSystemMessages ( ... ) ; //customizes system messages styles chatStyles.setEndChatButton ( ... ) ; //customizes end chat button styles chatStyles.setTimeStamps ( ... ) ; //customizes timestamp styles chatStyles.setUserInputBar ( ... ) ; //customizes user input bar styles UjetOption ujetOption = new UjetOption.Builder () .setUjetStylesOptions ( new UjetStylesOptions.Builder () .setChatStyles ( chatStyles ) .build () ) //The following customizes various attributes in chat UI using json file.
- Possible values are "agent" (when agent ends the session) or "end user" (when end user ends the session) or "timeout" (when chat is timed out) or "dismissed" (when chat is dismissed). duration String Contains session duration in seconds and only included for call session.
- The type is the type of the value. string JSON string number integer, float date UTC Unix timestamp format with 13 digits. (contains milliseconds) url HTTP URL format The label is the display name on the CRM page.
- Troubleshooting Starting a new chat took longer than 30 seconds Check if you are responding to a delegate method of custom data.

