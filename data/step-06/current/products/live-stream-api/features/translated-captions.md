---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.906Z"
product_name: "Live Stream API"
product_slug: "live-stream-api"
feature_name: "Translated captions"
feature_slug: "translated-captions"
latest_feature_date: "2025-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations"
  - "https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient"
  - "https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls"
keywords:
  - "translated"
  - "captions"
  - "generates"
  - "for"
  - "live"
  - "stream"
---

# Translated captions

Product: Live Stream API
Coverage: MEDIUM

## Step 02 Summary

Generates translated captions for a live stream.

## Extended Definition

Generates translated captions for a live stream.

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
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID :stop" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.video.livestream.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID ", "verb": "stop", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Update the channel configuration for a translation Update the channel configuration to include translated captions (that is, a translation).
- This page explains how to configure AI-generated captions and translated captions (that is, translations) for a live stream.
- Verify the translation in the output manifest Run the following command to see the contents of the generated HLS manifest: gcloud storage cat gs:// BUCKET NAME /main.m3u8 The AI-generated webvtt English and Spanish captions show up in the output manifest similar to the following: #EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="sub",LANGUAGE="en-US",NAME="English (AI captioned)",AUTOSELECT=YES,DEFAULT=YES,FORCED=NO,URI="vtt english ai/index-1.m3u8" #EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="sub",LANGUAGE="es-MX",NAME="Spanish (AI captioned)",AUTOSELECT=NO,DEFAULT=NO,FORCED=NO,URI="vtt spanish ai/index-1.m3u8" Configure AI-generated transcripts for distribution Before configuring AI-generated captions and translations for distribution, familiarize yourself with how to distribute live streams to remote endpoints .
- Note the following additions to the channel configuration: One ElementaryStream , a TextStream , is used for the captions for a single translated language. { "key" : "webvtt spanish ai" , "textStream" : { "codec" : "webvtt" , "displayName" : "Spanish (AI captioned)" , "languageCode" : "es-MX" , "mapping" : [ { "inputTrack" : 1 , // audio track number "fromLanguageCode" : "en-US" // original audio in English } ] } } Set languageCode to the chosen translated language.

### "Class LivestreamServiceAsyncClient (1.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 208
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
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateDvrSessionRequest ( parent="parent value", dvr session id="dvr session id value", dvr session=dvr session, ) Make the request operation = client. create dvr session (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.video.live stream v1.types.CreateDvrSessionRequest , dict] The request object.
- Returns Type Description google.cloud.video.live stream v1.types.Channel Channel resource represents the processor that does a user-defined "streaming" operation, which includes getting an input stream through an input, transcoding it to multiple renditions, and publishing output live streams in certain formats (for example, HLS or DASH) to the specified location. get clip get clip ( request : typing .
- The result type for the operation will be Channel Channel resource represents the processor that does a user-defined "streaming" operation, which includes getting an input stream through an input, transcoding it to multiple renditions, and publishing output live streams in certain formats (for example, HLS or DASH) to the specified location. update dvr session update dvr session ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 def sample create dvr session(): Create a client client = live stream v1 .

### "Quickstart for an HLS live stream \_|\_ Live Stream API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Video\LiveStream\V1\AudioStream; use Google\Cloud\Video\LiveStream\V1\Channel; use Google\Cloud\Video\LiveStream\V1\ElementaryStream; use Google\Cloud\Video\LiveStream\V1\InputAttachment; use Google\Cloud\Video\LiveStream\V1\Client\LivestreamServiceClient; use Google\Cloud\Video\LiveStream\V1\CreateChannelRequest; use Google\Cloud\Video\LiveStream\V1\Manifest; use Google\Cloud\Video\LiveStream\V1\MuxStream; use Google\Cloud\Video\LiveStream\V1\SegmentSettings; use Google\Cloud\Video\LiveStream\V1\VideoStream; use Google\Protobuf\Duration; / Creates a channel. @param string $callingProjectId The project ID to run the API call under @param string $location The location of the channel @param string $channelId The ID of the channel to be created @param string $inputId The ID of the input for the channel @param string $outputUri Uri of the channel output folder in a Cloud Storage bucket. (e.g. "gs://my-bucket/my-output-folder/") / function create channel( string $callingProjectId, string $location, string $channelId, string $inputId, string $outputUri ): void { // Instantiate a client. $livestreamClient = new LivestreamServiceClient(); $parent = $livestreamClient->locationName($callingProjectId, $location); $channelName = $livestreamClient->channelName($callingProjectId, $location, $channelId); $inputName = $livestreamClient->inputName($callingProjectId, $location, $inputId); $channel = (new Channel()) ->setName($channelName) ->setInputAttachments([ new InputAttachment([ 'key' => 'my-input', 'input' => $inputName ]) ]) ->setElementaryStreams([ new ElementaryStream([ 'key' => 'es video', 'video stream' => new VideoStream([ 'h264' => new VideoStream\H264CodecSettings([ 'profile' => 'high', 'width pixels' => 1280, 'height pixels' => 720, 'bitrate bps' => 3000000, 'frame rate' => 30 ]) ]), ]), new ElementaryStream([ 'key' => 'es audio', 'audio stream' => new AudioStream([ 'codec' => 'aac', 'channel count' => 2, 'bitrate bps' => 160000 ]) ]) ]) ->setOutput(new Channel\Output(['uri' => $outputUri])) ->setMuxStreams([ new MuxStream([ 'key' => 'mux video', 'elementary streams' => ['es video'], 'segment settings' => new SegmentSettings([ 'segment duration' => new Duration(['seconds' => 2]) ]) ]), new MuxStream([ 'key' => 'mux audio', 'elementary streams' => ['es audio'], 'segment settings' => new SegmentSettings([ 'segment duration' => new Duration(['seconds' => 2]) ]) ]), ]) ->setManifests([ new Manifest([ 'file name' => 'manifest.m3u8', 'type' => Manifest\ManifestType::HLS, 'mux streams' => ['mux video', 'mux audio'], 'max segment count' => 5 ]) ]); // Run the channel creation request.
- For more information, see Set up authentication for a local development environment . require "google/cloud/video/live stream" Create a channel @param project id [String] Your Google Cloud project (e.g. "my-project") @param location [String] The location (e.g. "us-central1") @param channel id [String] Your channel name (e.g. "my-channel") @param input id [String] Your input name (e.g. "my-input") @param output uri [String] Uri of the channel output folder in a Cloud Storage bucket. (e.g. "gs://my-bucket/my-output-folder/";) def create channel project id :, location :, channel id :, input id :, output uri : Create a Live Stream client. client = Google :: Cloud :: Video :: LiveStream . livestream service Build the resource name of the parent. parent = client . location path project : project id , location : location Build the resource name of the input. input path = client . input path project : project id , location : location , input : input id Set the channel fields. new channel = { input attachments : [ { key : "my-input" , input : input path } ] , output : { uri : output uri }, elementary streams : [ { key : "es video" , video stream : { h264 : { profile : "high" , bitrate bps : 3 000 000 , frame rate : 30 , height pixels : 720 , width pixels : 1280 } } }, { key : "es audio" , audio stream : { codec : "aac" , channel count : 2 , bitrate bps : 160 000 } } ] , mux streams : [ { key : "mux video" , elementary streams : [ "es video" ] , segment settings : { segment duration : { seconds : 2 } } }, { key : "mux audio" , elementary streams : [ "es audio" ] , segment settings : { segment duration : { seconds : 2 } } } ] , manifests : [ { file name : "main.m3u8" , type : Google :: Cloud :: Video :: LiveStream :: V1 :: Manifest :: ManifestType :: HLS , mux streams : [ "mux video" , "mux audio" ] , max segment count : 5 } ] } operation = client . create channel parent : parent , channel : new channel , channel id : channel id The returned object is of type Gapic::Operation.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "inputAttachments": [ { "key": "my-input", "input": "projects/ PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID " } ], "output": { "uri": "gs:// BUCKET NAME " }, "elementaryStreams": [ { "key": "es video", "videoStream": { "h264": { "profile": "high", "widthPixels": 1280, "heightPixels": 720, "bitrateBps": 3000000, "frameRate": 30 } } }, { "key": "es audio", "audioStream": { "codec": "aac", "channelCount": 2, "bitrateBps": 160000 } } ], "muxStreams": [ { "key": "mux video ts", "container": "ts", "elementaryStreams": ["es video", "es audio"], "segmentSettings": { "segmentDuration": "2s" } } ], "manifests": [ { "key": "manifest hls", "fileName": "main.m3u8", "type": "HLS", "muxStreams": [ "mux video ts" ], "maxSegmentCount": 5 } ] } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /channels?channelId= CHANNEL ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.video.livestream.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } C# To learn how to install and use the client library for Live Stream API, see Live Stream API client libraries .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // projectId = 'my-project-id'; // location = 'us-central1'; // channelId = 'my-channel'; // inputId = 'my-input'; // outputUri = 'gs://my-bucket/my-output-folder/'; // Imports the Livestream library const { LivestreamServiceClient } = require ( ' @google-cloud/livestream ' ). v1 ; // Instantiates a client const livestreamServiceClient = new LivestreamServiceClient (); async function createChannel () { // Construct request const request = { parent : livestreamServiceClient . locationPath ( projectId , location ), channelId : channelId , channel : { inputAttachments : [ { key : 'my-input' , input : livestreamServiceClient . inputPath ( projectId , location , inputId ), }, ], output : { uri : outputUri , }, elementaryStreams : [ { key : 'es video' , videoStream : { h264 : { profile : 'high' , heightPixels : 720 , widthPixels : 1280 , bitrateBps : 3000000 , frameRate : 30 , }, }, }, { key : 'es audio' , audioStream : { codec : 'aac' , channelCount : 2 , bitrateBps : 160000 , }, }, ], muxStreams : [ { key : 'mux video' , elementaryStreams : [ 'es video' ], segmentSettings : { seconds : 2 , }, }, { key : 'mux audio' , elementaryStreams : [ 'es audio' ], segmentSettings : { seconds : 2 , }, }, ], manifests : [ { fileName : 'manifest.m3u8' , type : ' HLS ' , muxStreams : [ 'mux video' , 'mux audio' ], maxSegmentCount : 5 , }, ], }, }; // Run request const [ operation ] = await livestreamServiceClient . createChannel ( request ); const response = await operation . promise (); const [ channel ] = response ; console . log ( Channel: ${ channel . name } ); } createChannel (); PHP To learn how to install and use the client library for Live Stream API, see Live Stream API client libraries .

