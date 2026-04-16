---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.907Z"
product_name: "Live Stream API"
product_slug: "live-stream-api"
feature_name: "Ultra-low-latency input preview"
feature_slug: "ultra-low-latency-input-preview"
latest_feature_date: "2025-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient"
  - "https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels"
  - "https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations"
keywords:
  - "ultra"
  - "low"
  - "latency"
  - "input"
  - "preview"
  - "enables"
  - "of"
  - "streams"
---

# Ultra-low-latency input preview

Product: Live Stream API
Coverage: MEDIUM

## Step 02 Summary

Enables ultra-low-latency preview of input streams so operators can correct issues before viewers are affected.

## Extended Definition

Enables ultra-low-latency preview of input streams so operators can correct issues before viewers are affected.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient)
- [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels)
- [https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)

## Supporting Pages

### "Class LivestreamServiceAsyncClient (1.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- You can only update the following fields: - inputAttachments - inputConfig <code> <https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#inputconfig></code> - <pre>output https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#output - elementaryStreams https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#elementarystream - muxStreams - manifests <code> <https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#manifest></code> - <pre>spriteSheets https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#spritesheet - logConfig https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#logconfig - timecodeConfig - encryptions https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#encryption The fields specified in the update mask are relative to the resource, not the full request.
- Returns Type Description google.cloud.video.live stream v1.types.PreviewInputResponse Response message for "LivestreamService.PreviewInput" secret version path secret version path ( project : str , secret : str , version : str ) - > str Returns a fully-qualified secret version string. start channel start channel ( request : typing .
- PreviewInputResponse Preview the streaming content of the specified input.
- Request message for "LivestreamService.PreviewInput". name str Required.

### "Class LivestreamServiceClient (1.16.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient)
- Source ID: `site-python-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- You can only update the following fields: - inputAttachments - inputConfig <code> <https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#inputconfig></code> - <pre>output https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#output - elementaryStreams https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#elementarystream - muxStreams - manifests <code> <https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#manifest></code> - <pre>spriteSheets https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#spritesheet - logConfig https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#logconfig - timecodeConfig - encryptions https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#encryption The fields specified in the update mask are relative to the resource, not the full request.
- Returns Type Description google.cloud.video.live stream v1.types.PreviewInputResponse Response message for "LivestreamService.PreviewInput" secret version path secret version path ( project : str , secret : str , version : str ) - > str Returns a fully-qualified secret version string. start channel start channel ( request : typing .
- PreviewInputResponse Preview the streaming content of the specified input.
- Request message for "LivestreamService.PreviewInput". name str Required.

### "REST Resource: projects.locations.channels \_|\_ Live Stream API \_|\_ Google\

- URL: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels)
- Source ID: `site-api-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "inputAttachments" : [ { object ( InputAttachment ) } ] , "activeInput" : string , "output" : { object ( Output ) } , "elementaryStreams" : [ { object ( ElementaryStream ) } ] , "muxStreams" : [ { object ( MuxStream ) } ] , "manifests" : [ { object ( Manifest ) } ] , "distributionStreams" : [ { object ( DistributionStream ) } ] , "distributions" : [ { object ( Distribution ) } ] , "spriteSheets" : [ { object ( SpriteSheet ) } ] , "streamingState" : enum ( StreamingState ) , "streamingError" : { object ( Status ) } , "logConfig" : { object ( LogConfig ) } , "timecodeConfig" : { object ( TimecodeConfig ) } , "encryptions" : [ { object ( Encryption ) } ] , "inputConfig" : { object ( InputConfig ) } , "retentionConfig" : { object ( RetentionConfig ) } , "staticOverlays" : [ { object ( StaticOverlay ) } ] , "autoTranscriptionConfig" : { object ( AutoTranscriptionConfig ) } } Fields name string The resource name of the channel, in the form of: projects/{project}/locations/{location}/channels/{channelId} . createTime string ( Timestamp format) Output only.
- Supported channel names: fl - Front left channel fr - Front right channel sl - Side left channel sr - Side right channel fc - Front center channel lfe - Low frequency mapping[] object ( AudioMapping ) The mapping for the input streams and audio channels. sampleRateHertz integer The audio sample rate in Hertz.
- We assume all inputs are live. time offset can be only one of the following: utcOffset string ( Duration format) UTC offset.
- LOW LATENCY Reduce the latency of auto-generated captions.

### "Configure automatic captions and translations \_|\_ Live Stream API \_|\_\

