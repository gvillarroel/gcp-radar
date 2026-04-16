---
title: "Package google.cloud.texttospeech.v1 \_|\_ Cloud Text-to-Speech \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/reference/rpc/google.cloud.texttospeech.v1
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/reference/rpc/google.cloud.texttospeech.v1
  title: "Package google.cloud.texttospeech.v1 \_|\_ Cloud Text-to-Speech \_|\_ Google\
    \ Cloud Documentation"
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
Package google.cloud.texttospeech.v1
Stay organized with collections
Save and categorize content based on your preferences.
Index
TextToSpeech (interface)
TextToSpeechLongAudioSynthesize (interface)
AdvancedVoiceOptions (message)
AudioConfig (message)
AudioEncoding (enum)
CustomPronunciationParams (message)
CustomPronunciationParams.PhoneticEncoding (enum)
CustomPronunciations (message)
CustomVoiceParams (message)
CustomVoiceParams.ReportedUsage (enum)
ListVoicesRequest (message)
ListVoicesResponse (message)
MultiSpeakerMarkup (message)
MultiSpeakerMarkup.Turn (message)
MultiSpeakerVoiceConfig (message)
MultispeakerPrebuiltVoice (message)
SsmlVoiceGender (enum)
StreamingAudioConfig (message)
StreamingSynthesisInput (message)
StreamingSynthesizeConfig (message)
StreamingSynthesizeRequest (message)
StreamingSynthesizeResponse (message)
SynthesisInput (message)
SynthesizeLongAudioMetadata (message)
SynthesizeLongAudioRequest (message)
SynthesizeLongAudioResponse (message)
SynthesizeSpeechRequest (message)
SynthesizeSpeechResponse (message)
Voice (message)
VoiceCloneParams (message)
VoiceSelectionParams (message)
TextToSpeech
Service that implements Google Cloud Text-to-Speech API.
ListVoices
rpc ListVoices( ListVoicesRequest ) returns ( ListVoicesResponse )
Returns a list of Voice supported for synthesis.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
StreamingSynthesize
rpc StreamingSynthesize( StreamingSynthesizeRequest ) returns ( StreamingSynthesizeResponse )
Performs bidirectional streaming speech synthesis: receives audio while sending text.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
SynthesizeSpeech
rpc SynthesizeSpeech( SynthesizeSpeechRequest ) returns ( SynthesizeSpeechResponse )
Synthesizes speech synchronously: receive results after all text input has been processed.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
TextToSpeechLongAudioSynthesize
Service that implements Google Cloud Text-to-Speech API.
SynthesizeLongAudio
rpc SynthesizeLongAudio( SynthesizeLongAudioRequest ) returns ( Operation )
Synthesizes long form text asynchronously.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
AdvancedVoiceOptions
Used for advanced voice options.
Fields
low_latency_journey_synthesis
bool
Only for Journey voices. If false, the synthesis is context aware and has a higher latency.
AudioConfig
Description of audio data to be synthesized.
Fields
audio_encoding
AudioEncoding
Required. The format of the audio byte stream.
speaking_rate
double
Optional. Input only. Speaking rate/speed, in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values < 0.25 or > 2.0 will return an error.
pitch
double
Optional. Input only. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.
volume_gain_db
double
Optional. Input only. Volume gain (in dB) of the normal native volume supported by the specific voice, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. Strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.
sample_rate_hertz
int32
Optional. The synthesis sample rate (in hertz) for this audio. When this is specified in SynthesizeSpeechRequest, if this is different from the voice's natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality), unless the specified sample rate is not supported for the encoding chosen, in which case it will fail the request and return google.rpc.Code.INVALID_ARGUMENT .
effects_profile_id[]
string
Optional. Input only. An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. Effects are applied on top of each other in the order they are given. See audio profiles for current supported profile ids.
AudioEncoding
Configuration to set up audio encoder. The encoding determines the output audio format that we'd like.
Enums
AUDIO_ENCODING_UNSPECIFIED
Not specified. Only used by GenerateVoiceCloningKey. Otherwise, will return result google.rpc.Code.INVALID_ARGUMENT .
LINEAR16
Uncompressed 16-bit signed little-endian samples (Linear PCM). Audio content returned as LINEAR16 also contains a WAV header.
MP3
MP3 audio at 32kbps.
OGG_OPUS
Opus encoded audio wrapped in an ogg container. The result is a file which can be played natively on Android, and in browsers (at least Chrome and Firefox). The quality of the encoding is considerably higher than MP3 while using approximately the same bitrate.
MULAW
8-bit samples that compand 14-bit audio samples using G.711 PCMU/mu-law. Audio content returned as MULAW also contains a WAV header.
ALAW
8-bit samples that compand 14-bit audio samples using G.711 PCMU/A-law. Audio content returned as ALAW also contains a WAV header.
PCM
Uncompressed 16-bit signed little-endian samples (Linear PCM). Note that as opposed to LINEAR16, audio won't be wrapped in a WAV (or any other) header.
M4A
M4A audio.
CustomPronunciationParams
Pronunciation customization for a phrase.
Fields
phrase
string
The phrase to which the customization is applied. The phrase can be multiple words, such as proper nouns, but shouldn't span the length of the sentence.
phonetic_encoding
PhoneticEncoding
The phonetic encoding of the phrase.
pronunciation
string
The pronunciation of the phrase. This must be in the phonetic encoding specified above.
PhoneticEncoding
The phonetic encoding of the phrase.
Enums
PHONETIC_ENCODING_UNSPECIFIED
Not specified.
PHONETIC_ENCODING_IPA
IPA, such as apple -> ˈæpəl. https://en.wikipedia.org/wiki/International_Phonetic_Alphabet
PHONETIC_ENCODING_X_SAMPA
X-SAMPA, such as apple -> "{ p@l" . https://en.wikipedia.org/wiki/X-SAMPA
PHONETIC_ENCODING_JAPANESE_YOMIGANA
For reading-to-pron conversion to work well, the pronunciation field should only contain Kanji, Hiragana, and Katakana.
The pronunciation can also contain pitch accents. The start of a pitch phrase is specified with ^ and the down-pitch position is specified with ! , for example:
phrase:端 pronunciation:^はし
phrase:箸 pronunciation:^は!し
phrase:橋 pronunciation:^はし!
We currently only support the Tokyo dialect, which allows at most one down-pitch per phrase (i.e. at most one ! between ^ ).
PHONETIC_ENCODING_PINYIN
Used to specify pronunciations for Mandarin words. See https://en.wikipedia.org/wiki/Pinyin .
For example: 朝阳, the pronunciation is "chao2 yang2". The number represents the tone, and there is a space between syllables. Neutral tones are represented by 5, for example 孩子 "hai2 zi5".
CustomPronunciations
A collection of pronunciation customizations.
Fields
pronunciations[]
CustomPronunciationParams
The pronunciation customizations are applied.
CustomVoiceParams
Description of the custom voice to be synthesized.
Fields
model
string
Required. The name of the AutoML model that synthesizes the custom voice.
reported_usage (deprecated)
ReportedUsage
This item is deprecated!
Optional. Deprecated. The usage of the synthesized audio to be reported.
ReportedUsage
Deprecated. The usage of the synthesized audio. Usage does not affect billing.
Enums
REPORTED_USAGE_UNSPECIFIED
Request with reported usage unspecified will be rejected.
REALTIME
For scenarios where the synthesized audio is not downloadable and can only be used once. For example, real-time request in IVR system.
OFFLINE
For scenarios where the synthesized audio is downloadable and can be reused. For example, the synthesized audio is downloaded, stored in customer service system and played repeatedly.
ListVoicesRequest
The top-level message sent by the client for the ListVoices method.
Fields
language_code
string
Optional. Recommended. BCP-47 language tag. If not specified, the API will return all supported voices. If specified, the ListVoices call will only return voices that can be used to synthesize this language_code. For example, if you specify "en-NZ" , all "en-NZ" voices will be returned. If you specify "no" , both "no-\*" (Norwegian) and "nb-\*" (Norwegian Bokmal) voices will be returned.
ListVoicesResponse
The message returned to the client by the ListVoices method.
Fields
voices[]
Voice
The list of voices.
MultiSpeakerMarkup
A collection of turns for multi-speaker synthesis.
Fields
turns[]
Turn
Required. Speaker turns.
Turn
A multi-speaker turn.
Fields
speaker
string
Required. The speaker of the turn, for example, 'O' or 'Q'. Please refer to documentation for available speakers.
text
string
Required. The text to speak.
MultiSpeakerVoiceConfig
Configuration for a multi-speaker text-to-speech setup. Enables the use of up to two distinct voices in a single synthesis request.
Fields
speaker_voice_configs[]
MultispeakerPrebuiltVoice
Required. A list of configurations for the voices of the speakers. Exactly two speaker voice configurations must be provided.
MultispeakerPrebuiltVoice
Configuration for a single speaker in a Gemini TTS multi-speaker setup. Enables dialogue between two speakers.
Fields
speaker_alias
string
Required. The speaker alias of the voice. This is the user-chosen speaker name that is used in the multispeaker text input, such as "Speaker1".
speaker_id
string
Required. The speaker ID of the voice. See https://cloud.google.com/text-to-speech/docs/gemini-tts#voice_options for available values.
SsmlVoiceGender
Gender of the voice as described in SSML voice element .
Enums
SSML_VOICE_GENDER_UNSPECIFIED
An unspecified gender. In VoiceSelectionParams, this means that the client doesn't care which gender the selected voice will have. In the Voice field of ListVoicesResponse, this may mean that the voice doesn't fit any of the other categories in this enum, or that the gender of the voice isn't known.
MALE
A male voice.
FEMALE
A female voice.
NEUTRAL
A gender-neutral voice. This voice is not yet supported.
StreamingAudioConfig
Description of the desired output audio data.
Fields
audio_encoding
AudioEncoding
Required. The format of the audio byte stream. Streaming supports PCM, ALAW, MULAW and OGG_OPUS. All other encodings return an error.
sample_rate_hertz
int32
Optional. The synthesis sample rate (in hertz) for this audio.
speaking_rate
double
Optional. Input only. Speaking rate/speed, in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values < 0.25 or > 2.0 will return an error.
StreamingSynthesisInput
Input to be synthesized.
Fields
Union field input_source .
input_source can be only one of the following:
text
string
The raw text to be synthesized. It is recommended that each input contains complete, terminating sentences, which results in better prosody in the output audio.
markup
string
Markup for HD voices specifically. This field may not be used with any other voices.
multi_speaker_markup
MultiSpeakerMarkup
Multi-speaker markup for Gemini TTS. This field may not be used with any other voices.
prompt
string
This is system instruction supported only for controllable voice models.
StreamingSynthesizeConfig
Provides configuration information for the StreamingSynthesize request.
Fields
voice
VoiceSelectionParams
Required. The desired voice of the synthesized audio.
streaming_audio_config
StreamingAudioConfig
Optional. The configuration of the synthesized audio.
custom_pronunciations
CustomPronunciations
Optional. The pronunciation customizations are applied to the input. If this is set, the input is synthesized using the given pronunciation customizations.
The initial support is for en-us, with plans to expand to other locales in the future. Instant Clone voices aren't supported.
In order to customize the pronunciation of a phrase, there must be an exact match of the phrase in the input types. If using SSML, the phrase must not be inside a phoneme tag.
StreamingSynthesizeRequest
Request message for the StreamingSynthesize method. Multiple StreamingSynthesizeRequest messages are sent in one call. The first message must contain a streaming_config that fully specifies the request configuration and must not contain input . All subsequent messages must only have input set.
Fields
Union field streaming_request . The request to be sent, either a StreamingSynthesizeConfig or StreamingSynthesisInput. streaming_request can be only one of the following:
streaming_config
StreamingSynthesizeConfig
StreamingSynthesizeConfig to be used in this streaming attempt. Only specified in the first message sent in a StreamingSynthesize call.
input
StreamingSynthesisInput
Input to synthesize. Specified in all messages but the first in a StreamingSynthesize call.
StreamingSynthesizeResponse
StreamingSynthesizeResponse is the only message returned to the client by StreamingSynthesize method. A series of zero or more StreamingSynthesizeResponse messages are streamed back to the client.
Fields
audio_content
bytes
The audio data bytes encoded as specified in the request. This is headerless LINEAR16 audio with a sample rate of 24000.
SynthesisInput
Contains text input to be synthesized. Either text or ssml must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT . The input size is limited to 5000 bytes.
Fields
custom_pronunciations
CustomPronunciations
Optional. The pronunciation customizations are applied to the input. If this is set, the input is synthesized using the given pronunciation customizations.
The initial support is for en-us, with plans to expand to other locales in the future. Instant Clone voices aren't supported.
In order to customize the pronunciation of a phrase, there must be an exact match of the phrase in the input types. If using SSML, the phrase must not be inside a phoneme tag.
Union field input_source . The input source, which is either plain text or SSML. input_source can be only one of the following:
text
string
The raw text to be synthesized.
markup
string
Markup for HD voices specifically. This field may not be used with any other voices.
ssml
string
The SSML document to be synthesized. The SSML document must be valid and well-formed. Otherwise the RPC will fail and return google.rpc.Code.INVALID_ARGUMENT . For more information, see SSML .
multi_speaker_markup
MultiSpeakerMarkup
The multi-speaker input to be synthesized. Only applicable for multi-speaker synthesis.
prompt
string
This system instruction is supported only for controllable/promptable voice models. If this system instruction is used, we pass the unedited text to Gemini-TTS. Otherwise, a default system instruction is used. AI Studio calls this system instruction, Style Instructions.
SynthesizeLongAudioMetadata
Metadata for response returned by the SynthesizeLongAudio method.
Fields
start_time
Timestamp
Time when the request was received.
last_update_time (deprecated)
Timestamp
This item is deprecated!
Deprecated. Do not use.
progress_percentage
double
The progress of the most recent processing update in percentage, ie. 70.0%.
SynthesizeLongAudioRequest
The top-level message sent by the client for the SynthesizeLongAudio method.
Fields
parent
string
The resource states of the request in the form of projects/*/locations/* .
input
SynthesisInput
Required. The Synthesizer requires either plain text or SSML as input.
audio_config
AudioConfig
Required. The configuration of the synthesized audio.
output_gcs_uri
string
Required. Specifies a Cloud Storage URI for the synthesis results. Must be specified in the format: gs://bucket_name/object_name , and the bucket must already exist.
voice
VoiceSelectionParams
Required. The desired voice of the synthesized audio.
SynthesizeLongAudioResponse
This type has no fields.
The message returned to the client by the SynthesizeLongAudio method.
SynthesizeSpeechRequest
The top-level message sent by the client for the SynthesizeSpeech method.
Fields
input
SynthesisInput
Required. The Synthesizer requires either plain text or SSML as input.
voice
VoiceSelectionParams
Required. The desired voice of the synthesized audio.
audio_config
AudioConfig
Required. The configuration of the synthesized audio.
advanced_voice_options
AdvancedVoiceOptions
Advanced voice options.
SynthesizeSpeechResponse
The message returned to the client by the SynthesizeSpeech method.
Fields
audio_content
bytes
The audio data bytes encoded as specified in the request, including the header for encodings that are wrapped in containers (e.g. MP3, OGG_OPUS). For LINEAR16 audio, we include the WAV header. Note: as with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
Voice
Description of a voice supported by the TTS service.
Fields
language_codes[]
string
The languages that this voice supports, expressed as BCP-47 language tags (e.g. "en-US", "es-419", "cmn-tw").
name
string
The name of this voice. Each distinct voice has a unique name.
ssml_gender
SsmlVoiceGender
The gender of this voice.
natural_sample_rate_hertz
int32
The natural sample rate (in hertz) for this voice.
VoiceCloneParams
The configuration of Voice Clone feature.
Fields
voice_cloning_key
string
Required. Created by GenerateVoiceCloningKey.
VoiceSelectionParams
Description of which voice to use for a synthesis request.
Fields
language_code
string
Required. The language (and potentially also the region) of the voice expressed as a BCP-47 language tag, e.g. "en-US". This should not include a script tag (e.g. use "cmn-cn" rather than "cmn-Hant-cn"), because the script will be inferred from the input provided in the SynthesisInput. The TTS service will use this parameter to help choose an appropriate voice. Note that the TTS service may choose a voice with a slightly different language code than the one selected; it may substitute a different region (e.g. using en-US rather than en-CA if there isn't a Canadian voice available), or even a different language, e.g. using "nb" (Norwegian Bokmal) instead of "no" (Norwegian)".
name
string
The name of the voice. If both the name and the gender are not set, the service will choose a voice based on the other parameters such as language_code.
ssml_gender
SsmlVoiceGender
The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement; if a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request.
custom_voice
CustomVoiceParams
The configuration for a custom voice. If [CustomVoiceParams.model] is set, the service will choose the custom voice matching the specified configuration.
voice_clone
VoiceCloneParams
Optional. The configuration for a voice clone. If [VoiceCloneParams.voice_clone_key] is set, the service chooses the voice clone matching the specified configuration.
model_name
string
Optional. The name of the model. If set, the service will choose the model matching the specified configuration.
multi_speaker_voice_config
MultiSpeakerVoiceConfig
Optional. The configuration for a Gemini multi-speaker text-to-speech setup. Enables the use of two distinct voices in a single synthesis request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-29 UTC."],[],[]]
