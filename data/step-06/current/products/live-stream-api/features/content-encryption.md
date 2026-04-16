---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.912Z"
product_name: "Live Stream API"
product_slug: "live-stream-api"
feature_name: "Content encryption"
feature_slug: "content-encryption"
latest_feature_date: "2023-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/livestream/docs/overview"
  - "https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient"
  - "https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls"
keywords:
  - "content"
  - "encryption"
  - "the"
  - "api"
  - "supports"
  - "encrypting"
  - "live"
  - "stream"
---

# Content encryption

Product: Live Stream API
Coverage: MEDIUM

## Step 02 Summary

The API supports encrypting live stream content.

## Extended Definition

The API supports encrypting live stream content.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/livestream/docs/overview](https://docs.cloud.google.com/livestream/docs/overview)
- [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient)
- [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls)

## Supporting Pages

### Overview of the Live Stream API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/livestream/docs/overview](https://docs.cloud.google.com/livestream/docs/overview)
- Source ID: `site-api-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Features The Live Stream API includes support for the following features: Automatic infrastructure provisioning Integration with Cloud Storage, Cloud Audit Logs, and Google Cloud infrastructure Configuration of a backup input stream for redundancy Live to video on demand (VOD) Content encryption Slates (image and video) Supported inputs and outputs The following tables show the supported input and output formats for the Live Stream API.
- Home Documentation AI and ML Live Stream API Guides Send feedback Overview of the Live Stream API Stay organized with collections Save and categorize content based on your preferences.
- The Live Stream API transcodes mezzanine live signals into direct-to-consumer streaming formats, including Dynamic Adaptive Streaming over HTTP (DASH/MPEG-DASH), and HTTP Live Streaming (HLS), for multiple device platforms.
- Concepts and terminology This section provides a glossary of useful terms for working with the Live Stream API.

### "Class LivestreamServiceAsyncClient (1.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can only update the following fields: - inputAttachments - inputConfig <code> <https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#inputconfig></code> - <pre>output https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#output - elementaryStreams https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#elementarystream - muxStreams - manifests <code> <https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#manifest></code> - <pre>spriteSheets https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#spritesheet - logConfig https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#logconfig - timecodeConfig - encryptions https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#encryption The fields specified in the update mask are relative to the resource, not the full request.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 async def sample create dvr session(): Create a client client = live stream v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 async def sample delete dvr session(): Create a client client = live stream v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 async def sample start distribution(): Create a client client = live stream v1 .

### "Class LivestreamServiceClient (1.16.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient)
- Source ID: `site-python-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can only update the following fields: - inputAttachments - inputConfig <code> <https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#inputconfig></code> - <pre>output https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#output - elementaryStreams https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#elementarystream - muxStreams - manifests <code> <https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#manifest></code> - <pre>spriteSheets https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#spritesheet - logConfig https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#logconfig - timecodeConfig - encryptions https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#encryption The fields specified in the update mask are relative to the resource, not the full request.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 def sample create dvr session(): Create a client client = live stream v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 def sample delete dvr session(): Create a client client = live stream v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 def sample start distribution(): Create a client client = live stream v1 .

### "Quickstart for an HLS live stream \_|\_ Live Stream API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "inputAttachments": [ { "key": "my-input", "input": "projects/ PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID " } ], "output": { "uri": "gs:// BUCKET NAME " }, "elementaryStreams": [ { "key": "es video", "videoStream": { "h264": { "profile": "high", "widthPixels": 1280, "heightPixels": 720, "bitrateBps": 3000000, "frameRate": 30 } } }, { "key": "es audio", "audioStream": { "codec": "aac", "channelCount": 2, "bitrateBps": 160000 } } ], "muxStreams": [ { "key": "mux video ts", "container": "ts", "elementaryStreams": ["es video", "es audio"], "segmentSettings": { "segmentDuration": "2s" } } ], "manifests": [ { "key": "manifest hls", "fileName": "main.m3u8", "type": "HLS", "muxStreams": [ "mux video ts" ], "maxSegmentCount": 5 } ] } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /channels?channelId= CHANNEL ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.video.livestream.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } C# To learn how to install and use the client library for Live Stream API, see Live Stream API client libraries .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID ", "createTime": CREATE TIME , "updateTime": UPDATE TIME , "inputAttachments": [ { "key": " INPUT ID ", "input": "projects/ PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID " } ], "activeInput": " INPUT ID ", "output": { "uri": "gs:// BUCKET NAME " }, "elementaryStreams": [ { "videoStream": { "h264": { "widthPixels": 1280, "heightPixels": 720, "frameRate": 30, "bitrateBps": 3000000, "gopDuration": "2s", "vbvSizeBits": 3000000, "vbvFullnessBits": 2700000, "entropyCoder": "cabac", "profile": "high" } }, "key": "es video" }, { "audioStream": { "codec": "aac", "bitrateBps": 160000, "channelCount": 2, "channelLayout": ["fl", "fr"], "sampleRateHertz": 48000 }, "key": "es audio" } ], "muxStreams": [ { "key": "mux video ts", "container": "ts", "elementaryStreams": ["es video", "es audio"], "segmentSettings": { "segmentDuration": "2s" } } ], "manifests": [ { "key": "manifest hls", "fileName": "main.m3u8", "type": "HLS", "muxStreams": [ "mux video ts", ], "maxSegmentCount": 5, "segmentKeepDuration": "60s" } ], "streamingState": "STOPPED" } C# To learn how to install and use the client library for Live Stream API, see Live Stream API client libraries .
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID " } ], "output": { "uri": "gs:// BUCKET NAME " }, "elementaryStreams": [ { "key": "es video", "videoStream": { "h264": { "profile": "high", "widthPixels": 1280, "heightPixels": 720, "bitrateBps": 3000000, "frameRate": 30 } } }, { "key": "es audio", "audioStream": { "codec": "aac", "channelCount": 2, "bitrateBps": 160000 } } ], "muxStreams": [ { "key": "mux video ts", "container": "ts", "elementaryStreams": ["es video", "es audio"], "segmentSettings": { "segmentDuration": "2s" } } ], "manifests": [ { "key": "manifest hls", "fileName": "main.m3u8", "type": "HLS", "muxStreams": [ "mux video ts" ], "maxSegmentCount": 5 } ] } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://livestream.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /channels?channelId= CHANNEL ID " PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.video.livestream.v1.OperationMetadata", "createTime": CREATE TIME , "endTime": END TIME , "target": "projects/ PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.video.livestream.v1.Input", "name": "projects/ PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID ", "createTime": CREATE TIME , "updateTime": UPDATE TIME , "type": "RTMP PUSH", "uri": INPUT STREAM URI , # For example, "rtmp://1.2.3.4/live/b8ebdd94-c8d9-4d88-a16e-b963c43a953b", "tier": "HD" } } Find the uri field and copy the returned INPUT STREAM URI to use later in the Send the input stream section.