- URL: [https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)
- Source ID: `site-iam-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- The elementary stream is used to create a MuxStream with key vtt english ai . { "key" : "vtt english ai" , "container" : "vtt" , "elementaryStreams" : [ "webvtt english ai" ], "segmentSettings" : { "segmentDuration" : "2s" } } This mux stream is then referenced in both HLS and DASH manifests . { "fileName" : "main.m3u8" , "type" : "HLS" , "muxStreams" : [ "mux video ts" , "vtt english ai" ], "maxSegmentCount" : 5 } Before using any of the request data, make the following replacements: PROJECT NUMBER : your Google Cloud project number; this is located in the Project number field on the IAM Settings page LOCATION : the location in which to create the channel; use one of the supported regions Show locations us-central1 us-east1 us-east4 us-west1 us-west2 northamerica-northeast1 southamerica-east1 asia-east1 asia-east2 asia-south1 asia-northeast1 asia-southeast1 australia-southeast1 europe-north1 europe-west1 europe-west2 europe-west3 europe-west4 CHANNEL ID : a user-defined identifier for the channel to create; this value must be 1-63 characters, begin and end with [a-z0-9] , and can contain dashes (-) between characters INPUT ID : the user-defined identifier for the input endpoint BUCKET NAME : the name of the Cloud Storage bucket you created to hold the live stream manifest and segment files Request JSON body: { "inputAttachments": [ { "key": "my-input", "input": "projects/ PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID " } ], "output": { "uri": "gs:// BUCKET NAME " }, "elementaryStreams": [ { "key": "es video", "videoStream": { "h264": { "profile": "high", "widthPixels": 1280, "heightPixels": 720, "bitrateBps": 3000000, "frameRate": 30 } } }, { "key": "es audio", "audioStream": { "codec": "aac", "channelCount": 2, "bitrateBps": 160000 } }, { "key": "webvtt english ai", "textStream": { "codec": "webvtt", "displayName": "English (AI captioned)", "languageCode": "en-US", "mapping": [ { "inputTrack": 1 } ] } } ], "muxStreams": [ { "key": "mux video fmp4", "container": "fmp4", "elementaryStreams": [ "es video" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux audio fmp4", "container": "fmp4", "elementaryStreams": [ "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux video ts", "container": "ts", "elementaryStreams": [ "es video", "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "vtt english ai", "container": "vtt", "elementaryStreams": [ "webvtt english ai" ], "segmentSettings": { "segmentDuration": "2s" } } ], "manifests": [ { "key": "manifest dash", "fileName": "main.mpd", "type": "DASH", "muxStreams": [ "mux video fmp4", "mux audio fmp4", "vtt english ai" ], "maxSegmentCount": 5 }, { "key": "manifest hls", "fileName": "main.m3u8", "type": "HLS", "muxStreams": [ "mux video ts", "vtt english ai" ], "maxSegmentCount": 5 } ] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "inputAttachments": [ { "key": "my-input", "input": "projects/ PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID " } ], "output": { "uri": "gs:// BUCKET NAME " }, "elementaryStreams": [ { "key": "es video", "videoStream": { "h264": { "profile": "high", "widthPixels": 1280, "heightPixels": 720, "bitrateBps": 3000000, "frameRate": 30 } } }, { "key": "es audio", "audioStream": { "codec": "aac", "channelCount": 2, "bitrateBps": 160000 } }, { "key": "webvtt english ai", "textStream": { "codec": "webvtt", "displayName": "English (AI captioned)", "languageCode": "en-US", "mapping": [ { "inputTrack": 1 } ] } }, { "key": "webvtt spanish ai", "textStream": { "codec": "webvtt", "displayName": "Spanish (AI captioned)", "languageCode": "es-MX", "mapping": [ { "inputTrack": 1, "fromLanguageCode": "en-US" } ] } } ], "muxStreams": [ { "key": "mux video fmp4", "container": "fmp4", "elementaryStreams": [ "es video" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux audio fmp4", "container": "fmp4", "elementaryStreams": [ "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux video ts", "container": "ts", "elementaryStreams": [ "es video", "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "vtt english ai", "container": "vtt", "elementaryStreams": [ "webvtt english ai" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "vtt spanish ai", "container": "vtt", "elementaryStreams": [ "webvtt spanish ai" ], "segmentSettings": { "segmentDuration": "2s" } } ], "manifests": [ { "key": "manifest dash", "fileName": "main.mpd", "type": "DASH", "muxStreams": [ "mux video fmp4", "mux audio fmp4", "vtt english ai", "vtt spanish ai" ], "maxSegmentCount": 5 }, { "key": "manifest hls", "fileName": "main.m3u8", "type": "HLS", "muxStreams": [ "mux video ts", "vtt english ai", "vtt spanish ai" ], "maxSegmentCount": 5 } ] } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID ?updateMask=elementary streams,mux streams,manifests" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.video.livestream.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID ", "verb": "update", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } You can check for the result of the operation using the new operation ID.
- Before using any of the request data, make the following replacements: PROJECT NUMBER : your Google Cloud project number; this is located in the Project number field on the IAM Settings page LOCATION : the location in which to create the channel; use one of the supported regions Show locations us-central1 us-east1 us-east4 us-west1 us-west2 northamerica-northeast1 southamerica-east1 asia-east1 asia-east2 asia-south1 asia-northeast1 asia-southeast1 australia-southeast1 europe-north1 europe-west1 europe-west2 europe-west3 europe-west4 CHANNEL ID : a user-defined identifier for the channel to create; this value must be 1-63 characters, begin and end with [a-z0-9] , and can contain dashes (-) between characters Request JSON body: { "inputAttachments": [ { "key": "my-input", "input": "projects/ PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID " } ], "output": { "uri": "gs:// BUCKET NAME " }, "elementaryStreams": [ { "key": "es video", "videoStream": { "h264": { "profile": "high", "widthPixels": 1280, "heightPixels": 720, "bitrateBps": 3000000, "frameRate": 30 } } }, { "key": "es audio", "audioStream": { "codec": "aac", "channelCount": 2, "bitrateBps": 160000 } }, { "key": "webvtt english ai", "textStream": { "codec": "webvtt", "displayName": "English (AI captioned)", "languageCode": "en-US", "mapping": [ { "inputTrack": 1 } ] } }, { "key": "webvtt spanish ai", "textStream": { "codec": "webvtt", "displayName": "Spanish (AI captioned)", "languageCode": "es-MX", "mapping": [ { "inputTrack": 1, "fromLanguageCode": "en-US" } ] } } ], "muxStreams": [ { "key": "mux video fmp4", "container": "fmp4", "elementaryStreams": [ "es video" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux audio fmp4", "container": "fmp4", "elementaryStreams": [ "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux video ts", "container": "ts", "elementaryStreams": [ "es video", "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "vtt english ai", "container": "vtt", "elementaryStreams": [ "webvtt english ai" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "vtt spanish ai", "container": "vtt", "elementaryStreams": [ "webvtt spanish ai" ], "segmentSettings": { "segmentDuration": "2s" } } ], "manifests": [ { "key": "manifest dash", "fileName": "main.mpd", "type": "DASH", "muxStreams": [ "mux video fmp4", "mux audio fmp4", "vtt english ai", "vtt spanish ai" ], "maxSegmentCount": 5 }, { "key": "manifest hls", "fileName": "main.m3u8", "type": "HLS", "muxStreams": [ "mux video ts", "vtt english ai", "vtt spanish ai" ], "maxSegmentCount": 5 } ] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "inputAttachments": [ { "key": "my-input", "input": "projects/ PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID " } ], "output": { "uri": "gs:// BUCKET NAME " }, "elementaryStreams": [ { "key": "es video", "videoStream": { "h264": { "profile": "high", "widthPixels": 1280, "heightPixels": 720, "bitrateBps": 3000000, "frameRate": 30 } } }, { "key": "es audio", "audioStream": { "codec": "aac", "channelCount": 2, "bitrateBps": 160000 } }, { "key": "webvtt english ai", "textStream": { "codec": "webvtt", "displayName": "English (AI captioned)", "languageCode": "en-US", "mapping": [ { "inputTrack": 1 } ] } } ], "muxStreams": [ { "key": "mux video fmp4", "container": "fmp4", "elementaryStreams": [ "es video" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux audio fmp4", "container": "fmp4", "elementaryStreams": [ "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux video ts", "container": "ts", "elementaryStreams": [ "es video", "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "vtt english ai", "container": "vtt", "elementaryStreams": [ "webvtt english ai" ], "segmentSettings": { "segmentDuration": "2s" } } ], "manifests": [ { "key": "manifest dash", "fileName": "main.mpd", "type": "DASH", "muxStreams": [ "mux video fmp4", "mux audio fmp4", "vtt english ai" ], "maxSegmentCount": 5 }, { "key": "manifest hls", "fileName": "main.m3u8", "type": "HLS", "muxStreams": [ "mux video ts", "vtt english ai" ], "maxSegmentCount": 5 } ] } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /channels?channelId= CHANNEL ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.video.livestream.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Get the channel You can check for the result of the operation using the new operation ID.

