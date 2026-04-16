---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.364Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Channel-specific response messages"
feature_slug: "channel-specific-response-messages"
latest_feature_date: "2024-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversations.ConversationsAsyncClient"
keywords:
  - "channel"
  - "specific"
  - "response"
  - "messages"
  - "dialogflow"
  - "cx"
  - "supports"
  - "chat"
---

# Channel-specific response messages

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports channel-specific response messages for Google Chat, LINE, Messenger from Meta, Workplace from Meta, and Slack.

## Extended Definition

Dialogflow CX supports channel-specific response messages for Google Chat, LINE, Messenger from Meta, Workplace from Meta, and Slack.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversations.ConversationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversations.ConversationsAsyncClient)

## Supporting Pages

### Fulfillments \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Channel-specific response messages When defining fulfillment, you can create channel-specific response messages , so you can create targeted responses for text chat, voice, SMS, specific integrations that support channels, and so on.
- Utilizing channel-specific response messages at runtime Note: If you are using an existing integration that supports channels, the integration implementation performs the steps below.
- Setting channel-specific response messages at design-time To provide channel-specific response messages for fulfillment when using the console: Click Add channel after adding default response messages.
- To provide channel-specific response messages for fulfillment when using the API: Set the Fulfillment.messages[i].channel field to the desired channel for each response message.

### Fulfillment \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/webhooks/<WebhookID> . returnPartialResponses boolean Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.
- JSON representation { "responseType" : enum ( ResponseType ) , "channel" : string , // Union field message can be only one of the following: "text" : { object ( Text ) } , "payload" : { object } , "conversationSuccess" : { object ( ConversationSuccess ) } , "outputAudioText" : { object ( OutputAudioText ) } , "liveAgentHandoff" : { object ( LiveAgentHandoff ) } , "endInteraction" : { object ( EndInteraction ) } , "playAudio" : { object ( PlayAudio ) } , "mixedAudio" : { object ( MixedAudio ) } , "telephonyTransferCall" : { object ( TelephonyTransferCall ) } , "knowledgeInfoCard" : { object ( KnowledgeInfoCard ) } , "toolCall" : { object ( ToolCall ) } // End of list of possible types for union field message . } Fields responseType enum ( ResponseType ) Response type. channel string The channel which the response is associated with.
- The rich response message. message can be only one of the following: text object ( Text ) Returns a text response. payload object ( Struct format) Returns a response containing a custom, platform-specific payload. conversationSuccess object ( ConversationSuccess ) Indicates that the conversation succeeded. outputAudioText object ( OutputAudioText ) A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message. liveAgentHandoff object ( LiveAgentHandoff ) Hands off conversation to a human agent. endInteraction object ( EndInteraction ) Output only.
- JSON representation { "messages" : [ { object ( ResponseMessage ) } ] , "webhook" : string , "returnPartialResponses" : boolean , "tag" : string , "setParameterActions" : [ { object ( SetParameterAction ) } ] , "conditionalCases" : [ { object ( ConditionalCases ) } ] , "advancedSettings" : { object ( AdvancedSettings ) } , "enableGenerativeFallback" : boolean , "generators" : [ { object ( GeneratorSettings ) } ] } Fields messages[] object ( ResponseMessage ) The list of rich message responses to present to the user. webhook string The webhook to call.

### "Class ConversationsAsyncClient (2.47.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversations.ConversationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversations.ConversationsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListMessagesRequest ( parent="parent value", ) Make the request page result = client. list messages (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.ListMessagesRequest , dict]] The request object.
- Returns Type Description google.cloud.dialogflow v2.services.conversations.pagers.ListMessagesAsyncPager The response message for Conversations.ListMessages .
- SuggestConversationSummaryResponse Suggests summary for a conversation based on specific historical messages.
- GenerateStatelessSummaryRequest ( stateless conversation=stateless conversation, conversation profile=conversation profile, ) Make the request response = await client. generate stateless summary (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.GenerateStatelessSummaryRequest , dict]] The request object.

