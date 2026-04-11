---
title: "Process more messages with concurrency control \_|\_ Pub/Sub \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/concurrency-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/concurrency-control
  title: "Process more messages with concurrency control \_|\_ Pub/Sub \_|\_ Google\
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
Guides
Send feedback
Process more messages with concurrency control
Stay organized with collections
Save and categorize content based on your preferences.
Key Point: Concurrency control lets you configure the number of threads or
streams that the Pub/Sub client library uses to pull messages.
With more threads, you can process more messages concurrently.
Concurrency control is an available feature in the Pub/Sub
high-level client library .
You can also implement your own concurrency control when
you're using a low-level library .
Support for concurrency control depends on the programming language of the
client library. For language implementations that support parallel threads,
such as C++, Go, and Java, the client libraries make a default choice
for the number of threads.
This choice might not be optimal for your application. For example,
if your subscriber application is not keeping up with the incoming message
volume and is not CPU-bound, you must increase the thread count. For
CPU-intensive message processing operations, reducing the number of threads
might be appropriate.
This page explains the concept of concurrency control and how to set up the
feature for your subscriber clients. To configure your publisher clients for
concurrency control, see
Concurrency control .
Concurrency control configurations
The default values for the concurrency control variables and the names of the
variables might differ across client libraries. For more information, see the
API Reference documentation .
For example, in the Java client library, the methods to
configure concurrency control are setParallelPullCount() ,
setExecutorProvider() , setSystemExecutorProvider() , and
setChannelProvider() .
setParallelPullCount() lets you decide how many streams to open. You can
open more streams if your subscriber client can handle more data than that
is sent on a single stream which is 10 MBps.
setExecutorProvider() lets you customize the executor provider used for
processing messages. For example, you can change the executor provider to one
that returns a single, shared executor with a limited number of threads across
multiple subscriber clients. This configuration helps to limit the number of
threads created. The total number of threads used for concurrency control
depends on the executor provider passed in the client library and the parallel
pull count.
setSystemExecutorProvider() lets you customize the executor provider
used for lease management .
Typically, you don't configure this value unless
you want to use the same executor provider in setExecutorProvider and
setSystemExecutorProvider . For example, you can use the same executor
provider if you have a number of low-throughput subscriptions.
Using the same value limits the number of threads
in the client.
setChannelProvider() lets you customize the channel provider used for
opening connections to Pub/Sub. Typically, you don't configure
this value unless you want to use the same channel across multiple subscriber
clients. Reusing a channel across too many clients might result in
GOAWAY or ENHANCE_YOUR_CALM errors. If you see these errors in your
application's logs or Cloud Logs ,
create more channels.
Code samples for concurrency control
C++
Before trying this sample, follow the C++ setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub C++ API reference documentation .
namespace pubsub = :: google :: cloud :: pubsub ;
using :: google :: cloud :: future ;
using :: google :: cloud :: GrpcBackgroundThreadPoolSizeOption ;
using :: google :: cloud :: Options ;
using :: google :: cloud :: StatusOr ;
auto sample = []( std :: string project_id , std :: string subscription_id ) {
// Create a subscriber with 16 threads handling I/O work, by default the
// library creates `std::thread::hardware_concurrency()` threads.
auto subscriber = pubsub :: Subscriber ( pubsub :: MakeSubscriberConnection (
pubsub :: Subscription ( std :: move ( project_id ), std :: move ( subscription_id )),
Options {}
. set<pubsub :: MaxConcurrencyOption > ( 8 )
. set<GrpcBackgroundThreadPoolSizeOption> ( 16 )));
// Create a subscription where up to 8 messages are handled concurrently. By
// default the library uses `std::thread::hardware_concurrency()` as the
// maximum number of concurrent callbacks.
auto session = subscriber . Subscribe (
[]( pubsub :: Message const & m , pubsub :: AckHandler h ) {
// This handler executes in the I/O threads, applications could use,
// std::async(), a thread-pool, or any other mechanism to transfer the
// execution to other threads.
std :: cout << "Received message " << m << " \n " ;
std :: move ( h ). ack ();
PleaseIgnoreThisSimplifiesTestingTheSamples ();
});
return std :: make_pair ( subscriber , std :: move ( session ));
};
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
"sync/atomic"
"time"
"cloud.google.com/go/pubsub/v2"
)
func pullMsgsConcurrencyControl ( w io . Writer , projectID , subID string ) error {
// projectID := "my-project-id"
// subID := "my-sub"
ctx := context . Background ()
client , err := pubsub . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "pubsub.NewClient: %w" , err )
}
defer client . Close ()
// client.Subscriber can be passed a subscription ID (e.g. "my-sub") or
// a fully qualified name (e.g. "projects/my-project/subscriptions/my-sub").
// If a subscription ID is provided, the project ID from the client is used.
sub := client . Subscriber ( subID )
// NumGoroutines determines the number of streams sub.Receive will spawn to pull
// messages. It is recommended to set this to 1, unless your throughput
// is greater than 10 MB/s, as even having 1 stream can still result in
// messages being handled asynchronously.
sub . ReceiveSettings . NumGoroutines = 1
// MaxOutstandingMessages limits the number of concurrent handlers of messages.
// In this case, up to 8 unacked messages can be handled concurrently.
sub . ReceiveSettings . MaxOutstandingMessages = 8
// Receive messages for 10 seconds, which simplifies testing.
// Comment this out in production, since `Receive` should
// be used as a long running operation.
ctx , cancel := context . WithTimeout ( ctx , 10 * time . Second )
defer cancel ()
var received int32
// Receive blocks until the context is cancelled or an error occurs.
err = sub . Receive ( ctx , func ( _ context . Context , msg * pubsub . Message ) {
atomic . AddInt32 ( & received , 1 )
msg . Ack ()
})
if err != nil {
return fmt . Errorf ( "sub.Receive returned error: %w" , err )
}
fmt . Fprintf ( w , "Received %d messages\n" , received )
return nil
}
Java
Before trying this sample, follow the Java setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Java API reference documentation .
import com.google.api.gax.core. ExecutorProvider ;
import com.google.api.gax.core. InstantiatingExecutorProvider ;
import com.google.cloud.pubsub.v1. AckReplyConsumer ;
import com.google.cloud.pubsub.v1. MessageReceiver ;
import com.google.cloud.pubsub.v1. Subscriber ;
import com.google.pubsub.v1. ProjectSubscriptionName ;
import com.google.pubsub.v1. PubsubMessage ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class SubscribeWithConcurrencyControlExample {
public static void main ( String ... args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String subscriptionId = "your-subscription-id" ;
subscribeWithConcurrencyControlExample ( projectId , subscriptionId );
}
public static void subscribeWithConcurrencyControlExample (
String projectId , String subscriptionId ) {
ProjectSubscriptionName subscriptionName =
ProjectSubscriptionName . of ( projectId , subscriptionId );
// Instantiate an asynchronous message receiver.
MessageReceiver receiver =
( PubsubMessage message , AckReplyConsumer consumer ) - > {
// Handle incoming message, then ack the received message.
System . out . println ( "Id: " + message . getMessageId ());
System . out . println ( "Data: " + message . getData (). toStringUtf8 ());
consumer . ack ();
};
Subscriber subscriber = null ;
try {
// Provides an executor service for processing messages. The default `executorProvider` used
// by the subscriber has a default thread count of 5.
ExecutorProvider executorProvider =
InstantiatingExecutorProvider . newBuilder (). setExecutorThreadCount ( 4 ). build ();
// `setParallelPullCount` determines how many StreamingPull streams the subscriber will open
// to receive message. It defaults to 1. `setExecutorProvider` configures an executor for the
// subscriber to process messages. Here, the subscriber is configured to open 2 streams for
// receiving messages, each stream creates a new executor with 4 threads to help process the
// message callbacks. In total 2x4=8 threads are used for message processing.
subscriber =
Subscriber . newBuilder ( subscriptionName , receiver )
. setParallelPullCount ( 2 )
. setExecutorProvider ( executorProvider )
. build ();
// Start the subscriber.
subscriber . startAsync (). awaitRunning ();
System . out . printf ( "Listening for messages on %s:\n" , subscriptionName . toString ());
// Allow the subscriber to run for 30s unless an unrecoverable error occurs.
subscriber . awaitTerminated ( 30 , TimeUnit . SECONDS );
} catch ( TimeoutException timeoutException ) {
// Shut down the subscriber after 30s. Stop receiving messages.
subscriber . stopAsync ();
}
}
}
Ruby
The following sample uses Ruby Pub/Sub client library v3. If you are still using the v2 library, see
the migration guide to v3 .
To see a list of Ruby v2 code samples, see
the deprecated code samples .
Before trying this sample, follow the Ruby setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Ruby API reference documentation .
# subscription_id = "your-subscription-id"
pubsub = Google :: Cloud :: PubSub . new
subscriber = pubsub . subscriber subscription_id
# Use 2 threads for streaming, 4 threads for executing callbacks and 2 threads
# for sending acknowledgements and/or delays
listener = subscriber . listen streams : 2 , threads : {
callback : 4 ,
push : 2
} do | received_message |
puts "Received message: #{ received_message . data } "
received_message . acknowledge!
end
listener . start
# Let the main thread sleep for 60 seconds so the thread for listening
# messages does not quit
sleep 60
listener . stop . wait!
What's next
Read about the other delivery options you can configure for a subscription:
Handle transient spikes with flow control
Handle message failures with subscription retry policy
Forward undelivered messages to a dead letter topic
Replay previously-acked messages or purge messages
Extend ack time with lease management
Receive messages in order
Filter messages by their attributes
Receive and acknowledge messages exactly-once
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
