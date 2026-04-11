---
title: "Package types (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/transcoder/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.types
  title: "Package types (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Package types (1.20.0)
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
API documentation for video.transcoder_v1.types package.
Classes
AdBreak
Ad break.
AudioStream
Audio stream resource.
CreateJobRequest
Request message for TranscoderService.CreateJob .
CreateJobTemplateRequest
Request message for TranscoderService.CreateJobTemplate .
DeleteJobRequest
Request message for TranscoderService.DeleteJob .
DeleteJobTemplateRequest
Request message for TranscoderService.DeleteJobTemplate .
EditAtom
Edit atom.
ElementaryStream
Encoding of an input file such as an audio, video, or text
track. Elementary streams must be packaged before
mapping and sharing between different output formats.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Encryption
Encryption settings.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
GetJobRequest
Request message for TranscoderService.GetJob .
GetJobTemplateRequest
Request message for TranscoderService.GetJobTemplate .
Input
Input asset.
InputAttributes
Input attributes that provide additional information about
the input asset.
Job
Transcoding job resource.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
JobConfig
Job configuration
JobTemplate
Transcoding job template resource.
ListJobTemplatesRequest
Request message for TranscoderService.ListJobTemplates .
ListJobTemplatesResponse
Response message for TranscoderService.ListJobTemplates .
ListJobsRequest
Request message for TranscoderService.ListJobs . The parent
location from which to retrieve the collection of jobs.
ListJobsResponse
Response message for TranscoderService.ListJobs .
Manifest
Manifest configuration.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
MuxStream
Multiplexing settings for output stream.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Output
Location of output file(s) in a Cloud Storage bucket.
Overlay
Overlay configuration.
PreprocessingConfig
Preprocessing configurations.
PubsubDestination
A Pub/Sub destination.
SegmentSettings
Segment settings for ts , fmp4 and vtt .
SpriteSheet
Sprite sheet configuration.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
TextStream
Encoding of a text stream. For example, closed captions or
subtitles.
TrackDefinition
Track definition for the input asset.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
VideoStream
Video stream resource.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
