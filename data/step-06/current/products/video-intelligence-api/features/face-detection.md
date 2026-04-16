---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:00.754Z"
product_name: "Video Intelligence API"
product_slug: "video-intelligence-api"
feature_name: "Face detection"
feature_slug: "face-detection"
latest_feature_date: "2020-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/video-intelligence/docs/face-detection"
  - "https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection"
  - "https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse"
  - "https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection"
keywords:
  - "face"
  - "detection"
  - "locates"
  - "faces"
  - "within"
  - "video"
  - "and"
  - "identifies"
---

# Face detection

Product: Video Intelligence API
Coverage: MEDIUM

## Step 02 Summary

Face detection locates faces within a video and identifies attributes such as whether glasses are worn.

## Extended Definition

Face detection locates faces within a video and identifies attributes such as whether glasses are worn.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/video-intelligence/docs/face-detection](https://docs.cloud.google.com/video-intelligence/docs/face-detection)
- [https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection)
- [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- [https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection)

## Supporting Pages

### Detect faces \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/face-detection](https://docs.cloud.google.com/video-intelligence/docs/face-detection)
- Source ID: `site-iam-reference`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VideoIntelligenceServiceClient (); // Reads a local video file and converts it to base64 const file = fs . readFileSync ( path ); const inputContent = file . toString ( 'base64' ); async function detectFaces () { const request = { inputContent : inputContent , features : [ 'FACE DETECTION' ], videoContext : { faceDetectionConfig : { // Must set includeBoundingBoxes to true to get facial attributes. includeBoundingBoxes : true , includeAttributes : true , }, }, }; // Detects faces in a video // We get the first result because we only process 1 video const [ operation ] = await video . annotateVideo ( request ); const results = await operation . promise (); console . log ( 'Waiting for operation to complete...' ); // Gets annotations for video const faceAnnotations = results [ 0 ]. annotationResults [ 0 ]. faceDetectionAnnotations ; for ( const { tracks } of faceAnnotations ) { console . log ( 'Face detected:' ); for ( const { segment , timestampedObjects } of tracks ) { console . log ( \tStart: ${ segment . startTimeOffset . seconds } + . ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ segment . endTimeOffset . seconds } . + ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); // Each segment includes timestamped objects that // include characteristics of the face detected. const [ firstTimestapedObject ] = timestampedObjects ; for ( const { name } of firstTimestapedObject . attributes ) { // Attributes include 'glasses', 'headwear', 'smiling'. console . log ( \tAttribute: ${ name } ; ); } } } } detectFaces (); Python To authenticate to Video Intelligence, set up Application Default Credentials.
- FACE DETECTION ) . setVideoContext ( videoContext ) . build (); // Detects faces in a video OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > future = videoIntelligenceServiceClient . annotateVideoAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); AnnotateVideoResponse response = future . get (); // Gets annotations for video VideoAnnotationResults annotationResult = response . getAnnotationResultsList (). get ( 0 ); // Annotations for list of people detected, tracked and recognized in video. for ( FaceDetectionAnnotation faceDetectionAnnotation : annotationResult . getFaceDetectionAnnotationsList ()) { System . out . print ( "Face detected:\n" ); for ( Track track : faceDetectionAnnotation . getTracksList ()) { VideoSegment segment = track . getSegment (); System . out . printf ( "\tStart: %d.%.0fs\n" , segment . getStartTimeOffset (). getSeconds (), segment . getStartTimeOffset (). getNanos () / 1e6 ); System . out . printf ( "\tEnd: %d.%.0fs\n" , segment . getEndTimeOffset (). getSeconds (), segment . getEndTimeOffset (). getNanos () / 1e6 ); // Each segment includes timestamped objects that // include characteristics of the face detected.
- FACE DETECTION ) . setVideoContext ( videoContext ) . build (); // Detects faces in a video OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > future = videoIntelligenceServiceClient . annotateVideoAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); AnnotateVideoResponse response = future . get (); // Gets annotations for video VideoAnnotationResults annotationResult = response . getAnnotationResultsList (). get ( 0 ); // Annotations for list of faces detected, tracked and recognized in video. for ( FaceDetectionAnnotation faceDetectionAnnotation : annotationResult . getFaceDetectionAnnotationsList ()) { System . out . print ( "Face detected:\n" ); for ( Track track : faceDetectionAnnotation . getTracksList ()) { VideoSegment segment = track . getSegment (); System . out . printf ( "\tStart: %d.%.0fs\n" , segment . getStartTimeOffset (). getSeconds (), segment . getStartTimeOffset (). getNanos () / 1e6 ); System . out . printf ( "\tEnd: %d.%.0fs\n" , segment . getEndTimeOffset (). getSeconds (), segment . getEndTimeOffset (). getNanos () / 1e6 ); // Each segment includes timestamped objects that // include characteristics of the face detected.
- VideoIntelligenceServiceClient (); async function detectFacesGCS () { const request = { inputUri : gcsUri , features : [ 'FACE DETECTION' ], videoContext : { faceDetectionConfig : { // Must set includeBoundingBoxes to true to get facial attributes. includeBoundingBoxes : true , includeAttributes : true , }, }, }; // Detects faces in a video // We get the first result because we only process 1 video const [ operation ] = await video . annotateVideo ( request ); const results = await operation . promise (); console . log ( 'Waiting for operation to complete...' ); // Gets annotations for video const faceAnnotations = results [ 0 ]. annotationResults [ 0 ]. faceDetectionAnnotations ; for ( const { tracks } of faceAnnotations ) { console . log ( 'Face detected:' ); for ( const { segment , timestampedObjects } of tracks ) { console . log ( \tStart: ${ segment . startTimeOffset . seconds } . + ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ segment . endTimeOffset . seconds } . + ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); // Each segment includes timestamped objects that // include characteristics of the face detected. const [ firstTimestapedObject ] = timestampedObjects ; for ( const { name } of firstTimestapedObject . attributes ) { // Attributes include 'glasses', 'headwear', 'smiling'. console . log ( \tAttribute: ${ name } ; ); } } } } detectFacesGCS (); Python To authenticate to Video Intelligence, set up Application Default Credentials.

### Face detection \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection)
- Source ID: `site-iam-reference`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Video Intelligence API Face detection feature looks for faces in a video and returns: The video segment , or segments in which a face is detected, across all videos in the given request.
- Home Documentation AI and ML Video Intelligence API Guides Send feedback Face detection Stay organized with collections Save and categorize content based on your preferences.
- To enable attribute detection set the includeAttributes field within FaceDetectionConfig to True . (note: You must also set includeBoundingBoxes to True ).
- Does not include small objects that hold the hair (e.g., hair pins). frontal gaze Whether the person's eyes are looking directly into the camera as opposed to simply have both eyes visible. eyes visible The sclera (white of the eye) is visible for both eyes. glasses The person is wearing glasses on their face and over their eyes.

### AnnotateVideoResponse \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation VideoAnnotationResults JSON representation LabelAnnotation JSON representation Entity JSON representation LabelSegment JSON representation LabelFrame JSON representation FaceAnnotation JSON representation FaceSegment JSON representation FaceFrame JSON representation NormalizedBoundingBox JSON representation FaceDetectionAnnotation JSON representation Track JSON representation TimestampedObject JSON representation DetectedAttribute JSON representation DetectedLandmark JSON representation NormalizedVertex JSON representation ExplicitContentAnnotation JSON representation ExplicitContentFrame JSON representation SpeechTranscription JSON representation SpeechRecognitionAlternative JSON representation WordInfo JSON representation TextAnnotation JSON representation TextSegment JSON representation TextFrame JSON representation NormalizedBoundingPoly JSON representation ObjectTrackingAnnotation JSON representation ObjectTrackingFrame JSON representation LogoRecognitionAnnotation JSON representation PersonDetectionAnnotation JSON representation Video annotation response.
- FaceSegment Video segment level annotation results for face detection.
- JSON representation { "inputUri" : string , "segment" : { object ( VideoSegment ) } , "segmentLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "segmentPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "frameLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "faceAnnotations" : [ { object ( FaceAnnotation ) } ] , "faceDetectionAnnotations" : [ { object ( FaceDetectionAnnotation ) } ] , "shotAnnotations" : [ { object ( VideoSegment ) } ] , "explicitAnnotation" : { object ( ExplicitContentAnnotation ) } , "speechTranscriptions" : [ { object ( SpeechTranscription ) } ] , "textAnnotations" : [ { object ( TextAnnotation ) } ] , "objectAnnotations" : [ { object ( ObjectTrackingAnnotation ) } ] , "logoRecognitionAnnotations" : [ { object ( LogoRecognitionAnnotation ) } ] , "personDetectionAnnotations" : [ { object ( PersonDetectionAnnotation ) } ] , "error" : { object ( Status ) } } Fields inputUri string Video file location in Cloud Storage . segment object ( VideoSegment ) Video segment on which the annotation is run. segmentLabelAnnotations[] object ( LabelAnnotation ) Topical label annotations on video level or user-specified segment level.
- Each will have list of frame information associated with it. objectAnnotations[] object ( ObjectTrackingAnnotation ) Annotations for list of objects detected and tracked in video. logoRecognitionAnnotations[] object ( LogoRecognitionAnnotation ) Annotations for list of logos detected, tracked and recognized in video. personDetectionAnnotations[] object ( PersonDetectionAnnotation ) Person detection annotations. error object ( Status ) If set, indicates an error.

### "Analyze videos for labels \_|\_ Video Intelligence API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection)
- Source ID: `site-iam-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- The Video Intelligence API can identify entities shown in video footage using the LABEL DETECTION feature and annotate these entities with labels (tags).
- For details, see Shot change detection Frame level: Entities are identified and labeled within each frame (with one frame per second sampling).
- To detect labels in a video, call the annotate method and specify LABEL DETECTION in the features field.
- See Analyzing Videos for Labels and Label Detection Tutorial .

