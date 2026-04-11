---
title: "Class AudioStream (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.types.AudioStream
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/transcoder/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.types.AudioStream
  title: "Class AudioStream (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class AudioStream (1.20.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.20.0 (latest)
1.19.0
1.18.0
1.17.0
1.16.0
1.15.2
1.14.0
1.13.1
1.12.5
1.11.0
1.10.1
1.9.1
1.8.2
1.7.0
1.6.1
1.5.0
1.4.3
1.3.2
1.2.1
1.1.0
1.0.1
0.5.1
0.4.1
0.3.1
0.2.1
0.1.0
AudioStream ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Audio stream resource.
Attributes
Name
Description
codec
str
The codec for this audio stream. The default is aac .
Supported audio codecs:
- aac
- aac-he
- aac-he-v2
- mp3
- ac3
- eac3
- vorbis
bitrate_bps
int
Required. Audio bitrate in bits per second.
Must be between 1 and 10,000,000.
channel_count
int
Number of audio channels. Must be between 1
and 6. The default is 2.
channel_layout
MutableSequence[str]
A list of channel names specifying layout of the audio
channels. This only affects the metadata embedded in the
container headers, if supported by the specified format. The
default is ["fl", "fr"] .
Supported channel names:
- fl - Front left channel
- fr - Front right channel
- sl - Side left channel
- sr - Side right channel
- fc - Front center channel
- lfe - Low frequency
mapping_
MutableSequence[ google.cloud.video.transcoder_v1.types.AudioStream.AudioMapping ]
The mapping for the
JobConfig.edit_list
atoms with audio
EditAtom.inputs .
sample_rate_hertz
int
The audio sample rate in Hertz. The default
is 48000 Hertz.
language_code
str
The BCP-47 language code, such as en-US or sr-Latn .
For more information, see
https://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
Not supported in MP4 files.
display_name
str
The name for this particular audio stream
that will be added to the HLS/DASH manifest. Not
supported in MP4 files.
Classes
AudioMapping
AudioMapping ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The mapping for the
JobConfig.edit_list
atoms with audio
EditAtom.inputs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
