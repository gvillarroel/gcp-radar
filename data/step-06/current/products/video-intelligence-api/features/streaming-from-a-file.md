---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:00.758Z"
product_name: "Video Intelligence API"
product_slug: "video-intelligence-api"
feature_name: "Streaming from a file"
feature_slug: "streaming-from-a-file"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming"
  - "https://docs.cloud.google.com/video-intelligence/docs/object-tracking"
  - "https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch"
  - "https://docs.cloud.google.com/video-intelligence/docs/analyze-labels"
keywords:
  - "streaming"
  - "from"
  - "file"
  - "video"
  - "intelligence"
  - "api"
  - "provides"
  - "for"
---

# Streaming from a file

Product: Video Intelligence API
Coverage: MEDIUM

## Step 02 Summary

Video Intelligence API provides support for streaming input from a file as a beta feature.

## Extended Definition

Video Intelligence API provides support for streaming input from a file as a beta feature.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming](https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming)
- [https://docs.cloud.google.com/video-intelligence/docs/object-tracking](https://docs.cloud.google.com/video-intelligence/docs/object-tracking)
- [https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch](https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch)
- [https://docs.cloud.google.com/video-intelligence/docs/analyze-labels](https://docs.cloud.google.com/video-intelligence/docs/analyze-labels)

## Supporting Pages

### "How-to stream live videos \_|\_ Video Intelligence API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming](https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming)
- Source ID: `site-docs-root`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to use the binary from the command line. $ export GOOGLE APPLICATION CREDENTIALS = / path to credential /credential json $ export CONFIG = / path to config /config json $ export PIPE NAME = / path to pipe / name of pipe $ export TIMEOUT = 3600 $ ./streaming client main --alsologtostderr --endpoint "dns:///alpha-videointelligence.googleapis.com" \ --video path = $PIPE NAME --use pipe = true --config = $CONFIG --timeout = $TIMEOUT $GOOGLE APPLICATION CREDENTIALS specifies the file path of the JSON file containing your service account key.
- Step 3: Run GStreamer pipeline GStreamer supports multiple live streaming protocols including but not limited to: HTTP Live Streaming (HLS) Real-time Streaming Protocol (RTSP) Real-time Protocol (RTP) Real-time Messaging Protocol (RTMP) WebRTC Streaming from Webcam The Video Intelligence API uses the GStreamer pipeline to convert from these live streaming protocols to a decodable video stream, and writes the stream into the named pipe created in Step 1.
- The Video Intelligence Streaming API supports standard live streaming protocols like RTSP, RTMP, and HLS.
- To support live streaming protocols, the Video Intelligence API uses the GStreamer open media framework.

### Track objects \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/object-tracking](https://docs.cloud.google.com/video-intelligence/docs/object-tracking)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://videointelligence.googleapis.com/v1/ OPERATION NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: Response // Object tracking annotations are returned as a objectAnnotations list. { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress", "annotationProgress": [ { "inputUri": "/cloud-ml-sandbox/video/chicago.mp4", "progressPercent": 100, "startTime": "2019-12-21T16:56:46.755199Z", "updateTime": "2019-12-21T16:59:17.911197Z" } ] }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse", "annotationResults": [ { "inputUri": "/cloud-ml-sandbox/video/chicago.mp4", "objectAnnotations": [ { "entity": { "entityId": "/m/0k4j", "description": "car", "languageCode": "en-US" }, "frames": [ { "normalizedBoundingBox": { "left": 0.2672763, "top": 0.5677657, "right": 0.4388713, "bottom": 0.7623171 }, "timeOffset": "0s" }, { "normalizedBoundingBox": { "left": 0.26920167, "top": 0.5659805, "right": 0.44331276, "bottom": 0.76780635 }, "timeOffset": "0.100495s" }, ... { "normalizedBoundingBox": { "left": 0.83573246, "top": 0.6645812, "right": 1, "bottom": 0.99865407 }, "timeOffset": "2.311402s" } ], "segment": { "startTimeOffset": "0s", "endTimeOffset": "2.311402s" }, "confidence": 0.99488896 }, ... { "entity": { "entityId": "/m/0cgh4", "description": "building", "languageCode": "en-US" }, "frames": [ { "normalizedBoundingBox": { "left": 0.12340179, "top": 0.010383379, "right": 0.21914443, "bottom": 0.5591795 }, "timeOffset": "0s" }, { "normalizedBoundingBox": { "left": 0.12340179, "top": 0.009684974, "right": 0.22915152, "bottom": 0.56070584 }, "timeOffset": "0.100495s" }, ... { "normalizedBoundingBox": { "left": 0.12340179, "top": 0.008624528, "right": 0.22723165, "bottom": 0.56158626 }, "timeOffset": "0.401983s" } ], "segment": { "startTimeOffset": "0s", "endTimeOffset": "0.401983s" }, "confidence": 0.33914912 }, ... { "entity": { "entityId": "/m/0cgh4", "description": "building", "languageCode": "en-US" }, "frames": [ { "normalizedBoundingBox": { "left": 0.79324204, "top": 0.0006896425, "right": 0.99659824, "bottom": 0.5324423 }, "timeOffset": "37.585421s" }, { "normalizedBoundingBox": { "left": 0.78935236, "top": 0.0011992548, "right": 0.99659824, "bottom": 0.5374946 }, "timeOffset": "37.685917s" }, ... { "normalizedBoundingBox": { "left": 0.79404694, "right": 0.99659824, "bottom": 0.5280966 }, "timeOffset": "38.590379s" } ], "segment": { "startTimeOffset": "37.585421s", "endTimeOffset": "38.590379s" }, "confidence": 0.3415429 } ] } ] } } Download annotation results Copy the annotation from the source to the destination bucket: (see Copy files and objects ) gcloud storage cp gcs uri gs://my-bucket Note: If the output gcs uri is provided by the user, then the annotation is stored in that gcs uri.
- VideoIntelligenceServiceClient (); / TODO(developer): Uncomment the following line before running the sample. / // const path = 'Local file to analyze, e.g. ./my-file.mp4'; // Reads a local video file and converts it to base64 const file = await util . promisify ( fs . readFile )( path ); const inputContent = file . toString ( 'base64' ); const request = { inputContent : inputContent , features : [ 'OBJECT TRACKING' ], //recommended to use us-east1 for the best latency due to different types of processors used in this region and others locationId : 'us-east1' , }; // Detects objects in a video const [ operation ] = await video . annotateVideo ( request ); const results = await operation . promise (); console . log ( 'Waiting for operation to complete...' ); //Gets annotations for video const annotations = results [ 0 ]. annotationResults [ 0 ]; const objects = annotations . objectAnnotations ; objects . forEach ( object = > { console . log ( Entity description: ${ object . entity . description } ); console . log ( Entity id: ${ object . entity . entityId } ); const time = object . segment ; console . log ( Segment: ${ time . startTimeOffset . seconds 0 } + . ${ ( time . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s to ${ time . endTimeOffset . seconds 0 } . + ${ ( time . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( Confidence: ${ object . confidence } ); const frame = object . frames [ 0 ]; const box = frame . normalizedBoundingBox ; const timeOffset = frame . timeOffset ; console . log ( Time offset for the first frame: ${ timeOffset . seconds 0 } + . ${ ( timeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( 'Bounding box position:' ); console . log ( left : ${ box . left } ); console . log ( top : ${ box . top } ); console . log ( right : ${ box . right } ); console . log ( bottom : ${ box . bottom } ); }); Python """Object tracking in a local video.""" from google.cloud import videointelligence video client = videointelligence .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://videointelligence.googleapis.com/v1/videos:annotate" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID " } If the request is successful, Video Intelligence the name for your operation.
- OBJECT TRACKING ] with io . open ( path , "rb" ) as file : input content = file . read () operation = video client . annotate video ( request = { "features" : features , "input content" : input content } ) print ( " \n Processing video for object annotations." ) result = operation . result ( timeout = 500 ) print ( " \n Finished processing. \n " ) The first result is retrieved because a single video was processed. object annotations = result . annotation results [ 0 ] . object annotations Get only the first annotation for demo purposes. object annotation = object annotations [ 0 ] print ( "Entity description: {} " . format ( object annotation . entity . description )) if object annotation . entity . entity id : print ( "Entity id: {} " . format ( object annotation . entity . entity id )) print ( "Segment: {} s to {} s" . format ( object annotation . segment . start time offset . seconds + object annotation . segment . start time offset . microseconds / 1e6 , object annotation . segment . end time offset . seconds + object annotation . segment . end time offset . microseconds / 1e6 , ) ) print ( "Confidence: {} " . format ( object annotation . confidence )) Here we print only the bounding box of the first frame in this segment frame = object annotation . frames [ 0 ] box = frame . normalized bounding box print ( "Time offset of the first frame: {} s" . format ( frame . time offset . seconds + frame . time offset . microseconds / 1e6 ) ) print ( "Bounding box position:" ) print ( " \t left : {} " . format ( box . left )) print ( " \t top : {} " . format ( box . top )) print ( " \t right : {} " . format ( box . right )) print ( " \t bottom: {} " . format ( box . bottom )) print ( " \n " ) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Video Intelligence reference documentation for .NET.

### "Detect explicit content in videos \_|\_ Video Intelligence API \_|\_ Google\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch](https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VideoIntelligenceServiceClient (); / TODO(developer): Uncomment the following line before running the sample. / // const gcsUri = 'GCS URI of video to analyze, e.g. gs://my-bucket/my-video.mp4'; const request = { inputUri : gcsUri , features : [ 'EXPLICIT CONTENT DETECTION' ], }; // Human-readable likelihoods const likelihoods = [ 'UNKNOWN' , 'VERY UNLIKELY' , 'UNLIKELY' , 'POSSIBLE' , 'LIKELY' , 'VERY LIKELY' , ]; // Detects unsafe content const [ operation ] = await client . annotateVideo ( request ); console . log ( 'Waiting for operation to complete...' ); const [ operationResult ] = await operation . promise (); // Gets unsafe content const explicitContentResults = operationResult . annotationResults [ 0 ]. explicitAnnotation ; console . log ( 'Explicit annotation results:' ); explicitContentResults . frames . forEach ( result = > { if ( result . timeOffset === undefined ) { result . timeOffset = {}; } if ( result . timeOffset . seconds === undefined ) { result . timeOffset . seconds = 0 ; } if ( result . timeOffset . nanos === undefined ) { result . timeOffset . nanos = 0 ; } console . log ( \tTime: ${ result . timeOffset . seconds } + . ${ ( result . timeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \t\tPornography likelihood: ${ likelihoods [ result . pornographyLikelihood ] } ); }); Python For more information on installing and using the Cloud Video Intelligence API Client Library for Python, refer to Cloud Video Intelligence API Client Libraries . """Detects explicit content from the GCS path to a video.""" video client = videointelligence .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://videointelligence.googleapis.com/v1/videos:annotate" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID " } If the response is successful, the Video Intelligence API returns the name for your operation.
- For example: "inputUri": "gs://cloud-videointelligence-demo/assistant.mp4", PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: POST https://videointelligence.googleapis.com/v1/videos:annotate Request JSON body: { "inputUri": " INPUT URI ", "features": ["EXPLICIT CONTENT DETECTION"] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- The operation name has the format projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: GET https://videointelligence.googleapis.com/v1/ OPERATION NAME To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Analyze videos for labels \_|\_ Video Intelligence API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/analyze-labels](https://docs.cloud.google.com/video-intelligence/docs/analyze-labels)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- VideoIntelligenceServiceClient (); / TODO(developer): Uncomment the following line before running the sample. / // const path = 'Local file to analyze, e.g. ./my-file.mp4'; // Reads a local video file and converts it to base64 const readFile = util . promisify ( fs . readFile ); const file = await readFile ( path ); const inputContent = file . toString ( 'base64' ); // Constructs request const request = { inputContent : inputContent , features : [ 'LABEL DETECTION' ], }; // Detects labels in a video const [ operation ] = await client . annotateVideo ( request ); console . log ( 'Waiting for operation to complete...' ); const [ operationResult ] = await operation . promise (); // Gets annotations for video const annotations = operationResult . annotationResults [ 0 ]; const labels = annotations . segmentLabelAnnotations ; labels . forEach ( label = > { console . log ( Label ${ label . entity . description } occurs at: ); label . segments . forEach ( segment = > { const time = segment . segment ; if ( time . startTimeOffset . seconds === undefined ) { time . startTimeOffset . seconds = 0 ; } if ( time . startTimeOffset . nanos === undefined ) { time . startTimeOffset . nanos = 0 ; } if ( time . endTimeOffset . seconds === undefined ) { time . endTimeOffset . seconds = 0 ; } if ( time . endTimeOffset . nanos === undefined ) { time . endTimeOffset . nanos = 0 ; } console . log ( \tStart: ${ time . startTimeOffset . seconds } + . ${ ( time . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ time . endTimeOffset . seconds } . + ${ ( time . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tConfidence: ${ segment . confidence } ); }); }); Python For more information on installing and using the Video Intelligence API Client Library for Python, refer to Video Intelligence API Client Libraries . """Detect labels given a file path.""" video client = videointelligence .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://videointelligence.googleapis.com/v1/ OPERATION NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress", "annotationProgress": [ { "inputUri": " INPUT URI ", "progressPercent": 100, "startTime": "2019-11-13T19:25:56.206335Z", "updateTime": "2019-11-13T19:26:16.215615Z" } ] }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse", "annotationResults": [ { "inputUri": " INPUT URI ", "segmentLabelAnnotations": [ { "entity": { "entityId": "/m/01vkl", "description": "circle", "languageCode": "en-US" }, "categoryEntities": [ { "entityId": "/m/016nqd", "description": "shape", "languageCode": "en-US" } ], "segments": [ { "segment": { "startTimeOffset": "0s", "endTimeOffset": "16.416666s" }, "confidence": 0.36535457 } ] }, ... ] } ] } } Download annotation results Copy the annotation from the source to the destination bucket: (see Copy files and objects ) gcloud storage cp gcs uri gs://my-bucket Note: If the output gcs uri is provided by the user, then the annotation is stored in that gcs uri.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://videointelligence.googleapis.com/v1/videos:annotate" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID " } If the request is successful, the Video Intelligence returns the name of your operation.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://videointelligence.googleapis.com/v1/videos:annotate" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID " } If the request is successful, Video Intelligence returns the name of your operation.

