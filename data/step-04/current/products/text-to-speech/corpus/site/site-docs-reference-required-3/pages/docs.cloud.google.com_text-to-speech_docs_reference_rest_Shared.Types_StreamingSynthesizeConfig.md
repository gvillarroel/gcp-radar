---
title: "StreamingSynthesizeConfig \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/StreamingSynthesizeConfig
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs/libraries
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/StreamingSynthesizeConfig
  title: "StreamingSynthesizeConfig \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Text-to-Speech
Reference
Send feedback
StreamingSynthesizeConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
VoiceSelectionParams
JSON representation
VoiceCloneParams
JSON representation
Provides configuration information for the StreamingSynthesize request.
JSON representation
{
"voice" : {
object ( VoiceSelectionParams )
} ,
"streamingAudioConfig" : {
object ( StreamingAudioConfig )
} ,
"customPronunciations" : {
object ( CustomPronunciations )
}
}
Fields
voice
object ( VoiceSelectionParams )
Required. The desired voice of the synthesized audio.
streamingAudioConfig
object ( StreamingAudioConfig )
Optional. The configuration of the synthesized audio.
customPronunciations
object ( CustomPronunciations )
Optional. The pronunciation customizations are applied to the input. If this is set, the input is synthesized using the given pronunciation customizations.
The initial support is for en-us, with plans to expand to other locales in the future. Instant Clone voices aren't supported.
In order to customize the pronunciation of a phrase, there must be an exact match of the phrase in the input types. If using SSML, the phrase must not be inside a phoneme tag.
VoiceSelectionParams
Description of which voice to use for a synthesis request.
JSON representation
{
"languageCode" : string ,
"name" : string ,
"ssmlGender" : enum ( SsmlVoiceGender ) ,
"customVoice" : {
object ( CustomVoiceParams )
} ,
"voiceClone" : {
object ( VoiceCloneParams )
} ,
"modelName" : string ,
"multiSpeakerVoiceConfig" : {
object ( MultiSpeakerVoiceConfig )
}
}
Fields
languageCode
string
Required. The language (and potentially also the region) of the voice expressed as a BCP-47 language tag, e.g. "en-US". This should not include a script tag (e.g. use "cmn-cn" rather than "cmn-Hant-cn"), because the script will be inferred from the input provided in the SynthesisInput. The TTS service will use this parameter to help choose an appropriate voice. Note that the TTS service may choose a voice with a slightly different language code than the one selected; it may substitute a different region (e.g. using en-US rather than en-CA if there isn't a Canadian voice available), or even a different language, e.g. using "nb" (Norwegian Bokmal) instead of "no" (Norwegian)".
name
string
The name of the voice. If both the name and the gender are not set, the service will choose a voice based on the other parameters such as languageCode.
ssmlGender
enum ( SsmlVoiceGender )
The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as languageCode and name. Note that this is only a preference, not requirement; if a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request.
customVoice
object ( CustomVoiceParams )
The configuration for a custom voice. If [CustomVoiceParams.model] is set, the service will choose the custom voice matching the specified configuration.
voiceClone
object ( VoiceCloneParams )
Optional. The configuration for a voice clone. If [VoiceCloneParams.voice_clone_key] is set, the service chooses the voice clone matching the specified configuration.
modelName
string
Optional. The name of the model. If set, the service will choose the model matching the specified configuration.
multiSpeakerVoiceConfig
object ( MultiSpeakerVoiceConfig )
Optional. The configuration for a Gemini multi-speaker text-to-speech setup. Enables the use of two distinct voices in a single synthesis request.
VoiceCloneParams
The configuration of Voice Clone feature.
JSON representation
{
"voiceCloningKey" : string
}
Fields
voiceCloningKey
string
Required. Created by GenerateVoiceCloningKey.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-29 UTC."],[],[]]
