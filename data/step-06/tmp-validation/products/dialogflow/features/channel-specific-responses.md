---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.739Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Channel-specific responses"
feature_slug: "channel-specific-responses"
latest_feature_date: "2023-01-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "communication"
  - "tailored"
  - "channel"
  - "specific"
  - "responses"
  - "supports"
---

# Channel-specific responses

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports responses tailored to specific communication channels.

## Extended Definition

Dialogflow CX supports responses tailored to specific communication channels.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### Fulfillments \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Channel-specific response messages When defining fulfillment, you can create channel-specific response messages , so you can create targeted responses for text chat, voice, SMS, specific integrations that support channels, and so on.
- Utilizing channel-specific response messages at runtime Note: If you are using an existing integration that supports channels, the integration implementation performs the steps below.
- Setting channel-specific response messages at design-time To provide channel-specific response messages for fulfillment when using the console: Click Add channel after adding default response messages.
- To provide channel-specific response messages for fulfillment when using the API: Set the Fulfillment.messages[i].channel field to the desired channel for each response message.

### Fulfillment \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "responseType" : enum ( ResponseType ) , "channel" : string , // Union field message can be only one of the following: "text" : { object ( Text ) } , "payload" : { object } , "conversationSuccess" : { object ( ConversationSuccess ) } , "outputAudioText" : { object ( OutputAudioText ) } , "liveAgentHandoff" : { object ( LiveAgentHandoff ) } , "endInteraction" : { object ( EndInteraction ) } , "playAudio" : { object ( PlayAudio ) } , "mixedAudio" : { object ( MixedAudio ) } , "telephonyTransferCall" : { object ( TelephonyTransferCall ) } , "knowledgeInfoCard" : { object ( KnowledgeInfoCard ) } , "toolCall" : { object ( ToolCall ) } // End of list of possible types for union field message . } Fields responseType enum ( ResponseType ) Response type. channel string The channel which the response is associated with.
- JSON representation ResponseMessage JSON representation ConversationSuccess JSON representation OutputAudioText JSON representation LiveAgentHandoff JSON representation EndInteraction PlayAudio JSON representation MixedAudio JSON representation Segment JSON representation TelephonyTransferCall JSON representation KnowledgeInfoCard ToolCall JSON representation ResponseType SetParameterAction JSON representation ConditionalCases JSON representation Case JSON representation CaseContent JSON representation GeneratorSettings JSON representation A fulfillment can do one or more of the following actions at the same time: Generate rich message responses.
- The rich response message. message can be only one of the following: text object ( Text ) Returns a text response. payload object ( Struct format) Returns a response containing a custom, platform-specific payload. conversationSuccess object ( ConversationSuccess ) Indicates that the conversation succeeded. outputAudioText object ( OutputAudioText ) A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message. liveAgentHandoff object ( LiveAgentHandoff ) Hands off conversation to a human agent. endInteraction object ( EndInteraction ) Output only.
- JSON representation { "messages" : [ { object ( ResponseMessage ) } ] , "webhook" : string , "returnPartialResponses" : boolean , "tag" : string , "setParameterActions" : [ { object ( SetParameterAction ) } ] , "conditionalCases" : [ { object ( ConditionalCases ) } ] , "advancedSettings" : { object ( AdvancedSettings ) } , "enableGenerativeFallback" : boolean , "generators" : [ { object ( GeneratorSettings ) } ] } Fields messages[] object ( ResponseMessage ) The list of rich message responses to present to the user. webhook string The webhook to call.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Human Agent Assistant Event Represents a notification sent to Cloud Pub/Sub subscribers for human agent assistant events in a specific conversation. com. google. cloud. dialogflow. v2.
- Browse Carousel Card Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing carousel com. google. cloud. dialogflow. v2.
- Builder Represents a notification sent to Cloud Pub/Sub subscribers for human agent assistant events in a specific conversation. com. google. cloud. dialogflow. v2.
- Builder Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing carousel com. google. cloud. dialogflow. v2.

