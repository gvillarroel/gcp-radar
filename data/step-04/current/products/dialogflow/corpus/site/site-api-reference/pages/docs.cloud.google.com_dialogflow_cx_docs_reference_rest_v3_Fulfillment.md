---
title: "Fulfillment \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment
  title: "Fulfillment \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Reference
Send feedback
Fulfillment
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
ResponseMessage
JSON representation
ConversationSuccess
JSON representation
OutputAudioText
JSON representation
LiveAgentHandoff
JSON representation
EndInteraction
PlayAudio
JSON representation
MixedAudio
JSON representation
Segment
JSON representation
TelephonyTransferCall
JSON representation
KnowledgeInfoCard
ToolCall
JSON representation
ResponseType
SetParameterAction
JSON representation
ConditionalCases
JSON representation
Case
JSON representation
CaseContent
JSON representation
GeneratorSettings
JSON representation
A fulfillment can do one or more of the following actions at the same time:
Generate rich message responses.
Set parameter values.
Call the webhook.
Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse , call the webhook (for example, to load user data from a database), or both.
JSON representation
{
"messages" : [
{
object ( ResponseMessage )
}
] ,
"webhook" : string ,
"returnPartialResponses" : boolean ,
"tag" : string ,
"setParameterActions" : [
{
object ( SetParameterAction )
}
] ,
"conditionalCases" : [
{
object ( ConditionalCases )
}
] ,
"advancedSettings" : {
object ( AdvancedSettings )
} ,
"enableGenerativeFallback" : boolean ,
"generators" : [
{
object ( GeneratorSettings )
}
]
}
Fields
messages[]
object ( ResponseMessage )
The list of rich message responses to present to the user.
webhook
string
The webhook to call. Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/webhooks/<WebhookID> .
returnPartialResponses
boolean
Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
tag
string
The value of this field will be populated in the WebhookRequest fulfillmentInfo.tag field by Dialogflow when the associated webhook is called. The tag is typically used by the webhook service to identify which fulfillment is being called, but it could be used for other purposes. This field is required if webhook is specified.
setParameterActions[]
object ( SetParameterAction )
Set parameter values before executing the webhook.
conditionalCases[]
object ( ConditionalCases )
Conditional cases for this fulfillment.
advancedSettings
object ( AdvancedSettings )
Hierarchical advanced settings for this fulfillment. The settings exposed at the lower level overrides the settings exposed at the higher level.
enableGenerativeFallback
boolean
If the flag is true, the agent will utilize LLM to generate a text response. If LLM generation fails, the defined responses in the fulfillment will be respected. This flag is only useful for fulfillments associated with no-match event handlers.
generators[]
object ( GeneratorSettings )
A list of Generators to be called during this fulfillment.
ResponseMessage
Represents a response message that can be returned by a conversational agent.
Response messages are also used for output audio synthesis. The approach is as follows:
If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis.
If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design.
Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis.
This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
JSON representation
{
"responseType" : enum ( ResponseType ) ,
"channel" : string ,
// Union field message can be only one of the following:
"text" : {
object ( Text )
} ,
"payload" : {
object
} ,
"conversationSuccess" : {
object ( ConversationSuccess )
} ,
"outputAudioText" : {
object ( OutputAudioText )
} ,
"liveAgentHandoff" : {
object ( LiveAgentHandoff )
} ,
"endInteraction" : {
object ( EndInteraction )
} ,
"playAudio" : {
object ( PlayAudio )
} ,
"mixedAudio" : {
object ( MixedAudio )
} ,
"telephonyTransferCall" : {
object ( TelephonyTransferCall )
} ,
"knowledgeInfoCard" : {
object ( KnowledgeInfoCard )
} ,
"toolCall" : {
object ( ToolCall )
}
// End of list of possible types for union field message .
}
Fields
responseType
enum ( ResponseType )
Response type.
channel
string
The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel , and only associated channel response will be returned.
Union field message . Required. The rich response message. message can be only one of the following:
text
object ( Text )
Returns a text response.
payload
object ( Struct format)
Returns a response containing a custom, platform-specific payload.
conversationSuccess
object ( ConversationSuccess )
Indicates that the conversation succeeded.
outputAudioText
object ( OutputAudioText )
A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
liveAgentHandoff
object ( LiveAgentHandoff )
Hands off conversation to a human agent.
endInteraction
object ( EndInteraction )
Output only. A signal that indicates the interaction with the Dialogflow agent has ended. This message is generated by Dialogflow only when the conversation reaches END_SESSION page. It is not supposed to be defined by the user.
It's guaranteed that there is at most one such message in each response.
playAudio
object ( PlayAudio )
Signal that the client should play an audio clip hosted at a client-specific URI. Dialogflow uses this to construct mixedAudio . However, Dialogflow itself does not try to read or process the URI in any way.
mixedAudio
object ( MixedAudio )
Output only. An audio response message composed of both the synthesized Dialogflow agent responses and responses defined via playAudio . This message is generated by Dialogflow only and not supposed to be defined by the user.
telephonyTransferCall
object ( TelephonyTransferCall )
A signal that the client should transfer the phone call connected to this agent to a third-party endpoint.
knowledgeInfoCard
object ( KnowledgeInfoCard )
Represents info card for knowledge answers, to be better rendered in Dialogflow Messenger.
toolCall
object ( ToolCall )
Returns the definition of a tool call that should be executed by the client.
ConversationSuccess
Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about.
Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess .
You may set this, for example: * In the entryFulfillment of a Page if entering the page indicates that the conversation succeeded. * In a webhook response when you determine that you handled the customer issue.
JSON representation
{
"metadata" : {
object
}
}
Fields
metadata
object ( Struct format)
Custom metadata. Dialogflow doesn't impose any structure on this.
OutputAudioText
A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
JSON representation
{
"allowPlaybackInterruption" : boolean ,
// Union field source can be only one of the following:
"text" : string ,
"ssml" : string
// End of list of possible types for union field source .
}
Fields
allowPlaybackInterruption
boolean
Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
Union field source . The source, which is either plain text or SSML. source can be only one of the following:
text
string
The raw text to be synthesized.
ssml
string
The SSML text to be synthesized. For more information, see SSML .
LiveAgentHandoff
Indicates that the conversation should be handed off to a live agent.
Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures.
You may set this, for example: * In the entryFulfillment of a Page if entering the page indicates something went extremely wrong in the conversation. * In a webhook response when you determine that the customer issue can only be handled by a human.
JSON representation
{
"metadata" : {
object
}
}
Fields
metadata
object ( Struct format)
Custom metadata for your handoff procedure. Dialogflow doesn't impose any structure on this.
EndInteraction
This type has no fields.
Indicates that interaction with the Dialogflow agent has ended. This message is generated by Dialogflow only and not supposed to be defined by the user.
PlayAudio
Specifies an audio clip to be played by the client as part of the response.
JSON representation
{
"audioUri" : string ,
"allowPlaybackInterruption" : boolean
}
Fields
audioUri
string
Required. URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
allowPlaybackInterruption
boolean
Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
MixedAudio
Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs. The external URIs are specified via playAudio . This message is generated by Dialogflow only and not supposed to be defined by the user.
JSON representation
{
"segments" : [
{
object ( Segment )
}
]
}
Fields
segments[]
object ( Segment )
Segments this audio response is composed of.
Segment
Represents one segment of audio.
JSON representation
{
"allowPlaybackInterruption" : boolean ,
// Union field content can be only one of the following:
"audio" : string ,
"uri" : string
// End of list of possible types for union field content .
}
Fields
allowPlaybackInterruption
boolean
Output only. Whether the playback of this segment can be interrupted by the end user's speech and the client should then start the next Dialogflow request.
Union field content . Content of the segment. content can be only one of the following:
audio
string ( bytes format)
Raw audio synthesized from the Dialogflow agent's response using the output config specified in the request.
A base64-encoded string.
uri
string
Client-specific URI that points to an audio clip accessible to the client. Dialogflow does not impose any validation on it.
TelephonyTransferCall
Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.
JSON representation
{
// Union field endpoint can be only one of the following:
"phoneNumber" : string
// End of list of possible types for union field endpoint .
}
Fields
Union field endpoint . Endpoint to transfer the call to. endpoint can be only one of the following:
phoneNumber
string
Transfer the call to a phone number in E.164 format .
KnowledgeInfoCard
This type has no fields.
Represents info card response. If the response contains generative knowledge prediction, Dialogflow will return a payload with Infobot Messenger compatible info card.
Otherwise, the info card response is skipped.
ToolCall
Represents a call of a specific tool's action with the specified inputs.
JSON representation
{
"tool" : string ,
"action" : string ,
"inputParameters" : {
object
}
}
Fields
tool
string
Required. The tool associated with this call. Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/tools/<ToolID> .
action
string
Required. The name of the tool's action associated with this call.
inputParameters
object ( Struct format)
Optional. The action's input parameters.
ResponseType
Represents different response types.
Enums
RESPONSE_TYPE_UNSPECIFIED
Not specified.
ENTRY_PROMPT
The response is from an entry prompt in the page.
PARAMETER_PROMPT
The response is from form-filling prompt in the page.
HANDLER_PROMPT
The response is from a transition route or an [event handler][EventHandler] in the page or flow or transition route group.
SetParameterAction
Setting a parameter value.
JSON representation
{
"parameter" : string ,
"value" : value
}
Fields
parameter
string
Display name of the parameter.
value
value ( Value format)
The new value of the parameter. A null value clears the parameter.
ConditionalCases
A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
JSON representation
{
"cases" : [
{
object ( Case )
}
]
}
Fields
cases[]
object ( Case )
A list of cascading if-else conditions.
Case
Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
JSON representation
{
"condition" : string ,
"caseContent" : [
{
object ( CaseContent )
}
]
}
Fields
condition
string
The condition to activate and select this case. Empty means the condition is always true. The condition is evaluated against [form parameters][Form.parameters] or [session parameters][SessionInfo.parameters].
See the conditions reference .
caseContent[]
object ( CaseContent )
A list of case content.
CaseContent
The list of messages or conditional cases to activate for this case.
JSON representation
{
// Union field cases_or_message can be only one of the following:
"message" : {
object ( ResponseMessage )
} ,
"additionalCases" : {
object ( ConditionalCases )
}
// End of list of possible types for union field cases_or_message .
}
Fields
Union field cases_or_message . Either a message is returned or additional cases to be evaluated. cases_or_message can be only one of the following:
message
object ( ResponseMessage )
Returned message.
additionalCases
object ( ConditionalCases )
Additional cases to be evaluated.
GeneratorSettings
Generator settings used by the LLM to generate a text response.
JSON representation
{
"generator" : string ,
"inputParameters" : {
string : string ,
...
} ,
"outputParameter" : string
}
Fields
generator
string
Required. The generator to call. Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/generators/<GeneratorID> .
inputParameters
map (key: string, value: string)
Map from [placeholder parameter][Generator.Parameter.id] in the Generator to corresponding session parameters. By default, Dialogflow uses the session parameter with the same name to fill in the generator template. e.g. If there is a placeholder parameter city in the Generator, Dialogflow default to fill in the $city with $session.params.city . However, you may choose to fill $city with $session.params.desination-city . - Map key: [parameter ID][Genrator.Parameter.id] - Map value: session parameter name
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
outputParameter
string
Required. Output parameter which should contain the generator response.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
