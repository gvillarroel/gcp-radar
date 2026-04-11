---
title: "Class AudioMapping (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.types.AudioStream.AudioMapping
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/transcoder/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.types.AudioStream.AudioMapping
  title: "Class AudioMapping (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class AudioMapping (1.20.0)
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
AudioMapping ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The mapping for the
JobConfig.edit_list
atoms with audio
EditAtom.inputs .
Attributes
Name
Description
atom_key
str
Required. The
EditAtom.key
that references the atom with audio inputs in the
JobConfig.edit_list .
input_key
str
Required. The
Input.key that
identifies the input file.
input_track
int
Required. The zero-based index of the track
in the input file.
input_channel
int
Required. The zero-based index of the channel
in the input audio stream.
output_channel
int
Required. The zero-based index of the channel
in the output audio stream.
gain_db
float
Audio volume control in dB. Negative values
decrease volume, positive values increase. The
default is 0.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
