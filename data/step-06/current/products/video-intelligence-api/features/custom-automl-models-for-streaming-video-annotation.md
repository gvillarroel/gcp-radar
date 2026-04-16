---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:00.756Z"
product_name: "Video Intelligence API"
product_slug: "video-intelligence-api"
feature_name: "Custom AutoML models for streaming video annotation"
feature_slug: "custom-automl-models-for-streaming-video-annotation"
latest_feature_date: "2019-09-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming"
  - "https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse"
  - "https://docs.cloud.google.com/video-intelligence/docs/annotate-video-command-line"
  - "https://docs.cloud.google.com/video-intelligence/docs/annotate-video-client-libraries"
keywords:
  - "custom"
  - "automl"
  - "models"
  - "for"
  - "streaming"
  - "video"
  - "annotation"
  - "intelligence"
---

# Custom AutoML models for streaming video annotation

Product: Video Intelligence API
Coverage: MEDIUM

## Step 02 Summary

Video Intelligence API now supports using customer-owned AutoML models for label detection and object tracking on streaming video.

## Extended Definition

Video Intelligence API now supports using customer-owned AutoML models for label detection and object tracking on streaming video.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming](https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming)
- [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- [https://docs.cloud.google.com/video-intelligence/docs/annotate-video-command-line](https://docs.cloud.google.com/video-intelligence/docs/annotate-video-command-line)
- [https://docs.cloud.google.com/video-intelligence/docs/annotate-video-client-libraries](https://docs.cloud.google.com/video-intelligence/docs/annotate-video-client-libraries)

## Supporting Pages

### "How-to stream live videos \_|\_ Video Intelligence API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming](https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to use the binary from the command line. $ export GOOGLE APPLICATION CREDENTIALS = / path to credential /credential json $ export CONFIG = / path to config /config json $ export PIPE NAME = / path to pipe / name of pipe $ export TIMEOUT = 3600 $ ./streaming client main --alsologtostderr --endpoint "dns:///alpha-videointelligence.googleapis.com" \ --video path = $PIPE NAME --use pipe = true --config = $CONFIG --timeout = $TIMEOUT $GOOGLE APPLICATION CREDENTIALS specifies the file path of the JSON file containing your service account key.
- Step 3: Run GStreamer pipeline GStreamer supports multiple live streaming protocols including but not limited to: HTTP Live Streaming (HLS) Real-time Streaming Protocol (RTSP) Real-time Protocol (RTP) Real-time Messaging Protocol (RTMP) WebRTC Streaming from Webcam The Video Intelligence API uses the GStreamer pipeline to convert from these live streaming protocols to a decodable video stream, and writes the stream into the named pipe created in Step 1.
- The Video Intelligence Streaming API supports standard live streaming protocols like RTSP, RTMP, and HLS.
- To support live streaming protocols, the Video Intelligence API uses the GStreamer open media framework.

### AnnotateVideoResponse \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- Source ID: `site-api-reference`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Each will have list of frame information associated with it. objectAnnotations[] object ( ObjectTrackingAnnotation ) Annotations for list of objects detected and tracked in video. logoRecognitionAnnotations[] object ( LogoRecognitionAnnotation ) Annotations for list of logos detected, tracked and recognized in video. personDetectionAnnotations[] object ( PersonDetectionAnnotation ) Person detection annotations. error object ( Status ) If set, indicates an error.
- JSON representation { "entity" : { object ( Entity ) } , "tracks" : [ { object ( Track ) } ] , "segments" : [ { object ( VideoSegment ) } ] } Fields entity object ( Entity ) Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as. tracks[] object ( Track ) All logo tracks where the recognized logo appears.
- JSON representation { "annotationResults" : [ { object ( VideoAnnotationResults ) } ] } Fields annotationResults[] object ( VideoAnnotationResults ) Annotation results for all videos specified in AnnotateVideoRequest .
- There is exactly one element for each unique label. segmentPresenceLabelAnnotations[] object ( LabelAnnotation ) Presence label annotations on video level or user-specified segment level.

### "Quickstart: Annotate a video by using the command line \_|\_ Video Intelligence\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/annotate-video-command-line](https://docs.cloud.google.com/video-intelligence/docs/annotate-video-command-line)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- The results should look similar to the following: { "name" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID " , "metadata" : { "@type" : "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress" , "annotationProgress" : [ { "inputUri" : "videointelligence-quickstart-bucket/ YOUR OBJECT " , "progressPercent" : 100 , "startTime" : "2020-04-01T22:13:17.978847Z" , "updateTime" : "2020-04-01T22:13:29.576004Z" } ] }, "done" : true , "response" : { "@type" : "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse" , "annotationResults" : [ { "inputUri" : "/videointelligence-quickstart-bucket/ YOUR OBJECT " , "segmentLabelAnnotations" : [ { "entity" : { "entityId" : "/m/07bsy" , "description" : "transport" , "languageCode" : "en-US" }, "segments" : [ { "segment" : { "startTimeOffset" : "0s" , "endTimeOffset" : "38.757872s" }, "confidence" : 0.81231534 } ] }, { "entity" : { "entityId" : "/m/01n32" , "description" : "city" , "languageCode" : "en-US" }, "categoryEntities" : [ { "entityId" : "/m/043rvww" , "description" : "geographical feature" , "languageCode" : "en-US" } ], "segments" : [ { "segment" : { "startTimeOffset" : "0s" , "endTimeOffset" : "38.757872s" }, "confidence" : 0.3942462 } ] }, ... { "entity" : { "entityId" : "/m/06gfj" , "description" : "road" , "languageCode" : "en-US" }, "segments" : [ { "segment" : { "startTimeOffset" : "0s" , "endTimeOffset" : "38.757872s" }, "confidence" : 0.86698604 } ] } ] } ] } } Congratulations!
- If the operation has completed, a done field is included and set to true : { "name" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID " , "metadata" : { "@type" : "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress" , "annotationProgress" : [ { "inputUri" : "/videointelligence-quickstart-bucket/ YOUR OBJECT " , "progressPercent" : 100 , "startTime" : "2020-04-01T22:13:17.978847Z" , "updateTime" : "2020-04-01T22:13:29.576004Z" } ] }, "done" : true , ... } After about a minute, the request returns the annotation results.
- The response includes the operation name: { "name" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID " } You can request information on the operation by calling the v1.operations endpoint, replacing OPERATION NAME in the example below with the name returned in the previous step: curl -X GET \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ https://videointelligence.googleapis.com/v1/ OPERATION NAME This command returns information related to your operation.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, do one of the following: If you want to continue using the project that you created, then use the gcloud storage rm command with the --recursive flag to delete the bucket and anything inside of it: gcloud storage rm gs://videointelligence-quickstart-bucket --recursive If you don't need the project that you created for this quickstart, then delete the project.

### "Quickstart: Annotate a video by using client libraries \_|\_ Video Intelligence\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/annotate-video-client-libraries](https://docs.cloud.google.com/video-intelligence/docs/annotate-video-client-libraries)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- LABEL DETECTION ) . build (); OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > response = client . annotateVideoAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); List<VideoAnnotationResults> results = response . get (). getAnnotationResultsList (); if ( results . isEmpty ()) { System . out . println ( "No labels detected in " + gcsUri ); return ; } for ( VideoAnnotationResults result : results ) { System . out . println ( "Labels:" ); // get video segment label annotations for ( LabelAnnotation annotation : result . getSegmentLabelAnnotationsList ()) { System . out . println ( "Video label description : " + annotation . getEntity (). getDescription ()); // categories for ( Entity categoryEntity : annotation . getCategoryEntitiesList ()) { System . out . println ( "Label Category description : " + categoryEntity . getDescription ()); } // segments for ( LabelSegment segment : annotation . getSegmentsList ()) { double startTime = segment . getSegment (). getStartTimeOffset (). getSeconds () + segment . getSegment (). getStartTimeOffset (). getNanos () / 1e9 ; double endTime = segment . getSegment (). getEndTimeOffset (). getSeconds () + segment . getSegment (). getEndTimeOffset (). getNanos () / 1e9 ; System . out . printf ( "Segment location : %.3f:%.3f\n" , startTime , endTime ); System . out . println ( "Confidence : " + segment . getConfidence ()); } } } } } } Node.js Before running the example, make sure you've prepared your environment for Node.js development . // Imports the Google Cloud Video Intelligence library const videoIntelligence = require ( ' @google-cloud/video-intelligence ' ); // Creates a client const client = new videoIntelligence .
- LABEL DETECTION ] operation = video client . annotate video ( request = { "features" : features , "input uri" : "gs://cloud-samples-data/video/cat.mp4" , } ) print ( " \n Processing video for label annotations:" ) result = operation . result ( timeout = 180 ) print ( " \n Finished processing." ) first result is retrieved because a single video was processed segment labels = result . annotation results [ 0 ] . segment label annotations for i , segment label in enumerate ( segment labels ): print ( "Video label description: {} " . format ( segment label . entity . description )) for category entity in segment label . category entities : print ( " \t Label category description: {} " . format ( category entity . description ) ) for i , segment in enumerate ( segment label . segments ): start time = ( segment . segment . start time offset . seconds + segment . segment . start time offset . microseconds / 1e6 ) end time = ( segment . segment . end time offset . seconds + segment . segment . end time offset . microseconds / 1e6 ) positions = " {} s to {} s" . format ( start time , end time ) confidence = segment . confidence print ( " \t Segment {} : {} " . format ( i , positions )) print ( " \t Confidence: {} " . format ( confidence )) print ( " \n " ) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Video Intelligence reference documentation for .NET.
- VideoIntelligenceServiceClient (); // The GCS uri of the video to analyze const gcsUri = 'gs://cloud-samples-data/video/cat.mp4' ; // Construct request const request = { inputUri : gcsUri , features : [ 'LABEL DETECTION' ], }; // Execute request const [ operation ] = await client . annotateVideo ( request ); console . log ( 'Waiting for operation to complete... (this may take a few minutes)' ); const [ operationResult ] = await operation . promise (); // Gets annotations for video const annotations = operationResult . annotationResults [ 0 ]; // Gets labels for video from its annotations const labels = annotations . segmentLabelAnnotations ; labels . forEach ( label = > { console . log ( Label ${ label . entity . description } occurs at: ); label . segments . forEach ( segment = > { segment = segment . segment ; console . log ( \tStart: ${ segment . startTimeOffset . seconds } + . ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ segment . endTimeOffset . seconds } . + ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); }); }); Python Before running the example, make sure you've prepared your environment for Python development . from google.cloud import videointelligence video client = videointelligence .
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.79.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-video-intelligence</artifactId> </dependency> </dependencies> If you are using Gradle , add the following to your dependencies: implementation 'com.google.cloud:google-cloud-video-intelligence:2.87.0' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-video-intelligence" % "2.87.0" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.

