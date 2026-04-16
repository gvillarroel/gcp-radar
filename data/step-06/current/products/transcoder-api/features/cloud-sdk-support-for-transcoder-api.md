---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.651Z"
product_name: "Transcoder API"
product_slug: "transcoder-api"
feature_name: "Cloud SDK support for Transcoder API"
feature_slug: "cloud-sdk-support-for-transcoder-api"
latest_feature_date: "2020-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transcoder/docs/transcode-video"
  - "https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig"
  - "https://docs.cloud.google.com/transcoder/docs/concepts/overview"
  - "https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient"
keywords:
  - "sdk"
  - "for"
  - "transcoder"
  - "api"
  - "the"
  - "added"
  - "interacting"
  - "with"
---

# Cloud SDK support for Transcoder API

Product: Transcoder API
Coverage: MEDIUM

## Step 02 Summary

The Cloud SDK added support for interacting with the Transcoder API.

## Extended Definition

The Cloud SDK added support for interacting with the Transcoder API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video)
- [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig)
- [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview)
- [https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient)

## Supporting Pages

### "Quickstart: Transcode a video with the Transcoder API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video)
- Source ID: `site-api-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn how to grant roles . gcloud services enable transcoder.googleapis.com Create local authentication credentials for your user account: gcloud auth application-default login If an authentication error is returned, and you are using an external identity provider (IdP), confirm that you have signed in to the gcloud CLI with your federated identity .
- Learn how to grant roles . gcloud services enable transcoder.googleapis.com Create local authentication credentials for your user account: gcloud auth application-default login If an authentication error is returned, and you are using an external identity provider (IdP), confirm that you have signed in to the gcloud CLI with your federated identity .
- Show locations us-central1 us-west1 us-west2 us-east1 us-east4 southamerica-east1 northamerica-northeast1 asia-east1 asia-northeast1 asia-northeast3 asia-south1 asia-southeast1 australia-southeast1 europe-west1 europe-west2 europe-west4 me-west1 me-central1 me-central2 Run the following command: gcloud transcoder jobs describe JOB ID --location = LOCATION You should see a response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /jobs/ JOB ID ", "config": { "inputs": [ { "key": "input0", "uri": "gs:// STORAGE BUCKET NAME / STORAGE INPUT VIDEO " } ], "editList": [ { "key": "atom0", "inputs": [ "input0" ], "startTimeOffset": "0s" } ], "elementaryStreams": [ { "videoStream": { "h264": { "widthPixels": 640, "heightPixels": 360, "frameRate": 30, "bitrateBps": 550000, "pixelFormat": "yuv420p", "rateControlMode": "vbr", "crfLevel": 21, "gopDuration": "3s", "vbvSizeBits": 550000, "vbvFullnessBits": 495000, "entropyCoder": "cabac", "bFrameCount": 3, "aqStrength": 1, "profile": "high", "preset": "veryfast" } }, "key": "video-stream0" }, { "videoStream": { "h264": { "widthPixels": 1280, "heightPixels": 720, "frameRate": 30, "bitrateBps": 2500000, "pixelFormat": "yuv420p", "rateControlMode": "vbr", "crfLevel": 21, "gopDuration": "3s", "vbvSizeBits": 2500000, "vbvFullnessBits": 2250000, "entropyCoder": "cabac", "bFrameCount": 3, "aqStrength": 1, "profile": "high", "preset": "veryfast" } }, "key": "video-stream1" }, { "audioStream": { "codec": "aac", "bitrateBps": 64000, "channelCount": 2, "channelLayout": [ "fl", "fr" ], "sampleRateHertz": 48000 }, "key": "audio-stream0" } ], "muxStreams": [ { "key": "sd", "fileName": "sd.mp4", "container": "mp4", "elementaryStreams": [ "video-stream0", "audio-stream0" ] }, { "key": "hd", "fileName": "hd.mp4", "container": "mp4", "elementaryStreams": [ "video-stream1", "audio-stream0" ] }, { "key": "media-sd", "fileName": "media-sd.ts", "container": "ts", "elementaryStreams": [ "video-stream0", "audio-stream0" ] }, { "key": "media-hd", "fileName": "media-hd.ts", "container": "ts", "elementaryStreams": [ "video-stream1", "audio-stream0" ] }, { "key": "video-only-sd", "fileName": "video-only-sd.m4s", "container": "fmp4", "elementaryStreams": [ "video-stream0" ] }, { "key": "video-only-hd", "fileName": "video-only-hd.m4s", "container": "fmp4", "elementaryStreams": [ "video-stream1" ] }, { "key": "audio-only", "fileName": "audio-only.m4s", "container": "fmp4", "elementaryStreams": [ "audio-stream0" ] } ], "manifests": [ { "fileName": "manifest.m3u8", "type": "HLS", "muxStreams": [ "media-sd", "media-hd" ] }, { "fileName": "manifest.mpd", "type": "DASH", "muxStreams": [ "video-only-sd", "video-only-hd", "audio-only" ] } ], "output": { "uri": "gs:// STORAGE BUCKET NAME / STORAGE OUTPUT FOLDER /" } }, "state": "PENDING", "createTime": CREATE TIME , "ttlAfterCompletionDays": 30 } C# Before trying this sample, follow the C# setup instructions in the Transcoder API quickstart using client libraries .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://transcoder.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /jobs/ JOB ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /jobs/ JOB ID ", "config": { "inputs": [ { "key": "input0", "uri": "gs:// STORAGE BUCKET NAME / STORAGE INPUT VIDEO " } ], "editList": [ { "key": "atom0", "inputs": [ "input0" ], "startTimeOffset": "0s" } ], "elementaryStreams": [ { "videoStream": { "h264": { "widthPixels": 640, "heightPixels": 360, "frameRate": 30, "bitrateBps": 550000, "pixelFormat": "yuv420p", "rateControlMode": "vbr", "crfLevel": 21, "gopDuration": "3s", "vbvSizeBits": 550000, "vbvFullnessBits": 495000, "entropyCoder": "cabac", "bFrameCount": 3, "aqStrength": 1, "profile": "high", "preset": "veryfast" } }, "key": "video-stream0" }, { "videoStream": { "h264": { "widthPixels": 1280, "heightPixels": 720, "frameRate": 30, "bitrateBps": 2500000, "pixelFormat": "yuv420p", "rateControlMode": "vbr", "crfLevel": 21, "gopDuration": "3s", "vbvSizeBits": 2500000, "vbvFullnessBits": 2250000, "entropyCoder": "cabac", "bFrameCount": 3, "aqStrength": 1, "profile": "high", "preset": "veryfast" } }, "key": "video-stream1" }, { "audioStream": { "codec": "aac", "bitrateBps": 64000, "channelCount": 2, "channelLayout": [ "fl", "fr" ], "sampleRateHertz": 48000 }, "key": "audio-stream0" } ], "muxStreams": [ { "key": "sd", "fileName": "sd.mp4", "container": "mp4", "elementaryStreams": [ "video-stream0", "audio-stream0" ] }, { "key": "hd", "fileName": "hd.mp4", "container": "mp4", "elementaryStreams": [ "video-stream1", "audio-stream0" ] }, { "key": "media-sd", "fileName": "media-sd.ts", "container": "ts", "elementaryStreams": [ "video-stream0", "audio-stream0" ] }, { "key": "media-hd", "fileName": "media-hd.ts", "container": "ts", "elementaryStreams": [ "video-stream1", "audio-stream0" ] }, { "key": "video-only-sd", "fileName": "video-only-sd.m4s", "container": "fmp4", "elementaryStreams": [ "video-stream0" ] }, { "key": "video-only-hd", "fileName": "video-only-hd.m4s", "container": "fmp4", "elementaryStreams": [ "video-stream1" ] }, { "key": "audio-only", "fileName": "audio-only.m4s", "container": "fmp4", "elementaryStreams": [ "audio-stream0" ] } ], "manifests": [ { "fileName": "manifest.m3u8", "type": "HLS", "muxStreams": [ "media-sd", "media-hd" ] }, { "fileName": "manifest.mpd", "type": "DASH", "muxStreams": [ "video-only-sd", "video-only-hd", "audio-only" ] } ], "output": { "uri": "gs:// STORAGE BUCKET NAME / STORAGE OUTPUT FOLDER /" } }, "state": "PENDING", "createTime": CREATE TIME , "ttlAfterCompletionDays": 30 } gcloud Make the following replacements for the gcloud command: JOB ID : The ID of the job you created.

### JobConfig \_|\_ Transcoder API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig)
- Source ID: `site-api-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Not supported in MP4 files. mapping[] object ( TextMapping ) The mapping for the JobConfig.edit list atoms with text EditAtom.inputs . displayName string The name for this particular text stream that will be added to the HLS/DASH manifest.
- Supported channel names: fl - Front left channel fr - Front right channel sl - Side left channel sr - Side right channel fc - Front center channel lfe - Low frequency mapping[] object ( AudioMapping ) The mapping for the JobConfig.edit list atoms with audio EditAtom.inputs . sampleRateHertz integer The audio sample rate in Hertz.
- Individual segments also have an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as mux stream0000000123.ts . container string The container format.
- Note that certain values for this field may cause the transcoder to override other fields you set in the H264CodecSettings message. preset string Enforces the specified codec preset.

