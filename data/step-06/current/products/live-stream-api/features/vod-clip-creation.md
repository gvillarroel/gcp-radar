---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.909Z"
product_name: "Live Stream API"
product_slug: "live-stream-api"
feature_name: "VOD clip creation"
feature_slug: "vod-clip-creation"
latest_feature_date: "2024-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient"
  - "https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations"
  - "https://docs.cloud.google.com/livestream/docs/how-to/create-channel-clips"
keywords:
  - "vod"
  - "clip"
  - "creation"
  - "allows"
  - "creating"
  - "video"
  - "on"
  - "demand"
---

# VOD clip creation

Product: Live Stream API
Coverage: MEDIUM

## Step 02 Summary

Allows creating video-on-demand clips from a live stream.

## Extended Definition

Allows creating video-on-demand clips from a live stream.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient)
- [https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)
- [https://docs.cloud.google.com/livestream/docs/how-to/create-channel-clips](https://docs.cloud.google.com/livestream/docs/how-to/create-channel-clips)

## Supporting Pages

### "Class LivestreamServiceAsyncClient (1.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 async def sample create clip(): Create a client client = live stream v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 async def sample delete clip(): Create a client client = live stream v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 async def sample list clips(): Create a client client = live stream v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 async def sample get clip(): Create a client client = live stream v1 .

### "Class LivestreamServiceClient (1.16.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient)
- Source ID: `site-python-reference`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 def sample create clip(): Create a client client = live stream v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 def sample delete clip(): Create a client client = live stream v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 def sample list clips(): Create a client client = live stream v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 def sample get clip(): Create a client client = live stream v1 .

### "Configure automatic captions and translations \_|\_ Live Stream API \_|\_\

- URL: [https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The elementary streams are included in the elementaryStreams field of the DistributionStream object. { "distributionStreams" : [ { "key" : "ds1" , "container" : "ts" , // to be used with an SRT distribution "elementaryStreams" : [ "es video" , "es audio" , "embedded english ai" , // distribute both English "embedded spanish ai" // and Spanish captions ] }, { "key" : "ds2" , "container" : "flv" , // to be used with an RTMP distribution "elementaryStreams" : [ "es video" , "es audio" , "embedded spanish ai" // only distribute Spanish captions ] } ] } Complete channel creation by following distribute live stream to remote endpoint guide .
- The elementary stream is used to create a MuxStream with key vtt english ai . { "key" : "vtt english ai" , "container" : "vtt" , "elementaryStreams" : [ "webvtt english ai" ], "segmentSettings" : { "segmentDuration" : "2s" } } This mux stream is then referenced in both HLS and DASH manifests . { "fileName" : "main.m3u8" , "type" : "HLS" , "muxStreams" : [ "mux video ts" , "vtt english ai" ], "maxSegmentCount" : 5 } Before using any of the request data, make the following replacements: PROJECT NUMBER : your Google Cloud project number; this is located in the Project number field on the IAM Settings page LOCATION : the location in which to create the channel; use one of the supported regions Show locations us-central1 us-east1 us-east4 us-west1 us-west2 northamerica-northeast1 southamerica-east1 asia-east1 asia-east2 asia-south1 asia-northeast1 asia-southeast1 australia-southeast1 europe-north1 europe-west1 europe-west2 europe-west3 europe-west4 CHANNEL ID : a user-defined identifier for the channel to create; this value must be 1-63 characters, begin and end with [a-z0-9] , and can contain dashes (-) between characters INPUT ID : the user-defined identifier for the input endpoint BUCKET NAME : the name of the Cloud Storage bucket you created to hold the live stream manifest and segment files Request JSON body: { "inputAttachments": [ { "key": "my-input", "input": "projects/ PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID " } ], "output": { "uri": "gs:// BUCKET NAME " }, "elementaryStreams": [ { "key": "es video", "videoStream": { "h264": { "profile": "high", "widthPixels": 1280, "heightPixels": 720, "bitrateBps": 3000000, "frameRate": 30 } } }, { "key": "es audio", "audioStream": { "codec": "aac", "channelCount": 2, "bitrateBps": 160000 } }, { "key": "webvtt english ai", "textStream": { "codec": "webvtt", "displayName": "English (AI captioned)", "languageCode": "en-US", "mapping": [ { "inputTrack": 1 } ] } } ], "muxStreams": [ { "key": "mux video fmp4", "container": "fmp4", "elementaryStreams": [ "es video" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux audio fmp4", "container": "fmp4", "elementaryStreams": [ "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux video ts", "container": "ts", "elementaryStreams": [ "es video", "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "vtt english ai", "container": "vtt", "elementaryStreams": [ "webvtt english ai" ], "segmentSettings": { "segmentDuration": "2s" } } ], "manifests": [ { "key": "manifest dash", "fileName": "main.mpd", "type": "DASH", "muxStreams": [ "mux video fmp4", "mux audio fmp4", "vtt english ai" ], "maxSegmentCount": 5 }, { "key": "manifest hls", "fileName": "main.m3u8", "type": "HLS", "muxStreams": [ "mux video ts", "vtt english ai" ], "maxSegmentCount": 5 } ] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "inputAttachments": [ { "key": "my-input", "input": "projects/ PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID " } ], "output": { "uri": "gs:// BUCKET NAME " }, "elementaryStreams": [ { "key": "es video", "videoStream": { "h264": { "profile": "high", "widthPixels": 1280, "heightPixels": 720, "bitrateBps": 3000000, "frameRate": 30 } } }, { "key": "es audio", "audioStream": { "codec": "aac", "channelCount": 2, "bitrateBps": 160000 } }, { "key": "webvtt english ai", "textStream": { "codec": "webvtt", "displayName": "English (AI captioned)", "languageCode": "en-US", "mapping": [ { "inputTrack": 1 } ] } }, { "key": "webvtt spanish ai", "textStream": { "codec": "webvtt", "displayName": "Spanish (AI captioned)", "languageCode": "es-MX", "mapping": [ { "inputTrack": 1, "fromLanguageCode": "en-US" } ] } } ], "muxStreams": [ { "key": "mux video fmp4", "container": "fmp4", "elementaryStreams": [ "es video" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux audio fmp4", "container": "fmp4", "elementaryStreams": [ "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux video ts", "container": "ts", "elementaryStreams": [ "es video", "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "vtt english ai", "container": "vtt", "elementaryStreams": [ "webvtt english ai" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "vtt spanish ai", "container": "vtt", "elementaryStreams": [ "webvtt spanish ai" ], "segmentSettings": { "segmentDuration": "2s" } } ], "manifests": [ { "key": "manifest dash", "fileName": "main.mpd", "type": "DASH", "muxStreams": [ "mux video fmp4", "mux audio fmp4", "vtt english ai", "vtt spanish ai" ], "maxSegmentCount": 5 }, { "key": "manifest hls", "fileName": "main.m3u8", "type": "HLS", "muxStreams": [ "mux video ts", "vtt english ai", "vtt spanish ai" ], "maxSegmentCount": 5 } ] } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID ?updateMask=elementary streams,mux streams,manifests" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.video.livestream.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID ", "verb": "update", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } You can check for the result of the operation using the new operation ID.
- Before using any of the request data, make the following replacements: PROJECT NUMBER : your Google Cloud project number; this is located in the Project number field on the IAM Settings page LOCATION : the location in which to create the channel; use one of the supported regions Show locations us-central1 us-east1 us-east4 us-west1 us-west2 northamerica-northeast1 southamerica-east1 asia-east1 asia-east2 asia-south1 asia-northeast1 asia-southeast1 australia-southeast1 europe-north1 europe-west1 europe-west2 europe-west3 europe-west4 CHANNEL ID : a user-defined identifier for the channel to create; this value must be 1-63 characters, begin and end with [a-z0-9] , and can contain dashes (-) between characters Request JSON body: { "inputAttachments": [ { "key": "my-input", "input": "projects/ PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID " } ], "output": { "uri": "gs:// BUCKET NAME " }, "elementaryStreams": [ { "key": "es video", "videoStream": { "h264": { "profile": "high", "widthPixels": 1280, "heightPixels": 720, "bitrateBps": 3000000, "frameRate": 30 } } }, { "key": "es audio", "audioStream": { "codec": "aac", "channelCount": 2, "bitrateBps": 160000 } }, { "key": "webvtt english ai", "textStream": { "codec": "webvtt", "displayName": "English (AI captioned)", "languageCode": "en-US", "mapping": [ { "inputTrack": 1 } ] } }, { "key": "webvtt spanish ai", "textStream": { "codec": "webvtt", "displayName": "Spanish (AI captioned)", "languageCode": "es-MX", "mapping": [ { "inputTrack": 1, "fromLanguageCode": "en-US" } ] } } ], "muxStreams": [ { "key": "mux video fmp4", "container": "fmp4", "elementaryStreams": [ "es video" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux audio fmp4", "container": "fmp4", "elementaryStreams": [ "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux video ts", "container": "ts", "elementaryStreams": [ "es video", "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "vtt english ai", "container": "vtt", "elementaryStreams": [ "webvtt english ai" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "vtt spanish ai", "container": "vtt", "elementaryStreams": [ "webvtt spanish ai" ], "segmentSettings": { "segmentDuration": "2s" } } ], "manifests": [ { "key": "manifest dash", "fileName": "main.mpd", "type": "DASH", "muxStreams": [ "mux video fmp4", "mux audio fmp4", "vtt english ai", "vtt spanish ai" ], "maxSegmentCount": 5 }, { "key": "manifest hls", "fileName": "main.m3u8", "type": "HLS", "muxStreams": [ "mux video ts", "vtt english ai", "vtt spanish ai" ], "maxSegmentCount": 5 } ] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Create and manage channel clips \_|\_ Live Stream API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/livestream/docs/how-to/create-channel-clips](https://docs.cloud.google.com/livestream/docs/how-to/create-channel-clips)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use a channel clip to create video on demand (VOD) files from a live stream.
- Before using any of the request data, make the following replacements: PROJECT NUMBER : your Google Cloud project number; this is located in the Project number field on the IAM Settings page LOCATION : the location where your channel is located; use one of the supported regions Show locations us-central1 us-east1 us-east4 us-west1 us-west2 northamerica-northeast1 southamerica-east1 asia-east1 asia-east2 asia-south1 asia-northeast1 asia-southeast1 australia-southeast1 europe-north1 europe-west1 europe-west2 europe-west3 europe-west4 CHANNEL ID : a user-defined identifier for the channel CLIP ID : a user-defined identifier for the VOD clip MARK IN TIME : the mark-in Unix epoch time in the original live stream manifest; uses a timestamp in RFC3339 UTC "Zulu" format (for example, 2014-10-02T15:01:23Z ) MARK OUT TIME : the mark-out Unix epoch time in the original live stream manifest; uses a timestamp in RFC3339 UTC "Zulu" format (for example, 2014-10-02T15:01:23Z ) BUCKET NAME : the name of the Cloud Storage bucket you created to hold the VOD clip manifest and segment files; you can use the same bucket you created for the live stream manifest or a different bucket; you can also append a directory name to the bucket name (for example my-bucket/vod-clip ) To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "outputUri": "gs:// BUCKET NAME ", "clipManifests":[ { "manifestKey": "manifest hls" } ], "slices":[ { "timeSlice": { "markinTime": " MARK IN TIME ", "markoutTime": " MARK OUT TIME " } } ] } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID /clips?clipId= CLIP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.video.livestream.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID /clips/ CLIP ID ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } This command creates a long-running operation (LRO) that you can use to track the progress of your request.
- Before using any of the request data, make the following replacements: PROJECT NUMBER : your Google Cloud project number; this is located in the Project number field on the IAM Settings page LOCATION : the location where your channel is located; use one of the supported regions Show locations us-central1 us-east1 us-east4 us-west1 us-west2 northamerica-northeast1 southamerica-east1 asia-east1 asia-east2 asia-south1 asia-northeast1 asia-southeast1 australia-southeast1 europe-north1 europe-west1 europe-west2 europe-west3 europe-west4 CHANNEL ID : a user-defined identifier for the channel CLIP ID : a user-defined identifier for the VOD clip To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

