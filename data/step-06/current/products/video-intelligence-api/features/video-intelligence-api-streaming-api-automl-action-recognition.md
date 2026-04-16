---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:00.753Z"
product_name: "Video Intelligence API"
product_slug: "video-intelligence-api"
feature_name: "Video Intelligence API Streaming API AutoML Action Recognition"
feature_slug: "video-intelligence-api-streaming-api-automl-action-recognition"
latest_feature_date: "2021-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse"
  - "https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming"
  - "https://docs.cloud.google.com/video-intelligence/docs/celebrity-recognition"
  - "https://docs.cloud.google.com/video-intelligence/docs/reference/rpc"
keywords:
  - "video"
  - "intelligence"
  - "api"
  - "streaming"
  - "automl"
  - "action"
  - "recognition"
  - "allows"
---

# Video Intelligence API Streaming API AutoML Action Recognition

Product: Video Intelligence API
Coverage: MEDIUM

## Step 02 Summary

Allows AutoML Action Recognition using custom AutoML models on real-time video streams via the Streaming API.

## Extended Definition

Allows AutoML Action Recognition using custom AutoML models on real-time video streams via the Streaming API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- [https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming](https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming)
- [https://docs.cloud.google.com/video-intelligence/docs/celebrity-recognition](https://docs.cloud.google.com/video-intelligence/docs/celebrity-recognition)
- [https://docs.cloud.google.com/video-intelligence/docs/reference/rpc](https://docs.cloud.google.com/video-intelligence/docs/reference/rpc)

## Supporting Pages

### AnnotateVideoResponse \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- Source ID: `site-api-reference`
- Final score: 237
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Video Intelligence API Reference Send feedback AnnotateVideoResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "inputUri" : string , "segment" : { object ( VideoSegment ) } , "segmentLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "segmentPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "frameLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "faceAnnotations" : [ { object ( FaceAnnotation ) } ] , "faceDetectionAnnotations" : [ { object ( FaceDetectionAnnotation ) } ] , "shotAnnotations" : [ { object ( VideoSegment ) } ] , "explicitAnnotation" : { object ( ExplicitContentAnnotation ) } , "speechTranscriptions" : [ { object ( SpeechTranscription ) } ] , "textAnnotations" : [ { object ( TextAnnotation ) } ] , "objectAnnotations" : [ { object ( ObjectTrackingAnnotation ) } ] , "logoRecognitionAnnotations" : [ { object ( LogoRecognitionAnnotation ) } ] , "personDetectionAnnotations" : [ { object ( PersonDetectionAnnotation ) } ] , "error" : { object ( Status ) } } Fields inputUri string Video file location in Cloud Storage . segment object ( VideoSegment ) Video segment on which the annotation is run. segmentLabelAnnotations[] object ( LabelAnnotation ) Topical label annotations on video level or user-specified segment level.
- JSON representation VideoAnnotationResults JSON representation LabelAnnotation JSON representation Entity JSON representation LabelSegment JSON representation LabelFrame JSON representation FaceAnnotation JSON representation FaceSegment JSON representation FaceFrame JSON representation NormalizedBoundingBox JSON representation FaceDetectionAnnotation JSON representation Track JSON representation TimestampedObject JSON representation DetectedAttribute JSON representation DetectedLandmark JSON representation NormalizedVertex JSON representation ExplicitContentAnnotation JSON representation ExplicitContentFrame JSON representation SpeechTranscription JSON representation SpeechRecognitionAlternative JSON representation WordInfo JSON representation TextAnnotation JSON representation TextSegment JSON representation TextFrame JSON representation NormalizedBoundingPoly JSON representation ObjectTrackingAnnotation JSON representation ObjectTrackingFrame JSON representation LogoRecognitionAnnotation JSON representation PersonDetectionAnnotation JSON representation Video annotation response.
- Each will have list of frame information associated with it. objectAnnotations[] object ( ObjectTrackingAnnotation ) Annotations for list of objects detected and tracked in video. logoRecognitionAnnotations[] object ( LogoRecognitionAnnotation ) Annotations for list of logos detected, tracked and recognized in video. personDetectionAnnotations[] object ( PersonDetectionAnnotation ) Person detection annotations. error object ( Status ) If set, indicates an error.

### "How-to stream live videos \_|\_ Video Intelligence API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming](https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to use the binary from the command line. $ export GOOGLE APPLICATION CREDENTIALS = / path to credential /credential json $ export CONFIG = / path to config /config json $ export PIPE NAME = / path to pipe / name of pipe $ export TIMEOUT = 3600 $ ./streaming client main --alsologtostderr --endpoint "dns:///alpha-videointelligence.googleapis.com" \ --video path = $PIPE NAME --use pipe = true --config = $CONFIG --timeout = $TIMEOUT $GOOGLE APPLICATION CREDENTIALS specifies the file path of the JSON file containing your service account key.
- Step 3: Run GStreamer pipeline GStreamer supports multiple live streaming protocols including but not limited to: HTTP Live Streaming (HLS) Real-time Streaming Protocol (RTSP) Real-time Protocol (RTP) Real-time Messaging Protocol (RTMP) WebRTC Streaming from Webcam The Video Intelligence API uses the GStreamer pipeline to convert from these live streaming protocols to a decodable video stream, and writes the stream into the named pipe created in Step 1.
- The Video Intelligence Streaming API supports standard live streaming protocols like RTSP, RTMP, and HLS.
- To support live streaming protocols, the Video Intelligence API uses the GStreamer open media framework.

### Recognize celebrities \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/celebrity-recognition](https://docs.cloud.google.com/video-intelligence/docs/celebrity-recognition)
- Source ID: `site-iam-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://videointelligence.googleapis.com/v1/ OPERATION NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress", "annotationProgress": [ { "inputUri": " INPUT URI ", "progressPercent": 100, "startTime": "2020-05-12T19:36:09.110351Z", "updateTime": "2020-05-12T19:36:17.519069Z" } ] }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse", "annotationResults": [ { ... } ] } } The output from annotating the video should look similar to the following example. { "annotationResults": [ { "inputUri": " INPUT URI , "segment": { "startTimeOffset": { }, "endTimeOffset": { "seconds": 19, "nanos": 519500000 } }, "celebrityRecognitionAnnotations": { "celebrityTracks": [ { "celebrities": [...], "faceTrack": {...} }, { "celebrities": [ { "celebrity": { "name": "video-intelligence/ CELEBRITY MID ", "displayName": " CELEBRITY NAME/var>" }, "confidence": 0.81873637 } ], "faceTrack": { "segment": { "startTimeOffset": { "seconds": 1, "nanos": 459791000 }, "endTimeOffset": { "seconds": 3, "nanos": 712041000 } }, "timestampedObjects": [ { "normalizedBoundingBox": {...}, "timeOffset": {...} }, { "normalizedBoundingBox": { "left": 0.38046876, "top": 0.26249999, "right": 0.60312498, "bottom": 0.72361112 }, "timeOffset": { "seconds": 1, "nanos": 459791000 } }, { "normalizedBoundingBox": {...}, "timeOffset": {...} }] } }, { "celebrities": [...], "faceTrack": {...} } ] } ... } Request celebrity opt-out If you are a celebrity and would like not to be included in this feature for either the Cloud Vision or Video Intelligence API please submit this form .
- PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: POST https://videointelligence.googleapis.com/v1p3beta1/videos:annotate Request JSON body: { "inputUri": "gs:// INPUT URI ", "outputUri": "gs:// OUTPUT URI ", "features": ["CELEBRITY RECOGNITION"] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Report misuse If you suspect that the Video Intelligence API celebrity recognition feature is being misused in any way, please let us know using this form.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://videointelligence.googleapis.com/v1p3beta1/videos:annotate" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID " } If the request is successful, the Video Intelligence returns the name for your operation.

### Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/reference/rpc](https://docs.cloud.google.com/video-intelligence/docs/reference/rpc)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service: videointelligence.googleapis.com The Service name videointelligence.googleapis.com is needed to create RPC client stubs. google.cloud.videointelligence.v1.VideoIntelligenceService Methods AnnotateVideo Performs asynchronous video annotation. google.cloud.videointelligence.v1p3beta1.StreamingVideoIntelligenceService Methods StreamingAnnotateVideo Performs video annotation with bidirectional streaming: emitting results while sending video/audio bytes. google.cloud.videointelligence.v1p3beta1.VideoIntelligenceService Methods AnnotateVideo Performs asynchronous video annotation. google.longrunning.Operations Methods CancelOperation Starts asynchronous cancellation on a long-running operation.
- Home Documentation AI and ML Video Intelligence API Reference Send feedback Cloud Video Intelligence API Stay organized with collections Save and categorize content based on your preferences.
- Supports both asynchronous API and streaming API.
- Detects objects, explicit content, and scene changes in videos.

