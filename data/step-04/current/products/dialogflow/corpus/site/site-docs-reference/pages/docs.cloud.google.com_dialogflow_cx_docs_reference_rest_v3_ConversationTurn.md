---
title: "ConversationTurn \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn
  title: "ConversationTurn \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
ConversationTurn
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
UserInput
JSON representation
QueryInput
JSON representation
TextInput
JSON representation
IntentInput
JSON representation
AudioInput
JSON representation
InputAudioConfig
JSON representation
AudioEncoding
SpeechModelVariant
BargeInConfig
JSON representation
EventInput
JSON representation
DtmfInput
JSON representation
ToolCallResult
JSON representation
Error
JSON representation
VirtualAgentOutput
JSON representation
TestRunDifference
JSON representation
DiffType
One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
JSON representation
{
"userInput" : {
object ( UserInput )
} ,
"virtualAgentOutput" : {
object ( VirtualAgentOutput )
}
}
Fields
userInput
object ( UserInput )
The user input.
virtualAgentOutput
object ( VirtualAgentOutput )
The virtual agent output.
UserInput
The input from the human user.
JSON representation
{
"input" : {
object ( QueryInput )
} ,
"injectedParameters" : {
object
} ,
"isWebhookEnabled" : boolean ,
"enableSentimentAnalysis" : boolean
}
Fields
input
object ( QueryInput )
Supports text input , event input , dtmf input in the test case.
injectedParameters
object ( Struct format)
Parameters that need to be injected into the conversation during intent detection.
isWebhookEnabled
boolean
If webhooks should be allowed to trigger in response to the user utterance. Often if parameters are injected, webhooks should not be enabled.
enableSentimentAnalysis
boolean
Whether sentiment analysis is enabled.
QueryInput
Represents the query input. It can contain one of:
A conversational query in the form of text.
An intent query that specifies which intent to trigger.
Natural language speech audio to be processed.
An event to be triggered.
DTMF digits to invoke an intent and fill in parameter value.
The results of a tool executed by the client.
JSON representation
{
"languageCode" : string ,
// Union field input can be only one of the following:
"text" : {
object ( TextInput )
} ,
"intent" : {
object ( IntentInput )
} ,
"audio" : {
object ( AudioInput )
} ,
"event" : {
object ( EventInput )
} ,
"dtmf" : {
object ( DtmfInput )
} ,
"toolCallResult" : {
object ( ToolCallResult )
}
// End of list of possible types for union field input .
}
Fields
languageCode
string
Required. The language of the input. See Language Support for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
Union field input . Required. The input specification. input can be only one of the following:
text
object ( TextInput )
The natural language text to be processed.
intent
object ( IntentInput )
The intent to be triggered.
audio
object ( AudioInput )
The natural language speech audio to be processed.
event
object ( EventInput )
The event to be triggered.
dtmf
object ( DtmfInput )
The DTMF event to be handled.
toolCallResult
object ( ToolCallResult )
The results of a tool executed by the client.
TextInput
Represents the natural language text to be processed.
JSON representation
{
"text" : string
}
Fields
text
string
Required. The UTF-8 encoded natural language text to be processed.
IntentInput
Represents the intent to trigger programmatically rather than as a result of natural language processing.
JSON representation
{
"intent" : string
}
Fields
intent
string
Required. The unique identifier of the intent. Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/intents/<IntentID> .
AudioInput
Represents the natural speech audio to be processed.
JSON representation
{
"config" : {
object ( InputAudioConfig )
} ,
"audio" : string
}
Fields
config
object ( InputAudioConfig )
Required. Instructs the speech recognizer how to process the speech audio.
audio
string ( bytes format)
The natural language speech audio to be processed. A single request can contain up to 2 minutes of speech audio data. The transcribed text cannot contain more than 256 bytes.
For non-streaming audio detect intent, both config and audio must be provided. For streaming audio detect intent, config must be provided in the first request and audio must be provided in all following requests.
A base64-encoded string.
InputAudioConfig
Instructs the speech recognizer on how to process the audio content.
JSON representation
{
"audioEncoding" : enum ( AudioEncoding ) ,
"sampleRateHertz" : integer ,
"enableWordInfo" : boolean ,
"phraseHints" : [
string
] ,
"model" : string ,
"modelVariant" : enum ( SpeechModelVariant ) ,
"singleUtterance" : boolean ,
"bargeInConfig" : {
object ( BargeInConfig )
} ,
"optOutConformerModelMigration" : boolean
}
Fields
audioEncoding
enum ( AudioEncoding )
Required. Audio encoding of the audio content to process.
sampleRateHertz
integer
Sample rate (in Hertz) of the audio content sent in the query. Refer to Cloud Speech API documentation for more details.
enableWordInfo
boolean
Optional. If true , Dialogflow returns SpeechWordInfo in StreamingRecognitionResult with information about the recognized speech words, e.g. start and end time offsets. If false or unspecified, Speech doesn't return any word-level information.
phraseHints[]
string
Optional. A list of strings containing words and phrases that the speech recognizer should recognize with higher likelihood.
See the Cloud Speech documentation for more details.
model
string
Optional. Which Speech model to select for the given request. For more information, see Speech models .
modelVariant
enum ( SpeechModelVariant )
Optional. Which variant of the Speech model to use.
singleUtterance
boolean
Optional. If false (default), recognition does not cease until the client closes the stream. If true , the recognizer will detect a single spoken utterance in input audio. Recognition ceases when it detects the audio's voice has stopped or paused. In this case, once a detected intent is received, the client should close the stream and start a new request with a new stream as needed. Note: This setting is relevant only for streaming methods.
bargeInConfig
object ( BargeInConfig )
Configuration of barge-in behavior during the streaming of input audio.
optOutConformerModelMigration
boolean
If true , the request will opt out for STT conformer model migration. This field will be deprecated once force migration takes place in June 2024. Please refer to Dialogflow CX Speech model migration .
AudioEncoding
Audio encoding of the audio content sent in the conversational query request. Refer to the Cloud Speech API documentation for more details.
Enums
AUDIO_ENCODING_UNSPECIFIED
Not specified.
AUDIO_ENCODING_LINEAR_16
Uncompressed 16-bit signed little-endian samples (Linear PCM). LINT: LEGACY_NAMES
AUDIO_ENCODING_FLAC
FLAC (Free Lossless Audio Codec) is the recommended encoding because it is lossless (therefore recognition is not compromised) and requires only about half the bandwidth of LINEAR16 . FLAC stream encoding supports 16-bit and 24-bit samples, however, not all fields in STREAMINFO are supported.
AUDIO_ENCODING_MULAW
8-bit samples that compand 14-bit audio samples using G.711 PCMU/mu-law.
AUDIO_ENCODING_AMR
Adaptive Multi-Rate Narrowband codec. sampleRateHertz must be 8000.
AUDIO_ENCODING_AMR_WB
Adaptive Multi-Rate Wideband codec. sampleRateHertz must be 16000.
AUDIO_ENCODING_OGG_OPUS
Opus encoded audio frames in Ogg container ( OggOpus ). sampleRateHertz must be 16000.
AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE
Although the use of lossy encodings is not recommended, if a very low bitrate encoding is required, OGG_OPUS is highly preferred over Speex encoding. The Speex encoding supported by Dialogflow API has a header byte in each block, as in MIME type audio/x-speex-with-header-byte . It is a variant of the RTP Speex encoding defined in RFC 5574 . The stream is a sequence of blocks, one block per RTP packet. Each block starts with a byte containing the length of the block, in bytes, followed by one or more frames of Speex data, padded to an integral number of bytes (octets) as specified in RFC 5574. In other words, each RTP header is replaced with a single byte containing the block length. Only Speex wideband is supported. sampleRateHertz must be 16000.
AUDIO_ENCODING_ALAW
8-bit samples that compand 13-bit audio samples using G.711 PCMU/a-law.
SpeechModelVariant
Variant of the specified Speech model to use.
See the Cloud Speech documentation for which models have different variants. For example, the "phone_call" model has both a standard and an enhanced variant. When you use an enhanced model, you will generally receive higher quality results than for a standard model.
Enums
SPEECH_MODEL_VARIANT_UNSPECIFIED
No model variant specified. In this case Dialogflow defaults to USE_BEST_AVAILABLE.
USE_BEST_AVAILABLE
Use the best available variant of the [Speech model][InputAudioConfig.model] that the caller is eligible for.
USE_STANDARD
Use standard model variant even if an enhanced model is available. See the Cloud Speech documentation for details about enhanced models.
USE_ENHANCED
Use an enhanced model variant:
If an enhanced variant does not exist for the given model and request language, Dialogflow falls back to the standard variant.
The Cloud Speech documentation describes which models have enhanced variants.
BargeInConfig
Configuration of the barge-in behavior. Barge-in instructs the API to return a detected utterance at a proper time while the client is playing back the response audio from a previous request. When the client sees the utterance, it should stop the playback and immediately get ready for receiving the responses for the current request.
The barge-in handling requires the client to start streaming audio input as soon as it starts playing back the audio from the previous response. The playback is modeled into two phases:
No barge-in phase: which goes first and during which speech detection should not be carried out.
Barge-in phase: which follows the no barge-in phase and during which the API starts speech detection and may inform the client that an utterance has been detected. Note that no-speech event is not expected in this phase.
The client provides this configuration in terms of the durations of those two phases. The durations are measured in terms of the audio length from the start of the input audio.
No-speech event is a response with END_OF_UTTERANCE without any transcript following up.
JSON representation
{
"noBargeInDuration" : string ,
"totalDuration" : string
}
Fields
noBargeInDuration
string ( Duration format)
Duration that is not eligible for barge-in at the beginning of the input audio.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
totalDuration
string ( Duration format)
Total duration for the playback at the beginning of the input audio.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
EventInput
Represents the event to trigger.
JSON representation
{
"event" : string
}
Fields
event
string
Name of the event.
DtmfInput
Represents the input for dtmf event.
JSON representation
{
"digits" : string ,
"finishDigit" : string
}
Fields
digits
string
The dtmf digits.
finishDigit
string
The finish digit (if any).
ToolCallResult
The result of calling a tool's action that has been executed by the client.
JSON representation
{
"tool" : string ,
"action" : string ,
// Union field result can be only one of the following:
"error" : {
object ( Error )
} ,
"outputParameters" : {
object
}
// End of list of possible types for union field result .
}
Fields
tool
string
Required. The tool associated with this call. Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/tools/<ToolID> .
action
string
Required. The name of the tool's action associated with this call.
Union field result . The tool call's result. result can be only one of the following:
error
object ( Error )
The tool call's error.
outputParameters
object ( Struct format)
The tool call's output parameters.
Error
An error produced by the tool call.
JSON representation
{
"message" : string
}
Fields
message
string
Optional. The error message of the function.
VirtualAgentOutput
The output from the virtual agent.
JSON representation
{
"sessionParameters" : {
object
} ,
"differences" : [
{
object ( TestRunDifference )
}
] ,
"diagnosticInfo" : {
object
} ,
"triggeredIntent" : {
object ( Intent )
} ,
"currentPage" : {
object ( Page )
} ,
"textResponses" : [
{
object ( Text )
}
] ,
"status" : {
object ( Status )
}
}
Fields
sessionParameters
object ( Struct format)
The session parameters available to the bot at this point.
differences[]
object ( TestRunDifference )
Output only. If this is part of a [result conversation turn][TestCaseResult.conversation_turns], the list of differences between the original run and the replay for this output, if any.
diagnosticInfo
object ( Struct format)
Required. Input only. The diagnostic [info][Session.DetectIntentResponse.QueryResult.diagnostic_info] output for the turn. Required to calculate the testing coverage.
triggeredIntent
object ( Intent )
The Intent that triggered the response. Only name and displayName will be set.
currentPage
object ( Page )
The Page on which the utterance was spoken. Only name and displayName will be set.
textResponses[]
object ( Text )
The text responses from the agent for the turn.
status
object ( Status )
Response error from the agent in the test result. If set, other output is empty.
TestRunDifference
The description of differences between original and replayed agent output.
JSON representation
{
"type" : enum ( DiffType ) ,
"description" : string
}
Fields
type
enum ( DiffType )
The type of diff.
description
string
A human readable description of the diff, showing the actual output vs expected output.
DiffType
What part of the message replay differs from the test case.
Enums
DIFF_TYPE_UNSPECIFIED
Should never be used.
INTENT
The intent.
PAGE
The page.
PARAMETERS
The parameters.
UTTERANCE
The message utterance.
FLOW
The flow.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-10 UTC."],[],[]]