### Overview of the Transcoder API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terminology This section provides a glossary of useful terms for working with the Transcoder API.
- Job A job is the basic unit for managing work with the Transcoder API.
- Features The Transcoder API includes support for the following features: Output in different container formats , including MPEG-4 (MP4), Dynamic Adaptive Streaming over HTTP (DASH, also known as MPEG-DASH), and HTTP Live Streaming (HLS) Output at different bitrates and resolutions, including audio-only output Conversion to a high dynamic range (HDR) format Enhance the video output programmatically, including: Crop video dimensions Insert overlay images or animations Configure low-level encoding parameters, such as the bitrate Remix existing media content using comprehensive edit lists Set the job mode to low-latency interactive mode or batch mode Specify audio loudness normalization Configure encryption of your output video to support digital rights management and content protection Insert ad keyframes to allow video player clients to insert ads Create thumbnails from a generated spritesheet of video frames Create job templates to save and reuse custom or complex configurations for transcoding jobs For more information about the MP4 and MPEG-DASH standards, see The Moving Picture Experts Group website .
- Job limits Maximum input width 4096 px Maximum input height 4096 px Maximum output width 4096 px Maximum output height 2160 px Total output size 400 GB Maximum EditList duration 24 hours Maximum number of video streams 70 Maximum number of audio streams 50 Maximum number of text streams 50 Maximum number of mux streams 100 Maximum number of manifests 100 Maximum number of spritesheets 10 Concepts This section provides important concepts regarding video files and how they are used with the Transcoder API.

### "Class TranscoderServiceAsyncClient (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The name of the job template to delete. projects/{project}/locations/{location}/jobTemplates/{job template} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Format: projects/{project}/locations/{location}/jobTemplates/{job template} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Format: projects/{project}/locations/{location}/jobs/{job} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Format: projects/{project}/locations/{location}/jobs/{job} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

