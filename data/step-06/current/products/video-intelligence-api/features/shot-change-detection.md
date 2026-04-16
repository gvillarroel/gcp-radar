---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:00.762Z"
product_name: "Video Intelligence API"
product_slug: "video-intelligence-api"
feature_name: "Shot change detection"
feature_slug: "shot-change-detection"
latest_feature_date: "2017-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/video-intelligence/docs/analyze-shots"
  - "https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection"
  - "https://docs.cloud.google.com/video-intelligence/docs/features"
  - "https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse"
keywords:
  - "shot"
  - "change"
  - "detection"
  - "analyzes"
  - "video"
  - "and"
  - "identifies"
  - "scene"
---

# Shot change detection

Product: Video Intelligence API
Coverage: MEDIUM

## Step 02 Summary

Shot change detection analyzes a video and identifies scene transitions via the annotate method using SHOT_CHANGE_DETECTION requests.

## Extended Definition

Shot change detection analyzes a video and identifies scene transitions via the annotate method using SHOT_CHANGE_DETECTION requests.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/video-intelligence/docs/analyze-shots](https://docs.cloud.google.com/video-intelligence/docs/analyze-shots)
- [https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection)
- [https://docs.cloud.google.com/video-intelligence/docs/features](https://docs.cloud.google.com/video-intelligence/docs/features)
- [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)

## Supporting Pages

### Detect shot changes \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/analyze-shots](https://docs.cloud.google.com/video-intelligence/docs/analyze-shots)
- Source ID: `site-iam-reference`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VideoIntelligenceServiceClient (); / TODO(developer): Uncomment the following line before running the sample. / // const gcsUri = 'GCS URI of file to analyze, e.g. gs://my-bucket/my-video.mp4'; const request = { inputUri : gcsUri , features : [ 'SHOT CHANGE DETECTION' ], }; // Detects camera shot changes const [ operation ] = await client . annotateVideo ( request ); console . log ( 'Waiting for operation to complete...' ); const [ operationResult ] = await operation . promise (); // Gets shot changes const shotChanges = operationResult . annotationResults [ 0 ]. shotAnnotations ; console . log ( 'Shot changes:' ); if ( shotChanges . length === 1 ) { console . log ( 'The entire video is one shot.' ); } else { shotChanges . forEach (( shot , shotIdx ) = > { console . log ( Scene ${ shotIdx } occurs from: ); if ( shot . startTimeOffset === undefined ) { shot . startTimeOffset = {}; } if ( shot . endTimeOffset === undefined ) { shot . endTimeOffset = {}; } if ( shot . startTimeOffset . seconds === undefined ) { shot . startTimeOffset . seconds = 0 ; } if ( shot . startTimeOffset . nanos === undefined ) { shot . startTimeOffset . nanos = 0 ; } if ( shot . endTimeOffset . seconds === undefined ) { shot . endTimeOffset . seconds = 0 ; } if ( shot . endTimeOffset . nanos === undefined ) { shot . endTimeOffset . nanos = 0 ; } console . log ( \tStart: ${ shot . startTimeOffset . seconds } + . ${ ( shot . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ shot . endTimeOffset . seconds } . + ${ ( shot . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); }); } Python For more information on installing and using the Video Intelligence API Client Library for Python, refer to Video Intelligence API Client Libraries . """Detects camera shot changes.""" video client = videointelligence .
- SHOT CHANGE DETECTION ] operation = video client . annotate video ( request = { "features" : features , "input uri" : path } ) print ( " \n Processing video for shot change annotations:" ) result = operation . result ( timeout = 90 ) print ( " \n Finished processing." ) first result is retrieved because a single video was processed for i , shot in enumerate ( result . annotation results [ 0 ] . shot annotations ): start time = ( shot . start time offset . seconds + shot . start time offset . microseconds / 1e6 ) end time = ( shot . end time offset . seconds + shot . end time offset . microseconds / 1e6 ) print ( " \t Shot {} : {} to {} " . format ( i , start time , end time )) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Video Intelligence reference documentation for .NET.
- PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: POST https://videointelligence.googleapis.com/v1/videos:annotate Request JSON body: { "inputUri": " INPUT URI ", "features": ["SHOT CHANGE DETECTION"] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > response = client . annotateVideoAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); // Print detected shot changes and their location ranges in the analyzed video. for ( VideoAnnotationResults result : response . get (). getAnnotationResultsList ()) { if ( result . getShotAnnotationsCount () > 0 ) { System . out . println ( "Shots: " ); for ( VideoSegment segment : result . getShotAnnotationsList ()) { double startTime = segment . getStartTimeOffset (). getSeconds () + segment . getStartTimeOffset (). getNanos () / 1e9 ; double endTime = segment . getEndTimeOffset (). getSeconds () + segment . getEndTimeOffset (). getNanos () / 1e9 ; System . out . printf ( "Location: %.3f:%.3f\n" , startTime , endTime ); } } else { System . out . println ( "No shot changes detected in " + gcsUri ); } } } Node.js To authenticate to Video Intelligence, set up Application Default Credentials.

### "Analyze videos for labels \_|\_ Video Intelligence API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection)
- Source ID: `site-iam-reference`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- For details, see Shot change detection Frame level: Entities are identified and labeled within each frame (with one frame per second sampling).
- The Video Intelligence API can identify entities shown in video footage using the LABEL DETECTION feature and annotate these entities with labels (tags).
- To detect labels in a video, call the annotate method and specify LABEL DETECTION in the features field.
- Shot level: Shots (also known as a scene ) are automatically detected within every segment (or video).

### Features \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/features](https://docs.cloud.google.com/video-intelligence/docs/features)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Shot change detection Learn about shot change detection and annotation.
- Home Documentation AI and ML Video Intelligence API Guides Send feedback Features Stay organized with collections Save and categorize content based on your preferences.
- Explicit content detection Learn about detecting adult content within a video.
- Person detection Learn person detection and attribute extraction.

### AnnotateVideoResponse \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Compared to the existing topical segmentLabelAnnotations , this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets LabelDetectionConfig.model to "builtin/latest" in the request. shotLabelAnnotations[] object ( LabelAnnotation ) Topical label annotations on shot level.
- Compared to the existing topical shotLabelAnnotations , this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets LabelDetectionConfig.model to "builtin/latest" in the request. frameLabelAnnotations[] object ( LabelAnnotation ) Label annotations on frame level.
- Each shot is represented as a video segment. explicitAnnotation object ( ExplicitContentAnnotation ) Explicit content annotation. speechTranscriptions[] object ( SpeechTranscription ) Speech transcription. textAnnotations[] object ( TextAnnotation ) OCR text detection and tracking.
- JSON representation { "inputUri" : string , "segment" : { object ( VideoSegment ) } , "segmentLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "segmentPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "frameLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "faceAnnotations" : [ { object ( FaceAnnotation ) } ] , "faceDetectionAnnotations" : [ { object ( FaceDetectionAnnotation ) } ] , "shotAnnotations" : [ { object ( VideoSegment ) } ] , "explicitAnnotation" : { object ( ExplicitContentAnnotation ) } , "speechTranscriptions" : [ { object ( SpeechTranscription ) } ] , "textAnnotations" : [ { object ( TextAnnotation ) } ] , "objectAnnotations" : [ { object ( ObjectTrackingAnnotation ) } ] , "logoRecognitionAnnotations" : [ { object ( LogoRecognitionAnnotation ) } ] , "personDetectionAnnotations" : [ { object ( PersonDetectionAnnotation ) } ] , "error" : { object ( Status ) } } Fields inputUri string Video file location in Cloud Storage . segment object ( VideoSegment ) Video segment on which the annotation is run. segmentLabelAnnotations[] object ( LabelAnnotation ) Topical label annotations on video level or user-specified segment level.

