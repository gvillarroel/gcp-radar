---
title: "Extended streaming \_|\_ Agent Assist \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-assist/docs/extended-streaming
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/agent-assist/docs
source_metadata:
  url: https://docs.cloud.google.com/agent-assist/docs/extended-streaming
  title: "Extended streaming \_|\_ Agent Assist \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Agent Assist
Guides
Send feedback
Extended streaming
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can use the extended streaming feature to stream audio content to Dialogflow and stream human agent suggestions back. To use this feature, you must configure a Speech-to-Text model that supports single utterance .
Normally, you half-close or tell the Dialogflow API when to end the stream to generate the final transcript and Agent Assist suggestions. This happens at conversation turns, where the API receives the parameter is_final=true from the recognition result, StreamingAnalyzeContentResponse.recognition_result .
Extended streaming reduces the need for half-closing at conversation turns. It extends the connection timeout to three minutes, during which you can send audio streams without half-closing. The Dialogflow API automatically sends the final transcripts and Agent Assist suggestions back to the stream. You only restart the stream if it times out.
Note: Streaming is supported by the RPC API and client libraries only.
Streaming basics
The Agent Assist extended streaming feature is similar to audio
streaming for voice transcription. Your system
streams audio data to the API, and Dialogflow streams back
StreamingAnalyzeContentResponse data. The returned data includes suggestions
for your human agents.
Note: Streaming automatically times out after three minutes. If your
conversation lasts longer than three minutes, you can handle the timeout by
closing and re-opening the stream.
To use Extended Streaming, call the
streamingAnalyzeContent
method.
Extended Streaming only supports Agent Assist stage. See conversation
stage . To use this feature:
Call the streamingAnalyzeContent method and set the following fields:
StreamingAnalyzeContentRequest.audio_config.audio_encoding :
AUDIO_ENCODING_LINEAR_16 or AUDIO_ENCODING_MULAW
enable_extended_streaming : true .
The first streamingAnalyzeContent request prepares the stream and sets
your audio configuration.
In subsequent requests, you send audio bytes to the stream.
As long as you continue to send audio, you will keep receiving suggestions.
You don't need to manually close the stream. It will close automatically
once Agent Assist detects that utterances have stopped.
Restart the stream (which includes resending the initial audio
configuration) in the following cases:
The stream is broken (the stream stopped when it wasn't supposed to).
Your audio data is approaching the automatic timeout at 3 minutes.
You received a re-tryable error. You can retry up to three times.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
