---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:00.759Z"
product_name: "Video Intelligence API"
product_slug: "video-intelligence-api"
feature_name: "Speech transcription"
feature_slug: "speech-transcription"
latest_feature_date: "2018-12-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/video-intelligence/docs/transcription"
  - "https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse"
  - "https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming"
  - "https://docs.cloud.google.com/video-intelligence/docs/reference/api-overview"
keywords:
  - "speech"
  - "transcription"
  - "video"
  - "intelligence"
  - "api"
  - "introduced"
  - "generally"
  - "available"
---

# Speech transcription

Product: Video Intelligence API
Coverage: MEDIUM

## Step 02 Summary

Video Intelligence API introduced generally available speech transcription to transcribe spoken text from video audio, including support for multiple speakers and punctuation handling; Adds speech transcription support for video content as a beta feature.

## Extended Definition

Video Intelligence API introduced generally available speech transcription to transcribe spoken text from video audio, including support for multiple speakers and punctuation handling; Adds speech transcription support for video content as a beta feature.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/video-intelligence/docs/transcription](https://docs.cloud.google.com/video-intelligence/docs/transcription)
- [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- [https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming](https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming)
- [https://docs.cloud.google.com/video-intelligence/docs/reference/api-overview](https://docs.cloud.google.com/video-intelligence/docs/reference/api-overview)

## Supporting Pages

### "Get audio track transcription \_|\_ Video Intelligence API \_|\_ Google\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/transcription](https://docs.cloud.google.com/video-intelligence/docs/transcription)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://videointelligence.googleapis.com/v1/ OPERATION NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress", "annotationProgress": [{ "inputUri": "/bucket-name-123/sample-video-short.mp4", "progressPercent": 100, "startTime": "2018-04-09T15:19:38.919779Z", "updateTime": "2018-04-09T15:21:17.652470Z" }] }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse", "annotationResults": [ { "speechTranscriptions": [ { "alternatives": [ { "transcript": "and laughing going to talk about is the video intelligence API how many of you saw it at the keynote yesterday ", "confidence": 0.8442509, "words": [ { "startTime": "0.200s", "endTime": "0.800s", "word": "and" }, { "startTime": "0.800s", "endTime": "1.100s", "word": "laughing" }, { "startTime": "1.100s", "endTime": "1.200s", "word": "going" }, ...
- For example: "inputUri": "gs://cloud-videointelligence-demo/assistant.mp4", LANGUAGE CODE : [Optional] See supported languages PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: POST https://videointelligence.googleapis.com/v1/videos:annotate Request JSON body: { "inputUri": " INPUT URI ", "features": ["SPEECH TRANSCRIPTION"], "videoContext": { "speechTranscriptionConfig": { "languageCode": " LANGUAGE CODE ", "enableAutomaticPunctuation": true, "filterProfanity": true } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- VideoIntelligenceServiceClient (); / TODO(developer): Uncomment the following line before running the sample. / // const gcsUri = 'GCS URI of video to analyze, e.g. gs://my-bucket/my-video.mp4'; async function analyzeVideoTranscript () { const videoContext = { speechTranscriptionConfig : { languageCode : 'en-US' , enableAutomaticPunctuation : true , }, }; const request = { inputUri : gcsUri , features : [ 'SPEECH TRANSCRIPTION' ], videoContext : videoContext , }; const [ operation ] = await client . annotateVideo ( request ); console . log ( 'Waiting for operation to complete...' ); const [ operationResult ] = await operation . promise (); // There is only one annotation result since only // one video is processed. const annotationResults = operationResult . annotationResults [ 0 ]; for ( const speechTranscription of annotationResults . speechTranscriptions ) { // The number of alternatives for each transcription is limited by // SpeechTranscriptionConfig.max alternatives. // Each alternative is a different possible transcription // and has its own confidence score. for ( const alternative of speechTranscription . alternatives ) { console . log ( 'Alternative level information:' ); console . log ( Transcript: ${ alternative . transcript } ); console . log ( Confidence: ${ alternative . confidence } ); console . log ( 'Word level information:' ); for ( const wordInfo of alternative . words ) { const word = wordInfo . word ; const start time = wordInfo . startTime . seconds + wordInfo . startTime . nanos 1e-9 ; const end time = wordInfo . endTime . seconds + wordInfo . endTime . nanos 1e-9 ; console . log ( '\t' + start time + 's - ' + end time + 's: ' + word ); } } } } analyzeVideoTranscript (); Python To authenticate to Video Intelligence, set up Application Default Credentials.
- SECONDS ). getAnnotationResultsList ()) { for ( SpeechTranscription speechTranscription : results . getSpeechTranscriptionsList ()) { try { // Print the transcription if ( speechTranscription . getAlternativesCount () > 0 ) { SpeechRecognitionAlternative alternative = speechTranscription . getAlternatives ( 0 ); System . out . printf ( "Transcript: %s\n" , alternative . getTranscript ()); System . out . printf ( "Confidence: %.2f\n" , alternative . getConfidence ()); System . out . println ( "Word level information:" ); for ( WordInfo wordInfo : alternative . getWordsList ()) { double startTime = wordInfo . getStartTime (). getSeconds () + wordInfo . getStartTime (). getNanos () / 1e9 ; double endTime = wordInfo . getEndTime (). getSeconds () + wordInfo . getEndTime (). getNanos () / 1e9 ; System . out . printf ( "\t%4.2fs - %4.2fs: %s\n" , startTime , endTime , wordInfo . getWord ()); } } else { System . out . println ( "No transcription found" ); } } catch ( IndexOutOfBoundsException ioe ) { System . out . println ( "Could not retrieve frame: " + ioe . getMessage ()); } } } } Node.js To authenticate to Video Intelligence, set up Application Default Credentials.

### AnnotateVideoResponse \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- Source ID: `site-api-reference`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "inputUri" : string , "segment" : { object ( VideoSegment ) } , "segmentLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "segmentPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "frameLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "faceAnnotations" : [ { object ( FaceAnnotation ) } ] , "faceDetectionAnnotations" : [ { object ( FaceDetectionAnnotation ) } ] , "shotAnnotations" : [ { object ( VideoSegment ) } ] , "explicitAnnotation" : { object ( ExplicitContentAnnotation ) } , "speechTranscriptions" : [ { object ( SpeechTranscription ) } ] , "textAnnotations" : [ { object ( TextAnnotation ) } ] , "objectAnnotations" : [ { object ( ObjectTrackingAnnotation ) } ] , "logoRecognitionAnnotations" : [ { object ( LogoRecognitionAnnotation ) } ] , "personDetectionAnnotations" : [ { object ( PersonDetectionAnnotation ) } ] , "error" : { object ( Status ) } } Fields inputUri string Video file location in Cloud Storage . segment object ( VideoSegment ) Video segment on which the annotation is run. segmentLabelAnnotations[] object ( LabelAnnotation ) Topical label annotations on video level or user-specified segment level.
- JSON representation VideoAnnotationResults JSON representation LabelAnnotation JSON representation Entity JSON representation LabelSegment JSON representation LabelFrame JSON representation FaceAnnotation JSON representation FaceSegment JSON representation FaceFrame JSON representation NormalizedBoundingBox JSON representation FaceDetectionAnnotation JSON representation Track JSON representation TimestampedObject JSON representation DetectedAttribute JSON representation DetectedLandmark JSON representation NormalizedVertex JSON representation ExplicitContentAnnotation JSON representation ExplicitContentFrame JSON representation SpeechTranscription JSON representation SpeechRecognitionAlternative JSON representation WordInfo JSON representation TextAnnotation JSON representation TextSegment JSON representation TextFrame JSON representation NormalizedBoundingPoly JSON representation ObjectTrackingAnnotation JSON representation ObjectTrackingFrame JSON representation LogoRecognitionAnnotation JSON representation PersonDetectionAnnotation JSON representation Video annotation response.
- Each shot is represented as a video segment. explicitAnnotation object ( ExplicitContentAnnotation ) Explicit content annotation. speechTranscriptions[] object ( SpeechTranscription ) Speech transcription. textAnnotations[] object ( TextAnnotation ) OCR text detection and tracking.
- Home Documentation AI and ML Video Intelligence API Reference Send feedback AnnotateVideoResponse Stay organized with collections Save and categorize content based on your preferences.

### "How-to stream live videos \_|\_ Video Intelligence API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming](https://docs.cloud.google.com/video-intelligence/docs/streaming/live-streaming)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to use the binary from the command line. $ export GOOGLE APPLICATION CREDENTIALS = / path to credential /credential json $ export CONFIG = / path to config /config json $ export PIPE NAME = / path to pipe / name of pipe $ export TIMEOUT = 3600 $ ./streaming client main --alsologtostderr --endpoint "dns:///alpha-videointelligence.googleapis.com" \ --video path = $PIPE NAME --use pipe = true --config = $CONFIG --timeout = $TIMEOUT $GOOGLE APPLICATION CREDENTIALS specifies the file path of the JSON file containing your service account key.
- Step 3: Run GStreamer pipeline GStreamer supports multiple live streaming protocols including but not limited to: HTTP Live Streaming (HLS) Real-time Streaming Protocol (RTSP) Real-time Protocol (RTP) Real-time Messaging Protocol (RTMP) WebRTC Streaming from Webcam The Video Intelligence API uses the GStreamer pipeline to convert from these live streaming protocols to a decodable video stream, and writes the stream into the named pipe created in Step 1.
- Home Documentation AI and ML Video Intelligence API Guides Send feedback How-to stream live videos Stay organized with collections Save and categorize content based on your preferences.
- The Video Intelligence Streaming API supports standard live streaming protocols like RTSP, RTMP, and HLS.

### API usage overview \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/reference/api-overview](https://docs.cloud.google.com/video-intelligence/docs/reference/api-overview)
- Source ID: `site-api-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Video Intelligence API Reference Send feedback API usage overview Stay organized with collections Save and categorize content based on your preferences.
- API versions The following API versions are available: v1 : Stable, generally available. v1p3beta1 : Used to share the latest, upcoming beta features.
- This guide provides an overview of using the Video Intelligence API and its reference documentation.
- Type, method, and field names Depending on whether you are using client libraries, REST, or gRPC, the type, method, and field names for the API vary somewhat: REST is arranged by resource hierarchies and their methods.

