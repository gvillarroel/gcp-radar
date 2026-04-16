---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:00.753Z"
product_name: "Video Intelligence API"
product_slug: "video-intelligence-api"
feature_name: "Video Intelligence API Face Detection"
feature_slug: "video-intelligence-api-face-detection"
latest_feature_date: "2021-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/video-intelligence/docs/face-detection"
  - "https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection"
  - "https://docs.cloud.google.com/video-intelligence/docs/people-detection"
  - "https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch"
keywords:
  - "video"
  - "intelligence"
  - "api"
  - "face"
  - "detection"
  - "detects"
  - "faces"
  - "in"
---

# Video Intelligence API Face Detection

Product: Video Intelligence API
Coverage: MEDIUM

## Step 02 Summary

Detects faces in video content and identifies attributes such as whether glasses are being worn.

## Extended Definition

Detects faces in video content and identifies attributes such as whether glasses are being worn.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/video-intelligence/docs/face-detection](https://docs.cloud.google.com/video-intelligence/docs/face-detection)
- [https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection)
- [https://docs.cloud.google.com/video-intelligence/docs/people-detection](https://docs.cloud.google.com/video-intelligence/docs/people-detection)
- [https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch](https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch)

## Supporting Pages

### Detect faces \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/face-detection](https://docs.cloud.google.com/video-intelligence/docs/face-detection)
- Source ID: `site-iam-reference`
- Final score: 401
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- String gcsUri = "gs://cloud-samples-data/video/googlework short.mp4" ; detectFacesGcs ( gcsUri ); } // Detects faces in a video stored in Google Cloud Storage using the Cloud Video Intelligence API. public static void detectFacesGcs ( String gcsUri ) throws Exception { try ( VideoIntelligenceServiceClient videoIntelligenceServiceClient = VideoIntelligenceServiceClient . create ()) { FaceDetectionConfig faceDetectionConfig = FaceDetectionConfig . newBuilder () // Must set includeBoundingBoxes to true to get facial attributes. . setIncludeBoundingBoxes ( true ) . setIncludeAttributes ( true ) . build (); VideoContext videoContext = VideoContext . newBuilder (). setFaceDetectionConfig ( faceDetectionConfig ). build (); AnnotateVideoRequest request = AnnotateVideoRequest . newBuilder () . setInputUri ( gcsUri ) . addFeatures ( Feature .
- VideoIntelligenceServiceClient (); // Reads a local video file and converts it to base64 const file = fs . readFileSync ( path ); const inputContent = file . toString ( 'base64' ); async function detectFaces () { const request = { inputContent : inputContent , features : [ 'FACE DETECTION' ], videoContext : { faceDetectionConfig : { // Must set includeBoundingBoxes to true to get facial attributes. includeBoundingBoxes : true , includeAttributes : true , }, }, }; // Detects faces in a video // We get the first result because we only process 1 video const [ operation ] = await video . annotateVideo ( request ); const results = await operation . promise (); console . log ( 'Waiting for operation to complete...' ); // Gets annotations for video const faceAnnotations = results [ 0 ]. annotationResults [ 0 ]. faceDetectionAnnotations ; for ( const { tracks } of faceAnnotations ) { console . log ( 'Face detected:' ); for ( const { segment , timestampedObjects } of tracks ) { console . log ( \tStart: ${ segment . startTimeOffset . seconds } + . ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ segment . endTimeOffset . seconds } . + ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); // Each segment includes timestamped objects that // include characteristics of the face detected. const [ firstTimestapedObject ] = timestampedObjects ; for ( const { name } of firstTimestapedObject . attributes ) { // Attributes include 'glasses', 'headwear', 'smiling'. console . log ( \tAttribute: ${ name } ; ); } } } } detectFaces (); Python To authenticate to Video Intelligence, set up Application Default Credentials.
- VideoIntelligenceServiceClient (); async function detectFacesGCS () { const request = { inputUri : gcsUri , features : [ 'FACE DETECTION' ], videoContext : { faceDetectionConfig : { // Must set includeBoundingBoxes to true to get facial attributes. includeBoundingBoxes : true , includeAttributes : true , }, }, }; // Detects faces in a video // We get the first result because we only process 1 video const [ operation ] = await video . annotateVideo ( request ); const results = await operation . promise (); console . log ( 'Waiting for operation to complete...' ); // Gets annotations for video const faceAnnotations = results [ 0 ]. annotationResults [ 0 ]. faceDetectionAnnotations ; for ( const { tracks } of faceAnnotations ) { console . log ( 'Face detected:' ); for ( const { segment , timestampedObjects } of tracks ) { console . log ( \tStart: ${ segment . startTimeOffset . seconds } . + ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ segment . endTimeOffset . seconds } . + ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); // Each segment includes timestamped objects that // include characteristics of the face detected. const [ firstTimestapedObject ] = timestampedObjects ; for ( const { name } of firstTimestapedObject . attributes ) { // Attributes include 'glasses', 'headwear', 'smiling'. console . log ( \tAttribute: ${ name } ; ); } } } } detectFacesGCS (); Python To authenticate to Video Intelligence, set up Application Default Credentials.
- FACE DETECTION ) . setVideoContext ( videoContext ) . build (); // Detects faces in a video OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > future = videoIntelligenceServiceClient . annotateVideoAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); AnnotateVideoResponse response = future . get (); // Gets annotations for video VideoAnnotationResults annotationResult = response . getAnnotationResultsList (). get ( 0 ); // Annotations for list of people detected, tracked and recognized in video. for ( FaceDetectionAnnotation faceDetectionAnnotation : annotationResult . getFaceDetectionAnnotationsList ()) { System . out . print ( "Face detected:\n" ); for ( Track track : faceDetectionAnnotation . getTracksList ()) { VideoSegment segment = track . getSegment (); System . out . printf ( "\tStart: %d.%.0fs\n" , segment . getStartTimeOffset (). getSeconds (), segment . getStartTimeOffset (). getNanos () / 1e6 ); System . out . printf ( "\tEnd: %d.%.0fs\n" , segment . getEndTimeOffset (). getSeconds (), segment . getEndTimeOffset (). getNanos () / 1e6 ); // Each segment includes timestamped objects that // include characteristics of the face detected.

### Face detection \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection)
- Source ID: `site-iam-reference`
- Final score: 351
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Video Intelligence API Face detection feature looks for faces in a video and returns: The video segment , or segments in which a face is detected, across all videos in the given request.
- Home Documentation AI and ML Video Intelligence API Guides Send feedback Face detection Stay organized with collections Save and categorize content based on your preferences.
- Video Intelligence API Visualizer Check out the Video Intelligence API visualizer to see this feature in action.
- To enable attribute detection set the includeAttributes field within FaceDetectionConfig to True . (note: You must also set includeBoundingBoxes to True ).

### Detect people \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/people-detection](https://docs.cloud.google.com/video-intelligence/docs/people-detection)
- Source ID: `site-docs-root`
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VideoIntelligenceServiceClient (); / TODO(developer): Uncomment the following line before running the sample. / // const path = 'Local file to analyze, e.g. ./my-file.mp4'; // Reads a local video file and converts it to base64 const file = fs . readFileSync ( path ); const inputContent = file . toString ( 'base64' ); async function detectPerson () { const request = { inputContent : inputContent , features : [ 'PERSON DETECTION' ], videoContext : { personDetectionConfig : { // Must set includeBoundingBoxes to true to get poses and attributes. includeBoundingBoxes : true , includePoseLandmarks : true , includeAttributes : true , }, }, }; // Detects faces in a video // We get the first result because we only process 1 video const [ operation ] = await video . annotateVideo ( request ); const results = await operation . promise (); console . log ( 'Waiting for operation to complete...' ); // Gets annotations for video const personAnnotations = results [ 0 ]. annotationResults [ 0 ]. personDetectionAnnotations ; for ( const { tracks } of personAnnotations ) { console . log ( 'Person detected:' ); for ( const { segment , timestampedObjects } of tracks ) { console . log ( \tStart: ${ segment . startTimeOffset . seconds } + . ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ segment . endTimeOffset . seconds } . + ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); // Each segment includes timestamped objects that // include characteristic--e.g. clothes, posture // of the person detected. const [ firstTimestampedObject ] = timestampedObjects ; // Attributes include unique pieces of clothing, poses (i.e., body // landmarks) of the person detected. for ( const { name , value } of firstTimestampedObject . attributes ) { console . log ( \tAttribute: ${ name } ; Value: ${ value } ); } // Landmarks in person detection include body parts. for ( const { name , point } of firstTimestampedObject . landmarks ) { console . log ( \tLandmark: ${ name } ; Vertex: ${ point . x } , ${ point . y } ); } } } } detectPerson (); Python To authenticate to Video Intelligence, set up Application Default Credentials.
- VideoIntelligenceServiceClient (); async function detectPersonGCS () { const request = { inputUri : gcsUri , features : [ 'PERSON DETECTION' ], videoContext : { personDetectionConfig : { // Must set includeBoundingBoxes to true to get poses and attributes. includeBoundingBoxes : true , includePoseLandmarks : true , includeAttributes : true , }, }, }; // Detects faces in a video // We get the first result because we only process 1 video const [ operation ] = await video . annotateVideo ( request ); const results = await operation . promise (); console . log ( 'Waiting for operation to complete...' ); // Gets annotations for video const personAnnotations = results [ 0 ]. annotationResults [ 0 ]. personDetectionAnnotations ; for ( const { tracks } of personAnnotations ) { console . log ( 'Person detected:' ); for ( const { segment , timestampedObjects } of tracks ) { console . log ( \tStart: ${ segment . startTimeOffset . seconds } + . ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ segment . endTimeOffset . seconds } . + ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); // Each segment includes timestamped objects that // include characteristic--e.g. clothes, posture // of the person detected. const [ firstTimestampedObject ] = timestampedObjects ; // Attributes include unique pieces of clothing, poses (i.e., body // landmarks) of the person detected. for ( const { name , value } of firstTimestampedObject . attributes ) { console . log ( \tAttribute: ${ name } ; Value: ${ value } ); } // Landmarks in person detection include body parts. for ( const { name , point } of firstTimestampedObject . landmarks ) { console . log ( \tLandmark: ${ name } ; Vertex: ${ point . x } , ${ point . y } ); } } } } detectPersonGCS (); Python To authenticate to Video Intelligence, set up Application Default Credentials.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://videointelligence.googleapis.com/v1/ OPERATION NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "us-west1.10001026834554604237", "metadata": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress", "annotationProgress": [ { "inputUri": "/cloud-ml-sandbox/video/chicago.mp4", "progressPercent": 100, "startTime": "2020-02-08T21:26:56.577807Z", "updateTime": "2020-02-08T21:28:09.620665Z" } ] }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse", "annotationResults": [ { "inputUri": "/cloud-ml-sandbox/video/chicago.mp4", "personDetectionAnnotations": [ { "tracks": [ { "segment": { "startTimeOffset": "0s", "endTimeOffset": "1.507436s" } }, ... ] } ] } ] } } Shot detection annotations are returned as a shotAnnotations list.
- For instructions on installing the gcloud CLI, see the Video Intelligence API Quickstart Before using any of the request data, make the following replacements: inputContent: Local video file in binary format For example: 'AAAAGGZ0eXBtcDQyAAAAAGlzb21tcDQyAAGVYW1vb3YAAABsbXZoZAAAAADWvhlR1r4ZUQABX5ABCOxo AAEAAAEAAAAAAA4...' PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: POST https://videointelligence.googleapis.com/v1/videos:annotate Request JSON body: { "inputUri": " Local video file in binary format ", "features": ["PERSON DETECTION"], "videoContext": { "personDetectionConfig": { "includeBoundingBoxes": true, "includePoseLandmarks": true, "includeAttributes": true } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Detect explicit content in videos \_|\_ Video Intelligence API \_|\_ Google\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch](https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch)
- Source ID: `site-docs-root`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VideoIntelligenceServiceClient (); / TODO(developer): Uncomment the following line before running the sample. / // const gcsUri = 'GCS URI of video to analyze, e.g. gs://my-bucket/my-video.mp4'; const request = { inputUri : gcsUri , features : [ 'EXPLICIT CONTENT DETECTION' ], }; // Human-readable likelihoods const likelihoods = [ 'UNKNOWN' , 'VERY UNLIKELY' , 'UNLIKELY' , 'POSSIBLE' , 'LIKELY' , 'VERY LIKELY' , ]; // Detects unsafe content const [ operation ] = await client . annotateVideo ( request ); console . log ( 'Waiting for operation to complete...' ); const [ operationResult ] = await operation . promise (); // Gets unsafe content const explicitContentResults = operationResult . annotationResults [ 0 ]. explicitAnnotation ; console . log ( 'Explicit annotation results:' ); explicitContentResults . frames . forEach ( result = > { if ( result . timeOffset === undefined ) { result . timeOffset = {}; } if ( result . timeOffset . seconds === undefined ) { result . timeOffset . seconds = 0 ; } if ( result . timeOffset . nanos === undefined ) { result . timeOffset . nanos = 0 ; } console . log ( \tTime: ${ result . timeOffset . seconds } + . ${ ( result . timeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \t\tPornography likelihood: ${ likelihoods [ result . pornographyLikelihood ] } ); }); Python For more information on installing and using the Cloud Video Intelligence API Client Library for Python, refer to Cloud Video Intelligence API Client Libraries . """Detects explicit content from the GCS path to a video.""" video client = videointelligence .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://videointelligence.googleapis.com/v1/ OPERATION NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress", "annotationProgress": [ { "inputUri": "/demomaker/gbikes dinosaur.mp4", "progressPercent": 100, "startTime": "2020-03-26T00:16:35.112404Z", "updateTime": "2020-03-26T00:16:55.937889Z" } ] }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse", "annotationResults": [ { "inputUri": "/demomaker/gbikes dinosaur.mp4", "explicitAnnotation": { "frames": [ { "timeOffset": "0.056149s", "pornographyLikelihood": "VERY UNLIKELY" }, { "timeOffset": "1.166841s", "pornographyLikelihood": "VERY UNLIKELY" }, ... { "timeOffset": "41.678209s", "pornographyLikelihood": "VERY UNLIKELY" }, { "timeOffset": "42.596413s", "pornographyLikelihood": "VERY UNLIKELY" } ] } } ] } } Shot detection annotations are returned as a shotAnnotations list.
- For example: "inputUri": "gs://cloud-videointelligence-demo/assistant.mp4", PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: POST https://videointelligence.googleapis.com/v1/videos:annotate Request JSON body: { "inputUri": " INPUT URI ", "features": ["EXPLICIT CONTENT DETECTION"] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- EXPLICIT CONTENT DETECTION ) . build (); OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > response = client . annotateVideoAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); // Print detected annotations and their positions in the analyzed video. for ( VideoAnnotationResults result : response . get (). getAnnotationResultsList ()) { for ( ExplicitContentFrame frame : result . getExplicitAnnotation (). getFramesList ()) { double frameTime = frame . getTimeOffset (). getSeconds () + frame . getTimeOffset (). getNanos () / 1e9 ; System . out . printf ( "Location: %.3fs\n" , frameTime ); System . out . println ( "Adult: " + frame . getPornographyLikelihood ()); } } Node.js To authenticate to Video Intelligence, set up Application Default Credentials.

