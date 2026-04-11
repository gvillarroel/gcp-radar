---
title: "Transcoder API release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/transcoder/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/transcoder/docs
source_metadata:
  url: https://docs.cloud.google.com/transcoder/docs/release-notes
  title: "Transcoder API release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Transcoder API
Resources
Send feedback
Transcoder API release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to the Transcoder API. Check this page
for announcements about new or updated features, bug fixes, known issues, and
deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
August 21, 2025
v1
Feature
You can automatically generate subtitle from your input video. For more information, see Configure automatically generated subtitles .
v1
Feature
You can process videos with significant number of missing frame by using the fill_content_gaps field. For more information, see troubleshooting guide
May 22, 2025
v1
Feature
Standalone VTT outputs are now supported .
February 04, 2025
v1
Feature
Standalone MP3 audio-only outputs are now supported .
October 07, 2024
v1
Feature
Standalone OGG Vorbis audio-only outputs are now supported .
February 23, 2024
v1
Feature
You can now set an exact frame rate on the output video. For more information, see Frame rate conversion strategies .
February 05, 2024
v1
Feature
You can now convert the input video in a transcoding job to a supported high dynamic range (HDR) format .
July 10, 2023
v1
Feature
Content encryption (DRM) is now supported.
v1
Feature
Job processing optimizations can now be disabled.
v1
Feature
You can now set the priority of individual jobs in batch mode.
April 06, 2023
v1
Feature
Overlays can now be created using PNG images (with or without transparency).
April 03, 2023
v1
Feature
Batch mode is now supported. You can use it to create thousands of jobs that will be processed on a first in, first out basis.
March 02, 2023
v1
Feature
You can now set the language code and display name for text and audio streams.
February 15, 2023
v1
Change
Validation checks added for segmentDuration and gopDuration for all video codecs as outlined in the documentation. This change was released earlier this month.
November 17, 2022
v1
Fixed
The output color space of transcoded videos matches the input color space.
August 25, 2022
v1
Feature
Deinterlace configurations are now supported.
August 23, 2022
v1
Feature
Audio-only outputs are now supported. For more information, see the Pricing page and the sample configuration .
v1
Feature
Labels are now supported. Labels are key-value pairs you can use to organize resources .
March 01, 2022
v1
Issue
The following preprocessing configurations are not supported: Color , Denoise , Deblock , and Boost .
February 01, 2022
v1
Breaking
The v1beta1 API is no longer available. As previously announced , the v1beta1 API was deprecated in July 2021.
v1
Issue
VP9 codec settings do not support a rateControlMode set to crf (constant rate factor).
v1
Feature
Added v1 gcloud commands .
v1
Feature
Added a guide on how to concatenate multiple input videos into a single output video.
v1
Feature
Added a guide on how to include captions and subtitles in an output video .
November 01, 2021
v1
Feature
Added PHP code samples .
September 30, 2021
v1
Announcement
Transcoder API is GA : The Transcoder API has graduated out of beta and has reached v1. All API endpoints are updated to use https://transcoder.googleapis.com/v1/ .
v1
Feature
Added Troubleshooting guide.
v1
Feature
Added guidance on job limits .
August 31, 2021
v1
Feature
All client library code samples updated to v1 of the API.
v1
Issue
Encryption support (and its associated documentation) is temporarily unavailable.
v1
Change
Delete operations for jobs and job templates now return a 404 resource not found error if the specified resource name does not exist. Previously, these delete operations failed silently in this case. To enable the previous behavior, set the allowMissing query parameter to true when sending a request to delete a job or job template .
August 02, 2021
v1
Change
Added new quotas in order to group requests into 3 buckets: mutation, get, and list. More information can be found at Quotas and limits .
July 13, 2021
v1 & v1beta1
Feature
Transcoder v1 API is now available. See the migration guide for information on how to update your job templates to the new version.
v1 & v1beta1
Deprecated
The Transcoder v1beta1 API is deprecated and will be turned down. It is replaced by the Transcoder v1 API.
v1 & v1beta1
Issue
The API outputs CEA-608 captions instead of CEA-708.
March 31, 2021
v1beta1
Feature
Beta stage support for VPC Service Controls .
February 26, 2021
v1beta1
Feature
Sprite sheets now preserve the source aspect ratio. Set the sprite width or height field, but not both (the API will automatically calculate the missing field).
v1beta1
Feature
Sprite sheets now support different image compression levels with the new quality
setting.
v1beta1
Feature
The API now supports video padding with black.
November 16, 2020
v1beta1
Feature
The Transcoder API supports overlays .
v1beta1
Feature
The Transcoder API preserves the aspect ratio of the source video.
v1beta1
Feature
Added Shaka player compatibility for Dash and HLS CEA608/CEA708. Shaka player version 3.0 is used for validation testing.
v1beta1
Feature
Content encryption is supported for the following containers:
Type
Technology
Format
Video Codecs
Audio Codecs
H.264
H.265
AAC
DRM
FairPlay
HLS
TS (SAMPLE-AES)
fMP4 (SAMPLE-AES)
TS (SAMPLE-AES)
fMP4 (SAMPLE-AES)
fMP4 (SAMPLE-AES)
DRM
Widevine, PlayReady
DASH
fMP4 (MPEG-CENC)
fMP4 (MPEG-CENC)
DRM
Widevine, PlayReady
HLS
fMP4 (MPEG-CENC)
fMP4 (MPEG-CENC)
Content protection
AES-128
HLS, DASH
fMP4, TS (AES-128)
fMP4, TS (AES-128)
fMP4, TS (AES-128)
v1beta1
Fixed
Improved performance for short input files.
v1beta1
Feature
Client libraries released.
v1beta1
Feature
The Transcoder API supports cropping .
v1beta1
Feature
The Cloud SDK now supports the Transcoder API.
July 22, 2020
The Transcoder API provides output
Feature
video using the VP9 codec.
The Transcoder API provides output
Feature
subtitles using the WebVTT container.
The Transcoder API supports the following encryption standards for audio and video outputs:
Feature
AES-128 and SAMPLE-AES for TS
MPEG Common Encryption (MPEG-CENC) for fmp4
June 12, 2020
The Transcoder API provides output
Feature
video using the H.265 codec.
The cumulative size of input files was limited to
Fixed
150 GB per job. This size has been increased to 400 GB per job.
April 15, 2020
Private beta release: The
Feature
Transcoder API converts video files into formats suitable for
consumer distribution.
The Transcoder API provides output
Feature
video using the H.264 codec.
The Transcoder API supports the
Feature
following audio coding standards for audio output:
Dolby Digital audio codec (AC-3)
Dolby Digital plus, also known as enhanced AC-3 (E-AC-3)
Advanced audio coding high-efficiency (AAC-HE)
Advanced audio coding low-complexity (AAC-LC)
The Transcoder API supports the
Feature
following output container formats:
MPEG-4 (MP4)
Dynamic adaptive streaming over HTTP (DASH, also known as MPEG-DASH),
comprising of a manifest and fMP4 files
HTTP Live Streaming (HLS), comprising of manifests and media files
MPEG transport stream
The Transcoder API supports the
Feature
following additional advanced capabilities:
Reusable job templates for managing job configurations
Caption mapping
Edit lists
Manifest naming and stream control
Priority queues
Ad-break and SCTE-35 insertion in streams and manifests
Flexible multiplexing and reusable elementary streams
Customizable H.264 codec parameters
Audio normalization during preprocessing
Sprite sheet generation, for previews and thumbnails
Pub/Sub notifications
The cumulative size of input files is limited to
Issue
150 GB per job.
VPC Service Controls is not supported. If your
Issue
Google Cloud project uses VPC Service Controls, you can't set up a service
perimeter around the Transcoder API.
The default preset/web-hd preset
Issue
assumes every input file has at least one audio and one video track. If the
input doesn't include either audio or video, the job fails.
Output is limited to a maximum frame rate of
Issue
120 fps and resolution of 3840 x 2160.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
