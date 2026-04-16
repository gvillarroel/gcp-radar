---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:00.753Z"
product_name: "Video Intelligence API"
product_slug: "video-intelligence-api"
feature_name: "Video Intelligence API Person Detection"
feature_slug: "video-intelligence-api-person-detection"
latest_feature_date: "2021-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/video-intelligence/docs/people-detection"
  - "https://docs.cloud.google.com/video-intelligence/docs/label-tutorial"
  - "https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch"
  - "https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection"
keywords:
  - "video"
  - "intelligence"
  - "api"
  - "person"
  - "detection"
  - "detects"
  - "people"
  - "in"
---

# Video Intelligence API Person Detection

Product: Video Intelligence API
Coverage: MEDIUM

## Step 02 Summary

Detects people in video content and identifies person attributes and 2D facial landmarks.

## Extended Definition

Detects people in video content and identifies person attributes and 2D facial landmarks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/video-intelligence/docs/people-detection](https://docs.cloud.google.com/video-intelligence/docs/people-detection)
- [https://docs.cloud.google.com/video-intelligence/docs/label-tutorial](https://docs.cloud.google.com/video-intelligence/docs/label-tutorial)
- [https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch](https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch)
- [https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection)

## Supporting Pages

### Detect people \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/people-detection](https://docs.cloud.google.com/video-intelligence/docs/people-detection)
- Source ID: `site-docs-root`
- Final score: 351
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- String gcsUri = "gs://cloud-samples-data/video/googlework short.mp4" ; detectPersonGcs ( gcsUri ); } // Detects people in a video stored in Google Cloud Storage using // the Cloud Video Intelligence API. public static void detectPersonGcs ( String gcsUri ) throws Exception { try ( VideoIntelligenceServiceClient videoIntelligenceServiceClient = VideoIntelligenceServiceClient . create ()) { // Reads a local video file and converts it to base64.
- String localFilePath = "resources/googlework short.mp4" ; detectPerson ( localFilePath ); } // Detects people in a video stored in a local file using the Cloud Video Intelligence API. public static void detectPerson ( String localFilePath ) throws Exception { try ( VideoIntelligenceServiceClient videoIntelligenceServiceClient = VideoIntelligenceServiceClient . create ()) { // Reads a local video file and converts it to base64.
- PERSON DETECTION ) . setVideoContext ( videoContext ) . build (); // Detects people in a video OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > future = videoIntelligenceServiceClient . annotateVideoAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); AnnotateVideoResponse response = future . get (); // Get the first response, since we sent only one video.
- VideoIntelligenceServiceClient (); / TODO(developer): Uncomment the following line before running the sample. / // const path = 'Local file to analyze, e.g. ./my-file.mp4'; // Reads a local video file and converts it to base64 const file = fs . readFileSync ( path ); const inputContent = file . toString ( 'base64' ); async function detectPerson () { const request = { inputContent : inputContent , features : [ 'PERSON DETECTION' ], videoContext : { personDetectionConfig : { // Must set includeBoundingBoxes to true to get poses and attributes. includeBoundingBoxes : true , includePoseLandmarks : true , includeAttributes : true , }, }, }; // Detects faces in a video // We get the first result because we only process 1 video const [ operation ] = await video . annotateVideo ( request ); const results = await operation . promise (); console . log ( 'Waiting for operation to complete...' ); // Gets annotations for video const personAnnotations = results [ 0 ]. annotationResults [ 0 ]. personDetectionAnnotations ; for ( const { tracks } of personAnnotations ) { console . log ( 'Person detected:' ); for ( const { segment , timestampedObjects } of tracks ) { console . log ( \tStart: ${ segment . startTimeOffset . seconds } + . ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ segment . endTimeOffset . seconds } . + ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); // Each segment includes timestamped objects that // include characteristic--e.g. clothes, posture // of the person detected. const [ firstTimestampedObject ] = timestampedObjects ; // Attributes include unique pieces of clothing, poses (i.e., body // landmarks) of the person detected. for ( const { name , value } of firstTimestampedObject . attributes ) { console . log ( \tAttribute: ${ name } ; Value: ${ value } ); } // Landmarks in person detection include body parts. for ( const { name , point } of firstTimestampedObject . landmarks ) { console . log ( \tLandmark: ${ name } ; Vertex: ${ point . x } , ${ point . y } ); } } } } detectPerson (); Python To authenticate to Video Intelligence, set up Application Default Credentials.

### "Label Detection Tutorial \_|\_ Video Intelligence API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/label-tutorial](https://docs.cloud.google.com/video-intelligence/docs/label-tutorial)
- Source ID: `site-iam-reference`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- LABEL DETECTION ] operation = video client . annotate video ( request = { "features" : features , "input uri" : path } ) Now that the Video Intelligence API service is ready, you can construct a request to that service.
- Home Documentation AI and ML Video Intelligence API Guides Send feedback Label Detection Tutorial Stay organized with collections Save and categorize content based on your preferences.
- The purpose here is not to explain the Python client libraries, but to explain how to make calls to the Video Intelligence API using the video label detection feature.
- Each segment label includes a description ( segment label.description ), a list of entity categories ( segment label.category entities ), and a list of segments identifying the start/end time of the label occurrences in the video (should be one segment spanning the whole video or video segment for the case of segment label annotations ). { "name":"us-west1.12089999971048628582", "metadata":{ "@type":"type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress", "annotationProgress":[ { "inputUri":"gs:// YOUR BUCKET / YOUR OBJECT ", "updateTime":"2020-01-31T01:49:52.498015Z", "startTime":"2020-01-31T01:49:43.056481Z" } ] }, "done": true, "response":{ "@type":"type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse", "annotationResults":[ { "inputUri":"gs:// YOUR BUCKET / YOUR OBJECT ", "segmentLabelAnnotations": [ { "entity": { "entityId": "/m/01yrx", "languageCode": "en-US" }, "segments": [ { "segment": { "startTimeOffset": "0s", "endTimeOffset": "14.833664s" }, "confidence": 0.98509187 } ] }, ... ] } ] } } Because only one video was sent in the request, the first description of the first result is printed.

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

### Face detection \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection)
- Source ID: `site-iam-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Video Intelligence API Face detection feature looks for faces in a video and returns: The video segment , or segments in which a face is detected, across all videos in the given request.
- Home Documentation AI and ML Video Intelligence API Guides Send feedback Face detection Stay organized with collections Save and categorize content based on your preferences.
- Video Intelligence API Visualizer Check out the Video Intelligence API visualizer to see this feature in action.
- Does not include small objects that hold the hair (e.g., hair pins). frontal gaze Whether the person's eyes are looking directly into the camera as opposed to simply have both eyes visible. eyes visible The sclera (white of the eye) is visible for both eyes. glasses The person is wearing glasses on their face and over their eyes.

