---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:00.761Z"
product_name: "Video Intelligence API"
product_slug: "video-intelligence-api"
feature_name: "Cloud Video Intelligence API"
feature_slug: "cloud-video-intelligence-api"
latest_feature_date: "2017-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/video-intelligence/docs/common/auth"
  - "https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch"
  - "https://docs.cloud.google.com/video-intelligence/docs/annotate-video-client-libraries"
  - "https://docs.cloud.google.com/video-intelligence/docs/reference/rpc"
keywords:
  - "video"
  - "intelligence"
  - "api"
  - "the"
  - "became"
  - "available"
  - "as"
  - "beta"
---

# Cloud Video Intelligence API

Product: Video Intelligence API
Coverage: MEDIUM

## Step 02 Summary

The Cloud Video Intelligence API became available as a beta release.

## Extended Definition

The Cloud Video Intelligence API became available as a beta release.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/video-intelligence/docs/common/auth](https://docs.cloud.google.com/video-intelligence/docs/common/auth)
- [https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch](https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch)
- [https://docs.cloud.google.com/video-intelligence/docs/annotate-video-client-libraries](https://docs.cloud.google.com/video-intelligence/docs/annotate-video-client-libraries)
- [https://docs.cloud.google.com/video-intelligence/docs/reference/rpc](https://docs.cloud.google.com/video-intelligence/docs/reference/rpc)

## Supporting Pages

### Authenticating to the Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/common/auth](https://docs.cloud.google.com/video-intelligence/docs/common/auth)
- Source ID: `site-docs-root`
- Final score: 282
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To allow your application code to use the Video Intelligence API, you must set up the proper credentials for your application to authenticate its identity to the service and to obtain authorization to perform tasks. (These credential-related mechanisms are known as auth schemes.) Note: Authentication and authorization are large topics.
- Home Documentation AI and ML Video Intelligence API Guides Send feedback Authenticating to the Video Intelligence API Stay organized with collections Save and categorize content based on your preferences.
- This page describes what a service account is, how to create one to authenticate requests to the Video Intelligence API, and how to use your service account to set Application Default Credentials .
- Authenticating with Application Default Credentials The simplest way for applications to authenticate to Video Intelligence API is by using Application Default Credentials (ADC).

### "Detect explicit content in videos \_|\_ Video Intelligence API \_|\_ Google\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch](https://docs.cloud.google.com/video-intelligence/docs/analyze-safesearch)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://videointelligence.googleapis.com/v1/ OPERATION NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoProgress", "annotationProgress": [ { "inputUri": "/demomaker/gbikes dinosaur.mp4", "progressPercent": 100, "startTime": "2020-03-26T00:16:35.112404Z", "updateTime": "2020-03-26T00:16:55.937889Z" } ] }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse", "annotationResults": [ { "inputUri": "/demomaker/gbikes dinosaur.mp4", "explicitAnnotation": { "frames": [ { "timeOffset": "0.056149s", "pornographyLikelihood": "VERY UNLIKELY" }, { "timeOffset": "1.166841s", "pornographyLikelihood": "VERY UNLIKELY" }, ... { "timeOffset": "41.678209s", "pornographyLikelihood": "VERY UNLIKELY" }, { "timeOffset": "42.596413s", "pornographyLikelihood": "VERY UNLIKELY" } ] } } ] } } Shot detection annotations are returned as a shotAnnotations list.
- For example: "inputUri": "gs://cloud-videointelligence-demo/assistant.mp4", PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: POST https://videointelligence.googleapis.com/v1/videos:annotate Request JSON body: { "inputUri": " INPUT URI ", "features": ["EXPLICIT CONTENT DETECTION"] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- The operation name has the format projects/ PROJECT NUMBER /locations/ LOCATION ID /operations/ OPERATION ID PROJECT NUMBER : The numeric identifier for your Google Cloud project HTTP method and URL: GET https://videointelligence.googleapis.com/v1/ OPERATION NAME To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT NUMBER " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://videointelligence.googleapis.com/v1/videos:annotate" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Quickstart: Annotate a video by using client libraries \_|\_ Video Intelligence\

- URL: [https://docs.cloud.google.com/video-intelligence/docs/annotate-video-client-libraries](https://docs.cloud.google.com/video-intelligence/docs/annotate-video-client-libraries)
- Source ID: `site-iam-reference`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Label detection Now you can use the Video Intelligence API to request information from a video or video segment, such as label detection.
- LABEL DETECTION ) . build (); OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > response = client . annotateVideoAsync ( request ); System . out . println ( "Waiting for operation to complete..." ); List<VideoAnnotationResults> results = response . get (). getAnnotationResultsList (); if ( results . isEmpty ()) { System . out . println ( "No labels detected in " + gcsUri ); return ; } for ( VideoAnnotationResults result : results ) { System . out . println ( "Labels:" ); // get video segment label annotations for ( LabelAnnotation annotation : result . getSegmentLabelAnnotationsList ()) { System . out . println ( "Video label description : " + annotation . getEntity (). getDescription ()); // categories for ( Entity categoryEntity : annotation . getCategoryEntitiesList ()) { System . out . println ( "Label Category description : " + categoryEntity . getDescription ()); } // segments for ( LabelSegment segment : annotation . getSegmentsList ()) { double startTime = segment . getSegment (). getStartTimeOffset (). getSeconds () + segment . getSegment (). getStartTimeOffset (). getNanos () / 1e9 ; double endTime = segment . getSegment (). getEndTimeOffset (). getSeconds () + segment . getSegment (). getEndTimeOffset (). getNanos () / 1e9 ; System . out . printf ( "Segment location : %.3f:%.3f\n" , startTime , endTime ); System . out . println ( "Confidence : " + segment . getConfidence ()); } } } } } } Node.js Before running the example, make sure you've prepared your environment for Node.js development . // Imports the Google Cloud Video Intelligence library const videoIntelligence = require ( ' @google-cloud/video-intelligence ' ); // Creates a client const client = new videoIntelligence .
- LABEL DETECTION ] operation = video client . annotate video ( request = { "features" : features , "input uri" : "gs://cloud-samples-data/video/cat.mp4" , } ) print ( " \n Processing video for label annotations:" ) result = operation . result ( timeout = 180 ) print ( " \n Finished processing." ) first result is retrieved because a single video was processed segment labels = result . annotation results [ 0 ] . segment label annotations for i , segment label in enumerate ( segment labels ): print ( "Video label description: {} " . format ( segment label . entity . description )) for category entity in segment label . category entities : print ( " \t Label category description: {} " . format ( category entity . description ) ) for i , segment in enumerate ( segment label . segments ): start time = ( segment . segment . start time offset . seconds + segment . segment . start time offset . microseconds / 1e6 ) end time = ( segment . segment . end time offset . seconds + segment . segment . end time offset . microseconds / 1e6 ) positions = " {} s to {} s" . format ( start time , end time ) confidence = segment . confidence print ( " \t Segment {} : {} " . format ( i , positions )) print ( " \t Confidence: {} " . format ( confidence )) print ( " \n " ) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Video Intelligence reference documentation for .NET.
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.79.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-video-intelligence</artifactId> </dependency> </dependencies> If you are using Gradle , add the following to your dependencies: implementation 'com.google.cloud:google-cloud-video-intelligence:2.87.0' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-video-intelligence" % "2.87.0" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.

### Video Intelligence API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/video-intelligence/docs/reference/rpc](https://docs.cloud.google.com/video-intelligence/docs/reference/rpc)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service: videointelligence.googleapis.com The Service name videointelligence.googleapis.com is needed to create RPC client stubs. google.cloud.videointelligence.v1.VideoIntelligenceService Methods AnnotateVideo Performs asynchronous video annotation. google.cloud.videointelligence.v1p3beta1.StreamingVideoIntelligenceService Methods StreamingAnnotateVideo Performs video annotation with bidirectional streaming: emitting results while sending video/audio bytes. google.cloud.videointelligence.v1p3beta1.VideoIntelligenceService Methods AnnotateVideo Performs asynchronous video annotation. google.longrunning.Operations Methods CancelOperation Starts asynchronous cancellation on a long-running operation.
- Home Documentation AI and ML Video Intelligence API Reference Send feedback Cloud Video Intelligence API Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

