---
title: "Enum AudioEncoding (2.89.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioEncoding
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioEncoding
  title: "Enum AudioEncoding (2.89.0) \_|\_ Java client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Enum AudioEncoding (2.89.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.89.0 (latest)
2.88.0
2.86.0
2.84.0
2.83.0
2.81.0
2.79.0
2.77.0
2.76.0
2.75.0
2.74.0
2.73.0
2.71.0
2.69.0
2.68.0
2.65.0
2.64.0
2.63.0
2.61.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.50.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.42.0
2.41.0
2.40.0
2.38.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.25.0
2.24.0
2.23.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.9
2.3.0
2.2.1
2.1.5
public enum AudioEncoding extends Enum<AudioEncoding> implements ProtocolMessageEnum
Configuration to set up audio encoder. The encoding determines the output
audio format that we'd like.
Protobuf enum google.cloud.texttospeech.v1.AudioEncoding
Implements
ProtocolMessageEnum
Inherited Members
Enum.<T>valueOf(Class<T>,String)
Enum.clone()
Enum.compareTo(E)
Enum.equals(Object)
Enum.finalize()
Enum.getDeclaringClass()
Enum.hashCode()
Enum.name()
Enum.ordinal()
Enum.toString()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Fields
Name
Description
ALAW
8-bit samples that compand 14-bit audio samples using G.711 PCMU/A-law.
Audio content returned as ALAW also contains a WAV header.
ALAW = 6;
ALAW_VALUE
8-bit samples that compand 14-bit audio samples using G.711 PCMU/A-law.
Audio content returned as ALAW also contains a WAV header.
ALAW = 6;
AUDIO_ENCODING_UNSPECIFIED
Not specified. Only used by GenerateVoiceCloningKey. Otherwise, will return
result
google.rpc.Code.INVALID_ARGUMENT .
AUDIO_ENCODING_UNSPECIFIED = 0;
AUDIO_ENCODING_UNSPECIFIED_VALUE
Not specified. Only used by GenerateVoiceCloningKey. Otherwise, will return
result
google.rpc.Code.INVALID_ARGUMENT .
AUDIO_ENCODING_UNSPECIFIED = 0;
LINEAR16
Uncompressed 16-bit signed little-endian samples (Linear PCM).
Audio content returned as LINEAR16 also contains a WAV header.
LINEAR16 = 1;
LINEAR16_VALUE
Uncompressed 16-bit signed little-endian samples (Linear PCM).
Audio content returned as LINEAR16 also contains a WAV header.
LINEAR16 = 1;
M4A
M4A audio.
M4A = 8;
M4A_VALUE
M4A audio.
M4A = 8;
MP3
MP3 audio at 32kbps.
MP3 = 2;
MP3_VALUE
MP3 audio at 32kbps.
MP3 = 2;
MULAW
8-bit samples that compand 14-bit audio samples using G.711 PCMU/mu-law.
Audio content returned as MULAW also contains a WAV header.
MULAW = 5;
MULAW_VALUE
8-bit samples that compand 14-bit audio samples using G.711 PCMU/mu-law.
Audio content returned as MULAW also contains a WAV header.
MULAW = 5;
OGG_OPUS
Opus encoded audio wrapped in an ogg container. The result is a
file which can be played natively on Android, and in browsers (at least
Chrome and Firefox). The quality of the encoding is considerably higher
than MP3 while using approximately the same bitrate.
OGG_OPUS = 3;
OGG_OPUS_VALUE
Opus encoded audio wrapped in an ogg container. The result is a
file which can be played natively on Android, and in browsers (at least
Chrome and Firefox). The quality of the encoding is considerably higher
than MP3 while using approximately the same bitrate.
OGG_OPUS = 3;
PCM
Uncompressed 16-bit signed little-endian samples (Linear PCM).
Note that as opposed to LINEAR16, audio won't be wrapped in a WAV (or
any other) header.
PCM = 7;
PCM_VALUE
Uncompressed 16-bit signed little-endian samples (Linear PCM).
Note that as opposed to LINEAR16, audio won't be wrapped in a WAV (or
any other) header.
PCM = 7;
UNRECOGNIZED
Static Methods
Name
Description
forNumber(int value)
getDescriptor()
internalGetValueMap()
valueOf(Descriptors.EnumValueDescriptor desc)
valueOf(int value)
Deprecated. Use #forNumber(int) instead.
valueOf(String name)
values()
Methods
Name
Description
getDescriptorForType()
getNumber()
getValueDescriptor()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
