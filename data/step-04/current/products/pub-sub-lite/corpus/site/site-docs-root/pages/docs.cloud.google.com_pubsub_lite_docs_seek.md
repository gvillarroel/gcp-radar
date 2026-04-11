---
title: "Replaying and purging Pub/Sub Lite messages \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/lite/docs/seek
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/lite/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/lite/docs/seek
  title: "Replaying and purging Pub/Sub Lite messages \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Pub/Sub Lite
Guides
Send feedback
Replaying and purging Pub/Sub Lite messages
Stay organized with collections
Save and categorize content based on your preferences.
Note: Pub/Sub Lite is deprecated. Effective June 30, 2026,
Pub/Sub Lite will be turned down.
Current customers: Pub/Sub Lite remains functional until June 30, 2026.
If you have not used Pub/Sub Lite within the 90-day period preceding July 15, 2025
(April 15, 2025 - July 15, 2025), you won't be able to access Pub/Sub Lite starting on
July 15, 2025.
New customers: Pub/Sub Lite is no longer available for new customers after September 24, 2024.
You can migrate your Pub/Sub Lite service to
Google Cloud Managed Service for Apache Kafka
or Pub/Sub .
This page shows how to initiate and track seek operations for
Lite subscriptions .
The Pub/Sub Lite seek feature allows you to replay and purge messages.
It has the same use cases as
Pub/Sub seek. Unlike Pub/Sub, you do not need to
configure Lite topics or subscriptions to use seek and there is no additional
cost.
The propagation of the seek to subscribers can be tracked using a
long-running operation .
This is an API pattern used by Google Cloud products to track the progress of
long-running tasks.
Initiating seek
Pub/Sub Lite seek operations are initiated out-of-band (that is, from
the Google Cloud CLI or separate Pub/Sub Lite API) and propagated to
subscribers . Online subscribers will be
notified of the seek and react while they are live. Offline subscribers will
react to the seek once they are online.
You must specify a target location for the seek, which may be one of the
following:
Beginning of message backlog : Replays all retained messages. Note that the
amount of available backlog is determined by the
Lite topic's message retention period and
storage capacity.
End of message backlog : Purges messages by skipping past all current
published messages.
Publish timestamp : Seeks to the first message with a (server-generated)
publish timestamp greater than or equal to the specified timestamp. If no such
message can be located, seeks to the end of the message backlog. Subsequent
messages are guaranteed to have a publish timestamp greater than or equal to
the specified timestamp, with the exception of specified timestamps that are
in the future.
Event timestamp : Seeks to the first message with an (user-specified) event
timestamp greater than or equal to the specified timestamp. If no such message
can be located, seeks to the end of the message backlog. As event timestamps
are user supplied, subsequent messages may have event timestamps less than the
specified event time and should be filtered by the client, if necessary. If
messages do not have an event timestamp set, their publish timestamps are used
as a fallback.
You can initiate a seek for a Lite subscription with the Google Cloud CLI or the
Pub/Sub Lite API.
gcloud
To seek a Lite subscription, use the
gcloud pubsub lite-subscriptions seek
command:
gcloud pubsub lite-subscriptions seek SUBSCRIPTION_ID \
--location = LITE_LOCATION \
( --publish-time = PUBLISH_TIME | --event-time = EVENT_TIME | \
--starting-offset = STARTING_OFFSET ) \
[ --async ]
Replace the following:
SUBSCRIPTION_ID : the ID of the Lite subscription
LITE_LOCATION : the location of the Lite subscription
PUBLISH_TIME : the publish timestamp to seek to
EVENT_TIME : the event timestamp to seek to
STARTING_OFFSET : beginning or end
See gcloud topic datetimes for
information on time formats.
Note: If you omit the --async flag, the command waits for the operation to
complete. If subscribers are offline, the completion is delayed until they are
online. For more information, see
tracking seek propagation .
If you specify the --async flag and the request is successful, the command
line displays the ID of the seek operation:
Check operation [projects/ PROJECT_NUMBER /locations/ LITE_LOCATION /operations/ OPERATION_ID ] for status.
Use the
gcloud pubsub lite-operations describe
command to get the operation status.
REST
To seek a Lite subscription, send a POST request like the following:
POST https:// REGION -pubsublite.googleapis.com/v1/admin/projects/ PROJECT_NUMBER /locations/ LITE_LOCATION /subscriptions/ SUBSCRIPTION_ID :seek
Authorization: Bearer $(gcloud auth print-access-token)
Replace the following:
REGION : the region that the Lite subscription is in
PROJECT_NUMBER : the project number of the project with the Lite
subscription
LITE_LOCATION : the location of the Lite subscription
SUBSCRIPTION_ID : the ID of the Lite subscription
To seek to the beginning or end of the message backlog, set the following
fields in the request body:
{
"namedTarget" : NAMED_TARGET
}
Replace the following:
NAMED_TARGET : TAIL for the beginning or HEAD for the end of
the message backlog.
To seek to a publish timestamp, set the following fields in the request body:
{
"timeTarget" : {
"publishTime" : TIMESTAMP
}
}
Specify "eventTime" to seek to an event timestamp.
Replace the following:
TIMESTAMP : A timestamp in RFC 3339 UTC format, with nanosecond
resolution and up to nine fractional digits. Examples:
"2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
If the request is successful, the response is a long-running operation in JSON
format:
{
"name": projects/ PROJECT_NUMBER /locations/ LITE_LOCATION /operations/ OPERATION_ID ,
...
}
Go
The following sample uses the major version of the Go Pub/Sub client library (v2). If you are still using the v1 library, see
the migration guide to v2 .
To see a list of v1 code samples, see
the deprecated code samples .
Before trying this sample, follow the Go setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Go API reference documentation .
import (
"context"
"fmt"
"io"
"cloud.google.com/go/pubsublite"
)
// seekSubscription initiates a seek operation for a subscription.
func seekSubscription ( w io . Writer , projectID , region , zone , subID string , seekTarget pubsublite . SeekTarget , waitForOperation bool ) error {
// projectID := "my-project-id"
// region := "us-central1"
// zone := "us-central1-a"
// subID := "my-subscription"
// seekTarget := pubsublite.Beginning
// waitForOperation := false
// Possible values for seekTarget:
// - pubsublite.Beginning: replays from the beginning of all retained
// messages.
// - pubsublite.End: skips past all current published messages.
// - pubsublite.PublishTime(<time>): delivers messages with publish time
// greater than or equal to the specified timestamp.
// - pubsublite.EventTime(<time>): seeks to the first message with event
// time greater than or equal to the specified timestamp.
// Waiting for the seek operation to complete is optional. It indicates when
// subscribers for all partitions are receiving messages from the seek
// target. If subscribers are offline, the operation will complete once they
// are online.
ctx := context . Background ()
client , err := pubsublite . NewAdminClient ( ctx , region )
if err != nil {
return fmt . Errorf ( "pubsublite.NewAdminClient: %w" , err )
}
defer client . Close ()
// Initiate an out-of-band seek for a subscription to the specified target.
// If an operation is returned, the seek has been successfully registered
// and will eventually propagate to subscribers.
subPath := fmt . Sprintf ( "projects/%s/locations/%s/subscriptions/%s" , projectID , zone , subID )
seekOp , err := client . SeekSubscription ( ctx , subPath , seekTarget )
if err != nil {
return fmt . Errorf ( "client.SeekSubscription got err: %w" , err )
}
fmt . Fprintf ( w , "Seek operation initiated: %s\n" , seekOp . Name ())
if waitForOperation {
_ , err = seekOp . Wait ( ctx )
if err != nil {
return fmt . Errorf ( "seekOp.Wait got err: %w" , err )
}
metadata , err := seekOp . Metadata ()
if err != nil {
return fmt . Errorf ( "seekOp.Metadata got err: %w" , err )
}
fmt . Fprintf ( w , "Seek operation completed with metadata: %v\n" , metadata )
}
return nil
}
Java
Before running this sample, follow the Java setup instructions in
Pub/Sub Lite Client Libraries .
import com.google.api.gax.longrunning. OperationFuture ;
import com.google.cloud.pubsublite. AdminClient ;
import com.google.cloud.pubsublite. AdminClientSettings ;
import com.google.cloud.pubsublite. BacklogLocation ;
import com.google.cloud.pubsublite. CloudRegion ;
import com.google.cloud.pubsublite. CloudRegionOrZone ;
import com.google.cloud.pubsublite. CloudZone ;
import com.google.cloud.pubsublite. ProjectNumber ;
import com.google.cloud.pubsublite. SeekTarget ;
import com.google.cloud.pubsublite. SubscriptionName ;
import com.google.cloud.pubsublite. SubscriptionPath ;
import com.google.cloud.pubsublite.proto. OperationMetadata ;
import com.google.cloud.pubsublite.proto. SeekSubscriptionResponse ;
public class SeekSubscriptionExample {
public static void main ( String ... args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String cloudRegion = "your-cloud-region" ;
char zoneId = 'b' ;
// Choose an existing subscription.
String subscriptionId = "your-subscription-id" ;
long projectNumber = Long . parseLong ( "123456789" );
// True if using a regional location. False if using a zonal location.
// https://cloud.google.com/pubsub/lite/docs/topics
boolean regional = false ;
// Choose a target location within the message backlog to seek a subscription to.
// Possible values for SeekTarget:
// - SeekTarget.of(BacklogLocation.BEGINNING): replays from the beginning of all retained
// messages.
// - SeekTarget.of(BacklogLocation.END): skips past all current published messages.
// - SeekTarget.ofPublishTime(<timestamp>): delivers messages with publish time greater than
// or equal to the specified timestamp.
// - SeekTarget.ofEventTime(<timestamp>): seeks to the first message with event time greater
// than or equal to the specified timestamp.
SeekTarget target = SeekTarget . of ( BacklogLocation . BEGINNING );
// Optional: Wait for the seek operation to complete, which indicates when subscribers for all
// partitions are receiving messages from the seek target. If subscribers are offline, the
// operation will complete once they are online.
boolean waitForOperation = false ;
seekSubscriptionExample (
cloudRegion , zoneId , projectNumber , subscriptionId , target , waitForOperation , regional );
}
public static void seekSubscriptionExample (
String cloudRegion ,
char zoneId ,
long projectNumber ,
String subscriptionId ,
SeekTarget target ,
boolean waitForOperation ,
boolean regional )
throws Exception {
CloudRegionOrZone location ;
if ( regional ) {
location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion ));
} else {
location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId ));
}
SubscriptionPath subscriptionPath =
SubscriptionPath . newBuilder ()
. setLocation ( location )
. setProject ( ProjectNumber . of ( projectNumber ))
. setName ( SubscriptionName . of ( subscriptionId ))
. build ();
AdminClientSettings adminClientSettings =
AdminClientSettings . newBuilder (). setRegion ( CloudRegion . of ( cloudRegion )). build ();
try ( AdminClient adminClient = AdminClient . create ( adminClientSettings )) {
// Initiate an out-of-band seek for a subscription to the specified target. If an operation
// is returned, the seek has been successfully registered and will eventually propagate to
// subscribers.
OperationFuture<SeekSubscriptionResponse , OperationMetadata > seekFuture =
adminClient . seekSubscription ( subscriptionPath , target );
System . out . println ( "Seek operation " + seekFuture . getName () + " initiated successfully." );
if ( waitForOperation ) {
System . out . println ( "Waiting for operation to complete..." );
seekFuture . get ();
System . out . println ( "Operation completed. Metadata:\n" + seekFuture . getMetadata (). get ());
}
}
}
}
Python
Before running this sample, follow the Python setup instructions in
Pub/Sub Lite Client Libraries .
from google.api_core.exceptions import NotFound
from google.cloud.pubsublite import AdminClient
from google.cloud.pubsublite.types import CloudRegion , CloudZone , SubscriptionPath
# TODO(developer):
# project_number = 1122334455
# cloud_region = "us-central1"
# zone_id = "a"
# subscription_id = "your-subscription-id"
# seek_target = BacklogLocation.BEGINNING
# wait_for_operation = False
# regional = True
# Possible values for seek_target:
# - BacklogLocation.BEGINNING: replays from the beginning of all retained
# messages.
# - BacklogLocation.END: skips past all current published messages.
# - PublishTime(<datetime>): delivers messages with publish time greater
# than or equal to the specified timestamp.
# - EventTime(<datetime>): seeks to the first message with event time
# greater than or equal to the specified timestamp.
# Waiting for the seek operation to complete is optional. It indicates when
# subscribers for all partitions are receiving messages from the seek
# target. If subscribers are offline, the operation will complete once they
# are online.
if regional :
location = CloudRegion ( cloud_region )
else :
location = CloudZone ( CloudRegion ( cloud_region ), zone_id )
subscription_path = SubscriptionPath ( project_number , location , subscription_id )
client = AdminClient ( cloud_region )
try :
# Initiate an out-of-band seek for a subscription to the specified
# target. If an operation is returned, the seek has been successfully
# registered and will eventually propagate to subscribers.
seek_operation = client . seek_subscription ( subscription_path , seek_target )
print ( f "Seek operation: { seek_operation . operation . name } " )
except NotFound :
print ( f " { subscription_path } not found." )
return
if wait_for_operation :
print ( "Waiting for operation to complete..." )
seek_operation . result ()
print ( f "Operation completed. Metadata: \n { seek_operation . metadata } " )
If the seek request is successful, the response is a long-running operation ID.
See information about tracking seek propagation
below if you need to know when subscribers have reacted to the seek.
Supported clients
Seek operations require subscribers that use the following
Pub/Sub Lite client libraries and minimum versions:
java-pubsublite : version 0.15.0.
java-pubsublite-kafka : version 0.6.0.
Consumers must also have auto-commit enabled.
python-pubsublite : version 0.6.0.
google-cloud-go : pubsublite version 0.10.0.
Note: The
java-pubsublite-kafka
client library also supports a different type of seek that can be initiated by
subscribers. This is different to the type of seek described on this page, which
is initiated out-of-band and pushed to subscribers. Both types of seeks should
not be initiated concurrently, as they would interfere with one another.
Seek operations do not work when Pub/Sub Lite is used with
Apache Beam or
Apache Spark because these
systems perform their own tracking of offsets within partitions. The workaround
is to drain, seek and restart the workflows.
The Pub/Sub Lite service is able to detect a subscriber client that
does not support seek operations (for example, an old client library version or
unsupported framework) and will abort the seek with a FAILED_PRECONDITION
error status.
Tracking seek propagation
If a long-running operation ID is returned for the initial seek request, this
means the seek was successfully registered in the Pub/Sub Lite service
and will eventually propagate to subscribers (if the client is supported, as
above). The operation tracks this propagation and completes once subscribers
have reacted to the seek, for all partitions.
If subscribers are online, it may take up to 30 seconds for them to receive the
seek notification. Seek notifications are sent independently for each partition,
thus partitions may not react to the seek at the same instant. If subscribers
are offline, the seek operation will complete once they are online.
If a previous seek invocation hasn't finished propagating to subscribers, it is
aborted and superseded by the new seek operation. Seek operation metadata
expires after 30 days, which effectively aborts any incomplete seek operations.
Seek operation status
You can get the status of a seek operation using the Google Cloud CLI, or the
Pub/Sub Lite API.
gcloud
To get details about a Lite operation, use the
gcloud pubsub lite-operations describe
command:
gcloud pubsub lite-operations describe OPERATION_ID \
--location = LITE_LOCATION
Replace the following:
OPERATION_ID : the ID of the Lite operation
LITE_LOCATION : the location of the Lite operation
If the request is successful, the command line displays metadata about the
Lite operation:
metadata:
'@type': type.googleapis.com/google.cloud.pubsublite.v1.OperationMetadata
createTime: '2021-01-02T03:04:05Z'
target: projects/ PROJECT_NUMBER /locations/ LITE_LOCATION /subscriptions/ SUBSCRIPTION_ID
verb: seek
name: projects/ PROJECT_NUMBER /locations/ LITE_LOCATION /operations/ OPERATION_ID
REST
To get details about a Lite operations, send a GET request like the
following:
GET https:// REGION -pubsublite.googleapis.com/v1/admin/projects/ PROJECT_NUMBER /locations/ LITE_LOCATION /operations/ OPERATION_ID
Authorization: Bearer $(gcloud auth print-access-token)
Replace the following:
REGION : the region that the Lite operation is in
PROJECT_NUMBER : the project number of the project with the Lite
operation
LITE_LOCATION : the location of the Lite operation
OPERATION_ID : the ID of the Lite operation
If the request is successful, the response is a long-running operation in JSON
format:
{
"name": projects/ PROJECT_NUMBER /locations/ LITE_LOCATION /operations/ OPERATION_ID ,
...
}
Listing seek operations
Completed and active seek operations can be listed using the Google Cloud CLI, or
the Pub/Sub Lite API.
gcloud
To list Lite operations in a project, use the
gcloud pubsub lite-operations list
command:
gcloud pubsub lite-operations list \
--location= LITE_LOCATION \
[--subscription= SUBSCRIPTION ] \
[--done= DONE ] \
[--limit= LIMIT ]
Replace the following:
LITE_LOCATION : the location that the Lite operations are in
SUBSCRIPTION : filter operations by Lite subscription
DONE : true to include only complete operations, false to
include only active operations
LIMIT : an integer to limit the number of operations returned
If the request is successful, the command line displays a summary of the Lite
operations:
OPERATION_ID TARGET CREATE_TIME DONE ERROR_CODE MESSAGE
operation2 projects/ PROJECT_NUMBER /locations/ LITE_LOCATION /subscriptions/ SUBSCRIPTION_ID 2021-05-06T07:08:00Z True
operation1 projects/ PROJECT_NUMBER /locations/ LITE_LOCATION /subscriptions/ SUBSCRIPTION_ID 2021-01-02T03:04:00Z True
REST
To list Lite operations in a project, send a GET request like the following:
GET https:// REGION -pubsublite.googleapis.com/v1/admin/projects/ PROJECT_NUMBER /locations/ LITE_LOCATION /operations
Authorization: Bearer $(gcloud auth print-access-token)
Replace the following:
REGION : the region that the Lite operations are in
PROJECT_NUMBER : the project number of the project with the Lite
operations
LITE_LOCATION : the location that the Lite operations are in
If the request is successful, the response is a list of Lite operations in
JSON format:
{
"operations": [
{
"name": "projects/ PROJECT_NUMBER /locations/ LITE_LOCATION /operations/ OPERATION_ID ",
...
},
{
"name": "projects/ PROJECT_NUMBER /locations/ LITE_LOCATION /operations/ OPERATION_ID ",
...
}
]
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
