---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.910Z"
product_name: "Live Stream API"
product_slug: "live-stream-api"
feature_name: "VPC Service Controls integration"
feature_slug: "vpc-service-controls-integration"
latest_feature_date: "2023-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient"
  - "https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream"
  - "https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls"
keywords:
  - "vpc"
  - "controls"
  - "integration"
  - "allows"
  - "securing"
  - "live"
  - "streams"
  - "with"
---

# VPC Service Controls integration

Product: Live Stream API
Coverage: MEDIUM

## Step 02 Summary

Allows securing live streams with VPC Service Controls.

## Extended Definition

Allows securing live streams with VPC Service Controls.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient)
- [https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream](https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream)
- [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls)

## Supporting Pages

### "Class LivestreamServiceAsyncClient (1.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class LivestreamServiceAsyncClient (1.16.0) Stay organized with collections Save and categorize content based on your preferences.
- If a Callable is given, it will be called with the same set of initialization arguments as used in the LivestreamServiceTransport constructor.
- You can only update the following fields: - inputAttachments - inputConfig <code> <https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#inputconfig></code> - <pre>output https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#output - elementaryStreams https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#elementarystream - muxStreams - manifests <code> <https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#manifest></code> - <pre>spriteSheets https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#spritesheet - logConfig https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#logconfig - timecodeConfig - encryptions https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#encryption The fields specified in the update mask are relative to the resource, not the full request.
- Returns Type Description google.cloud.video.live stream v1.types.Channel Channel resource represents the processor that does a user-defined "streaming" operation, which includes getting an input stream through an input, transcoding it to multiple renditions, and publishing output live streams in certain formats (for example, HLS or DASH) to the specified location. get clip get clip ( request : typing .

### "Class LivestreamServiceClient (1.16.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient)
- Source ID: `site-python-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class LivestreamServiceClient (1.16.0) Stay organized with collections Save and categorize content based on your preferences.
- If a Callable is given, it will be called with the same set of initialization arguments as used in the LivestreamServiceTransport constructor.
- You can only update the following fields: - inputAttachments - inputConfig <code> <https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#inputconfig></code> - <pre>output https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#output - elementaryStreams https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#elementarystream - muxStreams - manifests <code> <https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#manifest></code> - <pre>spriteSheets https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#spritesheet - logConfig https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#logconfig - timecodeConfig - encryptions https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#encryption The fields specified in the update mask are relative to the resource, not the full request.
- Returns Type Description google.cloud.video.live stream v1.types.Channel Channel resource represents the processor that does a user-defined "streaming" operation, which includes getting an input stream through an input, transcoding it to multiple renditions, and publishing output live streams in certain formats (for example, HLS or DASH) to the specified location. get clip get clip ( request : typing .

### "Create a channel with a backup input stream \_|\_ Live Stream API \_|\_\

- URL: [https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream](https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream)
- Source ID: `site-iam-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Video\LiveStream\V1\AudioStream; use Google\Cloud\Video\LiveStream\V1\Channel; use Google\Cloud\Video\LiveStream\V1\ElementaryStream; use Google\Cloud\Video\LiveStream\V1\InputAttachment; use Google\Cloud\Video\LiveStream\V1\Client\LivestreamServiceClient; use Google\Cloud\Video\LiveStream\V1\CreateChannelRequest; use Google\Cloud\Video\LiveStream\V1\Manifest; use Google\Cloud\Video\LiveStream\V1\MuxStream; use Google\Cloud\Video\LiveStream\V1\SegmentSettings; use Google\Cloud\Video\LiveStream\V1\VideoStream; use Google\Protobuf\Duration; / Creates a channel with a backup input. @param string $callingProjectId The project ID to run the API call under @param string $location The location of the channel @param string $channelId The ID of the channel to be created @param string $primaryInputId The ID of the primary input for the channel @param string $backupInputId The ID of the backup input for the channel @param string $outputUri Uri of the channel output folder in a Cloud Storage bucket. (e.g. "gs://my-bucket/my-output-folder/") / function create channel with backup input( string $callingProjectId, string $location, string $channelId, string $primaryInputId, string $backupInputId, string $outputUri ): void { // Instantiate a client. $livestreamClient = new LivestreamServiceClient(); $parent = $livestreamClient->locationName($callingProjectId, $location); $channelName = $livestreamClient->channelName($callingProjectId, $location, $channelId); $primaryInputName = $livestreamClient->inputName($callingProjectId, $location, $primaryInputId); $backupInputName = $livestreamClient->inputName($callingProjectId, $location, $backupInputId); $channel = (new Channel()) ->setName($channelName) ->setInputAttachments([ new InputAttachment([ 'key' => 'my-primary-input', 'input' => $primaryInputName, 'automatic failover' => new InputAttachment\AutomaticFailover([ 'input keys' => ['my-backup-input'] ]) ]), new InputAttachment([ 'key' => 'my-backup-input', 'input' => $backupInputName ]) ]) ->setElementaryStreams([ new ElementaryStream([ 'key' => 'es video', 'video stream' => new VideoStream([ 'h264' => new VideoStream\H264CodecSettings([ 'profile' => 'high', 'width pixels' => 1280, 'height pixels' => 720, 'bitrate bps' => 3000000, 'frame rate' => 30 ]) ]), ]), new ElementaryStream([ 'key' => 'es audio', 'audio stream' => new AudioStream([ 'codec' => 'aac', 'channel count' => 2, 'bitrate bps' => 160000 ]) ]) ]) ->setOutput(new Channel\Output(['uri' => $outputUri])) ->setMuxStreams([ new MuxStream([ 'key' => 'mux video', 'elementary streams' => ['es video'], 'segment settings' => new SegmentSettings([ 'segment duration' => new Duration(['seconds' => 2]) ]) ]), new MuxStream([ 'key' => 'mux audio', 'elementary streams' => ['es audio'], 'segment settings' => new SegmentSettings([ 'segment duration' => new Duration(['seconds' => 2]) ]) ]), ]) ->setManifests([ new Manifest([ 'file name' => 'manifest.m3u8', 'type' => Manifest\ManifestType::HLS, 'mux streams' => ['mux video', 'mux audio'], 'max segment count' => 5 ]) ]); // Run the channel creation request.
- For more information, see Set up authentication for a local development environment . require "google/cloud/video/live stream" Create a channel with a failover backup input @param project id [String] Your Google Cloud project (e.g. "my-project") @param location [String] The location (e.g. "us-central1") @param channel id [String] Your channel name (e.g. "my-channel") @param primary input id [String] Your primary input name (e.g. "my-primary-input") @param backup input id [String] Your backup input name (e.g. "my-backup-input") @param output uri [String] Uri of the channel output folder in a Cloud Storage bucket. (e.g. "gs://my-bucket/my-output-folder/";) def create channel with backup input project id :, location :, channel id :, primary input id :, backup input id :, output uri : Create a Live Stream client. client = Google :: Cloud :: Video :: LiveStream . livestream service Build the resource name of the parent. parent = client . location path project : project id , location : location Build the resource name of the inputs. primary input path = client . input path project : project id , location : location , input : primary input id backup input path = client . input path project : project id , location : location , input : backup input id Set the channel fields. new channel = { input attachments : [ { key : "my-primary-input" , input : primary input path , automatic failover : { input keys : [ "my-backup-input" ] } }, { key : "my-backup-input" , input : backup input path } ] , output : { uri : output uri }, elementary streams : [ { key : "es video" , video stream : { h264 : { profile : "high" , bitrate bps : 3 000 000 , frame rate : 30 , height pixels : 720 , width pixels : 1280 } } }, { key : "es audio" , audio stream : { codec : "aac" , channel count : 2 , bitrate bps : 160 000 } } ] , mux streams : [ { key : "mux video" , elementary streams : [ "es video" ] , segment settings : { segment duration : { seconds : 2 } } }, { key : "mux audio" , elementary streams : [ "es audio" ] , segment settings : { segment duration : { seconds : 2 } } } ] , manifests : [ { file name : "main.m3u8" , type : Google :: Cloud :: Video :: LiveStream :: V1 :: Manifest :: ManifestType :: HLS , mux streams : [ "mux video" , "mux audio" ] , max segment count : 5 } ] } operation = client . create channel parent : parent , channel : new channel , channel id : channel id The returned object is of type Gapic::Operation.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // projectId = 'my-project-id'; // location = 'us-central1'; // channelId = 'my-channel'; // primaryInputId = 'my-primary-input'; // backupInputId = 'my-backup-input'; // outputUri = 'gs://my-bucket/my-output-folder/'; // Imports the Livestream library const { LivestreamServiceClient } = require ( ' @google-cloud/livestream ' ). v1 ; // Instantiates a client const livestreamServiceClient = new LivestreamServiceClient (); async function createChannelWithBackupInput () { // Construct request const request = { parent : livestreamServiceClient . locationPath ( projectId , location ), channelId : channelId , channel : { inputAttachments : [ { key : 'my-primary-input' , input : livestreamServiceClient . inputPath ( projectId , location , primaryInputId ), automaticFailover : { inputKeys : [ 'my-backup-input' ], }, }, { key : 'my-backup-input' , input : livestreamServiceClient . inputPath ( projectId , location , backupInputId ), }, ], output : { uri : outputUri , }, elementaryStreams : [ { key : 'es video' , videoStream : { h264 : { profile : 'high' , heightPixels : 720 , widthPixels : 1280 , bitrateBps : 3000000 , frameRate : 30 , }, }, }, { key : 'es audio' , audioStream : { codec : 'aac' , channelCount : 2 , bitrateBps : 160000 , }, }, ], muxStreams : [ { key : 'mux video' , elementaryStreams : [ 'es video' ], segmentSettings : { seconds : 2 , }, }, { key : 'mux audio' , elementaryStreams : [ 'es audio' ], segmentSettings : { seconds : 2 , }, }, ], manifests : [ { fileName : 'manifest.m3u8' , type : ' HLS ' , muxStreams : [ 'mux video' , 'mux audio' ], maxSegmentCount : 5 , }, ], }, }; // Run request const [ operation ] = await livestreamServiceClient . createChannel ( request ); const response = await operation . promise (); const [ channel ] = response ; console . log ( Channel: ${ channel . name } ` ); } createChannelWithBackupInput (); PHP To learn how to install and use the client library for Live Stream API, see Live Stream API client libraries .
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID ", "automaticFailover": { "inputKeys": ["input-backup"] } }, { "key": "input-backup", "input": "projects/ PROJECT NUMBER /locations/ LOCATION /inputs/ BACKUP INPUT ID " } ], "output": { "uri": "gs:// BUCKET NAME " }, "elementaryStreams": [ { "key": "es video", "videoStream": { "h264": { "profile": "high", "widthPixels": 1280, "heightPixels": 720, "bitrateBps": 3000000, "frameRate": 30 } } }, { "key": "es audio", "audioStream": { "codec": "aac", "channelCount": 2, "bitrateBps": 160000 } } ], "muxStreams": [ { "key": "mux video", "elementaryStreams": [ "es video" ], "segmentSettings": { "segmentDuration": "2s" } }, { "key": "mux audio", "elementaryStreams": [ "es audio" ], "segmentSettings": { "segmentDuration": "2s" } } ], "manifests": [ { "key": "manifest dash", "fileName": "main.mpd", "type": "DASH", "muxStreams": [ "mux video", "mux audio" ], "maxSegmentCount": 5 } ] } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://livestream.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /channels?channelId= CHANNEL ID " PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Quickstart for an HLS live stream \_|\_ Live Stream API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json PROJECT NUMBER /locations/ LOCATION /inputs/ INPUT ID " } ], "output": { "uri": "gs:// BUCKET NAME " }, "elementaryStreams": [ { "key": "es video", "videoStream": { "h264": { "profile": "high", "widthPixels": 1280, "heightPixels": 720, "bitrateBps": 3000000, "frameRate": 30 } } }, { "key": "es audio", "audioStream": { "codec": "aac", "channelCount": 2, "bitrateBps": 160000 } } ], "muxStreams": [ { "key": "mux video ts", "container": "ts", "elementaryStreams": ["es video", "es audio"], "segmentSettings": { "segmentDuration": "2s" } } ], "manifests": [ { "key": "manifest hls", "fileName": "main.m3u8", "type": "HLS", "muxStreams": [ "mux video ts" ], "maxSegmentCount": 5 } ] } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://livestream.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /channels?channelId= CHANNEL ID " PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- In this example, try-with-resources is used // which automatically calls close() on the client to clean up resources. try ( LivestreamServiceClient livestreamServiceClient = LivestreamServiceClient . create ()) { var createEventRequest = CreateEventRequest . newBuilder () . setParent ( ChannelName . of ( projectId , location , channelId ). toString ()) . setEventId ( eventId ) . setEvent ( Event . newBuilder () . setAdBreak ( AdBreakTask . newBuilder () . setDuration ( Duration . newBuilder (). setSeconds ( 30 ). build ()) . build ()) . setExecuteNow ( true ) . build ()) . build (); Event response = livestreamServiceClient . createEvent ( createEventRequest ); System . out . println ( "Channel event: " + response . getName ()); } } } Node.js To learn how to install and use the client library for Live Stream API, see Live Stream API client libraries .
- In this example, try-with-resources is used // which automatically calls close() on the client to clean up resources. try ( LivestreamServiceClient livestreamServiceClient = LivestreamServiceClient . create ()) { var deleteEventRequest = DeleteEventRequest . newBuilder () . setName ( EventName . of ( projectId , location , channelId , eventId ). toString ()) . build (); livestreamServiceClient . deleteEvent ( deleteEventRequest ); System . out . println ( "Deleted channel event" ); } } } Node.js To learn how to install and use the client library for Live Stream API, see Live Stream API client libraries .
- In this example, try-with-resources is used // which automatically calls close() on the client to clean up resources. try ( LivestreamServiceClient livestreamServiceClient = LivestreamServiceClient . create ()) { ChannelName name = ChannelName . of ( projectId , location , channelId ); Channel response = livestreamServiceClient . getChannel ( name ); System . out . println ( "Channel: " + response . getName ()); } } } Node.js To learn how to install and use the client library for Live Stream API, see Live Stream API client libraries .

