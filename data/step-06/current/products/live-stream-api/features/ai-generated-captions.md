---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.903Z"
product_name: "Live Stream API"
product_slug: "live-stream-api"
feature_name: "AI-generated captions"
feature_slug: "ai-generated-captions"
latest_feature_date: "2025-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations"
  - "https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient"
  - "https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls"
keywords:
  - "ai"
  - "generated"
  - "captions"
  - "generates"
  - "automatically"
  - "for"
  - "live"
  - "stream"
---

# AI-generated captions

Product: Live Stream API
Coverage: MEDIUM

## Step 02 Summary

Generates captions automatically for a live stream using AI.

## Extended Definition

Generates captions automatically for a live stream using AI.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)
- [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient)
- [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls)

## Supporting Pages

### "Configure automatic captions and translations \_|\_ Live Stream API \_|\_\

- URL: [https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)
- Source ID: `site-iam-reference`
- Final score: 315
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify the translation in the output manifest Run the following command to see the contents of the generated HLS manifest: gcloud storage cat gs:// BUCKET NAME /main.m3u8 The AI-generated webvtt English and Spanish captions show up in the output manifest similar to the following: #EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="sub",LANGUAGE="en-US",NAME="English (AI captioned)",AUTOSELECT=YES,DEFAULT=YES,FORCED=NO,URI="vtt english ai/index-1.m3u8" #EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="sub",LANGUAGE="es-MX",NAME="Spanish (AI captioned)",AUTOSELECT=NO,DEFAULT=NO,FORCED=NO,URI="vtt spanish ai/index-1.m3u8" Configure AI-generated transcripts for distribution Before configuring AI-generated captions and translations for distribution, familiarize yourself with how to distribute live streams to remote endpoints .
- This page explains how to configure AI-generated captions and translated captions (that is, translations) for a live stream.
- AI-generated captions and translations are supported for HLS and DASH live streams.
- The elementary stream is used to create a MuxStream with key vtt english ai . { "key" : "vtt english ai" , "container" : "vtt" , "elementaryStreams" : [ "webvtt english ai" ], "segmentSettings" : { "segmentDuration" : "2s" } } This mux stream is then referenced in both HLS and DASH manifests . { "fileName" : "main.m3u8" , "type" : "HLS" , "muxStreams" : [ "mux video ts" , "vtt english ai" ], "maxSegmentCount" : 5 } Before using any of the request data, make the following replacements: PROJECT NUMBER : your Google Cloud project number; this is located in the Project number field on the IAM Settings page LOCATION : the location in which to create the channel; use one of the supported regions Show locations us-central1 us-east1 us-east4 us-west1 us-west2 northamerica-northeast1 southamerica-east1 asia-east1 asia-east2 asia-south1 asia-northeast1 asia-southeast1 australia-southeast1 europe-north1 europe-west1 europe-west2 europe-west3 europe-west4 CHANNEL ID : a user-defined identifier for the channel to create; this value must be 1-63 characters, begin and end with [a-z0-9] , and can contain dashes (-) between characters INPUT ID : the user-defined identifier for the input endpoint BUCKET NAME : the name of the Cloud Storage bucket you created to hold the live stream manifest and segment files Request JSON body: { "inputAttachments": [ { "key": "my-input", "input": "projects/ PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID " } ], "output": { "uri": "gs:// BUCKET NAME " }, "elementaryStreams": [ { "key": "es video", "videoStream": { "h264": { "profile": "high", "widthPixels": 1280, "heightPixels": 720, "bitrateBps": 3000000, "frameRate": 30 } } }, { "key": "es audio", "audioStream": { "codec": "aac", "channelCount": 2, "bitrateBps": 160000 } }, { "key": "webvtt english ai", "textStream": { "codec": "webvtt", "displayName": "English (AI captioned)", "languageCode": "en-US", "mapping": [ { "inputTrack": 1 } ] } } ], "muxStreams": [ { "key": "mux video fmp4", "container": "fmp4", "elementaryStreams": [ "es video" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux audio fmp4", "container": "fmp4", "elementaryStreams": [ "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux video ts", "container": "ts", "elementaryStreams": [ "es video", "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "vtt english ai", "container": "vtt", "elementaryStreams": [ "webvtt english ai" ], "segmentSettings": { "segmentDuration": "2s" } } ], "manifests": [ { "key": "manifest dash", "fileName": "main.mpd", "type": "DASH", "muxStreams": [ "mux video fmp4", "mux audio fmp4", "vtt english ai" ], "maxSegmentCount": 5 }, { "key": "manifest hls", "fileName": "main.m3u8", "type": "HLS", "muxStreams": [ "mux video ts", "vtt english ai" ], "maxSegmentCount": 5 } ] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Class LivestreamServiceAsyncClient (1.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateDvrSessionRequest ( parent="parent value", dvr session id="dvr session id value", dvr session=dvr session, ) Make the request operation = client. create dvr session (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.video.live stream v1.types.CreateDvrSessionRequest , dict]] The request object.
- CreateChannelRequest ( parent="parent value", channel id="channel id value", ) Make the request operation = client. create channel (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.video.live stream v1.types.CreateChannelRequest , dict]] The request object.
- CreateClipRequest ( parent="parent value", clip id="clip id value", clip=clip, ) Make the request operation = client. create clip (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.video.live stream v1.types.CreateClipRequest , dict]] The request object.
- Returns Type Description google.cloud.video.live stream v1.types.Channel Channel resource represents the processor that does a user-defined "streaming" operation, which includes getting an input stream through an input, transcoding it to multiple renditions, and publishing output live streams in certain formats (for example, HLS or DASH) to the specified location. get clip get clip ( request : typing .

### "Class LivestreamServiceClient (1.16.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient)
- Source ID: `site-python-reference`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateDvrSessionRequest ( parent="parent value", dvr session id="dvr session id value", dvr session=dvr session, ) Make the request operation = client. create dvr session (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.video.live stream v1.types.CreateDvrSessionRequest , dict] The request object.
- Returns Type Description google.cloud.video.live stream v1.types.Channel Channel resource represents the processor that does a user-defined "streaming" operation, which includes getting an input stream through an input, transcoding it to multiple renditions, and publishing output live streams in certain formats (for example, HLS or DASH) to the specified location. get clip get clip ( request : typing .
- The result type for the operation will be Channel Channel resource represents the processor that does a user-defined "streaming" operation, which includes getting an input stream through an input, transcoding it to multiple renditions, and publishing output live streams in certain formats (for example, HLS or DASH) to the specified location. update dvr session update dvr session ( request : typing .
- CreateChannelRequest ( parent="parent value", channel id="channel id value", ) Make the request operation = client. create channel (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.video.live stream v1.types.CreateChannelRequest , dict] The request object.

### "Quickstart for an HLS live stream \_|\_ Live Stream API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Before using any of the request data, make the following replacements: PROJECT NUMBER : your Google Cloud project number; this is located in the Project number field on the IAM Settings page LOCATION : the location in which to create the channel; use one of the supported regions Show locations us-central1 us-east1 us-east4 us-west1 us-west2 northamerica-northeast1 southamerica-east1 asia-east1 asia-east2 asia-south1 asia-northeast1 asia-southeast1 australia-southeast1 europe-north1 europe-west1 europe-west2 europe-west3 europe-west4 CHANNEL ID : a user-defined identifier for the channel to create; this value must be 1-63 characters, begin and end with [a-z0-9] , and can contain dashes (-) between characters INPUT ID : the user-defined identifier for the input endpoint BUCKET NAME : the name of the Cloud Storage bucket you created to hold the live stream manifest and segment files To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Verify that it contains the following files and directories: main.m3u8 mux video ts/ Multiple segment- segment-number .ts files A single index-1.m3u8 file Play the generated live stream Note: If you want to create a CDN for the media outputs, see the Media CDN quickstart .
- For more information, see Set up authentication for a local development environment . require "google/cloud/video/live stream" Create a channel @param project id [String] Your Google Cloud project (e.g. "my-project") @param location [String] The location (e.g. "us-central1") @param channel id [String] Your channel name (e.g. "my-channel") @param input id [String] Your input name (e.g. "my-input") @param output uri [String] Uri of the channel output folder in a Cloud Storage bucket. (e.g. "gs://my-bucket/my-output-folder/";) def create channel project id :, location :, channel id :, input id :, output uri : Create a Live Stream client. client = Google :: Cloud :: Video :: LiveStream . livestream service Build the resource name of the parent. parent = client . location path project : project id , location : location Build the resource name of the input. input path = client . input path project : project id , location : location , input : input id Set the channel fields. new channel = { input attachments : [ { key : "my-input" , input : input path } ] , output : { uri : output uri }, elementary streams : [ { key : "es video" , video stream : { h264 : { profile : "high" , bitrate bps : 3 000 000 , frame rate : 30 , height pixels : 720 , width pixels : 1280 } } }, { key : "es audio" , audio stream : { codec : "aac" , channel count : 2 , bitrate bps : 160 000 } } ] , mux streams : [ { key : "mux video" , elementary streams : [ "es video" ] , segment settings : { segment duration : { seconds : 2 } } }, { key : "mux audio" , elementary streams : [ "es audio" ] , segment settings : { segment duration : { seconds : 2 } } } ] , manifests : [ { file name : "main.m3u8" , type : Google :: Cloud :: Video :: LiveStream :: V1 :: Manifest :: ManifestType :: HLS , mux streams : [ "mux video" , "mux audio" ] , max segment count : 5 } ] } operation = client . create channel parent : parent , channel : new channel , channel id : channel id The returned object is of type Gapic::Operation.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "inputAttachments": [ { "key": "my-input", "input": "projects/ PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID " } ], "output": { "uri": "gs:// BUCKET NAME " }, "elementaryStreams": [ { "key": "es video", "videoStream": { "h264": { "profile": "high", "widthPixels": 1280, "heightPixels": 720, "bitrateBps": 3000000, "frameRate": 30 } } }, { "key": "es audio", "audioStream": { "codec": "aac", "channelCount": 2, "bitrateBps": 160000 } } ], "muxStreams": [ { "key": "mux video ts", "container": "ts", "elementaryStreams": ["es video", "es audio"], "segmentSettings": { "segmentDuration": "2s" } } ], "manifests": [ { "key": "manifest hls", "fileName": "main.m3u8", "type": "HLS", "muxStreams": [ "mux video ts" ], "maxSegmentCount": 5 } ] } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /channels?channelId= CHANNEL ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.video.livestream.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } C# To learn how to install and use the client library for Live Stream API, see Live Stream API client libraries .

