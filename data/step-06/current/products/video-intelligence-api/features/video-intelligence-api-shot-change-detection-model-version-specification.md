---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:00.757Z"
product_name: "Video Intelligence API"
product_slug: "video-intelligence-api"
feature_name: "Video Intelligence API Shot Change Detection model version specification"
feature_slug: "video-intelligence-api-shot-change-detection-model-version-specification"
latest_feature_date: "2019-09-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/video-intelligence/docs/analyze-shots"
  - "https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse"
  - "https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection"
  - "https://docs.cloud.google.com/video-intelligence/docs/analyze-labels"
keywords:
  - "video"
  - "intelligence"
  - "api"
  - "shot"
  - "change"
  - "detection"
  - "model"
  - "version"
---

# Video Intelligence API Shot Change Detection model version specification

Product: Video Intelligence API
Coverage: MEDIUM

## Step 02 Summary

The API now allows callers to choose the Shot Change Detection model by setting ShotChangeDetectionConfig.model to builtin/stable or builtin/latest.

## Extended Definition

The API now allows callers to choose the Shot Change Detection model by setting ShotChangeDetectionConfig.model to builtin/stable or builtin/latest.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/video-intelligence/docs/analyze-shots](https://docs.cloud.google.com/video-intelligence/docs/analyze-shots)
- [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- [https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection)
- [https://docs.cloud.google.com/video-intelligence/docs/analyze-labels](https://docs.cloud.google.com/video-intelligence/docs/analyze-labels)

## Supporting Pages

### Detect shot changes \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/analyze-shots](https://docs.cloud.google.com/video-intelligence/docs/analyze-shots)
- Source ID: `site-iam-reference`
- Final score: 282
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VideoIntelligenceServiceClient (); / TODO(developer): Uncomment the following line before running the sample. / // const gcsUri = 'GCS URI of file to analyze, e.g. gs://my-bucket/my-video.mp4'; const request = { inputUri : gcsUri , features : [ 'SHOT CHANGE DETECTION' ], }; // Detects camera shot changes const [ operation ] = await client . annotateVideo ( request ); console . log ( 'Waiting for operation to complete...' ); const [ operationResult ] = await operation . promise (); // Gets shot changes const shotChanges = operationResult . annotationResults [ 0 ]. shotAnnotations ; console . log ( 'Shot changes:' ); if ( shotChanges . length === 1 ) { console . log ( 'The entire video is one shot.' ); } else { shotChanges . forEach (( shot , shotIdx ) = > { console . log ( Scene ${ shotIdx } occurs from: ); if ( shot . startTimeOffset === undefined ) { shot . startTimeOffset = {}; } if ( shot . endTimeOffset === undefined ) { shot . endTimeOffset = {}; } if ( shot . startTimeOffset . seconds === undefined ) { shot . startTimeOffset . seconds = 0 ; } if ( shot . startTimeOffset . nanos === undefined ) { shot . startTimeOffset . nanos = 0 ; } if ( shot . endTimeOffset . seconds === undefined ) { shot . endTimeOffset . seconds = 0 ; } if ( shot . endTimeOffset . nanos === undefined ) { shot . endTimeOffset . nanos = 0 ; } console . log ( \tStart: ${ shot . startTimeOffset . seconds } + . ${ ( shot . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ shot . endTimeOffset . seconds } . + ${ ( shot . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); }); } Python For more information on installing and using the Video Intelligence API Client Library for Python, refer to Video Intelligence API Client Libraries . """Detects camera shot changes.""" video client = videointelligence .
- PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: POST https://videointelligence.googleapis.com/v1/videos:annotate Request JSON body: { "inputUri": " INPUT URI ", "features": ["SHOT CHANGE DETECTION"] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- SHOT CHANGE DETECTION ] operation = video client . annotate video ( request = { "features" : features , "input uri" : path } ) print ( " \n Processing video for shot change annotations:" ) result = operation . result ( timeout = 90 ) print ( " \n Finished processing." ) first result is retrieved because a single video was processed for i , shot in enumerate ( result . annotation results [ 0 ] . shot annotations ): start time = ( shot . start time offset . seconds + shot . start time offset . microseconds / 1e6 ) end time = ( shot . end time offset . seconds + shot . end time offset . microseconds / 1e6 ) print ( " \t Shot {} : {} to {} " . format ( i , start time , end time )) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Video Intelligence reference documentation for .NET.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://videointelligence.googleapis.com/v1/ OPERATION NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "inputUri": "/demomaker/gbikes dinosaur.mp4", "shotAnnotations": [ { "startTimeOffset": "0s", "endTimeOffset": "5.167104s" }, { "startTimeOffset": "5.236736s", "endTimeOffset": "10.072064s" }, { "startTimeOffset": "10.106880s", "endTimeOffset": "28.139520s" }, { "startTimeOffset": "28.174336s", "endTimeOffset": "42.768384s" } ] } Shot detection annotations are returned as a shotAnnotations list.

### AnnotateVideoResponse \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse](https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse)
- Source ID: `site-api-reference`
- Final score: 241
- Re-rank relevance: N/A

Evidence snippets:
- Compared to the existing topical segmentLabelAnnotations , this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets LabelDetectionConfig.model to "builtin/latest" in the request. shotLabelAnnotations[] object ( LabelAnnotation ) Topical label annotations on shot level.
- Compared to the existing topical shotLabelAnnotations , this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets LabelDetectionConfig.model to "builtin/latest" in the request. frameLabelAnnotations[] object ( LabelAnnotation ) Label annotations on frame level.
- JSON representation { "inputUri" : string , "segment" : { object ( VideoSegment ) } , "segmentLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "segmentPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "shotPresenceLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "frameLabelAnnotations" : [ { object ( LabelAnnotation ) } ] , "faceAnnotations" : [ { object ( FaceAnnotation ) } ] , "faceDetectionAnnotations" : [ { object ( FaceDetectionAnnotation ) } ] , "shotAnnotations" : [ { object ( VideoSegment ) } ] , "explicitAnnotation" : { object ( ExplicitContentAnnotation ) } , "speechTranscriptions" : [ { object ( SpeechTranscription ) } ] , "textAnnotations" : [ { object ( TextAnnotation ) } ] , "objectAnnotations" : [ { object ( ObjectTrackingAnnotation ) } ] , "logoRecognitionAnnotations" : [ { object ( LogoRecognitionAnnotation ) } ] , "personDetectionAnnotations" : [ { object ( PersonDetectionAnnotation ) } ] , "error" : { object ( Status ) } } Fields inputUri string Video file location in Cloud Storage . segment object ( VideoSegment ) Video segment on which the annotation is run. segmentLabelAnnotations[] object ( LabelAnnotation ) Topical label annotations on video level or user-specified segment level.
- Each shot is represented as a video segment. explicitAnnotation object ( ExplicitContentAnnotation ) Explicit content annotation. speechTranscriptions[] object ( SpeechTranscription ) Speech transcription. textAnnotations[] object ( TextAnnotation ) OCR text detection and tracking.

### "Analyze videos for labels \_|\_ Video Intelligence API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection](https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Video Intelligence API can identify entities shown in video footage using the LABEL DETECTION feature and annotate these entities with labels (tags).
- Home Documentation AI and ML Video Intelligence API Guides Send feedback Analyze videos for labels Stay organized with collections Save and categorize content based on your preferences.
- For example, for a video of a train at a crossing, the Video Intelligence API returns labels such as "train", "transportation", "railroad crossing", and so on.
- For details, see Shot change detection Frame level: Entities are identified and labeled within each frame (with one frame per second sampling).

### "Analyze videos for labels \_|\_ Video Intelligence API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/analyze-labels](https://docs.cloud.google.com/video-intelligence/docs/analyze-labels)
- Source ID: `site-iam-reference`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- LABEL DETECTION ] with io . open ( path , "rb" ) as movie : input content = movie . read () operation = video client . annotate video ( request = { "features" : features , "input content" : input content } ) print ( " \n Processing video for label annotations:" ) result = operation . result ( timeout = 90 ) print ( " \n Finished processing." ) Process video/segment level label annotations segment labels = result . annotation results [ 0 ] . segment label annotations for i , segment label in enumerate ( segment labels ): print ( "Video label description: {} " . format ( segment label . entity . description )) for category entity in segment label . category entities : print ( " \t Label category description: {} " . format ( category entity . description ) ) for i , segment in enumerate ( segment label . segments ): start time = ( segment . segment . start time offset . seconds + segment . segment . start time offset . microseconds / 1e6 ) end time = ( segment . segment . end time offset . seconds + segment . segment . end time offset . microseconds / 1e6 ) positions = " {} s to {} s" . format ( start time , end time ) confidence = segment . confidence print ( " \t Segment {} : {} " . format ( i , positions )) print ( " \t Confidence: {} " . format ( confidence )) print ( " \n " ) Process shot level label annotations shot labels = result . annotation results [ 0 ] . shot label annotations for i , shot label in enumerate ( shot labels ): print ( "Shot label description: {} " . format ( shot label . entity . description )) for category entity in shot label . category entities : print ( " \t Label category description: {} " . format ( category entity . description ) ) for i , shot in enumerate ( shot label . segments ): start time = ( shot . segment . start time offset . seconds + shot . segment . start time offset . microseconds / 1e6 ) end time = ( shot . segment . end time offset . seconds + shot . segment . end time offset . microseconds / 1e6 ) positions = " {} s to {} s" . format ( start time , end time ) confidence = shot . confidence print ( " \t Segment {} : {} " . format ( i , positions )) print ( " \t Confidence: {} " . format ( confidence )) print ( " \n " ) Process frame level label annotations frame labels = result . annotation results [ 0 ] . frame label annotations for i , frame label in enumerate ( frame labels ): print ( "Frame label description: {} " . format ( frame label . entity . description )) for category entity in frame label . category entities : print ( " \t Label category description: {} " . format ( category entity . description ) ) Each frame label annotation has many frames, here we print information only about the first frame. frame = frame label . frames [ 0 ] time offset = frame . time offset . seconds + frame . time offset . microseconds / 1e6 print ( " \t First frame time offset: {} s" . format ( time offset )) print ( " \t First frame confidence: {} " . format ( frame . confidence )) print ( " \n " ) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Video Intelligence reference documentation for .NET.
- VideoContext ( label detection config = config ) operation = video client . annotate video ( request = { "features" : features , "input uri" : path , "video context" : context } ) print ( " \n Processing video for label annotations:" ) result = operation . result ( timeout = 180 ) print ( " \n Finished processing." ) Process video/segment level label annotations segment labels = result . annotation results [ 0 ] . segment label annotations for i , segment label in enumerate ( segment labels ): print ( "Video label description: {} " . format ( segment label . entity . description )) for category entity in segment label . category entities : print ( " \t Label category description: {} " . format ( category entity . description ) ) for i , segment in enumerate ( segment label . segments ): start time = ( segment . segment . start time offset . seconds + segment . segment . start time offset . microseconds / 1e6 ) end time = ( segment . segment . end time offset . seconds + segment . segment . end time offset . microseconds / 1e6 ) positions = " {} s to {} s" . format ( start time , end time ) confidence = segment . confidence print ( " \t Segment {} : {} " . format ( i , positions )) print ( " \t Confidence: {} " . format ( confidence )) print ( " \n " ) Process shot level label annotations shot labels = result . annotation results [ 0 ] . shot label annotations for i , shot label in enumerate ( shot labels ): print ( "Shot label description: {} " . format ( shot label . entity . description )) for category entity in shot label . category entities : print ( " \t Label category description: {} " . format ( category entity . description ) ) for i , shot in enumerate ( shot label . segments ): start time = ( shot . segment . start time offset . seconds + shot . segment . start time offset . microseconds / 1e6 ) end time = ( shot . segment . end time offset . seconds + shot . segment . end time offset . microseconds / 1e6 ) positions = " {} s to {} s" . format ( start time , end time ) confidence = shot . confidence print ( " \t Segment {} : {} " . format ( i , positions )) print ( " \t Confidence: {} " . format ( confidence )) print ( " \n " ) Process frame level label annotations frame labels = result . annotation results [ 0 ] . frame label annotations for i , frame label in enumerate ( frame labels ): print ( "Frame label description: {} " . format ( frame label . entity . description )) for category entity in frame label . category entities : print ( " \t Label category description: {} " . format ( category entity . description ) ) Each frame label annotation has many frames, here we print information only about the first frame. frame = frame label . frames [ 0 ] time offset = frame . time offset . seconds + frame . time offset . microseconds / 1e6 print ( " \t First frame time offset: {} s" . format ( time offset )) print ( " \t First frame confidence: {} " . format ( frame . confidence )) print ( " \n " ) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Video Intelligence reference documentation for .NET.
- VideoIntelligenceServiceClient (); / TODO(developer): Uncomment the following line before running the sample. / // const path = 'Local file to analyze, e.g. ./my-file.mp4'; // Reads a local video file and converts it to base64 const readFile = util . promisify ( fs . readFile ); const file = await readFile ( path ); const inputContent = file . toString ( 'base64' ); // Constructs request const request = { inputContent : inputContent , features : [ 'LABEL DETECTION' ], }; // Detects labels in a video const [ operation ] = await client . annotateVideo ( request ); console . log ( 'Waiting for operation to complete...' ); const [ operationResult ] = await operation . promise (); // Gets annotations for video const annotations = operationResult . annotationResults [ 0 ]; const labels = annotations . segmentLabelAnnotations ; labels . forEach ( label = > { console . log ( Label ${ label . entity . description } occurs at: ); label . segments . forEach ( segment = > { const time = segment . segment ; if ( time . startTimeOffset . seconds === undefined ) { time . startTimeOffset . seconds = 0 ; } if ( time . startTimeOffset . nanos === undefined ) { time . startTimeOffset . nanos = 0 ; } if ( time . endTimeOffset . seconds === undefined ) { time . endTimeOffset . seconds = 0 ; } if ( time . endTimeOffset . nanos === undefined ) { time . endTimeOffset . nanos = 0 ; } console . log ( \tStart: ${ time . startTimeOffset . seconds } + . ${ ( time . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tEnd: ${ time . endTimeOffset . seconds } . + ${ ( time . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s ); console . log ( \tConfidence: ${ segment . confidence } ); }); }); Python For more information on installing and using the Video Intelligence API Client Library for Python, refer to Video Intelligence API Client Libraries . """Detect labels given a file path.""" video client = videointelligence .
- PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: POST https://videointelligence.googleapis.com/v1/videos:annotate Request JSON body: { "inputContent": " BASE64 ENCODED CONTENT ", "features": ["LABEL DETECTION"], } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

