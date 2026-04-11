---
title: "Quickstart: Publish and receive messages in Pub/Sub by using the client libraries\
  \ \_|\_ Pub/Sub Lite \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/lite/docs/publish-receive-messages-console
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/lite/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/lite/docs/publish-receive-messages-console
  title: "Quickstart: Publish and receive messages in Pub/Sub by using the client\
    \ libraries \_|\_ Pub/Sub Lite \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Publish and receive messages in Pub/Sub by using the client libraries
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
This page shows you how to do the following:
Create a project, enable billing, and enable the Pub/Sub Lite
API using the Google Cloud CLI.
Create Lite reservations, Lite topics, and Lite subscriptions
using the Google Cloud CLI.
Send and receive messages using the Pub/Sub Lite client library for
Go, Java, and Python.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Pub/Sub Lite API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable pubsublite.googleapis.com
Create local authentication credentials for your user account:
gcloud auth application-default login
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/pubsublite.admin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Pub/Sub Lite API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable pubsublite.googleapis.com
Create local authentication credentials for your user account:
gcloud auth application-default login
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/pubsublite.admin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Install the client library
Go
go get cloud.google.com/go/pubsublite
Java
If you are using Maven , add
the following to your pom.xml file. For more information about
BOMs, see The Google Cloud Platform Libraries BOM .
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-pubsublite</artifactId>
<version>1.15.6</version>
</dependency>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-pubsub</artifactId>
<version>1.150.0</version>
</dependency>
If you are using Gradle ,
add the following to your dependencies:
implementation 'com.google.cloud:google-cloud-pubsublite:1.16.3'
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-pubsublite" % "1.16.3"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
Python
pip install --upgrade google-cloud-pubsublite
Create a Lite reservation
To create a Lite reservation, use the
gcloud pubsub lite-reservations create
command. The following sample creates a reservation called testRes .
gcloud pubsub lite-reservations create testRes \
--location = us-central1 \
--throughput-capacity = 1
Create a regional Lite topic
To create a regional Lite topic, use the gcloud pubsub lite-topics create command. The following sample creates a topic called testTopic .
gcloud pubsub lite-topics create testTopic \
--location = us-central1 \
--partitions = 1 \
--per-partition-bytes = 30GiB \
--throughput-reservation = projects/ PROJECT_ID /locations/us-central1/reservations/testRes \
Replace the following:
PROJECT_ID : the ID of the project
Create a Lite subscription
To create a Lite subscription, use the
gcloud pubsub lite-subscriptions create
command. The following sample creates a subscription called testSub .
gcloud pubsub lite-subscriptions create testSub \
--location = us-central1 \
--topic = testTopic \
--delivery-requirement = deliver-immediately
Send messages
Send messages to the Lite topic using the following publisher application:
Go
Before trying this sample, follow the Go setup instructions in the
Pub/Sub Lite quickstart using
client libraries .
For more information, see the
Pub/Sub Lite Go API
reference documentation .
To authenticate to Pub/Sub Lite, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
"flag"
"fmt"
"log"
"sync"
"cloud.google.com/go/pubsub"
"cloud.google.com/go/pubsublite/pscompat"
"golang.org/x/sync/errgroup"
)
func main () {
// NOTE: Set these flags for an existing Pub/Sub Lite topic when running this
// sample.
projectID := flag . String ( "project_id" , "" , "Cloud Project ID" )
zone := flag . String ( "zone" , "" , "Cloud Zone where the topic resides, e.g. us-central1-a" )
topicID := flag . String ( "topic_id" , "" , "Existing Pub/Sub Lite topic" )
messageCount := flag . Int ( "message_count" , 100 , "The number of messages to send" )
flag . Parse ()
ctx := context . Background ()
topicPath := fmt . Sprintf ( "projects/%s/locations/%s/topics/%s" , * projectID , * zone , * topicID )
// Create the publisher client.
publisher , err := pscompat . NewPublisherClient ( ctx , topicPath )
if err != nil {
log . Fatalf ( "pscompat.NewPublisherClient error: %v" , err )
}
// Ensure the publisher will be shut down.
defer publisher . Stop ()
// Collect any messages that need to be republished with a new publisher
// client.
var toRepublish [] * pubsub . Message
var toRepublishMu sync . Mutex
// Publish messages. Messages are automatically batched.
g := new ( errgroup . Group )
for i := 0 ; i < * messageCount ; i ++ {
msg := & pubsub . Message {
Data : [] byte ( fmt . Sprintf ( "message-%d" , i )),
}
result := publisher . Publish ( ctx , msg )
g . Go ( func () error {
// Get blocks until the result is ready.
id , err := result . Get ( ctx )
if err != nil {
// NOTE: A failed PublishResult indicates that the publisher client
// encountered a fatal error and has permanently terminated. After the
// fatal error has been resolved, a new publisher client instance must
// be created to republish failed messages.
fmt . Printf ( "Publish error: %v\n" , err )
toRepublishMu . Lock ()
toRepublish = append ( toRepublish , msg )
toRepublishMu . Unlock ()
return err
}
// Metadata decoded from the id contains the partition and offset.
metadata , err := pscompat . ParseMessageMetadata ( id )
if err != nil {
fmt . Printf ( "Failed to parse message metadata %q: %v\n" , id , err )
return err
}
fmt . Printf ( "Published: partition=%d, offset=%d\n" , metadata . Partition , metadata . Offset )
return nil
})
}
if err := g . Wait (); err != nil {
fmt . Printf ( "Publishing finished with error: %v\n" , err )
}
fmt . Printf ( "Published %d messages\n" , * messageCount - len ( toRepublish ))
// Print the error that caused the publisher client to terminate (if any),
// which may contain more context than PublishResults.
if err := publisher . Error (); err != nil {
fmt . Printf ( "Publisher client terminated due to error: %v\n" , publisher . Error ())
}
}
Java
import com.google.api.core. ApiFuture ;
import com.google.api.core. ApiFutures ;
import com.google.api.gax.rpc. ApiException ;
import com.google.cloud.pubsublite. CloudRegion ;
import com.google.cloud.pubsublite. CloudRegionOrZone ;
import com.google.cloud.pubsublite. CloudZone ;
import com.google.cloud.pubsublite. MessageMetadata ;
import com.google.cloud.pubsublite. ProjectNumber ;
import com.google.cloud.pubsublite. TopicName ;
import com.google.cloud.pubsublite. TopicPath ;
import com.google.cloud.pubsublite.cloudpubsub. Publisher ;
import com.google.cloud.pubsublite.cloudpubsub. PublisherSettings ;
import com.google.protobuf. ByteString ;
import com.google.pubsub.v1. PubsubMessage ;
import java.util.ArrayList ;
import java.util.List ;
import java.util.concurrent.ExecutionException ;
public class PublisherExample {
public static void main ( String ... args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String cloudRegion = "your-cloud-region" ;
char zoneId = 'b' ;
// Choose an existing topic for the publish example to work.
String topicId = "your-topic-id" ;
long projectNumber = Long . parseLong ( "123456789" );
int messageCount = 100 ;
// True if using a regional location. False if using a zonal location.
// https://cloud.google.com/pubsub/lite/docs/topics
boolean regional = false ;
publisherExample ( cloudRegion , zoneId , projectNumber , topicId , messageCount , regional );
}
// Publish messages to a topic.
public static void publisherExample (
String cloudRegion ,
char zoneId ,
long projectNumber ,
String topicId ,
int messageCount ,
boolean regional )
throws ApiException , ExecutionException , InterruptedException {
CloudRegionOrZone location ;
if ( regional ) {
location = CloudRegionOrZone . of ( CloudRegion . of ( cloudRegion ));
} else {
location = CloudRegionOrZone . of ( CloudZone . of ( CloudRegion . of ( cloudRegion ), zoneId ));
}
TopicPath topicPath =
TopicPath . newBuilder ()
. setProject ( ProjectNumber . of ( projectNumber ))
. setLocation ( location )
. setName ( TopicName . of ( topicId ))
. build ();
Publisher publisher = null ;
List<ApiFuture<String> > futures = new ArrayList <> ();
try {
PublisherSettings publisherSettings =
PublisherSettings . newBuilder (). setTopicPath ( topicPath ). build ();
publisher = Publisher . create ( publisherSettings );
// Start the publisher. Upon successful starting, its state will become RUNNING.
publisher . startAsync (). awaitRunning ();
for ( int i = 0 ; i < messageCount ; i ++ ) {
String message = "message-" + i ;
// Convert the message to a byte string.
ByteString data = ByteString . copyFromUtf8 ( message );
PubsubMessage pubsubMessage = PubsubMessage . newBuilder (). setData ( data ). build ();
// Publish a message. Messages are automatically batched.
ApiFuture<String> future = publish er . publish ( pubsubMessage );
futures . add ( future );
}
} finally {
ArrayList<MessageMetadata> metadata = new ArrayList <> ();
List<String> ackIds = ApiFutures . allAsList ( futures ). get ();
for ( String id : ackIds ) {
// Decoded metadata contains partition and offset.
metadata . add ( MessageMetadata . decode ( id ));
}
System . out . println ( metadata + "\nPublished " + ackIds . size () + " messages." );
if ( publisher != null ) {
// Shut down the publisher.
publisher . stopAsync (). awaitTerminated ();
System . out . println ( "Publisher is shut down." );
}
}
}
}
Python
Before trying this sample, follow the Python setup instructions in the
Pub/Sub Lite quickstart using
client libraries .
For more information, see the
Pub/Sub Lite Python API
reference documentation .
To authenticate to Pub/Sub Lite, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud.pubsublite.cloudpubsub import PublisherClient
from google.cloud.pubsublite.types import (
CloudRegion ,
CloudZone ,
MessageMetadata ,
TopicPath ,
)
# TODO(developer):
# project_number = 1122334455
# cloud_region = "us-central1"
# zone_id = "a"
# topic_id = "your-topic-id"
# regional = True
if regional :
location = CloudRegion ( cloud_region )
else :
location = CloudZone ( CloudRegion ( cloud_region ), zone_id )
topic_path = TopicPath ( project_number , location , topic_id )
# PublisherClient() must be used in a `with` block or have __enter__() called before use.
with PublisherClient () as publisher_client :
data = "Hello world!"
api_future = publisher_client . publish ( topic_path , data . encode ( "utf-8" ))
# result() blocks. To resolve API futures asynchronously, use add_done_callback().
message_id = api_future . result ()
message_metadata = MessageMetadata . decode ( message_id )
print (
f "Published a message to { topic_path } with partition { message_metadata . partition . value } and offset { message_metadata . cursor . offset } ."
)
The publisher sends 100 messages to a Lite topic and prints the number of
messages that the Pub/Sub Lite service receives.
Receive messages
Receive messages from the Lite subscription using the following subscriber
application:
Go
Before trying this sample, follow the Go setup instructions in the
Pub/Sub Lite quickstart using
client libraries .
For more information, see the
Pub/Sub Lite Go API
reference documentation .
To authenticate to Pub/Sub Lite, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
"flag"
"fmt"
"log"
"sync/atomic"
"time"
"cloud.google.com/go/pubsub"
"cloud.google.com/go/pubsublite/pscompat"
)
func main () {
// NOTE: Set these flags for an existing Pub/Sub Lite subscription containing
// published messages when running this sample.
projectID := flag . String ( "project_id" , "" , "Cloud Project ID" )
zone := flag . String ( "zone" , "" , "Cloud Zone where the topic resides, e.g. us-central1-a" )
subscriptionID := flag . String ( "subscription_id" , "" , "Existing Pub/Sub Lite subscription" )
timeout := flag . Duration ( "timeout" , 90 * time . Second , "The duration to receive messages" )
flag . Parse ()
ctx := context . Background ()
subscriptionPath := fmt . Sprintf ( "projects/%s/locations/%s/subscriptions/%s" , * projectID , * zone , * subscriptionID )
// Configure flow control settings. These settings apply per partition.
// The message stream is paused based on the maximum size or number of
// messages that the subscriber has already received, whichever condition is
// met first.
settings := pscompat . ReceiveSettings {
// 10 MiB. Must be greater than the allowed size of the largest message
// (1 MiB).
MaxOutstandingBytes : 10 * 1024 * 1024 ,
// 1,000 outstanding messages. Must be > 0.
MaxOutstandingMessages : 1000 ,
}
// Create the subscriber client.
subscriber , err := pscompat . NewSubscriberClientWithSettings ( ctx , subscriptionPath , settings )
if err != nil {
log . Fatalf ( "pscompat.NewSubscriberClientWithSettings error: %v" , err )
}
// Listen for messages until the timeout expires.
log . Printf ( "Listening to messages on %s for %v...\n" , subscriptionPath , * timeout )
cctx , cancel := context . WithTimeout ( ctx , * timeout )
defer cancel ()
var receiveCount int32
// Receive blocks until the context is cancelled or an error occurs.
if err := subscriber . Receive ( cctx , func ( ctx context . Context , msg * pubsub . Message ) {
// NOTE: May be called concurrently; synchronize access to shared memory.
atomic . AddInt32 ( & receiveCount , 1 )
// Metadata decoded from the message ID contains the partition and offset.
metadata , err := pscompat . ParseMessageMetadata ( msg . ID )
if err != nil {
log . Fatalf ( "Failed to parse %q: %v" , msg . ID , err )
}
fmt . Printf ( "Received (partition=%d, offset=%d): %s\n" , metadata . Partition , metadata . Offset , string ( msg . Data ))
msg . Ack ()
}); err != nil {
log . Fatalf ( "SubscriberClient.Receive error: %v" , err )
}
fmt . Printf ( "Received %d messages\n" , receiveCount )
}
Java
Before trying this sample, follow the Java setup instructions in the
Pub/Sub Lite quickstart using
client libraries .
For more information, see the
Pub/Sub Lite Java API
reference documentation .
To authenticate to Pub/Sub Lite, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.api.gax.rpc. ApiException ;
import com.google.cloud.pubsub.v1. AckReplyConsumer ;
import com.google.cloud.pubsub.v1. MessageReceiver ;
import com.google.cloud.pubsublite. CloudRegion ;
import com.google.cloud.pubsublite. CloudRegionOrZone ;
import com.google.cloud.pubsublite. CloudZone ;
import com.google.cloud.pubsublite. MessageMetadata ;
import com.google.cloud.pubsublite. ProjectNumber ;
import com.google.cloud.pubsublite. SubscriptionName ;
import com.google.cloud.pubsublite. SubscriptionPath ;
import com.google.cloud.pubsublite.cloudpubsub. FlowControlSettings ;
import com.google.cloud.pubsublite.cloudpubsub. MessageTransforms ;
import com.google.cloud.pubsublite.cloudpubsub. Subscriber ;
import com.google.cloud.pubsublite.cloudpubsub. SubscriberSettings ;
import com.google.protobuf. Timestamp ;
import com.google.pubsub.v1. PubsubMessage ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class SubscriberExample {
public static void main ( String ... args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String cloudRegion = "your-cloud-region" ;
char zoneId = 'b' ;
// Choose an existing subscription for the subscribe example to work.
String subscriptionId = "your-subscription-id" ;
long projectNumber = Long . parseLong ( "123456789" );
// True if using a regional location. False if using a zonal location.
// https://cloud.google.com/pubsub/lite/docs/topics
boolean regional = false ;
subscriberExample ( cloudRegion , zoneId , projectNumber , subscriptionId , regional );
}
public static void subscriberExample (
String cloudRegion , char zoneId , long projectNumber , String subscriptionId , boolean regional )
throws ApiException {
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
// The message stream is paused based on the maximum size or number of messages that the
// subscriber has already received, whichever condition is met first.
FlowControlSettings flowControlSettings =
FlowControlSettings . builder ()
// 10 MiB. Must be greater than the allowed size of the largest message (1 MiB).
. setBytesOutstanding ( 10 * 1024 * 1024L )
// 1,000 outstanding messages. Must be >0.
. setMessagesOutstanding ( 1000L )
. build ();
MessageReceiver receiver =
( PubsubMessage message , AckReplyConsumer consumer ) - > {
System . out . println ( "Id : " + MessageMetadata . decode ( message . getMessageId ()));
System . out . println ( "Data : " + message . getData (). toStringUtf8 ());
System . out . println ( "Ordering key : " + message . getOrderingKey ());
System . out . println ( "Attributes : " );
message
. getAttributesMap ()
. forEach (
( key , value ) - > {
if ( key == MessageTransforms . PUBSUB_LITE_EVENT_TIME_TIMESTAMP_PROTO ) {
Timestamp ts = MessageTransforms . decodeAttributeEventTime ( value );
System . out . println ( key + " = " + ts . toString ());
} else {
System . out . println ( key + " = " + value );
}
});
// Acknowledge the message.
consumer . ack ();
};
SubscriberSettings subscriberSettings =
SubscriberSettings . newBuilder ()
. setSubscriptionPath ( subscriptionPath )
. setReceiver ( receiver )
// Flow control settings are set at the partition level.
. setPerPartitionFlowControlSettings ( flowControlSettings )
. build ();
Subscriber subscriber = Subscriber . create ( subscriberSettings );
// Start the subscriber. Upon successful starting, its state will become RUNNING.
subscriber . startAsync (). awaitRunning ();
System . out . println ( "Listening to messages on " + subscriptionPath . toString () + "..." );
try {
System . out . println ( subscriber . state ());
// Wait 90 seconds for the subscriber to reach TERMINATED state. If it encounters
// unrecoverable errors before then, its state will change to FAILED and an
// IllegalStateException will be thrown.
subscriber . awaitTerminated ( 90 , TimeUnit . SECONDS );
} catch ( TimeoutException t ) {
// Shut down the subscriber. This will change the state of the subscriber to TERMINATED.
subscriber . stopAsync (). awaitTerminated ();
System . out . println ( "Subscriber is shut down: " + subscriber . state ());
}
}
}
Python
Before trying this sample, follow the Python setup instructions in the
Pub/Sub Lite quickstart using
client libraries .
For more information, see the
Pub/Sub Lite Python API
reference documentation .
To authenticate to Pub/Sub Lite, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from concurrent.futures._base import TimeoutError
from google.pubsub_v1 import PubsubMessage
from google.cloud.pubsublite.cloudpubsub import SubscriberClient
from google.cloud.pubsublite.types import (
CloudRegion ,
CloudZone ,
FlowControlSettings ,
MessageMetadata ,
SubscriptionPath ,
)
# TODO(developer):
# project_number = 1122334455
# cloud_region = "us-central1"
# zone_id = "a"
# subscription_id = "your-subscription-id"
# timeout = 90
# regional = True
if regional :
location = CloudRegion ( cloud_region )
else :
location = CloudZone ( CloudRegion ( cloud_region ), zone_id )
subscription_path = SubscriptionPath ( project_number , location , subscription_id )
# Configure when to pause the message stream for more incoming messages based on the
# maximum size or number of messages that a single-partition subscriber has received,
# whichever condition is met first.
per_partition_flow_control_settings = FlowControlSettings (
# 1,000 outstanding messages. Must be >0.
messages_outstanding = 1000 ,
# 10 MiB. Must be greater than the allowed size of the largest message (1 MiB).
bytes_outstanding = 10 * 1024 * 1024 ,
)
def callback ( message : PubsubMessage ):
message_data = message . data . decode ( "utf-8" )
metadata = MessageMetadata . decode ( message . message_id )
print (
f "Received { message_data } of ordering key { message . ordering_key } with id { metadata } ."
)
message . ack ()
# SubscriberClient() must be used in a `with` block or have __enter__() called before use.
with SubscriberClient () as subscriber_client :
streaming_pull_future = subscriber_client . subscribe (
subscription_path ,
callback = callback ,
per_partition_flow_control_settings = per_partition_flow_control_settings ,
)
print ( f "Listening for messages on { str ( subscription_path ) } ..." )
try :
streaming_pull_future . result ( timeout = timeout )
except TimeoutError or KeyboardInterrupt :
streaming_pull_future . cancel ()
assert streaming_pull_future . done ()
After the subscriber receives a message, the subscriber prints the message ID
and the message data.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, delete the Google Cloud project with the
resources.
To avoid incurring charges to your Google Cloud account for the
resources used in this guide, delete the topic and subscription.
gcloud pubsub lite-subscriptions delete testSub --location = us-central1
gcloud pubsub lite-topics delete testTopic --location = us-central1
Optional: Revoke the authentication credentials that you created, and delete the local
credential file.
gcloud auth application-default revoke
Optional: Revoke credentials from the gcloud CLI.
gcloud auth revoke
What's next
Learn more about Lite topics and
Lite subscriptions .
Learn more about sending and
receiving messages.
Look through
code samples for the client library .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
