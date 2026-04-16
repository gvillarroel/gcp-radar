---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:00.755Z"
product_name: "Video Intelligence API"
product_slug: "video-intelligence-api"
feature_name: "Celebrity recognition"
feature_slug: "celebrity-recognition"
latest_feature_date: "2019-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/video-intelligence/docs/celebrity-recognition"
  - "https://docs.cloud.google.com/video-intelligence/docs/face-detection"
  - "https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse"
  - "https://docs.cloud.google.com/video-intelligence/docs/people-detection"
keywords:
  - "celebrity"
  - "recognition"
  - "detects"
  - "and"
  - "tracks"
  - "human"
  - "faces"
  - "in"
---

# Celebrity recognition

Product: Video Intelligence API
Coverage: MEDIUM

## Step 02 Summary

Celebrity recognition detects and tracks human faces in videos and matches them to a curated celebrity database.

## Extended Definition

Celebrity recognition detects and tracks human faces in videos and matches them to a curated celebrity database.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/video-intelligence/docs/celebrity-recognition](https://docs.cloud.google.com/video-intelligence/docs/celebrity-recognition)
- [https://docs.cloud.google.com/video-intelligence/docs/face-detection](https://docs.cloud.google.com/video-intelligence/docs/face-detection)
- [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- [https://docs.cloud.google.com/video-intelligence/docs/people-detection](https://docs.cloud.google.com/video-intelligence/docs/people-detection)

## Supporting Pages

### Recognize celebrities \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/celebrity-recognition](https://docs.cloud.google.com/video-intelligence/docs/celebrity-recognition)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://videointelligence.googleapis.com/v1/ OPERATION NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress", "annotationProgress": [ { "inputUri": " INPUT URI ", "progressPercent": 100, "startTime": "2020-05-12T19:36:09.110351Z", "updateTime": "2020-05-12T19:36:17.519069Z" } ] }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse", "annotationResults": [ { ... } ] } } The output from annotating the video should look similar to the following example. { "annotationResults": [ { "inputUri": " INPUT URI , "segment": { "startTimeOffset": { }, "endTimeOffset": { "seconds": 19, "nanos": 519500000 } }, "celebrityRecognitionAnnotations": { "celebrityTracks": [ { "celebrities": [...], "faceTrack": {...} }, { "celebrities": [ { "celebrity": { "name": "video-intelligence/ CELEBRITY MID ", "displayName": " CELEBRITY NAME/var>" }, "confidence": 0.81873637 } ], "faceTrack": { "segment": { "startTimeOffset": { "seconds": 1, "nanos": 459791000 }, "endTimeOffset": { "seconds": 3, "nanos": 712041000 } }, "timestampedObjects": [ { "normalizedBoundingBox": {...}, "timeOffset": {...} }, { "normalizedBoundingBox": { "left": 0.38046876, "top": 0.26249999, "right": 0.60312498, "bottom": 0.72361112 }, "timeOffset": { "seconds": 1, "nanos": 459791000 } }, { "normalizedBoundingBox": {...}, "timeOffset": {...} }] } }, { "celebrities": [...], "faceTrack": {...} } ] } ... } Request celebrity opt-out If you are a celebrity and would like not to be included in this feature for either the Cloud Vision or Video Intelligence API please submit this form .
- PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: POST https://videointelligence.googleapis.com/v1p3beta1/videos:annotate Request JSON body: { "inputUri": "gs:// INPUT URI ", "outputUri": "gs:// OUTPUT URI ", "features": ["CELEBRITY RECOGNITION"] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- The Video Intelligence API can inspect your video content to detect and track human faces that appear in the input video or video segment.
- If a match is found, the Video Intelligence API provides the Knowledge Graph Machine ID (MID) and the name of the celebrity and a bounding box indicating where the face appears in the video.

### Detect faces \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/face-detection](https://docs.cloud.google.com/video-intelligence/docs/face-detection)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- VideoIntelligenceServiceClient (); // Reads a local video file and converts it to base64 const file = fs . readFileSync ( path ); const inputContent = file . toString ( 'base64' ); async function detectFaces () { const request = { inputContent : inputContent , features : [ 'FACE DETECTION' ], videoContext : { faceDetectionConfig : { // Must set includeBoundingBoxes to true to get facial attributes. includeBoundingBoxes : true , includeAttributes : true , }, }, }; // Detects faces in a video // We get the first result because we only process 1 video const [ operation ] = await video . annotateVideo ( request ); const results = await operation . promise (); console . log ( 'Waiting for operation to complete...' ); // Gets annotations for video const faceAnnotations = results [ 0 ]. annotationResults [ 0 ]. faceDetectionAnnotations ; for ( const { tracks } of faceAnnotations ) { console . log ( 'Face detected:' ); for ( const { segment , timestampedObjects } of tracks ) { console . log ( \tStart: ${ segment . startTimeOffset . seconds } + . ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ segment . endTimeOffset . seconds } . + ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); // Each segment includes timestamped objects that // include characteristics of the face detected. const [ firstTimestapedObject ] = timestampedObjects ; for ( const { name } of firstTimestapedObject . attributes ) { // Attributes include 'glasses', 'headwear', 'smiling'. console . log ( \tAttribute: ${ name } ; ); } } } } detectFaces (); Python To authenticate to Video Intelligence, set up Application Default Credentials.
- FACE DETECTION ) . setVideoContext ( videoContext ) . build (); // Detects faces in a video OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > future = videoIntelligenceServiceClient . annotateVideoAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); AnnotateVideoResponse response = future . get (); // Gets annotations for video VideoAnnotationResults annotationResult = response . getAnnotationResultsList (). get ( 0 ); // Annotations for list of people detected, tracked and recognized in video. for ( FaceDetectionAnnotation faceDetectionAnnotation : annotationResult . getFaceDetectionAnnotationsList ()) { System . out . print ( "Face detected:\n" ); for ( Track track : faceDetectionAnnotation . getTracksList ()) { VideoSegment segment = track . getSegment (); System . out . printf ( "\tStart: %d.%.0fs\n" , segment . getStartTimeOffset (). getSeconds (), segment . getStartTimeOffset (). getNanos () / 1e6 ); System . out . printf ( "\tEnd: %d.%.0fs\n" , segment . getEndTimeOffset (). getSeconds (), segment . getEndTimeOffset (). getNanos () / 1e6 ); // Each segment includes timestamped objects that // include characteristics of the face detected.
- FACE DETECTION ) . setVideoContext ( videoContext ) . build (); // Detects faces in a video OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > future = videoIntelligenceServiceClient . annotateVideoAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); AnnotateVideoResponse response = future . get (); // Gets annotations for video VideoAnnotationResults annotationResult = response . getAnnotationResultsList (). get ( 0 ); // Annotations for list of faces detected, tracked and recognized in video. for ( FaceDetectionAnnotation faceDetectionAnnotation : annotationResult . getFaceDetectionAnnotationsList ()) { System . out . print ( "Face detected:\n" ); for ( Track track : faceDetectionAnnotation . getTracksList ()) { VideoSegment segment = track . getSegment (); System . out . printf ( "\tStart: %d.%.0fs\n" , segment . getStartTimeOffset (). getSeconds (), segment . getStartTimeOffset (). getNanos () / 1e6 ); System . out . printf ( "\tEnd: %d.%.0fs\n" , segment . getEndTimeOffset (). getSeconds (), segment . getEndTimeOffset (). getNanos () / 1e6 ); // Each segment includes timestamped objects that // include characteristics of the face detected.
- VideoIntelligenceServiceClient (); async function detectFacesGCS () { const request = { inputUri : gcsUri , features : [ 'FACE DETECTION' ], videoContext : { faceDetectionConfig : { // Must set includeBoundingBoxes to true to get facial attributes. includeBoundingBoxes : true , includeAttributes : true , }, }, }; // Detects faces in a video // We get the first result because we only process 1 video const [ operation ] = await video . annotateVideo ( request ); const results = await operation . promise (); console . log ( 'Waiting for operation to complete...' ); // Gets annotations for video const faceAnnotations = results [ 0 ]. annotationResults [ 0 ]. faceDetectionAnnotations ; for ( const { tracks } of faceAnnotations ) { console . log ( 'Face detected:' ); for ( const { segment , timestampedObjects } of tracks ) { console . log ( \tStart: ${ segment . startTimeOffset . seconds } . + ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ segment . endTimeOffset . seconds } . + ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); // Each segment includes timestamped objects that // include characteristics of the face detected. const [ firstTimestapedObject ] = timestampedObjects ; for ( const { name } of firstTimestapedObject . attributes ) { // Attributes include 'glasses', 'headwear', 'smiling'. console . log ( \tAttribute: ${ name } ; ); } } } } detectFacesGCS (); Python To authenticate to Video Intelligence, set up Application Default Credentials.

### AnnotateVideoResponse \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- Source ID: `site-api-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation VideoAnnotationResults JSON representation LabelAnnotation JSON representation Entity JSON representation LabelSegment JSON representation LabelFrame JSON representation FaceAnnotation JSON representation FaceSegment JSON representation FaceFrame JSON representation NormalizedBoundingBox JSON representation FaceDetectionAnnotation JSON representation Track JSON representation TimestampedObject JSON representation DetectedAttribute JSON representation DetectedLandmark JSON representation NormalizedVertex JSON representation ExplicitContentAnnotation JSON representation ExplicitContentFrame JSON representation SpeechTranscription JSON representation SpeechRecognitionAlternative JSON representation WordInfo JSON representation TextAnnotation JSON representation TextSegment JSON representation TextFrame JSON representation NormalizedBoundingPoly JSON representation ObjectTrackingAnnotation JSON representation ObjectTrackingFrame JSON representation LogoRecognitionAnnotation JSON representation PersonDetectionAnnotation JSON representation Video annotation response.
- Each will have list of frame information associated with it. objectAnnotations[] object ( ObjectTrackingAnnotation ) Annotations for list of objects detected and tracked in video. logoRecognitionAnnotations[] object ( LogoRecognitionAnnotation ) Annotations for list of logos detected, tracked and recognized in video. personDetectionAnnotations[] object ( PersonDetectionAnnotation ) Person detection annotations. error object ( Status ) If set, indicates an error.
- JSON representation { "entity" : { object ( Entity ) } , "tracks" : [ { object ( Track ) } ] , "segments" : [ { object ( VideoSegment ) } ] } Fields entity object ( Entity ) Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as. tracks[] object ( Track ) All logo tracks where the recognized logo appears.
- LogoRecognitionAnnotation Annotation corresponding to one detected, tracked and recognized logo class.

### Detect people \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/people-detection](https://docs.cloud.google.com/video-intelligence/docs/people-detection)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- VideoIntelligenceServiceClient (); / TODO(developer): Uncomment the following line before running the sample. / // const path = 'Local file to analyze, e.g. ./my-file.mp4'; // Reads a local video file and converts it to base64 const file = fs . readFileSync ( path ); const inputContent = file . toString ( 'base64' ); async function detectPerson () { const request = { inputContent : inputContent , features : [ 'PERSON DETECTION' ], videoContext : { personDetectionConfig : { // Must set includeBoundingBoxes to true to get poses and attributes. includeBoundingBoxes : true , includePoseLandmarks : true , includeAttributes : true , }, }, }; // Detects faces in a video // We get the first result because we only process 1 video const [ operation ] = await video . annotateVideo ( request ); const results = await operation . promise (); console . log ( 'Waiting for operation to complete...' ); // Gets annotations for video const personAnnotations = results [ 0 ]. annotationResults [ 0 ]. personDetectionAnnotations ; for ( const { tracks } of personAnnotations ) { console . log ( 'Person detected:' ); for ( const { segment , timestampedObjects } of tracks ) { console . log ( \tStart: ${ segment . startTimeOffset . seconds } + . ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ segment . endTimeOffset . seconds } . + ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); // Each segment includes timestamped objects that // include characteristic--e.g. clothes, posture // of the person detected. const [ firstTimestampedObject ] = timestampedObjects ; // Attributes include unique pieces of clothing, poses (i.e., body // landmarks) of the person detected. for ( const { name , value } of firstTimestampedObject . attributes ) { console . log ( \tAttribute: ${ name } ; Value: ${ value } ); } // Landmarks in person detection include body parts. for ( const { name , point } of firstTimestampedObject . landmarks ) { console . log ( \tLandmark: ${ name } ; Vertex: ${ point . x } , ${ point . y } ); } } } } detectPerson (); Python To authenticate to Video Intelligence, set up Application Default Credentials.
- VideoIntelligenceServiceClient (); async function detectPersonGCS () { const request = { inputUri : gcsUri , features : [ 'PERSON DETECTION' ], videoContext : { personDetectionConfig : { // Must set includeBoundingBoxes to true to get poses and attributes. includeBoundingBoxes : true , includePoseLandmarks : true , includeAttributes : true , }, }, }; // Detects faces in a video // We get the first result because we only process 1 video const [ operation ] = await video . annotateVideo ( request ); const results = await operation . promise (); console . log ( 'Waiting for operation to complete...' ); // Gets annotations for video const personAnnotations = results [ 0 ]. annotationResults [ 0 ]. personDetectionAnnotations ; for ( const { tracks } of personAnnotations ) { console . log ( 'Person detected:' ); for ( const { segment , timestampedObjects } of tracks ) { console . log ( \tStart: ${ segment . startTimeOffset . seconds } + . ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ segment . endTimeOffset . seconds } . + ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); // Each segment includes timestamped objects that // include characteristic--e.g. clothes, posture // of the person detected. const [ firstTimestampedObject ] = timestampedObjects ; // Attributes include unique pieces of clothing, poses (i.e., body // landmarks) of the person detected. for ( const { name , value } of firstTimestampedObject . attributes ) { console . log ( \tAttribute: ${ name } ; Value: ${ value } ); } // Landmarks in person detection include body parts. for ( const { name , point } of firstTimestampedObject . landmarks ) { console . log ( \tLandmark: ${ name } ; Vertex: ${ point . x } , ${ point . y } ); } } } } detectPersonGCS (); Python To authenticate to Video Intelligence, set up Application Default Credentials.
- OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > future = videoIntelligenceServiceClient . annotateVideoAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); AnnotateVideoResponse response = future . get (); // Gets annotations for video VideoAnnotationResults annotationResult = response . getAnnotationResultsList (). get ( 0 ); // Annotations for list of people detected, tracked and recognized in video. for ( PersonDetectionAnnotation personDetectionAnnotation : annotationResult . getPersonDetectionAnnotationsList ()) { System . out . print ( "Person detected:\n" ); for ( Track track : personDetectionAnnotation . getTracksList ()) { VideoSegment segment = track . getSegment (); System . out . printf ( "\tStart: %d.%.0fs\n" , segment . getStartTimeOffset (). getSeconds (), segment . getStartTimeOffset (). getNanos () / 1e6 ); System . out . printf ( "\tEnd: %d.%.0fs\n" , segment . getEndTimeOffset (). getSeconds (), segment . getEndTimeOffset (). getNanos () / 1e6 ); // Each segment includes timestamped objects that include characteristic--e.g. clothes, // posture of the person detected.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://videointelligence.googleapis.com/v1/ OPERATION NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "us-west1.10001026834554604237", "metadata": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress", "annotationProgress": [ { "inputUri": "/cloud-ml-sandbox/video/chicago.mp4", "progressPercent": 100, "startTime": "2020-02-08T21:26:56.577807Z", "updateTime": "2020-02-08T21:28:09.620665Z" } ] }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse", "annotationResults": [ { "inputUri": "/cloud-ml-sandbox/video/chicago.mp4", "personDetectionAnnotations": [ { "tracks": [ { "segment": { "startTimeOffset": "0s", "endTimeOffset": "1.507436s" } }, ... ] } ] } ] } } Shot detection annotations are returned as a shotAnnotations list.

