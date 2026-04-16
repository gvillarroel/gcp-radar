---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.639Z"
product_name: "Transcoder API"
product_slug: "transcoder-api"
feature_name: "Transcoder v1 API"
feature_slug: "transcoder-v1-api"
latest_feature_date: "2021-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transcoder/docs/transcode-video"
  - "https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceClient"
  - "https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig"
keywords:
  - "transcoder"
  - "v1"
  - "api"
  - "the"
  - "is"
  - "new"
  - "stable"
  - "version"
---

# Transcoder v1 API

Product: Transcoder API
Coverage: MEDIUM

## Step 02 Summary

The Transcoder v1 API is the new stable API version introduced for Google Cloud Transcoder.

## Extended Definition

The Transcoder v1 API is the new stable API version introduced for Google Cloud Transcoder.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video)
- [https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceClient](https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceClient)
- [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig)

## Supporting Pages

### "Quickstart: Transcode a video with the Transcoder API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video)
- Source ID: `site-api-reference`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // projectId = 'my-project-id'; // location = 'us-central1'; // inputUri = 'gs://my-bucket/my-video-file'; // outputUri = 'gs://my-bucket/my-output-folder/'; // preset = 'preset/web-hd'; // Imports the Transcoder library const { TranscoderServiceClient } = require ( ' @google-cloud/video-transcoder ' ). v1 ; // Instantiates a client const transcoderServiceClient = new TranscoderServiceClient (); async function createJobFromPreset () { // Construct request const request = { parent : transcoderServiceClient . locationPath ( projectId , location ), job : { inputUri : inputUri , outputUri : outputUri , templateId : preset , }, }; // Run request const [ response ] = await transcoderServiceClient . createJob ( request ); console . log ( Job: ${ response . name } ); } createJobFromPreset (); PHP Before trying this sample, follow the PHP setup instructions in the Transcoder API quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // projectId = 'my-project-id'; // location = 'us-central1'; // jobId = 'my-job-id'; // Imports the Transcoder library const { TranscoderServiceClient } = require ( ' @google-cloud/video-transcoder ' ). v1 ; // Instantiates a client const transcoderServiceClient = new TranscoderServiceClient (); async function getJob () { // Construct request const request = { name : transcoderServiceClient . jobPath ( projectId , location , jobId ), }; const [ response ] = await transcoderServiceClient . getJob ( request ); console . log ( Job state: ${ response . state } ); } getJob (); PHP Before trying this sample, follow the PHP setup instructions in the Transcoder API quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // projectId = 'my-project-id'; // location = 'us-central1'; // jobId = 'my-job-id'; // Imports the Transcoder library const { TranscoderServiceClient } = require ( ' @google-cloud/video-transcoder ' ). v1 ; // Instantiates a client const transcoderServiceClient = new TranscoderServiceClient (); async function deleteJob () { // Construct request const request = { name : transcoderServiceClient . jobPath ( projectId , location , jobId ), }; await transcoderServiceClient . deleteJob ( request ); console . log ( 'Deleted job' ); } deleteJob (); PHP Before trying this sample, follow the PHP setup instructions in the Transcoder API quickstart using client libraries .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://transcoder.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /jobs/ JOB ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /jobs/ JOB ID ", "config": { "inputs": [ { "key": "input0", "uri": "gs:// STORAGE BUCKET NAME / STORAGE INPUT VIDEO " } ], "editList": [ { "key": "atom0", "inputs": [ "input0" ], "startTimeOffset": "0s" } ], "elementaryStreams": [ { "videoStream": { "h264": { "widthPixels": 640, "heightPixels": 360, "frameRate": 30, "bitrateBps": 550000, "pixelFormat": "yuv420p", "rateControlMode": "vbr", "crfLevel": 21, "gopDuration": "3s", "vbvSizeBits": 550000, "vbvFullnessBits": 495000, "entropyCoder": "cabac", "bFrameCount": 3, "aqStrength": 1, "profile": "high", "preset": "veryfast" } }, "key": "video-stream0" }, { "videoStream": { "h264": { "widthPixels": 1280, "heightPixels": 720, "frameRate": 30, "bitrateBps": 2500000, "pixelFormat": "yuv420p", "rateControlMode": "vbr", "crfLevel": 21, "gopDuration": "3s", "vbvSizeBits": 2500000, "vbvFullnessBits": 2250000, "entropyCoder": "cabac", "bFrameCount": 3, "aqStrength": 1, "profile": "high", "preset": "veryfast" } }, "key": "video-stream1" }, { "audioStream": { "codec": "aac", "bitrateBps": 64000, "channelCount": 2, "channelLayout": [ "fl", "fr" ], "sampleRateHertz": 48000 }, "key": "audio-stream0" } ], "muxStreams": [ { "key": "sd", "fileName": "sd.mp4", "container": "mp4", "elementaryStreams": [ "video-stream0", "audio-stream0" ] }, { "key": "hd", "fileName": "hd.mp4", "container": "mp4", "elementaryStreams": [ "video-stream1", "audio-stream0" ] }, { "key": "media-sd", "fileName": "media-sd.ts", "container": "ts", "elementaryStreams": [ "video-stream0", "audio-stream0" ] }, { "key": "media-hd", "fileName": "media-hd.ts", "container": "ts", "elementaryStreams": [ "video-stream1", "audio-stream0" ] }, { "key": "video-only-sd", "fileName": "video-only-sd.m4s", "container": "fmp4", "elementaryStreams": [ "video-stream0" ] }, { "key": "video-only-hd", "fileName": "video-only-hd.m4s", "container": "fmp4", "elementaryStreams": [ "video-stream1" ] }, { "key": "audio-only", "fileName": "audio-only.m4s", "container": "fmp4", "elementaryStreams": [ "audio-stream0" ] } ], "manifests": [ { "fileName": "manifest.m3u8", "type": "HLS", "muxStreams": [ "media-sd", "media-hd" ] }, { "fileName": "manifest.mpd", "type": "DASH", "muxStreams": [ "video-only-sd", "video-only-hd", "audio-only" ] } ], "output": { "uri": "gs:// STORAGE BUCKET NAME / STORAGE OUTPUT FOLDER /" } }, "state": "PENDING", "createTime": CREATE TIME , "ttlAfterCompletionDays": 30 } gcloud Make the following replacements for the gcloud command: JOB ID : The ID of the job you created.

