---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:00.759Z"
product_name: "Video Intelligence API"
product_slug: "video-intelligence-api"
feature_name: "Video Intelligence API Object Tracking"
feature_slug: "video-intelligence-api-object-tracking"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/video-intelligence/docs/object-tracking"
  - "https://docs.cloud.google.com/video-intelligence/docs/annotate-video-command-line"
  - "https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse"
  - "https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection"
keywords:
  - "video"
  - "intelligence"
  - "api"
  - "object"
  - "tracking"
  - "in"
  - "is"
  - "now"
---

# Video Intelligence API Object Tracking

Product: Video Intelligence API
Coverage: MEDIUM

## Step 02 Summary

Object tracking support in Video Intelligence API is now generally available.

## Extended Definition

Object tracking support in Video Intelligence API is now generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/video-intelligence/docs/object-tracking](https://docs.cloud.google.com/video-intelligence/docs/object-tracking)
- [https://docs.cloud.google.com/video-intelligence/docs/annotate-video-command-line](https://docs.cloud.google.com/video-intelligence/docs/annotate-video-command-line)
- [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- [https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection)

## Supporting Pages

### Track objects \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/object-tracking](https://docs.cloud.google.com/video-intelligence/docs/object-tracking)
- Source ID: `site-docs-root`
- Final score: 347
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://videointelligence.googleapis.com/v1/ OPERATION NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: Response // Object tracking annotations are returned as a objectAnnotations list. { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress", "annotationProgress": [ { "inputContent": "UklGRg41AwBBVkkgTElTVAwBAABoZHJsYXZpaDgAAAA1ggAAxPMBAAAAAAAQCAA...", "progressPercent": 100, "startTime": "2018-06-21T16:56:46.755199Z", "updateTime": "2018-06-21T16:59:17.911197Z" } ] }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse", "annotationResults": [ { "inputContent": "/cloud-ml-sandbox/video/chicago.mp4", "objectAnnotations": [ { "entity": { "entityId": "/m/0k4j", "description": "car", "languageCode": "en-US" }, "frames": [ { "normalizedBoundingBox": { "left": 0.2672763, "top": 0.5677657, "right": 0.4388713, "bottom": 0.7623171 }, "timeOffset": "0s" }, { "normalizedBoundingBox": { "left": 0.26920167, "top": 0.5659805, "right": 0.44331276, "bottom": 0.76780635 }, "timeOffset": "0.100495s" }, ... { "normalizedBoundingBox": { "left": 0.83573246, "top": 0.6645812, "right": 1, "bottom": 0.99865407 }, "timeOffset": "2.311402s" } ], "segment": { "startTimeOffset": "0s", "endTimeOffset": "2.311402s" }, "confidence": 0.99488896 }, ... { "entity": { "entityId": "/m/0cgh4", "description": "building", "languageCode": "en-US" }, "frames": [ { "normalizedBoundingBox": { "left": 0.12340179, "top": 0.010383379, "right": 0.21914443, "bottom": 0.5591795 }, "timeOffset": "0s" }, { "normalizedBoundingBox": { "left": 0.12340179, "top": 0.009684974, "right": 0.22915152, "bottom": 0.56070584 }, "timeOffset": "0.100495s" }, ... { "normalizedBoundingBox": { "left": 0.12340179, "top": 0.008624528, "right": 0.22723165, "bottom": 0.56158626 }, "timeOffset": "0.401983s" } ], "segment": { "startTimeOffset": "0s", "endTimeOffset": "0.401983s" }, "confidence": 0.33914912 }, ... { "entity": { "entityId": "/m/0cgh4", "description": "building", "languageCode": "en-US" }, "frames": [ { "normalizedBoundingBox": { "left": 0.79324204, "top": 0.0006896425, "right": 0.99659824, "bottom": 0.5324423 }, "timeOffset": "37.585421s" }, { "normalizedBoundingBox": { "left": 0.78935236, "top": 0.0011992548, "right": 0.99659824, "bottom": 0.5374946 }, "timeOffset": "37.685917s" }, ... { "normalizedBoundingBox": { "left": 0.79404694, "right": 0.99659824, "bottom": 0.5280966 }, "timeOffset": "38.590379s" } ], "segment": { "startTimeOffset": "37.585421s", "endTimeOffset": "38.590379s" }, "confidence": 0.3415429 } ] } ] } } Go import ( "context" "fmt" "io" "os" video "cloud.google.com/go/videointelligence/apiv1" videopb "cloud.google.com/go/videointelligence/apiv1/videointelligencepb" "github.com/golang/protobuf/ptypes" ) // objectTracking analyzes a video and extracts entities with their bounding boxes. func objectTracking ( w io .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://videointelligence.googleapis.com/v1/ OPERATION NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: Response // Object tracking annotations are returned as a objectAnnotations list. { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress", "annotationProgress": [ { "inputUri": "/cloud-ml-sandbox/video/chicago.mp4", "progressPercent": 100, "startTime": "2019-12-21T16:56:46.755199Z", "updateTime": "2019-12-21T16:59:17.911197Z" } ] }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse", "annotationResults": [ { "inputUri": "/cloud-ml-sandbox/video/chicago.mp4", "objectAnnotations": [ { "entity": { "entityId": "/m/0k4j", "description": "car", "languageCode": "en-US" }, "frames": [ { "normalizedBoundingBox": { "left": 0.2672763, "top": 0.5677657, "right": 0.4388713, "bottom": 0.7623171 }, "timeOffset": "0s" }, { "normalizedBoundingBox": { "left": 0.26920167, "top": 0.5659805, "right": 0.44331276, "bottom": 0.76780635 }, "timeOffset": "0.100495s" }, ... { "normalizedBoundingBox": { "left": 0.83573246, "top": 0.6645812, "right": 1, "bottom": 0.99865407 }, "timeOffset": "2.311402s" } ], "segment": { "startTimeOffset": "0s", "endTimeOffset": "2.311402s" }, "confidence": 0.99488896 }, ... { "entity": { "entityId": "/m/0cgh4", "description": "building", "languageCode": "en-US" }, "frames": [ { "normalizedBoundingBox": { "left": 0.12340179, "top": 0.010383379, "right": 0.21914443, "bottom": 0.5591795 }, "timeOffset": "0s" }, { "normalizedBoundingBox": { "left": 0.12340179, "top": 0.009684974, "right": 0.22915152, "bottom": 0.56070584 }, "timeOffset": "0.100495s" }, ... { "normalizedBoundingBox": { "left": 0.12340179, "top": 0.008624528, "right": 0.22723165, "bottom": 0.56158626 }, "timeOffset": "0.401983s" } ], "segment": { "startTimeOffset": "0s", "endTimeOffset": "0.401983s" }, "confidence": 0.33914912 }, ... { "entity": { "entityId": "/m/0cgh4", "description": "building", "languageCode": "en-US" }, "frames": [ { "normalizedBoundingBox": { "left": 0.79324204, "top": 0.0006896425, "right": 0.99659824, "bottom": 0.5324423 }, "timeOffset": "37.585421s" }, { "normalizedBoundingBox": { "left": 0.78935236, "top": 0.0011992548, "right": 0.99659824, "bottom": 0.5374946 }, "timeOffset": "37.685917s" }, ... { "normalizedBoundingBox": { "left": 0.79404694, "right": 0.99659824, "bottom": 0.5280966 }, "timeOffset": "38.590379s" } ], "segment": { "startTimeOffset": "37.585421s", "endTimeOffset": "38.590379s" }, "confidence": 0.3415429 } ] } ] } } Download annotation results Copy the annotation from the source to the destination bucket: (see Copy files and objects ) gcloud storage cp gcs uri gs://my-bucket Note: If the output gcs uri is provided by the user, then the annotation is stored in that gcs uri.
- Before using any of the request data, make the following replacements: inputContent : BASE64 ENCODED CONTENT For example: "UklGRg41AwBBVkkgTElTVAwBAABoZHJsYXZpaDgAAAA1ggAAxPMBAAAAAAAQCAA..." PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: POST https://videointelligence.googleapis.com/v1/videos:annotate Request JSON body: { "inputContent": " BASE64 ENCODED CONTENT ", "features": ["OBJECT TRACKING"] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: INPUT URI : STORAGE URI For example: "inputUri": "gs://cloud-videointelligence-demo/assistant.mp4", PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: POST https://videointelligence.googleapis.com/v1/videos:annotate Request JSON body: { "inputUri": " STORAGE URI ", "features": ["OBJECT TRACKING"] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Quickstart: Annotate a video by using the command line \_|\_ Video Intelligence\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/annotate-video-command-line](https://docs.cloud.google.com/video-intelligence/docs/annotate-video-command-line)
- Source ID: `site-api-reference`
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The results should look similar to the following: { "name" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID " , "metadata" : { "@type" : "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress" , "annotationProgress" : [ { "inputUri" : "videointelligence-quickstart-bucket/ YOUR OBJECT " , "progressPercent" : 100 , "startTime" : "2020-04-01T22:13:17.978847Z" , "updateTime" : "2020-04-01T22:13:29.576004Z" } ] }, "done" : true , "response" : { "@type" : "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse" , "annotationResults" : [ { "inputUri" : "/videointelligence-quickstart-bucket/ YOUR OBJECT " , "segmentLabelAnnotations" : [ { "entity" : { "entityId" : "/m/07bsy" , "description" : "transport" , "languageCode" : "en-US" }, "segments" : [ { "segment" : { "startTimeOffset" : "0s" , "endTimeOffset" : "38.757872s" }, "confidence" : 0.81231534 } ] }, { "entity" : { "entityId" : "/m/01n32" , "description" : "city" , "languageCode" : "en-US" }, "categoryEntities" : [ { "entityId" : "/m/043rvww" , "description" : "geographical feature" , "languageCode" : "en-US" } ], "segments" : [ { "segment" : { "startTimeOffset" : "0s" , "endTimeOffset" : "38.757872s" }, "confidence" : 0.3942462 } ] }, ... { "entity" : { "entityId" : "/m/06gfj" , "description" : "road" , "languageCode" : "en-US" }, "segments" : [ { "segment" : { "startTimeOffset" : "0s" , "endTimeOffset" : "38.757872s" }, "confidence" : 0.86698604 } ] } ] } ] } } Congratulations!
- If the operation has completed, a done field is included and set to true : { "name" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID " , "metadata" : { "@type" : "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress" , "annotationProgress" : [ { "inputUri" : "/videointelligence-quickstart-bucket/ YOUR OBJECT " , "progressPercent" : 100 , "startTime" : "2020-04-01T22:13:17.978847Z" , "updateTime" : "2020-04-01T22:13:29.576004Z" } ] }, "done" : true , ... } After about a minute, the request returns the annotation results.
- For example, dog.mp4 . curl -X POST \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ -H "Content-Type: application/json; charset=utf-8" \ --data '{"inputUri":"gs://videointelligence-quickstart-bucket/ YOUR OBJECT ","features":["LABEL DETECTION"]}' \ "https://videointelligence.googleapis.com/v1/videos:annotate" The Video Intelligence API creates an operation to process your request.
- The response includes the operation name: { "name" : "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID " } You can request information on the operation by calling the v1.operations endpoint, replacing OPERATION NAME in the example below with the name returned in the previous step: curl -X GET \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ https://videointelligence.googleapis.com/v1/ OPERATION NAME This command returns information related to your operation.

### AnnotateVideoResponse \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- Source ID: `site-api-reference`
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "inputUri" : string , "segment" : { object ( VideoSegment ) } , "segmentLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "segmentPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "frameLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "faceAnnotations" : [ { object ( FaceAnnotation ) } ] , "faceDetectionAnnotations" : [ { object ( FaceDetectionAnnotation ) } ] , "shotAnnotations" : [ { object ( VideoSegment ) } ] , "explicitAnnotation" : { object ( ExplicitContentAnnotation ) } , "speechTranscriptions" : [ { object ( SpeechTranscription ) } ] , "textAnnotations" : [ { object ( TextAnnotation ) } ] , "objectAnnotations" : [ { object ( ObjectTrackingAnnotation ) } ] , "logoRecognitionAnnotations" : [ { object ( LogoRecognitionAnnotation ) } ] , "personDetectionAnnotations" : [ { object ( PersonDetectionAnnotation ) } ] , "error" : { object ( Status ) } } Fields inputUri string Video file location in Cloud Storage . segment object ( VideoSegment ) Video segment on which the annotation is run. segmentLabelAnnotations[] object ( LabelAnnotation ) Topical label annotations on video level or user-specified segment level.
- JSON representation { "entity" : { object ( Entity ) } , "confidence" : number , "frames" : [ { object ( ObjectTrackingFrame ) } ] , "version" : string , // Union field track info can be only one of the following: "segment" : { object ( VideoSegment ) } , "trackId" : string // End of list of possible types for union field track info . } Fields entity object ( Entity ) Entity to specify the object category that this track is labeled as. confidence number Object category's labeling confidence of this track. frames[] object ( ObjectTrackingFrame ) Information corresponding to all frames where this object track appears.
- Each will have list of frame information associated with it. objectAnnotations[] object ( ObjectTrackingAnnotation ) Annotations for list of objects detected and tracked in video. logoRecognitionAnnotations[] object ( LogoRecognitionAnnotation ) Annotations for list of logos detected, tracked and recognized in video. personDetectionAnnotations[] object ( PersonDetectionAnnotation ) Person detection annotations. error object ( Status ) If set, indicates an error.
- Each shot is represented as a video segment. explicitAnnotation object ( ExplicitContentAnnotation ) Explicit content annotation. speechTranscriptions[] object ( SpeechTranscription ) Speech transcription. textAnnotations[] object ( TextAnnotation ) OCR text detection and tracking.

### "Analyze videos for labels \_|\_ Video Intelligence API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection)
- Source ID: `site-iam-reference`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Video Intelligence API Visualizer Check out the Video Intelligence API visualizer to see this feature in action.
- Home Documentation AI and ML Video Intelligence API Guides Send feedback Analyze videos for labels Stay organized with collections Save and categorize content based on your preferences.
- For example, for a video of a train at a crossing, the Video Intelligence API returns labels such as "train", "transportation", "railroad crossing", and so on.
- The Video Intelligence API can identify entities shown in video footage using the LABEL DETECTION feature and annotate these entities with labels (tags).

