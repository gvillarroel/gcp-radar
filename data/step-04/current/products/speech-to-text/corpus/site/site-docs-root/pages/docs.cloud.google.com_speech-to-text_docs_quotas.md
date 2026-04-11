---
title: "Quotas and limits \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/quotas
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/quotas
  title: "Quotas and limits \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Speech-to-Text
Send feedback
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
This document contains the current API restrictions and usage limits for
Cloud Speech-to-Text. This page will be updated to reflect any changes to these
restrictions and usage limits. We reserve the right to change these limits.
You can request a quota
increase if
necessary. See the Google Cloud quota page for more
information on viewing and managing your quota.
After submitting your request, Google might contact you for more information,
and inform you whether your request is approved or denied.
Note: The time limits listed below refer to the length of the audio file,
regardless of whether it is multichannel audio. Be
aware, however, that each channel is billed individually. This can lead to
situations where you are billed for more time than than the duration of the
audio file. See the pricing page for more information.
Content limits
Synchronous requests
Synchronous recognition requests (using the Recognize method) accept audio data either inline in the
content field of the request or as a
Cloud Storage URI in the uri field of the request. Audio sent to a synchronous
request is limited to 10 MB or 1 minute of audio duration (whichever is reached
first). For more information on synchronous recognition, see the synchronous
recognition overview .
Streaming requests
Streaming recognition requests (using the StreamingRecognize method) only accept inline audio in the
audio field of the request. Each request
in the stream is limited to 25 KB of audio. A stream can remain open for up to 5
minutes, and the audio must be sent at a rate that approximates real time. If
you need to stream content for longer than 5 minutes, see the endless streaming
tutorial . For more information on streaming
recognition, see the streaming recognition overview .
Batch requests
Batch recognition requests (using the BatchRecognize method) only accept audio as a Cloud Storage
URI in the uri field
of the request. Each BatchRecognizeRequest
can contain up to 15 files to transcribe.
Each file can be up to 8 hours in duration. For more information on asynchronous
recognition, see the batch recognition overview .
Multiple language recognition
Multiple language recognition is only available in the global, US, and EU
Cloud Speech-to-Text endpoints.
Adaptation
Within any request, you may also supply PhraseSet and CustomClass resources. The following limits apply to these
resources:
Speech Adaptation Limit
Value
Maximum allowable phrase boost value
20
Phrases in a PhraseSet
1,200
Phrases per request
5,000
Characters per phrase
100
Total characters per request
100,000
Maximum number of items in a CustomClass
500
Maximum characters per CustomClass item
500
Maximum number of PhraseSets per SpeechAdaptation
20
Maximum number of CustomClasses per SpeechAdaptation
20
Resource limits
The current API resource limits for Cloud Speech-to-Text are as follows (and are
subject to change):
Type of Limit
Usage Limit
Number of recognizers (per region)
5,000
Number of custom classes (per region)
5,000
Number of phrase sets (per region)
5,000
Request limits
The current API usage limits for Cloud Speech-to-Text are as follows (and are subject
to change):
Type of Limit
Usage Limit
Resource requests per 60 seconds (per region)
100
Operation requests per 60 seconds (per region)
150
Synchronous recognition requests per 60 seconds (per region)
300
Streaming recognition requests per 60 seconds (per region) *
1,000,000
Concurrent StreamingRecognize sessions (per region) *
300
Batch recognition requests per 60 seconds (per region)
150
* Streaming recognition has a quota limit of 300 concurrent sessions per 5
minutes and a limit of 3,000 requests per minute, which applies to all
concurrent sessions together. The initial configuration request for a session
does not count against the request quota.
These limits apply to each Cloud Speech-to-Text developer project, and are shared
across all applications and IP addresses using a given a developer project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
