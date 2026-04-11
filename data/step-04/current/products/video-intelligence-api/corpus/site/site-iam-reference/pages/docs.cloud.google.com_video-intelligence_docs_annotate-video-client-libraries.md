---
title: "Quickstart: Annotate a video by using client libraries \_|\_ Video Intelligence\
  \ API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/annotate-video-client-libraries
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs/streaming/docker-kubernetes
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/annotate-video-client-libraries
  title: "Quickstart: Annotate a video by using client libraries \_|\_ Video Intelligence\
    \ API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Video Intelligence API
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Annotate a video by using client libraries
This quickstart introduces you to Video Intelligence API. In this quickstart,
you set up your Google Cloud project and authorization and then
make a request for Video Intelligence to annotate a video.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Video Intelligence API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Video Intelligence API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Install the client library
Go
go get cloud.google.com/go/videointelligence/apiv1
Java
If you are using Maven , add
the following to your pom.xml file. For more information about
BOMs, see The Google Cloud Platform Libraries BOM .
<dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>libraries-bom</artifactId>
<version>26.79.0</version>
<type>pom</type>
<scope>import</scope>
</dependency>
</dependencies>
</dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-video-intelligence</artifactId>
</dependency>
</dependencies>
If you are using Gradle ,
add the following to your dependencies:
implementation 'com.google.cloud:google-cloud-video-intelligence:2.87.0'
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-video-intelligence" % "2.87.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
Node.js
Before installing the library, make sure you've prepared your environment for Node.js development .
npm install @google-cloud/video-intelligence
Python
Before installing the library, make sure you've prepared your environment for Python development .
pip install --upgrade google-cloud-videointelligence
Additional languages
C# :
Please follow the
C# setup instructions
on the client libraries page
and then visit the
Video Intelligence reference documentation for .NET.
PHP :
Please follow the
PHP setup instructions
on the client libraries page
and then visit the
Video Intelligence reference documentation for PHP.
Ruby :
Please follow the
Ruby setup instructions
on the client libraries page
and then visit the
Video Intelligence reference documentation for Ruby.
Set up authentication
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
A sign-in screen appears. After you sign in, your credentials are stored in the
local credential file used by ADC .
Label detection
Now you can use the Video Intelligence API to request information from a video
or video segment, such as label detection. Run the following code to
perform your first video label detection request:
Go
// Sample video_quickstart uses the Google Cloud Video Intelligence API to label a video.
package main
import (
"context"
"fmt"
"log"
"github.com/golang/protobuf/ptypes"
video "cloud.google.com/go/videointelligence/apiv1"
videopb "cloud.google.com/go/videointelligence/apiv1/videointelligencepb"
)
func main () {
ctx := context . Background ()
// Creates a client.
client , err := video . NewClient ( ctx )
if err != nil {
log . Fatalf ( "Failed to create client: %v" , err )
}
defer client . Close ()
op , err := client . AnnotateVideo ( ctx , & videopb . AnnotateVideoRequest {
InputUri : "gs://cloud-samples-data/video/cat.mp4" ,
Features : [] videopb . Feature {
videopb . Feature_LABEL_DETECTION ,
},
})
if err != nil {
log . Fatalf ( "Failed to start annotation job: %v" , err )
}
resp , err := op . Wait ( ctx )
if err != nil {
log . Fatalf ( "Failed to annotate: %v" , err )
}
// Only one video was processed, so get the first result.
result := resp . GetAnnotationResults ()[ 0 ]
for _ , annotation := range result . SegmentLabelAnnotations {
fmt . Printf ( "Description: %s\n" , annotation . Entity . Description )
for _ , category := range annotation . CategoryEntities {
fmt . Printf ( "\tCategory: %s\n" , category . Description )
}
for _ , segment := range annotation . Segments {
start , _ := ptypes . Duration ( segment . Segment . StartTimeOffset )
end , _ := ptypes . Duration ( segment . Segment . EndTimeOffset )
fmt . Printf ( "\tSegment: %s to %s\n" , start , end )
fmt . Printf ( "\tConfidence: %v\n" , segment . Confidence )
}
}
}
Java
import com.google.api.gax.longrunning. OperationFuture ;
import com.google.cloud.videointelligence.v1. AnnotateVideoProgress ;
import com.google.cloud.videointelligence.v1. AnnotateVideoRequest ;
import com.google.cloud.videointelligence.v1. AnnotateVideoResponse ;
import com.google.cloud.videointelligence.v1. Entity ;
import com.google.cloud.videointelligence.v1. Feature ;
import com.google.cloud.videointelligence.v1. LabelAnnotation ;
import com.google.cloud.videointelligence.v1. LabelSegment ;
import com.google.cloud.videointelligence.v1. VideoAnnotationResults ;
import com.google.cloud.videointelligence.v1. VideoIntelligenceServiceClient ;
import java.util.List ;
public class QuickstartSample {
/** Demonstrates using the video intelligence client to detect labels in a video file. */
public static void main ( String [] args ) throws Exception {
// Instantiate a video intelligence client
try ( VideoIntelligenceServiceClient client = VideoIntelligenceServiceClient . create ()) {
// The Google Cloud Storage path to the video to annotate.
String gcsUri = "gs://cloud-samples-data/video/cat.mp4" ;
// Create an operation that will contain the response when the operation completes.
AnnotateVideoRequest request =
AnnotateVideoRequest . newBuilder ()
. setInputUri ( gcsUri )
. addFeatures ( Feature . LABEL_DETECTION )
. build ();
OperationFuture<AnnotateVideoResponse , AnnotateVideoProgress > response =
client . annotateVideoAsync ( request );
System . out . println ( "Waiting for operation to complete..." );
List<VideoAnnotationResults> results = response . get (). getAnnotationResultsList ();
if ( results . isEmpty ()) {
System . out . println ( "No labels detected in " + gcsUri );
return ;
}
for ( VideoAnnotationResults result : results ) {
System . out . println ( "Labels:" );
// get video segment label annotations
for ( LabelAnnotation annotation : result . getSegmentLabelAnnotationsList ()) {
System . out . println (
"Video label description : " + annotation . getEntity (). getDescription ());
// categories
for ( Entity categoryEntity : annotation . getCategoryEntitiesList ()) {
System . out . println ( "Label Category description : " + categoryEntity . getDescription ());
}
// segments
for ( LabelSegment segment : annotation . getSegmentsList ()) {
double startTime =
segment . getSegment (). getStartTimeOffset (). getSeconds ()
+ segment . getSegment (). getStartTimeOffset (). getNanos () / 1e9 ;
double endTime =
segment . getSegment (). getEndTimeOffset (). getSeconds ()
+ segment . getSegment (). getEndTimeOffset (). getNanos () / 1e9 ;
System . out . printf ( "Segment location : %.3f:%.3f\n" , startTime , endTime );
System . out . println ( "Confidence : " + segment . getConfidence ());
}
}
}
}
}
}
Node.js
Before running the example, make sure you've prepared your environment for Node.js development .
// Imports the Google Cloud Video Intelligence library
const videoIntelligence = require ( ' @google-cloud/video-intelligence ' );
// Creates a client
const client = new videoIntelligence . VideoIntelligenceServiceClient ();
// The GCS uri of the video to analyze
const gcsUri = 'gs://cloud-samples-data/video/cat.mp4' ;
// Construct request
const request = {
inputUri : gcsUri ,
features : [ 'LABEL_DETECTION' ],
};
// Execute request
const [ operation ] = await client . annotateVideo ( request );
console . log (
'Waiting for operation to complete... (this may take a few minutes)'
);
const [ operationResult ] = await operation . promise ();
// Gets annotations for video
const annotations = operationResult . annotationResults [ 0 ];
// Gets labels for video from its annotations
const labels = annotations . segmentLabelAnnotations ;
labels . forEach ( label = > {
console . log ( `Label ${ label . entity . description } occurs at:` );
label . segments . forEach ( segment = > {
segment = segment . segment ;
console . log (
`\tStart: ${ segment . startTimeOffset . seconds } ` +
`. ${ ( segment . startTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s`
);
console . log (
`\tEnd: ${ segment . endTimeOffset . seconds } .` +
` ${ ( segment . endTimeOffset . nanos / 1e6 ). toFixed ( 0 ) } s`
);
});
});
Python
Before running the example, make sure you've prepared your environment for Python development .
from google.cloud import videointelligence
video_client = videointelligence . VideoIntelligenceServiceClient ()
features = [ videointelligence . Feature . LABEL_DETECTION ]
operation = video_client . annotate_video (
request = {
"features" : features ,
"input_uri" : "gs://cloud-samples-data/video/cat.mp4" ,
}
)
print ( " \n Processing video for label annotations:" )
result = operation . result ( timeout = 180 )
print ( " \n Finished processing." )
# first result is retrieved because a single video was processed
segment_labels = result . annotation_results [ 0 ] . segment_label_annotations
for i , segment_label in enumerate ( segment_labels ):
print ( "Video label description: {} " . format ( segment_label . entity . description ))
for category_entity in segment_label . category_entities :
print (
" \t Label category description: {} " . format ( category_entity . description )
)
for i , segment in enumerate ( segment_label . segments ):
start_time = (
segment . segment . start_time_offset . seconds
+ segment . segment . start_time_offset . microseconds / 1e6
)
end_time = (
segment . segment . end_time_offset . seconds
+ segment . segment . end_time_offset . microseconds / 1e6
)
positions = " {} s to {} s" . format ( start_time , end_time )
confidence = segment . confidence
print ( " \t Segment {} : {} " . format ( i , positions ))
print ( " \t Confidence: {} " . format ( confidence ))
print ( " \n " )
Additional languages
C# :
Please follow the
C# setup instructions
on the client libraries page
and then visit the
Video Intelligence reference documentation for .NET.
PHP :
Please follow the
PHP setup instructions
on the client libraries page
and then visit the
Video Intelligence reference documentation for PHP.
Ruby :
Please follow the
Ruby setup instructions
on the client libraries page
and then visit the
Video Intelligence reference documentation for Ruby.
Congratulations! You've sent your first request to Video Intelligence API.
How did it go?
It worked!
Great!
What did you like about the quickstart? What could
we have done better?
Let us know! .
I got stuck.
We're sorry to hear that.
Let us know what went wrong . We'll want to fix it.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Use the Google Cloud console to delete your project if you don't
need it.
What's next
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
