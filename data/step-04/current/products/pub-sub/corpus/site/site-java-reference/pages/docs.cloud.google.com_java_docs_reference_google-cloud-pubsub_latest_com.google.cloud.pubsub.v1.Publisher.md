---
title: "Class Publisher (1.149.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.Publisher
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.Publisher
  title: "Class Publisher (1.149.0) \_|\_ Java client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Class Publisher (1.149.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.149.0 (latest)
1.148.0
1.147.0
1.145.0
1.143.1
1.142.0
1.141.5
1.140.2
1.139.4
1.138.0
1.137.1
1.136.1
1.135.0
1.134.2
1.133.1
1.132.2
1.131.0
1.130.0
1.129.6
1.127.3
1.126.6
1.125.13
1.123.18
1.122.2
1.121.1
1.120.24
1.119.1
1.118.0
1.117.0
1.116.4
1.115.5
public class Publisher implements PublisherInterface
A Cloud Pub/Sub publisher , that is
associated with a specific topic at creation.
A Publisher provides built-in capabilities to automatically handle batching of
messages, controlling memory utilization, and retrying API calls on transient errors.
With customizable options that control:
Message batching: such as number of messages or max batch byte size.
Retries: such as the maximum duration of retries for a failing batch of messages.
Publisher will use the credentials set on the channel, which uses application default
credentials through GoogleCredentials#getApplicationDefault by default.
Inheritance
java.lang.Object >
Publisher
Implements
PublisherInterface
Inherited Members
Object.clone()
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.toString()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Methods
getApiMaxRequestBytes()
public static long getApiMaxRequestBytes ()
The maximum size of one request. Defined by the API.
Returns
Type
Description
long
getApiMaxRequestElementCount()
public static long getApiMaxRequestElementCount ()
The maximum number of messages in one request. Defined by the API.
Returns
Type
Description
long
newBuilder(TopicName topicName)
public static Publisher . Builder newBuilder ( TopicName topicName )
Constructs a new Builder using the given topic.
Example of creating a Publisher .
String projectName = "my_project" ;
String topicName = "my_topic" ;
ProjectTopicName topic = ProjectTopicName . create ( projectName , topicName );
Publisher publisher = Publisher . newBuilder ( topic ). build ();
try {
// ...
} finally {
// When finished with the publisher, make sure to shutdown to free up resources.
publisher . shutdown ();
publisher . awaitTermination ( 1 , TimeUnit . MINUTES );
}
Parameter
Name
Description
topicName
TopicName
Returns
Type
Description
Publisher.Builder
newBuilder(String topicName)
public static Publisher . Builder newBuilder ( String topicName )
Constructs a new Builder using the given topic.
Example of creating a Publisher .
String topic = "projects/my_project/topics/my_topic" ;
Publisher publisher = Publisher . newBuilder ( topic ). build ();
try {
// ...
} finally {
// When finished with the publisher, make sure to shutdown to free up resources.
publisher . shutdown ();
publisher . awaitTermination ( 1 , TimeUnit . MINUTES );
}
Parameter
Name
Description
topicName
String
Returns
Type
Description
Publisher.Builder
Methods
awaitTermination(long duration, TimeUnit unit)
public boolean awaitTermination ( long duration , TimeUnit unit )
Wait for all work has completed execution after a #shutdown() request, or the timeout
occurs, or the current thread is interrupted.
Call this method to make sure all resources are freed properly.
Parameters
Name
Description
duration
long
unit
TimeUnit
Returns
Type
Description
boolean
Exceptions
Type
Description
InterruptedException
getBatchingSettings()
public BatchingSettings getBatchingSettings ()
The batching settings configured on this Publisher .
Returns
Type
Description
BatchingSettings
getTopicName()
public TopicName getTopicName ()
Topic which the publisher publishes to.
Returns
Type
Description
TopicName
getTopicNameString()
public String getTopicNameString ()
Topic which the publisher publishes to.
Returns
Type
Description
String
publish(PubsubMessage message)
public ApiFuture<String> publish ( PubsubMessage message )
Schedules the publishing of a message. The publishing of the message may occur immediately or
be delayed based on the publisher batching options.
This method blocks in the downcall if using LimitExceededBehavior.Block in the flow control
settings.
Example of publishing a message.
String message = "my_message" ;
ByteString data = ByteString . copyFromUtf8 ( message );
PubsubMessage pubsubMessage = PubsubMessage . newBuilder (). setData ( data ). build ();
ApiFuture<String> messageIdFuture = publisher . publish ( pubsubMessage );
ApiFutures . addCallback ( messageIdFuture , new ApiFutureCallback<String> () {
public void onSuccess ( String messageId ) {
System . out . println ( "published with message id: " + messageId );
}
public void onFailure ( Throwable t ) {
System . out . println ( "failed to publish: " + t );
}
}, MoreExecutors . directExecutor ());
Parameter
Name
Description
message
PubsubMessage the message to publish.
Returns
Type
Description
ApiFuture < String >
the message ID wrapped in a future.
publishAllOutstanding()
public void publishAllOutstanding ()
Publish any outstanding batches if non-empty. This method sends buffered messages, but does not
wait for the send operations to complete. To wait for messages to send, call get on the
futures returned from publish .
resumePublish(String key)
public void resumePublish ( String key )
There may be non-recoverable problems with a request for an ordering key. In that case, all
subsequent requests will fail until this method is called. If the key is not currently paused,
calling this method will be a no-op.
Parameter
Name
Description
key
String The key for which to resume publishing.
shutdown()
public void shutdown ()
Schedules immediate publishing of any outstanding messages and waits until all are processed.
Sends remaining outstanding messages and prevents future calls to publish. This method
should be invoked prior to deleting the Publisher object in order to ensure that no
pending messages are lost.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
