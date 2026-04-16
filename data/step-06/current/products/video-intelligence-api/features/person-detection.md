---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:00.754Z"
product_name: "Video Intelligence API"
product_slug: "video-intelligence-api"
feature_name: "Person detection"
feature_slug: "person-detection"
latest_feature_date: "2020-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/video-intelligence/docs/people-detection"
  - "https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse"
  - "https://docs.cloud.google.com/video-intelligence/docs/annotate-video-command-line"
  - "https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection"
keywords:
  - "person"
  - "detection"
  - "locates"
  - "people"
  - "in"
  - "video"
  - "and"
  - "identifies"
---

# Person detection

Product: Video Intelligence API
Coverage: MEDIUM

## Step 02 Summary

Person detection locates people in a video and identifies attributes and 2D landmarks.

## Extended Definition

Person detection locates people in a video and identifies attributes and 2D landmarks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/video-intelligence/docs/people-detection](https://docs.cloud.google.com/video-intelligence/docs/people-detection)
- [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- [https://docs.cloud.google.com/video-intelligence/docs/annotate-video-command-line](https://docs.cloud.google.com/video-intelligence/docs/annotate-video-command-line)
- [https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection)

## Supporting Pages

### Detect people \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/people-detection](https://docs.cloud.google.com/video-intelligence/docs/people-detection)
- Source ID: `site-docs-root`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > future = videoIntelligenceServiceClient . annotateVideoAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); AnnotateVideoResponse response = future . get (); // Gets annotations for video VideoAnnotationResults annotationResult = response . getAnnotationResultsList (). get ( 0 ); // Annotations for list of people detected, tracked and recognized in video. for ( PersonDetectionAnnotation personDetectionAnnotation : annotationResult . getPersonDetectionAnnotationsList ()) { System . out . print ( "Person detected:\n" ); for ( Track track : personDetectionAnnotation . getTracksList ()) { VideoSegment segment = track . getSegment (); System . out . printf ( "\tStart: %d.%.0fs\n" , segment . getStartTimeOffset (). getSeconds (), segment . getStartTimeOffset (). getNanos () / 1e6 ); System . out . printf ( "\tEnd: %d.%.0fs\n" , segment . getEndTimeOffset (). getSeconds (), segment . getEndTimeOffset (). getNanos () / 1e6 ); // Each segment includes timestamped objects that include characteristic--e.g. clothes, // posture of the person detected.
- VideoAnnotationResults annotationResult = response . getAnnotationResultsList (). get ( 0 ); // Annotations for list of people detected, tracked and recognized in video. for ( PersonDetectionAnnotation personDetectionAnnotation : annotationResult . getPersonDetectionAnnotationsList ()) { System . out . print ( "Person detected:\n" ); for ( Track track : personDetectionAnnotation . getTracksList ()) { VideoSegment segment = track . getSegment (); System . out . printf ( "\tStart: %d.%.0fs\n" , segment . getStartTimeOffset (). getSeconds (), segment . getStartTimeOffset (). getNanos () / 1e6 ); System . out . printf ( "\tEnd: %d.%.0fs\n" , segment . getEndTimeOffset (). getSeconds (), segment . getEndTimeOffset (). getNanos () / 1e6 ); // Each segment includes timestamped objects that include characteristic--e.g. clothes, // posture of the person detected.
- VideoIntelligenceServiceClient (); / TODO(developer): Uncomment the following line before running the sample. / // const path = 'Local file to analyze, e.g. ./my-file.mp4'; // Reads a local video file and converts it to base64 const file = fs . readFileSync ( path ); const inputContent = file . toString ( 'base64' ); async function detectPerson () { const request = { inputContent : inputContent , features : [ 'PERSON DETECTION' ], videoContext : { personDetectionConfig : { // Must set includeBoundingBoxes to true to get poses and attributes. includeBoundingBoxes : true , includePoseLandmarks : true , includeAttributes : true , }, }, }; // Detects faces in a video // We get the first result because we only process 1 video const [ operation ] = await video . annotateVideo ( request ); const results = await operation . promise (); console . log ( 'Waiting for operation to complete...' ); // Gets annotations for video const personAnnotations = results [ 0 ]. annotationResults [ 0 ]. personDetectionAnnotations ; for ( const { tracks } of personAnnotations ) { console . log ( 'Person detected:' ); for ( const { segment , timestampedObjects } of tracks ) { console . log ( \tStart: ${ segment . startTimeOffset . seconds } + . ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ segment . endTimeOffset . seconds } . + ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); // Each segment includes timestamped objects that // include characteristic--e.g. clothes, posture // of the person detected. const [ firstTimestampedObject ] = timestampedObjects ; // Attributes include unique pieces of clothing, poses (i.e., body // landmarks) of the person detected. for ( const { name , value } of firstTimestampedObject . attributes ) { console . log ( \tAttribute: ${ name } ; Value: ${ value } ); } // Landmarks in person detection include body parts. for ( const { name , point } of firstTimestampedObject . landmarks ) { console . log ( \tLandmark: ${ name } ; Vertex: ${ point . x } , ${ point . y } ); } } } } detectPerson (); Python To authenticate to Video Intelligence, set up Application Default Credentials.
- VideoIntelligenceServiceClient (); async function detectPersonGCS () { const request = { inputUri : gcsUri , features : [ 'PERSON DETECTION' ], videoContext : { personDetectionConfig : { // Must set includeBoundingBoxes to true to get poses and attributes. includeBoundingBoxes : true , includePoseLandmarks : true , includeAttributes : true , }, }, }; // Detects faces in a video // We get the first result because we only process 1 video const [ operation ] = await video . annotateVideo ( request ); const results = await operation . promise (); console . log ( 'Waiting for operation to complete...' ); // Gets annotations for video const personAnnotations = results [ 0 ]. annotationResults [ 0 ]. personDetectionAnnotations ; for ( const { tracks } of personAnnotations ) { console . log ( 'Person detected:' ); for ( const { segment , timestampedObjects } of tracks ) { console . log ( \tStart: ${ segment . startTimeOffset . seconds } + . ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ segment . endTimeOffset . seconds } . + ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); // Each segment includes timestamped objects that // include characteristic--e.g. clothes, posture // of the person detected. const [ firstTimestampedObject ] = timestampedObjects ; // Attributes include unique pieces of clothing, poses (i.e., body // landmarks) of the person detected. for ( const { name , value } of firstTimestampedObject . attributes ) { console . log ( \tAttribute: ${ name } ; Value: ${ value } ); } // Landmarks in person detection include body parts. for ( const { name , point } of firstTimestampedObject . landmarks ) { console . log ( \tLandmark: ${ name } ; Vertex: ${ point . x } , ${ point . y } ); } } } } detectPersonGCS (); Python To authenticate to Video Intelligence, set up Application Default Credentials.

### AnnotateVideoResponse \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- Source ID: `site-api-reference`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation VideoAnnotationResults JSON representation LabelAnnotation JSON representation Entity JSON representation LabelSegment JSON representation LabelFrame JSON representation FaceAnnotation JSON representation FaceSegment JSON representation FaceFrame JSON representation NormalizedBoundingBox JSON representation FaceDetectionAnnotation JSON representation Track JSON representation TimestampedObject JSON representation DetectedAttribute JSON representation DetectedLandmark JSON representation NormalizedVertex JSON representation ExplicitContentAnnotation JSON representation ExplicitContentFrame JSON representation SpeechTranscription JSON representation SpeechRecognitionAlternative JSON representation WordInfo JSON representation TextAnnotation JSON representation TextSegment JSON representation TextFrame JSON representation NormalizedBoundingPoly JSON representation ObjectTrackingAnnotation JSON representation ObjectTrackingFrame JSON representation LogoRecognitionAnnotation JSON representation PersonDetectionAnnotation JSON representation Video annotation response.
- Each will have list of frame information associated with it. objectAnnotations[] object ( ObjectTrackingAnnotation ) Annotations for list of objects detected and tracked in video. logoRecognitionAnnotations[] object ( LogoRecognitionAnnotation ) Annotations for list of logos detected, tracked and recognized in video. personDetectionAnnotations[] object ( PersonDetectionAnnotation ) Person detection annotations. error object ( Status ) If set, indicates an error.
- JSON representation { "inputUri" : string , "segment" : { object ( VideoSegment ) } , "segmentLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "segmentPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "frameLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "faceAnnotations" : [ { object ( FaceAnnotation ) } ] , "faceDetectionAnnotations" : [ { object ( FaceDetectionAnnotation ) } ] , "shotAnnotations" : [ { object ( VideoSegment ) } ] , "explicitAnnotation" : { object ( ExplicitContentAnnotation ) } , "speechTranscriptions" : [ { object ( SpeechTranscription ) } ] , "textAnnotations" : [ { object ( TextAnnotation ) } ] , "objectAnnotations" : [ { object ( ObjectTrackingAnnotation ) } ] , "logoRecognitionAnnotations" : [ { object ( LogoRecognitionAnnotation ) } ] , "personDetectionAnnotations" : [ { object ( PersonDetectionAnnotation ) } ] , "error" : { object ( Status ) } } Fields inputUri string Video file location in Cloud Storage . segment object ( VideoSegment ) Video segment on which the annotation is run. segmentLabelAnnotations[] object ( LabelAnnotation ) Topical label annotations on video level or user-specified segment level.
- Compared to the existing topical segmentLabelAnnotations , this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets LabelDetectionConfig.model to "builtin/latest" in the request. shotLabelAnnotations[] object ( LabelAnnotation ) Topical label annotations on shot level.

### "Quickstart: Annotate a video by using the command line \_|\_ Video Intelligence\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/annotate-video-command-line](https://docs.cloud.google.com/video-intelligence/docs/annotate-video-command-line)
- Source ID: `site-api-reference`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- If the operation has completed, a done field is included and set to true : { "name" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID " , "metadata" : { "@type" : "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress" , "annotationProgress" : [ { "inputUri" : "/videointelligence-quickstart-bucket/ YOUR OBJECT " , "progressPercent" : 100 , "startTime" : "2020-04-01T22:13:17.978847Z" , "updateTime" : "2020-04-01T22:13:29.576004Z" } ] }, "done" : true , ... } After about a minute, the request returns the annotation results.
- The response includes the operation name: { "name" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID " } You can request information on the operation by calling the v1.operations endpoint, replacing OPERATION NAME in the example below with the name returned in the previous step: curl -X GET \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ https://videointelligence.googleapis.com/v1/ OPERATION NAME This command returns information related to your operation.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, do one of the following: If you want to continue using the project that you created, then use the gcloud storage rm command with the --recursive flag to delete the bucket and anything inside of it: gcloud storage rm gs://videointelligence-quickstart-bucket --recursive If you don't need the project that you created for this quickstart, then delete the project.
- To initialize the gcloud CLI, run the following command: gcloud init Required roles To get the permissions that you need to annotate a video, ask your administrator to grant you the following IAM roles on the project: Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Face detection \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection)
- Source ID: `site-iam-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Video Intelligence API Face detection feature looks for faces in a video and returns: The video segment , or segments in which a face is detected, across all videos in the given request.
- Home Documentation AI and ML Video Intelligence API Guides Send feedback Face detection Stay organized with collections Save and categorize content based on your preferences.
- Does not include small objects that hold the hair (e.g., hair pins). frontal gaze Whether the person's eyes are looking directly into the camera as opposed to simply have both eyes visible. eyes visible The sclera (white of the eye) is visible for both eyes. glasses The person is wearing glasses on their face and over their eyes.
- Possible boolean attributes: Attribute Description headwear The person is wearing a hat, cap, scarf and so on.

