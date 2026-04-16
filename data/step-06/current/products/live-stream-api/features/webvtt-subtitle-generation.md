---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.907Z"
product_name: "Live Stream API"
product_slug: "live-stream-api"
feature_name: "WebVTT subtitle generation"
feature_slug: "webvtt-subtitle-generation"
latest_feature_date: "2025-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/livestream/docs/how-to/configure-subtitles"
  - "https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations"
  - "https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels"
  - "https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient"
keywords:
  - "webvtt"
  - "subtitle"
  - "generation"
  - "generates"
  - "subtitles"
  - "from"
  - "embedded"
  - "cea"
---

# WebVTT subtitle generation

Product: Live Stream API
Coverage: MEDIUM

## Step 02 Summary

Generates WebVTT subtitles from embedded CEA-608 or CEA-708 captions in the input stream.

## Extended Definition

Generates WebVTT subtitles from embedded CEA-608 or CEA-708 captions in the input stream.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/livestream/docs/how-to/configure-subtitles](https://docs.cloud.google.com/livestream/docs/how-to/configure-subtitles)
- [https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)
- [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels)
- [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient)

## Supporting Pages

### Configure subtitles \_|\_ Live Stream API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/livestream/docs/how-to/configure-subtitles](https://docs.cloud.google.com/livestream/docs/how-to/configure-subtitles)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note the following in the channel configuration: One ElementaryStream , a TextStream , is used for the subtitles. { "key" : "webvtt-english" , "textStream" : { "codec" : "webvtt" , "display name" : "English" , "language code" : "en-US" , "mapping" : [ { "input cea channel" : "CC1" } ] } } The TextStream codec field is set to webvtt .
- Subtitles are generated from cea608 or cea708 captions in the input stream.
- This page explains how to configure subtitles in Web Video Text Tracks format (WebVTT) for a live stream.
- In this example, input cea channel is mapped to input channel CC1 for English subtitles.

### "Configure automatic captions and translations \_|\_ Live Stream API \_|\_\

- URL: [https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)
- Source ID: `site-iam-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the channel configuration, consider the following: One ElementaryStream , a TextStream , is used for the captions, and another ElementaryStream , a TextStream , is used for the translation. { "key" : "embedded english ai" , "textStream" : { "codec" : "cea608" , "displayName" : "English (AI captioned)" , "languageCode" : "en-US" , "outputCeaChannel" : "CC1" , // closed caption channel that will contain AI-generated English captions "mapping" : [ { "inputTrack" : 1 // audio track number } ] } } { "key" : "embedded spanish ai" , "textStream" : { "codec" : "cea608" , "displayName" : "Spanish (AI captioned)" , "languageCode" : "es-MX" , "outputCeaChannel" : "CC2" , // closed caption channel that will contain AI-generated Spanish captions "mapping" : [ { "inputTrack" : 1 , // audio track number "fromLanguageCode" : "en-US" // original audio in English } ] } } The TextStream codec field must be set to either cea608 or cea708 .
- Verify the translation in the output manifest Run the following command to see the contents of the generated HLS manifest: gcloud storage cat gs:// BUCKET NAME /main.m3u8 The AI-generated webvtt English and Spanish captions show up in the output manifest similar to the following: #EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="sub",LANGUAGE="en-US",NAME="English (AI captioned)",AUTOSELECT=YES,DEFAULT=YES,FORCED=NO,URI="vtt english ai/index-1.m3u8" #EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="sub",LANGUAGE="es-MX",NAME="Spanish (AI captioned)",AUTOSELECT=NO,DEFAULT=NO,FORCED=NO,URI="vtt spanish ai/index-1.m3u8" Configure AI-generated transcripts for distribution Before configuring AI-generated captions and translations for distribution, familiarize yourself with how to distribute live streams to remote endpoints .
- Verify the captions in the output manifest Run the following command to see the contents of the generated HLS manifest: gcloud storage cat gs:// BUCKET NAME /main.m3u8 The AI-generated webvtt English captions show up in the output manifest similar to the following: #EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="sub",LANGUAGE="en-US",NAME="English (AI captioned)",AUTOSELECT=YES,DEFAULT=YES,FORCED=NO,URI="vtt english ai/index-1.m3u8" Stop the channel You must stop a channel before you update the channel configuration.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "inputAttachments": [ { "key": "my-input", "input": "projects/ PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID " } ], "output": { "uri": "gs:// BUCKET NAME " }, "elementaryStreams": [ { "key": "es video", "videoStream": { "h264": { "profile": "high", "widthPixels": 1280, "heightPixels": 720, "bitrateBps": 3000000, "frameRate": 30 } } }, { "key": "es audio", "audioStream": { "codec": "aac", "channelCount": 2, "bitrateBps": 160000 } }, { "key": "webvtt english ai", "textStream": { "codec": "webvtt", "displayName": "English (AI captioned)", "languageCode": "en-US", "mapping": [ { "inputTrack": 1 } ] } }, { "key": "webvtt spanish ai", "textStream": { "codec": "webvtt", "displayName": "Spanish (AI captioned)", "languageCode": "es-MX", "mapping": [ { "inputTrack": 1, "fromLanguageCode": "en-US" } ] } } ], "muxStreams": [ { "key": "mux video fmp4", "container": "fmp4", "elementaryStreams": [ "es video" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux audio fmp4", "container": "fmp4", "elementaryStreams": [ "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux video ts", "container": "ts", "elementaryStreams": [ "es video", "es audio" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "vtt english ai", "container": "vtt", "elementaryStreams": [ "webvtt english ai" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "vtt spanish ai", "container": "vtt", "elementaryStreams": [ "webvtt spanish ai" ], "segmentSettings": { "segmentDuration": "2s" } } ], "manifests": [ { "key": "manifest dash", "fileName": "main.mpd", "type": "DASH", "muxStreams": [ "mux video fmp4", "mux audio fmp4", "vtt english ai", "vtt spanish ai" ], "maxSegmentCount": 5 }, { "key": "manifest hls", "fileName": "main.m3u8", "type": "HLS", "muxStreams": [ "mux video ts", "vtt english ai", "vtt spanish ai" ], "maxSegmentCount": 5 } ] } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID ?updateMask=elementary streams,mux streams,manifests" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.video.livestream.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID ", "verb": "update", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } You can check for the result of the operation using the new operation ID.

### "REST Resource: projects.locations.channels \_|\_ Live Stream API \_|\_ Google\

- URL: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels)
- Source ID: `site-api-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Must be one of CC1 , CC2 , CC3 , and CC4 , if the codec of the input closed caption is cea608 ; Must be one between SERVICE1 and SERVICE64 , if the codec of the input closed caption is cea708 . fromLanguageCode string Optional.
- JSON representation { "inputKey" : string , "inputTrack" : integer , "inputCeaChannel" : string , "fromLanguageCode" : string } Fields inputKey string Optional.
- Supported text codecs: cea608 cea708 webvtt languageCode string Optional.
- For example, closed captions or subtitles.

### "Class LivestreamServiceAsyncClient (1.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description LivestreamServiceAsyncClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description LivestreamServiceAsyncClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.
- Each clip represents a clipping operation that generates a VOD playlist from its channel given a set of timestamp ranges. create dvr session create dvr session ( request : typing .
- Each clip represents a clipping operation that generates a VOD playlist from its channel given a set of timestamp ranges. get dvr session get dvr session ( request : typing .