### "Class TranscoderServiceAsyncClient (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import transcoder v1 async def sample create job template(): Create a client client = transcoder v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import transcoder v1 async def sample delete job template(): Create a client client = transcoder v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import transcoder v1 async def sample list job templates(): Create a client client = transcoder v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import transcoder v1 async def sample get job template(): Create a client client = transcoder v1 .

### "Class TranscoderServiceClient (1.20.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceClient](https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceClient)
- Source ID: `site-python-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import transcoder v1 def sample create job template(): Create a client client = transcoder v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import transcoder v1 def sample delete job template(): Create a client client = transcoder v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import transcoder v1 def sample list job templates(): Create a client client = transcoder v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import transcoder v1 def sample get job template(): Create a client client = transcoder v1 .

### JobConfig \_|\_ Transcoder API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig)
- Source ID: `site-api-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "widthPixels" : integer , "heightPixels" : integer , "frameRate" : number , "frameRateConversionStrategy" : enum ( FrameRateConversionStrategy ) , "bitrateBps" : integer , "pixelFormat" : string , "rateControlMode" : string , "crfLevel" : integer , "allowOpenGop" : boolean , "enableTwoPass" : boolean , "vbvSizeBits" : integer , "vbvFullnessBits" : integer , "bPyramid" : boolean , "bFrameCount" : integer , "aqStrength" : number , "profile" : string , "tune" : string , "preset" : string , // Union field gop mode can be only one of the following: "gopFrameCount" : integer , "gopDuration" : string // End of list of possible types for union field gop mode . // Union field color format can be only one of the following: "sdr" : { object ( H265ColorFormatSDR ) } , "hlg" : { object ( H265ColorFormatHLG ) } , "hdr10" : { object ( H265ColorFormatHDR10 ) } // End of list of possible types for union field color format . } Fields widthPixels integer The width of the video in pixels.
- JSON representation { "widthPixels" : integer , "heightPixels" : integer , "frameRate" : number , "frameRateConversionStrategy" : enum ( FrameRateConversionStrategy ) , "bitrateBps" : integer , "pixelFormat" : string , "rateControlMode" : string , "crfLevel" : integer , "allowOpenGop" : boolean , "enableTwoPass" : boolean , "vbvSizeBits" : integer , "vbvFullnessBits" : integer , "entropyCoder" : string , "bPyramid" : boolean , "bFrameCount" : integer , "aqStrength" : number , "profile" : string , "tune" : string , "preset" : string , // Union field gop mode can be only one of the following: "gopFrameCount" : integer , "gopDuration" : string // End of list of possible types for union field gop mode . // Union field color format can be only one of the following: "sdr" : { object ( H264ColorFormatSDR ) } , "hlg" : { object ( H264ColorFormatHLG ) } // End of list of possible types for union field color format . } Fields widthPixels integer The width of the video in pixels.
- JSON representation { "widthPixels" : integer , "heightPixels" : integer , "frameRate" : number , "frameRateConversionStrategy" : enum ( FrameRateConversionStrategy ) , "bitrateBps" : integer , "pixelFormat" : string , "rateControlMode" : string , "crfLevel" : integer , "profile" : string , // Union field gop mode can be only one of the following: "gopFrameCount" : integer , "gopDuration" : string // End of list of possible types for union field gop mode . // Union field color format can be only one of the following: "sdr" : { object ( Vp9ColorFormatSDR ) } , "hlg" : { object ( Vp9ColorFormatHLG ) } // End of list of possible types for union field color format . } Fields widthPixels integer The width of the video in pixels.
- Enter a value between -24 and 0 (the default), where: -24 is the Advanced Television Systems Committee (ATSC A/85) standard -23 is the EU R128 broadcast standard -19 is the prior standard for online mono audio -18 is the ReplayGain standard -16 is the prior standard for stereo audio -14 is the new online audio standard recommended by Spotify, as well as Amazon Echo 0 disables normalization highBoost boolean Enable boosting high frequency components.

