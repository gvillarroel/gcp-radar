---
title: "Class MessageMetadata (1.16.2) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/com.google.cloud.pubsublite.MessageMetadata
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/com.google.cloud.pubsublite.MessageMetadata
  title: "Class MessageMetadata (1.16.2) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class MessageMetadata (1.16.2)
Stay organized with collections
Save and categorize content based on your preferences.
1.16.2 (latest)
1.16.1
1.15.21
1.14.8
1.13.8
1.12.22
1.11.2
1.10.0
1.9.4
1.8.0
1.7.1
1.6.3
1.5.5
1.4.12
public abstract class MessageMetadata
Information about a message in Pub/Sub Lite. Can be encoded in the string returned by the Cloud
Pub/Sub com.google.cloud.pubsub.v1.Publisher#publish api or the com.google.pubsub.v1.PubsubMessage#getMessageId field on received messages.
Inheritance
java.lang.Object >
MessageMetadata
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
decode(String encoded)
public static MessageMetadata decode ( String encoded )
Decode a MessageMetadata from the Cloud Pub/Sub ack id.
Parameter
Name
Description
encoded
String
Returns
Type
Description
MessageMetadata
Exceptions
Type
Description
ApiException
of(Partition partition, Offset offset)
public static MessageMetadata of ( Partition partition , Offset offset )
Construct a MessageMetadata from a Partition and Offset.
Parameters
Name
Description
partition
Partition
offset
Offset
Returns
Type
Description
MessageMetadata
Constructors
MessageMetadata()
public MessageMetadata ()
Methods
encode()
public String encode ()
Encode a publish metadata as a Cloud Pub/Sub ack id.
Returns
Type
Description
String
offset()
public abstract Offset offset ()
The offset a message was assigned.
If this MessageMetadata was returned for a publish result and publish idempotence was
enabled, the offset may be -1 when the message was identified as a duplicate of an already
successfully published message, but the server did not have sufficient information to return
the message's offset at publish time. Messages received by subscribers will always have the
correct offset.
Returns
Type
Description
Offset
partition()
public abstract Partition partition ()
The partition a message was published to.
Returns
Type
Description
Partition
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
