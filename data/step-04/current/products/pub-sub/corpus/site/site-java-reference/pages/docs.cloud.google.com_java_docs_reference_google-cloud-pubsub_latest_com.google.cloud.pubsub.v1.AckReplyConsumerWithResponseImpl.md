---
title: "Class AckReplyConsumerWithResponseImpl (1.149.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.AckReplyConsumerWithResponseImpl
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.AckReplyConsumerWithResponseImpl
  title: "Class AckReplyConsumerWithResponseImpl (1.149.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Class AckReplyConsumerWithResponseImpl (1.149.0)
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
public class AckReplyConsumerWithResponseImpl implements AckReplyConsumerWithResponse
Inheritance
java.lang.Object >
AckReplyConsumerWithResponseImpl
Implements
AckReplyConsumerWithResponse
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
Constructors
AckReplyConsumerWithResponseImpl(SettableApiFuture<MessageDispatcher.AckReply> ackReplySettableApiFuture, SettableApiFuture<AckResponse> messageFuture)
public AckReplyConsumerWithResponseImpl ( SettableApiFuture<MessageDispatcher . AckReply > ackReplySettableApiFuture , SettableApiFuture<AckResponse> messageFuture )
Parameters
Name
Description
ackReplySettableApiFuture
SettableApiFuture < com.google.cloud.pubsub.v1.MessageDispatcher.AckReply >
messageFuture
SettableApiFuture < AckResponse >
Methods
ack()
public ApiFuture<AckResponse> ack ()
Acknowledges that the message has been successfully processed. The service will not send the
message again.
A future representing the server response is returned
Returns
Type
Description
ApiFuture < AckResponse >
nack()
public ApiFuture<AckResponse> nack ()
Signals that the message has not been successfully processed. The service should resend the
message.
A future representing the server response is returned
Returns
Type
Description
ApiFuture < AckResponse >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
