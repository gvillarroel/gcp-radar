---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.425Z"
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
  - "channel"
  - "specific"
  - "responses"
  - "dialogflow"
  - "cx"
  - "supports"
  - "tailored"
  - "communication"
---

# Channel-specific responses

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports responses tailored to specific communication channels.

## Extended Definition

Dialogflow CX supports responses tailored to specific communication channels.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### Fulfillment \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/webhooks/<WebhookID> . returnPartialResponses boolean Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.
- An audio response message composed of both the synthesized Dialogflow agent responses and responses defined via playAudio .
- JSON representation { "responseType" : enum ( ResponseType ) , "channel" : string , // Union field message can be only one of the following: "text" : { object ( Text ) } , "payload" : { object } , "conversationSuccess" : { object ( ConversationSuccess ) } , "outputAudioText" : { object ( OutputAudioText ) } , "liveAgentHandoff" : { object ( LiveAgentHandoff ) } , "endInteraction" : { object ( EndInteraction ) } , "playAudio" : { object ( PlayAudio ) } , "mixedAudio" : { object ( MixedAudio ) } , "telephonyTransferCall" : { object ( TelephonyTransferCall ) } , "knowledgeInfoCard" : { object ( KnowledgeInfoCard ) } , "toolCall" : { object ( ToolCall ) } // End of list of possible types for union field message . } Fields responseType enum ( ResponseType ) Response type. channel string The channel which the response is associated with.
- JSON representation ResponseMessage JSON representation ConversationSuccess JSON representation OutputAudioText JSON representation LiveAgentHandoff JSON representation EndInteraction PlayAudio JSON representation MixedAudio JSON representation Segment JSON representation TelephonyTransferCall JSON representation KnowledgeInfoCard ToolCall JSON representation ResponseType SetParameterAction JSON representation ConditionalCases JSON representation Case JSON representation CaseContent JSON representation GeneratorSettings JSON representation A fulfillment can do one or more of the following actions at the same time: Generate rich message responses.

### Fulfillments \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Channel-specific response messages When defining fulfillment, you can create channel-specific response messages , so you can create targeted responses for text chat, voice, SMS, specific integrations that support channels, and so on.
- Utilizing channel-specific response messages at runtime Note: If you are using an existing integration that supports channels, the integration implementation performs the steps below.
- At runtime, Dialogflow CX will select either the default response message, or a channel-specific response message when a detect intent request specifies a channel.
- Go to the Session API reference Select a protocol and version for the Session reference: Protocol V3 V3beta1 REST Session resource Session resource RPC Session interface Session interface C++ SessionsClient Not available C# SessionsClient Not available Go SessionsClient Not available Java SessionsClient SessionsClient Node.js SessionsClient SessionsClient PHP Not available Not available Python SessionsClient SessionsClient Ruby Not available Not available Close If no channel is defined in a request, or no matching channel is found in fulfillment, the default response message will be returned by Dialogflow CX.

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

