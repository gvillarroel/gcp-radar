---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:00.757Z"
product_name: "Video Intelligence API"
product_slug: "video-intelligence-api"
feature_name: "Video Intelligence API Label Detection model version specification"
feature_slug: "video-intelligence-api-label-detection-model-version-specification"
latest_feature_date: "2019-09-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection"
  - "https://docs.cloud.google.com/video-intelligence/docs/label-tutorial"
  - "https://docs.cloud.google.com/video-intelligence/docs/analyze-labels"
  - "https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse"
keywords:
  - "video"
  - "intelligence"
  - "api"
  - "label"
  - "detection"
  - "model"
  - "version"
  - "specification"
---

# Video Intelligence API Label Detection model version specification

Product: Video Intelligence API
Coverage: MEDIUM

## Step 02 Summary

The API now allows callers to choose the Label Detection model by setting LabelDetectionConfig.model to builtin/stable or builtin/latest.

## Extended Definition

The API now allows callers to choose the Label Detection model by setting LabelDetectionConfig.model to builtin/stable or builtin/latest.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection)
- [https://docs.cloud.google.com/video-intelligence/docs/label-tutorial](https://docs.cloud.google.com/video-intelligence/docs/label-tutorial)
- [https://docs.cloud.google.com/video-intelligence/docs/analyze-labels](https://docs.cloud.google.com/video-intelligence/docs/analyze-labels)
- [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)

## Supporting Pages

### "Analyze videos for labels \_|\_ Video Intelligence API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection)
- Source ID: `site-iam-reference`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Video Intelligence API can identify entities shown in video footage using the LABEL DETECTION feature and annotate these entities with labels (tags).
- Home Documentation AI and ML Video Intelligence API Guides Send feedback Analyze videos for labels Stay organized with collections Save and categorize content based on your preferences.
- For example, for a video of a train at a crossing, the Video Intelligence API returns labels such as "train", "transportation", "railroad crossing", and so on.
- Video Intelligence API Visualizer Check out the Video Intelligence API visualizer to see this feature in action.

### "Label Detection Tutorial \_|\_ Video Intelligence API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/label-tutorial](https://docs.cloud.google.com/video-intelligence/docs/label-tutorial)
- Source ID: `site-iam-reference`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- LABEL DETECTION ] operation = video client . annotate video ( request = { "features" : features , "input uri" : path } ) Now that the Video Intelligence API service is ready, you can construct a request to that service.
- Home Documentation AI and ML Video Intelligence API Guides Send feedback Label Detection Tutorial Stay organized with collections Save and categorize content based on your preferences.
- The purpose here is not to explain the Python client libraries, but to explain how to make calls to the Video Intelligence API using the video label detection feature.
- Each segment label includes a description ( segment label.description ), a list of entity categories ( segment label.category entities ), and a list of segments identifying the start/end time of the label occurrences in the video (should be one segment spanning the whole video or video segment for the case of segment label annotations ). { "name":"us-west1.12089999971048628582", "metadata":{ "@type":"type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress", "annotationProgress":[ { "inputUri":"gs:// YOUR BUCKET / YOUR OBJECT ", "updateTime":"2020-01-31T01:49:52.498015Z", "startTime":"2020-01-31T01:49:43.056481Z" } ] }, "done": true, "response":{ "@type":"type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse", "annotationResults":[ { "inputUri":"gs:// YOUR BUCKET / YOUR OBJECT ", "segmentLabelAnnotations": [ { "entity": { "entityId": "/m/01yrx", "languageCode": "en-US" }, "segments": [ { "segment": { "startTimeOffset": "0s", "endTimeOffset": "14.833664s" }, "confidence": 0.98509187 } ] }, ... ] } ] } } Because only one video was sent in the request, the first description of the first result is printed.

### "Analyze videos for labels \_|\_ Video Intelligence API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/analyze-labels](https://docs.cloud.google.com/video-intelligence/docs/analyze-labels)
- Source ID: `site-iam-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VideoIntelligenceServiceClient (); / TODO(developer): Uncomment the following line before running the sample. / // const path = 'Local file to analyze, e.g. ./my-file.mp4'; // Reads a local video file and converts it to base64 const readFile = util . promisify ( fs . readFile ); const file = await readFile ( path ); const inputContent = file . toString ( 'base64' ); // Constructs request const request = { inputContent : inputContent , features : [ 'LABEL DETECTION' ], }; // Detects labels in a video const [ operation ] = await client . annotateVideo ( request ); console . log ( 'Waiting for operation to complete...' ); const [ operationResult ] = await operation . promise (); // Gets annotations for video const annotations = operationResult . annotationResults [ 0 ]; const labels = annotations . segmentLabelAnnotations ; labels . forEach ( label = > { console . log ( Label ${ label . entity . description } occurs at: ); label . segments . forEach ( segment = > { const time = segment . segment ; if ( time . startTimeOffset . seconds === undefined ) { time . startTimeOffset . seconds = 0 ; } if ( time . startTimeOffset . nanos === undefined ) { time . startTimeOffset . nanos = 0 ; } if ( time . endTimeOffset . seconds === undefined ) { time . endTimeOffset . seconds = 0 ; } if ( time . endTimeOffset . nanos === undefined ) { time . endTimeOffset . nanos = 0 ; } console . log ( \tStart: ${ time . startTimeOffset . seconds } + . ${ ( time . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ time . endTimeOffset . seconds } . + ${ ( time . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tConfidence: ${ segment . confidence } ); }); }); Python For more information on installing and using the Video Intelligence API Client Library for Python, refer to Video Intelligence API Client Libraries . """Detect labels given a file path.""" video client = videointelligence .
- PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: POST https://videointelligence.googleapis.com/v1/videos:annotate Request JSON body: { "inputContent": " BASE64 ENCODED CONTENT ", "features": ["LABEL DETECTION"], } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: POST https://videointelligence.googleapis.com/v1/videos:annotate Request JSON body: { "inputUri": " INPUT URI ", "features": ["LABEL DETECTION"], } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- The Video Intelligence API can identify entities shown in video footage using the LABEL DETECTION feature.

### AnnotateVideoResponse \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- Source ID: `site-api-reference`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compared to the existing topical segmentLabelAnnotations , this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets LabelDetectionConfig.model to "builtin/latest" in the request. shotLabelAnnotations[] object ( LabelAnnotation ) Topical label annotations on shot level.
- Compared to the existing topical shotLabelAnnotations , this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets LabelDetectionConfig.model to "builtin/latest" in the request. frameLabelAnnotations[] object ( LabelAnnotation ) Label annotations on frame level.
- JSON representation { "inputUri" : string , "segment" : { object ( VideoSegment ) } , "segmentLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "segmentPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "frameLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "faceAnnotations" : [ { object ( FaceAnnotation ) } ] , "faceDetectionAnnotations" : [ { object ( FaceDetectionAnnotation ) } ] , "shotAnnotations" : [ { object ( VideoSegment ) } ] , "explicitAnnotation" : { object ( ExplicitContentAnnotation ) } , "speechTranscriptions" : [ { object ( SpeechTranscription ) } ] , "textAnnotations" : [ { object ( TextAnnotation ) } ] , "objectAnnotations" : [ { object ( ObjectTrackingAnnotation ) } ] , "logoRecognitionAnnotations" : [ { object ( LogoRecognitionAnnotation ) } ] , "personDetectionAnnotations" : [ { object ( PersonDetectionAnnotation ) } ] , "error" : { object ( Status ) } } Fields inputUri string Video file location in Cloud Storage . segment object ( VideoSegment ) Video segment on which the annotation is run. segmentLabelAnnotations[] object ( LabelAnnotation ) Topical label annotations on video level or user-specified segment level.
- JSON representation VideoAnnotationResults JSON representation LabelAnnotation JSON representation Entity JSON representation LabelSegment JSON representation LabelFrame JSON representation FaceAnnotation JSON representation FaceSegment JSON representation FaceFrame JSON representation NormalizedBoundingBox JSON representation FaceDetectionAnnotation JSON representation Track JSON representation TimestampedObject JSON representation DetectedAttribute JSON representation DetectedLandmark JSON representation NormalizedVertex JSON representation ExplicitContentAnnotation JSON representation ExplicitContentFrame JSON representation SpeechTranscription JSON representation SpeechRecognitionAlternative JSON representation WordInfo JSON representation TextAnnotation JSON representation TextSegment JSON representation TextFrame JSON representation NormalizedBoundingPoly JSON representation ObjectTrackingAnnotation JSON representation ObjectTrackingFrame JSON representation LogoRecognitionAnnotation JSON representation PersonDetectionAnnotation JSON representation Video annotation response.

