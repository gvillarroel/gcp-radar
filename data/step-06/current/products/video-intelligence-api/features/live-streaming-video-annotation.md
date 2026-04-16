---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:00.757Z"
product_name: "Video Intelligence API"
product_slug: "video-intelligence-api"
feature_name: "Live streaming video annotation"
feature_slug: "live-streaming-video-annotation"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming"
  - "https://docs.cloud.google.com/video-intelligence/docs/reference/rpc"
  - "https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse"
  - "https://docs.cloud.google.com/video-intelligence/docs/reference/rest"
keywords:
  - "live"
  - "streaming"
  - "video"
  - "annotation"
  - "intelligence"
  - "api"
  - "provides"
  - "capabilities"
---

# Live streaming video annotation

Product: Video Intelligence API
Coverage: MEDIUM

## Step 02 Summary

Video Intelligence API provides live streaming video annotation capabilities as a beta feature.

## Extended Definition

Video Intelligence API provides live streaming video annotation capabilities as a beta feature.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming](https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming)
- [https://docs.cloud.google.com/video-intelligence/docs/reference/rpc](https://docs.cloud.google.com/video-intelligence/docs/reference/rpc)
- [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- [https://docs.cloud.google.com/video-intelligence/docs/reference/rest](https://docs.cloud.google.com/video-intelligence/docs/reference/rest)

## Supporting Pages

### "How-to stream live videos \_|\_ Video Intelligence API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming](https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming)
- Source ID: `site-docs-root`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Step 3: Run GStreamer pipeline GStreamer supports multiple live streaming protocols including but not limited to: HTTP Live Streaming (HLS) Real-time Streaming Protocol (RTSP) Real-time Protocol (RTP) Real-time Messaging Protocol (RTMP) WebRTC Streaming from Webcam The Video Intelligence API uses the GStreamer pipeline to convert from these live streaming protocols to a decodable video stream, and writes the stream into the named pipe created in Step 1.
- The Video Intelligence Streaming API supports standard live streaming protocols like RTSP, RTMP, and HLS.
- To support live streaming protocols, the Video Intelligence API uses the GStreamer open media framework.
- The following example shows how to use the binary from the command line. $ export GOOGLE APPLICATION CREDENTIALS = / path to credential /credential json $ export CONFIG = / path to config /config json $ export PIPE NAME = / path to pipe / name of pipe $ export TIMEOUT = 3600 $ ./streaming client main --alsologtostderr --endpoint "dns:///alpha-videointelligence.googleapis.com" \ --video path = $PIPE NAME --use pipe = true --config = $CONFIG --timeout = $TIMEOUT $GOOGLE APPLICATION CREDENTIALS specifies the file path of the JSON file containing your service account key.

### Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/reference/rpc](https://docs.cloud.google.com/video-intelligence/docs/reference/rpc)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service: videointelligence.googleapis.com The Service name videointelligence.googleapis.com is needed to create RPC client stubs. google.cloud.videointelligence.v1.VideoIntelligenceService Methods AnnotateVideo Performs asynchronous video annotation. google.cloud.videointelligence.v1p3beta1.StreamingVideoIntelligenceService Methods StreamingAnnotateVideo Performs video annotation with bidirectional streaming: emitting results while sending video/audio bytes. google.cloud.videointelligence.v1p3beta1.VideoIntelligenceService Methods AnnotateVideo Performs asynchronous video annotation. google.longrunning.Operations Methods CancelOperation Starts asynchronous cancellation on a long-running operation.
- Home Documentation AI and ML Video Intelligence API Reference Send feedback Cloud Video Intelligence API Stay organized with collections Save and categorize content based on your preferences.
- Supports both asynchronous API and streaming API.
- It also specifies the region for annotation and transcribes speech to text.

### AnnotateVideoResponse \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- Source ID: `site-api-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Video Intelligence API Reference Send feedback AnnotateVideoResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "inputUri" : string , "segment" : { object ( VideoSegment ) } , "segmentLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "segmentPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "frameLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "faceAnnotations" : [ { object ( FaceAnnotation ) } ] , "faceDetectionAnnotations" : [ { object ( FaceDetectionAnnotation ) } ] , "shotAnnotations" : [ { object ( VideoSegment ) } ] , "explicitAnnotation" : { object ( ExplicitContentAnnotation ) } , "speechTranscriptions" : [ { object ( SpeechTranscription ) } ] , "textAnnotations" : [ { object ( TextAnnotation ) } ] , "objectAnnotations" : [ { object ( ObjectTrackingAnnotation ) } ] , "logoRecognitionAnnotations" : [ { object ( LogoRecognitionAnnotation ) } ] , "personDetectionAnnotations" : [ { object ( PersonDetectionAnnotation ) } ] , "error" : { object ( Status ) } } Fields inputUri string Video file location in Cloud Storage . segment object ( VideoSegment ) Video segment on which the annotation is run. segmentLabelAnnotations[] object ( LabelAnnotation ) Topical label annotations on video level or user-specified segment level.
- JSON representation VideoAnnotationResults JSON representation LabelAnnotation JSON representation Entity JSON representation LabelSegment JSON representation LabelFrame JSON representation FaceAnnotation JSON representation FaceSegment JSON representation FaceFrame JSON representation NormalizedBoundingBox JSON representation FaceDetectionAnnotation JSON representation Track JSON representation TimestampedObject JSON representation DetectedAttribute JSON representation DetectedLandmark JSON representation NormalizedVertex JSON representation ExplicitContentAnnotation JSON representation ExplicitContentFrame JSON representation SpeechTranscription JSON representation SpeechRecognitionAlternative JSON representation WordInfo JSON representation TextAnnotation JSON representation TextSegment JSON representation TextFrame JSON representation NormalizedBoundingPoly JSON representation ObjectTrackingAnnotation JSON representation ObjectTrackingFrame JSON representation LogoRecognitionAnnotation JSON representation PersonDetectionAnnotation JSON representation Video annotation response.
- Each will have list of frame information associated with it. objectAnnotations[] object ( ObjectTrackingAnnotation ) Annotations for list of objects detected and tracked in video. logoRecognitionAnnotations[] object ( LogoRecognitionAnnotation ) Annotations for list of logos detected, tracked and recognized in video. personDetectionAnnotations[] object ( PersonDetectionAnnotation ) Person detection annotations. error object ( Status ) If set, indicates an error.

### Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/reference/rest](https://docs.cloud.google.com/video-intelligence/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service provides the following discovery document: https://videointelligence.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://videointelligence.googleapis.com REST Resource: v1.operations.projects.locations.operations Methods cancel POST /v1/operations/{name=projects/ /locations/ /operations/ }:cancel Starts asynchronous cancellation on a long-running operation. delete DELETE /v1/operations/{name=projects/ /locations/ /operations/ } Deletes a long-running operation. get GET /v1/operations/{name=projects/ /locations/ /operations/ } Gets the latest state of a long-running operation.
- REST Resource: v1.operations.projects.locations.operations REST Resource: v1.projects.locations.operations REST Resource: v1.videos Service: videointelligence.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- Home Documentation AI and ML Video Intelligence API Reference Send feedback Cloud Video Intelligence API Stay organized with collections Save and categorize content based on your preferences.

