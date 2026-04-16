---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:00.760Z"
product_name: "Video Intelligence API"
product_slug: "video-intelligence-api"
feature_name: "Video OCR"
feature_slug: "video-ocr"
latest_feature_date: "2018-10-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/video-intelligence/docs/text-detection"
  - "https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse"
  - "https://docs.cloud.google.com/video-intelligence/docs/common/auth"
  - "https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming"
keywords:
  - "video"
  - "ocr"
  - "the"
  - "intelligence"
  - "api"
  - "supports"
  - "detecting"
  - "text"
---

# Video OCR

Product: Video Intelligence API
Coverage: MEDIUM

## Step 02 Summary

The Video Intelligence API supports detecting text in videos using optical character recognition (OCR).

## Extended Definition

The Video Intelligence API supports detecting text in videos using optical character recognition (OCR).

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/video-intelligence/docs/text-detection](https://docs.cloud.google.com/video-intelligence/docs/text-detection)
- [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- [https://docs.cloud.google.com/video-intelligence/docs/common/auth](https://docs.cloud.google.com/video-intelligence/docs/common/auth)
- [https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming](https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming)

## Supporting Pages

### Recognize text \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/text-detection](https://docs.cloud.google.com/video-intelligence/docs/text-detection)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://videointelligence.googleapis.com/v1/ OPERATION NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: Response "textAnnotations": [ { "text": "Hair Salon", "segments": [ { "segment": { "startTimeOffset": "0.833333s", "endTimeOffset": "2.291666s" }, "confidence": 0.99438506, "frames": [ { "rotatedBoundingBox": { "vertices": [ { "x": 0.7015625, "y": 0.59583336 }, { "x": 0.7984375, "y": 0.59583336 }, { "x": 0.7984375, "y": 0.64166665 }, { "x": 0.7015625, "y": 0.64166665 } ] }, "timeOffset": "0.833333s" }, { "rotatedBoundingBox": { "vertices": [ { "x": 0.70234376, "y": 0.6 }, { "x": 0.7992188, "y": 0.6 }, { "x": 0.7992188, "y": 0.6333333 }, { "x": 0.70234376, "y": 0.6333333 } ] }, "timeOffset": "1.041666s" }, { "rotatedBoundingBox": { "vertices": [ { "x": 0.70234376, "y": 0.6 }, { "x": 0.7992188, "y": 0.6 }, { "x": 0.7992188, "y": 0.6333333 }, { "x": 0.70234376, "y": 0.6333333 } ] }, "timeOffset": "1.250s" }, { "rotatedBoundingBox": { "vertices": [ { "x": 0.70234376, "y": 0.6 }, { "x": 0.7992188, "y": 0.6 }, { "x": 0.7992188, "y": 0.6319444 }, { "x": 0.70234376, "y": 0.6319444 } ] }, "timeOffset": "1.458333s" }, { "rotatedBoundingBox": { "vertices": [ { "x": 0.70234376, "y": 0.6 }, { "x": 0.7992188, "y": 0.6 }, { "x": 0.7992188, "y": 0.6333333 }, { "x": 0.70234376, "y": 0.6333333 } ] }, "timeOffset": "1.666666s" }, { "rotatedBoundingBox": { "vertices": [ { "x": 0.70234376, "y": 0.6 }, { "x": 0.7992188, "y": 0.6 }, { "x": 0.7992188, "y": 0.6333333 }, { "x": 0.70234376, "y": 0.6333333 } ] }, "timeOffset": "1.875s" }, { "rotatedBoundingBox": { "vertices": [ { "x": 0.70234376, "y": 0.6 }, { "x": 0.7992188, "y": 0.6 }, { "x": 0.7992188, "y": 0.6333333 }, { "x": 0.70234376, "y": 0.6333333 } ] }, "timeOffset": "2.083333s" }, { "rotatedBoundingBox": { "vertices": [ { "x": 0.70234376, "y": 0.6 }, { "x": 0.7992188, "y": 0.6 }, { "x": 0.7992188, "y": 0.6333333 }, { "x": 0.70234376, "y": 0.6333333 } ] }, "timeOffset": "2.291666s" } ] } ] }, { "text": "\"Sure, give me one second.\"", "segments": [ { "segment": { "startTimeOffset": "10.625s", "endTimeOffset": "13.333333s" }, "confidence": 0.98716676, "frames": [ { "rotatedBoundingBox": { "vertices": [ { "x": 0.60859376, "y": 0.59583336 }, { "x": 0.8952959, "y": 0.5903528 }, { "x": 0.89560676, "y": 0.6417387 }, { "x": 0.60890454, "y": 0.64721924 } ] }, "timeOffset": "10.625s" }, ... ] } Text detection annotations are returned as a textAnnotations list.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://videointelligence.googleapis.com/v1/ OPERATION NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: Response "textAnnotations": [ { "text": "Hair Salon", "segments": [ { "segment": { "startTimeOffset": "0.833333s", "endTimeOffset": "2.291666s" }, "confidence": 0.99438506, "frames": [ { "rotatedBoundingBox": { "vertices": [ { "x": 0.7015625, "y": 0.59583336 }, { "x": 0.7984375, "y": 0.59583336 }, { "x": 0.7984375, "y": 0.64166665 }, { "x": 0.7015625, "y": 0.64166665 } ] }, "timeOffset": "0.833333s" }, { "rotatedBoundingBox": { "vertices": [ { "x": 0.70234376, "y": 0.6 }, { "x": 0.7992188, "y": 0.6 }, { "x": 0.7992188, "y": 0.6333333 }, { "x": 0.70234376, "y": 0.6333333 } ] }, "timeOffset": "1.041666s" }, { "rotatedBoundingBox": { "vertices": [ { "x": 0.70234376, "y": 0.6 }, { "x": 0.7992188, "y": 0.6 }, { "x": 0.7992188, "y": 0.6333333 }, { "x": 0.70234376, "y": 0.6333333 } ] }, "timeOffset": "1.250s" }, { "rotatedBoundingBox": { "vertices": [ { "x": 0.70234376, "y": 0.6 }, { "x": 0.7992188, "y": 0.6 }, { "x": 0.7992188, "y": 0.6319444 }, { "x": 0.70234376, "y": 0.6319444 } ] }, "timeOffset": "1.458333s" }, { "rotatedBoundingBox": { "vertices": [ { "x": 0.70234376, "y": 0.6 }, { "x": 0.7992188, "y": 0.6 }, { "x": 0.7992188, "y": 0.6333333 }, { "x": 0.70234376, "y": 0.6333333 } ] }, "timeOffset": "1.666666s" }, { "rotatedBoundingBox": { "vertices": [ { "x": 0.70234376, "y": 0.6 }, { "x": 0.7992188, "y": 0.6 }, { "x": 0.7992188, "y": 0.6333333 }, { "x": 0.70234376, "y": 0.6333333 } ] }, "timeOffset": "1.875s" }, { "rotatedBoundingBox": { "vertices": [ { "x": 0.70234376, "y": 0.6 }, { "x": 0.7992188, "y": 0.6 }, { "x": 0.7992188, "y": 0.6333333 }, { "x": 0.70234376, "y": 0.6333333 } ] }, "timeOffset": "2.083333s" }, { "rotatedBoundingBox": { "vertices": [ { "x": 0.70234376, "y": 0.6 }, { "x": 0.7992188, "y": 0.6 }, { "x": 0.7992188, "y": 0.6333333 }, { "x": 0.70234376, "y": 0.6333333 } ] }, "timeOffset": "2.291666s" } ] } ] }, { "text": "\"Sure, give me one second.\"", "segments": [ { "segment": { "startTimeOffset": "10.625s", "endTimeOffset": "13.333333s" }, "confidence": 0.98716676, "frames": [ { "rotatedBoundingBox": { "vertices": [ { "x": 0.60859376, "y": 0.59583336 }, { "x": 0.8952959, "y": 0.5903528 }, { "x": 0.89560676, "y": 0.6417387 }, { "x": 0.60890454, "y": 0.64721924 } ] }, "timeOffset": "10.625s" }, ... ] } Text detection annotations are returned as a textAnnotations list.
- For instructions on installing the Google Cloud CLI, see the Video Intelligence API Quickstart Before using any of the request data, make the following replacements: "inputContent": BASE64 ENCODED CONTENT For example: "UklGRg41AwBBVkkgTElTVAwBAABoZHJsYXZpaDgAAAA1ggAAxPMBAAAAAAAQCAA..." LANGUAGE CODE : [Optional] For example, "en-US" PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: POST https://videointelligence.googleapis.com/v1/videos:annotate Request JSON body: { "inputContent": " BASE64 ENCODED CONTENT ", "features": ["TEXT DETECTION"], "videoContext": { "textDetectionConfig": { "languageHints": [" LANGUAGE CODE "] } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For example: "inputUri": "gs://cloud-videointelligence-demo/assistant.mp4", LANGUAGE CODE : [Optional] For example, "en-US" PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: POST https://videointelligence.googleapis.com/v1/videos:annotate Request JSON body: { "inputUri": " INPUT URI ", "features": ["TEXT DETECTION"], "videoContext": { "textDetectionConfig": { "languageHints": [" LANGUAGE CODE "] } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### AnnotateVideoResponse \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- Source ID: `site-api-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "text" : string , "segments" : [ { object ( TextSegment ) } ] , "version" : string } Fields text string The detected text. segments[] object ( TextSegment ) All video segments where OCR detected text appears. version string Feature version.
- JSON representation { "inputUri" : string , "segment" : { object ( VideoSegment ) } , "segmentLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "segmentPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "frameLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "faceAnnotations" : [ { object ( FaceAnnotation ) } ] , "faceDetectionAnnotations" : [ { object ( FaceDetectionAnnotation ) } ] , "shotAnnotations" : [ { object ( VideoSegment ) } ] , "explicitAnnotation" : { object ( ExplicitContentAnnotation ) } , "speechTranscriptions" : [ { object ( SpeechTranscription ) } ] , "textAnnotations" : [ { object ( TextAnnotation ) } ] , "objectAnnotations" : [ { object ( ObjectTrackingAnnotation ) } ] , "logoRecognitionAnnotations" : [ { object ( LogoRecognitionAnnotation ) } ] , "personDetectionAnnotations" : [ { object ( PersonDetectionAnnotation ) } ] , "error" : { object ( Status ) } } Fields inputUri string Video file location in Cloud Storage . segment object ( VideoSegment ) Video segment on which the annotation is run. segmentLabelAnnotations[] object ( LabelAnnotation ) Topical label annotations on video level or user-specified segment level.
- Each shot is represented as a video segment. explicitAnnotation object ( ExplicitContentAnnotation ) Explicit content annotation. speechTranscriptions[] object ( SpeechTranscription ) Speech transcription. textAnnotations[] object ( TextAnnotation ) OCR text detection and tracking.
- JSON representation { "segment" : { object ( VideoSegment ) } , "confidence" : number , "frames" : [ { object ( TextFrame ) } ] } Fields segment object ( VideoSegment ) Video segment where a text snippet was detected. confidence number Confidence for the track of detected text.

### Authenticating to the Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/common/auth](https://docs.cloud.google.com/video-intelligence/docs/common/auth)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To allow your application code to use the Video Intelligence API, you must set up the proper credentials for your application to authenticate its identity to the service and to obtain authorization to perform tasks. (These credential-related mechanisms are known as auth schemes.) Note: Authentication and authorization are large topics.
- Home Documentation AI and ML Video Intelligence API Guides Send feedback Authenticating to the Video Intelligence API Stay organized with collections Save and categorize content based on your preferences.
- This page describes what a service account is, how to create one to authenticate requests to the Video Intelligence API, and how to use your service account to set Application Default Credentials .
- Authenticating with Application Default Credentials The simplest way for applications to authenticate to Video Intelligence API is by using Application Default Credentials (ADC).

### "How-to stream live videos \_|\_ Video Intelligence API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming](https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Step 3: Run GStreamer pipeline GStreamer supports multiple live streaming protocols including but not limited to: HTTP Live Streaming (HLS) Real-time Streaming Protocol (RTSP) Real-time Protocol (RTP) Real-time Messaging Protocol (RTMP) WebRTC Streaming from Webcam The Video Intelligence API uses the GStreamer pipeline to convert from these live streaming protocols to a decodable video stream, and writes the stream into the named pipe created in Step 1.
- The Video Intelligence Streaming API supports standard live streaming protocols like RTSP, RTMP, and HLS.
- The following example shows how to use the binary from the command line. $ export GOOGLE APPLICATION CREDENTIALS = / path to credential /credential json $ export CONFIG = / path to config /config json $ export PIPE NAME = / path to pipe / name of pipe $ export TIMEOUT = 3600 $ ./streaming client main --alsologtostderr --endpoint "dns:///alpha-videointelligence.googleapis.com" \ --video path = $PIPE NAME --use pipe = true --config = $CONFIG --timeout = $TIMEOUT $GOOGLE APPLICATION CREDENTIALS specifies the file path of the JSON file containing your service account key.
- To support live streaming protocols, the Video Intelligence API uses the GStreamer open media framework.

