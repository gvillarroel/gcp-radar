---
title: "Package types (2.38.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/speech/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.types
  title: "Package types (2.38.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Package types (2.38.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.38.0 (latest)
2.37.0
2.36.1
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.1
2.27.0
2.26.1
2.25.1
2.24.1
2.23.0
2.22.0
2.21.1
2.20.1
2.19.0
2.18.0
2.17.3
2.16.2
2.15.1
2.14.1
2.13.1
2.12.0
2.11.1
2.10.0
2.9.3
2.8.0
2.7.0
2.6.0
2.5.1
2.4.1
2.3.0
2.2.1
2.1.0
2.0.1
1.3.4
1.2.0
1.1.0
API documentation for speech_v1.types package.
Classes
CreateCustomClassRequest
Message sent by the client for the CreateCustomClass method.
CreatePhraseSetRequest
Message sent by the client for the CreatePhraseSet method.
CustomClass
A set of words or phrases that represents a common concept
likely to appear in your audio, for example a list of passenger
ship names. CustomClass items can be substituted into
placeholders that you set in PhraseSet phrases.
DeleteCustomClassRequest
Message sent by the client for the DeleteCustomClass method.
DeletePhraseSetRequest
Message sent by the client for the DeletePhraseSet method.
GetCustomClassRequest
Message sent by the client for the GetCustomClass method.
GetPhraseSetRequest
Message sent by the client for the GetPhraseSet method.
ListCustomClassesRequest
Message sent by the client for the ListCustomClasses method.
ListCustomClassesResponse
Message returned to the client by the ListCustomClasses method.
ListPhraseSetRequest
Message sent by the client for the ListPhraseSet method.
ListPhraseSetResponse
Message returned to the client by the ListPhraseSet method.
LongRunningRecognizeMetadata
Describes the progress of a long-running LongRunningRecognize
call. It is included in the metadata field of the Operation
returned by the GetOperation call of the
google::longrunning::Operations service.
LongRunningRecognizeRequest
The top-level message sent by the client for the
LongRunningRecognize method.
LongRunningRecognizeResponse
The only message returned to the client by the
LongRunningRecognize method. It contains the result as zero or
more sequential SpeechRecognitionResult messages. It is included
in the result.response field of the Operation returned by
the GetOperation call of the google::longrunning::Operations
service.
PhraseSet
Provides "hints" to the speech recognizer to favor specific
words and phrases in the results.
RecognitionAudio
Contains audio data in the encoding specified in the
RecognitionConfig . Either content or uri must be
supplied. Supplying both or neither returns
google.rpc.Code.INVALID_ARGUMENT][google.rpc.Code.INVALID_ARGUMENT] .
See content
limits <https://cloud.google.com/speech-to-text/quotas#content> __.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
RecognitionConfig
Provides information to the recognizer that specifies how to
process the request.
RecognitionMetadata
Description of audio data to be recognized.
RecognizeRequest
The top-level message sent by the client for the Recognize
method.
RecognizeResponse
The only message returned to the client by the Recognize method.
It contains the result as zero or more sequential
SpeechRecognitionResult messages.
SpeakerDiarizationConfig
Config to enable speaker diarization.
SpeechAdaptation
Speech adaptation configuration.
SpeechAdaptationInfo
Information on speech adaptation use in results
SpeechContext
Provides "hints" to the speech recognizer to favor specific
words and phrases in the results.
SpeechRecognitionAlternative
Alternative hypotheses (a.k.a. n-best list).
SpeechRecognitionResult
A speech recognition result corresponding to a portion of the
audio.
StreamingRecognitionConfig
Provides information to the recognizer that specifies how to
process the request.
StreamingRecognitionResult
A streaming speech recognition result corresponding to a
portion of the audio that is currently being processed.
StreamingRecognizeRequest
The top-level message sent by the client for the
StreamingRecognize method. Multiple
StreamingRecognizeRequest messages are sent. The first message
must contain a streaming_config message and must not contain
audio_content . All subsequent messages must contain
audio_content and must not contain a streaming_config
message.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
StreamingRecognizeResponse
StreamingRecognizeResponse is the only message returned to the
client by StreamingRecognize . A series of zero or more
StreamingRecognizeResponse messages are streamed back to the
client. If there is no recognizable audio, and single_utterance
is set to false, then no messages are streamed back to the client.
Here's an example of a series of StreamingRecognizeResponse \ s
that might be returned while processing audio:
results { alternatives { transcript: "tube" } stability: 0.01 }
results { alternatives { transcript: "to be a" } stability: 0.01
}
results { alternatives { transcript: "to be" } stability: 0.9 }
results { alternatives { transcript: " or not to be" } stability:
0.01 }
results { alternatives { transcript: "to be or not to be"
confidence: 0.92 } alternatives { transcript: "to bee or not to
bee" } is_final: true }
results { alternatives { transcript: " that's" } stability: 0.01
}
results { alternatives { transcript: " that is" } stability: 0.9
} results { alternatives { transcript: " the question" }
stability: 0.01 }
results { alternatives { transcript: " that is the question"
confidence: 0.98 } alternatives { transcript: " that was the
question" } is_final: true }
Notes:
Only two of the above responses #4 and #7 contain final results;
they are indicated by is_final: true . Concatenating these
together generates the full transcript: "to be or not to be that
is the question".
The others contain interim results . #3 and #6 contain two
interim results : the first portion has a high stability and is
less likely to change; the second portion has a low stability and
is very likely to change. A UI designer might choose to show only
high stability results .
The specific stability and confidence values shown above
are only for illustrative purposes. Actual values may vary.
In each response, only one of these fields will be set: error ,
speech_event_type , or one or more (repeated) results .
TranscriptNormalization
Transcription normalization configuration. Use transcription
normalization to automatically replace parts of the transcript
with phrases of your choosing. For StreamingRecognize, this
normalization only applies to stable partial transcripts
(stability > 0.8) and final transcripts.
TranscriptOutputConfig
Specifies an optional destination for the recognition
results.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
UpdateCustomClassRequest
Message sent by the client for the UpdateCustomClass method.
UpdatePhraseSetRequest
Message sent by the client for the UpdatePhraseSet method.
WordInfo
Word-specific information for recognized words.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
