---
title: "Concurrency control \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/concurrency-control-messages
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/concurrency-control-messages
  title: "Concurrency control \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
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
Concurrency control
Stay organized with collections
Save and categorize content based on your preferences.
This document provides information about using concurrency control with messages
published to a topic.
Concurrency control helps you override the default number of background
(I/O) threads used by the client library to publish messages.
This lets the publisher clients to send messages in parallel.
Concurrency control is an available feature in the Pub/Sub
high-level client library . You can also
implement your own concurrency control when you're using a
low-level library .
Support for concurrency control depends on the programming language of the
client library. For language implementations that support parallel threads,
such as C++, Go, and Java, the client libraries make a default choice for
the number of threads.
This page explains the concept of concurrency control and how to set up the
feature for your publisher clients. To configure your subscriber clients for
concurrency control, see
Process more messages with concurrency control .
Before you begin
Before configuring the publish workflow, ensure you have completed the following
tasks:
Learn about topics and the publishing workflow .
Create a topic .
Required roles
To get the permissions that
you need to publish messages to a topic,
ask your administrator to grant you the
Pub/Sub Publisher ( roles/pubsub.publisher )
IAM role on your topic.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
You need additional permissions to
create or update topics and subscriptions.
Concurrency control configurations
The default values for the concurrency control variables and the names of the
variables might differ across client libraries. For example, in the Java client
library, the methods to configure concurrency control are
setExecutorProvider() and setChannelProvider() . For more information, see
the
API reference documentation .
setExecutorProvider() lets you customize the executor provider used for
processing publish responses. For example, you can change the executor provider
to one that returns a single, shared executor with a limited number of threads
across multiple publisher clients. This configuration helps to limit the number
of threads created.
setChannelProvider() lets you customize the channel provider used for
opening connections to Pub/Sub. Typically, you don't configure
this value unless you want to use the same channel across multiple publisher
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
[]( std :: string project_id , std :: string topic_id ) {
auto topic = pubsub :: Topic ( std :: move ( project_id ), std :: move ( topic_id ));
// Override the default number of background (I/O) threads. By default the
// library uses `std::thread::hardware_concurrency()` threads.
auto options = Options {}. set<GrpcBackgroundThreadPoolSizeOption> ( 8 );
auto publisher = pubsub :: Publisher (
pubsub :: MakePublisherConnection ( std :: move ( topic ), std :: move ( options )));
std :: vector<future<void> > ids ;
for ( char const * data : { "1" , "2" , "3" , "go!" }) {
ids . push_back (
publisher . Publish ( pubsub :: MessageBuilder (). SetData ( data ). Build ())
. then ([ data ]( future<StatusOr<std :: string >> f ) {
auto s = f . get ();
if ( ! s ) return ;
std :: cout << "Sent '" << data << "' (" << * s << ") \n " ;
}));
}
publisher . Flush ();
// Block until they are actually sent.
for ( auto & id : ids ) id . get ();
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
"cloud.google.com/go/pubsub/v2"
)
func publishSingleGoroutine ( w io . Writer , projectID , topicID , msg string ) error {
// projectID := "my-project-id"
// topicID := "my-topic"
// msg := "Hello World"
ctx := context . Background ()
client , err := pubsub . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "pubsub.NewClient: %w" , err )
}
defer client . Close ()
// client.Publisher can be passed a topic ID (e.g. "my-topic") or
// a fully qualified name (e.g. "projects/my-project/topics/my-topic").
// If a topic ID is provided, the project ID from the client is used.
publisher := client . Publisher ( topicID )
publisher . PublishSettings . NumGoroutines = 1
result := publisher . Publish ( ctx , & pubsub . Message { Data : [] byte ( msg )})
// Block until the result is returned and a server-generated
// ID is returned for the published message.
id , err := result . Get ( ctx )
if err != nil {
return fmt . Errorf ( "Get: %w" , err )
}
fmt . Fprintf ( w , "Published a message; msg ID: %v\n" , id )
return nil
}
Java
Before trying this sample, follow the Java setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Java API reference documentation .
import com.google.api.core. ApiFuture ;
import com.google.api.core. ApiFutures ;
import com.google.api.gax.core. ExecutorProvider ;
import com.google.api.gax.core. InstantiatingExecutorProvider ;
import com.google.cloud.pubsub.v1. Publisher ;
import com.google.protobuf. ByteString ;
import com.google.pubsub.v1. PubsubMessage ;
import com.google.pubsub.v1. TopicName ;
import java.io.IOException ;
import java.util.ArrayList ;
import java.util.List ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
public class PublishWithConcurrencyControlExample {
public static void main ( String ... args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String topicId = "your-topic-id" ;
publishWithConcurrencyControlExample ( projectId , topicId );
}
public static void publishWithConcurrencyControlExample ( String projectId , String topicId )
throws IOException , ExecutionException , InterruptedException {
TopicName topicName = TopicName . of ( projectId , topicId );
Publisher publisher = null ;
List<ApiFuture<String> > messageIdFutures = new ArrayList <> ();
try {
// Provides an executor service for processing messages. The default
// `executorProvider` used by the publisher has a default thread count of
// 5 * the number of processors available to the Java virtual machine.
ExecutorProvider executorProvider =
InstantiatingExecutorProvider . newBuilder (). setExecutorThreadCount ( 4 ). build ();
// `setExecutorProvider` configures an executor for the publisher.
publisher = Publisher . newBuilder ( topicName ). setExecutorProvider ( executorProvider ). build ();
// schedule publishing one message at a time : messages get automatically batched
for ( int i = 0 ; i < 100 ; i ++ ) {
String message = "message " + i ;
ByteString data = ByteString . copyFromUtf8 ( message );
PubsubMessage pubsubMessage = PubsubMessage . newBuilder (). setData ( data ). build ();
// Once published, returns a server-assigned message id (unique within the topic)
ApiFuture<String> messageIdFuture = publish er . publish ( pubsubMessage );
messageIdFutures . add ( messageIdFuture );
}
} finally {
// Wait on any pending publish requests.
List<String> messageIds = ApiFutures . allAsList ( messageIdFutures ). get ();
System . out . println ( "Published " + messageIds . size () + " messages with concurrency control." );
if ( publisher != null ) {
// When finished with the publisher, shutdown to free up resources.
publisher . shutdown ();
publisher . awaitTermination ( 1 , TimeUnit . MINUTES );
}
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
# topic_id = "your-topic-id"
pubsub = Google :: Cloud :: PubSub . new
publisher = pubsub . publisher topic_id , async : {
threads : {
# Use exactly one thread for publishing message and exactly one thread
# for executing callbacks
publish : 1 ,
callback : 1
}
}
publisher . publish_async "This is a test message." do | result |
raise "Failed to publish the message." unless result . succeeded?
puts "Message published asynchronously."
end
# Stop the async_publisher to send all queued messages immediately.
publisher . async_publisher . stop . wait!
What's next
To restrict the locations in which Pub/Sub stores message data, see
Restricting Pub/Sub resource locations .
To learn more about receiving messages, see
Choose a subscription type .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
