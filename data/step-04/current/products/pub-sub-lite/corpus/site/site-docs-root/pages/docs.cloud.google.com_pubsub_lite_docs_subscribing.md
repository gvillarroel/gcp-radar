---
title: "Receiving messages from Lite subscriptions \_|\_ Pub/Sub Lite \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/lite/docs/subscribing
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/lite/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/lite/docs/subscribing
  title: "Receiving messages from Lite subscriptions \_|\_ Pub/Sub Lite \_|\_ Google\
    \ Cloud Documentation"
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
Receiving messages from Lite subscriptions
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
This page explains how to receive messages from Lite subscriptions. You can
receive messages with the Pub/Sub Lite client library for Java.
Lite subscriptions connect Lite topics to subscriber applications; subscribers
receive messages from Lite subscriptions. Subscribers receive every message that
publisher applications send to the Lite topic, including the messages that
publishers send before you create the Lite subscription.
Before receiving messages from a Lite subscription,
create a Lite topic ,
create a Lite subscription to the Lite topic,
and publish messages to the Lite topic.
Receiving messages
To receive messages from a Lite subscription, request messages from the Lite
subscription. The client library automatically connects to the
partitions in the Lite topic
attached to the Lite subscription. If more than one subscriber client is
instantiated, messages will be distributed across all clients. The number of
partitions in the topic determines the maximum number of subscriber clients
that can simultaneously connect to a subscription.
Subscribers might take up to one minute to initialize and start receiving
messages. After initialization, messages are received with minimal latency.
The following sample shows you how to receive messages from Lite subscriptions:
gcloud
This command requires Python 3.6 or greater, and requires the grpcio Python
package to be installed. For MacOS, Linux, and Cloud Shell users, run:
sudo pip3 install grpcio
export CLOUDSDK_PYTHON_SITEPACKAGES = 1
To receive messages, use the
gcloud pubsub lite-subscriptions subscribe
command:
gcloud pubsub lite-subscriptions subscribe SUBSCRIPTION_ID \
--location = LITE_LOCATION \
--auto-ack
Replace the following:
SUBSCRIPTION_ID : the ID of the Lite subscription
LITE_LOCATION : the location of the Lite subscription
Go
Before running this sample, follow the Go setup instructions in
Pub/Sub Lite Client Libraries .
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
Before running this sample, follow the Java setup instructions in
Pub/Sub Lite Client Libraries .
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
Before running this sample, follow the Python setup instructions in
Pub/Sub Lite Client Libraries .
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
The client library establishes bidirectional streaming connections to each
of the partitions in the Lite topic.
The subscriber requests connections to the partitions.
The Pub/Sub Lite service delivers the messages to the subscriber.
After the subscriber processes the message, the subscriber must
acknowledge the message . The client library
asynchronously processes and acknowledges messages in a callback. To limit the
number of unacknowledged messages the subscriber can store in memory,
configure the flow control settings .
If multiple subscribers receive messages from the same Lite subscription, the
Pub/Sub Lite service connects each subscriber to an equal proportion
of partitions. For example, if two subscribers use the same Lite subscription
and the Lite subscription is attached to a Lite topic with two partitions, each
subscriber receives messages from one of the partitions.
Acknowledging messages
To acknowledge a message, send an acknowledgment to the Lite subscription.
Go
To send an acknowledgment, use the Message.Ack() method.
Caution: Pub/Sub Lite doesn't support negative acknowledgments. By
default, this terminates the SubscriberClient .
A custom function can be provided for ReceiveSettings.NackHandler
to handle NACKed messages.
Java
To send an acknowledgment, use the
AckReplyConsumer.ack()
method.
Caution: Pub/Sub Lite doesn't support negative acknowledgments. If
you call the AckReplyConsumer.nack() method, the client library closes
existing streaming connections, and you must request messages again.
Python
To send an acknowledgment, use the Message.ack() method.
Caution: Pub/Sub Lite doesn't support negative acknowledgments. If
you call the Message.nack() method, the client library closes
existing streaming connections, and you must request messages again.
Subscribers must acknowledge every message. Subscribers receive the oldest
unacknowledged message first, followed by each subsequent message. If a
subscriber skips one message, acknowledges the subsequent messages, and then
reconnects, the subscriber receives the unacknowledged message and each
subsequent, acknowledged message.
Lite subscriptions don't have an acknowledgment deadline and the
Pub/Sub Lite service doesn't redeliver unacknowledged messages over an
open streaming connection.
Using flow control
After the Pub/Sub Lite service delivers messages to subscribers, the
subscribers store unacknowledged messages in memory. You can limit the number of
outstanding messages that subscribers can store in memory using flow control
settings. The flow control settings apply to each partition that a subscriber
receives messages from.
You can configure the following flow control settings:
Outstanding message size . The maximum size, in bytes, of the
outstanding messages. The maximum size must be greater than the size of the
largest message.
Number of messages . The maximum number of outstanding messages.
The size of a message is in the
size_bytes field .
You can configure flow control settings with the client library.
Go
To configure flow control settings, pass in ReceiveSettings
when calling pscompat.NewSubscriberClientWithSettings . You can set the following parameters in ReceiveSettings :
MaxOutstandingMessages
MaxOutstandingBytes
For an example, see this flow control sample .
Java
To configure flow control settings, use the following methods in the
FlowControlRequest.Builder
class:
setBytesOutstanding
setMessagesOutstanding
Python
To configure flow control settings, set the following parameters in the
FlowControlSettings
class:
bytes_outstanding
messages_outstanding
For example, if the maximum number of messages is 100 and the subscriber
connects to 10 partitions, the subscriber cannot receive more than 100 messages
from any of the 10 partitions. The total number of outstanding messages might be
greater than 100, but the subscriber cannot store more than 100 messages from
each partition.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
