---
title: "Publishing messages to Lite topics \_|\_ Pub/Sub Lite \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/lite/docs/publishing
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/lite/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/lite/docs/publishing
  title: "Publishing messages to Lite topics \_|\_ Pub/Sub Lite \_|\_ Google Cloud\
    \ Documentation"
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
Publishing messages to Lite topics
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
This page explains how to publish messages to Lite topics. You can publish
messages with the Pub/Sub Lite client library for Java.
After publishing messages and
creating a Lite subscription to a Lite topic,
you can receive messages from the Lite
subscription.
Message format
A message consists of fields with the message data and metadata.
Specify any of the following in the message:
The message data
An ordering key
An event time
Attributes with additional metadata
The client library automatically assigns the message to a partition, and the
Pub/Sub Lite service adds the following fields to the message:
A message ID unique within the partition
A timestamp for when the Pub/Sub Lite service stores the message in
the partition
Publishing messages
To publish messages, request a streaming connection to the Lite topic and then
send messages over the streaming connection.
Note: The publisher client object is long lived and maintains a connection to
Pub/Sub Lite. This object should not be created for each message- it
should be reused for all messages for the same topic coming from the same
program.
The following sample shows you how to publish messages to a Lite topic:
gcloud
This command requires Python 3.6 or greater, and requires the grpcio Python
package to be installed. For MacOS, Linux, and Cloud Shell users, run:
sudo pip3 install grpcio
export CLOUDSDK_PYTHON_SITEPACKAGES = 1
To publish a message, use the
gcloud pubsub lite-topics publish
command:
gcloud pubsub lite-topics publish TOPIC_ID \
--location = LITE_LOCATION \
--message = MESSAGE_DATA
Replace the following:
TOPIC_ID : the ID of the Lite topic
LITE_LOCATION : the location of the Lite topic
MESSAGE_DATA : a string with the message data
Go
Before running this sample, follow the Go setup instructions in
Pub/Sub Lite Client Libraries .
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
Before running this sample, follow the Java setup instructions in
Pub/Sub Lite Client Libraries .
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
Before running this sample, follow the Python setup instructions in
Pub/Sub Lite Client Libraries .
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
The client library asynchronously sends messages and handles errors. If an
error occurs, the client library sends the message again.
The Pub/Sub Lite service closes the stream.
The client library buffers the messages and reestablishes a connection to the
Lite topic.
The client library sends the messages in order.
After you publish a message, the Pub/Sub Lite service stores the
message in a partition and returns the message ID to the publisher.
Using ordering keys
If messages have the same ordering key, the client library assigns the messages
to the same partition. The ordering key must be a string of at most 1,024 bytes.
The ordering key is in the
key field of a message .
You can set ordering keys with the client library.
gcloud
This command requires Python 3.6 or greater, and requires the grpcio Python
package to be installed. For MacOS, Linux, and Cloud Shell users, run:
sudo pip3 install grpcio
export CLOUDSDK_PYTHON_SITEPACKAGES = 1
To publish a message, use the
gcloud pubsub lite-topics publish
command:
gcloud pubsub lite-topics publish TOPIC_ID \
--location = LITE_LOCATION \
--ordering-key = ORDERING_KEY \
--message = MESSAGE_DATA
Replace the following:
TOPIC_ID : the ID of the Lite topic
LITE_LOCATION : the location of the Lite topic
ORDERING_KEY : a string used to assign messages to partitions
MESSAGE_DATA : a string with the message data
Go
Before running this sample, follow the Go setup instructions in
Pub/Sub Lite Client Libraries .
import (
"context"
"fmt"
"io"
"cloud.google.com/go/pubsub"
"cloud.google.com/go/pubsublite/pscompat"
)
func publishWithOrderingKey ( w io . Writer , projectID , zone , topicID string , messageCount int ) error {
// projectID := "my-project-id"
// zone := "us-central1-a"
// topicID := "my-topic"
// messageCount := 10
ctx := context . Background ()
topicPath := fmt . Sprintf ( "projects/%s/locations/%s/topics/%s" , projectID , zone , topicID )
// Create the publisher client.
publisher , err := pscompat . NewPublisherClient ( ctx , topicPath )
if err != nil {
return fmt . Errorf ( "pscompat.NewPublisherClient error: %w" , err )
}
// Ensure the publisher will be shut down.
defer publisher . Stop ()
// Messages of the same ordering key will always get published to the same
// partition. When OrderingKey is unset, messages can get published to
// different partitions if more than one partition exists for the topic.
var results [] * pubsub . PublishResult
for i := 0 ; i < messageCount ; i ++ {
r := publisher . Publish ( ctx , & pubsub . Message {
OrderingKey : "test_ordering_key" ,
Data : [] byte ( fmt . Sprintf ( "message-%d" , i )),
})
results = append ( results , r )
}
// Print publish results.
var publishedCount int
for _ , r := range results {
// Get blocks until the result is ready.
id , err := r . Get ( ctx )
if err != nil {
// NOTE: A failed PublishResult indicates that the publisher client
// encountered a fatal error and has permanently terminated. After the
// fatal error has been resolved, a new publisher client instance must be
// created to republish failed messages.
fmt . Fprintf ( w , "Publish error: %v\n" , err )
continue
}
// Metadata decoded from the id contains the partition and offset.
metadata , err := pscompat . ParseMessageMetadata ( id )
if err != nil {
return fmt . Errorf ( "failed to parse message metadata %q: %w" , id , err )
}
fmt . Fprintf ( w , "Published: partition=%d, offset=%d\n" , metadata . Partition , metadata . Offset )
publishedCount ++
}
fmt . Fprintf ( w , "Published %d messages with ordering key\n" , publishedCount )
return publisher . Error ()
}
Java
Before running this sample, follow the Java setup instructions in
Pub/Sub Lite Client Libraries .
import com.google.api.core. ApiFuture ;
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
import java.util.concurrent.ExecutionException ;
public class PublishWithOrderingKeyExample {
public static void main ( String ... args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String cloudRegion = "your-cloud-region" ;
char zoneId = 'b' ;
// Choose an existing topic for the publish example to work.
String topicId = "your-topic-id" ;
long projectNumber = Long . parseLong ( "123456789" );
// True if using a regional location. False if using a zonal location.
// https://cloud.google.com/pubsub/lite/docs/topics
boolean regional = false ;
publishWithOrderingKeyExample ( cloudRegion , zoneId , projectNumber , topicId , regional );
}
// Publish a message to a topic with an ordering key.
public static void publishWithOrderingKeyExample (
String cloudRegion , char zoneId , long projectNumber , String topicId , boolean regional )
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
PublisherSettings publisherSettings =
PublisherSettings . newBuilder (). setTopicPath ( topicPath ). build ();
Publisher publisher = Publisher . create ( publisherSettings );
// Start the publisher. Upon successful starting, its state will become RUNNING.
publisher . startAsync (). awaitRunning ();
String message = "message-with-ordering-key" ;
// Convert the message to a byte string.
ByteString data = ByteString . copyFromUtf8 ( message );
PubsubMessage pubsubMessage =
PubsubMessage . newBuilder ()
. setData ( data )
// Messages of the same ordering key will always get published to the
// same partition. When OrderingKey is unset, messages can get published
// to different partitions if more than one partition exists for the topic.
. setOrderingKey ( "testing" )
. build ();
// Publish a message.
ApiFuture<String> future = publish er . publish ( pubsubMessage );
// Shut down the publisher.
publisher . stopAsync (). awaitTerminated ();
String ackId = future . get ();
MessageMetadata metadata = MessageMetadata . decode ( ackId );
System . out . println ( "Published a message with ordering key:\n" + metadata );
}
}
Python
Before running this sample, follow the Python setup instructions in
Pub/Sub Lite Client Libraries .
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
# num_messages = 100
# regional = True
if regional :
location = CloudRegion ( cloud_region )
else :
location = CloudZone ( CloudRegion ( cloud_region ), zone_id )
topic_path = TopicPath ( project_number , location , topic_id )
# PublisherClient() must be used in a `with` block or have __enter__() called before use.
with PublisherClient () as publisher_client :
for message in range ( num_messages ):
data = f " { message } "
# Messages of the same ordering key will always get published to the same partition.
# When ordering_key is unset, messsages can get published ot different partitions if
# more than one partition exists for the topic.
api_future = publisher_client . publish (
topic_path , data . encode ( "utf-8" ), ordering_key = "testing"
)
# result() blocks. To resolve api futures asynchronously, use add_done_callback().
message_id = api_future . result ()
message_metadata = MessageMetadata . decode ( message_id )
print (
f "Published { data } to partition { message_metadata . partition . value } and offset { message_metadata . cursor . offset } ."
)
print (
f "Finished publishing { num_messages } messages with an ordering key to { str ( topic_path ) } ."
)
You can send multiple messages to the same partition using ordering keys, so
subscribers receive the messages in order . The client
library might assign multiple ordering keys to the same partition.
Set the event time
You can use event time to publish your Lite messages. Event time is a custom
attribute that you can add to your message.
You can set the event timestamp with the client library or the gcloud CLI.
This command requires Python 3.6 or greater, and requires the grpcio Python
package to be installed. For MacOS, Linux, and Cloud Shell users, run:
sudo pip3 install grpcio
export CLOUDSDK_PYTHON_SITEPACKAGES = 1
To publish a message, use the
gcloud pubsub lite-topics publish
command:
gcloud pubsub lite-topics publish TOPIC_ID \
--location = LITE_LOCATION \
--event-time = EVENT_TIME \
--message = MESSAGE_DATA
Replace the following:
TOPIC_ID : the ID of the Lite topic
LITE_LOCATION : the location of the Lite topic
EVENT_TIME : a user-specified event time. For more information
about time formats, run gcloud topic datetimes .
MESSAGE_DATA : a string with the message data
Using attributes
Message attributes are key-value pairs with metadata about the message. The
attributes can be text or byte strings.
The attributes are in the
attributes field
of a message. You can set attributes with the client library.
gcloud
This command requires Python 3.6 or greater, and requires the grpcio Python
package to be installed. For MacOS, Linux, and Cloud Shell users, run:
sudo pip3 install grpcio
export CLOUDSDK_PYTHON_SITEPACKAGES = 1
To publish a message, use the
gcloud pubsub lite-topics publish
command:
gcloud pubsub lite-topics publish TOPIC_ID \
--location = LITE_LOCATION \
--message = MESSAGE_DATA \
--attribute = KEY = VALUE ,...
Replace the following:
TOPIC_ID : the ID of the Lite topic
LITE_LOCATION : the location of the Lite topic
MESSAGE_DATA : a string with the message data
KEY : the key of a message attribute
VALUE : the value for the key of the message attribute
Go
Before running this sample, follow the Go setup instructions in
Pub/Sub Lite Client Libraries .
import (
"context"
"fmt"
"io"
"cloud.google.com/go/pubsub"
"cloud.google.com/go/pubsublite/pscompat"
)
func publishWithCustomAttributes ( w io . Writer , projectID , zone , topicID string ) error {
// projectID := "my-project-id"
// zone := "us-central1-a"
// topicID := "my-topic"
ctx := context . Background ()
topicPath := fmt . Sprintf ( "projects/%s/locations/%s/topics/%s" , projectID , zone , topicID )
// Create the publisher client.
publisher , err := pscompat . NewPublisherClient ( ctx , topicPath )
if err != nil {
return fmt . Errorf ( "pscompat.NewPublisherClient error: %w" , err )
}
// Ensure the publisher will be shut down.
defer publisher . Stop ()
// Publish a message with custom attributes.
result := publisher . Publish ( ctx , & pubsub . Message {
Data : [] byte ( "message-with-custom-attributes" ),
Attributes : map [ string ] string {
"year" : "2020" ,
"author" : "unknown" ,
},
})
// Get blocks until the result is ready.
id , err := result . Get ( ctx )
if err != nil {
return fmt . Errorf ( "publish error: %w" , err )
}
fmt . Fprintf ( w , "Published a message with custom attributes: %v\n" , id )
return publisher . Error ()
}
Java
Before running this sample, follow the Java setup instructions in
Pub/Sub Lite Client Libraries .
import com.google.api.core. ApiFuture ;
import com.google.api.gax.rpc. ApiException ;
import com.google.cloud.pubsublite. CloudRegion ;
import com.google.cloud.pubsublite. CloudRegionOrZone ;
import com.google.cloud.pubsublite. CloudZone ;
import com.google.cloud.pubsublite. MessageMetadata ;
import com.google.cloud.pubsublite. ProjectNumber ;
import com.google.cloud.pubsublite. TopicName ;
import com.google.cloud.pubsublite. TopicPath ;
import com.google.cloud.pubsublite.cloudpubsub. MessageTransforms ;
import com.google.cloud.pubsublite.cloudpubsub. Publisher ;
import com.google.cloud.pubsublite.cloudpubsub. PublisherSettings ;
import com.google.common.collect.ImmutableMap ;
import com.google.protobuf. ByteString ;
import com.google.protobuf.util. Timestamps ;
import com.google.pubsub.v1. PubsubMessage ;
import java.time.Instant ;
import java.util.concurrent.ExecutionException ;
public class PublishWithCustomAttributesExample {
public static void main ( String ... args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String cloudRegion = "your-cloud-region" ;
char zoneId = 'b' ;
// Choose an existing topic for the publish example to work.
String topicId = "your-topic-id" ;
long projectNumber = Long . parseLong ( "123456789" );
// True if using a regional location. False if using a zonal location.
// https://cloud.google.com/pubsub/lite/docs/topics
boolean regional = false ;
publishWithCustomAttributesExample ( cloudRegion , zoneId , projectNumber , topicId , regional );
}
// Publish messages to a topic with custom attributes.
public static void publishWithCustomAttributesExample (
String cloudRegion , char zoneId , long projectNumber , String topicId , boolean regional )
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
PublisherSettings publisherSettings =
PublisherSettings . newBuilder (). setTopicPath ( topicPath ). build ();
Publisher publisher = Publisher . create ( publisherSettings );
// Start the publisher. Upon successful starting, its state will become RUNNING.
publisher . startAsync (). awaitRunning ();
// Prepare the message data as a byte string.
String messageData = "message-with-custom-attributes" ;
ByteString data = ByteString . copyFromUtf8 ( messageData );
// Prepare a protobuf-encoded event timestamp for the message.
Instant now = Instant . now ();
String eventTime =
MessageTransforms . encodeAttributeEventTime ( Timestamps . fromMillis ( now . toEpochMilli ()));
PubsubMessage pubsubMessage =
PubsubMessage . newBuilder ()
. setData ( data )
// Add two sets of custom attributes to the message.
. putAllAttributes ( ImmutableMap . of ( "year" , "2020" , "author" , "unknown" ))
// Add an event timestamp as an attribute.
. putAttributes ( MessageTransforms . PUBSUB_LITE_EVENT_TIME_TIMESTAMP_PROTO , eventTime )
. build ();
// Publish a message.
ApiFuture<String> future = publish er . publish ( pubsubMessage );
// Shut down the publisher.
publisher . stopAsync (). awaitTerminated ();
String ackId = future . get ();
MessageMetadata metadata = MessageMetadata . decode ( ackId );
System . out . println ( "Published a message with custom attributes:\n" + metadata );
}
}
Python
Before running this sample, follow the Python setup instructions in
Pub/Sub Lite Client Libraries .
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
api_future = publisher_client . publish (
topic_path ,
data . encode ( "utf-8" ),
year = "2020" ,
author = "unknown" ,
)
# result() blocks. To resolve api futures asynchronously, use add_done_callback().
message_id = api_future . result ()
message_metadata = MessageMetadata . decode ( message_id )
print (
f "Published { data } to partition { message_metadata . partition . value } and offset { message_metadata . cursor . offset } ."
)
print ( f "Finished publishing a message with custom attributes to { str ( topic_path ) } ." )
Attributes can indicate how to process a message. Subscribers can parse the
attributes field of a message and process the message according to its
attributes.
Batching messages
The client library publishes messages in batches. Larger batches use fewer
compute resources but increase latency. You can change the batch size with
batching settings.
The following table lists the batching settings that you can configure:
Setting
Description
Default
Request size
The maximum size, in bytes, of the batch.
3.5 MiB
Number of messages
The maximum number of messages in a batch.
1,000 messages
Publish delay
The amount of time, in milliseconds, between adding the message to a batch and sending the batch to the Lite topic.
50 milliseconds
You can configure batching settings with the client library.
Go
Before running this sample, follow the Go setup instructions in
Pub/Sub Lite Client Libraries .
import (
"context"
"fmt"
"io"
"time"
"cloud.google.com/go/pubsub"
"cloud.google.com/go/pubsublite/pscompat"
)
func publishWithBatchSettings ( w io . Writer , projectID , zone , topicID string , messageCount int ) error {
// projectID := "my-project-id"
// zone := "us-central1-a"
// topicID := "my-topic"
// messageCount := 10
ctx := context . Background ()
topicPath := fmt . Sprintf ( "projects/%s/locations/%s/topics/%s" , projectID , zone , topicID )
// Batch settings control how the publisher batches messages. These settings
// apply per partition.
// See https://pkg.go.dev/cloud.google.com/go/pubsublite/pscompat#pkg-variables
// for DefaultPublishSettings.
settings := pscompat . PublishSettings {
ByteThreshold : 5 * 1024 , // 5 KiB
CountThreshold : 1000 , // 1,000 messages
DelayThreshold : 100 * time . Millisecond ,
}
// Create the publisher client.
publisher , err := pscompat . NewPublisherClientWithSettings ( ctx , topicPath , settings )
if err != nil {
return fmt . Errorf ( "pscompat.NewPublisherClientWithSettings error: %w" , err )
}
// Ensure the publisher will be shut down.
defer publisher . Stop ()
// Publish requests are sent to the server based on request size, message
// count and time since last publish, whichever condition is met first.
var results [] * pubsub . PublishResult
for i := 0 ; i < messageCount ; i ++ {
r := publisher . Publish ( ctx , & pubsub . Message {
Data : [] byte ( fmt . Sprintf ( "message-%d" , i )),
})
results = append ( results , r )
}
// Print publish results.
var publishedCount int
for _ , r := range results {
// Get blocks until the result is ready.
id , err := r . Get ( ctx )
if err != nil {
// NOTE: A failed PublishResult indicates that the publisher client
// encountered a fatal error and has permanently terminated. After the
// fatal error has been resolved, a new publisher client instance must be
// created to republish failed messages.
fmt . Fprintf ( w , "Publish error: %v\n" , err )
continue
}
fmt . Fprintf ( w , "Published: %v\n" , id )
publishedCount ++
}
fmt . Fprintf ( w , "Published %d messages with batch settings\n" , publishedCount )
return publisher . Error ()
}
Java
Before running this sample, follow the Java setup instructions in
Pub/Sub Lite Client Libraries .
import com.google.api.core. ApiFuture ;
import com.google.api.core. ApiFutures ;
import com.google.api.gax. batching . BatchingSettings ;
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
import org.threeten.bp. Duration ;
public class PublishWithBatchSettingsExample {
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
publishWithBatchSettingsExample (
cloudRegion , zoneId , projectNumber , topicId , messageCount , regional );
}
// Publish messages to a topic with batch settings.
public static void publishWithBatchSettingsExample (
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
// Batch settings control how the publisher batches messages
long requestBytesThreshold = 5000L ; // default : 3_500_000 bytes
long messageCountBatchSize = 100L ; // default : 1000L message
Duration publishDelayThreshold = Duration . ofMillis ( 100 ); // default : 50 ms
// Publish request get triggered based on request size, messages count & time since last
// publish, whichever condition is met first.
BatchingSettings batchingSettings =
BatchingSettings . newBuilder ()
. setRequestByteThreshold ( requestBytesThreshold )
. setElementCountThreshold ( messageCountBatchSize )
. setDelayThreshold ( publishDelayThreshold )
. build ();
PublisherSettings publisherSettings =
PublisherSettings . newBuilder ()
. setTopicPath ( topicPath )
. setBatchingSettings ( batchingSettings )
. build ();
publisher = Publisher . create ( publisherSettings );
// Start the publisher. Upon successful starting, its state will become RUNNING.
publisher . startAsync (). awaitRunning ();
for ( int i = 0 ; i < messageCount ; i ++ ) {
String message = "message-" + i ;
// Convert the message to a byte string.
ByteString data = ByteString . copyFromUtf8 ( message );
PubsubMessage pubsubMessage = PubsubMessage . newBuilder (). setData ( data ). build ();
// Publish a message.
ApiFuture<String> future = publish er . publish ( pubsubMessage );
futures . add ( future );
}
} finally {
ArrayList<MessageMetadata> metadata = new ArrayList <> ();
List<String> ackIds = ApiFutures . allAsList ( futures ). get ();
System . out . println ( "Published " + ackIds . size () + " messages with batch settings." );
if ( publisher != null ) {
// Shut down the publisher.
publisher . stopAsync (). awaitTerminated ();
}
}
}
}
Python
Before running this sample, follow the Python setup instructions in
Pub/Sub Lite Client Libraries .
from google.cloud.pubsub_v1.types import BatchSettings
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
# num_messages = 100
# regional = True
if regional :
location = CloudRegion ( cloud_region )
else :
location = CloudZone ( CloudRegion ( cloud_region ), zone_id )
topic_path = TopicPath ( project_number , location , topic_id )
batch_setttings = BatchSettings (
# 2 MiB. Default to 3 MiB. Must be less than 4 MiB gRPC's per-message limit.
max_bytes = 2 * 1024 * 1024 ,
# 100 ms. Default to 50 ms.
max_latency = 0.1 ,
# Default to 1000.
max_messages = 100 ,
)
# PublisherClient() must be used in a `with` block or have __enter__() called before use.
with PublisherClient (
per_partition_batching_settings = batch_setttings
) as publisher_client :
for message in range ( num_messages ):
data = f " { message } "
api_future = publisher_client . publish ( topic_path , data . encode ( "utf-8" ))
# result() blocks. To resolve API futures asynchronously, use add_done_callback().
message_id = api_future . result ()
message_metadata = MessageMetadata . decode ( message_id )
print (
f "Published { data } to partition { message_metadata . partition . value } and offset { message_metadata . cursor . offset } ."
)
print (
f "Finished publishing { num_messages } messages with batch settings to { str ( topic_path ) } ."
)
When a publisher application starts, the client library creates a batch for each
partition in a Lite topic. For example, if a Lite topic has two partitions,
publishers create two batches and send each batch to a partition.
After you publish a message, the client library buffers it until the batch
exceeds the maximum request size, the maximum number of messages, or the
publish delay.
Ordering messages
Lite topics order messages in each partition by when you publish the messages.
To assign messages to the same partition,
use an ordering key .
Pub/Sub Lite delivers the messages from a partition in order, and
subscribers can process the messages in order. For details, see
Receiving messages .
Publish Idempotency
Pub/Sub Lite client libraries support idempotent publishing, from the
following versions:
java-pubsublite : version 1.10.0.
python-pubsublite : version 1.8.0.
google-cloud-go : pubsublite version 1.7.0.
If publishing of a message is retried due to network or server errors, it is
stored exactly once. Idempotency is guaranteed only within the same session; it
cannot be guaranteed if the same message is republished using a new publisher
client. It does not incur any additional service costs or increase publish
latency.
Enable or disable idempotent publishing
Idempotent publishing is enabled by default in the Pub/Sub Lite client
libraries. It can be disabled using publisher client settings in the respective
client library.
If idempotent publishing is enabled, the offset returned in a publish result
might be -1 . This value is returned when the message is identified as a
duplicate of an already successfully published message, but the server did not
have sufficient information to return the offset of the message at publish time.
Messages received by subscribers always have a valid offset.
Troubleshooting
Duplicates received
As idempotency is limited to a single session, duplicates might be received if
you recreate the publisher client to publish the same messages.
A subscriber client might receive the same message multiple times if partitions
are automatically assigned to subscribers by the Pub/Sub Lite service
(the default setting). A message might be redelivered to another subscriber
client when a reassignment occurs.
Publisher error
State for a publisher session is garbage collected in the server after 7 days of
inactivity. If a session is resumed after this time period, the publisher client
terminates with an error message similar to "Failed Precondition: Expected
message to have publish sequence number of..." and does not accept new messages.
Recreate the publisher client to resolve this error.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
